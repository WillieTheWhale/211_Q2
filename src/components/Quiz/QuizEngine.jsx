import { useState, useCallback, useRef, useEffect } from 'react'
import QuizQuestion from './QuizQuestion.jsx'
import QuizResults from './QuizResults.jsx'
import Button from '../UI/Button.jsx'
import Timer from '../UI/Timer.jsx'
import Modal from '../UI/Modal.jsx'
import useQuizTimer from '../../hooks/useQuizTimer.js'
import { validateAnswer, validateAllFields } from '../../utils/validation.js'
import { recordQuiz } from '../../utils/scoring.js'
import { shuffle } from '../../utils/formatters.js'

function loadProblemsForTopics(topicIds) {
  const modules = {
    'number-rep-1': () => import('../../data/numberRep1.js').then(m => m.numberRep1Problems),
    'number-rep-2': () => import('../../data/numberRep2.js').then(m => m.numberRep2Problems),
    'binary-arithmetic': () => import('../../data/binaryArithmetic.js').then(m => m.binaryArithmeticProblems),
    'bitwise': () => import('../../data/bitwiseOps.js').then(m => m.bitwiseOpsProblems),
    'make': () => import('../../data/makefiles.js').then(m => m.makefileProblems),
    'bash': () => import('../../data/bashProgramming.js').then(m => m.bashProgrammingProblems),
  }

  return Promise.all(
    topicIds.map(id => modules[id]?.() || Promise.resolve([]))
  ).then(arrays => arrays.flat())
}

export default function QuizEngine({ config, onExit }) {
  const [questions, setQuestions] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [results, setResults] = useState(null)
  const [confirmSubmit, setConfirmSubmit] = useState(false)
  const [loading, setLoading] = useState(true)
  const startTime = useRef(Date.now())

  const handleTimeUp = useCallback(() => {
    if (!results) submitQuiz()
  }, [results])

  const { formatted, isWarning, isCritical, start, remaining } = useQuizTimer(
    config.timeLimit || 0,
    handleTimeUp
  )

  useEffect(() => {
    loadProblemsForTopics(config.topics).then(allProblems => {
      const quizReady = allProblems.filter(p => p.mcqOptions || !p.selfGrade)
      const shuffled = shuffle(quizReady)
      setQuestions(shuffled.slice(0, config.questionCount))
      setLoading(false)
      if (config.timeLimit > 0) start()
    })
  }, [config])

  const submitQuiz = useCallback(() => {
    if (!questions) return
    const timeSpent = Math.floor((Date.now() - startTime.current) / 1000)

    const questionResults = questions.map((problem, i) => {
      const answer = answers[i]
      let correct = false

      if (problem.mcqOptions) {
        const correctOpt = problem.mcqOptions.find(o => o.correct)
        correct = answer?.value === correctOpt?.value
      } else if (answer?.fields) {
        const validation = validateAllFields(answer.fields, problem.answerFields)
        correct = validation.allCorrect
      }

      return { problem, answer, correct }
    })

    const score = questionResults.filter(r => r.correct).length
    const total = questions.length
    const percentage = Math.round((score / total) * 100)

    const resultData = {
      score, total, percentage, timeSpent, questionResults,
      topics: config.topics,
      questionCount: total
    }

    setResults(resultData)
    recordQuiz({
      topics: config.topics,
      questionCount: total,
      score,
      timeSpent,
      results: questionResults.map(qr => ({ questionId: qr.problem.id, correct: qr.correct }))
    })
  }, [questions, answers, config])

  const handleAnswer = useCallback((answer) => {
    setAnswers(prev => ({ ...prev, [currentIndex]: answer }))
  }, [currentIndex])

  if (loading || !questions) {
    return <div className="loading-fallback"><div className="loading-spinner" /></div>
  }

  if (results) {
    return (
      <QuizResults
        results={results}
        onRetake={onExit}
        onReviewIncorrect={onExit}
      />
    )
  }

  const currentQuestion = questions[currentIndex]

  return (
    <div className="quiz-engine">
      <div className="quiz-toolbar">
        <span className="quiz-progress">Q {currentIndex + 1}/{questions.length}</span>
        {config.timeLimit > 0 && (
          <Timer formatted={formatted} isWarning={isWarning} isCritical={isCritical} />
        )}
        <Button onClick={() => setConfirmSubmit(true)}>Submit Quiz</Button>
      </div>

      <div className="quiz-question-wrapper">
        <QuizQuestion
          problem={currentQuestion}
          questionIndex={currentIndex}
          total={questions.length}
          answer={answers[currentIndex]}
          onAnswer={handleAnswer}
        />
      </div>

      <div className="quiz-navigation">
        <Button
          onClick={() => setCurrentIndex(i => Math.max(0, i - 1))}
          disabled={currentIndex === 0}
        >
          Previous
        </Button>
        <div className="quiz-dots">
          {questions.map((_, i) => (
            <button
              key={i}
              className={`quiz-dot ${i === currentIndex ? 'active' : ''} ${answers[i] ? 'answered' : ''}`}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to question ${i + 1}`}
            />
          ))}
        </div>
        {currentIndex < questions.length - 1 ? (
          <Button onClick={() => setCurrentIndex(i => i + 1)} arrow>Next</Button>
        ) : (
          <Button variant="primary" onClick={() => setConfirmSubmit(true)}>Submit</Button>
        )}
      </div>

      <Modal
        isOpen={confirmSubmit}
        onClose={() => setConfirmSubmit(false)}
        title="Submit Quiz?"
      >
        <p>
          You have answered {Object.keys(answers).length} of {questions.length} questions.
          {Object.keys(answers).length < questions.length && ' Some questions are unanswered.'}
        </p>
        <div className="modal-actions">
          <Button variant="primary" onClick={() => { setConfirmSubmit(false); submitQuiz() }}>
            Submit Quiz
          </Button>
          <Button onClick={() => setConfirmSubmit(false)}>Continue Quiz</Button>
        </div>
      </Modal>
    </div>
  )
}
