'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  dark?: boolean;
  align?: 'center' | 'left';
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
  align = 'center',
  className,
}: SectionHeadingProps) {
  const centered = align === 'center';
  return (
    <div
      className={cn(
        'max-w-3xl',
        centered ? 'mx-auto text-center' : 'text-left',
        className,
      )}
    >
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-subtitle mb-4 block font-semibold text-[#c9a962]"
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className={cn(
          'section-title font-bold',
          dark ? 'text-white' : 'text-[#1a1a1a]',
        )}
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className={cn(
          'mt-6 h-0.5 w-24 origin-center bg-gradient-to-r from-transparent via-[#c9a962] to-transparent',
          centered ? 'mx-auto' : '',
        )}
      />
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={cn(
            'mt-6 text-lg leading-relaxed',
            dark ? 'text-white/60' : 'text-gray-600',
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
