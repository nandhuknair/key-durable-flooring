import React from 'react';
import { motion } from 'framer-motion';
import { FaBullseye, FaLightbulb, FaHeart } from 'react-icons/fa';

const MissionVision = () => {
    const cards = [
        {
            icon: <FaBullseye />,
            title: 'Our Mission',
            text: 'To supply world-class, sustainable sports flooring materials that empower athletes to perform at their best.'
        },
        {
            icon: <FaLightbulb />,
            title: 'Our Vision',
            text: 'To be the most trusted distributor of sports infrastructure materials in India, setting benchmarks for quality and reliability.'
        },
        {
            icon: <FaHeart />,
            title: 'Core Values',
            text: 'Integrity, Global Sourcing, Certified Quality, and Customer-Centricity drive every supply partition.'
        }
    ];

    return (
        <section style={{ padding: '6rem 2rem' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            style={{
                                background: '#fff',
                                padding: '3rem 2rem',
                                borderRadius: '16px',
                                border: '1px solid #eee',
                                textAlign: 'center',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <div style={{
                                fontSize: '2.5rem',
                                color: 'var(--primary)',
                                marginBottom: '1.5rem',
                                background: 'rgba(12, 77, 162, 0.1)', // Updated to new primary blue alpha
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginInline: 'auto'
                            }}>
                                {card.icon}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{card.title}</h3>
                            <p style={{ color: '#666', lineHeight: '1.6' }}>{card.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MissionVision;
