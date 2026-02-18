export const bitwiseOpsProblems = [
  // 1.1: Which operator turns bits on?
  {
    id: "bw-1.1",
    topicId: "bitwise",
    questionNumber: "1.1",
    subPart: null,
    type: "short-answer",
    prompt: "Which bitwise operator is used to turn specific bits ON (set them to 1)?",
    context: null,
    codeBlock: null,
    answerFields: [
      {
        label: "Operator",
        expectedAnswer: "OR",
        acceptableAnswers: ["OR", "or", "Or", "|", "bitwise OR", "bitwise or", "Bitwise OR"],
        inputType: "text",
        placeholder: "Operator name"
      }
    ],
    solution: "The OR operator (|) turns bits on. Any bit OR'd with 1 becomes 1, while any bit OR'd with 0 stays the same. So you create a mask with 1s in the positions you want to set, and OR it with the value.",
    difficulty: "easy",
    tags: ["bitwise", "OR", "set-bits"],
    mcqOptions: [
      { label: "AND (&)", value: "AND", correct: false },
      { label: "OR (|)", value: "OR", correct: true },
      { label: "XOR (^)", value: "XOR", correct: false },
      { label: "NOT (~)", value: "NOT", correct: false }
    ]
  },

  // 1.2: Which operator turns bits off?
  {
    id: "bw-1.2",
    topicId: "bitwise",
    questionNumber: "1.2",
    subPart: null,
    type: "short-answer",
    prompt: "Which bitwise operator is used to turn specific bits OFF (clear them to 0)?",
    context: null,
    codeBlock: null,
    answerFields: [
      {
        label: "Operator",
        expectedAnswer: "AND",
        acceptableAnswers: ["AND", "and", "And", "&", "bitwise AND", "bitwise and", "Bitwise AND"],
        inputType: "text",
        placeholder: "Operator name"
      }
    ],
    solution: "The AND operator (&) turns bits off. Any bit AND'd with 0 becomes 0, while any bit AND'd with 1 stays the same. So you create a mask with 0s in the positions you want to clear (and 1s elsewhere), and AND it with the value.",
    difficulty: "easy",
    tags: ["bitwise", "AND", "clear-bits"],
    mcqOptions: [
      { label: "AND (&)", value: "AND", correct: true },
      { label: "OR (|)", value: "OR", correct: false },
      { label: "XOR (^)", value: "XOR", correct: false },
      { label: "NOT (~)", value: "NOT", correct: false }
    ]
  },

  // 1.3: Which operator toggles bits?
  {
    id: "bw-1.3",
    topicId: "bitwise",
    questionNumber: "1.3",
    subPart: null,
    type: "short-answer",
    prompt: "Which bitwise operator is used to toggle (flip) specific bits?",
    context: null,
    codeBlock: null,
    answerFields: [
      {
        label: "Operator",
        expectedAnswer: "XOR",
        acceptableAnswers: ["XOR", "xor", "Xor", "^", "bitwise XOR", "bitwise xor", "Bitwise XOR", "exclusive or", "exclusive OR"],
        inputType: "text",
        placeholder: "Operator name"
      }
    ],
    solution: "The XOR operator (^) toggles bits. Any bit XOR'd with 1 flips (0 becomes 1, 1 becomes 0), while any bit XOR'd with 0 stays the same.",
    difficulty: "easy",
    tags: ["bitwise", "XOR", "toggle-bits"],
    mcqOptions: [
      { label: "AND (&)", value: "AND", correct: false },
      { label: "OR (|)", value: "OR", correct: false },
      { label: "XOR (^)", value: "XOR", correct: true },
      { label: "NOT (~)", value: "NOT", correct: false }
    ]
  },

  // 1.4: Fill in blanks - identity table
  {
    id: "bw-1.4",
    topicId: "bitwise",
    questionNumber: "1.4",
    subPart: null,
    type: "bitwise",
    prompt: "Fill in the blanks with the correct bitwise operator and operand to complete each identity.",
    context: "For an N-bit value n:\n(a) n __ __ = n  (identity: result equals n)\n(b) n __ __ = 0  (zero: result is all zeros)\n(c) n __ __ = all 1s  (result is all 1s, i.e., 0xFF...F)",
    codeBlock: null,
    answerFields: [
      {
        label: "(a) n [op] [value] = n",
        expectedAnswer: "& all 1s",
        acceptableAnswers: [
          "& all 1s", "AND all 1s", "& 0xFF", "& 1s",
          "| 0", "OR 0", "| 0x0",
          "^ 0", "XOR 0", "^ 0x0",
          "& 0xFFFFFFFF", "| 0x00000000", "^ 0x00000000"
        ],
        inputType: "text",
        placeholder: "e.g., & all 1s"
      },
      {
        label: "(b) n [op] [value] = 0",
        expectedAnswer: "^ n",
        acceptableAnswers: [
          "^ n", "XOR n", "xor n",
          "& 0", "AND 0", "& 0x0",
          "& 0x00000000"
        ],
        inputType: "text",
        placeholder: "e.g., ^ n"
      },
      {
        label: "(c) n [op] [value] = all 1s",
        expectedAnswer: "| all 1s",
        acceptableAnswers: [
          "| all 1s", "OR all 1s", "| 0xFF", "| 1s",
          "| 0xFFFFFFFF", "| 0xFFFF",
          "^ ~n", "XOR ~n"
        ],
        inputType: "text",
        placeholder: "e.g., | all 1s"
      }
    ],
    solution: "Identity properties:\n(a) n & all_1s = n (AND with all 1s preserves n) OR n | 0 = n OR n ^ 0 = n\n(b) n ^ n = 0 (XOR with itself gives 0) OR n & 0 = 0\n(c) n | all_1s = all_1s (OR with all 1s gives all 1s) OR n ^ ~n = all_1s",
    difficulty: "medium",
    tags: ["bitwise", "identity", "AND", "OR", "XOR"],
    mcqOptions: null
  },

  // 1.5: Write set_bit function
  {
    id: "bw-1.5",
    topicId: "bitwise",
    questionNumber: "1.5",
    subPart: null,
    type: "code-write",
    selfGrade: true,
    prompt: "Write a C function that sets the y-th bit (0-indexed from the right) of x to 1 and returns the result.",
    context: "Function signature: int32_t set_bit(int32_t x, int32_t y)",
    codeBlock: "int32_t set_bit(int32_t x, int32_t y) {\n    // Your code here\n}",
    answerFields: [
      {
        label: "Your C code",
        expectedAnswer: "int32_t mask = 1 << y;\nreturn x | mask;",
        acceptableAnswers: [],
        inputType: "multiline",
        placeholder: "Write the function body..."
      }
    ],
    solution: "int32_t set_bit(int32_t x, int32_t y) {\n    int32_t mask = 1 << y;  // Create mask with 1 at position y\n    return x | mask;        // OR to set the bit\n}\n\nExplanation: Create a mask with a 1 in position y by shifting 1 left by y positions. Then OR the mask with x to set that bit to 1 while preserving all other bits.",
    difficulty: "medium",
    tags: ["bitwise", "C-function", "set-bit", "OR", "shift"],
    mcqOptions: null
  },

  // 1.6: Write clear_bit function
  {
    id: "bw-1.6",
    topicId: "bitwise",
    questionNumber: "1.6",
    subPart: null,
    type: "code-write",
    selfGrade: true,
    prompt: "Write a C function that clears (sets to 0) the y-th bit (0-indexed from the right) of x and returns the result.",
    context: "Function signature: int32_t clear_bit(int32_t x, int32_t y)",
    codeBlock: "int32_t clear_bit(int32_t x, int32_t y) {\n    // Your code here\n}",
    answerFields: [
      {
        label: "Your C code",
        expectedAnswer: "int32_t mask = ~(1 << y);\nreturn x & mask;",
        acceptableAnswers: [],
        inputType: "multiline",
        placeholder: "Write the function body..."
      }
    ],
    solution: "int32_t clear_bit(int32_t x, int32_t y) {\n    int32_t mask = ~(1 << y);  // Create mask with 0 at position y, 1s elsewhere\n    return x & mask;           // AND to clear the bit\n}\n\nExplanation: Create a mask with a 0 in position y and 1s everywhere else by shifting 1 left by y, then inverting with NOT (~). AND the mask with x to clear that bit while preserving all others.",
    difficulty: "medium",
    tags: ["bitwise", "C-function", "clear-bit", "AND", "NOT", "shift"],
    mcqOptions: null
  },

  // 1.7: Swap adjacent bits function trace
  {
    id: "bw-1.7",
    topicId: "bitwise",
    questionNumber: "1.7",
    subPart: null,
    type: "code-trace",
    prompt: "What does the following function do? Trace through it with the input value 5 (0b00000101) and give the output.",
    context: null,
    codeBlock: "uint32_t mystery(uint32_t x) {\n    uint32_t even_bits = x & 0xAAAAAAAA;  // 0xA = 1010\n    uint32_t odd_bits  = x & 0x55555555;  // 0x5 = 0101\n    even_bits >>= 1;\n    odd_bits  <<= 1;\n    return even_bits | odd_bits;\n}",
    answerFields: [
      {
        label: "What does this function do?",
        expectedAnswer: "Swaps adjacent bits",
        acceptableAnswers: [
          "Swaps adjacent bits",
          "swaps adjacent bits",
          "It swaps adjacent bits",
          "Swap adjacent bit pairs",
          "swaps even and odd bits",
          "Swaps even and odd bits",
          "swaps neighboring bits"
        ],
        inputType: "text",
        placeholder: "Describe the function's behavior"
      },
      {
        label: "Output for input 5 (decimal)",
        expectedAnswer: "10",
        acceptableAnswers: ["10", "0b00001010", "0b1010", "0xA", "0x0A"],
        inputType: "text",
        placeholder: "Decimal output"
      }
    ],
    solution: "This function swaps adjacent bits (even-positioned bits swap with odd-positioned bits).\n\nTrace with x = 5 (0b00000101):\n1. even_bits = 0b00000101 & 0xAAAAAAAA (0b...10101010) = 0b00000000\n2. odd_bits  = 0b00000101 & 0x55555555 (0b...01010101) = 0b00000101\n3. even_bits >>= 1 -> 0b00000000 (still 0)\n4. odd_bits  <<= 1 -> 0b00001010\n5. return 0b00000000 | 0b00001010 = 0b00001010 = 10\n\nInput 5 (0b0101) -> Output 10 (0b1010). Each pair of adjacent bits has been swapped.",
    difficulty: "hard",
    tags: ["bitwise", "code-trace", "bit-manipulation", "masks", "shifts"],
    mcqOptions: [
      { label: "Output: 10", value: "10", correct: true },
      { label: "Output: 5", value: "5", correct: false },
      { label: "Output: 3", value: "3", correct: false },
      { label: "Output: 20", value: "20", correct: false }
    ]
  }
];
