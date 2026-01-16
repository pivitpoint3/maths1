import React, { useState } from 'react'
import './App.css'
import HomePage from './components/HomePage'
import ParentMode from './components/ParentMode'
import QuizPage from './components/QuizPage'
import ResultsPage from './components/ResultsPage'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [difficulty, setDifficulty] = useState(null)
  const [focusSettings, setFocusSettings] = useState(null)
  const [quizResults, setQuizResults] = useState(null)
  const [timerEnabled, setTimerEnabled] = useState(true)

  const handleSelectDifficulty = (level, timer = true) => {
    setDifficulty(level)
    setTimerEnabled(timer)
    setCurrentPage('quiz')
  }

  const handleParentModeStart = (settings) => {
    setFocusSettings(settings)
    setCurrentPage('quiz')
  }

  const handleQuizComplete = (results) => {
    setQuizResults(results)
    setCurrentPage('results')
  }

  const handleBackHome = () => {
    setCurrentPage('home')
    setDifficulty(null)
    setFocusSettings(null)
    setQuizResults(null)
  }

  const handleBackToHome = () => {
    handleBackHome()
  }

  return (
    <div className="app">
      {currentPage === 'home' && (
        <HomePage 
          onSelectDifficulty={handleSelectDifficulty}
          onParentMode={() => setCurrentPage('parent')}
        />
      )}
      {currentPage === 'parent' && (
        <ParentMode
          onStartQuiz={handleParentModeStart}
          onBackHome={handleBackHome}
        />
      )}
      {currentPage === 'quiz' && (
        <QuizPage 
          difficulty={difficulty} 
          onComplete={handleQuizComplete}
          focusSettings={focusSettings}
          onBackHome={handleBackHome}
          timerEnabled={timerEnabled}
        />
      )}
      {currentPage === 'results' && quizResults && (
        <ResultsPage results={quizResults} onBackHome={handleBackHome} />
      )}
    </div>
  )
}

export default App
//rebuild trigger.