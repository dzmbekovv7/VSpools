import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const CallToAction = () => (
  <section className="bg-gradient-to-r from-blue-700 to-purple-700 text-white py-20 px-6 text-center">
    <motion.h3
      className="text-4xl font-bold mb-6"
    >
      Ready to start your adventure?
    </motion.h3>
    <Link to="/articles">
    <motion.button
      className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-2xl transition transform hover:scale-105"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      Browse Our Articles
    </motion.button>
    </Link>
  </section>
);

export default CallToAction;
