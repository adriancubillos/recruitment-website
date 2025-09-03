import React from 'react'
import './About.css'

function About() {
    return (
        <section id="about" className="about">
            <div className="about-container">
                <h2>About Our Vision</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            Traditional recruitment is broken. Lengthy processes, misaligned incentives,
                            and outdated technology create friction for everyone involved.
                        </p>
                        <p>
                            We're building something different—a platform that rewards performance,
                            fosters collaboration, and leverages cutting-edge AI to match the right
                            people with the right opportunities.
                        </p>
                    </div>
                    <div className="about-stats">
                        <div className="stat">
                            <h3>Revenue Sharing</h3>
                            <p>Transparent commission structures that reward top performers</p>
                        </div>
                        <div className="stat">
                            <h3>Marketing Engine</h3>
                            <p>Automated lead generation and candidate sourcing tools</p>
                        </div>
                        <div className="stat">
                            <h3>Competitive Community</h3>
                            <p>Gamified environment that drives excellence and collaboration</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
