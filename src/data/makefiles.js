// Makefile 1 code block
const makefile1Code = `CC = gcc
CFLAGS = -Wall -Wextra -std=c11 -g

all: stats filter merge

stats: stats.c
\t$(CC) $(CFLAGS) -o stats stats.c

filter: filter.c
\t$(CC) $(CFLAGS) -o filter filter.c

merge: merge.c
\t$(CC) $(CFLAGS) -o merge merge.c

clean:
\trm -f stats filter merge`;

// Makefile 2 code block
const makefile2Code = `CC = gcc
CFLAGS = -Wall -g

entry: alpha beta gamma

alpha: read.c compute.c
\t$(CC) $(CFLAGS) -o alpha read.c compute.c

beta: transform.c
\t$(CC) $(CFLAGS) -o beta transform.c

gamma: output.c
\t$(CC) $(CFLAGS) -o gamma output.c

wipe:
\trm -f alpha beta gamma`;

// Makefile 3 code block
const makefile3Code = `CC = gcc
CFLAGS = -Wall -g

start: one two three

one: a.c
\t$(CC) $(CFLAGS) -o one a.c

two: b.c
\t$(CC) $(CFLAGS) -o two b.c

three: c.c
\t$(CC) $(CFLAGS) -o three c.c

reset:
\trm -f one two`;

// Makefile 4 code block
const makefile4Code = `CC = gcc
CFLAGS = -Wall -Wextra

mainline: blue green

blue: blue.c
\t$(CC) $(CFLAGS) -o blue blue.c

green: green.c
\t$(CC) $(CFLAGS) -o green green.c

red: red.c
\t$(CC) $(CFLAGS) -o red red.c

clean:
\trm -f blue green red`;

export const makefileProblems = [
  // === MAKEFILE 1 ===

  // 1.1: Default target?
  {
    id: "mk-1.1",
    topicId: "make",
    questionNumber: "1.1",
    subPart: null,
    type: "makefile-trace",
    prompt: "What is the default target of this Makefile?",
    context: "Consider the Makefile shown below.",
    codeBlock: makefile1Code,
    answerFields: [
      {
        label: "Default target",
        expectedAnswer: "all",
        acceptableAnswers: ["all"],
        inputType: "text",
        placeholder: "Target name"
      }
    ],
    solution: "The default target is the first target defined in the Makefile. Here, the first target is 'all'.",
    difficulty: "easy",
    tags: ["makefile", "default-target"],
    mcqOptions: [
      { label: "all", value: "all", correct: true },
      { label: "stats", value: "stats", correct: false },
      { label: "clean", value: "clean", correct: false },
      { label: "filter", value: "filter", correct: false }
    ]
  },

  // 1.2: Command for make filter?
  {
    id: "mk-1.2",
    topicId: "make",
    questionNumber: "1.2",
    subPart: null,
    type: "makefile-trace",
    prompt: "What command is executed when you run 'make filter'?",
    context: "Consider the Makefile shown below.",
    codeBlock: makefile1Code,
    answerFields: [
      {
        label: "Command",
        expectedAnswer: "gcc -Wall -Wextra -std=c11 -g -o filter filter.c",
        acceptableAnswers: [
          "gcc -Wall -Wextra -std=c11 -g -o filter filter.c"
        ],
        inputType: "text",
        placeholder: "Full command after variable expansion"
      }
    ],
    solution: "The filter target depends on filter.c and runs: $(CC) $(CFLAGS) -o filter filter.c. Expanding variables: CC=gcc, CFLAGS=-Wall -Wextra -std=c11 -g. Result: gcc -Wall -Wextra -std=c11 -g -o filter filter.c",
    difficulty: "easy",
    tags: ["makefile", "variable-expansion", "command"],
    mcqOptions: [
      { label: "gcc -Wall -Wextra -std=c11 -g -o filter filter.c", value: "correct", correct: true },
      { label: "gcc -Wall -o filter filter.c", value: "missing-flags", correct: false },
      { label: "gcc -Wall -Wextra -std=c11 -g filter.c -o filter", value: "wrong-order", correct: false },
      { label: "cc -Wall -Wextra -std=c11 -g -o filter filter.c", value: "wrong-cc", correct: false }
    ]
  },

  // 1.3: Files removed by make clean?
  {
    id: "mk-1.3",
    topicId: "make",
    questionNumber: "1.3",
    subPart: null,
    type: "makefile-trace",
    prompt: "What files are removed when you run 'make clean'?",
    context: "Consider the Makefile shown below.",
    codeBlock: makefile1Code,
    answerFields: [
      {
        label: "Files removed",
        expectedAnswer: "stats, filter, merge",
        acceptableAnswers: [
          "stats, filter, merge",
          "stats filter merge",
          "stats,filter,merge",
          "filter, merge, stats",
          "filter merge stats",
          "merge, filter, stats",
          "merge filter stats"
        ],
        inputType: "text",
        placeholder: "List the files"
      }
    ],
    solution: "The clean target runs: rm -f stats filter merge. So the files stats, filter, and merge are removed.",
    difficulty: "easy",
    tags: ["makefile", "clean", "rm"],
    mcqOptions: [
      { label: "stats, filter, merge", value: "stats,filter,merge", correct: true },
      { label: "stats.c, filter.c, merge.c", value: "source-files", correct: false },
      { label: "stats, filter, merge, all", value: "with-all", correct: false },
      { label: "All .o and executable files", value: "all-files", correct: false }
    ]
  },

  // 1.4: Run make after successful make, no changes?
  {
    id: "mk-1.4",
    topicId: "make",
    questionNumber: "1.4",
    subPart: null,
    type: "makefile-trace",
    prompt: "If you run 'make' successfully, then run 'make' again without modifying any files, what happens?",
    context: "Consider the Makefile shown below.",
    codeBlock: makefile1Code,
    answerFields: [
      {
        label: "What happens?",
        expectedAnswer: "Nothing is rebuilt",
        acceptableAnswers: [
          "Nothing is rebuilt",
          "Nothing",
          "nothing is rebuilt",
          "Nothing happens",
          "nothing happens",
          "All targets are up to date",
          "make: Nothing to be done for 'all'",
          "Nothing to be done",
          "No recompilation",
          "nothing"
        ],
        inputType: "text",
        placeholder: "Describe what happens"
      }
    ],
    solution: "Make checks if any source files are newer than their targets. Since no files were modified, all targets are up to date, and nothing is rebuilt. Make will output something like \"make: Nothing to be done for 'all'.\"",
    difficulty: "easy",
    tags: ["makefile", "rebuild", "up-to-date"],
    mcqOptions: [
      { label: "Nothing is rebuilt (all targets up to date)", value: "nothing", correct: true },
      { label: "All three targets are rebuilt", value: "all-rebuilt", correct: false },
      { label: "Only the 'all' target is rebuilt", value: "all-only", correct: false },
      { label: "An error occurs", value: "error", correct: false }
    ]
  },

  // 1.5: Run make clean then make?
  {
    id: "mk-1.5",
    topicId: "make",
    questionNumber: "1.5",
    subPart: null,
    type: "makefile-trace",
    prompt: "If you run 'make clean' then 'make', what is rebuilt?",
    context: "Consider the Makefile shown below.",
    codeBlock: makefile1Code,
    answerFields: [
      {
        label: "What is rebuilt?",
        expectedAnswer: "stats, filter, merge",
        acceptableAnswers: [
          "stats, filter, merge",
          "stats filter merge",
          "All three targets",
          "all three targets",
          "All three: stats, filter, merge",
          "all three",
          "Everything",
          "everything",
          "stats, filter, and merge"
        ],
        inputType: "text",
        placeholder: "Which targets are rebuilt?"
      }
    ],
    solution: "make clean removes stats, filter, and merge. Then make builds the default target 'all', which depends on stats, filter, and merge. Since all three executables were deleted, all three are rebuilt.",
    difficulty: "easy",
    tags: ["makefile", "clean", "rebuild"],
    mcqOptions: [
      { label: "All three: stats, filter, merge", value: "all-three", correct: true },
      { label: "Only stats (the first dependency)", value: "stats-only", correct: false },
      { label: "Nothing (clean doesn't affect source files)", value: "nothing", correct: false },
      { label: "An error occurs", value: "error", correct: false }
    ]
  },

  // 1.6: Modify only merge.c then make?
  {
    id: "mk-1.6",
    topicId: "make",
    questionNumber: "1.6",
    subPart: null,
    type: "makefile-trace",
    prompt: "If you modify only merge.c and then run 'make', what is rebuilt?",
    context: "Consider the Makefile shown below. Assume all targets were previously built successfully.",
    codeBlock: makefile1Code,
    answerFields: [
      {
        label: "What is rebuilt?",
        expectedAnswer: "Only merge",
        acceptableAnswers: [
          "Only merge",
          "only merge",
          "merge",
          "Just merge",
          "just merge",
          "merge is rebuilt"
        ],
        inputType: "text",
        placeholder: "Which targets are rebuilt?"
      }
    ],
    solution: "Make checks timestamps. Only merge.c was modified, so only the merge target needs to be rebuilt. stats and filter are up to date because their source files haven't changed.",
    difficulty: "medium",
    tags: ["makefile", "dependency", "rebuild", "timestamps"],
    mcqOptions: [
      { label: "Only merge", value: "merge", correct: true },
      { label: "All three: stats, filter, merge", value: "all", correct: false },
      { label: "merge and all", value: "merge-all", correct: false },
      { label: "Nothing", value: "nothing", correct: false }
    ]
  },

  // === MAKEFILE 2 ===

  // 2.1: Default target?
  {
    id: "mk-2.1",
    topicId: "make",
    questionNumber: "2.1",
    subPart: null,
    type: "makefile-trace",
    prompt: "What is the default target of this Makefile?",
    context: "Consider the Makefile shown below.",
    codeBlock: makefile2Code,
    answerFields: [
      {
        label: "Default target",
        expectedAnswer: "entry",
        acceptableAnswers: ["entry"],
        inputType: "text",
        placeholder: "Target name"
      }
    ],
    solution: "The default target is the first target defined in the Makefile. Here, the first target is 'entry'.",
    difficulty: "easy",
    tags: ["makefile", "default-target"],
    mcqOptions: [
      { label: "entry", value: "entry", correct: true },
      { label: "alpha", value: "alpha", correct: false },
      { label: "wipe", value: "wipe", correct: false },
      { label: "beta", value: "beta", correct: false }
    ]
  },

  // 2.2: Which targets depend on transform.c?
  {
    id: "mk-2.2",
    topicId: "make",
    questionNumber: "2.2",
    subPart: null,
    type: "makefile-trace",
    prompt: "Which target(s) depend on transform.c?",
    context: "Consider the Makefile shown below.",
    codeBlock: makefile2Code,
    answerFields: [
      {
        label: "Target(s)",
        expectedAnswer: "beta",
        acceptableAnswers: ["beta"],
        inputType: "text",
        placeholder: "Target name(s)"
      }
    ],
    solution: "Looking at the dependency lines: beta depends on transform.c. No other target lists transform.c as a dependency.",
    difficulty: "easy",
    tags: ["makefile", "dependency"],
    mcqOptions: [
      { label: "beta", value: "beta", correct: true },
      { label: "alpha", value: "alpha", correct: false },
      { label: "alpha and beta", value: "alpha-beta", correct: false },
      { label: "gamma", value: "gamma", correct: false }
    ]
  },

  // 2.3: read.c doesn't exist, make alpha?
  {
    id: "mk-2.3",
    topicId: "make",
    questionNumber: "2.3",
    subPart: null,
    type: "makefile-trace",
    prompt: "If the file read.c does not exist, what happens when you run 'make alpha'?",
    context: "Consider the Makefile shown below.",
    codeBlock: makefile2Code,
    answerFields: [
      {
        label: "What happens?",
        expectedAnswer: "Error",
        acceptableAnswers: [
          "Error",
          "error",
          "An error occurs",
          "Make error",
          "make error",
          "No rule to make target 'read.c'",
          "Error: no rule to make target read.c",
          "It fails",
          "Fails with an error",
          "Build error"
        ],
        inputType: "text",
        placeholder: "Describe what happens"
      }
    ],
    solution: "alpha depends on read.c and compute.c. If read.c doesn't exist and there's no rule to create it, make will produce an error: \"No rule to make target 'read.c', needed by 'alpha'. Stop.\"",
    difficulty: "medium",
    tags: ["makefile", "error", "missing-dependency"],
    mcqOptions: [
      { label: "Error: No rule to make target 'read.c'", value: "error", correct: true },
      { label: "alpha is built using only compute.c", value: "partial", correct: false },
      { label: "Nothing happens", value: "nothing", correct: false },
      { label: "read.c is created automatically", value: "auto-create", correct: false }
    ]
  },

  // 2.4: File named entry exists and is newer?
  {
    id: "mk-2.4",
    topicId: "make",
    questionNumber: "2.4",
    subPart: null,
    type: "makefile-trace",
    prompt: "If a file named 'entry' exists on disk and is newer than alpha, beta, and gamma, what happens when you run 'make'?",
    context: "Consider the Makefile shown below.",
    codeBlock: makefile2Code,
    answerFields: [
      {
        label: "What happens?",
        expectedAnswer: "Nothing is built",
        acceptableAnswers: [
          "Nothing is built",
          "Nothing",
          "nothing",
          "Nothing happens",
          "nothing happens",
          "Nothing to be done",
          "make: 'entry' is up to date",
          "entry is up to date",
          "No recompilation",
          "Nothing is rebuilt"
        ],
        inputType: "text",
        placeholder: "Describe what happens"
      }
    ],
    solution: "The 'entry' target has no recipe of its own - it just depends on alpha, beta, and gamma. If a file named 'entry' exists and is newer than all its dependencies, make considers it up to date and does nothing. This is why phony targets like 'all' should be declared .PHONY.",
    difficulty: "medium",
    tags: ["makefile", "phony", "up-to-date", "timestamps"],
    mcqOptions: [
      { label: "Nothing is built (entry is up to date)", value: "nothing", correct: true },
      { label: "All three targets are rebuilt", value: "all-rebuilt", correct: false },
      { label: "Only entry is rebuilt", value: "entry-rebuilt", correct: false },
      { label: "An error occurs", value: "error", correct: false }
    ]
  },

  // 2.5: Commands for make wipe?
  {
    id: "mk-2.5",
    topicId: "make",
    questionNumber: "2.5",
    subPart: null,
    type: "makefile-trace",
    prompt: "What command is executed when you run 'make wipe'?",
    context: "Consider the Makefile shown below.",
    codeBlock: makefile2Code,
    answerFields: [
      {
        label: "Command",
        expectedAnswer: "rm -f alpha beta gamma",
        acceptableAnswers: ["rm -f alpha beta gamma"],
        inputType: "text",
        placeholder: "Full command"
      }
    ],
    solution: "The wipe target has the recipe: rm -f alpha beta gamma. This removes the three executable files.",
    difficulty: "easy",
    tags: ["makefile", "clean", "command"],
    mcqOptions: [
      { label: "rm -f alpha beta gamma", value: "correct", correct: true },
      { label: "rm alpha beta gamma", value: "no-f", correct: false },
      { label: "rm -f alpha beta gamma entry", value: "with-entry", correct: false },
      { label: "rm -f *.c", value: "source", correct: false }
    ]
  },

  // 2.6: make gamma twice without changes?
  {
    id: "mk-2.6",
    topicId: "make",
    questionNumber: "2.6",
    subPart: null,
    type: "makefile-trace",
    prompt: "If you run 'make gamma' and it succeeds, then run 'make gamma' again without changing any files, what happens?",
    context: "Consider the Makefile shown below.",
    codeBlock: makefile2Code,
    answerFields: [
      {
        label: "What happens?",
        expectedAnswer: "Nothing is rebuilt",
        acceptableAnswers: [
          "Nothing is rebuilt",
          "Nothing",
          "nothing",
          "Nothing happens",
          "nothing happens",
          "gamma is up to date",
          "No recompilation",
          "make: 'gamma' is up to date",
          "Nothing to be done"
        ],
        inputType: "text",
        placeholder: "Describe what happens"
      }
    ],
    solution: "Since no files were modified, gamma is up to date (it is newer than its dependency output.c). Make will report that gamma is up to date and do nothing.",
    difficulty: "easy",
    tags: ["makefile", "up-to-date", "no-changes"],
    mcqOptions: [
      { label: "Nothing (gamma is up to date)", value: "nothing", correct: true },
      { label: "gamma is rebuilt", value: "rebuilt", correct: false },
      { label: "An error occurs", value: "error", correct: false },
      { label: "All targets are rebuilt", value: "all", correct: false }
    ]
  },

  // === MAKEFILE 3 ===

  // 3.1: Default target?
  {
    id: "mk-3.1",
    topicId: "make",
    questionNumber: "3.1",
    subPart: null,
    type: "makefile-trace",
    prompt: "What is the default target of this Makefile?",
    context: "Consider the Makefile shown below.",
    codeBlock: makefile3Code,
    answerFields: [
      {
        label: "Default target",
        expectedAnswer: "start",
        acceptableAnswers: ["start"],
        inputType: "text",
        placeholder: "Target name"
      }
    ],
    solution: "The default target is the first target defined in the Makefile. Here, the first target is 'start'.",
    difficulty: "easy",
    tags: ["makefile", "default-target"],
    mcqOptions: [
      { label: "start", value: "start", correct: true },
      { label: "one", value: "one", correct: false },
      { label: "reset", value: "reset", correct: false },
      { label: "all", value: "all", correct: false }
    ]
  },

  // 3.2: Command for make two?
  {
    id: "mk-3.2",
    topicId: "make",
    questionNumber: "3.2",
    subPart: null,
    type: "makefile-trace",
    prompt: "What command is executed when you run 'make two'?",
    context: "Consider the Makefile shown below.",
    codeBlock: makefile3Code,
    answerFields: [
      {
        label: "Command",
        expectedAnswer: "gcc -Wall -g -o two b.c",
        acceptableAnswers: ["gcc -Wall -g -o two b.c"],
        inputType: "text",
        placeholder: "Full command after variable expansion"
      }
    ],
    solution: "The two target depends on b.c and runs: $(CC) $(CFLAGS) -o two b.c. Expanding: CC=gcc, CFLAGS=-Wall -g. Result: gcc -Wall -g -o two b.c",
    difficulty: "easy",
    tags: ["makefile", "variable-expansion", "command"],
    mcqOptions: [
      { label: "gcc -Wall -g -o two b.c", value: "correct", correct: true },
      { label: "gcc -Wall -g two b.c", value: "no-o", correct: false },
      { label: "gcc -o two b.c", value: "no-flags", correct: false },
      { label: "gcc -Wall -g -o two two.c", value: "wrong-source", correct: false }
    ]
  },

  // 3.3: make start builds what?
  {
    id: "mk-3.3",
    topicId: "make",
    questionNumber: "3.3",
    subPart: null,
    type: "makefile-trace",
    prompt: "When you run 'make start', which targets are built?",
    context: "Consider the Makefile shown below. Assume no targets have been built yet.",
    codeBlock: makefile3Code,
    answerFields: [
      {
        label: "Targets built",
        expectedAnswer: "one, two, three",
        acceptableAnswers: [
          "one, two, three",
          "one two three",
          "one,two,three",
          "one, two, and three",
          "All three: one, two, three"
        ],
        inputType: "text",
        placeholder: "List the targets"
      }
    ],
    solution: "The 'start' target depends on one, two, and three. Since none exist yet, all three are built: one (from a.c), two (from b.c), three (from c.c).",
    difficulty: "easy",
    tags: ["makefile", "dependency", "build-order"],
    mcqOptions: [
      { label: "one, two, three", value: "all-three", correct: true },
      { label: "Only start", value: "start", correct: false },
      { label: "one only", value: "one", correct: false },
      { label: "one, two, three, start", value: "with-start", correct: false }
    ]
  },

  // 3.4: make two three?
  {
    id: "mk-3.4",
    topicId: "make",
    questionNumber: "3.4",
    subPart: null,
    type: "makefile-trace",
    prompt: "What happens when you run 'make two three'?",
    context: "Consider the Makefile shown below. Assume no targets have been built yet.",
    codeBlock: makefile3Code,
    answerFields: [
      {
        label: "What is built?",
        expectedAnswer: "two and three",
        acceptableAnswers: [
          "two and three",
          "two, three",
          "two three",
          "two,three",
          "Both two and three",
          "both two and three"
        ],
        inputType: "text",
        placeholder: "Which targets are built?"
      }
    ],
    solution: "When you specify multiple targets on the command line, make builds each one in order. So 'make two three' builds two (from b.c) and then three (from c.c).",
    difficulty: "easy",
    tags: ["makefile", "multiple-targets", "command-line"],
    mcqOptions: [
      { label: "two and three are built", value: "two-three", correct: true },
      { label: "Only two is built", value: "two-only", correct: false },
      { label: "start, then two and three", value: "with-start", correct: false },
      { label: "An error occurs", value: "error", correct: false }
    ]
  },

  // 3.5: b.c deleted, make start?
  {
    id: "mk-3.5",
    topicId: "make",
    questionNumber: "3.5",
    subPart: null,
    type: "makefile-trace",
    prompt: "If b.c is deleted and you run 'make start', what happens?",
    context: "Consider the Makefile shown below. Assume all targets were previously built successfully.",
    codeBlock: makefile3Code,
    answerFields: [
      {
        label: "What happens?",
        expectedAnswer: "Error",
        acceptableAnswers: [
          "Error",
          "error",
          "An error occurs",
          "Make error",
          "make error",
          "No rule to make target 'b.c'",
          "Error: no rule to make target b.c",
          "It fails",
          "Fails with an error",
          "Build fails"
        ],
        inputType: "text",
        placeholder: "Describe what happens"
      }
    ],
    solution: "The 'start' target depends on one, two, and three. The 'two' target depends on b.c. If b.c doesn't exist and there's no rule to create it, make will produce an error when trying to build 'two': \"No rule to make target 'b.c', needed by 'two'. Stop.\"",
    difficulty: "medium",
    tags: ["makefile", "error", "missing-dependency"],
    mcqOptions: [
      { label: "Error: No rule to make target 'b.c'", value: "error", correct: true },
      { label: "one and three are built, two is skipped", value: "skip", correct: false },
      { label: "All three are built successfully", value: "all-built", correct: false },
      { label: "Nothing happens", value: "nothing", correct: false }
    ]
  },

  // 3.6: Files removed by make reset?
  {
    id: "mk-3.6",
    topicId: "make",
    questionNumber: "3.6",
    subPart: null,
    type: "makefile-trace",
    prompt: "What files are removed when you run 'make reset'?",
    context: "Consider the Makefile shown below.",
    codeBlock: makefile3Code,
    answerFields: [
      {
        label: "Files removed",
        expectedAnswer: "one and two",
        acceptableAnswers: [
          "one and two",
          "one, two",
          "one two",
          "one,two",
          "two and one",
          "two, one"
        ],
        inputType: "text",
        placeholder: "List the files"
      }
    ],
    solution: "The reset target runs: rm -f one two. So only 'one' and 'two' are removed. Note that 'three' is NOT removed by reset.",
    difficulty: "easy",
    tags: ["makefile", "clean", "rm"],
    mcqOptions: [
      { label: "one and two", value: "one-two", correct: true },
      { label: "one, two, and three", value: "all-three", correct: false },
      { label: "a.c and b.c", value: "source-files", correct: false },
      { label: "one only", value: "one-only", correct: false }
    ]
  },

  // === MAKEFILE 4 ===

  // 4.1: Default target?
  {
    id: "mk-4.1",
    topicId: "make",
    questionNumber: "4.1",
    subPart: null,
    type: "makefile-trace",
    prompt: "What is the default target of this Makefile?",
    context: "Consider the Makefile shown below.",
    codeBlock: makefile4Code,
    answerFields: [
      {
        label: "Default target",
        expectedAnswer: "mainline",
        acceptableAnswers: ["mainline"],
        inputType: "text",
        placeholder: "Target name"
      }
    ],
    solution: "The default target is the first target defined in the Makefile. Here, the first target is 'mainline'.",
    difficulty: "easy",
    tags: ["makefile", "default-target"],
    mcqOptions: [
      { label: "mainline", value: "mainline", correct: true },
      { label: "blue", value: "blue", correct: false },
      { label: "clean", value: "clean", correct: false },
      { label: "red", value: "red", correct: false }
    ]
  },

  // 4.2: Modify blue.c then make?
  {
    id: "mk-4.2",
    topicId: "make",
    questionNumber: "4.2",
    subPart: null,
    type: "makefile-trace",
    prompt: "If you modify blue.c and then run 'make', what is rebuilt?",
    context: "Consider the Makefile shown below. Assume all targets were previously built successfully.",
    codeBlock: makefile4Code,
    answerFields: [
      {
        label: "What is rebuilt?",
        expectedAnswer: "Only blue",
        acceptableAnswers: [
          "Only blue",
          "only blue",
          "blue",
          "Blue",
          "Just blue",
          "just blue",
          "blue is rebuilt"
        ],
        inputType: "text",
        placeholder: "Which targets are rebuilt?"
      }
    ],
    solution: "Only blue.c was modified. The blue target depends on blue.c, so blue is rebuilt. Green depends on green.c (unchanged), so it's not rebuilt. Red is not a dependency of mainline.",
    difficulty: "medium",
    tags: ["makefile", "dependency", "rebuild", "timestamps"],
    mcqOptions: [
      { label: "Only blue", value: "blue", correct: true },
      { label: "blue and green", value: "blue-green", correct: false },
      { label: "blue, green, and red", value: "all", correct: false },
      { label: "Nothing", value: "nothing", correct: false }
    ]
  },

  // 4.3: Command to rebuild blue?
  {
    id: "mk-4.3",
    topicId: "make",
    questionNumber: "4.3",
    subPart: null,
    type: "makefile-trace",
    prompt: "What command is executed to rebuild blue?",
    context: "Consider the Makefile shown below.",
    codeBlock: makefile4Code,
    answerFields: [
      {
        label: "Command",
        expectedAnswer: "gcc -Wall -Wextra -o blue blue.c",
        acceptableAnswers: ["gcc -Wall -Wextra -o blue blue.c"],
        inputType: "text",
        placeholder: "Full command after variable expansion"
      }
    ],
    solution: "The blue target runs: $(CC) $(CFLAGS) -o blue blue.c. Expanding: CC=gcc, CFLAGS=-Wall -Wextra. Result: gcc -Wall -Wextra -o blue blue.c",
    difficulty: "easy",
    tags: ["makefile", "variable-expansion", "command"],
    mcqOptions: [
      { label: "gcc -Wall -Wextra -o blue blue.c", value: "correct", correct: true },
      { label: "gcc -Wall -o blue blue.c", value: "missing-wextra", correct: false },
      { label: "gcc -Wall -Wextra blue.c -o blue", value: "wrong-order", correct: false },
      { label: "gcc -o blue blue.c", value: "no-flags", correct: false }
    ]
  },

  // 4.4: make green after make, no changes?
  {
    id: "mk-4.4",
    topicId: "make",
    questionNumber: "4.4",
    subPart: null,
    type: "makefile-trace",
    prompt: "After running 'make' successfully, you run 'make green' without changing any files. What happens?",
    context: "Consider the Makefile shown below.",
    codeBlock: makefile4Code,
    answerFields: [
      {
        label: "What happens?",
        expectedAnswer: "Nothing is rebuilt",
        acceptableAnswers: [
          "Nothing is rebuilt",
          "Nothing",
          "nothing",
          "Nothing happens",
          "nothing happens",
          "green is up to date",
          "make: 'green' is up to date",
          "No recompilation"
        ],
        inputType: "text",
        placeholder: "Describe what happens"
      }
    ],
    solution: "The initial 'make' built both blue and green (dependencies of mainline). Since no files changed, 'make green' finds that green is up to date and does nothing.",
    difficulty: "easy",
    tags: ["makefile", "up-to-date", "no-changes"],
    mcqOptions: [
      { label: "Nothing (green is up to date)", value: "nothing", correct: true },
      { label: "green is rebuilt", value: "rebuilt", correct: false },
      { label: "An error occurs", value: "error", correct: false },
      { label: "Both blue and green are rebuilt", value: "both", correct: false }
    ]
  },

  // 4.5: make clean then make green?
  {
    id: "mk-4.5",
    topicId: "make",
    questionNumber: "4.5",
    subPart: null,
    type: "makefile-trace",
    prompt: "If you run 'make clean' then 'make green', what is built?",
    context: "Consider the Makefile shown below.",
    codeBlock: makefile4Code,
    answerFields: [
      {
        label: "What is built?",
        expectedAnswer: "Only green",
        acceptableAnswers: [
          "Only green",
          "only green",
          "green",
          "Green",
          "Just green",
          "just green"
        ],
        inputType: "text",
        placeholder: "Which targets are built?"
      }
    ],
    solution: "make clean removes blue, green, and red. Then 'make green' only builds the green target (from green.c). Blue and red are not built because they weren't requested.",
    difficulty: "medium",
    tags: ["makefile", "clean", "selective-build"],
    mcqOptions: [
      { label: "Only green", value: "green", correct: true },
      { label: "blue and green (mainline dependencies)", value: "blue-green", correct: false },
      { label: "blue, green, and red", value: "all", correct: false },
      { label: "Nothing", value: "nothing", correct: false }
    ]
  },

  // 4.6: make red green order?
  {
    id: "mk-4.6",
    topicId: "make",
    questionNumber: "4.6",
    subPart: null,
    type: "makefile-trace",
    prompt: "If you run 'make red green', in what order are the targets built?",
    context: "Consider the Makefile shown below. Assume no targets have been built yet.",
    codeBlock: makefile4Code,
    answerFields: [
      {
        label: "Build order",
        expectedAnswer: "red first, then green",
        acceptableAnswers: [
          "red first, then green",
          "red, green",
          "red then green",
          "red green",
          "red, then green"
        ],
        inputType: "text",
        placeholder: "Order of targets built"
      }
    ],
    solution: "When you specify multiple targets on the command line, make builds them in the order specified. So 'make red green' builds red first (from red.c), then green (from green.c).",
    difficulty: "easy",
    tags: ["makefile", "build-order", "multiple-targets"],
    mcqOptions: [
      { label: "red first, then green", value: "red-green", correct: true },
      { label: "green first, then red", value: "green-red", correct: false },
      { label: "Both are built simultaneously", value: "simultaneous", correct: false },
      { label: "Only red (green is ignored)", value: "red-only", correct: false }
    ]
  }
];
