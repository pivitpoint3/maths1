import React, { useState } from 'react'
import '../styles/ParentMode.css'

function ParentMode({ onStartQuiz, onBackHome }) {
  const [focusArea, setFocusArea] = useState(null)
  const [selectedTable, setSelectedTable] = useState(null)
  const [useTimer, setUseTimer] = useState(true)
  const [numQuestions, setNumQuestions] = useState(10)

  const handleSelectFocus = (focus) => {
    setFocusArea(focus)
    setSelectedTable(null)
  }

  const handleSelectTable = (table) => {
    console.log('Table selected:', table)
    setSelectedTable(table)
  }

  const handleStartQuiz = () => {
    if (focusArea === 'timesTables' && !selectedTable) {
      alert('Please select a times table')
      return
    }
    onStartQuiz({
      focusArea,
      subtopic: selectedTable,
      useTimer,
      numQuestions
    })
  }

  return (
    <div className="parent-mode">
      <div className="parent-container">
        <div className="parent-header">
          <h1 className="parent-title">👨‍👩‍👧‍👦 Parent Mode</h1>
          <p className="parent-subtitle">Customize your child's learning experience</p>
        </div>

        {!focusArea && (
          <div className="focus-selection">
            <p className="selection-prompt">What would you like your child to focus on?</p>
            <div className="focus-buttons">
              <button
                className="focus-btn times-tables-btn"
                onClick={() => handleSelectFocus('timesTables')}
              >
                <span className="focus-icon">✖️</span>
                <span className="focus-label">Times Tables</span>
                <span className="focus-desc">Learn multiplication facts</span>
              </button>

              <button
                className="focus-btn division-btn"
                onClick={() => handleSelectFocus('division')}
              >
                <span className="focus-icon">➗</span>
                <span className="focus-label">Division</span>
                <span className="focus-desc">Practice division facts</span>
              </button>

              <button
                className="focus-btn subtraction-btn"
                onClick={() => handleSelectFocus('subtraction')}
              >
                <span className="focus-icon">➖</span>
                <span className="focus-label">Subtraction</span>
                <span className="focus-desc">Master subtraction</span>
              </button>

              <button
                className="focus-btn addition-btn"
                onClick={() => handleSelectFocus('addition')}
              >
                <span className="focus-icon">➕</span>
                <span className="focus-label">Addition</span>
                <span className="focus-desc">Strengthen addition skills</span>
              </button>
            </div>
          </div>
        )}

        {focusArea === 'timesTables' && !selectedTable && (
          <div className="table-selection">
            <p className="selection-prompt">Which times table should your child practice?</p>
            <div className="table-buttons">
              {[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(num => (
                <button
                  key={num}
                  className={`table-btn ${selectedTable === num ? 'selected' : ''}`}
                  onClick={() => handleSelectTable(num)}
                >
                  {num}× Table
                </button>
              ))}
            </div>
            <button
              className="btn-secondary"
              onClick={() => setFocusArea(null)}
            >
              ← Back
            </button>
          </div>
        )}

        {focusArea && selectedTable && (
          <div className="confirm-selection">
            <div className="selection-summary">
              <h2>⚙️ Quiz Settings</h2>
              
              <div className="settings-section">
                <h3>Focus Area</h3>
                <div className="summary-item">
                  <span className="summary-value">
                    {focusArea === 'timesTables' && `${selectedTable}× Times Table`}
                    {focusArea === 'division' && 'Division Facts'}
                    {focusArea === 'subtraction' && 'Subtraction'}
                    {focusArea === 'addition' && 'Addition'}
                  </span>
                </div>
              </div>

              <div className="settings-section">
                <h3>Number of Questions</h3>
                <div className="question-selector">
                  {[5, 10, 15, 20].map(num => (
                    <button
                      key={num}
                      className={`question-option ${numQuestions === num ? 'active' : ''}`}
                      onClick={() => setNumQuestions(num)}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              <div className="settings-section">
                <h3>Timer Settings</h3>
                <label className="toggle-option">
                  <input
                    type="checkbox"
                    checked={useTimer}
                    onChange={(e) => setUseTimer(e.target.checked)}
                  />
                  <span className="toggle-label">Enable 30-second timer per question</span>
                </label>
              </div>

              <div className="action-buttons">
                <button
                  className="btn-primary"
                  onClick={handleStartQuiz}
                >
                  🎮 Start Quiz
                </button>
                <button
                  className="btn-secondary"
                  onClick={() => {
                    setFocusArea(null)
                    setSelectedTable(null)
                  }}
                >
                  ← Change Settings
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <button
        className="btn-home"
        onClick={onBackHome}
      >
        🏠 Back to Home
      </button>
    </div>
  )
}

export default ParentMode
