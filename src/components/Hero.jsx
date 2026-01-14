import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SiKaggle } from 'react-icons/si';
import heroImage from '../assets/hero.png';

const Hero = () => {
    return (
        <div id="home" style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            width: '100%',
            overflow: 'hidden', // Ensure no scrollbars
            height: '100vh', // Exactly one page
            minHeight: '100vh'
        }}>
            {/* Social Sidebar */}
            <div className="social-sidebar" style={{
                position: 'absolute',
                right: '3rem',
                top: '15%', /* Positioned "up in the right corner" */
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                zIndex: 10
            }}>
                <a href="https://www.kaggle.com/rahamanatiq" target="_blank" rel="noopener noreferrer" style={{ background: 'white', padding: '10px', borderRadius: '50%', color: '#4d73e2', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', textDecoration: 'none', fontWeight: '900', fontSize: '1.2rem' }}>
                    K
                </a>
                <a href="https://github.com/rahamanatiq" target="_blank" rel="noopener noreferrer" style={{ background: 'white', padding: '10px', borderRadius: '50%', color: '#4d73e2', display: 'flex', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', textDecoration: 'none' }}>
                    <FaGithub size={20} />
                </a>
                <a href="https://www.linkedin.com/in/md-atiqur-rahman-sonnet/" target="_blank" rel="noopener noreferrer" style={{ background: 'white', padding: '10px', borderRadius: '50%', color: '#4d73e2', display: 'flex', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', textDecoration: 'none' }}>
                    <FaLinkedinIn size={20} />
                </a>
            </div>

            {/* Main Image */}
            <div className="hero-image-container" style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: '60px'
            }}>
                <img
                    src={heroImage}
                    alt="Hero Character"
                    className="hero-image"
                    style={{
                        maxWidth: '160%', // Even wider limit
                        maxHeight: '130vh',
                        marginTop: '0vh', // Moved down from -12vh
                        transform: 'scale(1.15)', // Force zoom
                        width: 'auto',
                        objectFit: 'contain',
                    }}
                />
            </div>

            {/* Download CV Button */}
            <a
                href="/assets/CV.pdf"
                download
                className="cv-button"
                style={{
                    position: 'absolute',
                    bottom: '8%', // Moved down to be below the main visual weight
                    left: '49%',
                    transform: 'translateX(-50%)', // Ensure explicit centering
                    padding: '0.8rem 2.5rem',
                    backgroundColor: 'transparent',
                    border: '1px solid white',
                    borderRadius: '30px',
                    color: 'white',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    zIndex: 10,
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = 'white';
                    e.currentTarget.style.color = '#4d73e2';
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'white';
                }}
            >
                Download CV
            </a>

            <style>{`
                @media (max-width: 768px) {
                    .social-sidebar {
                        display: none !important; /* Hide sidebar on mobile */
                    }
                    /* Move social links to bottom or top if needed, or just rely on footer */
                    
                    .hero-image-container {
                        padding-bottom: 20px !important;
                    }

                    .hero-image {
                        max-width: 90% !important;
                        max-height: 50vh !important;
                        margin-top: 5vh !important;
                        transform: scale(1) !important;
                    }
                    
                    .cv-button {
                        position: relative !important;
                        left: auto !important; /* Reset desktop left */
                        transform: none !important; /* Reset desktop transform */
                        margin: -20px auto 20px auto !important; /* Negative margin to pull up, auto to center */
                        background: rgba(255,255,255,0.9);
                        color: #4d73e2; 
                        border: 2px solid #4d73e2;
                        width: fit-content; /* Ensure it doesn't stretch */
                        display: flex !important;
                        justify-content: center;
                    }
                }
            `}</style>
        </div>
    );
};

export default Hero;
