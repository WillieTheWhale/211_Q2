import { Link } from 'react-router-dom'

const footerLinks = [
  { path: '/', label: 'Home' },
  { path: '/practice', label: 'Practice' },
  { path: '/quiz', label: 'Quiz' },
  { path: '/review', label: 'Review' },
  { path: '/progress', label: 'Progress' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="marquee-container">
        <div className="marquee-track">
          <span className="marquee-text">Practice Makes Perfect&nbsp;&nbsp;&nbsp;</span>
          <span className="marquee-text">Systems Fundamentals&nbsp;&nbsp;&nbsp;</span>
          <span className="marquee-text">Practice Makes Perfect&nbsp;&nbsp;&nbsp;</span>
          <span className="marquee-text">Systems Fundamentals&nbsp;&nbsp;&nbsp;</span>
        </div>
      </div>

      <div className="container footer-inner">
        <nav className="footer-nav">
          {footerLinks.map(link => (
            <Link key={link.path} to={link.path}>{link.label}</Link>
          ))}
        </nav>

        <div className="footer-legal">
          <span className="footer-copyright">COMP 211 — Systems Fundamentals</span>
          <span className="footer-copyright">UNC Chapel Hill — Spring 2026</span>
        </div>
      </div>
    </footer>
  )
}
