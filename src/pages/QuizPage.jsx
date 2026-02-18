import { useState } from 'react'
import { Link } from 'react-router-dom'
import QuizSelector from '../components/Quiz/QuizSelector.jsx'
import QuizEngine from '../components/Quiz/QuizEngine.jsx'
import AnimatedSection from '../components/UI/AnimatedSection.jsx'

export default function QuizPage() {
  const [quizConfig, setQuizConfig] = useState(null)

  if (quizConfig) {
    return (
      <div className="page-quiz">
        <div className="container">
          <QuizEngine config={quizConfig} onExit={() => setQuizConfig(null)} />
        </div>
      </div>
    )
  }

  return (
    <div className="page-quiz">
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/" className="breadcrumb-link">HOME</Link>
          <span className="separator">/</span>
          <span className="current">Quiz</span>
        </nav>

        <AnimatedSection>
          <div className="page-header">
            <h1 className="page-title">QUIZ</h1>
            <p className="page-subtitle">Test your knowledge with a timed quiz</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <QuizSelector onStart={setQuizConfig} />
        </AnimatedSection>
      </div>
    </div>
  )
}
