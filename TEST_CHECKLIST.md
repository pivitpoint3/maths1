# Complete Test Checklist - Maths Master App

## 🎮 CRITICAL FIXES IMPLEMENTED

### 1. ✅ TIMER TOGGLE ON HOME PAGE
- **Location**: Home page (main screen)
- **Test**: Look for checkbox: "⏱️ Enable Timer (30 seconds per question)"
- **Expected**: Toggle ON/OFF
  - When ON: Timer appears on Easy/Medium/Hard quizzes
  - When OFF: No timer shown on Easy/Medium/Hard quizzes
- **Note**: Parent Mode has separate timer toggle

### 2. ✅ PARENT MODE - TIMES TABLE SELECTION FIX
- **Location**: Click "Parent Mode" → Click "Times Tables" button
- **Test Steps**:
  1. Click "Parent Mode" on home page
  2. Click "✖️ Times Tables" button
  3. Click any times table button (2-12)
  4. **SHOULD SEE**: Settings screen with:
     - Focus Area: "5× Times Table" (or whatever you selected)
     - Number of Questions: Select 5, 10, 15, or 20
     - Timer Settings: Toggle checkbox
     - Song Learning: Toggle checkbox
  5. Click "Start Quiz" button
  6. Quiz should load with correct number of questions
- **Previously Broken**: Button clicks weren't progressing to settings
- **Now Fixed**: Complete state management flow working

### 3. ✅ SONGS PLAYBACK
- **Test Method 1 - Song Learning Page**:
  1. Click "🎵 Song Learning" on home page
  2. See 11 buttons (2× through 12×)
  3. Click any button (e.g., "5×")
  4. **SHOULD HEAR**: Musical melody playing
  5. Button should show playing state
- **Test Method 2 - Parent Mode Quiz**:
  1. Parent Mode → Times Tables → Select 5×
  2. Enable "🎵 Song Learning" checkbox
  3. Start Quiz
  4. **SHOULD HEAR**: Song plays at quiz start
- **Previously Broken**: Songs weren't playing at all (audioContext issue)
- **Now Fixed**: Lazy-loaded audioContext with proper error handling

### 4. ✅ HARD MODE - HINT SYSTEM
- **Test**:
  1. Click "Hard" on home page
  2. Answer a question (before answering)
  3. **SHOULD SEE**: "💡 Show Hint" button between options and feedback
  4. Click "Show Hint"
  5. **SHOULD SEE**: Yellow box with "How to solve this:" and explanation
  6. Answer the question
  7. **SHOULD SEE**: New blue "✏️ Here's how to solve it:" section showing the working
- **Note**: Hint only shows BEFORE answering
- **Working section**: Shows AFTER answering (only on Hard mode)

### 5. ✅ REMOVE TIMER FROM EASY/MEDIUM/HARD
- **Test**:
  1. Home page - toggle timer OFF (uncheck box)
  2. Click "Easy" difficulty
  3. **SHOULD SEE**: NO timer display (no "⏱️ 30s" shown)
  4. Go back home - toggle timer ON
  5. Click "Easy" again
  6. **SHOULD SEE**: Timer display appears
- **Easy/Medium/Hard**: Respect the home page toggle
- **Parent Mode**: Has its own toggle in settings

### 6. ✅ HOME BUTTON ON ALL PAGES
- **Test on each page**:
  - Quiz page: "🏠 Home" button at bottom right
  - Results page: "🏠 Home" button at bottom
  - Parent Mode: "🏠 Home" button at bottom
  - Song Learning: "🏠 Home" button at bottom
- **Click any**: Returns to home page

---

## 🧪 COMPLETE TEST FLOW

### Flow 1: Test Timer Toggle
```
Home Page (Timer OFF)
  ↓
Easy/Medium/Hard (NO timer shown)
  ↓
Answer questions, see results
  ↓
Click 🏠 Home
  ↓
Toggle Timer ON
  ↓
Easy/Medium/Hard (Timer SHOWS)
```

### Flow 2: Test Parent Mode Times Tables (CRITICAL)
```
Home Page
  ↓
Click "Parent Mode"
  ↓
Click "Times Tables" 
  ↓
Click "7× Table" ← MUST PROGRESS
  ↓
Settings Screen (should show "7× Times Table")
  ↓
Select "15 questions"
  ↓
Toggle Timer ON
  ↓
Toggle Song ON
  ↓
Click "Start Quiz"
  ↓
Quiz loads with 15 questions
  ↓
Song plays at start (if enabled)
  ↓
Answer questions
  ↓
See results with "7× Times Table" shown
```

### Flow 3: Test Songs
```
Home Page
  ↓
Click "Song Learning"
  ↓
Click "11×" button
  ↓
HEAR melody, button pulses
  ↓
Wait for song to finish
  ↓
Click "Home"
```

### Flow 4: Test Hard Mode Hints
```
Home Page (Timer toggle doesn't matter)
  ↓
Click "Hard"
  ↓
See first question
  ↓
Click "💡 Show Hint" ← BEFORE answering
  ↓
See yellow hint box with explanation
  ↓
Click any answer option
  ↓
See feedback with "✏️ Here's how to solve it:" section
  ↓
Blue working section shows solution steps
```

---

## 📋 VERIFICATION CHECKLIST

- [ ] Timer toggle appears on home page
- [ ] Timer OFF hides timer on Easy/Med/Hard quizzes
- [ ] Timer ON shows timer on Easy/Med/Hard quizzes
- [ ] Parent Mode - Select times table progresses correctly
- [ ] Parent Mode - Question count dropdown works
- [ ] Parent Mode - Timer toggle works
- [ ] Parent Mode - Song toggle works
- [ ] Parent Mode - Quiz loads with correct settings
- [ ] Songs play on Song Learning page (click button, hear melody)
- [ ] Songs play when starting Parent Mode times table quiz
- [ ] Hard mode shows "💡 Show Hint" button
- [ ] Hint shows before answering
- [ ] Working section shows after answering (hard mode only)
- [ ] Home button exists on all pages
- [ ] Home button works from all pages
- [ ] No JavaScript errors in console

---

## 🔴 IF SOMETHING STILL DOESN'T WORK

**Check Browser Console** (F12 → Console tab):
- Songs: Look for "Playing X× song" messages
- Errors: Any red error messages
- Parent Mode: Selection flow messages

**Common Issues**:
- Songs: Check if sound is enabled on your device
- Parent Mode: Clear browser cache if stuck
- Timer: Toggle on home page might need page refresh

---

## 🎯 SUCCESS CRITERIA

✅ All 6 features working properly
✅ Parent Mode times table selection progresses
✅ Songs play without errors
✅ Hard mode hints display correctly
✅ Timer respects toggle setting
✅ Home buttons work everywhere

**Status: READY FOR FULL TESTING**
