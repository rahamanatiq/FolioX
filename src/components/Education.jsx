import React from 'react';
import { FaGraduationCap, FaUniversity } from 'react-icons/fa';

const Education = () => {
    const educationData = [
        {
            institution: "Rajshahi University of Engineering & Technology",
            degree: "Bachelor of Science",
            year: "02/2019 - 10/2024",
            description: "Major in Computer Science & Engineering",
            location: "Rajshahi, Bangladesh",
            icon: <FaUniversity />
        },
        {
            institution: "Sirajganj Govt. Collage",
            degree: "Higher Secondary Certificate",
            year: "05/2016 - 04/2018",
            description: "Major in Science",
            location: "Sirajganj, Bangladesh",
            icon: <FaGraduationCap />
        },
        {
            institution: "B.L. Govt. High School",
            degree: "Secondary School Certificate",
            year: "01/2014 - 12/2015",
            description: "Major in Science",
            location: "Sirajganj, Bangladesh",
            icon: <FaGraduationCap />
        }
    ];

    return (
        <div id="education" style={{
            scrollMarginTop: '80px',
            minHeight: 'auto', // Removed fixed height
            width: '100%',
            padding: '4rem 5% 2rem', // Adjusted padding
            background: '#f8f9fa',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1.5rem'
        }}>
            {/* Header Section */}
            <div style={{ textAlign: 'center' }}>
                <div style={{
                    display: 'inline-block',
                    backgroundColor: '#cfe2ff', // Changed to match Experience
                    color: '#084298',
                    padding: '0.6rem 2rem',
                    borderRadius: '50px',
                    fontWeight: '700',
                    fontSize: '0.9rem',
                    marginBottom: '1.5rem',
                    letterSpacing: '1px',
                    textTransform: 'uppercase'
                }}>
                    <h2>Education</h2>
                </div>
                <h2 style={{
                    fontSize: '1.5rem',
                    fontWeight: '800',
                    color: '#333',
                    lineHeight: '1.4',
                    margin: 0,
                    maxWidth: '800px'
                }}>
                    My Academic <span style={{ color: '#4d73e2' }}>Journey</span>
                </h2>
            </div>

            {/* Education Cards */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                width: '100%',
                maxWidth: '900px'
            }}>
                {educationData.map((edu, index) => (
                    <div key={index} className="education-card" style={{
                        display: 'flex',
                        backgroundColor: '#f8f9fa',
                        padding: '2rem',
                        borderRadius: '20px',
                        boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                        borderLeft: '5px solid #4d73e2',
                        transition: 'transform 0.3s ease',
                        alignItems: 'center',
                        gap: '2rem'
                    }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <div style={{
                            minWidth: '70px',
                            height: '70px',
                            borderRadius: '50%',
                            backgroundColor: '#e7f1ff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#4d73e2',
                            fontSize: '1.8rem'
                        }}>
                            {edu.icon}
                        </div>
                        <div style={{ flex: 1, width: '100%' }}>
                            <div className="education-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                                <div className="degree-info">
                                    <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#333', margin: 0 }}>{edu.degree}</h3>
                                    <h4 className="institution-name" style={{ fontSize: '1rem', fontWeight: '600', color: '#4d73e2', marginTop: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        {edu.institution}
                                    </h4>
                                </div>
                                <div className="education-meta" style={{ textAlign: 'right' }}>
                                    <span style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', color: '#333' }}>{edu.year}</span>
                                    <span style={{ display: 'block', fontSize: '0.8rem', color: '#666', marginTop: '0.2rem' }}>{edu.location}</span>
                                </div>
                            </div>

                            <p style={{ color: '#555', lineHeight: '1.6', marginTop: '1rem' }}>
                                • {edu.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .education-card {
                        flex-direction: column !important;
                        text-align: center;
                        gap: 1.5rem !important;
                    }
                    .education-header {
                        flex-direction: column;
                        gap: 0.5rem;
                        align-items: center !important;
                        justify-content: center !important;
                    }
                    .degree-info {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .education-meta {
                        text-align: center !important;
                        margin-top: 0.5rem;
                    }
                    .institution-name {
                        justify-content: center;
                    }
                }
            `}</style>
        </div>
    );
};

export default Education;
