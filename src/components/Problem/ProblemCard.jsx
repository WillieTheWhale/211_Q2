import { useState, useCallback } from 'react'
import Badge from '../UI/Badge.jsx'
import Button from '../UI/Button.jsx'
import CodeBlock from '../UI/CodeBlock.jsx'
import AnswerInput from './AnswerInput.jsx'
import MultipleChoice from './MultipleChoice.jsx'
import FeedbackDisplay from './FeedbackDisplay.jsx'
import SolutionReveal from './SolutionReveal.jsx'
import { validateAllFields } from '../../utils/validation.js'
import { recordAttempt, getProblemStatus } from '../../utils/scoring.js'

export default function ProblemCard({ problem, showSolution = false }) {
  const savedStatus = getProblemStatus(problem.topicId, problem.id)
  const [answers, setAnswers] = useState(
    () => problem.answerFields.map((f, i) => savedStatus?.lastAnswer?.[i] || '')
  )
  const [mcqSelected, setMcqSelected] = useState(null)
  const [selfGradeResult, setSelfGradeResult] = useState(null)
  const [result, setResult] = useState(null)
  const [checked, setChecked] = useState(false)
  const [animClass, setAnimClass] = useState('')

  const handleCheck = useCallback(() => {
    if (problem.selfGrade) {
      setChecked(true)
      return
    }

    if (problem.mcqOptions) {
      const correct = problem.mcqOptions.find(o => o.correct)
      const isCorrect = mcqSelected === correct?.value
      setResult({ allCorrect: isCorrect, results: [] })
      setChecked(true)
      setAnimClass(isCorrect ? 'feedback-correct' : 'feedback-incorrect')
      setTimeout(() => setAnimClass(''), 600)
      recordAttempt(problem.topicId, problem.id, isCorrect, mcqSelected)
      return
    }

    const validation = validateAllFields(answers, problem.answerFields)
    setResult(validation)
    setChecked(true)
    setAnimClass(validation.allCorrect ? 'feedback-correct' : 'feedback-incorrect')
    setTimeout(() => setAnimClass(''), 600)
    recordAttempt(problem.topicId, problem.id, validation.allCorrect, answers)
  }, [answers, mcqSelected, problem])

  const handleSelfGrade = useCallback((correct) => {
    setSelfGradeResult(correct)
    recordAttempt(problem.topicId, problem.id, correct, 'self-graded')
  }, [problem])

  const handleReset = useCallback(() => {
    setAnswers(problem.answerFields.map(() => ''))
    setMcqSelected(null)
    setResult(null)
    setChecked(false)
    setSelfGradeResult(null)
    setAnimClass('')
  }, [problem])

  const updateAnswer = useCallback((index, value) => {
    setAnswers(prev => {
      const next = [...prev]
      next[index] = value
      return next
    })
  }, [])

  const statusClass = savedStatus
    ? (savedStatus.correct ? 'correct' : 'incorrect')
    : ''

  return (
    <div className={`problem-card ${animClass}`} id={`problem-${problem.id}`}>
      <div className="problem-card-header">
        <span className={`status-dot ${statusClass}`} />
        <Badge>{problem.questionNumber}{problem.subPart || ''}</Badge>
        <Badge variant="muted">{problem.difficulty}</Badge>
      </div>

      <p className="problem-prompt">{problem.prompt}</p>

      {problem.context && (
        <p className="problem-context">{problem.context}</p>
      )}

      {problem.codeBlock && (
        <CodeBlock code={problem.codeBlock} language={problem.type.includes('bash') ? 'bash' : problem.type.includes('make') ? 'makefile' : 'c'} />
      )}

      {problem.mcqOptions ? (
        <MultipleChoice
          options={problem.mcqOptions}
          selected={mcqSelected}
          onSelect={setMcqSelected}
          disabled={checked && result?.allCorrect}
          showCorrect={checked}
        />
      ) : !problem.selfGrade ? (
        <div className="answer-fields">
          {problem.answerFields.map((field, i) => (
            <AnswerInput
              key={i}
              field={field}
              value={answers[i]}
              onChange={(v) => updateAnswer(i, v)}
              disabled={checked && result?.allCorrect}
              status={checked ? (result?.results?.[i]?.correct ? 'correct' : 'incorrect') : null}
            />
          ))}
        </div>
      ) : null}

      <div className="problem-actions">
        {!problem.selfGrade && (
          <Button
            variant="primary"
            onClick={handleCheck}
            disabled={!problem.mcqOptions && answers.every(a => !a.trim()) && !mcqSelected}
          >
            Check Answer
          </Button>
        )}
        {checked && (
          <Button onClick={handleReset}>
            Try Again
          </Button>
        )}
      </div>

      {checked && !problem.selfGrade && (
        <FeedbackDisplay correct={result?.allCorrect} />
      )}

      {problem.selfGrade && (
        <div className="self-grade-section">
          <SolutionReveal solution={problem.solution} expectedAnswers={problem.answerFields} />
          {selfGradeResult === null && (
            <div className="self-grade-buttons">
              <p className="self-grade-prompt">Did your answer match the solution?</p>
              <Button variant="primary" onClick={() => handleSelfGrade(true)}>Yes, I got it right</Button>
              <Button onClick={() => handleSelfGrade(false)}>No, I need to review</Button>
            </div>
          )}
          {selfGradeResult !== null && (
            <FeedbackDisplay correct={selfGradeResult} />
          )}
        </div>
      )}

      {checked && !problem.selfGrade && (showSolution || !result?.allCorrect) && (
        <SolutionReveal solution={problem.solution} expectedAnswers={problem.answerFields} />
      )}
    </div>
  )
}
