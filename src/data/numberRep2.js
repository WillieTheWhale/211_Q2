export const numberRep2Problems = [
  // 1.1: Unsigned and signed interpretation of 0b101111
  {
    id: "nr2-1.1",
    topicId: "number-rep-2",
    questionNumber: "1.1",
    subPart: null,
    type: "conversion",
    prompt: "Given the 6-bit binary value 0b101111, what is the unsigned interpretation and the signed (two's complement) interpretation?",
    context: "Binary: 0b101111 (6 bits)",
    codeBlock: null,
    answerFields: [
      {
        label: "Unsigned interpretation",
        expectedAnswer: "47",
        acceptableAnswers: ["47"],
        inputType: "number",
        placeholder: "Decimal value"
      },
      {
        label: "Signed (two's complement) interpretation",
        expectedAnswer: "-17",
        acceptableAnswers: ["-17"],
        inputType: "text",
        placeholder: "Decimal value (may be negative)"
      }
    ],
    solution: "Unsigned: 0b101111 = 32 + 8 + 4 + 2 + 1 = 47.\nSigned (6-bit two's complement): The MSB is 1, so it is negative. To find the magnitude, invert and add 1: 010000 + 1 = 010001 = 17. So the signed value is -17.",
    difficulty: "medium",
    tags: ["unsigned", "signed", "twos-complement", "interpretation"],
    mcqOptions: [
      { label: "Unsigned: 47, Signed: -17", value: "47/-17", correct: true },
      { label: "Unsigned: 47, Signed: -15", value: "47/-15", correct: false },
      { label: "Unsigned: 46, Signed: -18", value: "46/-18", correct: false },
      { label: "Unsigned: 47, Signed: -16", value: "47/-16", correct: false }
    ]
  },

  // 1.2: Unique values with 5 bits
  {
    id: "nr2-1.2",
    topicId: "number-rep-2",
    questionNumber: "1.2",
    subPart: null,
    type: "range",
    prompt: "How many unique values can be represented with 5 bits?",
    context: null,
    codeBlock: null,
    answerFields: [
      {
        label: "Unique values",
        expectedAnswer: "32",
        acceptableAnswers: ["32", "2^5", "2^(5)"],
        inputType: "number",
        placeholder: "Enter a number"
      }
    ],
    solution: "With N bits you can represent 2^N unique values. 2^5 = 32.",
    difficulty: "easy",
    tags: ["bits", "unique-values", "powers-of-2"],
    mcqOptions: [
      { label: "16", value: "16", correct: false },
      { label: "31", value: "31", correct: false },
      { label: "32", value: "32", correct: true },
      { label: "64", value: "64", correct: false }
    ]
  },

  // 1.3: Two's complement range with 5 bits
  {
    id: "nr2-1.3",
    topicId: "number-rep-2",
    questionNumber: "1.3",
    subPart: null,
    type: "range",
    prompt: "What is the range of values representable in two's complement with 5 bits?",
    context: null,
    codeBlock: null,
    answerFields: [
      {
        label: "Minimum value",
        expectedAnswer: "-16",
        acceptableAnswers: ["-16", "-(2^4)", "-2^4"],
        inputType: "text",
        placeholder: "Minimum (may be negative)"
      },
      {
        label: "Maximum value",
        expectedAnswer: "15",
        acceptableAnswers: ["15", "2^4 - 1", "2^4-1", "2^(4)-1"],
        inputType: "number",
        placeholder: "Maximum"
      }
    ],
    solution: "For N-bit two's complement: range is [-(2^(N-1)), 2^(N-1) - 1]. With 5 bits: [-(2^4), 2^4 - 1] = [-16, 15].",
    difficulty: "easy",
    tags: ["twos-complement", "range", "signed"],
    mcqOptions: [
      { label: "[-16, 15]", value: "-16/15", correct: true },
      { label: "[-15, 16]", value: "-15/16", correct: false },
      { label: "[-32, 31]", value: "-32/31", correct: false },
      { label: "[-16, 16]", value: "-16/16", correct: false }
    ]
  },

  // 1.4: Unsigned range with 5 bits
  {
    id: "nr2-1.4",
    topicId: "number-rep-2",
    questionNumber: "1.4",
    subPart: null,
    type: "range",
    prompt: "What is the range of values representable as unsigned with 5 bits?",
    context: null,
    codeBlock: null,
    answerFields: [
      {
        label: "Minimum value",
        expectedAnswer: "0",
        acceptableAnswers: ["0"],
        inputType: "number",
        placeholder: "Minimum"
      },
      {
        label: "Maximum value",
        expectedAnswer: "31",
        acceptableAnswers: ["31", "2^5 - 1", "2^5-1", "2^(5)-1"],
        inputType: "number",
        placeholder: "Maximum"
      }
    ],
    solution: "For N-bit unsigned: range is [0, 2^N - 1]. With 5 bits: [0, 2^5 - 1] = [0, 31].",
    difficulty: "easy",
    tags: ["unsigned", "range"],
    mcqOptions: [
      { label: "[0, 31]", value: "0/31", correct: true },
      { label: "[0, 32]", value: "0/32", correct: false },
      { label: "[1, 32]", value: "1/32", correct: false },
      { label: "[0, 15]", value: "0/15", correct: false }
    ]
  },

  // 1.5a: 12-bit unsigned smallest
  {
    id: "nr2-1.5-a",
    topicId: "number-rep-2",
    questionNumber: "1.5",
    subPart: "a",
    type: "range",
    prompt: "What is the smallest value that can be represented with a 12-bit unsigned integer?",
    context: null,
    codeBlock: null,
    answerFields: [
      {
        label: "Smallest value",
        expectedAnswer: "0",
        acceptableAnswers: ["0"],
        inputType: "number",
        placeholder: "Enter a number"
      }
    ],
    solution: "The smallest unsigned value is always 0, represented as all zeros: 0b000000000000.",
    difficulty: "easy",
    tags: ["unsigned", "range", "minimum"],
    mcqOptions: [
      { label: "0", value: "0", correct: true },
      { label: "1", value: "1", correct: false },
      { label: "-2048", value: "-2048", correct: false },
      { label: "-1", value: "-1", correct: false }
    ]
  },

  // 1.5b: 12-bit unsigned largest
  {
    id: "nr2-1.5-b",
    topicId: "number-rep-2",
    questionNumber: "1.5",
    subPart: "b",
    type: "range",
    prompt: "What is the largest value that can be represented with a 12-bit unsigned integer?",
    context: null,
    codeBlock: null,
    answerFields: [
      {
        label: "Largest value",
        expectedAnswer: "4095",
        acceptableAnswers: ["4095", "2^12 - 1", "2^12-1", "2^(12)-1"],
        inputType: "number",
        placeholder: "Enter a number"
      }
    ],
    solution: "The largest 12-bit unsigned value is 2^12 - 1 = 4096 - 1 = 4095, represented as all ones: 0b111111111111.",
    difficulty: "easy",
    tags: ["unsigned", "range", "maximum"],
    mcqOptions: [
      { label: "4095", value: "4095", correct: true },
      { label: "4096", value: "4096", correct: false },
      { label: "2048", value: "2048", correct: false },
      { label: "2047", value: "2047", correct: false }
    ]
  },

  // 1.6a: 10-bit two's complement smallest
  {
    id: "nr2-1.6-a",
    topicId: "number-rep-2",
    questionNumber: "1.6",
    subPart: "a",
    type: "range",
    prompt: "What is the smallest (most negative) value that can be represented with a 10-bit two's complement integer?",
    context: null,
    codeBlock: null,
    answerFields: [
      {
        label: "Smallest value",
        expectedAnswer: "-512",
        acceptableAnswers: ["-512", "-(2^9)", "-2^9"],
        inputType: "text",
        placeholder: "Enter a number (may be negative)"
      }
    ],
    solution: "The smallest 10-bit two's complement value is -(2^9) = -512, represented as 1000000000.",
    difficulty: "easy",
    tags: ["twos-complement", "range", "minimum", "signed"],
    mcqOptions: [
      { label: "-512", value: "-512", correct: true },
      { label: "-511", value: "-511", correct: false },
      { label: "-1024", value: "-1024", correct: false },
      { label: "-256", value: "-256", correct: false }
    ]
  },

  // 1.6b: 10-bit two's complement largest
  {
    id: "nr2-1.6-b",
    topicId: "number-rep-2",
    questionNumber: "1.6",
    subPart: "b",
    type: "range",
    prompt: "What is the largest value that can be represented with a 10-bit two's complement integer?",
    context: null,
    codeBlock: null,
    answerFields: [
      {
        label: "Largest value",
        expectedAnswer: "511",
        acceptableAnswers: ["511", "2^9 - 1", "2^9-1", "2^(9)-1"],
        inputType: "number",
        placeholder: "Enter a number"
      }
    ],
    solution: "The largest 10-bit two's complement value is 2^9 - 1 = 512 - 1 = 511, represented as 0111111111.",
    difficulty: "easy",
    tags: ["twos-complement", "range", "maximum", "signed"],
    mcqOptions: [
      { label: "511", value: "511", correct: true },
      { label: "512", value: "512", correct: false },
      { label: "1023", value: "1023", correct: false },
      { label: "255", value: "255", correct: false }
    ]
  }
];
