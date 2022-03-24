import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Greeting from './Greeting'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/greeting" element={<Greeting />} />
      </Routes>
    </Router>
  )
}

export default App
