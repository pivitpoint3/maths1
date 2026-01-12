// UK Key Stage aligned maths questions for ages 5-10
// KS1 (Ages 5-7): Numbers to 20, simple addition/subtraction
// KS2 Lower (Ages 7-9): Numbers to 100, multiplication/division
// KS2 Upper (Ages 9-10): Larger numbers, fractions, money

const questionBanks = {
  easy: [
    // KS1 Level - Addition and Subtraction to 20 (Extended)
    {
      question: '2 + 3 = ?',
      options: ['4', '5', '6', '7'],
      correct: 1,
      category: 'Addition',
      explanation: '2 plus 3 equals 5'
    },
    {
      question: '5 + 4 = ?',
      options: ['8', '9', '10', '11'],
      correct: 1,
      category: 'Addition',
      explanation: '5 plus 4 equals 9'
    },
    {
      question: '7 - 2 = ?',
      options: ['4', '5', '6', '9'],
      correct: 1,
      category: 'Subtraction',
      explanation: '7 minus 2 equals 5'
    },
    {
      question: '10 - 3 = ?',
      options: ['6', '7', '8', '9'],
      correct: 1,
      category: 'Subtraction',
      explanation: '10 minus 3 equals 7'
    },
    {
      question: '6 + 2 = ?',
      options: ['7', '8', '9', '10'],
      correct: 1,
      category: 'Addition',
      explanation: '6 plus 2 equals 8'
    },
    {
      question: '8 - 4 = ?',
      options: ['3', '4', '5', '6'],
      correct: 1,
      category: 'Subtraction',
      explanation: '8 minus 4 equals 4'
    },
    {
      question: '3 + 3 = ?',
      options: ['5', '6', '7', '8'],
      correct: 1,
      category: 'Addition',
      explanation: '3 plus 3 equals 6'
    },
    {
      question: '9 - 2 = ?',
      options: ['6', '7', '8', '9'],
      correct: 1,
      category: 'Subtraction',
      explanation: '9 minus 2 equals 7'
    },
    {
      question: '4 + 5 = ?',
      options: ['8', '9', '10', '11'],
      correct: 1,
      category: 'Addition',
      explanation: '4 plus 5 equals 9'
    },
    {
      question: '12 - 5 = ?',
      options: ['6', '7', '8', '9'],
      correct: 1,
      category: 'Subtraction',
      explanation: '12 minus 5 equals 7'
    },
    {
      question: '1 + 1 = ?',
      options: ['1', '2', '3', '4'],
      correct: 1,
      category: 'Addition',
      explanation: '1 plus 1 equals 2'
    },
    {
      question: '11 - 1 = ?',
      options: ['8', '9', '10', '11'],
      correct: 2,
      category: 'Subtraction',
      explanation: '11 minus 1 equals 10'
    },
    {
      question: '7 + 3 = ?',
      options: ['9', '10', '11', '12'],
      correct: 1,
      category: 'Addition',
      explanation: '7 plus 3 equals 10'
    },
    {
      question: '15 - 5 = ?',
      options: ['8', '9', '10', '11'],
      correct: 2,
      category: 'Subtraction',
      explanation: '15 minus 5 equals 10'
    },
    {
      question: '2 + 2 = ?',
      options: ['3', '4', '5', '6'],
      correct: 1,
      category: 'Addition',
      explanation: '2 plus 2 equals 4'
    },
    {
      question: '14 - 4 = ?',
      options: ['8', '9', '10', '11'],
      correct: 2,
      category: 'Subtraction',
      explanation: '14 minus 4 equals 10'
    },
    {
      question: '5 + 5 = ?',
      options: ['8', '9', '10', '11'],
      correct: 2,
      category: 'Addition',
      explanation: '5 plus 5 equals 10'
    },
    {
      question: '13 - 3 = ?',
      options: ['8', '9', '10', '11'],
      correct: 2,
      category: 'Subtraction',
      explanation: '13 minus 3 equals 10'
    },
    {
      question: '6 + 4 = ?',
      options: ['8', '9', '10', '11'],
      correct: 2,
      category: 'Addition',
      explanation: '6 plus 4 equals 10'
    },
    {
      question: '20 - 10 = ?',
      options: ['8', '9', '10', '11'],
      correct: 2,
      category: 'Subtraction',
      explanation: '20 minus 10 equals 10'
    }
  ],
  medium: [
    // KS2 Lower Level - Numbers to 100, multiplication/division basics (Extended)
    {
      question: '23 + 15 = ?',
      options: ['36', '37', '38', '39'],
      correct: 1,
      category: 'Addition',
      explanation: '23 plus 15 equals 38'
    },
    {
      question: '45 - 12 = ?',
      options: ['31', '32', '33', '34'],
      correct: 1,
      category: 'Subtraction',
      explanation: '45 minus 12 equals 33'
    },
    {
      question: '2 × 5 = ?',
      options: ['8', '10', '12', '14'],
      correct: 1,
      category: 'Multiplication',
      explanation: '2 times 5 equals 10 (5 + 5)'
    },
    {
      question: '3 × 4 = ?',
      options: ['10', '11', '12', '13'],
      correct: 2,
      category: 'Multiplication',
      explanation: '3 times 4 equals 12 (4 + 4 + 4)'
    },
    {
      question: '10 ÷ 2 = ?',
      options: ['4', '5', '6', '8'],
      correct: 1,
      category: 'Division',
      explanation: '10 divided by 2 equals 5'
    },
    {
      question: '28 + 14 = ?',
      options: ['40', '41', '42', '43'],
      correct: 2,
      category: 'Addition',
      explanation: '28 plus 14 equals 42'
    },
    {
      question: '50 - 18 = ?',
      options: ['30', '31', '32', '33'],
      correct: 1,
      category: 'Subtraction',
      explanation: '50 minus 18 equals 32'
    },
    {
      question: '5 × 3 = ?',
      options: ['12', '14', '15', '18'],
      correct: 2,
      category: 'Multiplication',
      explanation: '5 times 3 equals 15'
    },
    {
      question: '16 ÷ 4 = ?',
      options: ['3', '4', '5', '6'],
      correct: 1,
      category: 'Division',
      explanation: '16 divided by 4 equals 4'
    },
    {
      question: '36 + 27 = ?',
      options: ['60', '61', '62', '63'],
      correct: 2,
      category: 'Addition',
      explanation: '36 plus 27 equals 63'
    },
    {
      question: '2 × 10 = ?',
      options: ['18', '20', '22', '24'],
      correct: 1,
      category: 'Multiplication',
      explanation: '2 times 10 equals 20'
    },
    {
      question: '30 ÷ 5 = ?',
      options: ['4', '5', '6', '7'],
      correct: 1,
      category: 'Division',
      explanation: '30 divided by 5 equals 6'
    },
    {
      question: '17 + 13 = ?',
      options: ['28', '29', '30', '31'],
      correct: 2,
      category: 'Addition',
      explanation: '17 plus 13 equals 30'
    },
    {
      question: '62 - 22 = ?',
      options: ['38', '39', '40', '41'],
      correct: 2,
      category: 'Subtraction',
      explanation: '62 minus 22 equals 40'
    },
    {
      question: '4 × 5 = ?',
      options: ['18', '19', '20', '21'],
      correct: 2,
      category: 'Multiplication',
      explanation: '4 times 5 equals 20'
    },
    {
      question: '12 ÷ 3 = ?',
      options: ['3', '4', '5', '6'],
      correct: 1,
      category: 'Division',
      explanation: '12 divided by 3 equals 4'
    },
    {
      question: '33 + 27 = ?',
      options: ['58', '59', '60', '61'],
      correct: 2,
      category: 'Addition',
      explanation: '33 plus 27 equals 60'
    },
    {
      question: '75 - 15 = ?',
      options: ['58', '59', '60', '61'],
      correct: 2,
      category: 'Subtraction',
      explanation: '75 minus 15 equals 60'
    },
    {
      question: '6 × 2 = ?',
      options: ['10', '11', '12', '13'],
      correct: 2,
      category: 'Multiplication',
      explanation: '6 times 2 equals 12'
    },
    {
      question: '20 ÷ 4 = ?',
      options: ['4', '5', '6', '7'],
      correct: 1,
      category: 'Division',
      explanation: '20 divided by 4 equals 5'
    }
  ],
  hard: [
    // KS2 Upper Level - Larger numbers, fractions, money (Extended)
    {
      question: '125 + 47 = ?',
      options: ['170', '171', '172', '173'],
      correct: 2,
      category: 'Addition',
      explanation: '125 plus 47 equals 172'
    },
    {
      question: '234 - 89 = ?',
      options: ['143', '144', '145', '146'],
      correct: 2,
      category: 'Subtraction',
      explanation: '234 minus 89 equals 145'
    },
    {
      question: '12 × 6 = ?',
      options: ['70', '71', '72', '73'],
      correct: 2,
      category: 'Multiplication',
      explanation: '12 times 6 equals 72'
    },
    {
      question: '56 ÷ 7 = ?',
      options: ['7', '8', '9', '10'],
      correct: 1,
      category: 'Division',
      explanation: '56 divided by 7 equals 8'
    },
    {
      question: '1/2 of 16 = ?',
      options: ['6', '7', '8', '9'],
      correct: 2,
      category: 'Fractions',
      explanation: 'Half of 16 equals 8'
    },
    {
      question: '358 + 276 = ?',
      options: ['633', '634', '635', '636'],
      correct: 1,
      category: 'Addition',
      explanation: '358 plus 276 equals 634'
    },
    {
      question: '450 - 175 = ?',
      options: ['273', '274', '275', '276'],
      correct: 2,
      category: 'Subtraction',
      explanation: '450 minus 175 equals 275'
    },
    {
      question: '9 × 8 = ?',
      options: ['70', '71', '72', '73'],
      correct: 2,
      category: 'Multiplication',
      explanation: '9 times 8 equals 72'
    },
    {
      question: '1/4 of 20 = ?',
      options: ['4', '5', '6', '7'],
      correct: 1,
      category: 'Fractions',
      explanation: 'A quarter of 20 equals 5'
    },
    {
      question: '144 ÷ 12 = ?',
      options: ['10', '11', '12', '13'],
      correct: 2,
      category: 'Division',
      explanation: '144 divided by 12 equals 12'
    },
    {
      question: '247 + 153 = ?',
      options: ['398', '399', '400', '401'],
      correct: 2,
      category: 'Addition',
      explanation: '247 plus 153 equals 400'
    },
    {
      question: '300 - 157 = ?',
      options: ['141', '142', '143', '144'],
      correct: 1,
      category: 'Subtraction',
      explanation: '300 minus 157 equals 143'
    },
    {
      question: '11 × 7 = ?',
      options: ['75', '76', '77', '78'],
      correct: 2,
      category: 'Multiplication',
      explanation: '11 times 7 equals 77'
    },
    {
      question: '81 ÷ 9 = ?',
      options: ['8', '9', '10', '11'],
      correct: 1,
      category: 'Division',
      explanation: '81 divided by 9 equals 9'
    },
    {
      question: '1/3 of 18 = ?',
      options: ['5', '6', '7', '8'],
      correct: 1,
      category: 'Fractions',
      explanation: 'One third of 18 equals 6'
    },
    {
      question: '425 + 186 = ?',
      options: ['608', '609', '611', '612'],
      correct: 1,
      category: 'Addition',
      explanation: '425 plus 186 equals 611'
    },
    {
      question: '600 - 234 = ?',
      options: ['364', '365', '366', '367'],
      correct: 1,
      category: 'Subtraction',
      explanation: '600 minus 234 equals 366'
    },
    {
      question: '8 × 9 = ?',
      options: ['70', '71', '72', '73'],
      correct: 2,
      category: 'Multiplication',
      explanation: '8 times 9 equals 72'
    },
    {
      question: '1/5 of 25 = ?',
      options: ['4', '5', '6', '7'],
      correct: 1,
      category: 'Fractions',
      explanation: 'One fifth of 25 equals 5'
    },
    {
      question: '120 ÷ 10 = ?',
      options: ['10', '11', '12', '13'],
      correct: 0,
      category: 'Division',
      explanation: '120 divided by 10 equals 12'
    }
  ]
}

export function getQuestions(difficulty) {
  // Shuffle and return questions
  const questions = [...questionBanks[difficulty]]
  return questions.sort(() => Math.random() - 0.5)
}

export function getRandomQuestion(difficulty) {
  const questions = questionBanks[difficulty]
  return questions[Math.floor(Math.random() * questions.length)]
}
