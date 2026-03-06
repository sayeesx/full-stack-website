'use client';

import React from 'react';
import { motion } from 'framer-motion';
import NextImage from 'next/image';
import { Plus, ShoppingBag } from 'lucide-react';
import { MenuItem } from '@/lib/data/menu';
import { useCart } from '@/context/CartContext';
import { Button } from './ui/Button';

interface FoodCardProps {
    item: MenuItem;
}

export const FoodCard: React.FC<FoodCardProps> = ({ item }) => {
    const { addToCart } = useCart();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-[2rem] overflow-hidden shadow-premium hover:shadow-hover border border-gray-100 group"
            style={{ translateZ: 0, willChange: 'transform' }}
        >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden bg-gray-50">
                <NextImage
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-600 group-hover:scale-110"
                />
                {item.isPopular && (
                    <div className="absolute top-4 left-4 bg-brand-red text-white text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full shadow-lg">
                        Popular
                    </div>
                )}

                {/* Quick Add Overlay */}
                <div className="absolute inset-0 bg-brand-blue/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                        variant="primary"
                        size="sm"
                        onClick={() => addToCart(item)}
                        className="shadow-2xl"
                    >
                        <Plus className="mr-1" size={18} />
                        Add to Cart
                    </Button>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
                <div className="flex justify-between items-start gap-4">
                    <h3 className="font-black text-xl text-brand-blue leading-tight uppercase tracking-tight">
                        {item.name}
                    </h3>
                    <span className="font-black text-xl text-brand-red italic">
                        ${item.price.toFixed(2)}
                    </span>
                </div>

                <p className="text-gray-500 text-sm font-medium leading-relaxed line-clamp-2">
                    {item.description}
                </p>

                <div className="pt-2 flex items-center justify-between">
                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest bg-gray-100 px-3 py-1 rounded-full">
                        {item.category}
                    </div>
                    <button
                        onClick={() => addToCart(item)}
                        className="w-10 h-10 bg-brand-blue text-white rounded-full flex items-center justify-center hover:bg-brand-red transition-colors shadow-lg"
                    >
                        <Plus size={20} />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};
