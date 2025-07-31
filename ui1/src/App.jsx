import React, { useEffect, useState } from 'react'
import './index.css'
import './App.css'
import Navbar from './Navbar'
import Skincare from './Skincare'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (scrollPosition > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="main-container">
      <Navbar />
      <img 
        src="/bg.jpg" 
        alt="Top Banner" 
        className={`top-image ${isScrolled ? 'scroll-up' : ''}`} 
      />
      <Skincare />
    </div>
  )
}

export default App

