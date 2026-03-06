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
            initial={{ y: 0, opacity: 1 }}
            animate={{
                y: isVisible ? 0 : -32,
                opacity: isVisible ? 1 : 0
            }}
            transition={{ type: 'spring', damping: 20, stiffness: 120 }}
            className="fixed top-0 left-0 right-0 z-[200] w-full bg-brand-red text-white flex items-center overflow-hidden h-[32px] shadow-sm"
        >
            <div className="flex w-full overflow-hidden">
                {/* Desktop View: Centered Text */}
                <div className="hidden md:flex w-full items-center justify-center px-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.1em] leading-none whitespace-nowrap">
                        our store is currently under maintanence, bookings open once everythings ready, thanks for your patience
                    </p>
                </div>

                {/* Mobile View: Slide Animation */}
                <div className="flex md:hidden w-full items-center overflow-hidden">
                    <motion.div
                        animate={{ x: ['0%', '-50%'] }}
                        transition={{
                            repeat: Infinity,
                            duration: 15,
                            ease: 'linear'
                        }}
                        className="flex whitespace-nowrap w-max"
                    >
                        <p className="text-[8px] font-black uppercase tracking-[0.1em] leading-tight px-4 flex-shrink-0 flex items-center">
                            our store is currently under maintanence, bookings open once everythings ready, thanks for your patience
                            <span className="mx-4 text-white/50">•</span>
                        </p>
                        <p className="text-[8px] font-black uppercase tracking-[0.1em] leading-tight px-4 flex-shrink-0 flex items-center">
                            our store is currently under maintanence, bookings open once everythings ready, thanks for your patience
                            <span className="mx-4 text-white/50">•</span>
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
        </motion.div>
    );
};
