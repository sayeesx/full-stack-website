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
    const [activeIndex, setActiveIndex] = React.useState(0);

    return (
        <section id="menu" className="pt-24 pb-12 bg-section-bg">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
                    <div className="space-y-4 max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-brand-blue leading-tight uppercase tracking-tighter whitespace-nowrap"
                        >
                            CRAVING THE <span className="text-brand-red italic">BEST CRUNCH?</span>
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
                        className="hidden md:block w-auto"
                    >
                        <Link href="/menu">
                            <Button variant="outline" size="md" className="group w-auto">
                                View Full Menu
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                            </Button>
                        </Link>
                    </motion.div>
                </div>

                <div className="relative">
                    <div
                        onScroll={(e) => {
                            const target = e.target as HTMLDivElement;
                            const scrollLeft = target.scrollLeft;
                            const width = target.scrollWidth - target.clientWidth;
                            if (width > 0) {
                                const index = Math.round((scrollLeft / width) * 3);
                                setActiveIndex(Math.min(3, Math.max(0, index)));
                            }
                        }}
                        className="flex md:grid md:grid-cols-4 gap-4 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 scrollbar-hide snap-x snap-mandatory"
                    >
                        {popularItems.slice(0, 4).map((item) => (
                            <div key={item.id} className="min-w-[45vw] md:min-w-0 snap-start flex-shrink-0">
                                <FoodCard item={item} />
                            </div>
                        ))}
                    </div>
                    {/* Subtle white fade gradient for mobile scrollable indication */}
                    <div className="md:hidden absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-section-bg to-transparent pointer-events-none" />
                </div>

                {/* Mobile Dots Indicator */}
                <div className="md:hidden flex justify-center gap-2 mt-4">
                    {[0, 1, 2, 3].map((idx) => (
                        <div
                            key={idx}
                            className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === idx ? 'w-6 bg-brand-red' : 'w-1.5 bg-gray-300'}`}
                        />
                    ))}
                </div>

                {/* Mobile Swipe Hint */}
                <div className="md:hidden flex items-center justify-center mt-3 text-brand-red opacity-60 pointer-events-none">
                    <span className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                        <span>&larr;</span> Swipe <span>&rarr;</span>
                    </span>
                </div>

                {/* Mobile View Full Menu */}
                <div className="md:hidden mt-4 relative pt-6 pb-2">
                    <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-t from-section-bg via-section-bg to-transparent pointer-events-none z-0" />
                    <div className="relative z-10">
                        <Link href="/menu">
                            <Button variant="outline" size="sm" className="group w-full bg-white shadow-sm h-10">
                                View Full Menu
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
