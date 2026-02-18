import { useState } from 'react'
import { IconChevronDown, IconChevronRight } from '../UI/BitIcons.jsx'

export default function SolutionReveal({ solution, expectedAnswers }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`solution-reveal ${open ? 'open' : ''}`}>
      <button className="btn-ghost btn-sm solution-toggle" onClick={() => setOpen(!open)}>
        {open ? <IconChevronDown size={16} /> : <IconChevronRight size={16} />}
        {open ? 'Hide Solution' : 'Show Solution'}
      </button>
      <div className="solution-content">
        {expectedAnswers && expectedAnswers.length > 0 && (
          <div className="solution-answers">
            <strong>Answer{expectedAnswers.length > 1 ? 's' : ''}:</strong>
            {expectedAnswers.map((ans, i) => (
              <span key={i} className="solution-answer">
                {ans.label ? `${ans.label}: ` : ''}{ans.expectedAnswer}
              </span>
            ))}
          </div>
        )}
        {solution && (
          <div className="solution-explanation">
            <strong>Explanation:</strong>
            <p>{solution}</p>
          </div>
        )}
      </div>
    </div>
  )
}
