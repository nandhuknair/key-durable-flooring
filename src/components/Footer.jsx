import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaFacebook, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={{
            background: '#0a0a0a',
            color: '#fff',
            padding: '4rem 2rem 2rem',
            marginTop: 'auto'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '3rem',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                paddingBottom: '3rem'
            }}>
                {/* Brand Column */}
                <div>
                    <Link to="/" style={{ display: 'block', marginBottom: '1.5rem' }}>
                        <img
                            src="/logo/Name board logo.png"
                            alt="Keydurable Flooring"
                            style={{ height: '90px', width: 'auto', filter: 'brightness(0) invert(1)' }}
                        />
                    </Link>
                    <p style={{ color: '#ccc', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                        India's trusted distributor of premium sports flooring materials and systems.
                        Supplying certified surfaces for world-class infrastructure.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <SocialIcon icon={<FaLinkedin />} href="#" />
                        <SocialIcon icon={<FaFacebook />} href="#" />
                        <SocialIcon icon={<FaInstagram />} href="#" />
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--accent)' }}>Quick Links</h3>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        <li><FooterLink to="/" text="Home" /></li>
                        <li><FooterLink to="/about" text="About Us" /></li>
                        <li><FooterLink to="/contact" text="Contact Us" /></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--accent)' }}>Contact Us</h3>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', color: '#ccc' }}>
                            <FaMapMarkerAlt style={{ color: 'var(--accent)', marginTop: '5px', flexShrink: 0 }} />
                            <span>
                                86/1,208 SES COLONY, 2ND MAIN ROAD,<br />
                                YELAHANKA NEW TOWN, BENGALURU 560064<br />
                                GSTIN: 29AZNPP7453L1ZE
                            </span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#ccc' }}>
                            <FaPhoneAlt style={{ color: 'var(--accent)' }} />
                            <span>+91 90749 07086</span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#ccc' }}>
                            <FaEnvelope style={{ color: 'var(--accent)' }} />
                            <span>Keydurableflooring@gmail.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div style={{
                textAlign: 'center',
                paddingTop: '2rem',
                color: '#666',
                fontSize: '0.9rem'
            }}>
                <p>&copy; {new Date().getFullYear()} Keydurable Flooring. All rights reserved.</p>
            </div>
        </footer>
    );
};

const SocialIcon = ({ icon, href }) => (
    <a href={href} style={{
        fontSize: '1.5rem',
        color: '#fff',
        transition: 'color 0.3s ease',
    }}
        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
        onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}
    >
        {icon}
    </a>
);

const FooterLink = ({ to, text }) => (
    <Link to={to} style={{ color: '#ccc', transition: 'color 0.3s ease' }}
        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
        onMouseLeave={(e) => e.currentTarget.style.color = '#ccc'}
    >
        {text}
    </Link>
);

export default Footer;
