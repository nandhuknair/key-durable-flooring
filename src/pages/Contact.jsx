import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <PageHeader
                title="Contact Us"
                subtitle="We're here to help you build the perfect ground for success."
            />

            <section style={{ padding: '6rem 2rem', background: '#f8f9fa' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 450px)',
                        gap: '4rem',
                        alignItems: 'start'
                    }}>
                        {/* Info Column */}
                        <ContactInfo />

                        {/* Form Column */}
                        <div style={{ position: 'sticky', top: '100px' }}>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Contact;
