import { IconArrowRight } from './BitIcons.jsx'

export default function Button({
  children,
  variant = 'outline',
  onClick,
  disabled = false,
  type = 'button',
  className = '',
  arrow = false,
  ...props
}) {
  const baseClass = variant === 'primary' ? 'btn-primary' : 'btn-outline'

  return (
    <button
      type={type}
      className={`btn ${baseClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      <span>{children}</span>
      {arrow && <IconArrowRight size={16} className="btn-arrow" />}
    </button>
  )
}
