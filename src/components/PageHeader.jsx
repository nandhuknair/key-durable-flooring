import React from 'react';
import { motion } from 'framer-motion';

const PageHeader = ({ title, subtitle }) => {
    return (
        <div style={{
            padding: '8rem 2rem 4rem',
            background: 'var(--text-dark)',
            color: '#fff',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <motion.div
                initial={{ opacity: 0, scale: 1.2 }}
                animate={{ opacity: 0.1, scale: 1 }}
                transition={{ duration: 1.5 }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(circle at center, var(--primary) 0%, transparent 70%)',
                    zIndex: 0
                }}
            />
            <div style={{ position: 'relative', zIndex: 1 }}>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ fontSize: '3rem', marginBottom: '1rem' }}
                >
                    {title}
                </motion.h1>
                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', color: '#ccc' }}
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>
        </div>
    );
};

export default PageHeader;
