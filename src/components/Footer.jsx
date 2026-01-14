import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { SiKaggle } from 'react-icons/si';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: <SiKaggle size={20} />, url: 'https://www.kaggle.com/rahamanatiq' },
        { icon: <FaGithub size={20} />, url: 'https://github.com/rahamanatiq' },
        { icon: <FaLinkedinIn size={20} />, url: 'https://www.linkedin.com/in/md-atiqur-rahman-sonnet/' },
        { icon: <FaEnvelope size={20} />, url: 'mailto:rahamanatiqur517@gmail.com' },
    ];

    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'Education', href: '#education' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#project' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <footer style={{
            backgroundColor: 'transparent',
            color: '#fff', // Revert to white
            padding: '1rem 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            position: 'relative',
            height: '100%',
            justifyContent: 'center'
        }}>




            {/* Social Icons & Copyright */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem', // Reduced from 2rem
                flexWrap: 'wrap'
            }}>
                {socialLinks.map((social, index) => (
                    <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            backgroundColor: 'white', // White background
                            color: '#000', // Black icon
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textDecoration: 'none',
                            transition: 'transform 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-3px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        {social.icon}
                    </a>
                ))}
            </div>

            {/* Copyright */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{
                    fontSize: '0.85rem',
                    opacity: 0.6,
                    fontWeight: '400',
                    letterSpacing: '0.5px'
                }}>
                    Copyright © {currentYear} Atiqur Rahman. All Rights Reserved.
                </div>
            </div>

            <style>{`
                @media (max-width: 900px) {
                    footer {
                        align-items: center !important;
                        text-align: center !important;
                        padding: 2rem 0 !important;
                    }
                    div {
                         align-items: center !important;
                    }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
