'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { categories } from '@/lib/data/menu';
import {
    Beef as Burger,
    Utensils as Chicken,
    Carrot as Fries,
    Flame as Wings,
    Coffee as Drinks,
    Box as Combos,
    Pizza as Sides
} from 'lucide-react';

const categoryIcons: { [key: string]: any } = {
    'Broasted Chicken': Chicken,
    'Burgers': Burger,
    'Fries': Fries,
    'Wings': Wings,
    'Combos': Combos,
    'Sides': Sides,
    'Drinks': Drinks,
};

export const CategorySection = () => {
    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center mb-12">
                    <h3 className="text-xl font-black text-brand-blue uppercase tracking-[0.3em] mb-2">
                        Explore Menu
                    </h3>
                    <div className="w-20 h-1 bg-brand-red rounded-full" />
                </div>

                <div className="flex overflow-x-auto pb-8 gap-6 md:gap-12 no-scrollbar justify-start md:justify-center">
                    {categories.map((category, index) => {
                        const Icon = categoryIcons[category] || Chicken;
                        return (
                            <motion.button
                                key={category}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="flex flex-col items-center gap-4 min-w-[100px] group"
                            >
                                <div className="w-20 h-20 rounded-3xl bg-gray-50 flex items-center justify-center text-brand-blue group-hover:bg-brand-red group-hover:text-white transition-all duration-300 shadow-premium group-hover:shadow-brand-red/20 transform group-hover:rotate-6">
                                    <Icon size={32} strokeWidth={1.5} />
                                </div>
                                <span className="font-bold text-xs uppercase tracking-widest text-gray-500 group-hover:text-brand-blue transition-colors">
                                    {category}
                                </span>
                            </motion.button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
