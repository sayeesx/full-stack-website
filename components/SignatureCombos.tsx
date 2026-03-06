'use client';

import React from 'react';
import { motion } from 'framer-motion';
import NextImage from 'next/image';
import { menuItems } from '@/lib/data/menu';
import { Button } from './ui/Button';
import { useCart } from '@/context/CartContext';
import { Sparkles, ArrowRight } from 'lucide-react';

export const SignatureCombos = () => {
    const { addToCart } = useCart();
    const combos = menuItems.filter(item => item.category === 'Combos');

    return (
        <section className="py-12 md:py-24 bg-brand-blue relative overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red opacity-10 blur-[100px] rounded-full -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600 opacity-5 blur-[100px] rounded-full -ml-48 -mb-48" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-10 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 text-white rounded-full font-black text-[10px] md:text-xs uppercase tracking-widest mb-4 border border-white/20"
                    >
                        Exclusive <span className="text-blue-300 italic">Deals</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter"
                    >
                        SIGNATURE <span className="text-brand-red italic">COMBOS</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-blue-100/60 font-bold uppercase tracking-widest text-[10px] md:text-sm px-4"
                    >
                        Bigger crunch, better value. Perfect for sharing (or not).
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-10">
                    {combos.slice(0, 4).map((combo, index) => (
                        <motion.div
                            key={combo.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={`bg-blue-900/40 backdrop-blur-md rounded-2xl md:rounded-[2.5rem] border border-blue-400/30 overflow-hidden flex-col items-center justify-between p-6 md:p-10 text-center group aspect-[4/3] md:aspect-square md:flex ${index >= 2 ? 'hidden' : 'flex'}`}
                            style={{ willChange: 'transform, opacity' }}
                        >
                            <div className="relative flex-grow flex items-center justify-center w-full mb-2 lg:mb-4 bg-blue-950/40 rounded-xl border border-blue-400/10">
                                <div className="absolute inset-0 bg-brand-red/10 blur-[30px] rounded-full transform scale-75 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-800/20 rounded-full flex items-center justify-center filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] transform group-hover:scale-110 transition-transform duration-500">
                                    <Sparkles className="text-blue-300 w-6 h-6 md:w-8 md:h-8 opacity-40" />
                                </div>
                            </div>
                            <div className="mt-auto space-y-1.5 md:space-y-3 w-full">
                                <h3 className="text-[14px] md:text-xl font-black uppercase tracking-tight leading-tight text-white line-clamp-1">{combo.name}</h3>
                                <p className="text-blue-100/60 text-[10px] md:text-sm font-medium leading-tight italic line-clamp-2">
                                    {combo.description}
                                </p>
                                <div className="pt-2 md:pt-4 flex flex-col items-center justify-center gap-2 md:gap-4">
                                    <span className="text-lg md:text-2xl font-black text-brand-red">
                                        ${combo.price.toFixed(2)}
                                    </span>
                                    <Button variant="primary" size="sm" className="w-full text-[10px] md:text-sm h-8 md:h-10 py-0" onClick={() => addToCart(combo)}>
                                        Order Now
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
