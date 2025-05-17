import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from'./pages/about'
import Resume from './pages/resume'
import Connect from './pages/connect'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/connect" element={<Connect />} />

        </Routes>
  </Router>
  )
}

export default App
