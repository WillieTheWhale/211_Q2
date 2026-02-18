import { useState } from 'react'
import Button from '../UI/Button.jsx'
import { topics } from '../../data/topicMeta.js'

export default function QuizSelector({ onStart }) {
  const [selectedTopics, setSelectedTopics] = useState(topics.map(t => t.id))
  const [questionCount, setQuestionCount] = useState(15)
  const [timeLimit, setTimeLimit] = useState(20)

  const toggleTopic = (id) => {
    setSelectedTopics(prev =>
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    )
  }

  const handleStart = () => {
    if (selectedTopics.length === 0) return
    onStart({
      topics: selectedTopics,
      questionCount,
      timeLimit: timeLimit * 60
    })
  }

  return (
    <div className="quiz-selector">
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
        <h3 className="section-subtitle">Number of Questions</h3>
        <div className="quiz-count-options">
          {[10, 15, 20, 25].map(count => (
            <button
              key={count}
              className={`quiz-count-option ${questionCount === count ? 'active' : ''}`}
              onClick={() => setQuestionCount(count)}
            >
              {count}
            </button>
          ))}
        </div>
      </div>

      <div className="quiz-selector-section">
        <h3 className="section-subtitle">Time Limit</h3>
        <div className="quiz-count-options">
          {[
            { value: 0, label: 'None' },
            { value: 15, label: '15 min' },
            { value: 20, label: '20 min' },
            { value: 30, label: '30 min' },
          ].map(opt => (
            <button
              key={opt.value}
              className={`quiz-count-option ${timeLimit === opt.value ? 'active' : ''}`}
              onClick={() => setTimeLimit(opt.value)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <Button
        variant="primary"
        onClick={handleStart}
        disabled={selectedTopics.length === 0}
        arrow
        className="quiz-start-button"
      >
        Begin Quiz
      </Button>
    </div>
  )
}
