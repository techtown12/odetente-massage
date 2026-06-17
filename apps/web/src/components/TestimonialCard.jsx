import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-xl p-6 luxury-shadow"
    >
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
        ))}
      </div>
      <p className="text-card-foreground leading-relaxed mb-4 italic">
        "{testimonial.text}"
      </p>
      <div className="border-t border-border pt-4">
        <p className="font-semibold text-card-foreground">{testimonial.name}</p>
        <p className="text-sm text-muted-foreground">{testimonial.service}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;