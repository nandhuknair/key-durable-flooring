import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const Hero = () => {
    return (
        <section style={{
            position: 'relative',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            background: '#0a0a0a',
            color: '#fff',
            padding: '0 2rem'
        }}>
            {/* Animated Background */}
            <div className="hero-bg" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                opacity: 0.6
            }}>
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        filter: ["hue-rotate(0deg)", "hue-rotate(90deg)", "hue-rotate(0deg)"]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    style={{
                        position: 'absolute',
                        top: '-20%',
                        left: '-10%',
                        width: '50vw',
                        height: '50vw',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
                        filter: 'blur(60px)',
                    }}
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, 100, 0],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    style={{
                        position: 'absolute',
                        bottom: '-20%',
                        right: '-10%',
                        width: '60vw',
                        height: '60vw',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
                        filter: 'blur(80px)',
                    }}
                />
            </div>

            {/* Content */}
            <div style={{
                position: 'relative',
                zIndex: 1,
                textAlign: 'center',
                maxWidth: '800px'
            }}>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                        fontWeight: '800',
                        marginBottom: '1.5rem',
                        lineHeight: '1.1',
                        letterSpacing: '-1px'
                    }}
                >
                    India's Premier <br />
                    <span style={{
                        background: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        Sports Flooring Distributor
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{
                        fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                        color: 'rgba(255,255,255,0.9)',
                        marginBottom: '3rem',
                        maxWidth: '600px',
                        marginInline: 'auto',
                        lineHeight: '1.6'
                    }}
                >
                    We supply world-class certified materials for running tracks, sports courts, and playgrounds across India. Partnering with global leaders to deliver excellence.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{
                        display: 'flex',
                        gap: '1rem',
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    }}
                >
                    <Button to="/contact" variant="primary">Contact Us</Button>
                    <Button to="/about" variant="secondary">About Us</Button>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
                style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    color: '#fff',
                    fontSize: '2rem'
                }}
            >
                ↓
            </motion.div>
        </section>
    );
};

export default Hero;
