import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { title: 'Home', path: '/' },
        { title: 'About Us', path: '/about' },
        { title: 'Contact', path: '/contact' },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    // Dynamic styles
    const isHome = location.pathname === '/';
    // All main pages (Home, About, Contact) start with a dark Hero or PageHeader
    const isDarkBg = !scrolled && !isOpen;
    const textColor = isDarkBg ? '#fff' : 'var(--text-dark)';
    const logoColor = isDarkBg ? '#fff' : 'var(--primary)';

    return (
        <nav className="navbar" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            padding: scrolled ? '1rem 2rem' : '1.5rem 2rem',
            background: scrolled || isOpen ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
            backdropFilter: scrolled || isOpen ? 'blur(10px)' : 'none',
            boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
            transition: 'all 0.3s ease',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <div className="logo" style={{
                zIndex: 1001 // Above mobile menu
            }}>
                <Link to="/" style={{ display: 'block' }}>
                    <img
                        src="/logo/Name board logo.png"
                        alt="Keydurable Flooring"
                        style={{
                            height: '75px',
                            width: 'auto',
                            filter: isDarkBg ? 'brightness(0) invert(1)' : 'none',
                            transition: 'filter 0.3s ease'
                        }}
                    />
                </Link>
            </div>

            {/* Desktop Menu */}
            <div className="desktop-menu" style={{ display: 'flex', gap: '2rem' }}>
                <style>{`
          @media (max-width: 768px) {
            .desktop-menu { display: none !important; }
            .mobile-toggle { display: block !important; }
          }
           @media (min-width: 769px) {
            .mobile-toggle { display: none !important; }
          }
        `}</style>
                {navLinks.map((link) => (
                    <Link
                        key={link.title}
                        to={link.path}
                        style={{
                            color: textColor,
                            fontWeight: '600',
                            position: 'relative',
                            fontSize: '1rem',
                        }}
                    >
                        {link.title}
                        {location.pathname === link.path && (
                            <motion.div
                                layoutId="underline"
                                style={{
                                    position: 'absolute',
                                    bottom: '-4px',
                                    left: 0,
                                    width: '100%',
                                    height: '2px',
                                    background: 'var(--accent)',
                                }}
                            />
                        )}
                    </Link>
                ))}
            </div>

            {/* Mobile Toggle */}
            <div className="mobile-toggle" onClick={toggleMenu} style={{
                cursor: 'pointer',
                fontSize: '1.5rem',
                color: logoColor,
                zIndex: 1001
            }}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100vh',
                            background: '#fff',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '2rem',
                            zIndex: 999
                        }}
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.title}
                                to={link.path}
                                style={{
                                    fontSize: '2rem',
                                    fontWeight: '700',
                                    color: 'var(--text-dark)',
                                }}
                                onClick={toggleMenu}
                            >
                                {link.title}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
