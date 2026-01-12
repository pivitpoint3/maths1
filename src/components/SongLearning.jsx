import React, { useState } from 'react'
import '../styles/SongLearning.css'
import { playSong } from '../utils/tablesSongs'
import sounds from '../utils/sounds'

function SongLearning({ onBackHome }) {
  const [selectedTable, setSelectedTable] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlaySong = (tableNum) => {
    setSelectedTable(tableNum)
    setIsPlaying(true)
    
    playSong(tableNum)
    sounds.levelUp()
    
    setTimeout(() => setIsPlaying(false), 2500)
  }

  return (
    <div className="song-learning-page">
      <div className="song-container">
        <div className="song-header">
          <h1 className="song-title">🎵 Times Table Songs</h1>
          <p className="song-subtitle">Learn your times tables through music!</p>
        </div>

        <div className="song-grid">
          {[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(num => (
            <button
              key={num}
              className={`song-btn ${selectedTable === num && isPlaying ? 'playing' : ''}`}
              onClick={() => handlePlaySong(num)}
              disabled={isPlaying && selectedTable !== num}
            >
              <span className="song-table-num">{num}×</span>
              <span className="song-play-icon">▶️</span>
              <span className="song-label">Table</span>
            </button>
          ))}
        </div>

        {selectedTable && (
          <div className="song-info">
            <p>🎶 Playing the {selectedTable}× times table song...</p>
            <p className="song-tip">Listen carefully and try to remember the patterns!</p>
          </div>
        )}

        <div className="song-tips">
          <h3>💡 Tips for Learning with Songs:</h3>
          <ul>
            <li>Listen to the song multiple times</li>
            <li>Try to tap along with the rhythm</li>
            <li>Remember the melody - it helps with memory!</li>
            <li>Practice after listening to the song</li>
          </ul>
        </div>

        <button className="btn-home" onClick={onBackHome}>
          🏠 Back to Home
        </button>
      </div>
    </div>
  )
}

export default SongLearning
