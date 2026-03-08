'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from './ui/Button';
import OrderTrackingTimeline from './OrderTrackingTimeline';


export const CartDrawer: React.FC = () => {
    const { cart, updateQuantity, removeFromCart, totalPrice, totalItems, isCartOpen, setIsCartOpen } = useCart();
    const [isCheckoutStarted, setIsCheckoutStarted] = useState(false);

    const onClose = () => {
        setIsCartOpen(false);
        // Reset checkout state after drawer closes (with a slight delay for animation)
        setTimeout(() => setIsCheckoutStarted(false), 300);
    };

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-brand-blue/60 backdrop-blur-sm z-[100]"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-[101] flex flex-col"
                    >
                        {isCheckoutStarted ? (
                            <OrderTrackingTimeline
                                onClose={() => setIsCheckoutStarted(false)}
                                foodImage={cart.length > 0 ? cart[0].image : "/burger-combo.jpeg"}
                            />
                        ) : (
                            <>
                                {/* Header */}
                                <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-white sticky top-0 z-10">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-brand-red rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-red/20">
                                            <ShoppingBag size={20} />
                                        </div>
                                        <div>
                                            <h2 className="font-black text-xl text-brand-blue uppercase tracking-tight">Your Order</h2>
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{totalItems} Items selected</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={onClose}
                                        className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-brand-red"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>

                                {/* Cart Items */}
                                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                                    {cart.length === 0 ? (
                                        <div className="h-full flex flex-col items-center justify-center text-center space-y-6 opacity-40">
                                            <div className="w-32 h-32 bg-gray-50 rounded-full flex items-center justify-center relative">
                                                <div className="absolute inset-0 bg-brand-red/5 rounded-full animate-ping" />
                                                <ShoppingBag size={56} className="text-gray-300" strokeWidth={1.5} />
                                            </div>
                                            <div className="space-y-2">
                                                <p className="font-black text-xl text-brand-blue uppercase">Your cart is empty</p>
                                                <p className="text-sm font-medium">Add some crunch to your life!</p>
                                            </div>
                                            <Button variant="outline" size="sm" onClick={onClose}>
                                                Go to Menu
                                            </Button>
                                        </div>
                                    ) : (
                                        cart.map((item) => (
                                            <motion.div
                                                layout
                                                key={item.id}
                                                className="flex gap-4 p-4 rounded-3xl bg-gray-50 border border-gray-100 group"
                                            >
                                                <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 border-2 border-white shadow-sm">
                                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                                </div>
                                                <div className="flex-1 space-y-2">
                                                    <div className="flex justify-between">
                                                        <h4 className="font-black text-brand-blue uppercase text-sm leading-tight">{item.name}</h4>
                                                        <button
                                                            onClick={() => removeFromCart(item.id)}
                                                            className="text-gray-300 hover:text-brand-red transition-colors"
                                                        >
                                                            <Trash2 size={16} />
                                                        </button>
                                                    </div>
                                                    <p className="text-brand-red font-black text-sm">${item.price.toFixed(2)}</p>

                                                    <div className="flex items-center justify-between pt-1">
                                                        <div className="flex items-center bg-white rounded-full px-2 py-1 shadow-sm border border-gray-100">
                                                            <button
                                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                                className="p-1 hover:text-brand-red transition-colors"
                                                            >
                                                                <Minus size={14} />
                                                            </button>
                                                            <span className="w-8 text-center font-black text-sm text-brand-blue">{item.quantity}</span>
                                                            <button
                                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                                className="p-1 hover:text-brand-red transition-colors"
                                                            >
                                                                <Plus size={14} />
                                                            </button>
                                                        </div>
                                                        <span className="font-black text-brand-blue text-sm">
                                                            ${(item.price * item.quantity).toFixed(2)}
                                                        </span>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))
                                    )}
                                </div>

                                {/* Footer */}
                                {cart.length > 0 && (
                                    <div className="p-8 border-t border-gray-100 bg-white space-y-6">
                                        <div className="space-y-2">
                                            <div className="flex justify-between text-gray-400 font-bold uppercase tracking-widest text-xs">
                                                <span>Subtotal</span>
                                                <span>${totalPrice.toFixed(2)}</span>
                                            </div>
                                            <div className="flex justify-between text-gray-400 font-bold uppercase tracking-widest text-xs">
                                                <span>Delivery Fee</span>
                                                <span>$2.99</span>
                                            </div>
                                            <div className="flex justify-between text-brand-blue font-black uppercase text-xl pt-2 border-t border-gray-50">
                                                <span>Total</span>
                                                <span className="text-brand-red italic">${(totalPrice + 2.99).toFixed(2)}</span>
                                            </div>
                                        </div>

                                        <Button
                                            variant="primary"
                                            size="lg"
                                            fullWidth
                                            className="py-5 text-lg group bg-brand-blue hover:bg-brand-red shadow-xl shadow-brand-blue/20 hover:shadow-brand-red/30 transition-all rounded-2xl"
                                            onClick={() => setIsCheckoutStarted(true)}
                                        >
                                            Proceed to Checkout
                                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                                        </Button>

                                        <div className="flex items-center justify-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                                            <span className="w-2 h-2 rounded-full bg-green-500" />
                                            Secure Checkout Guaranteed
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
