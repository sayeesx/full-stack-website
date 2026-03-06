'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { categories, menuItems } from '@/lib/data/menu';
import { FoodCard } from '@/components/FoodCard';
import { UtensilsCrossed, Search, Filter } from 'lucide-react';

export default function MenuPage() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredItems = menuItems.filter(item => {
        const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-20">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-12 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-6 py-2 bg-brand-red/10 text-brand-red rounded-full font-black text-xs uppercase tracking-widest"
                    >
                        <UtensilsCrossed size={16} />
                        Full Menu
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black text-brand-blue uppercase tracking-tighter"
                    >
                        Everything <span className="text-brand-red italic">Crispy</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 text-lg md:text-xl font-bold uppercase tracking-tight"
                    >
                        Freshly prepared, marinated for 24 hours, and fried to golden perfection.
                    </motion.p>
                </div>

                {/* Filters & Search */}
                <div className="max-w-6xl mx-auto mb-12 space-y-6">
                    <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                        {/* Search */}
                        <div className="relative w-full md:max-w-md">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search your favorite chicken..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-6 py-4 bg-white border border-gray-100 rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all font-bold text-brand-blue"
                            />
                        </div>

                        {/* Categories */}
                        <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full md:w-auto scrollbar-hide">
                            <button
                                onClick={() => setActiveCategory('All')}
                                className={`px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest transition-all shrink-0 ${activeCategory === 'All'
                                        ? 'bg-brand-blue text-white shadow-lg'
                                        : 'bg-white text-brand-blue border border-gray-100 hover:bg-gray-50'
                                    }`}
                            >
                                All Items
                            </button>
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest transition-all shrink-0 ${activeCategory === cat
                                            ? 'bg-brand-blue text-white shadow-lg'
                                            : 'bg-white text-brand-blue border border-gray-100 hover:bg-gray-50'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Menu Grid */}
                <div className="max-w-6xl mx-auto">
                    {filteredItems.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredItems.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <FoodCard item={item} />
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white rounded-[3rem] border border-dashed border-gray-200">
                            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300">
                                <Search size={40} />
                            </div>
                            <h3 className="text-2xl font-black text-brand-blue uppercase mb-2">No items found</h3>
                            <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">Try searching for something else!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
