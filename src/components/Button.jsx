import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Button = ({ children, to, variant = 'primary', onClick, ...props }) => {
    const baseStyles = {
        padding: '0.8rem 2rem',
        borderRadius: '50px',
        fontWeight: '600',
        fontSize: '1rem',
        cursor: 'pointer',
        border: 'none',
        outline: 'none',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        transition: 'all 0.3s ease',
    };

    const variants = {
        primary: {
            background: 'var(--primary)',
            color: '#fff',
            border: '2px solid var(--primary)',
        },
        secondary: {
            background: 'transparent',
            color: '#fff',
            border: '2px solid #fff',
        },
        outline: {
            background: 'transparent',
            color: 'var(--primary)',
            border: '2px solid var(--primary)',
        }
    };

    const Component = to ? Link : motion.button;
    const linkProps = to ? { to } : {};

    return (
        <Component
            {...linkProps}
            style={{ ...baseStyles, ...variants[variant] }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            {...props}
        >
            {children}
        </Component>
    );
};

export default Button;
