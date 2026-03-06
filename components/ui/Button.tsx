'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<'button'> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    className = '',
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: 'bg-brand-red text-white hover:bg-[#B01015] focus:ring-brand-red shadow-lg hover:shadow-xl transform hover:-translate-y-1',
        secondary: 'bg-brand-blue text-white hover:bg-[#0D3866] focus:ring-brand-blue shadow-lg hover:shadow-xl transform hover:-translate-y-1',
        outline: 'border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white focus:ring-brand-red',
        ghost: 'text-brand-blue hover:bg-blue-50 focus:ring-brand-blue',
    };

    const sizes = {
        sm: 'px-3 py-1 md:px-4 md:py-1.5 text-[9px] md:text-xs uppercase tracking-wider',
        md: 'px-4 py-1.5 md:px-5 md:py-2 text-[10px] md:text-sm uppercase tracking-wider',
        lg: 'px-5 py-2 md:px-8 md:py-2.5 text-xs md:text-base uppercase tracking-widest',
    };

    return (
        <motion.button
            whileTap={{ scale: 0.95 }}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
};
