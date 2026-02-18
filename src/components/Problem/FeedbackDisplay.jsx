import { IconCheck, IconClose } from '../UI/BitIcons.jsx'

export default function FeedbackDisplay({ correct, message }) {
  if (correct === null || correct === undefined) return null

  return (
    <div className={`feedback-message ${correct ? 'correct' : 'incorrect'}`}>
      {correct ? <IconCheck size={18} /> : <IconClose size={18} />}
      {correct ? 'Correct!' : message || 'Incorrect. Try again or view the solution.'}
    </div>
  )
}
