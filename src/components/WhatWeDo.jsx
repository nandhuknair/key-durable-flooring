import React from 'react';
import { motion } from 'framer-motion';
import { FaRunning, FaBasketballBall, FaChild } from 'react-icons/fa';

const WhatWeDo = () => {
    const services = [
        {
            icon: <FaRunning />,
            title: 'Athletic Track Supply',
            desc: 'Providing certified synthetic track materials for stadiums and schools.'
        },
        {
            icon: <FaBasketballBall />,
            title: 'Court Material Supply',
            desc: 'Distributing top-tier acrylic and PU systems for indoor/outdoor courts.'
        },
        {
            icon: <FaChild />,
            title: 'Playground Flooring',
            desc: 'Safe and durable impact-absorbing surfaces for play areas.'
        }
    ];

    return (
        <section style={{ padding: '6rem 2rem', background: '#f9f9f9' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-dark)' }}
                >
                    Sports Flooring Material Distribution
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    style={{ color: '#666', marginBottom: '4rem', maxWidth: '600px', marginInline: 'auto' }}
                >
                    We specialize in the supply and distribution of premium sports flooring materials tailored for every athlete and every discipline.
                </motion.p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '3rem'
                }}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.2 }}
                            style={{
                                background: '#fff',
                                padding: '3rem 2rem',
                                borderRadius: '20px',
                                boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '1.5rem'
                            }}
                        >
                            <div style={{
                                fontSize: '3rem',
                                color: 'var(--accent)',
                                background: 'rgba(0, 212, 255, 0.1)',
                                padding: '1.5rem',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {service.icon}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-dark)' }}>{service.title}</h3>
                            <p style={{ color: '#666', lineHeight: '1.6' }}>{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
