import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaBraille, FaDotCircle, FaRecycle, FaScroll,
    FaThLarge, FaFlask, FaVial, FaIndustry,
    FaPaintRoller, FaHardHat, FaPalette
} from 'react-icons/fa';
import Button from './Button';

const ProductCategories = () => {
    const [showAll, setShowAll] = useState(false);

    const products = [
        { icon: <FaBraille />, name: 'EPDM Granules' },
        { icon: <FaDotCircle />, name: 'TPV Granules' },
        { icon: <FaRecycle />, name: 'SBR Granules' },
        { icon: <FaScroll />, name: 'Prefabricated Shock-Pads' },
        { icon: <FaThLarge />, name: 'Rubber Tiles' },
        { icon: <FaFlask />, name: 'PU Binders' },
        { icon: <FaVial />, name: 'PU Sports Flooring Materials' },
        { icon: <FaIndustry />, name: 'PU Industrial Flooring Materials' },
        { icon: <FaPaintRoller />, name: 'Acrylic Sports Flooring Materials' },
        { icon: <FaHardHat />, name: 'Epoxy Industrial Flooring Materials' },
        { icon: <FaPalette />, name: 'Epoxy Decorative Flooring Materials' },
    ];

    const visibleProducts = showAll ? products : products.slice(0, 8);

    return (
        <section style={{ padding: '6rem 2rem', background: '#f0f4f8' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '2.5rem', marginBottom: '3rem', color: 'var(--text-dark)' }}
                >
                    Materials We Distribute
                </motion.h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                    gap: '2rem',
                    marginBottom: '3rem'
                }}>
                    <AnimatePresence>
                        {visibleProducts.map((prod, index) => (
                            <motion.div
                                key={prod.name}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                style={{
                                    background: '#fff',
                                    padding: '2rem',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1.5rem',
                                    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                                    borderLeft: '4px solid var(--accent)',
                                    textAlign: 'left'
                                }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div style={{
                                    fontSize: '2rem',
                                    color: 'var(--primary)',
                                    flexShrink: 0
                                }}>
                                    {prod.icon}
                                </div>
                                <h3 style={{
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    color: '#333'
                                }}>
                                    {prod.name}
                                </h3>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {products.length > 8 && (
                    <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Button
                            variant="primary"
                            onClick={() => setShowAll(!showAll)}
                        >
                            {showAll ? 'Show Less' : 'View All Products'}
                        </Button>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default ProductCategories;
