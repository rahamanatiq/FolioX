import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import Footer from './Footer';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // NOTE: Please visit https://web3forms.com/, enter your email to get your Access Key, 
        // and replace "YOUR_ACCESS_KEY_HERE" with the key you receive.
        const accessKey = "ed96c6ba-802f-4577-918d-4efb40159957";

        try {
            const formDataObj = {
                ...formData,
                access_key: accessKey,
                subject: `New Portfolio Message from ${formData.name}`
            };

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(formDataObj)
            });

            const result = await response.json();

            if (result.success) {
                setIsSubmitted(true);
                setFormData({ name: '', email: '', message: '' });
            } else {
                console.error("Submission failed:", result);
                alert("Something went wrong! Please check your Access Key in the code.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong! Please try again later.");
        }
    };

    return (
        <div id="contact" style={{
            scrollMarginTop: '80px',
            minHeight: 'auto', // Compact height
            width: '100%',
            padding: '3rem 15px 2rem', // Balanced padding
            background: 'transparent',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 1,
        }}>
            {/* Header Section - Centered over both columns */}
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}> {/* Reduced margin */}
                <div style={{
                    display: 'inline-block',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(5px)',
                    color: 'white',
                    padding: '0.5rem 1.5rem',
                    borderRadius: '50px',
                    fontWeight: '700',
                    fontSize: '0.8rem', // Slightly smaller
                    marginBottom: '1rem',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    border: '1px solid rgba(255, 255, 255, 0.3)'
                }}>
                    <h2>Contact Me</h2>
                </div>
                <h2 style={{
                    fontSize: '2rem', // Slightly smaller header
                    fontWeight: '800',
                    color: 'white',
                    lineHeight: '1.2',
                    margin: '0 auto',
                    maxWidth: '800px'
                }}>
                    Let's collaborate on your next <span style={{ color: '#cfe2ff' }}>breakthrough</span>
                </h2>
            </div>

            {/* Main Content Container - Flex Column for Vertical Stacking */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem', // Further reduced from 1.5rem
                width: '100%',
                maxWidth: '800px',
                margin: '0 auto'
            }}>

                {/* Contact Form Box */}
                <div className="contact-form-container" style={{
                    width: '100%',
                    maxWidth: '600px',
                }}>
                    <div style={{
                        width: '100%',
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        padding: '2rem', // Reduced from 3rem
                        borderRadius: '25px', // Slightly smaller radius
                        boxShadow: '0 10px 30px rgba(0,0,0,0.15)', // Lighter shadow
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        textAlign: 'center'
                    }}>
                        {!isSubmitted ? (
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}> {/* Reduced gap from 1.5rem */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}> {/* Reduced label gap */}
                                    <label htmlFor="name" style={{ fontWeight: '700', color: '#333', fontSize: '0.85rem' }}>Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        style={{
                                            padding: '0.8rem', // Reduced padding
                                            borderRadius: '10px',
                                            border: '2px solid #ddd',
                                            fontSize: '0.9rem',
                                            transition: 'all 0.3s ease',
                                            outline: 'none'
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = '#4d73e2'}
                                        onBlur={(e) => e.target.style.borderColor = '#ddd'}
                                    />
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                                    <label htmlFor="email" style={{ fontWeight: '700', color: '#333', fontSize: '0.85rem' }}>Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        style={{
                                            padding: '0.8rem', // Reduced padding
                                            borderRadius: '10px',
                                            border: '2px solid #ddd',
                                            fontSize: '0.9rem',
                                            transition: 'all 0.3s ease',
                                            outline: 'none'
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = '#4d73e2'}
                                        onBlur={(e) => e.target.style.borderColor = '#ddd'}
                                    />
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                                    <label htmlFor="message" style={{ fontWeight: '700', color: '#333', fontSize: '0.85rem' }}>Your Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        placeholder="How can I help you?"
                                        rows="9" // Increased rows back to 6
                                        style={{
                                            padding: '0.8rem', // Reduced padding
                                            borderRadius: '10px',
                                            border: '2px solid #ddd',
                                            fontSize: '0.9rem',
                                            transition: 'all 0.3s ease',
                                            outline: 'none',
                                            resize: 'none'
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = '#4d73e2'}
                                        onBlur={(e) => e.target.style.borderColor = '#ddd'}
                                    ></textarea>
                                </div>

                                <div style={{ textAlign: 'center' }}>
                                    <button type="submit" style={{
                                        marginTop: '0.5rem', // Reduced margin
                                        padding: '0.8rem 2.5rem', // Reduced padding
                                        backgroundColor: '#4d73e2',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '50px',
                                        fontSize: '0.95rem',
                                        fontWeight: '700',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        boxShadow: '0 8px 15px rgba(77, 115, 226, 0.3)',
                                        minWidth: '150px',
                                        display: 'block',
                                        margin: '0.5rem auto'
                                    }}
                                        onMouseOver={(e) => {
                                            e.currentTarget.style.backgroundColor = '#3b5cc4';
                                            e.currentTarget.style.transform = 'translateY(-2px)';
                                            e.currentTarget.style.boxShadow = '0 12px 20px rgba(77, 115, 226, 0.4)';
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.backgroundColor = '#4d73e2';
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = '0 8px 15px rgba(77, 115, 226, 0.3)';
                                        }}
                                    >
                                        Send
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '1.5rem',
                                animation: 'fadeInScale 0.5s ease-out'
                            }}>
                                <FaCheckCircle size={80} color="#4d73e2" style={{ animation: 'bounceIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }} />
                                <h3 style={{ fontSize: '2rem', color: '#333', fontWeight: '800', margin: 0 }}>Message is sent</h3>
                                <p style={{ color: '#666', fontSize: '1.1rem' }}>Thank you for reaching out! I'll get back to you soon.</p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    style={{
                                        marginTop: '1rem',
                                        padding: '0.8rem 2rem',
                                        backgroundColor: 'transparent',
                                        border: '2px solid #4d73e2',
                                        color: '#4d73e2',
                                        borderRadius: '12px',
                                        fontSize: '1rem',
                                        fontWeight: '700',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.backgroundColor = '#4d73e2';
                                        e.currentTarget.style.color = 'white';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                        e.currentTarget.style.color = '#4d73e2';
                                    }}
                                >
                                    Send Another Message
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer Section - Placed Under the Box */}
                <div className="contact-footer" style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Footer />
                </div>
            </div>

            <style>{`
                @keyframes fadeInScale {
                    from { opacity: 0; transform: scale(0.9); }
                    to { opacity: 1; transform: scale(1); }
                }
                @keyframes bounceIn {
                    0% { transform: scale(0.3); opacity: 0; }
                    50% { transform: scale(1.05); opacity: 1; }
                    70% { transform: scale(0.9); }
                    100% { transform: scale(1); }
                }

                @media (max-width: 900px) {
                    #contact > div {
                        grid-template-columns: 1fr !important; /* Stack on mobile */
                        gap: 3rem !important;
                    }
                    .contact-left {
                        order: 2; /* Footer below on mobile? Or above? flexible. Usually footer is last */
                        text-align: center;
                    }
                    .contact-right {
                        order: 1;
                    }
                }
            `}</style>
        </div >
    );
};

export default Contact;
