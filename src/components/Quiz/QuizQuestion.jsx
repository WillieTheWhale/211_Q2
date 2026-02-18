import { useState } from 'react'
import Badge from '../UI/Badge.jsx'
import CodeBlock from '../UI/CodeBlock.jsx'
import AnswerInput from '../Problem/AnswerInput.jsx'
import MultipleChoice from '../Problem/MultipleChoice.jsx'

export default function QuizQuestion({ problem, questionIndex, total, answer, onAnswer }) {
  const handleMcqSelect = (value) => {
    onAnswer({ type: 'mcq', value })
  }

  const handleFieldChange = (fieldIndex, value) => {
    const current = answer?.fields || problem.answerFields.map(() => '')
    const updated = [...current]
    updated[fieldIndex] = value
    onAnswer({ type: 'fields', fields: updated })
  }

  return (
    <div className="quiz-question">
      <div className="quiz-question-header">
        <span className="quiz-question-number">Question {questionIndex + 1} of {total}</span>
        <Badge>{problem.questionNumber}{problem.subPart || ''}</Badge>
      </div>

      <p className="problem-prompt">{problem.prompt}</p>

      {problem.context && (
        <p className="problem-context">{problem.context}</p>
      )}

      {problem.codeBlock && (
        <CodeBlock code={problem.codeBlock} />
      )}

      {problem.mcqOptions ? (
        <MultipleChoice
          options={problem.mcqOptions}
          selected={answer?.value}
          onSelect={handleMcqSelect}
          disabled={false}
          showCorrect={false}
        />
      ) : (
        <div className="answer-fields">
          {problem.answerFields.map((field, i) => (
            <AnswerInput
              key={i}
              field={field}
              value={answer?.fields?.[i] || ''}
              onChange={(v) => handleFieldChange(i, v)}
              disabled={false}
              status={null}
            />
          ))}
        </div>
      )}
    </div>
  )
}
