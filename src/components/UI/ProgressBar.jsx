export default function ProgressBar({ value, max, label, showPercentage = true, className = '' }) {
  const percentage = max > 0 ? Math.round((value / max) * 100) : 0

  return (
    <div className={`progress-bar-wrapper ${className}`}>
      {label && (
        <div className="progress-bar-header">
          <span className="progress-text">{label}</span>
          {showPercentage && <span className="progress-text">{percentage}%</span>}
        </div>
      )}
      <div className="progress-bar" role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={max}>
        <div
          className="progress-bar-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
