import React from 'react';
import { motion } from 'framer-motion';
import { FaMedal, FaShieldAlt, FaRocket, FaLeaf } from 'react-icons/fa';

const HighlightCards = () => {
    const cards = [
        {
            icon: <FaMedal />,
            title: 'Certified Materials',
            desc: 'Supplying WA, ITF, and FIFA certified products.'
        },
        {
            icon: <FaShieldAlt />,
            title: 'Global Sourcing',
            desc: 'Partnering with top international manufacturers.'
        },
        {
            icon: <FaRocket />,
            title: 'Rapid Supply',
            desc: 'Efficient logistics network across India.'
        },
        {
            icon: <FaLeaf />,
            title: 'Eco-Friendly',
            desc: 'Sustainable and non-toxic material options.'
        }
    ];

    return (
        <section style={{
            padding: '5rem 2rem',
            background: 'var(--bg-light)',
            position: 'relative',
            zIndex: 2,
            marginTop: '-50px' // Overlap slightly with hero
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '2rem'
            }}>
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                        style={{
                            background: '#fff',
                            padding: '2rem',
                            borderRadius: '20px',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                            textAlign: 'left',
                            border: '1px solid rgba(0,0,0,0.05)'
                        }}
                    >
                        <div style={{
                            fontSize: '2.5rem',
                            color: 'var(--primary)',
                            marginBottom: '1.5rem'
                        }}>
                            {card.icon}
                        </div>
                        <h3 style={{
                            fontSize: '1.25rem',
                            marginBottom: '1rem',
                            color: 'var(--text-dark)'
                        }}>
                            {card.title}
                        </h3>
                        <p style={{
                            color: '#666',
                            fontSize: '0.95rem',
                            lineHeight: '1.6'
                        }}>
                            {card.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default HighlightCards;
