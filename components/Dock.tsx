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

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const navItems = [
        { id: 'home', label: 'Home', icon: Home, href: '/' },
        { id: 'menu', label: 'Menu', icon: UtensilsCrossed, href: '/menu' },
        { id: 'cart', label: 'Cart', icon: ShoppingCart, onClick: () => setIsCartOpen(true), count: true },
        { id: 'profile', label: 'Profile', icon: User, href: '/profile' },
    ];

    if (!isMounted) return null;

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] px-4 w-full max-w-fit">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-full p-2 flex items-center gap-1 md:gap-2"
            >
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;

                    const content = (
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className={`relative p-3 md:p-4 rounded-full transition-colors ${isActive
                                    ? 'bg-brand-red text-white shadow-lg'
                                    : 'hover:bg-gray-100 text-brand-blue'
                                }`}
                        >
                            <Icon size={20} className="md:w-6 md:h-6" />
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
            </motion.div>
        </div>
    );
};
