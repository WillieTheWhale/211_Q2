import { useNavigate } from 'react-router-dom'
import { IconArrowDown, IconClock, IconBook } from '../components/UI/BitIcons.jsx'
import AnimatedSection from '../components/UI/AnimatedSection.jsx'
import Button from '../components/UI/Button.jsx'
import Card from '../components/UI/Card.jsx'
import Badge from '../components/UI/Badge.jsx'
import ProgressBar from '../components/UI/ProgressBar.jsx'
import { topics } from '../data/topicMeta.js'
import { getOverallStats, getTopicProgress } from '../utils/scoring.js'
import { useState, useEffect } from 'react'

const learningObjectives = [
  {
    title: 'Data Representation & Bit Manipulation',
    objectives: [
      'Convert values between binary, hexadecimal, and decimal representations',
      'Recall that bits are binary digits (0 or 1) and a byte consists of 8 bits',
      'Use bitwise operators (&, |, ^, ~, <<, >>) to mask, shift, extract, and combine bits',
      'Differentiate between left shift, logical right shift, arithmetic right shift',
      'Addition and subtraction with unsigned and signed two\'s complement',
      'Detecting overflow with unsigned and signed two\'s complement',
      'Understand unsigned, sign-magnitude, one\'s complement, and two\'s complement representations',
    ]
  },
  {
    title: 'Makefile Execution',
    objectives: [
      'Identify the default target in a Makefile (first target listed)',
      'Predict the behavior of make, make <target>, and make <target1> <target2>',
      'Determine which targets are rebuilt after a source file change',
      'Explain why unchanged targets remain up to date',
      'Predict the outcome of running make clean followed by make',
      'Explain what happens when a required dependency does not exist',
    ]
  },
  {
    title: 'Bash Script Interpretation',
    objectives: [
      'Define what a shell script is and describe its role in Unix systems',
      'Explain the purpose of the shebang (#!) line and identify the interpreter',
      'Inspect and modify file permissions to enable script execution',
      'Trace the execution of commands in a shell script',
      'Reason about conditional execution using if statements (-eq, -gt, -lt)',
      'Analyze loop constructs (for loops) and predict iterations',
    ]
  }
]

export default function HomePage() {
  const navigate = useNavigate()
  const [stats, setStats] = useState(null)

  useEffect(() => {
    setStats(getOverallStats())
  }, [])

  const [expandedObj, setExpandedObj] = useState(null)

  return (
    <div className="page-home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">COMP 211<br />Quiz Prep</h1>
          <p className="hero-subtitle">
            Systems Fundamentals — Interactive Practice for Quiz 1
          </p>
          <p className="hero-date">Quiz Date: February 20, 2026</p>
          <div className="hero-actions">
            <Button variant="primary" onClick={() => document.getElementById('topics')?.scrollIntoView({ behavior: 'smooth' })} arrow>
              Start Practicing
            </Button>
            <Button onClick={() => navigate('/quiz')} arrow>
              Take a Quiz
            </Button>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>SCROLL DOWN</span>
          <IconArrowDown size={14} className="arrow" />
        </div>
      </section>

      <div className="container">
        {/* Topic Grid */}
        <section className="section" id="topics">
          <AnimatedSection>
            <div className="section-header">
              <h2 className="section-label">TOPICS</h2>
              <p className="section-subtitle">6 practice sets covering all Quiz 1 material</p>
            </div>
          </AnimatedSection>

          <div className="topic-grid">
            {topics.map((topic, i) => {
              const progress = getTopicProgress(topic.id)
              return (
                <AnimatedSection key={topic.id} delay={i * 0.1}>
                  <Card onClick={() => navigate(`/topic/${topic.id}`)} className="topic-card">
                    <div className="topic-card-header">
                      <Badge>{topic.id.replace(/-/g, ' ')}</Badge>
                      <div className="topic-card-meta">
                        <span><IconClock size={14} /> {topic.estimatedTime}</span>
                      </div>
                    </div>
                    <h3 className="topic-card-title">{topic.title}</h3>
                    <p className="topic-card-subtitle">{topic.subtitle}</p>
                    <p className="topic-card-description">{topic.description}</p>
                    <ProgressBar
                      value={progress.attempted}
                      max={topic.problemCount}
                      label={`${progress.attempted}/${topic.problemCount} problems`}
                    />
                  </Card>
                </AnimatedSection>
              )
            })}
          </div>
        </section>

        {/* Quick Stats */}
        {stats && stats.totalAttempted > 0 && (
          <section className="section section-alt">
            <AnimatedSection>
              <div className="section-header">
                <h2 className="section-label">PROGRESS</h2>
                <p className="section-subtitle">Your study stats at a glance</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="stats-grid">
                <div className="stat-card">
                  <span className="stat-value">{stats.totalAttempted}</span>
                  <span className="stat-label">Problems Attempted</span>
                </div>
                <div className="stat-card">
                  <span className="stat-value">{stats.accuracy}%</span>
                  <span className="stat-label">Accuracy</span>
                </div>
                <div className="stat-card">
                  <span className="stat-value">{stats.topicsStarted}/6</span>
                  <span className="stat-label">Topics Started</span>
                </div>
                <div className="stat-card">
                  <span className="stat-value">{stats.quizzesTaken}</span>
                  <span className="stat-label">Quizzes Taken</span>
                </div>
              </div>
            </AnimatedSection>
          </section>
        )}

        {/* Learning Objectives */}
        <section className="section">
          <AnimatedSection>
            <div className="section-header">
              <h2 className="section-label">OBJECTIVES</h2>
              <p className="section-subtitle">Quiz 1 learning objectives from the course syllabus</p>
            </div>
          </AnimatedSection>

          <div className="objectives-list">
            {learningObjectives.map((obj, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="objective-accordion">
                  <button
                    className={`objective-header ${expandedObj === i ? 'expanded' : ''}`}
                    onClick={() => setExpandedObj(expandedObj === i ? null : i)}
                  >
                    <span className="objective-number">Objective {i + 1}</span>
                    <span className="objective-title">{obj.title}</span>
                    <span className="objective-chevron">{expandedObj === i ? '−' : '+'}</span>
                  </button>
                  {expandedObj === i && (
                    <ul className="objective-items">
                      {obj.objectives.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="section">
          <div className="cta-grid">
            <AnimatedSection>
              <div className="cta-block">
                <h3 className="cta-label">QUIZ</h3>
                <p className="cta-subtitle">Test your knowledge</p>
                <p className="cta-description">
                  Take a timed quiz with questions from all topics. Get instant scoring and detailed review.
                </p>
                <Button onClick={() => navigate('/quiz')} arrow>
                  Start Quiz
                </Button>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="cta-block">
                <h3 className="cta-label">REVIEW</h3>
                <p className="cta-subtitle">Study the material</p>
                <p className="cta-description">
                  Review learning objectives, reference tables, and key concepts for each topic area.
                </p>
                <Button onClick={() => navigate('/review')} arrow>
                  Review Material
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </div>
  )
}
