import React, { useState, useEffect } from 'react'
import '../styles/QuizPage.css'
import { getQuestions } from '../data/questions'
import { getShuffledFocusedQuestions } from '../data/focusedQuestions'
import sounds from '../utils/sounds'

function QuizPage({ difficulty, onComplete, focusSettings = null, onBackHome, timerEnabled = true }) {
  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState([])
  const [loading, setLoading] = useState(true)
  const [timeLeft, setTimeLeft] = useState(30)
  const [songPlayed, setSongPlayed] = useState(false)
  const [questionsToShow, setQuestionsToShow] = useState(10)
  const [showHint, setShowHint] = useState(false)

  useEffect(() => {
    let qs
    if (focusSettings) {
      qs = getShuffledFocusedQuestions(focusSettings.focusArea, focusSettings.subtopic)
      // Limit to requested number of questions
      qs = qs.slice(0, focusSettings.numQuestions || 10)
      setQuestionsToShow(focusSettings.numQuestions || 10)
    } else {
      qs = getQuestions(difficulty)
      setQuestionsToShow(10)
    }
    setQuestions(qs)
    setLoading(false)
    setSongPlayed(false)
  }, [difficulty, focusSettings])

  // Timer for each question (30 seconds) - only if enabled
  useEffect(() => {
    if (loading || answered.length > currentIndex) return

    // Song feature removed

    // Only use timer if enabled 
    // For parent mode: use focusSettings.useTimer
    // For standard mode: use the timerEnabled prop
    const shouldUseTimer = focusSettings ? focusSettings.useTimer !== false : timerEnabled

    if (!shouldUseTimer) return

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          // Auto-submit empty answer when time runs out
          handleAnswer(-1)
          return 30
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [currentIndex, answered, loading, focusSettings, songPlayed])

  const handleAnswer = (selectedOptionIndex) => {
    if (answered.length > currentIndex) return // Already answered
    
    const currentQuestion = questions[currentIndex]
    const isCorrect = selectedOptionIndex === currentQuestion.correct

    const newAnswered = [...answered, {
      question: currentQuestion.question,
      correct: currentQuestion.correct,
      selected: selectedOptionIndex,
      isCorrect,
      explanation: currentQuestion.explanation,
      category: currentQuestion.category
    }]

    setAnswered(newAnswered)

    if (isCorrect) {
      setScore(score + 1)
      sounds.correct() // Play correct sound
    } else {
      sounds.incorrect() // Play incorrect sound
    }

    // Move to next question or complete quiz
    if (currentIndex < questions.length - 1) {
      setTimeout(() => {
        setTimeLeft(30) // Reset timer
        setCurrentIndex(currentIndex + 1)
      }, 1500) // Show result animation before moving to next
    } else {
      setTimeout(() => {
        sounds.levelUp() // Play level up sound
        onComplete({
          score,
          totalQuestions: questions.length,
          answers: newAnswered,
          difficulty,
          focusArea: focusSettings?.focusArea,
          subtopic: focusSettings?.subtopic
        })
      }, 1500)
    }
  }

  if (loading) {
    return <div className="quiz-page"><div className="loading">Loading...</div></div>
  }

  if (questions.length === 0) {
    return <div className="quiz-page"><div className="loading">Loading questions...</div></div>
  }

  const currentQuestion = questions[currentIndex]
  const currentAnswer = answered[currentIndex]
  const isAnswered = currentIndex < answered.length
  const isCorrect = isAnswered && currentAnswer.isCorrect

  return (
    <div className="quiz-page">
      <div className="quiz-container">
        <div className="quiz-header">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
          <div className="quiz-info">
            <span className="question-number">Question {currentIndex + 1} of {questions.length}</span>
            {(focusSettings ? focusSettings.useTimer !== false : timerEnabled) && (
              <span className={`timer-display ${timeLeft <= 10 ? 'timer-warning' : ''}`}>
                ⏱️ {timeLeft}s
              </span>
            )}
            <span className="score-badge">✨ Score: {score}/{questions.length}</span>
          </div>
        </div>

        <div className="quiz-content">
          <div className={`question-box ${isAnswered ? (isCorrect ? 'correct' : 'incorrect') : ''}`}>
            <h2 className="question-text">{currentQuestion.question}</h2>
          </div>

          <div className="options-grid">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                className={`option-btn ${
                  isAnswered
                    ? index === currentQuestion.correct
                      ? 'correct-option'
                      : index === currentAnswer.selected
                      ? 'wrong-option'
                      : ''
                    : ''
                }`}
                onClick={() => {
                  if (!isAnswered) {
                    sounds.click()
                    handleAnswer(index)
                  }
                }}
                disabled={isAnswered}
              >
                <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                <span className="option-text">{option}</span>
                {isAnswered && index === currentQuestion.correct && (
                  <span className="feedback-icon">✓</span>
                )}
                {isAnswered && index === currentAnswer.selected && !isCorrect && (
                  <span className="feedback-icon">✗</span>
                )}
              </button>
            ))}
          </div>

          {!isAnswered && difficulty === 'hard' && (
            <button className="hint-btn" onClick={() => setShowHint(!showHint)}>
              💡 {showHint ? 'Hide Hint' : 'Show Hint'}
            </button>
          )}

          {showHint && difficulty === 'hard' && !isAnswered && (
            <div className="hint-section">
              <h4>💡 How to solve this:</h4>
              <p>{currentQuestion.hint || currentQuestion.explanation}</p>
            </div>
          )}

          {isAnswered && (
            <div className={`feedback-message ${isCorrect ? 'feedback-correct' : 'feedback-wrong'}`}>
              <div className="feedback-emoji">{isCorrect ? '🎉' : '💪'}</div>
              <p className="feedback-text">
                {isCorrect ? 'Fantastic! You got it right!' : 'Not quite, but keep trying!'}
              </p>
              <p className="explanation">{currentQuestion.explanation}</p>
              {difficulty === 'hard' && (
                <div className="working-section">
                  <h5>✏️ Here's how to solve it:</h5>
                  <p className="working-text">{currentQuestion.working || currentQuestion.explanation}</p>
                </div>
              )}
              {currentIndex < questions.length - 1 && (
                <p className="next-message">Next question coming...</p>
              )}
            </div>
          )}
        </div>

        <div className="difficulty-indicator">
          {difficulty === 'easy' && '🌟 Easy Level'}
          {difficulty === 'medium' && '⭐ Medium Level'}
          {difficulty === 'hard' && '✨ Hard Level'}
          {onBackHome && (
            <button className="btn-quiz-home" onClick={onBackHome}>
              🏠 Home
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default QuizPage
