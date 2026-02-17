import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import MissionVision from '../components/MissionVision';
import StatsTimeline from '../components/StatsTimeline';
import CallToAction from '../components/CallToAction';

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <PageHeader
                title="About Keydurable Flooring"
                subtitle="Your trusted partner for premium sports flooring materials and distribution."
            />
            <section style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center', fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                <p>
                    Keydurable Flooring is a leading India-based distributor specializing in high-quality sports infrastructure materials.
                    We serve as a vital link between world-class international manufacturers and local contractors, dealers, and infrastructure developers.
                    Our mission is to supply certified, durable, and performance-driven surface materials that enable the construction of
                    championship-standard facilities across the subcontinent.
                </p>
            </section>
            <MissionVision />
            <StatsTimeline />
            <CallToAction />
        </motion.div>
    );
};

export default About;
