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

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
                    {combos.map((combo, index) => (
                        <motion.div
                            key={combo.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-blue-900/20 backdrop-blur-md rounded-[2.5rem] md:rounded-[3rem] border border-blue-400/20 overflow-hidden flex flex-col items-center p-6 md:p-8 text-center group"
                            style={{ willChange: 'transform, opacity' }}
                        >
                            <div className="relative mb-6 md:mb-8 w-full aspect-square flex items-center justify-center">
                                <div className="absolute inset-0 bg-brand-red/20 blur-[40px] md:blur-[60px] rounded-full transform scale-75 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <NextImage
                                    src={combo.image}
                                    alt={combo.name}
                                    width={300}
                                    height={300}
                                    className="w-4/5 md:w-full h-full object-contain filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="mt-auto space-y-3 md:space-y-4">
                                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight leading-tight">{combo.name}</h3>
                                <p className="text-blue-100/70 text-xs md:text-sm font-medium leading-relaxed italic line-clamp-2 md:line-clamp-none">
                                    {combo.description}
                                </p>
                                <div className="pt-2 md:pt-4 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                                    <span className="text-3xl md:text-4xl font-black text-brand-red">
                                        ${combo.price.toFixed(2)}
                                    </span>
                                    <Button variant="primary" size="lg" className="w-full md:w-auto px-10 py-4 text-lg" onClick={() => addToCart(combo)}>
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
