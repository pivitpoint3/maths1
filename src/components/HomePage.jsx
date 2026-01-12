import React, { useState } from 'react'
import '../styles/HomePage.css'
import sounds from '../utils/sounds'

function HomePage({ onSelectDifficulty, onParentMode }) {
  const [timerEnabled, setTimerEnabled] = useState(true)

  const handleDifficultyClick = (level) => {
    sounds.click()
    onSelectDifficulty(level, timerEnabled)
  }

  const handleParentModeClick = () => {
    sounds.click()
    onParentMode()
  }
  return (
    <div className="home-page">
      <div className="home-container animation-slideIn">
        <div className="header">
          <h1 className="title">🧮 Maths Master</h1>
          <p className="subtitle">Learn Maths the Fun Way!</p>
        </div>

        <div className="intro-text">
          <p>Select your difficulty level and start solving fun maths problems!</p>
          <p className="age-info">📚 Perfect for ages 5-10</p>
        </div>

        <div className="timer-toggle-section">
          <label className="timer-toggle">
            <input
              type="checkbox"
              checked={timerEnabled}
              onChange={(e) => setTimerEnabled(e.target.checked)}
            />
            <span className="toggle-text">⏱️ Enable Timer (30 seconds per question)</span>
          </label>
        </div>

        <div className="difficulty-buttons">
          <button
            className="difficulty-btn easy-btn"
            onClick={() => handleDifficultyClick('easy')}
          >
            <span className="level-icon">🌟</span>
            <span className="level-name">Easy</span>
            <span className="level-desc">Ages 5-6</span>
          </button>

          <button
            className="difficulty-btn medium-btn"
            onClick={() => handleDifficultyClick('medium')}
          >
            <span className="level-icon">⭐</span>
            <span className="level-name">Medium</span>
            <span className="level-desc">Ages 7-8</span>
          </button>

          <button
            className="difficulty-btn hard-btn"
            onClick={() => handleDifficultyClick('hard')}
          >
            <span className="level-icon">✨</span>
            <span className="level-name">Hard</span>
            <span className="level-desc">Ages 9-10</span>
          </button>
        </div>

        <div className="parent-mode-section">
          <button
            className="parent-mode-btn"
            onClick={handleParentModeClick}
          >
            <span className="parent-icon">👨‍👩‍👧‍👦</span>
            <span className="parent-text">Parent Mode</span>
            <span className="parent-desc">Customize learning</span>
          </button>
        </div>

        <div className="features">
          <div className="feature">
            <span className="feature-icon">🎯</span>
            <span>Smart Questions</span>
          </div>
          <div className="feature">
            <span className="feature-icon">⏱️</span>
            <span>Fun Timer</span>
          </div>
          <div className="feature">
            <span className="feature-icon">🎵</span>
            <span>Learning Songs</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
