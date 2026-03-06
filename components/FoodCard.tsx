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
    const { addToCart, setSelectedItem } = useCart();

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            onClick={() => setSelectedItem?.(item)}
            className="bg-white rounded-[1.25rem] md:rounded-[1.5rem] overflow-hidden border border-gray-200 group flex flex-col h-full shadow-none cursor-pointer hover:shadow-xl hover:border-brand-blue/20 transition-all"
            style={{ translateZ: 0, willChange: 'transform' }}
        >
            {/* Image Container */}
            <div className="relative h-40 md:h-48 overflow-hidden bg-gray-50 shrink-0">
                <NextImage
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-600 group-hover:scale-110"
                />
                {item.isPopular && (
                    <div className="absolute top-2 left-2 bg-brand-red text-white text-[8px] md:text-[9px] font-black uppercase tracking-[0.15em] px-2 py-0.5 rounded-full">
                        Popular
                    </div>
                )}

                {/* Quick Add Overlay (Desktop) */}
                <div className="hidden md:flex absolute inset-0 bg-brand-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center">
                    <Button
                        variant="primary"
                        size="sm"
                        onClick={(e) => {
                            e.stopPropagation();
                            addToCart(item);
                        }}
                    >
                        + Add
                    </Button>
                </div>
            </div>

            {/* Content */}
            <div className="p-3 md:p-4 space-y-1.5 md:space-y-3 flex flex-col flex-grow">
                <div className="flex justify-between items-start gap-1">
                    <h3 className="font-black text-sm md:text-base text-brand-blue leading-tight uppercase tracking-tight line-clamp-1">
                        {item.name}
                    </h3>
                    <span className="font-black text-sm md:text-base text-brand-red italic shrink-0">
                        ${item.price.toFixed(2)}
                    </span>
                </div>

                <p className="text-gray-500 text-[10px] md:text-xs font-medium leading-tight line-clamp-2 md:line-clamp-3">
                    {item.description}
                </p>

                <div className="pt-auto mt-auto flex items-center justify-between">
                    <div className="text-[8px] md:text-[9px] font-black text-gray-400 uppercase tracking-widest bg-gray-50 px-2 py-0.5 rounded-full">
                        {item.category}
                    </div>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            addToCart(item);
                        }}
                        className="w-7 h-7 md:w-8 md:h-8 bg-brand-blue text-white rounded-full flex items-center justify-center hover:bg-brand-red transition-all active:scale-95"
                    >
                        <Plus size={14} />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};
