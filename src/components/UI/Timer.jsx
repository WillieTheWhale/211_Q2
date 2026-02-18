import { IconClock } from './BitIcons.jsx'

export default function Timer({ formatted, isWarning, isCritical }) {
  let className = 'quiz-timer'
  if (isCritical) className += ' danger'
  else if (isWarning) className += ' warning'

  return (
    <div className={className} aria-label={`Time remaining: ${formatted}`}>
      <IconClock size={16} className="quiz-timer-icon" />
      <span>{formatted}</span>
    </div>
  )
}
