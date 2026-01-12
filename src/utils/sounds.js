// Sound effects using Web Audio API
const audioContext = new (window.AudioContext || window.webkitAudioContext)()

export const sounds = {
  correct: () => {
    const now = audioContext.currentTime
    const osc = audioContext.createOscillator()
    const gain = audioContext.createGain()

    osc.connect(gain)
    gain.connect(audioContext.destination)

    osc.frequency.setValueAtTime(523.25, now) // C5
    osc.frequency.setValueAtTime(659.25, now + 0.1) // E5
    osc.frequency.setValueAtTime(783.99, now + 0.2) // G5

    gain.gain.setValueAtTime(0.3, now)
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3)

    osc.start(now)
    osc.stop(now + 0.3)
  },

  incorrect: () => {
    const now = audioContext.currentTime
    const osc = audioContext.createOscillator()
    const gain = audioContext.createGain()

    osc.connect(gain)
    gain.connect(audioContext.destination)

    osc.frequency.setValueAtTime(300, now)
    osc.frequency.setValueAtTime(200, now + 0.1)

    gain.gain.setValueAtTime(0.2, now)
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2)

    osc.start(now)
    osc.stop(now + 0.2)
  },

  click: () => {
    const now = audioContext.currentTime
    const osc = audioContext.createOscillator()
    const gain = audioContext.createGain()

    osc.connect(gain)
    gain.connect(audioContext.destination)

    osc.frequency.setValueAtTime(800, now)
    gain.gain.setValueAtTime(0.1, now)
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1)

    osc.start(now)
    osc.stop(now + 0.1)
  },

  levelUp: () => {
    const now = audioContext.currentTime
    const osc = audioContext.createOscillator()
    const gain = audioContext.createGain()

    osc.connect(gain)
    gain.connect(audioContext.destination)

    osc.frequency.setValueAtTime(392, now) // G4
    osc.frequency.setValueAtTime(523.25, now + 0.1) // C5
    osc.frequency.setValueAtTime(659.25, now + 0.2) // E5
    osc.frequency.setValueAtTime(783.99, now + 0.3) // G5

    gain.gain.setValueAtTime(0.3, now)
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4)

    osc.start(now)
    osc.stop(now + 0.4)
  }
}

export default sounds
