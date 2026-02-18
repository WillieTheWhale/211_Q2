/*
 * BitIcons — Custom SVG icon system for COMP 211 Quiz Prep
 * Themed around binary, circuit diagrams, clock signals, and register operations
 * No generic icon dependencies — every icon is purpose-built
 */

const defaults = { size: 24, className: '' }

function wrap(props, children) {
  const { size = defaults.size, className = '' } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={`bit-icon ${className}`}
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

/* ---- Directional ---- */

export function IconArrowRight(props) {
  return wrap(props, <>
    <line x1="4" y1="12" x2="20" y2="12" />
    <polyline points="15,7 20,12 15,17" />
  </>)
}

export function IconArrowLeft(props) {
  return wrap(props, <>
    <line x1="20" y1="12" x2="4" y2="12" />
    <polyline points="9,7 4,12 9,17" />
  </>)
}

export function IconArrowDown(props) {
  return wrap(props, <>
    <line x1="12" y1="4" x2="12" y2="20" />
    <polyline points="7,15 12,20 17,15" />
  </>)
}

export function IconChevronDown(props) {
  return wrap(props, <polyline points="6,9 12,15 18,9" />)
}

export function IconChevronRight(props) {
  return wrap(props, <polyline points="9,6 15,12 9,18" />)
}

/* ---- Actions ---- */

export function IconCheck(props) {
  return wrap(props, <polyline points="5,12 10,17 19,7" strokeWidth="2.5" />)
}

export function IconClose(props) {
  return wrap(props, <>
    <line x1="6" y1="6" x2="18" y2="18" />
    <line x1="18" y1="6" x2="6" y2="18" />
  </>)
}

/* ---- Navigation ---- */

export function IconMenu(props) {
  const { size = defaults.size, className = '' } = props
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={`bit-icon ${className}`} aria-hidden="true">
      <rect x="3" y="5" width="18" height="2" rx="0" />
      <rect x="3" y="11" width="14" height="2" rx="0" />
      <rect x="3" y="17" width="18" height="2" rx="0" />
    </svg>
  )
}

/* ---- Status / Data ---- */

// Clock signal — square wave (unique to systems/digital circuits)
export function IconClock(props) {
  return wrap(props, <>
    <polyline points="2,16 5,16 5,8 9,8 9,16 13,16 13,8 17,8 17,16 20,16" strokeWidth="1.8" />
    <circle cx="22" cy="12" r="1.5" fill="currentColor" stroke="none" />
  </>)
}

// Target — register address pointer / crosshair
export function IconTarget(props) {
  return wrap(props, <>
    <rect x="5" y="5" width="14" height="14" />
    <line x1="12" y1="2" x2="12" y2="7" />
    <line x1="12" y1="17" x2="12" y2="22" />
    <line x1="2" y1="12" x2="7" y2="12" />
    <line x1="17" y1="12" x2="22" y2="12" />
    <rect x="10" y="10" width="4" height="4" fill="currentColor" stroke="none" />
  </>)
}

// Book / Reference — open angle brackets representing source code
export function IconBook(props) {
  return wrap(props, <>
    <polyline points="4,6 4,18 12,15 20,18 20,6 12,9 4,6" />
    <line x1="12" y1="9" x2="12" y2="15" />
  </>)
}

// Trophy — rising staircase waveform (achievement = upward signal)
export function IconTrophy(props) {
  return wrap(props, <>
    <polyline points="3,19 3,16 7,16 7,13 11,13 11,9 15,9 15,5 19,5 19,19" strokeWidth="1.8" />
    <line x1="2" y1="19" x2="22" y2="19" strokeWidth="1.5" />
  </>)
}

// Reset — circular arrow with square linecaps
export function IconReset(props) {
  return wrap(props, <>
    <path d="M4.5 12a7.5 7.5 0 0 1 13-5.2" />
    <polyline points="14,2 17.5,6.8 12.5,7.5" />
    <path d="M19.5 12a7.5 7.5 0 0 1-13 5.2" />
    <polyline points="10,22 6.5,17.2 11.5,16.5" />
  </>)
}

// Bit indicator — filled (1) or empty (0) register bit
export function BitOne(props) {
  const { size = 8, className = '' } = props
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 8 8" className={`bit-icon ${className}`} aria-hidden="true">
      <rect x="1" y="1" width="6" height="6" fill="currentColor" />
    </svg>
  )
}

export function BitZero(props) {
  const { size = 8, className = '' } = props
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 8 8" className={`bit-icon ${className}`} aria-hidden="true">
      <rect x="1" y="1" width="6" height="6" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}
