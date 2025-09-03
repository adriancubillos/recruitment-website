import React from 'react'
import ThemeToggle from './ThemeToggle'
import './Navigation.css'

function Navigation() {
    return (
        <nav className="navigation">
            <div className="nav-container">
                <div className="nav-logo">
                    <span>Recruiting Without Limits</span>
                </div>
                <div className="nav-right">
                    <div className="nav-links">
                        <a href="#top">Home</a>
                        <a href="#about">About</a>
                        <a href="#community">Community</a>
                        <a href="#platform">Platform</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    )
}

export default Navigation
