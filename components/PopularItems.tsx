'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { menuItems } from '@/lib/data/menu';
import { FoodCard } from './FoodCard';
import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const PopularItems = () => {
    const popularItems = menuItems.filter(item => item.isPopular);

    return (
        <section id="menu" className="py-24 bg-section-bg">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
                    <div className="space-y-4 max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-6xl font-black text-brand-blue leading-tight uppercase tracking-tighter"
                        >
                            CRAVING THE <br />
                            <span className="text-brand-red italic">BEST CRUNCH?</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-500 font-bold uppercase tracking-widest text-sm"
                        >
                            Check out our most ordered finger-licking favorites.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.2 }}
                        className="w-full md:w-auto"
                    >
                        <Link href="/menu">
                            <Button variant="outline" className="group w-full md:w-auto py-6 md:py-4 px-8 text-lg md:text-base">
                                View Full Menu
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                            </Button>
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {popularItems.map((item, index) => (
                        <div key={item.id}>
                            <FoodCard item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
