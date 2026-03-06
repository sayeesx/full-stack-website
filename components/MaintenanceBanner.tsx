'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

export const MaintenanceBanner = () => {
    const [isVisible, setIsVisible] = React.useState(true);
    const lastScrollY = React.useRef(0);

    React.useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 50 && currentScrollY > lastScrollY.current) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.div
            initial={{ y: -32, opacity: 0 }}
            animate={{
                y: isVisible ? 0 : -32,
                opacity: isVisible ? 1 : 0
            }}
            transition={{ type: 'spring', damping: 20, stiffness: 120 }}
            className="fixed top-0 left-0 right-0 z-[200] w-full bg-brand-red text-white flex items-center justify-center overflow-hidden h-[32px] shadow-sm"
        >
            <div className="w-full px-4 overflow-hidden">
                <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.1em] text-center leading-none whitespace-nowrap">
                    our store is currently under maintanence, bookings open once everythings ready, thanks for your patience
                </p>
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
        </motion.div>
    );
};
