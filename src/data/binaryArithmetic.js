export const binaryArithmeticProblems = [
  // 1.1a: 5-bit unsigned add 01101 + 10111
  {
    id: "ba-1.1-a",
    topicId: "binary-arithmetic",
    questionNumber: "1.1",
    subPart: "a",
    type: "arithmetic",
    prompt: "Perform the following 5-bit unsigned binary addition. Give the 5-bit result (ignoring any carry out) as a decimal value and determine if overflow occurred.",
    context: "01101 + 10111 (5-bit unsigned)",
    codeBlock: null,
    answerFields: [
      {
        label: "Decimal result (5-bit value)",
        expectedAnswer: "4",
        acceptableAnswers: ["4", "00100"],
        inputType: "text",
        placeholder: "Decimal result"
      },
      {
        label: "Overflow? (yes/no)",
        expectedAnswer: "yes",
        acceptableAnswers: ["yes", "Yes", "YES", "y", "Y", "true", "True", "TRUE"],
        inputType: "text",
        placeholder: "yes or no"
      }
    ],
    solution: "01101 (13) + 10111 (23) = 100100. The 5-bit result is 00100 = 4. Since 13 + 23 = 36 > 31 (max 5-bit unsigned), overflow occurs. Equivalently, there is a carry out of the MSB.",
    difficulty: "medium",
    tags: ["unsigned", "addition", "overflow", "5-bit"],
    mcqOptions: [
      { label: "Result: 4, Overflow: Yes", value: "4/yes", correct: true },
      { label: "Result: 36, Overflow: No", value: "36/no", correct: false },
      { label: "Result: 4, Overflow: No", value: "4/no", correct: false },
      { label: "Result: 36, Overflow: Yes", value: "36/yes", correct: false }
    ]
  },

  // 1.1b: 5-bit unsigned add 11001 + 00101
  {
    id: "ba-1.1-b",
    topicId: "binary-arithmetic",
    questionNumber: "1.1",
    subPart: "b",
    type: "arithmetic",
    prompt: "Perform the following 5-bit unsigned binary addition. Give the 5-bit result as a decimal value and determine if overflow occurred.",
    context: "11001 + 00101 (5-bit unsigned)",
    codeBlock: null,
    answerFields: [
      {
        label: "Decimal result (5-bit value)",
        expectedAnswer: "30",
        acceptableAnswers: ["30", "11110"],
        inputType: "text",
        placeholder: "Decimal result"
      },
      {
        label: "Overflow? (yes/no)",
        expectedAnswer: "no",
        acceptableAnswers: ["no", "No", "NO", "n", "N", "false", "False", "FALSE"],
        inputType: "text",
        placeholder: "yes or no"
      }
    ],
    solution: "11001 (25) + 00101 (5) = 11110 = 30. Since 25 + 5 = 30 <= 31 (max 5-bit unsigned), no overflow. There is no carry out of the MSB.",
    difficulty: "medium",
    tags: ["unsigned", "addition", "overflow", "5-bit"],
    mcqOptions: [
      { label: "Result: 30, Overflow: No", value: "30/no", correct: true },
      { label: "Result: 30, Overflow: Yes", value: "30/yes", correct: false },
      { label: "Result: 14, Overflow: Yes", value: "14/yes", correct: false },
      { label: "Result: 31, Overflow: No", value: "31/no", correct: false }
    ]
  },

  // 1.2a: 6-bit two's comp add 110011 + 001001
  {
    id: "ba-1.2-a",
    topicId: "binary-arithmetic",
    questionNumber: "1.2",
    subPart: "a",
    type: "arithmetic",
    prompt: "Perform the following 6-bit two's complement binary addition. Give the result as a signed decimal value and determine if overflow occurred.",
    context: "110011 + 001001 (6-bit two's complement)",
    codeBlock: null,
    answerFields: [
      {
        label: "Signed decimal result",
        expectedAnswer: "-4",
        acceptableAnswers: ["-4"],
        inputType: "text",
        placeholder: "Decimal result (may be negative)"
      },
      {
        label: "Overflow? (yes/no)",
        expectedAnswer: "no",
        acceptableAnswers: ["no", "No", "NO", "n", "N", "false", "False", "FALSE"],
        inputType: "text",
        placeholder: "yes or no"
      }
    ],
    solution: "110011 = -13, 001001 = 9. -13 + 9 = -4. Binary: 110011 + 001001 = 111100 (carry discarded). 111100 in 6-bit two's complement = -4. No overflow: adding a negative and positive number can never overflow.",
    difficulty: "medium",
    tags: ["twos-complement", "addition", "overflow", "6-bit"],
    mcqOptions: [
      { label: "Result: -4, Overflow: No", value: "-4/no", correct: true },
      { label: "Result: -4, Overflow: Yes", value: "-4/yes", correct: false },
      { label: "Result: 60, Overflow: No", value: "60/no", correct: false },
      { label: "Result: -22, Overflow: Yes", value: "-22/yes", correct: false }
    ]
  },

  // 1.2b: 8-bit two's comp add 10110100 + 00101110
  {
    id: "ba-1.2-b",
    topicId: "binary-arithmetic",
    questionNumber: "1.2",
    subPart: "b",
    type: "arithmetic",
    prompt: "Perform the following 8-bit two's complement binary addition. Give the result as a signed decimal value and determine if overflow occurred.",
    context: "10110100 + 00101110 (8-bit two's complement)",
    codeBlock: null,
    answerFields: [
      {
        label: "Signed decimal result",
        expectedAnswer: "-30",
        acceptableAnswers: ["-30"],
        inputType: "text",
        placeholder: "Decimal result (may be negative)"
      },
      {
        label: "Overflow? (yes/no)",
        expectedAnswer: "no",
        acceptableAnswers: ["no", "No", "NO", "n", "N", "false", "False", "FALSE"],
        inputType: "text",
        placeholder: "yes or no"
      }
    ],
    solution: "10110100 = -76, 00101110 = 46. -76 + 46 = -30. Binary: 10110100 + 00101110 = 11100010 (carry discarded). 11100010 in 8-bit two's complement = -30. No overflow: adding a negative and positive number can never cause overflow.",
    difficulty: "medium",
    tags: ["twos-complement", "addition", "overflow", "8-bit"],
    mcqOptions: [
      { label: "Result: -30, Overflow: No", value: "-30/no", correct: true },
      { label: "Result: -30, Overflow: Yes", value: "-30/yes", correct: false },
      { label: "Result: 226, Overflow: No", value: "226/no", correct: false },
      { label: "Result: -122, Overflow: Yes", value: "-122/yes", correct: false }
    ]
  },

  // 1.3a: 8-bit two's comp subtract 10011100 - 11010110
  {
    id: "ba-1.3-a",
    topicId: "binary-arithmetic",
    questionNumber: "1.3",
    subPart: "a",
    type: "arithmetic",
    prompt: "Perform the following 8-bit two's complement subtraction (A - B = A + (-B)). Give the result as a signed decimal value and determine if overflow occurred.",
    context: "10011100 - 11010110 (8-bit two's complement)",
    codeBlock: null,
    answerFields: [
      {
        label: "Signed decimal result",
        expectedAnswer: "-58",
        acceptableAnswers: ["-58"],
        inputType: "text",
        placeholder: "Decimal result (may be negative)"
      },
      {
        label: "Overflow? (yes/no)",
        expectedAnswer: "no",
        acceptableAnswers: ["no", "No", "NO", "n", "N", "false", "False", "FALSE"],
        inputType: "text",
        placeholder: "yes or no"
      }
    ],
    solution: "A = 10011100 = -100, B = 11010110 = -42. A - B = -100 - (-42) = -100 + 42 = -58. Negate B: ~11010110 + 1 = 00101001 + 1 = 00101010 = 42. Then 10011100 + 00101010 = 11000110. 11000110 in 8-bit two's complement = -58. No overflow: one operand is negative and the other is positive.",
    difficulty: "hard",
    tags: ["twos-complement", "subtraction", "overflow", "8-bit"],
    mcqOptions: [
      { label: "Result: -58, Overflow: No", value: "-58/no", correct: true },
      { label: "Result: -58, Overflow: Yes", value: "-58/yes", correct: false },
      { label: "Result: -142, Overflow: Yes", value: "-142/yes", correct: false },
      { label: "Result: 198, Overflow: No", value: "198/no", correct: false }
    ]
  },

  // 1.3b: 8-bit two's comp subtract 10100110 - 00110010
  {
    id: "ba-1.3-b",
    topicId: "binary-arithmetic",
    questionNumber: "1.3",
    subPart: "b",
    type: "arithmetic",
    prompt: "Perform the following 8-bit two's complement subtraction (A - B = A + (-B)). Give the result as a signed decimal value and determine if overflow occurred.",
    context: "10100110 - 00110010 (8-bit two's complement)",
    codeBlock: null,
    answerFields: [
      {
        label: "Signed decimal result",
        expectedAnswer: "116",
        acceptableAnswers: ["116"],
        inputType: "text",
        placeholder: "Decimal result (may be negative)"
      },
      {
        label: "Overflow? (yes/no)",
        expectedAnswer: "yes",
        acceptableAnswers: ["yes", "Yes", "YES", "y", "Y", "true", "True", "TRUE"],
        inputType: "text",
        placeholder: "yes or no"
      }
    ],
    solution: "A = 10100110 = -90, B = 00110010 = 50. A - B = -90 - 50 = -140, which is outside [-128, 127]. Negate B: ~00110010 + 1 = 11001101 + 1 = 11001110. Then 10100110 + 11001110 = 01110100 (carry discarded). 01110100 = 116 (positive!). Both operands are negative but the result is positive, so overflow occurred. The true answer -140 cannot be represented in 8 bits.",
    difficulty: "hard",
    tags: ["twos-complement", "subtraction", "overflow", "8-bit"],
    mcqOptions: [
      { label: "Result: 116, Overflow: Yes", value: "116/yes", correct: true },
      { label: "Result: -140, Overflow: No", value: "-140/no", correct: false },
      { label: "Result: 116, Overflow: No", value: "116/no", correct: false },
      { label: "Result: -40, Overflow: No", value: "-40/no", correct: false }
    ]
  },

  // 1.4: What does overflow signify?
  {
    id: "ba-1.4",
    topicId: "binary-arithmetic",
    questionNumber: "1.4",
    subPart: null,
    type: "short-answer",
    selfGrade: true,
    prompt: "What does overflow signify in the context of binary arithmetic?",
    context: null,
    codeBlock: null,
    answerFields: [
      {
        label: "Your answer",
        expectedAnswer: "The result cannot be represented with the given number of bits",
        acceptableAnswers: [
          "The result cannot be represented with the given number of bits",
          "The result is too large or too small to fit in the given number of bits",
          "The true result exceeds the representable range"
        ],
        inputType: "multiline",
        placeholder: "Explain what overflow means..."
      }
    ],
    solution: "Overflow signifies that the true arithmetic result cannot be represented with the given number of bits. In unsigned arithmetic, overflow occurs when there is a carry out of the MSB. In two's complement, overflow occurs when adding two positive numbers produces a negative result, or adding two negative numbers produces a positive result.",
    difficulty: "easy",
    tags: ["overflow", "conceptual"],
    mcqOptions: [
      { label: "The result cannot be represented with the given number of bits", value: "cannot-represent", correct: true },
      { label: "The computation takes too long to complete", value: "too-long", correct: false },
      { label: "The input values are too large", value: "input-large", correct: false },
      { label: "The binary representation has too many leading zeros", value: "leading-zeros", correct: false }
    ]
  },

  // 1.5: 4-bit unsigned add 1111 + 1010
  {
    id: "ba-1.5",
    topicId: "binary-arithmetic",
    questionNumber: "1.5",
    subPart: null,
    type: "arithmetic",
    prompt: "Perform the following 4-bit unsigned binary addition. Give the 4-bit result as a decimal value and determine if overflow occurred.",
    context: "1111 + 1010 (4-bit unsigned)",
    codeBlock: null,
    answerFields: [
      {
        label: "Decimal result (4-bit value)",
        expectedAnswer: "9",
        acceptableAnswers: ["9", "1001"],
        inputType: "text",
        placeholder: "Decimal result"
      },
      {
        label: "Overflow? (yes/no)",
        expectedAnswer: "yes",
        acceptableAnswers: ["yes", "Yes", "YES", "y", "Y", "true", "True", "TRUE"],
        inputType: "text",
        placeholder: "yes or no"
      }
    ],
    solution: "1111 (15) + 1010 (10) = 11001. The 4-bit result is 1001 = 9. Since 15 + 10 = 25 > 15 (max 4-bit unsigned), overflow occurs. There is a carry out of the MSB.",
    difficulty: "medium",
    tags: ["unsigned", "addition", "overflow", "4-bit"],
    mcqOptions: [
      { label: "Result: 9, Overflow: Yes", value: "9/yes", correct: true },
      { label: "Result: 25, Overflow: No", value: "25/no", correct: false },
      { label: "Result: 9, Overflow: No", value: "9/no", correct: false },
      { label: "Result: 5, Overflow: Yes", value: "5/yes", correct: false }
    ]
  },

  // 1.6: 4-bit two's comp add 1111 + 1010
  {
    id: "ba-1.6",
    topicId: "binary-arithmetic",
    questionNumber: "1.6",
    subPart: null,
    type: "arithmetic",
    prompt: "Perform the following 4-bit two's complement binary addition. Give the result as a signed decimal value and determine if overflow occurred.",
    context: "1111 + 1010 (4-bit two's complement)",
    codeBlock: null,
    answerFields: [
      {
        label: "Signed decimal result",
        expectedAnswer: "-7",
        acceptableAnswers: ["-7"],
        inputType: "text",
        placeholder: "Decimal result (may be negative)"
      },
      {
        label: "Overflow? (yes/no)",
        expectedAnswer: "no",
        acceptableAnswers: ["no", "No", "NO", "n", "N", "false", "False", "FALSE"],
        inputType: "text",
        placeholder: "yes or no"
      }
    ],
    solution: "In 4-bit two's complement: 1111 = -1, 1010 = -6. -1 + (-6) = -7. Binary: 1111 + 1010 = 11001, the 4-bit result is 1001 = -7. Since -7 is within [-8, 7], no overflow. Both operands are negative and the result is negative, so no overflow.",
    difficulty: "medium",
    tags: ["twos-complement", "addition", "overflow", "4-bit"],
    mcqOptions: [
      { label: "Result: -7, Overflow: No", value: "-7/no", correct: true },
      { label: "Result: -7, Overflow: Yes", value: "-7/yes", correct: false },
      { label: "Result: 9, Overflow: Yes", value: "9/yes", correct: false },
      { label: "Result: -5, Overflow: No", value: "-5/no", correct: false }
    ]
  },

  // 1.7: 4-bit two's comp subtract 1010 - 1111
  {
    id: "ba-1.7",
    topicId: "binary-arithmetic",
    questionNumber: "1.7",
    subPart: null,
    type: "arithmetic",
    prompt: "Perform the following 4-bit two's complement subtraction (A - B = A + (-B)). Give the result as a signed decimal value and determine if overflow occurred.",
    context: "1010 - 1111 (4-bit two's complement)",
    codeBlock: null,
    answerFields: [
      {
        label: "Signed decimal result",
        expectedAnswer: "-5",
        acceptableAnswers: ["-5"],
        inputType: "text",
        placeholder: "Decimal result (may be negative)"
      },
      {
        label: "Overflow? (yes/no)",
        expectedAnswer: "no",
        acceptableAnswers: ["no", "No", "NO", "n", "N", "false", "False", "FALSE"],
        inputType: "text",
        placeholder: "yes or no"
      }
    ],
    solution: "A = 1010 = -6, B = 1111 = -1. A - B = -6 - (-1) = -6 + 1 = -5. Negate B: ~1111 + 1 = 0000 + 1 = 0001. Then 1010 + 0001 = 1011 = -5. Since -5 is within [-8, 7], no overflow. One operand is negative and the other is positive, so no overflow possible.",
    difficulty: "medium",
    tags: ["twos-complement", "subtraction", "overflow", "4-bit"],
    mcqOptions: [
      { label: "Result: -5, Overflow: No", value: "-5/no", correct: true },
      { label: "Result: -5, Overflow: Yes", value: "-5/yes", correct: false },
      { label: "Result: -7, Overflow: No", value: "-7/no", correct: false },
      { label: "Result: 11, Overflow: Yes", value: "11/yes", correct: false }
    ]
  }
];
