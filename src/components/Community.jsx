import React from 'react'
import './Community.css'

function Community() {
    return (
        <section id="community" className="community">
            <div className="community-container">
                <h2>Broker Community</h2>
                <div className="community-content">
                    <div className="community-intro">
                        <p>
                            Join a network of high-performing recruitment professionals who share
                            knowledge, compete for excellence, and grow together.
                        </p>
                    </div>
                    <div className="community-features">
                        <div className="feature">
                            <h3>Performance Leaderboards</h3>
                            <p>Track your rankings across placements, revenue, and client satisfaction metrics</p>
                        </div>
                        <div className="feature">
                            <h3>Peer Learning Network</h3>
                            <p>Share strategies, best practices, and industry insights with top performers</p>
                        </div>
                        <div className="feature">
                            <h3>Collaborative Challenges</h3>
                            <p>Team-based recruitment competitions that drive innovation and results</p>
                        </div>
                        <div className="feature">
                            <h3>Mentorship Program</h3>
                            <p>Connect experienced brokers with rising talent for mutual growth</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Community
