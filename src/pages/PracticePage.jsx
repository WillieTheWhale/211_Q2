import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProblemCard from '../components/Problem/ProblemCard.jsx'
import Button from '../components/UI/Button.jsx'
import AnimatedSection from '../components/UI/AnimatedSection.jsx'
import ProgressBar from '../components/UI/ProgressBar.jsx'
import { topics } from '../data/topicMeta.js'
import { shuffle } from '../utils/formatters.js'

const dataModules = {
  'number-rep-1': () => import('../data/numberRep1.js').then(m => m.numberRep1Problems),
  'number-rep-2': () => import('../data/numberRep2.js').then(m => m.numberRep2Problems),
  'binary-arithmetic': () => import('../data/binaryArithmetic.js').then(m => m.binaryArithmeticProblems),
  'bitwise': () => import('../data/bitwiseOps.js').then(m => m.bitwiseOpsProblems),
  'make': () => import('../data/makefiles.js').then(m => m.makefileProblems),
  'bash': () => import('../data/bashProgramming.js').then(m => m.bashProgrammingProblems),
}

export default function PracticePage() {
  const [selectedTopics, setSelectedTopics] = useState(topics.map(t => t.id))
  const [problemCount, setProblemCount] = useState(10)
  const [started, setStarted] = useState(false)
  const [problems, setProblems] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [viewMode, setViewMode] = useState('single')
  const [loading, setLoading] = useState(false)

  const toggleTopic = (id) => {
    setSelectedTopics(prev =>
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    )
  }

  const startPractice = async () => {
    setLoading(true)
    const allProblems = await Promise.all(
      selectedTopics.map(id => dataModules[id]?.() || Promise.resolve([]))
    ).then(arrays => arrays.flat())

    const shuffled = shuffle(allProblems)
    setProblems(shuffled.slice(0, problemCount === 0 ? shuffled.length : problemCount))
    setStarted(true)
    setCurrentIndex(0)
    setLoading(false)
  }

  if (!started) {
    return (
      <div className="page-practice">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/" className="breadcrumb-link">HOME</Link>
            <span className="separator">/</span>
            <span className="current">Practice</span>
          </nav>

          <AnimatedSection>
            <div className="page-header">
              <h1 className="page-title">PRACTICE</h1>
              <p className="page-subtitle">Free-form practice across all topics</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="practice-config">
              <div className="quiz-selector-section">
                <h3 className="section-subtitle">Select Topics</h3>
                <div className="quiz-topic-grid">
                  {topics.map(topic => (
                    <label key={topic.id} className={`quiz-topic-option ${selectedTopics.includes(topic.id) ? 'selected' : ''}`}>
                      <input
                        type="checkbox"
                        checked={selectedTopics.includes(topic.id)}
                        onChange={() => toggleTopic(topic.id)}
                      />
                      <span className="quiz-topic-name">{topic.title}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="quiz-selector-section">
                <h3 className="section-subtitle">Number of Problems</h3>
                <div className="quiz-count-options">
                  {[5, 10, 15, 20, { value: 0, label: 'All' }].map(opt => {
                    const val = typeof opt === 'object' ? opt.value : opt
                    const label = typeof opt === 'object' ? opt.label : String(opt)
                    return (
                      <button
                        key={val}
                        className={`quiz-count-option ${problemCount === val ? 'active' : ''}`}
                        onClick={() => setProblemCount(val)}
                      >
                        {label}
                      </button>
                    )
                  })}
                </div>
              </div>

              <Button
                variant="primary"
                onClick={startPractice}
                disabled={selectedTopics.length === 0}
                arrow
              >
                Start Practice
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    )
  }

  if (loading) {
    return <div className="loading-fallback"><div className="loading-spinner" /></div>
  }

  return (
    <div className="page-practice">
      <div className="container">
        <div className="practice-toolbar">
          <Button onClick={() => setStarted(false)}>New Session</Button>
          <ProgressBar value={currentIndex + 1} max={problems.length} label={`${currentIndex + 1}/${problems.length}`} />
          <div className="view-toggle">
            <button className={`view-toggle-btn ${viewMode === 'single' ? 'active' : ''}`} onClick={() => setViewMode('single')}>Single</button>
            <button className={`view-toggle-btn ${viewMode === 'list' ? 'active' : ''}`} onClick={() => setViewMode('list')}>List</button>
          </div>
        </div>

        {viewMode === 'single' ? (
          <>
            <ProblemCard problem={problems[currentIndex]} showSolution />
            <div className="practice-navigation">
              <Button onClick={() => setCurrentIndex(i => Math.max(0, i - 1))} disabled={currentIndex === 0}>
                Previous
              </Button>
              <Button
                onClick={() => setCurrentIndex(i => Math.min(problems.length - 1, i + 1))}
                disabled={currentIndex === problems.length - 1}
                arrow
              >
                Next
              </Button>
            </div>
          </>
        ) : (
          <div className="practice-list">
            {problems.map((problem) => (
              <ProblemCard key={problem.id} problem={problem} showSolution />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
