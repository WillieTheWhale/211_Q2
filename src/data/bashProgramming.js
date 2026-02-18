export const bashProgrammingProblems = [
  // 1.1: What is a shell script?
  {
    id: "bash-1.1",
    topicId: "bash",
    questionNumber: "1.1",
    subPart: null,
    type: "short-answer",
    selfGrade: true,
    prompt: "What is a shell script?",
    context: null,
    codeBlock: null,
    answerFields: [
      {
        label: "Your answer",
        expectedAnswer: "A shell script is a text file containing a sequence of shell commands that are executed by a shell interpreter.",
        acceptableAnswers: [
          "A text file containing shell commands",
          "A file containing a sequence of commands to be executed by the shell",
          "A program written in shell language",
          "A script file that contains commands for the shell to execute"
        ],
        inputType: "multiline",
        placeholder: "Define a shell script..."
      }
    ],
    solution: "A shell script is a text file containing a sequence of shell (command-line) commands that are interpreted and executed by a shell program (such as bash). It allows you to automate tasks by writing multiple commands in a file rather than typing them one at a time.",
    difficulty: "easy",
    tags: ["bash", "shell-script", "definition"],
    mcqOptions: null
  },

  // 1.2i: Purpose of #!/bin/bash?
  {
    id: "bash-1.2-i",
    topicId: "bash",
    questionNumber: "1.2",
    subPart: "i",
    type: "short-answer",
    prompt: "What is the purpose of the first line #!/bin/bash in a shell script?",
    context: null,
    codeBlock: "#!/bin/bash\necho \"Hello\"",
    answerFields: [
      {
        label: "Purpose",
        expectedAnswer: "It specifies the interpreter that should be used to execute the script",
        acceptableAnswers: [
          "It specifies the interpreter that should be used to execute the script",
          "Specifies the interpreter",
          "It tells the system which interpreter to use",
          "It is the shebang line that specifies the interpreter",
          "Tells the OS which program to use to run the script",
          "Specifies that bash should interpret the script",
          "It is a shebang that specifies the shell interpreter"
        ],
        inputType: "text",
        placeholder: "Explain the purpose..."
      }
    ],
    solution: "The #!/bin/bash line (called a 'shebang' or 'hashbang') specifies the interpreter that should be used to execute the script. When the OS runs the script, it reads this line to determine which program should interpret the remaining commands.",
    difficulty: "easy",
    tags: ["bash", "shebang", "interpreter"],
    mcqOptions: [
      { label: "Specifies the interpreter to execute the script", value: "interpreter", correct: true },
      { label: "It is a comment that is ignored", value: "comment", correct: false },
      { label: "It sets the working directory to /bin/bash", value: "directory", correct: false },
      { label: "It imports the bash library", value: "import", correct: false }
    ]
  },

  // 1.2ii: What program executes?
  {
    id: "bash-1.2-ii",
    topicId: "bash",
    questionNumber: "1.2",
    subPart: "ii",
    type: "short-answer",
    prompt: "Given the shebang #!/bin/bash, what program executes the script?",
    context: null,
    codeBlock: "#!/bin/bash",
    answerFields: [
      {
        label: "Program",
        expectedAnswer: "/bin/bash",
        acceptableAnswers: ["/bin/bash", "bash", "Bash", "BASH", "the bash shell"],
        inputType: "text",
        placeholder: "Program path or name"
      }
    ],
    solution: "/bin/bash - the Bash shell located at /bin/bash interprets and executes the script.",
    difficulty: "easy",
    tags: ["bash", "shebang", "interpreter"],
    mcqOptions: [
      { label: "/bin/bash", value: "/bin/bash", correct: true },
      { label: "/bin/sh", value: "/bin/sh", correct: false },
      { label: "/usr/bin/python", value: "python", correct: false },
      { label: "/bin/echo", value: "echo", correct: false }
    ]
  },

  // 1.3i: Command to view permissions?
  {
    id: "bash-1.3-i",
    topicId: "bash",
    questionNumber: "1.3",
    subPart: "i",
    type: "short-answer",
    prompt: "What command do you use to view the permissions of a file?",
    context: null,
    codeBlock: null,
    answerFields: [
      {
        label: "Command",
        expectedAnswer: "ls -l",
        acceptableAnswers: ["ls -l", "ls -la", "ls -al", "ls -l <filename>", "ls -la <filename>"],
        inputType: "text",
        placeholder: "Command..."
      }
    ],
    solution: "The command 'ls -l' (long listing format) displays file permissions along with other metadata like owner, group, size, and modification date.",
    difficulty: "easy",
    tags: ["bash", "permissions", "ls"],
    mcqOptions: [
      { label: "ls -l", value: "ls -l", correct: true },
      { label: "chmod", value: "chmod", correct: false },
      { label: "cat -p", value: "cat -p", correct: false },
      { label: "file -perms", value: "file", correct: false }
    ]
  },

  // 1.3ii: Command to add executable permission?
  {
    id: "bash-1.3-ii",
    topicId: "bash",
    questionNumber: "1.3",
    subPart: "ii",
    type: "short-answer",
    prompt: "What command do you use to add executable permission for the user/owner of a script?",
    context: null,
    codeBlock: null,
    answerFields: [
      {
        label: "Command",
        expectedAnswer: "chmod u+x",
        acceptableAnswers: [
          "chmod u+x", "chmod u+x <filename>", "chmod u+x script.sh",
          "chmod +x", "chmod +x <filename>", "chmod +x script.sh"
        ],
        inputType: "text",
        placeholder: "Command..."
      }
    ],
    solution: "The command 'chmod u+x <filename>' adds executable (+x) permission for the user/owner (u). You can also use 'chmod +x' which adds executable permission for user, group, and others.",
    difficulty: "easy",
    tags: ["bash", "permissions", "chmod", "executable"],
    mcqOptions: [
      { label: "chmod u+x", value: "chmod u+x", correct: true },
      { label: "chmod 777", value: "chmod 777", correct: false },
      { label: "exec +x", value: "exec", correct: false },
      { label: "chown u+x", value: "chown", correct: false }
    ]
  },

  // 1.4i: How many commands in the script?
  {
    id: "bash-1.4-i",
    topicId: "bash",
    questionNumber: "1.4",
    subPart: "i",
    type: "bash-trace",
    prompt: "How many commands are in this script (not counting the shebang line)?",
    context: null,
    codeBlock: "#!/bin/bash\npwd\nwhoami\ndate",
    answerFields: [
      {
        label: "Number of commands",
        expectedAnswer: "3",
        acceptableAnswers: ["3", "three"],
        inputType: "number",
        placeholder: "Number"
      }
    ],
    solution: "There are 3 commands: pwd, whoami, and date. The shebang line (#!/bin/bash) is not a command - it specifies the interpreter.",
    difficulty: "easy",
    tags: ["bash", "commands", "counting"],
    mcqOptions: [
      { label: "3", value: "3", correct: true },
      { label: "4", value: "4", correct: false },
      { label: "2", value: "2", correct: false },
      { label: "1", value: "1", correct: false }
    ]
  },

  // 1.4ii: Order of commands?
  {
    id: "bash-1.4-ii",
    topicId: "bash",
    questionNumber: "1.4",
    subPart: "ii",
    type: "bash-trace",
    prompt: "In what order do the commands execute?",
    context: null,
    codeBlock: "#!/bin/bash\npwd\nwhoami\ndate",
    answerFields: [
      {
        label: "Execution order",
        expectedAnswer: "pwd, whoami, date",
        acceptableAnswers: [
          "pwd, whoami, date",
          "pwd whoami date",
          "pwd then whoami then date",
          "1. pwd 2. whoami 3. date"
        ],
        inputType: "text",
        placeholder: "List in order"
      }
    ],
    solution: "Commands execute top to bottom: pwd first, then whoami, then date.",
    difficulty: "easy",
    tags: ["bash", "execution-order"],
    mcqOptions: [
      { label: "pwd, whoami, date", value: "correct", correct: true },
      { label: "date, whoami, pwd", value: "reversed", correct: false },
      { label: "whoami, pwd, date", value: "shuffled", correct: false },
      { label: "All execute simultaneously", value: "parallel", correct: false }
    ]
  },

  // 1.4iii: What happens?
  {
    id: "bash-1.4-iii",
    topicId: "bash",
    questionNumber: "1.4",
    subPart: "iii",
    type: "bash-trace",
    selfGrade: true,
    prompt: "Describe what each command in this script does.",
    context: null,
    codeBlock: "#!/bin/bash\npwd\nwhoami\ndate",
    answerFields: [
      {
        label: "What does the script output?",
        expectedAnswer: "Prints the current working directory, then the current username, then the current date and time.",
        acceptableAnswers: [],
        inputType: "multiline",
        placeholder: "Describe the output..."
      }
    ],
    solution: "1. pwd - prints the current working directory (e.g., /home/user)\n2. whoami - prints the current username (e.g., user)\n3. date - prints the current date and time (e.g., Mon Feb 17 10:00:00 EST 2026)",
    difficulty: "easy",
    tags: ["bash", "commands", "pwd", "whoami", "date"],
    mcqOptions: null
  },

  // 1.5: Trace even/odd script
  {
    id: "bash-1.5",
    topicId: "bash",
    questionNumber: "1.5",
    subPart: null,
    type: "bash-trace",
    prompt: "What is the final value of 'result' printed by this script?",
    context: null,
    codeBlock: "#!/bin/bash\nresult=0\nfor n in 2 4 5 7; do\n    if (( n % 2 == 0 )); then\n        result=$(( result + n ))\n    else\n        result=$(( result + 1 ))\n    fi\ndone\necho $result",
    answerFields: [
      {
        label: "Output",
        expectedAnswer: "8",
        acceptableAnswers: ["8"],
        inputType: "number",
        placeholder: "Final value"
      }
    ],
    solution: "Trace through each iteration:\n- n=2: 2%2==0 is true (even), result = 0 + 2 = 2\n- n=4: 4%2==0 is true (even), result = 2 + 4 = 6\n- n=5: 5%2==0 is false (odd), result = 6 + 1 = 7\n- n=7: 7%2==0 is false (odd), result = 7 + 1 = 8\nFinal result: 8",
    difficulty: "medium",
    tags: ["bash", "for-loop", "modulo", "conditional", "trace"],
    mcqOptions: [
      { label: "8", value: "8", correct: true },
      { label: "6", value: "6", correct: false },
      { label: "18", value: "18", correct: false },
      { label: "12", value: "12", correct: false }
    ]
  },

  // 1.6i: Which files match data*.txt?
  {
    id: "bash-1.6-i",
    topicId: "bash",
    questionNumber: "1.6",
    subPart: "i",
    type: "bash-glob",
    prompt: "Given the following files in the current directory, which files match the glob pattern data*.txt?",
    context: "Files in directory: data1.txt, data2.txt, data3.txt, data_summary.csv, notes.txt, readme.md",
    codeBlock: null,
    answerFields: [
      {
        label: "Matching files",
        expectedAnswer: "data1.txt, data2.txt, data3.txt",
        acceptableAnswers: [
          "data1.txt, data2.txt, data3.txt",
          "data1.txt data2.txt data3.txt",
          "data1.txt,data2.txt,data3.txt",
          "data1.txt, data2.txt, and data3.txt"
        ],
        inputType: "text",
        placeholder: "List matching files"
      }
    ],
    solution: "The glob data*.txt matches any file that starts with 'data' and ends with '.txt'. The * matches zero or more characters. Matches: data1.txt, data2.txt, data3.txt. data_summary.csv doesn't match because it doesn't end with .txt.",
    difficulty: "easy",
    tags: ["bash", "glob", "wildcard", "star"],
    mcqOptions: [
      { label: "data1.txt, data2.txt, data3.txt", value: "correct", correct: true },
      { label: "data1.txt, data2.txt, data3.txt, data_summary.csv", value: "with-csv", correct: false },
      { label: "data1.txt, data2.txt, data3.txt, notes.txt", value: "with-notes", correct: false },
      { label: "All .txt files", value: "all-txt", correct: false }
    ]
  },

  // 1.6ii: Script output with data*.txt
  {
    id: "bash-1.6-ii",
    topicId: "bash",
    questionNumber: "1.6",
    subPart: "ii",
    type: "bash-trace",
    prompt: "What does this script output?",
    context: "Files in directory: data1.txt, data2.txt, data3.txt, data_summary.csv, notes.txt, readme.md",
    codeBlock: "#!/bin/bash\ncount=0\nfor f in data*.txt; do\n    if [ -f \"$f\" ]; then\n        count=$(( count + 1 ))\n    fi\ndone\necho $count",
    answerFields: [
      {
        label: "Output",
        expectedAnswer: "3",
        acceptableAnswers: ["3"],
        inputType: "number",
        placeholder: "Number"
      }
    ],
    solution: "The glob data*.txt matches: data1.txt, data2.txt, data3.txt (3 files). The -f test checks if each is a regular file (they are). So count increments 3 times. Output: 3.",
    difficulty: "medium",
    tags: ["bash", "glob", "for-loop", "file-test", "trace"],
    mcqOptions: [
      { label: "3", value: "3", correct: true },
      { label: "4", value: "4", correct: false },
      { label: "6", value: "6", correct: false },
      { label: "0", value: "0", correct: false }
    ]
  },

  // 1.7i: Which files match log?.txt?
  {
    id: "bash-1.7-i",
    topicId: "bash",
    questionNumber: "1.7",
    subPart: "i",
    type: "bash-glob",
    prompt: "Given the following files, which match the glob pattern log?.txt?",
    context: "Files in directory: log1.txt, log2.txt, logA.txt, log10.txt, log.txt, logfile.txt",
    codeBlock: null,
    answerFields: [
      {
        label: "Matching files",
        expectedAnswer: "log1.txt, log2.txt, logA.txt",
        acceptableAnswers: [
          "log1.txt, log2.txt, logA.txt",
          "log1.txt log2.txt logA.txt",
          "log1.txt,log2.txt,logA.txt",
          "log1.txt, log2.txt, and logA.txt",
          "logA.txt, log1.txt, log2.txt",
          "log2.txt, log1.txt, logA.txt"
        ],
        inputType: "text",
        placeholder: "List matching files"
      }
    ],
    solution: "The glob log?.txt matches files starting with 'log', followed by exactly one character (?), then '.txt'. Matches: log1.txt (? = '1'), log2.txt (? = '2'), logA.txt (? = 'A'). log10.txt doesn't match (two chars after 'log'). log.txt doesn't match (zero chars after 'log'). logfile.txt doesn't match (multiple chars).",
    difficulty: "medium",
    tags: ["bash", "glob", "question-mark", "wildcard"],
    mcqOptions: [
      { label: "log1.txt, log2.txt, logA.txt", value: "correct", correct: true },
      { label: "log1.txt, log2.txt, logA.txt, log10.txt", value: "with-10", correct: false },
      { label: "log1.txt, log2.txt", value: "numbers-only", correct: false },
      { label: "All log*.txt files", value: "all-log", correct: false }
    ]
  },

  // 1.7ii: Script output with log?.txt
  {
    id: "bash-1.7-ii",
    topicId: "bash",
    questionNumber: "1.7",
    subPart: "ii",
    type: "bash-trace",
    prompt: "What does this script output?",
    context: "Files in directory: log1.txt, log2.txt, logA.txt, log10.txt, log.txt, logfile.txt",
    codeBlock: "#!/bin/bash\ntotal=0\nfor f in log?.txt; do\n    if [ -e \"$f\" ]; then\n        total=$(( total + 2 ))\n    fi\ndone\necho $total",
    answerFields: [
      {
        label: "Output",
        expectedAnswer: "6",
        acceptableAnswers: ["6"],
        inputType: "number",
        placeholder: "Number"
      }
    ],
    solution: "The glob log?.txt matches 3 files: log1.txt, log2.txt, logA.txt. The -e test checks if each exists (they do). For each file, total increases by 2. 3 files * 2 = 6. Output: 6.",
    difficulty: "medium",
    tags: ["bash", "glob", "for-loop", "file-test", "trace"],
    mcqOptions: [
      { label: "6", value: "6", correct: true },
      { label: "3", value: "3", correct: false },
      { label: "8", value: "8", correct: false },
      { label: "12", value: "12", correct: false }
    ]
  },

  // 1.8i: Files matching img[0-9].png?
  {
    id: "bash-1.8-i",
    topicId: "bash",
    questionNumber: "1.8",
    subPart: "i",
    type: "bash-glob",
    prompt: "Given the following files, which match the glob pattern img[0-9].png?",
    context: "Files in directory: img1.png, img2.png, imgA.png, img10.png, img1.jpg, img2.jpg, photo1.png",
    codeBlock: null,
    answerFields: [
      {
        label: "Matching files",
        expectedAnswer: "img1.png, img2.png",
        acceptableAnswers: [
          "img1.png, img2.png",
          "img1.png img2.png",
          "img1.png,img2.png",
          "img1.png and img2.png",
          "img2.png, img1.png"
        ],
        inputType: "text",
        placeholder: "List matching files"
      }
    ],
    solution: "The glob img[0-9].png matches files starting with 'img', followed by exactly one digit 0-9 ([0-9]), then '.png'. Matches: img1.png and img2.png. imgA.png doesn't match (A is not a digit). img10.png doesn't match (two digits). img1.jpg doesn't match (wrong extension). photo1.png doesn't match (wrong prefix).",
    difficulty: "medium",
    tags: ["bash", "glob", "bracket", "character-class"],
    mcqOptions: [
      { label: "img1.png, img2.png", value: "correct", correct: true },
      { label: "img1.png, img2.png, imgA.png", value: "with-A", correct: false },
      { label: "img1.png, img2.png, img10.png", value: "with-10", correct: false },
      { label: "img1.png, img2.png, img1.jpg, img2.jpg", value: "with-jpg", correct: false }
    ]
  },

  // 1.8ii: First loop iterations?
  {
    id: "bash-1.8-ii",
    topicId: "bash",
    questionNumber: "1.8",
    subPart: "ii",
    type: "bash-trace",
    prompt: "How many iterations does the first for loop execute?",
    context: "Files in directory: img1.png, img2.png, imgA.png, img10.png, img1.jpg, img2.jpg, photo1.png",
    codeBlock: "#!/bin/bash\ncount=0\nfor f in img[0-9].png; do\n    count=$(( count + 1 ))\ndone\nfor f in img*.jpg; do\n    count=$(( count + 2 ))\ndone\necho $count",
    answerFields: [
      {
        label: "First loop iterations",
        expectedAnswer: "2",
        acceptableAnswers: ["2", "two"],
        inputType: "number",
        placeholder: "Number of iterations"
      }
    ],
    solution: "The first loop iterates over img[0-9].png, which matches img1.png and img2.png (2 files). So the first loop executes 2 iterations.",
    difficulty: "medium",
    tags: ["bash", "glob", "for-loop", "counting"],
    mcqOptions: [
      { label: "2", value: "2", correct: true },
      { label: "3", value: "3", correct: false },
      { label: "4", value: "4", correct: false },
      { label: "1", value: "1", correct: false }
    ]
  },

  // 1.8iii: Files matching img*.jpg?
  {
    id: "bash-1.8-iii",
    topicId: "bash",
    questionNumber: "1.8",
    subPart: "iii",
    type: "bash-glob",
    prompt: "Which files match the glob pattern img*.jpg?",
    context: "Files in directory: img1.png, img2.png, imgA.png, img10.png, img1.jpg, img2.jpg, photo1.png",
    codeBlock: null,
    answerFields: [
      {
        label: "Matching files",
        expectedAnswer: "img1.jpg, img2.jpg",
        acceptableAnswers: [
          "img1.jpg, img2.jpg",
          "img1.jpg img2.jpg",
          "img1.jpg,img2.jpg",
          "img1.jpg and img2.jpg",
          "img2.jpg, img1.jpg"
        ],
        inputType: "text",
        placeholder: "List matching files"
      }
    ],
    solution: "The glob img*.jpg matches files starting with 'img', followed by any characters (*), ending with '.jpg'. Matches: img1.jpg and img2.jpg.",
    difficulty: "easy",
    tags: ["bash", "glob", "wildcard", "star"],
    mcqOptions: [
      { label: "img1.jpg, img2.jpg", value: "correct", correct: true },
      { label: "img1.jpg, img2.jpg, img1.png, img2.png", value: "with-png", correct: false },
      { label: "img1.jpg only", value: "one-only", correct: false },
      { label: "All img* files", value: "all-img", correct: false }
    ]
  },

  // 1.8iv: Script output?
  {
    id: "bash-1.8-iv",
    topicId: "bash",
    questionNumber: "1.8",
    subPart: "iv",
    type: "bash-trace",
    prompt: "What is the final output of this script?",
    context: "Files in directory: img1.png, img2.png, imgA.png, img10.png, img1.jpg, img2.jpg, photo1.png",
    codeBlock: "#!/bin/bash\ncount=0\nfor f in img[0-9].png; do\n    count=$(( count + 1 ))\ndone\nfor f in img*.jpg; do\n    count=$(( count + 2 ))\ndone\necho $count",
    answerFields: [
      {
        label: "Output",
        expectedAnswer: "6",
        acceptableAnswers: ["6"],
        inputType: "number",
        placeholder: "Number"
      }
    ],
    solution: "First loop: img[0-9].png matches img1.png and img2.png (2 files). count = 0 + 1 + 1 = 2.\nSecond loop: img*.jpg matches img1.jpg and img2.jpg (2 files). count = 2 + 2 + 2 = 6.\nOutput: 6.",
    difficulty: "medium",
    tags: ["bash", "glob", "for-loop", "trace", "two-loops"],
    mcqOptions: [
      { label: "6", value: "6", correct: true },
      { label: "4", value: "4", correct: false },
      { label: "8", value: "8", correct: false },
      { label: "2", value: "2", correct: false }
    ]
  },

  // 1.9: Trace cat/dog/cat/bird script
  {
    id: "bash-1.9",
    topicId: "bash",
    questionNumber: "1.9",
    subPart: null,
    type: "bash-trace",
    prompt: "What is the final output of this script?",
    context: null,
    codeBlock: "#!/bin/bash\ncount=0\nfor animal in cat dog cat bird; do\n    if [ \"$animal\" = \"cat\" ]; then\n        count=$(( count + 3 ))\n    else\n        count=$(( count + 1 ))\n    fi\ndone\necho $count",
    answerFields: [
      {
        label: "Output",
        expectedAnswer: "8",
        acceptableAnswers: ["8"],
        inputType: "number",
        placeholder: "Number"
      }
    ],
    solution: "Trace through each iteration:\n- animal=\"cat\": equals \"cat\", count = 0 + 3 = 3\n- animal=\"dog\": not \"cat\", count = 3 + 1 = 4\n- animal=\"cat\": equals \"cat\", count = 4 + 3 = 7\n- animal=\"bird\": not \"cat\", count = 7 + 1 = 8\nOutput: 8",
    difficulty: "medium",
    tags: ["bash", "for-loop", "string-comparison", "conditional", "trace"],
    mcqOptions: [
      { label: "8", value: "8", correct: true },
      { label: "10", value: "10", correct: false },
      { label: "6", value: "6", correct: false },
      { label: "7", value: "7", correct: false }
    ]
  },

  // 1.10: Trace limit=3 script
  {
    id: "bash-1.10",
    topicId: "bash",
    questionNumber: "1.10",
    subPart: null,
    type: "bash-trace",
    prompt: "What is the final output of this script?",
    context: null,
    codeBlock: "#!/bin/bash\nlimit=3\nsum=0\nfor i in 1 2 3 4; do\n    if [ $i -le $limit ]; then\n        sum=$(( sum + i ))\n    fi\ndone\necho $(( sum - 1 ))",
    answerFields: [
      {
        label: "Output",
        expectedAnswer: "5",
        acceptableAnswers: ["5"],
        inputType: "number",
        placeholder: "Number"
      }
    ],
    solution: "limit=3, sum=0\nTrace:\n- i=1: 1 <= 3 is true, sum = 0 + 1 = 1\n- i=2: 2 <= 3 is true, sum = 1 + 2 = 3\n- i=3: 3 <= 3 is true, sum = 3 + 3 = 6\n- i=4: 4 <= 3 is false, skip\nFinal: echo $(( 6 - 1 )) = 5\nOutput: 5",
    difficulty: "medium",
    tags: ["bash", "for-loop", "integer-comparison", "le", "trace"],
    mcqOptions: [
      { label: "5", value: "5", correct: true },
      { label: "6", value: "6", correct: false },
      { label: "9", value: "9", correct: false },
      { label: "10", value: "10", correct: false }
    ]
  },

  // 1.11: Trace multiply/add script
  {
    id: "bash-1.11",
    topicId: "bash",
    questionNumber: "1.11",
    subPart: null,
    type: "bash-trace",
    prompt: "What is the final output of this script?",
    context: null,
    codeBlock: "#!/bin/bash\nresult=0\nfor i in 3 1 4; do\n    if [ $i -gt 2 ]; then\n        result=$(( result + i ))\n    else\n        result=$(( result - i ))\n    fi\ndone\necho $result",
    answerFields: [
      {
        label: "Output",
        expectedAnswer: "6",
        acceptableAnswers: ["6"],
        inputType: "number",
        placeholder: "Number"
      }
    ],
    solution: "result=0\nTrace:\n- i=3: 3 > 2 is true, result = 0 + 3 = 3\n- i=1: 1 > 2 is false, result = 3 - 1 = 2\n- i=4: 4 > 2 is true, result = 2 + 4 = 6\nOutput: 6",
    difficulty: "hard",
    tags: ["bash", "for-loop", "conditional", "arithmetic", "trace"],
    mcqOptions: [
      { label: "6", value: "6", correct: true },
      { label: "8", value: "8", correct: false },
      { label: "4", value: "4", correct: false },
      { label: "2", value: "2", correct: false }
    ]
  }
];
