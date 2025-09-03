import React from 'react'
import './Hero.css'

function Hero() {
    return (
        <section className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <p className="hero-description">
                        We're building a new model for recruitment. One that combines revenue sharing,
                        a marketing engine, a competitive broker community, and an AI-driven learning platform.
                        This is recruitment rewritten for the modern era.
                    </p>
                </div>

                <div className="future-features">
                    <h3>Future Integration Concepts</h3>
                    <div className="feature-mockups">
                        <div className="feature-card">
                            <h4>Community Hub</h4>
                            <p>Interactive broker leaderboards, peer-to-peer learning, and collaborative recruitment challenges</p>
                        </div>
                        <div className="feature-card">
                            <h4>AI Learning Platform</h4>
                            <p>Personalized skill development, predictive candidate matching, and automated workflow optimization</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
