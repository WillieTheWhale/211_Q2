import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Layout from './components/Layout/Layout.jsx'

const HomePage = lazy(() => import('./pages/HomePage.jsx'))
const TopicPage = lazy(() => import('./pages/TopicPage.jsx'))
const PracticePage = lazy(() => import('./pages/PracticePage.jsx'))
const QuizPage = lazy(() => import('./pages/QuizPage.jsx'))
const ReviewPage = lazy(() => import('./pages/ReviewPage.jsx'))
const ProgressPage = lazy(() => import('./pages/ProgressPage.jsx'))

function LoadingFallback() {
  return (
    <div className="loading-fallback">
      <div className="loading-spinner" />
    </div>
  )
}

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/topic/:topicId" element={<TopicPage />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/review" element={<ReviewPage />} />
          <Route path="/progress" element={<ProgressPage />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}
