import { IconCheck, IconClose } from '../UI/BitIcons.jsx'
import Button from '../UI/Button.jsx'
import Badge from '../UI/Badge.jsx'
import ProgressBar from '../UI/ProgressBar.jsx'
import SolutionReveal from '../Problem/SolutionReveal.jsx'

export default function QuizResults({ results, onRetake, onReviewIncorrect }) {
  const { score, total, percentage, timeSpent, questionResults } = results

  const topicBreakdown = {}
  questionResults.forEach(qr => {
    const topic = qr.problem.topicId
    if (!topicBreakdown[topic]) topicBreakdown[topic] = { correct: 0, total: 0 }
    topicBreakdown[topic].total++
    if (qr.correct) topicBreakdown[topic].correct++
  })

  return (
    <div className="quiz-results">
      <div className="quiz-results-hero">
        <h2 className="quiz-score-headline">{score}/{total}</h2>
        <div className="quiz-score-percentage">{percentage}%</div>
        {timeSpent > 0 && (
          <p className="quiz-time-spent">
            Completed in {Math.floor(timeSpent / 60)}:{String(timeSpent % 60).padStart(2, '0')}
          </p>
        )}
      </div>

      <div className="quiz-results-breakdown">
        <h3 className="section-subtitle">Performance by Topic</h3>
        {Object.entries(topicBreakdown).map(([topicId, data]) => (
          <ProgressBar
            key={topicId}
            value={data.correct}
            max={data.total}
            label={topicId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
          />
        ))}
      </div>

      <div className="quiz-results-review">
        <h3 className="section-subtitle">Question Review</h3>
        {questionResults.map((qr, i) => (
          <div key={i} className={`quiz-review-item ${qr.correct ? 'review-correct' : 'review-incorrect'}`}>
            <div className="quiz-review-header">
              <span className="quiz-review-icon">
                {qr.correct ? <IconCheck size={16} /> : <IconClose size={16} />}
              </span>
              <Badge>{qr.problem.questionNumber}{qr.problem.subPart || ''}</Badge>
              <span className="quiz-review-status">
                {qr.correct ? 'Correct' : 'Incorrect'}
              </span>
            </div>
            <p className="quiz-review-prompt">{qr.problem.prompt}</p>
            {!qr.correct && (
              <SolutionReveal solution={qr.problem.solution} expectedAnswers={qr.problem.answerFields} />
            )}
          </div>
        ))}
      </div>

      <div className="quiz-results-actions">
        <Button variant="primary" onClick={onRetake} arrow>Retake Quiz</Button>
        <Button onClick={onReviewIncorrect} arrow>Review Incorrect</Button>
      </div>
    </div>
  )
}
