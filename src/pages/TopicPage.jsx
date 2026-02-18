import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { IconArrowLeft, IconArrowRight } from '../components/UI/BitIcons.jsx'
import ProblemCard from '../components/Problem/ProblemCard.jsx'
import ProgressBar from '../components/UI/ProgressBar.jsx'
import Badge from '../components/UI/Badge.jsx'
import AnimatedSection from '../components/UI/AnimatedSection.jsx'
import { topics } from '../data/topicMeta.js'
import { getTopicProgress } from '../utils/scoring.js'

const dataModules = {
  'number-rep-1': () => import('../data/numberRep1.js').then(m => m.numberRep1Problems),
  'number-rep-2': () => import('../data/numberRep2.js').then(m => m.numberRep2Problems),
  'binary-arithmetic': () => import('../data/binaryArithmetic.js').then(m => m.binaryArithmeticProblems),
  'bitwise': () => import('../data/bitwiseOps.js').then(m => m.bitwiseOpsProblems),
  'make': () => import('../data/makefiles.js').then(m => m.makefileProblems),
  'bash': () => import('../data/bashProgramming.js').then(m => m.bashProgrammingProblems),
}

export default function TopicPage() {
  const { topicId } = useParams()
  const navigate = useNavigate()
  const [problems, setProblems] = useState(null)
  const [loading, setLoading] = useState(true)

  const topic = topics.find(t => t.id === topicId)
  const topicIndex = topics.findIndex(t => t.id === topicId)
  const prevTopic = topicIndex > 0 ? topics[topicIndex - 1] : null
  const nextTopic = topicIndex < topics.length - 1 ? topics[topicIndex + 1] : null

  useEffect(() => {
    setLoading(true)
    const loader = dataModules[topicId]
    if (loader) {
      loader().then(data => {
        setProblems(data)
        setLoading(false)
      })
    } else {
      setLoading(false)
    }
  }, [topicId])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [topicId])

  if (!topic) {
    return (
      <div className="page-topic">
        <div className="container">
          <h2>Topic not found</h2>
          <Link to="/">Back to Home</Link>
        </div>
      </div>
    )
  }

  const progress = getTopicProgress(topicId)

  return (
    <div className="page-topic">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/" className="breadcrumb-link">HOME</Link>
          <span className="separator">/</span>
          <span className="current">{topic.title}</span>
        </nav>

        {/* Topic Header */}
        <div className="topic-header">
          <h1 className="page-title">{topic.title}</h1>
          <p className="page-subtitle">{topic.subtitle}</p>
          <div className="topic-meta-row">
            <Badge>{topic.estimatedTime}</Badge>
            <Badge variant="muted">{topic.problemCount} problems</Badge>
          </div>
          <ProgressBar
            value={progress.attempted}
            max={topic.problemCount}
            label={`${progress.attempted}/${topic.problemCount} completed`}
            className="topic-progress"
          />
        </div>

        {/* Problem Navigation Sidebar */}
        {problems && problems.length > 0 && (
          <div className="topic-layout">
            <aside className="side-nav desktop-only">
              <div className="side-nav-sticky">
                {problems.map((p) => {
                  const status = progress.problemHistory[p.id]
                  return (
                    <a
                      key={p.id}
                      href={`#problem-${p.id}`}
                      className="side-nav-link"
                      onClick={(e) => {
                        e.preventDefault()
                        document.getElementById(`problem-${p.id}`)?.scrollIntoView({ behavior: 'smooth' })
                      }}
                    >
                      <span className={`status-dot ${status?.correct ? 'correct' : status ? 'incorrect' : ''}`} />
                      {p.questionNumber}{p.subPart || ''}
                    </a>
                  )
                })}
              </div>
            </aside>

            <div className="topic-problems">
              {loading ? (
                <div className="loading-fallback"><div className="loading-spinner" /></div>
              ) : (
                problems.map((problem, i) => (
                  <AnimatedSection key={problem.id} delay={Math.min(i * 0.05, 0.3)}>
                    <ProblemCard problem={problem} />
                  </AnimatedSection>
                ))
              )}
            </div>
          </div>
        )}

        {/* Topic Navigation */}
        <div className="topic-nav-footer">
          {prevTopic ? (
            <Link to={`/topic/${prevTopic.id}`} className="topic-nav-link">
              <IconArrowLeft size={16} />
              {prevTopic.title}
            </Link>
          ) : <div />}
          {nextTopic ? (
            <Link to={`/topic/${nextTopic.id}`} className="topic-nav-link">
              {nextTopic.title}
              <IconArrowRight size={16} />
            </Link>
          ) : <div />}
        </div>
      </div>
    </div>
  )
}
