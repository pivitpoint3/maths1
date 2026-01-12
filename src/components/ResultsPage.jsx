import React, { useEffect, useState } from 'react'
import '../styles/ResultsPage.css'
import sounds from '../utils/sounds'

function ResultsPage({ results, onBackHome }) {
  const [confetti, setConfetti] = useState([])

  useEffect(() => {
    // Create confetti pieces for celebration
    if (results.score >= results.totalQuestions / 2) {
      sounds.levelUp() // Play celebration sound
      const pieces = Array.from({ length: 30 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.3,
        duration: 2 + Math.random() * 1
      }))
      setConfetti(pieces)
    }
  }, [results])

  const percentage = Math.round((results.score / results.totalQuestions) * 100)
  const correctAnswers = results.answers.filter(a => a.isCorrect).length
  const categories = {}

  results.answers.forEach(answer => {
    if (!categories[answer.category]) {
      categories[answer.category] = { correct: 0, total: 0 }
    }
    categories[answer.category].total++
    if (answer.isCorrect) {
      categories[answer.category].correct++
    }
  })

  let motivationalMessage = ''
  let celebrationEmoji = ''

  if (percentage === 100) {
    motivationalMessage = 'Perfect Score! You are a Maths Master! 🏆'
    celebrationEmoji = '🌟'
  } else if (percentage >= 80) {
    motivationalMessage = 'Excellent work! Keep it up! 🎉'
    celebrationEmoji = '⭐'
  } else if (percentage >= 60) {
    motivationalMessage = 'Great effort! Practice makes perfect! 💪'
    celebrationEmoji = '👏'
  } else if (percentage >= 40) {
    motivationalMessage = 'Good try! Keep practicing to improve! 📚'
    celebrationEmoji = '💡'
  } else {
    motivationalMessage = 'Keep learning! Every attempt helps you improve! 🚀'
    celebrationEmoji = '🌱'
  }

  return (
    <div className="results-page">
      {confetti.length > 0 && (
        <div className="confetti-container">
          {confetti.map(piece => (
            <div
              key={piece.id}
              className="confetti"
              style={{
                left: `${piece.left}%`,
                animationDelay: `${piece.delay}s`,
                animationDuration: `${piece.duration}s`
              }}
            >
              {['🎉', '⭐', '✨', '🌟', '💫'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
      )}

      <div className="results-container animation-slideIn">
        <div className="results-header">
          <div className="celebration-emoji">{celebrationEmoji}</div>
          <h1 className="results-title">Quiz Complete!</h1>
        </div>

        <div className="score-display">
          <div className="score-circle">
            <span className="score-percentage">{percentage}%</span>
            <span className="score-fraction">{results.score}/{results.totalQuestions}</span>
          </div>
          <p className="motivational-message">{motivationalMessage}</p>
        </div>

        <div className="results-stats">
          <div className="stat-card">
            <span className="stat-icon">✓</span>
            <span className="stat-label">Correct</span>
            <span className="stat-value">{correctAnswers}</span>
          </div>
          <div className="stat-card">
            <span className="stat-icon">○</span>
            <span className="stat-label">Incorrect</span>
            <span className="stat-value">{results.totalQuestions - correctAnswers}</span>
          </div>
          <div className="stat-card">
            <span className="stat-icon">📊</span>
            <span className="stat-label">Focus</span>
            <span className="stat-value stat-difficulty">
              {results.difficulty && (
                <>
                  {results.difficulty === 'easy' && '🌟'}
                  {results.difficulty === 'medium' && '⭐'}
                  {results.difficulty === 'hard' && '✨'}
                </>
              )}
              {results.focusArea && (
                <>
                  {results.focusArea === 'timesTables' && `${results.subtopic}×`}
                  {results.focusArea === 'division' && '➗'}
                  {results.focusArea === 'addition' && '➕'}
                  {results.focusArea === 'subtraction' && '➖'}
                </>
              )}
            </span>
          </div>
        </div>

        <div className="category-breakdown">
          <h3>Performance by Topic</h3>
          <div className="category-list">
            {Object.entries(categories).map(([category, stats]) => (
              <div key={category} className="category-item">
                <div className="category-info">
                  <span className="category-name">{category}</span>
                  <span className="category-score">
                    {stats.correct}/{stats.total}
                  </span>
                </div>
                <div className="category-bar">
                  <div
                    className="category-progress"
                    style={{ width: `${(stats.correct / stats.total) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="results-actions">
          <button className="btn-primary" onClick={() => {
            sounds.click()
            onBackHome()
          }}>
            🎯 Try Another Level
          </button>
        </div>

        <div className="tips-section">
          <h4>💡 Learning Tips:</h4>
          <ul>
            <li>Practice regularly to improve your skills</li>
            <li>Try the next difficulty level when you're ready</li>
            <li>Remember: mistakes help you learn!</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ResultsPage
