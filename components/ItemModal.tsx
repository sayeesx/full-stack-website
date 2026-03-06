'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, Sparkles } from 'lucide-react';
import NextImage from 'next/image';
import { useCart } from '@/context/CartContext';
import { Button } from './ui/Button';
import { toast } from 'sonner';

export const ItemModal: React.FC = () => {
    const { selectedItem, setSelectedItem, addToCart, setIsCartOpen } = useCart();
    const [quantity, setQuantity] = useState(1);

    // Reset quantity when selected item changes
    useEffect(() => {
        setQuantity(1);
    }, [selectedItem]);

    if (!selectedItem) return null;

    const handleClose = () => {
        setSelectedItem(null);
    };

    const handleOrder = () => {
        for (let i = 0; i < quantity; i++) {
            addToCart(selectedItem);
        }
        setSelectedItem(null);
        toast.error('Site under maintenance. Order cannot be placed at this time. But we added it to your cart 😉', {
            position: 'top-center',
            duration: 4000
        });
        setIsCartOpen(true);
    };

    return (
        <AnimatePresence>
            {selectedItem && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 bg-brand-blue/60 backdrop-blur-md z-[110]"
                    />

                    {/* Bottom Sheet Modal */}
                    <div className="fixed inset-x-0 bottom-0 z-[111] flex justify-center pointer-events-none px-0 sm:px-4 sm:pb-4">
                        <motion.div
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            exit={{ y: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="bg-white w-full max-w-2xl rounded-t-[2rem] sm:rounded-[2rem] overflow-hidden shadow-2xl pointer-events-auto flex flex-col max-h-[90vh]"
                        >
                            {/* Close Button & Header Gradient */}
                            <div className="relative h-64 sm:h-80 w-full bg-gray-50 shrink-0">
                                <NextImage
                                    src={selectedItem.image}
                                    alt={selectedItem.name}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                <button
                                    onClick={handleClose}
                                    className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white backdrop-blur-md rounded-full flex items-center justify-center text-white hover:text-brand-blue transition-colors z-10"
                                >
                                    <X size={20} />
                                </button>

                                {/* Item Category & Name */}
                                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-red/90 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-md">
                                        <Sparkles size={12} />
                                        {selectedItem.category}
                                    </div>
                                    <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight leading-none text-white shadow-sm">
                                        {selectedItem.name}
                                    </h2>
                                </div>
                            </div>

                            {/* Content area */}
                            <div className="p-6 sm:p-8 flex flex-col overflow-y-auto">
                                <p className="text-gray-500 font-medium text-sm sm:text-base leading-relaxed mb-8">
                                    {selectedItem.description}
                                </p>

                                {/* Quantity & Actions */}
                                <div className="mt-auto pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-4 items-center justify-between">
                                    <div className="flex items-center justify-between w-full sm:w-auto bg-gray-50 rounded-2xl p-2 border border-gray-100">
                                        <button
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                            className="w-10 h-10 bg-white rounded-xl shadow-sm text-gray-500 hover:text-brand-red hover:bg-red-50 transition-all flex items-center justify-center font-bold"
                                        >
                                            <Minus size={18} />
                                        </button>
                                        <span className="w-16 text-center font-black text-xl text-brand-blue">
                                            {quantity}
                                        </span>
                                        <button
                                            onClick={() => setQuantity(quantity + 1)}
                                            className="w-10 h-10 bg-white rounded-xl shadow-sm text-gray-500 hover:text-brand-red hover:bg-red-50 transition-all flex items-center justify-center font-bold"
                                        >
                                            <Plus size={18} />
                                        </button>
                                    </div>

                                    <Button onClick={handleOrder} size="lg" className="w-full sm:flex-1 py-4 sm:py-6 text-lg group">
                                        <ShoppingBag className="mr-2 group-hover:scale-110 transition-transform" />
                                        Place Order - ${(selectedItem.price * quantity).toFixed(2)}
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};
