'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, UtensilsCrossed, ShoppingCart, User, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';

export const Dock = () => {
    const pathname = usePathname();
    const { totalItems, setIsCartOpen } = useCart();
    const [isMounted, setIsMounted] = useState(false);
    const [isAtFooter, setIsAtFooter] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        const handleScroll = () => {
            const footer = document.querySelector('footer');
            if (footer) {
                const footerRect = footer.getBoundingClientRect();
                // Hide dock when footer comes into view (overlapping bottom-6 area)
                if (footerRect.top <= window.innerHeight) {
                    setIsAtFooter(true);
                } else {
                    setIsAtFooter(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 'home', label: 'Home', icon: Home, href: '/' },
        { id: 'menu', label: 'Menu', icon: UtensilsCrossed, href: '/menu' },
        { id: 'cart', label: 'Cart', icon: ShoppingCart, onClick: () => setIsCartOpen(true), count: true },
        { id: 'profile', label: 'Profile', icon: User, href: '/profile' },
    ];

    if (!isMounted) return null;

    return (
        <AnimatePresence>
            {!isAtFooter && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: 'spring', damping: 20, stiffness: 120 }}
                    className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] px-4 w-full max-w-fit"
                >
                    <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-full p-2 flex items-center gap-1 md:gap-2 shadow-none">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            const Icon = item.icon;

                            const content = (
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`relative p-3.5 md:p-4 rounded-full transition-all duration-300 ${isActive
                                        ? 'bg-brand-red text-white'
                                        : 'hover:bg-gray-100/50 text-brand-blue'
                                        }`}
                                >
                                    <Icon size={18} className="md:w-6 md:h-6" />
                                    {item.count && totalItems > 0 && (
                                        <span className="absolute top-2 right-2 flex h-4 w-4 md:h-5 md:w-5 items-center justify-center rounded-full bg-brand-red text-[10px] md:text-xs font-bold text-white ring-2 ring-white">
                                            {totalItems}
                                        </span>
                                    )}
                                    <span className="sr-only">{item.label}</span>
                                </motion.div>
                            );

                            if (item.href) {
                                return (
                                    <Link key={item.id} href={item.href}>
                                        {content}
                                    </Link>
                                );
                            }

                            return (
                                <button key={item.id} onClick={item.onClick} className="outline-none">
                                    {content}
                                </button>
                            );
                        })}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
