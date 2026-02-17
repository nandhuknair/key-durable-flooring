import React from 'react';
import { motion } from 'framer-motion';

const TrustStrip = () => {
    const certs = [
        '/certs/acoustoscan.jpg', '/certs/asba.png', '/certs/ecolabel.png',
        '/certs/greenguard.jpg', '/certs/intertek.jpg', '/certs/isa_sport.jpg',
        '/certs/itf_2.jpg', '/certs/itf_3.jpg', '/certs/itf_4.jpg', '/certs/itf_5.jpg',
        '/certs/kiwa.jpg', '/certs/labosport.jpg', '/certs/me.jpg',
        '/certs/sports_play.png', '/certs/trackmaster.jpg', '/certs/tuv.png',
        '/certs/usda.png', '/certs/worldclassathletics.jpg'
    ];

    return (
        <section style={{ padding: '4rem 0', background: '#fff', overflow: 'hidden' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', padding: '0 2rem' }}>
                <h3 style={{
                    fontSize: '2rem',
                    color: 'var(--text-dark)',
                    fontWeight: '700',
                    marginBottom: '3rem'
                }}>
                    Accreditations & Certifications
                </h3>

                <div style={{
                    display: 'flex',
                    overflow: 'hidden',
                    maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
                }}>
                    <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
                        style={{ display: 'flex', gap: '4rem', paddingLeft: '4rem', alignItems: 'center' }}
                    >
                        {[...certs, ...certs].map((src, index) => (
                            <div key={index} style={{
                                flexShrink: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '80px',
                                filter: 'grayscale(100%)',
                                opacity: 0.8,
                                transition: 'all 0.3s ease'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.filter = 'grayscale(0%)';
                                    e.currentTarget.style.opacity = '1';
                                    e.currentTarget.style.transform = 'scale(1.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.filter = 'grayscale(100%)';
                                    e.currentTarget.style.opacity = '0.8';
                                    e.currentTarget.style.transform = 'scale(1)';
                                }}
                            >
                                <img
                                    src={src}
                                    alt="Certification"
                                    style={{
                                        height: '100%',
                                        width: 'auto',
                                        objectFit: 'contain',
                                        maxWidth: '150px'
                                    }}
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TrustStrip;
