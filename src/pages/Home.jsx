import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import HighlightCards from '../components/HighlightCards';
import WhatWeDo from '../components/WhatWeDo';
import SystemCategories from '../components/SystemCategories';
import ProductCategories from '../components/ProductCategories';
import TrustStrip from '../components/TrustStrip';
import CallToAction from '../components/CallToAction';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Hero />
            <HighlightCards />
            <WhatWeDo />
            <SystemCategories />
            <ProductCategories />
            <TrustStrip />
            <CallToAction />
        </motion.div>
    );
};

export default Home;
