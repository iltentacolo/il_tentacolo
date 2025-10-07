import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './pages/Home'
import IssueDetail from './pages/IssueDetail'

function App() {
  return (
    <div className="app">
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/issue/:issueNumber" element={<IssueDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
