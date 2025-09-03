import React, { useState } from 'react'
import ThemeToggle from './ThemeToggle'
import './Navigation.css'

function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <nav className="navigation">
            <div className="nav-container">
                <div className="nav-logo">
                    <span>Recruiting Without Limits</span>
                </div>
                <div className="nav-right">
                    <div className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
                        <a href="#top" onClick={closeMenu}>Home</a>
                        <a href="#about" onClick={closeMenu}>About</a>
                        <a href="#community" onClick={closeMenu}>Community</a>
                        <a href="#platform" onClick={closeMenu}>Platform</a>
                        <a href="#contact" onClick={closeMenu}>Contact</a>
                    </div>
                    <ThemeToggle />
                    <button 
                        className="mobile-menu-toggle"
                        onClick={toggleMenu}
                        aria-label="Toggle mobile menu"
                    >
                        <span className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`}></span>
                        <span className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`}></span>
                        <span className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`}></span>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
