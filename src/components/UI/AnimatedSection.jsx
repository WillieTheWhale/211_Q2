import useIntersection from '../../hooks/useIntersection.js'

export default function AnimatedSection({ children, className = '', delay = 0 }) {
  const [ref, isVisible] = useIntersection()

  return (
    <div
      ref={ref}
      className={`fade-in-up ${isVisible ? 'visible' : ''} ${className}`}
      style={delay > 0 ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  )
}
