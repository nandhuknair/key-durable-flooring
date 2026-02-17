import React from 'react';
import { motion } from 'framer-motion';

const StatsTimeline = () => {
    const stats = [
        { number: '15+', label: 'Global Partners' },
        { number: '500+', label: 'Projects Supported' },
        { number: '100%', label: 'Certified Materials' },
    ];

    const timeline = [
        { year: '1998', title: 'Global Inception', desc: 'Started operations with a focus on sourcing premium sports surfaces.' },
        { year: '2010', title: 'Expansion to Asia', desc: 'Established regional supply chain to serve the growing Asian market.' },
        { year: '2015', title: 'India Entry', desc: 'Registered Keydurable Flooring to provide direct distribution and dealer support across the country.' },
        { year: '2024', title: 'Market Leader', desc: 'Recognized as a top material supplier for stadiums and educational institutions in India.' },
    ];

    return (
        <section>
            {/* Stats Section */}
            <div style={{ background: '#0C4DA2', color: '#fff', padding: '4rem 2rem' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '3rem', textAlign: 'center' }}>
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>{stat.number}</div>
                            <div style={{ fontSize: '1.1rem', opacity: 0.9 }}>{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default StatsTimeline;
