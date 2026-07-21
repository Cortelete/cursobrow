import React from 'react';
import { motion } from 'motion/react';

interface SectionProps {
  title?: string;
  children: React.ReactNode;
}

export function Section({ title, children }: SectionProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="py-8 md:py-12"
    >
      {title && (
        <h2 className="text-3xl md:text-4xl font-medium text-gold-500 mb-8 tracking-tight">
          {title}
        </h2>
      )}
      <div className="space-y-6">
        {children}
      </div>
    </motion.div>
  );
}
