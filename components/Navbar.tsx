'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Menu, X, ChevronRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from './ui/Button';
import { CartDrawer } from './CartDrawer';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const { totalItems } = useCart();

    useEffect(() => {
        setIsMounted(true);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Menu', href: '#menu' },
        { name: 'About', href: '#about' },
        { name: 'Reviews', href: '#reviews' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
                    }`}
            >
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center transform rotate-3">
                                <span className="text-white font-black text-xl">C</span>
                            </div>
                            <div className="flex flex-col">
                                <span className={`font-black text-xl leading-none ${isScrolled ? 'text-brand-blue' : 'text-brand-red'}`}>
                                    CHICK REPUBLIC
                                </span>
                                <span className={`text-[10px] font-bold tracking-[0.2em] leading-none ${isScrolled ? 'text-gray-500' : 'text-brand-blue'}`}>
                                    FRY HARDER
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="font-bold text-sm uppercase tracking-wider text-gray-700 hover:text-brand-red transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setIsCartOpen(true)}
                                className="relative p-2 text-brand-blue hover:text-brand-red transition-colors"
                            >
                                <ShoppingCart size={24} strokeWidth={2.5} />
                                {isMounted && totalItems > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-brand-red text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                                        {totalItems}
                                    </span>
                                )}
                            </button>

                            <Button variant="primary" size="sm" className="hidden md:flex">
                                Order Now
                            </Button>

                            {/* Mobile Menu Toggle */}
                            <button
                                className="md:hidden p-2 text-brand-blue"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                {isOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                        >
                            <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="flex items-center justify-between text-2xl font-black text-brand-blue hover:text-brand-red transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name.toUpperCase()}
                                        <ChevronRight size={24} className="text-gray-300" />
                                    </Link>
                                ))}
                                <Button variant="primary" size="lg" className="mt-4" onClick={() => setIsOpen(false)}>
                                    Order Now
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </>
    );
};
