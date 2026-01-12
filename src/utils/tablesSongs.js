// Times table learning songs using Web Audio API
// Each table has a unique, singable melody pattern

let audioContext = null;

// Initialize audio context - MUST be called after user interaction (browser requirement)
function ensureAudioContext() {
  if (!audioContext) {
    try {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
      console.log('[SONGS] AudioContext created:', audioContext.state);
    } catch (e) {
      console.error('[SONGS] AudioContext creation failed:', e);
      return null;
    }
  }

  // Resume if suspended (browser security - context must be resumed on user interaction)
  if (audioContext.state === 'suspended') {
    audioContext.resume()
      .then(() => console.log('[SONGS] AudioContext resumed'))
      .catch(e => console.error('[SONGS] Resume failed:', e));
  }

  return audioContext;
}

// Play a single note with proper envelope
function playNote(frequency, duration, startTime) {
  const ctx = ensureAudioContext();
  if (!ctx) return;

  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    // Sine wave for pleasant tone
    osc.type = 'sine';
    osc.frequency.setValueAtTime(frequency, startTime);

    // Connect to audio graph
    osc.connect(gain);
    gain.connect(ctx.destination);

    // ADSR envelope (Attack-Decay-Sustain-Release)
    gain.gain.setValueAtTime(0.001, startTime); // Silent start
    gain.gain.linearRampToValueAtTime(0.3, startTime + 0.01); // Quick attack
    gain.gain.exponentialRampToValueAtTime(0.01, startTime + duration); // Decay to near-silence

    // Play the note
    osc.start(startTime);
    osc.stop(startTime + duration);

    console.log(`[SONGS] Note: ${frequency}Hz, duration: ${(duration * 1000).toFixed(0)}ms`);
  } catch (e) {
    console.error('[SONGS] Error playing note:', e);
  }
}

// Musical notes in Hertz (standard piano frequencies)
const NOTES = {
  C4: 262, D4: 294, E4: 330, F4: 349, G4: 392, A4: 440, B4: 494,
  C5: 523, D5: 587, E5: 659, F5: 698, G5: 784, A5: 880, B5: 988,
};

// Timing constants (in seconds)
const BEAT = 0.35;
const HALF_BEAT = 0.15;
const DOUBLE_BEAT = 0.7;

// Define a unique, recognizable melody for each table
export const playSong = (tableNumber) => {
  console.log(`[SONGS] ▶️ Request to play table ${tableNumber}`);

  if (!tableNumber || tableNumber < 2 || tableNumber > 12) {
    console.error(`[SONGS] ✗ Invalid table number: ${tableNumber}`);
    return;
  }

  const ctx = ensureAudioContext();
  if (!ctx) {
    console.error('[SONGS] ✗ Failed to get audio context');
    return;
  }

  const startTime = ctx.currentTime;
  const songs = {
    2: [
      { freq: NOTES.G4, dur: BEAT },
      { freq: NOTES.G4, dur: BEAT },
      { freq: NOTES.A4, dur: BEAT },
      { freq: NOTES.B4, dur: BEAT },
      { freq: NOTES.C5, dur: DOUBLE_BEAT },
      { freq: NOTES.B4, dur: BEAT },
      { freq: NOTES.A4, dur: BEAT },
      { freq: NOTES.G4, dur: DOUBLE_BEAT },
    ],

    3: [
      { freq: NOTES.E4, dur: BEAT },
      { freq: NOTES.G4, dur: BEAT },
      { freq: NOTES.E4, dur: BEAT },
      { freq: NOTES.G4, dur: BEAT },
      { freq: NOTES.C5, dur: DOUBLE_BEAT },
      { freq: NOTES.G4, dur: BEAT },
      { freq: NOTES.E4, dur: BEAT },
      { freq: NOTES.C4, dur: DOUBLE_BEAT },
    ],

    4: [
      { freq: NOTES.C5, dur: BEAT },
      { freq: NOTES.C5, dur: BEAT },
      { freq: NOTES.G4, dur: BEAT },
      { freq: NOTES.A4, dur: BEAT },
      { freq: NOTES.B4, dur: DOUBLE_BEAT },
      { freq: NOTES.A4, dur: BEAT },
      { freq: NOTES.G4, dur: BEAT },
      { freq: NOTES.C5, dur: DOUBLE_BEAT },
    ],

    5: [
      { freq: NOTES.G4, dur: BEAT },
      { freq: NOTES.B4, dur: BEAT },
      { freq: NOTES.D5, dur: BEAT },
      { freq: NOTES.G5, dur: BEAT },
      { freq: NOTES.D5, dur: BEAT },
      { freq: NOTES.B4, dur: BEAT },
      { freq: NOTES.G4, dur: DOUBLE_BEAT },
    ],

    6: [
      { freq: NOTES.A4, dur: BEAT },
      { freq: NOTES.A4, dur: BEAT },
      { freq: NOTES.E5, dur: BEAT },
      { freq: NOTES.E5, dur: BEAT },
      { freq: NOTES.A5, dur: BEAT },
      { freq: NOTES.E5, dur: BEAT },
      { freq: NOTES.A4, dur: DOUBLE_BEAT },
    ],

    7: [
      { freq: NOTES.B4, dur: BEAT },
      { freq: NOTES.D5, dur: BEAT },
      { freq: NOTES.F5, dur: BEAT },
      { freq: NOTES.G5, dur: BEAT },
      { freq: NOTES.A5, dur: BEAT },
      { freq: NOTES.G5, dur: BEAT },
      { freq: NOTES.F5, dur: BEAT },
      { freq: NOTES.D5, dur: BEAT },
      { freq: NOTES.B4, dur: DOUBLE_BEAT },
    ],

    8: [
      { freq: NOTES.C5, dur: BEAT },
      { freq: NOTES.E5, dur: BEAT },
      { freq: NOTES.G5, dur: BEAT },
      { freq: NOTES.A5, dur: BEAT },
      { freq: NOTES.C5, dur: BEAT },
      { freq: NOTES.A5, dur: BEAT },
      { freq: NOTES.G5, dur: BEAT },
      { freq: NOTES.E5, dur: BEAT },
      { freq: NOTES.C5, dur: DOUBLE_BEAT },
    ],

    9: [
      { freq: NOTES.D4, dur: BEAT },
      { freq: NOTES.F4, dur: BEAT },
      { freq: NOTES.A4, dur: BEAT },
      { freq: NOTES.D5, dur: BEAT },
      { freq: NOTES.F5, dur: BEAT },
      { freq: NOTES.D5, dur: BEAT },
      { freq: NOTES.A4, dur: BEAT },
      { freq: NOTES.F4, dur: BEAT },
      { freq: NOTES.D4, dur: DOUBLE_BEAT },
    ],

    10: [
      { freq: NOTES.E4, dur: BEAT },
      { freq: NOTES.E4, dur: BEAT },
      { freq: NOTES.E4, dur: BEAT },
      { freq: NOTES.G4, dur: BEAT },
      { freq: NOTES.C5, dur: BEAT },
      { freq: NOTES.C5, dur: BEAT },
      { freq: NOTES.C5, dur: BEAT },
      { freq: NOTES.G4, dur: BEAT },
      { freq: NOTES.E4, dur: DOUBLE_BEAT },
    ],

    11: [
      { freq: NOTES.A4, dur: BEAT },
      { freq: NOTES.B4, dur: BEAT },
      { freq: NOTES.C5, dur: BEAT },
      { freq: NOTES.D5, dur: BEAT },
      { freq: NOTES.E5, dur: BEAT },
      { freq: NOTES.D5, dur: BEAT },
      { freq: NOTES.C5, dur: BEAT },
      { freq: NOTES.B4, dur: BEAT },
      { freq: NOTES.A4, dur: DOUBLE_BEAT },
    ],

    12: [
      { freq: NOTES.G4, dur: BEAT },
      { freq: NOTES.G4, dur: BEAT },
      { freq: NOTES.G4, dur: BEAT },
      { freq: NOTES.A4, dur: BEAT },
      { freq: NOTES.B4, dur: BEAT },
      { freq: NOTES.C5, dur: BEAT },
      { freq: NOTES.D5, dur: BEAT },
      { freq: NOTES.E5, dur: DOUBLE_BEAT },
    ],
  };

  const melody = songs[tableNumber];
  if (!melody) {
    console.error(`[SONGS] ✗ No song for table ${tableNumber}`);
    return;
  }

  try {
    let time = startTime;
    melody.forEach((note, index) => {
      playNote(note.freq, note.dur, time);
      time += note.dur;
    });
    console.log(`[SONGS] ✓ Table ${tableNumber} song started (${melody.length} notes)`);
  } catch (e) {
    console.error(`[SONGS] ✗ Error playing table ${tableNumber}:`, e);
  }
};

export default { playSong };
