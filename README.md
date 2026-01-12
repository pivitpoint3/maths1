# 🧮 Maths Learning App

An engaging, interactive maths learning application designed for children aged 5-10. The app helps young learners practice mathematics in a fun and motivating way with three difficulty levels aligned to UK Key Stage curriculum requirements.

**NEW**: Parents can now customize learning with targeted focus areas and times table songs! 🎵

## 🌟 Key Features

### 👨‍👩‍👧‍👦 **Parent Mode** (NEW!)
- **Customizable Focus Areas**:
  - ✖️ **Times Tables** (2× through 10×) - Each table has a unique, memorable song!
  - ➗ **Division** - Master division facts
  - ➕ **Addition** - Strengthen addition skills
  - ➖ **Subtraction** - Build subtraction confidence

- **Times Table Songs** - Each multiplication table (2× to 10×) has its own engaging melody to aid memorization
- **Targeted Practice** - Focus on one concept at a time
- **Settings Preview** - See what your child will practice before starting

### 🎮 **Three Difficulty Levels**
- 🌟 **Easy** (Ages 5-6) - Key Stage 1: Basic addition and subtraction
- ⭐ **Medium** (Ages 7-8) - Key Stage 2 Lower: Multiplication/division basics
- ✨ **Hard** (Ages 9-10) - Key Stage 2 Upper: Larger numbers, fractions

### 🔊 **Sound Effects & Music**
- Correct/incorrect answer feedback sounds
- Button click sounds
- Level up celebration sound
- **Times Table Songs** - Unique melody for each multiplication table
- All sounds generated with Web Audio API

### ⏱️ **Countdown Timer**
- 30-second timer per question
- Visual timer with warning when low
- Auto-advances when time expires

### 📚 **60+ Questions**
- **Easy**: 20 questions
- **Medium**: 20 questions  
- **Hard**: 20 questions
- **Parent Mode**: 10 focused questions per category

### 📊 **Learning Analytics**
- Real-time score tracking
- Performance breakdown by topic
- Motivational messages based on performance
- Celebratory confetti for good scores

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/pivitpoint3/maths1.git
cd maths1
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📖 How to Use

### **Quick Quiz Mode** (Standard Practice)
1. Click a difficulty level (Easy, Medium, or Hard)
2. Answer 10 questions from that level
3. Get instant feedback and see your score
4. View detailed results

### **Parent Mode** (Customized Learning) 🆕
1. Click the **"Parent Mode"** button on the home screen
2. Select a focus area (Times Tables, Division, Addition, Subtraction)
3. For Times Tables: Choose which table (2×, 3×, etc.)
4. Start the quiz and listen to the times table song
5. Answer 10 focused questions
6. View targeted performance results

## 🎵 Times Table Songs

Each multiplication table has a unique melody:
- **2× Table**: Ascending scale pattern
- **3× Table**: Rhythmic melody
- **4× Table**: Bouncy beat
- **5× Table**: Grand, confident tune
- **6-10×**: Progressive, increasingly complex melodies

## 📁 Project Structure

```
src/
├── components/
│   ├── HomePage.jsx          # Home & Parent Mode button
│   ├── ParentMode.jsx        # Parent customization (NEW)
│   ├── QuizPage.jsx          # Quiz with timer & songs
│   └── ResultsPage.jsx       # Results & analytics
├── data/
│   ├── questions.js          # Standard questions (60)
│   └── focusedQuestions.js   # Parent mode questions (NEW)
├── styles/
│   ├── HomePage.css
│   ├── ParentMode.css        # (NEW)
│   ├── QuizPage.css
│   └── ResultsPage.css
└── utils/
    ├── sounds.js             # Sound effects
    └── tablesSongs.js        # Times table songs (NEW)
```

## 🎓 Curriculum Alignment

### **UK Key Stage Standards**

**Key Stage 1 (Ages 5-7)** - Easy Level
- Numbers to 20, addition/subtraction facts
- Basic counting and number recognition

**Key Stage 2 Lower (Ages 7-9)** - Medium Level
- Numbers to 100, times tables (2, 5, 10)
- Division as sharing, addition/subtraction within 100

**Key Stage 2 Upper (Ages 9-10)** - Hard Level
- Numbers to 1000, all times tables (2-10)
- Fractions, complex calculations

## 💡 Learning Tips

**For Best Results:**
- Use Parent Mode to focus on one concept at a time
- Start with 2× table, progress through tables in order
- Daily 10-minute sessions work best
- Celebrate achievements
- Use different focus areas to target weak areas

## 🛠️ Development

### Build for Production
```bash
npm run build
```

### Preview Build
```bash
npm run preview
```

## 📱 Browser Support

- Chrome (latest) ✅
- Firefox (latest) ✅
- Safari (latest) ✅
- Edge (latest) ✅
- Mobile browsers ✅

## 🔒 Privacy

- No data collection
- No user accounts
- Safe for children
- No tracking

## 📝 License

ISC License

## 📞 Support

- Check [FEATURES.md](FEATURES.md) for detailed documentation
- Open an issue on GitHub for problems/suggestions

---

**Start learning maths the fun way! 🚀**

Visit **http://localhost:5173** to play! Click "Parent Mode" to customize your child's learning.
