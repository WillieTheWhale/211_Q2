import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IconReset, IconClock, IconTarget, IconBook, IconTrophy } from '../components/UI/BitIcons.jsx'
import AnimatedSection from '../components/UI/AnimatedSection.jsx'
import Button from '../components/UI/Button.jsx'
import Badge from '../components/UI/Badge.jsx'
import ProgressBar from '../components/UI/ProgressBar.jsx'
import Modal from '../components/UI/Modal.jsx'
import { getOverallStats, getTopicProgress, getQuizHistory, resetProgress } from '../utils/scoring.js'
import { formatTime, formatDate } from '../utils/formatters.js'
import { topics } from '../data/topicMeta.js'

export default function ProgressPage() {
  const navigate = useNavigate()
  const [stats, setStats] = useState(() => getOverallStats())
  const [quizHistory, setQuizHistory] = useState(() => getQuizHistory())
  const [confirmReset, setConfirmReset] = useState(false)

  const handleReset = () => {
    resetProgress()
    setStats(getOverallStats())
    setQuizHistory([])
    setConfirmReset(false)
  }

  return (
    <div className="page-progress">
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/" className="breadcrumb-link">HOME</Link>
          <span className="separator">/</span>
          <span className="current">Progress</span>
        </nav>

        <AnimatedSection>
          <div className="page-header">
            <h1 className="page-title">PROGRESS</h1>
            <p className="page-subtitle">Your study stats and performance history</p>
          </div>
        </AnimatedSection>

        {/* Overall Stats */}
        <AnimatedSection delay={0.1}>
          <div className="stats-grid progress-stats">
            <div className="stat-card">
              <IconTarget size={24} className="stat-icon" />
              <span className="stat-value">{stats.totalAttempted}</span>
              <span className="stat-label">Problems Attempted</span>
            </div>
            <div className="stat-card">
              <IconTrophy size={24} className="stat-icon" />
              <span className="stat-value">{stats.accuracy}%</span>
              <span className="stat-label">Accuracy</span>
            </div>
            <div className="stat-card">
              <IconBook size={24} className="stat-icon" />
              <span className="stat-value">{stats.topicsStarted}/6</span>
              <span className="stat-label">Topics Started</span>
            </div>
            <div className="stat-card">
              <IconClock size={24} className="stat-icon" />
              <span className="stat-value">{stats.quizzesTaken}</span>
              <span className="stat-label">Quizzes Taken</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Per-Topic Progress */}
        <section className="section">
          <AnimatedSection>
            <div className="section-header">
              <h2 className="section-label">TOPICS</h2>
              <p className="section-subtitle">Progress by topic area</p>
            </div>
          </AnimatedSection>

          <div className="progress-topic-grid">
            {topics.map((topic, i) => {
              const progress = getTopicProgress(topic.id)
              const accuracy = progress.attempted > 0
                ? Math.round((progress.correct / progress.attempted) * 100)
                : 0

              return (
                <AnimatedSection key={topic.id} delay={i * 0.08}>
                  <div
                    className="progress-topic-card"
                    onClick={() => navigate(`/topic/${topic.id}`)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={e => e.key === 'Enter' && navigate(`/topic/${topic.id}`)}
                  >
                    <div className="progress-topic-header">
                      <h3 className="progress-topic-title">{topic.title}</h3>
                      <Badge variant={progress.attempted === topic.problemCount ? 'success' : undefined}>
                        {progress.attempted}/{topic.problemCount}
                      </Badge>
                    </div>

                    <ProgressBar
                      value={progress.attempted}
                      max={topic.problemCount}
                    />

                    <div className="progress-topic-stats">
                      <div className="progress-stat-row">
                        <span className="progress-stat-label">Accuracy</span>
                        <span className="progress-stat-value">{accuracy}%</span>
                      </div>
                      <div className="progress-stat-row">
                        <span className="progress-stat-label">Remaining</span>
                        <span className="progress-stat-value">{topic.problemCount - progress.attempted}</span>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </section>

        {/* Quiz History */}
        <section className="section">
          <AnimatedSection>
            <div className="section-header">
              <h2 className="section-label">QUIZ HISTORY</h2>
              <p className="section-subtitle">
                {quizHistory.length > 0
                  ? `${quizHistory.length} quiz${quizHistory.length !== 1 ? 'zes' : ''} taken`
                  : 'No quizzes taken yet'}
              </p>
            </div>
          </AnimatedSection>

          {quizHistory.length > 0 ? (
            <div className="quiz-history-list">
              {quizHistory.slice().reverse().map((quiz, i) => (
                <AnimatedSection key={i} delay={Math.min(i * 0.05, 0.3)}>
                  <div className="quiz-history-item">
                    <div className="quiz-history-header">
                      <span className="quiz-history-date">{formatDate(quiz.date)}</span>
                      <Badge variant={quiz.percentage >= 70 ? 'success' : quiz.percentage >= 50 ? 'warning' : 'error'}>
                        {quiz.score}/{quiz.total} ({quiz.percentage}%)
                      </Badge>
                    </div>
                    <div className="quiz-history-details">
                      <span className="quiz-history-detail">
                        <IconClock size={14} />
                        {formatTime(quiz.timeSpent)}
                      </span>
                      <span className="quiz-history-detail">
                        {quiz.topics?.length || 0} topic{(quiz.topics?.length || 0) !== 1 ? 's' : ''}
                      </span>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <AnimatedSection delay={0.1}>
              <div className="empty-state">
                <p className="empty-state-text">Take your first quiz to see your history here.</p>
                <Button onClick={() => navigate('/quiz')} arrow>
                  Start a Quiz
                </Button>
              </div>
            </AnimatedSection>
          )}
        </section>

        {/* Reset */}
        <AnimatedSection>
          <div className="progress-reset">
            <Button onClick={() => setConfirmReset(true)}>
              <IconReset size={16} />
              Reset All Progress
            </Button>
          </div>
        </AnimatedSection>

        <Modal
          isOpen={confirmReset}
          onClose={() => setConfirmReset(false)}
          title="Reset Progress?"
        >
          <p>This will permanently delete all your progress data, including problem history and quiz scores. This action cannot be undone.</p>
          <div className="modal-actions">
            <Button variant="primary" onClick={handleReset}>
              Reset Everything
            </Button>
            <Button onClick={() => setConfirmReset(false)}>Cancel</Button>
          </div>
        </Modal>
      </div>
    </div>
  )
}
