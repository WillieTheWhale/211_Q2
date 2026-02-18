export const numberRep1Problems = [
  // 1.1: How many unique values with 12 bits?
  {
    id: "nr1-1.1",
    topicId: "number-rep-1",
    questionNumber: "1.1",
    subPart: null,
    type: "range",
    prompt: "How many unique values can be represented with 12 bits?",
    context: null,
    codeBlock: null,
    answerFields: [
      {
        label: "Unique values",
        expectedAnswer: "4096",
        acceptableAnswers: ["4096", "2^12", "2^(12)"],
        inputType: "number",
        placeholder: "Enter a number"
      }
    ],
    solution: "With N bits, you can represent 2^N unique values. 2^12 = 4096.",
    difficulty: "easy",
    tags: ["bits", "unique-values", "powers-of-2"],
    mcqOptions: [
      { label: "2048", value: "2048", correct: false },
      { label: "4096", value: "4096", correct: true },
      { label: "4095", value: "4095", correct: false },
      { label: "8192", value: "8192", correct: false }
    ]
  },

  // 1.2: How many unique values with 7 bits?
  {
    id: "nr1-1.2",
    topicId: "number-rep-1",
    questionNumber: "1.2",
    subPart: null,
    type: "range",
    prompt: "How many unique values can be represented with 7 bits?",
    context: null,
    codeBlock: null,
    answerFields: [
      {
        label: "Unique values",
        expectedAnswer: "128",
        acceptableAnswers: ["128", "2^7", "2^(7)"],
        inputType: "number",
        placeholder: "Enter a number"
      }
    ],
    solution: "With N bits, you can represent 2^N unique values. 2^7 = 128.",
    difficulty: "easy",
    tags: ["bits", "unique-values", "powers-of-2"],
    mcqOptions: [
      { label: "64", value: "64", correct: false },
      { label: "127", value: "127", correct: false },
      { label: "128", value: "128", correct: true },
      { label: "256", value: "256", correct: false }
    ]
  },

  // 1.3: How many unique values with 1 hex digit?
  {
    id: "nr1-1.3",
    topicId: "number-rep-1",
    questionNumber: "1.3",
    subPart: null,
    type: "range",
    prompt: "How many unique values can be represented with 1 hex digit (hexit)?",
    context: null,
    codeBlock: null,
    answerFields: [
      {
        label: "Unique values",
        expectedAnswer: "16",
        acceptableAnswers: ["16", "2^4", "2^(4)"],
        inputType: "number",
        placeholder: "Enter a number"
      }
    ],
    solution: "One hex digit represents 4 bits (a nibble). 2^4 = 16 unique values (0-F).",
    difficulty: "easy",
    tags: ["hex", "hexit", "unique-values"],
    mcqOptions: [
      { label: "8", value: "8", correct: false },
      { label: "10", value: "10", correct: false },
      { label: "15", value: "15", correct: false },
      { label: "16", value: "16", correct: true }
    ]
  },

  // 1.4: How many unique values with 3 hexits?
  {
    id: "nr1-1.4",
    topicId: "number-rep-1",
    questionNumber: "1.4",
    subPart: null,
    type: "range",
    prompt: "How many unique values can be represented with 3 hex digits (hexits)?",
    context: null,
    codeBlock: null,
    answerFields: [
      {
        label: "Unique values",
        expectedAnswer: "4096",
        acceptableAnswers: ["4096", "2^12", "2^(12)", "16^3", "16^(3)"],
        inputType: "number",
        placeholder: "Enter a number"
      }
    ],
    solution: "3 hexits = 3 x 4 = 12 bits. 2^12 = 4096. Alternatively, 16^3 = 4096.",
    difficulty: "easy",
    tags: ["hex", "hexit", "unique-values", "powers-of-2"],
    mcqOptions: [
      { label: "256", value: "256", correct: false },
      { label: "4095", value: "4095", correct: false },
      { label: "4096", value: "4096", correct: true },
      { label: "8192", value: "8192", correct: false }
    ]
  },

  // 1.5: Min bits for 88 unsigned
  {
    id: "nr1-1.5",
    topicId: "number-rep-1",
    questionNumber: "1.5",
    subPart: null,
    type: "range",
    prompt: "What is the minimum number of bits needed to represent the decimal value 88 as an unsigned integer? How many hexits are needed?",
    context: null,
    codeBlock: null,
    answerFields: [
      {
        label: "Minimum bits",
        expectedAnswer: "7",
        acceptableAnswers: ["7"],
        inputType: "number",
        placeholder: "Number of bits"
      },
      {
        label: "Minimum hexits",
        expectedAnswer: "2",
        acceptableAnswers: ["2"],
        inputType: "number",
        placeholder: "Number of hexits"
      }
    ],
    solution: "88 in binary is 1011000. This requires 7 bits (2^6 = 64 <= 88 < 128 = 2^7). 7 bits requires ceil(7/4) = 2 hexits.",
    difficulty: "easy",
    tags: ["bits", "minimum-bits", "hex", "unsigned"],
    mcqOptions: null
  },

  // 1.6: Min bits for 152 unsigned
  {
    id: "nr1-1.6",
    topicId: "number-rep-1",
    questionNumber: "1.6",
    subPart: null,
    type: "range",
    prompt: "What is the minimum number of bits needed to represent the decimal value 152 as an unsigned integer? How many hexits are needed?",
    context: null,
    codeBlock: null,
    answerFields: [
      {
        label: "Minimum bits",
        expectedAnswer: "8",
        acceptableAnswers: ["8"],
        inputType: "number",
        placeholder: "Number of bits"
      },
      {
        label: "Minimum hexits",
        expectedAnswer: "2",
        acceptableAnswers: ["2"],
        inputType: "number",
        placeholder: "Number of hexits"
      }
    ],
    solution: "152 in binary is 10011000. This requires 8 bits (2^7 = 128 <= 152 < 256 = 2^8). 8 bits requires ceil(8/4) = 2 hexits.",
    difficulty: "easy",
    tags: ["bits", "minimum-bits", "hex", "unsigned"],
    mcqOptions: null
  },

  // 1.7a: Decimal 8 to Binary and Hex
  {
    id: "nr1-1.7-a",
    topicId: "number-rep-1",
    questionNumber: "1.7",
    subPart: "a",
    type: "conversion",
    prompt: "Convert the following decimal number to unsigned binary and hexadecimal.",
    context: "Decimal: 8",
    codeBlock: null,
    answerFields: [
      {
        label: "Unsigned Binary",
        expectedAnswer: "0b1000",
        acceptableAnswers: ["0b1000", "1000", "0b 1000", "0b00001000", "00001000"],
        inputType: "text",
        placeholder: "0b..."
      },
      {
        label: "Hex",
        expectedAnswer: "0x8",
        acceptableAnswers: ["0x8", "0x08", "8", "08", "0X8", "0X08"],
        inputType: "text",
        placeholder: "0x..."
      }
    ],
    solution: "8 = 2^3 = 0b1000. In hex, 1000 (binary) = 8 (hex), so 0x8.",
    difficulty: "easy",
    tags: ["decimal-to-binary", "decimal-to-hex", "conversion"],
    mcqOptions: [
      { label: "0b1000 / 0x8", value: "0b1000/0x8", correct: true },
      { label: "0b1100 / 0xC", value: "0b1100/0xC", correct: false },
      { label: "0b0100 / 0x4", value: "0b0100/0x4", correct: false },
      { label: "0b1010 / 0xA", value: "0b1010/0xA", correct: false }
    ]
  },

  // 1.7b: Decimal 65 to Binary and Hex
  {
    id: "nr1-1.7-b",
    topicId: "number-rep-1",
    questionNumber: "1.7",
    subPart: "b",
    type: "conversion",
    prompt: "Convert the following decimal number to unsigned binary and hexadecimal.",
    context: "Decimal: 65",
    codeBlock: null,
    answerFields: [
      {
        label: "Unsigned Binary",
        expectedAnswer: "0b1000001",
        acceptableAnswers: ["0b1000001", "1000001", "0b01000001", "01000001", "0b 0100 0001", "0b0100 0001"],
        inputType: "text",
        placeholder: "0b..."
      },
      {
        label: "Hex",
        expectedAnswer: "0x41",
        acceptableAnswers: ["0x41", "41", "0X41"],
        inputType: "text",
        placeholder: "0x..."
      }
    ],
    solution: "65 = 64 + 1 = 2^6 + 2^0 = 0b1000001. Group into nibbles from the right: 0100 0001. 0100 = 4, 0001 = 1, so 0x41.",
    difficulty: "easy",
    tags: ["decimal-to-binary", "decimal-to-hex", "conversion"],
    mcqOptions: [
      { label: "0b1000001 / 0x41", value: "0b1000001/0x41", correct: true },
      { label: "0b1000010 / 0x42", value: "0b1000010/0x42", correct: false },
      { label: "0b1000101 / 0x45", value: "0b1000101/0x45", correct: false },
      { label: "0b0100001 / 0x21", value: "0b0100001/0x21", correct: false }
    ]
  },

  // 1.7c: Decimal 87 to Binary and Hex
  {
    id: "nr1-1.7-c",
    topicId: "number-rep-1",
    questionNumber: "1.7",
    subPart: "c",
    type: "conversion",
    prompt: "Convert the following decimal number to unsigned binary and hexadecimal.",
    context: "Decimal: 87",
    codeBlock: null,
    answerFields: [
      {
        label: "Unsigned Binary",
        expectedAnswer: "0b1010111",
        acceptableAnswers: ["0b1010111", "1010111", "0b01010111", "01010111", "0b0101 0111"],
        inputType: "text",
        placeholder: "0b..."
      },
      {
        label: "Hex",
        expectedAnswer: "0x57",
        acceptableAnswers: ["0x57", "57", "0X57"],
        inputType: "text",
        placeholder: "0x..."
      }
    ],
    solution: "87 = 64 + 16 + 4 + 2 + 1 = 2^6 + 2^4 + 2^2 + 2^1 + 2^0 = 0b1010111. Group into nibbles: 0101 0111. 0101 = 5, 0111 = 7, so 0x57.",
    difficulty: "medium",
    tags: ["decimal-to-binary", "decimal-to-hex", "conversion"],
    mcqOptions: [
      { label: "0b1010111 / 0x57", value: "0b1010111/0x57", correct: true },
      { label: "0b1010110 / 0x56", value: "0b1010110/0x56", correct: false },
      { label: "0b1011011 / 0x5B", value: "0b1011011/0x5B", correct: false },
      { label: "0b1011111 / 0x5F", value: "0b1011111/0x5F", correct: false }
    ]
  },

  // 1.7d: Decimal 188 to Binary and Hex
  {
    id: "nr1-1.7-d",
    topicId: "number-rep-1",
    questionNumber: "1.7",
    subPart: "d",
    type: "conversion",
    prompt: "Convert the following decimal number to unsigned binary and hexadecimal.",
    context: "Decimal: 188",
    codeBlock: null,
    answerFields: [
      {
        label: "Unsigned Binary",
        expectedAnswer: "0b10111100",
        acceptableAnswers: ["0b10111100", "10111100", "0b1011 1100", "1011 1100"],
        inputType: "text",
        placeholder: "0b..."
      },
      {
        label: "Hex",
        expectedAnswer: "0xBC",
        acceptableAnswers: ["0xBC", "0xbc", "0xBc", "0xbC", "BC", "bc", "Bc", "bC", "0XBC", "0Xbc"],
        inputType: "text",
        placeholder: "0x..."
      }
    ],
    solution: "188 = 128 + 32 + 16 + 8 + 4 = 2^7 + 2^5 + 2^4 + 2^3 + 2^2 = 0b10111100. Group into nibbles: 1011 1100. 1011 = B, 1100 = C, so 0xBC.",
    difficulty: "medium",
    tags: ["decimal-to-binary", "decimal-to-hex", "conversion"],
    mcqOptions: [
      { label: "0b10111100 / 0xBC", value: "0b10111100/0xBC", correct: true },
      { label: "0b10111000 / 0xB8", value: "0b10111000/0xB8", correct: false },
      { label: "0b11001011 / 0xCB", value: "0b11001011/0xCB", correct: false },
      { label: "0b10111110 / 0xBE", value: "0b10111110/0xBE", correct: false }
    ]
  },

  // 1.8a: Binary 0b00100111 to Decimal and Hex
  {
    id: "nr1-1.8-a",
    topicId: "number-rep-1",
    questionNumber: "1.8",
    subPart: "a",
    type: "conversion",
    prompt: "Convert the following unsigned binary number to decimal and hexadecimal.",
    context: "Binary: 0b00100111",
    codeBlock: null,
    answerFields: [
      {
        label: "Decimal",
        expectedAnswer: "39",
        acceptableAnswers: ["39"],
        inputType: "number",
        placeholder: "Decimal value"
      },
      {
        label: "Hex",
        expectedAnswer: "0x27",
        acceptableAnswers: ["0x27", "27", "0X27"],
        inputType: "text",
        placeholder: "0x..."
      }
    ],
    solution: "0b00100111 = 2^5 + 2^2 + 2^1 + 2^0 = 32 + 4 + 2 + 1 = 39. Group into nibbles: 0010 0111. 0010 = 2, 0111 = 7, so 0x27.",
    difficulty: "easy",
    tags: ["binary-to-decimal", "binary-to-hex", "conversion"],
    mcqOptions: [
      { label: "39 / 0x27", value: "39/0x27", correct: true },
      { label: "37 / 0x25", value: "37/0x25", correct: false },
      { label: "41 / 0x29", value: "41/0x29", correct: false },
      { label: "38 / 0x26", value: "38/0x26", correct: false }
    ]
  },

  // 1.8b: Binary 0b01110001 to Decimal and Hex
  {
    id: "nr1-1.8-b",
    topicId: "number-rep-1",
    questionNumber: "1.8",
    subPart: "b",
    type: "conversion",
    prompt: "Convert the following unsigned binary number to decimal and hexadecimal.",
    context: "Binary: 0b01110001",
    codeBlock: null,
    answerFields: [
      {
        label: "Decimal",
        expectedAnswer: "113",
        acceptableAnswers: ["113"],
        inputType: "number",
        placeholder: "Decimal value"
      },
      {
        label: "Hex",
        expectedAnswer: "0x71",
        acceptableAnswers: ["0x71", "71", "0X71"],
        inputType: "text",
        placeholder: "0x..."
      }
    ],
    solution: "0b01110001 = 2^6 + 2^5 + 2^4 + 2^0 = 64 + 32 + 16 + 1 = 113. Group into nibbles: 0111 0001. 0111 = 7, 0001 = 1, so 0x71.",
    difficulty: "easy",
    tags: ["binary-to-decimal", "binary-to-hex", "conversion"],
    mcqOptions: [
      { label: "113 / 0x71", value: "113/0x71", correct: true },
      { label: "112 / 0x70", value: "112/0x70", correct: false },
      { label: "115 / 0x73", value: "115/0x73", correct: false },
      { label: "97 / 0x61", value: "97/0x61", correct: false }
    ]
  },

  // 1.8c: Binary 0b10000000 to Decimal and Hex
  {
    id: "nr1-1.8-c",
    topicId: "number-rep-1",
    questionNumber: "1.8",
    subPart: "c",
    type: "conversion",
    prompt: "Convert the following unsigned binary number to decimal and hexadecimal.",
    context: "Binary: 0b10000000",
    codeBlock: null,
    answerFields: [
      {
        label: "Decimal",
        expectedAnswer: "128",
        acceptableAnswers: ["128"],
        inputType: "number",
        placeholder: "Decimal value"
      },
      {
        label: "Hex",
        expectedAnswer: "0x80",
        acceptableAnswers: ["0x80", "80", "0X80"],
        inputType: "text",
        placeholder: "0x..."
      }
    ],
    solution: "0b10000000 = 2^7 = 128. Group into nibbles: 1000 0000. 1000 = 8, 0000 = 0, so 0x80.",
    difficulty: "easy",
    tags: ["binary-to-decimal", "binary-to-hex", "conversion"],
    mcqOptions: [
      { label: "128 / 0x80", value: "128/0x80", correct: true },
      { label: "64 / 0x40", value: "64/0x40", correct: false },
      { label: "256 / 0x100", value: "256/0x100", correct: false },
      { label: "127 / 0x7F", value: "127/0x7F", correct: false }
    ]
  },

  // 1.8d: Binary 0b11111111 to Decimal and Hex
  {
    id: "nr1-1.8-d",
    topicId: "number-rep-1",
    questionNumber: "1.8",
    subPart: "d",
    type: "conversion",
    prompt: "Convert the following unsigned binary number to decimal and hexadecimal.",
    context: "Binary: 0b11111111",
    codeBlock: null,
    answerFields: [
      {
        label: "Decimal",
        expectedAnswer: "255",
        acceptableAnswers: ["255"],
        inputType: "number",
        placeholder: "Decimal value"
      },
      {
        label: "Hex",
        expectedAnswer: "0xFF",
        acceptableAnswers: ["0xFF", "0xff", "0xFf", "0xfF", "FF", "ff", "Ff", "fF", "0XFF", "0Xff"],
        inputType: "text",
        placeholder: "0x..."
      }
    ],
    solution: "0b11111111 = 2^8 - 1 = 255. Group into nibbles: 1111 1111. 1111 = F, 1111 = F, so 0xFF.",
    difficulty: "easy",
    tags: ["binary-to-decimal", "binary-to-hex", "conversion"],
    mcqOptions: [
      { label: "255 / 0xFF", value: "255/0xFF", correct: true },
      { label: "256 / 0x100", value: "256/0x100", correct: false },
      { label: "254 / 0xFE", value: "254/0xFE", correct: false },
      { label: "127 / 0x7F", value: "127/0x7F", correct: false }
    ]
  },

  // 1.9a: Hex 0x5F to Decimal and Binary
  {
    id: "nr1-1.9-a",
    topicId: "number-rep-1",
    questionNumber: "1.9",
    subPart: "a",
    type: "conversion",
    prompt: "Convert the following hexadecimal number to decimal and unsigned binary.",
    context: "Hex: 0x5F",
    codeBlock: null,
    answerFields: [
      {
        label: "Decimal",
        expectedAnswer: "95",
        acceptableAnswers: ["95"],
        inputType: "number",
        placeholder: "Decimal value"
      },
      {
        label: "Unsigned Binary",
        expectedAnswer: "0b01011111",
        acceptableAnswers: ["0b01011111", "01011111", "0b1011111", "1011111", "0b0101 1111", "0101 1111"],
        inputType: "text",
        placeholder: "0b..."
      }
    ],
    solution: "0x5F: 5 = 0101, F = 1111, so 0b01011111. Decimal: 5*16 + 15 = 80 + 15 = 95.",
    difficulty: "medium",
    tags: ["hex-to-decimal", "hex-to-binary", "conversion"],
    mcqOptions: [
      { label: "95 / 0b01011111", value: "95/0b01011111", correct: true },
      { label: "85 / 0b01010101", value: "85/0b01010101", correct: false },
      { label: "79 / 0b01001111", value: "79/0b01001111", correct: false },
      { label: "96 / 0b01100000", value: "96/0b01100000", correct: false }
    ]
  },

  // 1.9b: Hex 0x101 to Decimal and Binary
  {
    id: "nr1-1.9-b",
    topicId: "number-rep-1",
    questionNumber: "1.9",
    subPart: "b",
    type: "conversion",
    prompt: "Convert the following hexadecimal number to decimal and unsigned binary.",
    context: "Hex: 0x101",
    codeBlock: null,
    answerFields: [
      {
        label: "Decimal",
        expectedAnswer: "257",
        acceptableAnswers: ["257"],
        inputType: "number",
        placeholder: "Decimal value"
      },
      {
        label: "Unsigned Binary",
        expectedAnswer: "0b000100000001",
        acceptableAnswers: [
          "0b000100000001", "000100000001", "0b100000001", "100000001",
          "0b0001 0000 0001", "0001 0000 0001", "0b1 0000 0001"
        ],
        inputType: "text",
        placeholder: "0b..."
      }
    ],
    solution: "0x101: 1 = 0001, 0 = 0000, 1 = 0001, so 0b000100000001. Decimal: 1*256 + 0*16 + 1 = 257.",
    difficulty: "medium",
    tags: ["hex-to-decimal", "hex-to-binary", "conversion"],
    mcqOptions: [
      { label: "257 / 0b100000001", value: "257/0b100000001", correct: true },
      { label: "256 / 0b100000000", value: "256/0b100000000", correct: false },
      { label: "161 / 0b10100001", value: "161/0b10100001", correct: false },
      { label: "258 / 0b100000010", value: "258/0b100000010", correct: false }
    ]
  },

  // 1.9c: Hex 0x29 to Decimal and Binary
  {
    id: "nr1-1.9-c",
    topicId: "number-rep-1",
    questionNumber: "1.9",
    subPart: "c",
    type: "conversion",
    prompt: "Convert the following hexadecimal number to decimal and unsigned binary.",
    context: "Hex: 0x29",
    codeBlock: null,
    answerFields: [
      {
        label: "Decimal",
        expectedAnswer: "41",
        acceptableAnswers: ["41"],
        inputType: "number",
        placeholder: "Decimal value"
      },
      {
        label: "Unsigned Binary",
        expectedAnswer: "0b00101001",
        acceptableAnswers: ["0b00101001", "00101001", "0b101001", "101001", "0b0010 1001", "0010 1001"],
        inputType: "text",
        placeholder: "0b..."
      }
    ],
    solution: "0x29: 2 = 0010, 9 = 1001, so 0b00101001. Decimal: 2*16 + 9 = 32 + 9 = 41.",
    difficulty: "easy",
    tags: ["hex-to-decimal", "hex-to-binary", "conversion"],
    mcqOptions: [
      { label: "41 / 0b00101001", value: "41/0b00101001", correct: true },
      { label: "29 / 0b00011101", value: "29/0b00011101", correct: false },
      { label: "42 / 0b00101010", value: "42/0b00101010", correct: false },
      { label: "49 / 0b00110001", value: "49/0b00110001", correct: false }
    ]
  },

  // 1.9d: Hex 0xFEF to Decimal and Binary
  {
    id: "nr1-1.9-d",
    topicId: "number-rep-1",
    questionNumber: "1.9",
    subPart: "d",
    type: "conversion",
    prompt: "Convert the following hexadecimal number to decimal and unsigned binary.",
    context: "Hex: 0xFEF",
    codeBlock: null,
    answerFields: [
      {
        label: "Decimal",
        expectedAnswer: "4079",
        acceptableAnswers: ["4079"],
        inputType: "number",
        placeholder: "Decimal value"
      },
      {
        label: "Unsigned Binary",
        expectedAnswer: "0b111111101111",
        acceptableAnswers: [
          "0b111111101111", "111111101111",
          "0b1111 1110 1111", "1111 1110 1111"
        ],
        inputType: "text",
        placeholder: "0b..."
      }
    ],
    solution: "0xFEF: F = 1111, E = 1110, F = 1111, so 0b111111101111. Decimal: 15*256 + 14*16 + 15 = 3840 + 224 + 15 = 4079.",
    difficulty: "medium",
    tags: ["hex-to-decimal", "hex-to-binary", "conversion"],
    mcqOptions: [
      { label: "4079 / 0b111111101111", value: "4079/0b111111101111", correct: true },
      { label: "4095 / 0b111111111111", value: "4095/0b111111111111", correct: false },
      { label: "4063 / 0b111111011111", value: "4063/0b111111011111", correct: false },
      { label: "3823 / 0b111011101111", value: "3823/0b111011101111", correct: false }
    ]
  }
];
