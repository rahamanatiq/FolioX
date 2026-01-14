import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const navLinks = ['Home', 'Education', 'Skills', 'Experience', 'Project', 'Contact'];
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '-50% 0px -50% 0px',
            threshold: 0
        };

        const callback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);
        navLinks.forEach(link => {
            const section = document.getElementById(link.toLowerCase());
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, [navLinks]);

    // Toggle menu
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Close menu when clicking a link
    const handleLinkClick = (id) => {
        setIsMenuOpen(false);
    };

    const isHome = activeSection === 'home';

    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1.2rem 8%',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            backgroundColor: isHome && !isMenuOpen ? 'transparent' : '#4d73e2', // Solid color when menu is open or not home
            boxShadow: isHome && !isMenuOpen ? 'none' : '0 2px 15px rgba(0,0,0,0.1)',
            color: 'white',
            transition: 'all 0.4s ease'
        }}>
            <a href="#home" style={{
                fontFamily: '"Inter", sans-serif',
                fontWeight: '800',
                fontSize: '1.8rem',
                letterSpacing: '-1px', // Tighter spacing for logo
                color: 'white',
                textDecoration: 'none',
                zIndex: 1001 // Ensure logo is above mobile menu
            }}>
                AtiQ.
            </a>

            {/* Desktop Menu */}
            <div className="desktop-menu" style={{
                display: 'flex',
                gap: '2.5rem'
            }}>
                {navLinks.map((link) => {
                    const id = link.toLowerCase();
                    const isActive = activeSection === id;
                    return (
                        <a
                            key={link}
                            href={`#${id}`}
                            style={{
                                fontSize: '0.95rem',
                                fontWeight: '600',
                                color: 'white',
                                textDecoration: 'none',
                                position: 'relative',
                                transition: 'all 0.3s ease',
                                opacity: isActive ? 1 : 0.8
                            }}
                        >
                            {link}
                            <div style={{
                                position: 'absolute',
                                bottom: '-10px', // Moved down to avoid overlapping text
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: isActive ? '100%' : '0%',
                                height: '2px',
                                backgroundColor: 'white',
                                transition: 'all 0.3s ease',
                                borderRadius: '10px'
                            }} />
                        </a>
                    );
                })}
            </div>

            {/* Mobile Hamburger Icon */}
            <div className="mobile-hamburger" onClick={toggleMenu} style={{
                display: 'none', // Hidden by default, shown via CSS
                fontSize: '1.8rem',
                cursor: 'pointer',
                zIndex: 1001,
                color: 'white'
            }}>
                {isMenuOpen ? '✕' : '☰'}
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`} style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                backgroundColor: '#4d73e2',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '2rem',
                transition: 'transform 0.3s ease-in-out',
                transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
                zIndex: 1000
            }}>
                {navLinks.map((link) => {
                    const id = link.toLowerCase();
                    return (
                        <a
                            key={link}
                            href={`#${id}`}
                            onClick={() => handleLinkClick(id)}
                            style={{
                                fontSize: '1.5rem',
                                fontWeight: '700',
                                color: 'white',
                                textDecoration: 'none'
                            }}
                        >
                            {link}
                        </a>
                    );
                })}
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .desktop-menu {
                        display: none !important;
                    }
                    .mobile-hamburger {
                        display: block !important;
                    }
                    nav {
                        padding: 1.2rem 5% !important;
                    }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
