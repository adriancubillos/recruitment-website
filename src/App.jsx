import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import About from './components/About'
import Community from './components/Community'
import Platform from './components/Platform'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SmoothScroll from './components/SmoothScroll'
import { ThemeProvider } from './contexts/ThemeContext'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <div className="App" id="top">
        <SmoothScroll />
        <Navigation />
        <Header />
        <Hero />
        <About />
        <Community />
        <Platform />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
