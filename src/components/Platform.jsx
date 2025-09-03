import React from 'react'
import './Platform.css'

function Platform() {
    return (
        <section id="platform" className="platform">
            <div className="platform-container">
                <h2>AI-Driven Platform</h2>
                <div className="platform-content">
                    <div className="platform-intro">
                        <p>
                            Our intelligent platform learns from every interaction, continuously
                            improving match quality and streamlining the recruitment process.
                        </p>
                    </div>
                    <div className="platform-features">
                        <div className="feature">
                            <h3>Predictive Candidate Matching</h3>
                            <p>Advanced algorithms analyze skills, culture fit, and career trajectories to identify perfect matches</p>
                        </div>
                        <div className="feature">
                            <h3>Automated Workflow Optimization</h3>
                            <p>Smart scheduling, follow-up reminders, and process automation that adapts to your style</p>
                        </div>
                        <div className="feature">
                            <h3>Personalized Skill Development</h3>
                            <p>AI-powered learning paths tailored to individual broker strengths and market demands</p>
                        </div>
                        <div className="feature">
                            <h3>Market Intelligence</h3>
                            <p>Real-time insights on salary trends, skill gaps, and emerging opportunities</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Platform
