import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaRunning, FaSun, FaBuilding, FaChild, FaWalking,
    FaBicycle, FaWater, FaChessKnight, FaIndustry,
    FaPaintBrush, FaTools, FaStar, FaLayerGroup
} from 'react-icons/fa';
import Button from './Button';

const SystemCategories = () => {
    const [showAll, setShowAll] = useState(false);

    const categories = [
        { icon: <FaRunning />, name: 'Running Tracks' },
        { icon: <FaSun />, name: 'Outdoor Sports Flooring' },
        { icon: <FaBuilding />, name: 'Indoor Sports Flooring' },
        { icon: <FaChild />, name: 'Playground Floorings' },
        { icon: <FaWalking />, name: 'Jogging Tracks' },
        { icon: <FaBicycle />, name: 'Cycling Tracks' },
        { icon: <FaWater />, name: 'Splash Parks / Water Park' },
        { icon: <FaLayerGroup />, name: 'EPDM Flooring' },
    ];

    const visibleCategories = showAll ? categories : categories.slice(0, 8);

    return (
        <section style={{ display: 'flex', flexWrap: 'wrap', minHeight: '100vh', background: '#fff' }}>
            {/* Left Column - Image Placeholder */}
            <div style={{
                flex: '1 1 400px',
                minHeight: '500px',
                background: 'linear-gradient(135deg, #EF403D 0%, #0C4DA2 100%)',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
                color: '#fff'
            }}>
                <div style={{ textAlign: 'center', zIndex: 2 }}>
                    <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>World-Class Surfaces</h3>
                    <p style={{ opacity: 0.9 }}>Replace this with a project image</p>
                </div>
                {/* Overlay for better text readability if an image is added later */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.2)' }} />
            </div>

            {/* Right Column - Content */}
            <div style={{
                flex: '1 1 600px',
                padding: '4rem 3rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                background: '#fff'
            }}>
                <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ fontSize: '2.5rem', marginBottom: '3rem', color: 'var(--text-dark)', textAlign: 'left' }}
                    >
                        Systems We Supply Materials For
                    </motion.h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
                        gap: '1.5rem',
                        marginBottom: '3rem'
                    }}>
                        <AnimatePresence>
                            {visibleCategories.map((cat, index) => (
                                <motion.div
                                    key={cat.name}
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.3 }}
                                    style={{
                                        background: '#f8f9fa',
                                        padding: '1.5rem 1rem',
                                        borderRadius: '12px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: '0.8rem',
                                        cursor: 'pointer',
                                        border: '1px solid #eee',
                                        textAlign: 'center'
                                    }}
                                    whileHover={{ y: -5, borderColor: 'var(--primary)', boxShadow: '0 5px 15px rgba(239, 64, 61, 0.1)' }}
                                >
                                    <div style={{
                                        fontSize: '2rem',
                                        color: 'var(--primary)',
                                    }}>
                                        {cat.icon}
                                    </div>
                                    <h3 style={{
                                        fontSize: '0.9rem',
                                        fontWeight: '600',
                                        color: '#444'
                                    }}>
                                        {cat.name}
                                    </h3>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {categories.length > 8 && (
                        <motion.div
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            style={{ textAlign: 'left' }}
                        >
                            <Button
                                variant="outline"
                                onClick={() => setShowAll(!showAll)}
                            >
                                {showAll ? 'Show Less' : 'View All Systems'}
                            </Button>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default SystemCategories;
