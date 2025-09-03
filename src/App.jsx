import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import './App.css'

function App() {
    return (
        <div className="App">
            <Navigation />
            <Header />
            <Hero />
            <Footer />
        </div>
    )
}

export default App
