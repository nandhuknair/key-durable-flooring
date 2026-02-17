import React from 'react';
import Button from './Button';
import { motion } from 'framer-motion';

const CallToAction = () => {
    return (
        <section style={{
            padding: '6rem 2rem',
            background: '#f9f9f9', // Light background
            color: 'var(--text-dark)', // Dark text
            textAlign: 'center'
        }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--text-dark)' }}
                >
                    Ready to Build a World-Class Facility?
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    style={{ fontSize: '1.1rem', marginBottom: '3rem', opacity: 0.8, color: '#555' }}
                >
                    Contact Keydurable Flooring today for a consultation and quote. Let's create the ground for future champions.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <Button to="/contact" variant="primary">Get in Touch</Button>
                </motion.div>
            </div>
        </section>
    );
};

export default CallToAction;
