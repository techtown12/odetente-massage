import React from 'react';
import { motion } from 'framer-motion';

const StatisticCard = ({ number, label, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="text-5xl md:text-6xl font-bold text-primary mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>
        {number}
      </div>
      <div className="text-muted-foreground font-medium">{label}</div>
    </motion.div>
  );
};

export default StatisticCard;