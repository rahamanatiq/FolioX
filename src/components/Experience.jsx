import React from 'react';

const Experience = () => {
    return (
        <div id="experience" style={{
            minHeight: '100vh', /* Removed fixed height: 100vh to allow growth */
            width: '100%',
            padding: '7rem 5% 4rem',
            background: '#f8f9fa',
            boxShadow: 'none',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2.5rem',
            position: 'relative',
            zIndex: 2,
            /* Removed overflow: hidden to allow scrolling */
        }}>
            {/* Header Section */}
            <div style={{ textAlign: 'center' }}>
                <div style={{
                    display: 'inline-block',
                    backgroundColor: '#cfe2ff', // Component restored to light blue pill
                    color: '#084298',
                    padding: '0.6rem 2rem',
                    borderRadius: '50px',
                    fontWeight: '700',
                    fontSize: '0.9rem',
                    marginBottom: '1rem',
                    letterSpacing: '1px',
                    textTransform: 'uppercase'
                }}>
                    <h2>My Experience</h2>
                </div>
                <h2 style={{
                    fontSize: '1.5rem',
                    fontWeight: '800',
                    color: '#333',
                    lineHeight: '1.4',
                    margin: 0,
                    maxWidth: '800px'
                }}>
                    A journey of <span style={{ color: '#4d73e2' }}>Professional Growth</span> and <span style={{ color: '#4d73e2' }}>Technical Mastery</span>
                </h2>
            </div>

            {/* Experience Cards Container */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                width: '100%',
                maxWidth: '900px',
                position: 'relative'
            }}>
                {/* Job 1: AI Developer */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.8rem',
                    padding: '2rem',
                    backgroundColor: '#f8f9fa', // Restored to light grey
                    borderRadius: '20px',
                    borderLeft: '5px solid #4d73e2',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                        <div>
                            <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#333', margin: 0 }}>AI Developer</h3>
                            <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#4d73e2', marginTop: '0.3rem' }}>Sparktech Agency</h4>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <span style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', color: '#333' }}>12/2025 - Present</span>
                            <span style={{ display: 'block', fontSize: '0.8rem', color: '#666', marginTop: '0.2rem' }}>Dhaka, Bangladesh</span>
                        </div>
                    </div>
                    <ul style={{ paddingLeft: '1.5rem', margin: 0, color: '#555', lineHeight: '1.5', fontSize: '0.95rem' }}>
                        <li>Assisted in building intelligent AI-driven solutions that enhanced automation and decision-making.</li>
                        <li>Collaborated with cross-functional teams to deliver optimized models and seamless integrations.</li>
                    </ul>
                </div>

                {/* Job 2: Software Engineer Intern */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.8rem',
                    padding: '2rem',
                    backgroundColor: '#f8f9fa', // Restored to light grey
                    borderRadius: '20px',
                    borderLeft: '5px solid #4d73e2',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                        <div>
                            <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#333', margin: 0 }}>Software Engineer Intern</h3>
                            <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#4d73e2', marginTop: '0.3rem' }}>Metal Studio Pvt. Ltd</h4>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <span style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', color: '#333' }}>08/2025 - 10/2025</span>
                            <span style={{ display: 'block', fontSize: '0.8rem', color: '#666', marginTop: '0.2rem' }}>Dhaka, Bangladesh</span>
                        </div>
                    </div>
                    <ul style={{ paddingLeft: '1.5rem', margin: 0, color: '#555', lineHeight: '1.5', fontSize: '0.95rem' }}>
                        <li>Assisted in developing an intelligent address parsing system using Python and NLP to extract structured geospatial data from raw text, accurately identifying landmarks, post offices, and administrative boundaries.</li>
                    </ul>
                </div>

            </div>
            <style>{`
                @media (max-width: 768px) {
                    #experience {
                        padding: 5rem 5% 3rem !important;
                        justify-content: flex-start !important; /* Allow top alignment on mobile */
                    }
                }
            `}</style>
        </div>
    );
};

export default Experience;
