const STORAGE_KEY = 'comp211-progress'

function getProgress() {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    if (!data) return createInitialProgress()
    const parsed = JSON.parse(data)
    if (parsed.version !== 1) return createInitialProgress()
    return parsed
  } catch {
    return createInitialProgress()
  }
}

function saveProgress(progress) {
  progress.lastVisited = new Date().toISOString()
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
}

function createInitialProgress() {
  return {
    version: 1,
    lastVisited: new Date().toISOString(),
    topics: {},
    quizHistory: []
  }
}

function ensureTopic(progress, topicId) {
  if (!progress.topics[topicId]) {
    progress.topics[topicId] = {
      attempted: 0,
      correct: 0,
      lastAttempt: null,
      problemHistory: {}
    }
  }
  return progress.topics[topicId]
}

export function recordAttempt(topicId, problemId, isCorrect, userAnswer) {
  const progress = getProgress()
  const topic = ensureTopic(progress, topicId)

  const existing = topic.problemHistory[problemId]
  if (!existing) {
    topic.attempted++
    if (isCorrect) topic.correct++
    topic.problemHistory[problemId] = {
      attempts: 1,
      correct: isCorrect,
      lastAnswer: userAnswer
    }
  } else {
    existing.attempts++
    if (isCorrect && !existing.correct) {
      topic.correct++
    }
    existing.correct = isCorrect || existing.correct
    existing.lastAnswer = userAnswer
  }

  topic.lastAttempt = new Date().toISOString()
  saveProgress(progress)
  return progress
}

export function getTopicProgress(topicId) {
  const progress = getProgress()
  return progress.topics[topicId] || { attempted: 0, correct: 0, problemHistory: {} }
}

export function getProblemStatus(topicId, problemId) {
  const topic = getTopicProgress(topicId)
  return topic.problemHistory[problemId] || null
}

export function getOverallStats() {
  const progress = getProgress()
  let totalAttempted = 0
  let totalCorrect = 0
  let topicsStarted = 0

  for (const topicId of Object.keys(progress.topics)) {
    const topic = progress.topics[topicId]
    totalAttempted += topic.attempted
    totalCorrect += topic.correct
    if (topic.attempted > 0) topicsStarted++
  }

  return {
    totalAttempted,
    totalCorrect,
    accuracy: totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0,
    topicsStarted,
    quizzesTaken: progress.quizHistory.length
  }
}

export function recordQuiz(quizData) {
  const progress = getProgress()
  progress.quizHistory.unshift({
    id: `quiz-${Date.now()}`,
    date: new Date().toISOString(),
    ...quizData
  })
  saveProgress(progress)
}

export function getQuizHistory() {
  return getProgress().quizHistory
}

export function resetProgress() {
  localStorage.removeItem(STORAGE_KEY)
}

export function getAllProgress() {
  return getProgress()
}
