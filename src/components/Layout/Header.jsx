import { Link, useLocation } from 'react-router-dom'
import { IconMenu, IconClose } from '../UI/BitIcons.jsx'
import { useState } from 'react'
import useScrollDirection from '../../hooks/useScrollDirection.js'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/practice', label: 'Practice' },
  { path: '/quiz', label: 'Quiz' },
  { path: '/review', label: 'Review' },
  { path: '/progress', label: 'Progress' },
]

export default function Header() {
  const { hidden, atTop } = useScrollDirection()
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const headerClass = `header ${hidden ? 'hidden' : ''} ${!atTop ? 'scrolled' : ''}`

  return (
    <>
      <header className={headerClass}>
        <Link to="/" className="header-logo" onClick={() => setMobileMenuOpen(false)}>
          COMP 211
        </Link>

        <nav className="header-nav">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="header-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <IconClose size={24} /> : <IconMenu size={24} />}
        </button>
      </header>

      <nav className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        {navLinks.map(link => (
          <Link
            key={link.path}
            to={link.path}
            className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </>
  )
}
