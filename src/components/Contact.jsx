import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="contact-container">
                <h2>Get Started</h2>
                <div className="contact-content">
                    <div className="contact-intro">
                        <p>
                            Ready to transform your recruitment career? Join the future of talent acquisition.
                        </p>
                    </div>
                    <div className="contact-info">
                        <div className="contact-method">
                            <h3>Join Our Community</h3>
                            <p>Apply to become part of our exclusive broker network</p>
                            <button className="cta-button">Apply Now</button>
                        </div>
                        <div className="contact-method">
                            <h3>Partner With Us</h3>
                            <p>Explore partnership opportunities for recruitment agencies</p>
                            <button className="cta-button">Learn More</button>
                        </div>
                        <div className="contact-method">
                            <h3>Get in Touch</h3>
                            <p>Questions about our platform or services?</p>
                            <span className="email-address">adriancubcru@gmail.com</span>
                            <p><span className="phone-number">+1 (626)888-2374</span></p>
                            <a
                                href="https://portfolio-snowy-seven-70.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cta-button"
                            >
                                View Portfolio
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
