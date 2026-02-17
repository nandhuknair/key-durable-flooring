import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Simulate API call
        setTimeout(() => {
            setSubmitted(true);
            setFormData({ name: '', email: '', phone: '', message: '' });
        }, 1000);
    };

    const inputStyles = {
        width: '100%',
        padding: '1rem',
        borderRadius: '8px',
        border: '1px solid #ddd',
        fontSize: '1rem',
        outline: 'none',
        transition: 'border-color 0.3s ease',
        marginBottom: '0.5rem',
        fontFamily: 'var(--font-body)'
    };

    const labelStyles = {
        display: 'block',
        marginBottom: '0.5rem',
        fontSize: '0.9rem',
        fontWeight: '600',
        color: 'var(--text-dark)'
    };

    const errorStyles = {
        color: '#e74c3c',
        fontSize: '0.85rem',
        marginTop: '0.2rem',
        marginBottom: '1rem',
        display: 'block'
    };

    return (
        <div style={{
            background: '#fff',
            padding: '2.5rem',
            borderRadius: '20px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.08)'
        }}>
            <AnimatePresence mode="wait">
                {submitted ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        style={{ textAlign: 'center', padding: '3rem 0' }}
                    >
                        <div style={{ fontSize: '4rem', color: 'var(--primary)', marginBottom: '1rem' }}>✓</div>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Message Sent!</h3>
                        <p style={{ color: '#666' }}>Thank you for reaching out. We will get back to you shortly.</p>
                        <button
                            onClick={() => setSubmitted(false)}
                            style={{
                                marginTop: '2rem',
                                background: 'transparent',
                                border: 'none',
                                color: 'var(--primary)',
                                textDecoration: 'underline',
                                cursor: 'pointer'
                            }}
                        >
                            Send another message
                        </button>
                    </motion.div>
                ) : (
                    <motion.form
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
                    >
                        <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--text-dark)', fontWeight: '700' }}>Send us a Message</h3>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.2rem' }}>
                            <div style={{ position: 'relative' }}>
                                <label htmlFor="name" style={labelStyles}>Full Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    style={{
                                        ...inputStyles,
                                        borderColor: errors.name ? '#e74c3c' : '#eee',
                                        background: '#f9f9f9',
                                        marginBottom: 0
                                    }}
                                    placeholder="John Doe"
                                    onFocus={(e) => {
                                        e.target.style.borderColor = 'var(--primary)';
                                        e.target.style.background = '#fff';
                                        e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = errors.name ? '#e74c3c' : '#eee';
                                        e.target.style.background = '#f9f9f9';
                                        e.target.style.boxShadow = 'none';
                                    }}
                                />
                                {errors.name && <motion.span initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} style={errorStyles}>{errors.name}</motion.span>}
                            </div>

                            <div style={{ position: 'relative' }}>
                                <label htmlFor="email" style={labelStyles}>Email Address *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    style={{
                                        ...inputStyles,
                                        borderColor: errors.email ? '#e74c3c' : '#eee',
                                        background: '#f9f9f9',
                                        marginBottom: 0
                                    }}
                                    placeholder="john@example.com"
                                    onFocus={(e) => {
                                        e.target.style.borderColor = 'var(--primary)';
                                        e.target.style.background = '#fff';
                                        e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = errors.email ? '#e74c3c' : '#eee';
                                        e.target.style.background = '#f9f9f9';
                                        e.target.style.boxShadow = 'none';
                                    }}
                                />
                                {errors.email && <motion.span initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} style={errorStyles}>{errors.email}</motion.span>}
                            </div>
                        </div>

                        <div style={{ position: 'relative' }}>
                            <label htmlFor="phone" style={labelStyles}>Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                style={{
                                    ...inputStyles,
                                    borderColor: '#eee',
                                    background: '#f9f9f9',
                                    marginBottom: 0
                                }}
                                placeholder="+91 90749 07086"
                                onFocus={(e) => {
                                    e.target.style.borderColor = 'var(--primary)';
                                    e.target.style.background = '#fff';
                                    e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = '#eee';
                                    e.target.style.background = '#f9f9f9';
                                    e.target.style.boxShadow = 'none';
                                }}
                            />
                        </div>

                        <div style={{ position: 'relative' }}>
                            <label htmlFor="message" style={labelStyles}>Message *</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                style={{
                                    ...inputStyles,
                                    resize: 'vertical',
                                    borderColor: errors.message ? '#e74c3c' : '#eee',
                                    background: '#f9f9f9',
                                    marginBottom: 0,
                                    minHeight: '100px'
                                }}
                                placeholder="How can we help you?"
                                onFocus={(e) => {
                                    e.target.style.borderColor = 'var(--primary)';
                                    e.target.style.background = '#fff';
                                    e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = errors.message ? '#e74c3c' : '#eee';
                                    e.target.style.background = '#f9f9f9';
                                    e.target.style.boxShadow = 'none';
                                }}
                            />
                            {errors.message && <motion.span initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} style={errorStyles}>{errors.message}</motion.span>}
                        </div>

                        <div style={{ marginTop: '0.5rem' }}>
                            <Button
                                type="submit"
                                variant="primary"
                                style={{
                                    width: '100%',
                                    color: 'white',
                                    padding: '1rem',
                                    fontSize: '1.1rem',
                                    background: 'linear-gradient(135deg, #0C4DA2 0%, #322BDF 100%)',
                                    border: 'none',
                                    boxShadow: '0 4px 15px rgba(12, 77, 162, 0.3)'
                                }}
                            >
                                Send Message
                            </Button>
                        </div>
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ContactForm;
