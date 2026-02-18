function normalizeBinary(str) {
  return str.replace(/^0b/i, '').replace(/\s+/g, '').toLowerCase()
}

function normalizeHex(str) {
  return str.replace(/^0x/i, '').replace(/\s+/g, '').toLowerCase()
}

function normalizeGeneral(str) {
  return str.trim().toLowerCase().replace(/\s+/g, ' ')
}

function normalizeYesNo(str) {
  const s = str.trim().toLowerCase()
  if (['yes', 'y', 'true', '1'].includes(s)) return 'yes'
  if (['no', 'n', 'false', '0'].includes(s)) return 'no'
  return s
}

export function validateAnswer(userInput, answerField) {
  if (!userInput || userInput.trim() === '') {
    return { correct: false, empty: true }
  }

  const input = userInput.trim()

  for (const acceptable of answerField.acceptableAnswers) {
    // Direct match
    if (input === acceptable) return { correct: true }

    // Case-insensitive match
    if (input.toLowerCase() === acceptable.toLowerCase()) return { correct: true }

    // Normalized match based on content type
    const normalizedInput = normalizeGeneral(input)
    const normalizedAcceptable = normalizeGeneral(acceptable)
    if (normalizedInput === normalizedAcceptable) return { correct: true }

    // Binary-specific normalization
    if (acceptable.startsWith('0b') || acceptable.startsWith('0B')) {
      if (normalizeBinary(input) === normalizeBinary(acceptable)) return { correct: true }
    }

    // Hex-specific normalization
    if (acceptable.startsWith('0x') || acceptable.startsWith('0X')) {
      if (normalizeHex(input) === normalizeHex(acceptable)) return { correct: true }
    }

    // Numeric comparison
    const numInput = Number(input)
    const numAcceptable = Number(acceptable)
    if (!isNaN(numInput) && !isNaN(numAcceptable) && numInput === numAcceptable) {
      return { correct: true }
    }

    // Yes/No normalization
    if (['yes', 'no'].includes(normalizeYesNo(acceptable))) {
      if (normalizeYesNo(input) === normalizeYesNo(acceptable)) return { correct: true }
    }
  }

  return { correct: false, userAnswer: input }
}

export function validateAllFields(userAnswers, answerFields) {
  const results = answerFields.map((field, i) => ({
    ...validateAnswer(userAnswers[i] || '', field),
    field
  }))

  return {
    allCorrect: results.every(r => r.correct),
    results,
    correctCount: results.filter(r => r.correct).length,
    totalCount: results.length
  }
}
