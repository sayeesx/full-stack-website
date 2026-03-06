'use client';

import React from 'react';
import { motion } from 'framer-motion';
import NextImage from 'next/image';
import { Button } from './ui/Button';
import { ArrowRight, Play } from 'lucide-react';
import { ConfettiBackground } from './ConfettiBackground';

export const Hero = () => {
    return (
        <section className="relative min-h-[90vh] pt-32 pb-20 flex items-center overflow-hidden bg-white">
            <ConfettiBackground />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-10">
                    {/* Text Content */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-6 py-2 bg-red-50 text-brand-red rounded-full font-black text-xs uppercase tracking-[0.2em] border border-red-100"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
                            </span>
                            Freshly Fried & Fast
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="space-y-6"
                        >
                            <h1 className="text-7xl md:text-9xl font-black text-brand-blue leading-[0.85] tracking-tighter">
                                CHICK <br />
                                <span className="text-brand-red">REPUBLIC</span>
                            </h1>
                            <p className="text-2xl md:text-3xl font-black text-brand-blue/80 italic tracking-[0.2em] uppercase">
                                "FRY HARDER."
                            </p>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-gray-500 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed font-bold uppercase tracking-tight"
                        >
                            Experience the crunch that's taking over the city. Our signature broasted chicken is marinated for 24 hours and fried to golden perfection.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-6"
                        >
                            <Button variant="primary" size="lg" className="group text-xl px-12 py-6">
                                Order Now
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={24} />
                            </Button>
                            <Button variant="outline" size="lg" className="group text-xl px-12 py-6">
                                <Play className="mr-2 fill-brand-red" size={24} />
                                View Menu
                            </Button>
                        </motion.div>
                    </div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="pt-12 flex flex-wrap items-center justify-center gap-12 border-t border-gray-100"
                    >
                        <div className="text-center">
                            <p className="text-4xl font-black text-brand-blue leading-none">4.9/5</p>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-2">Rating</p>
                        </div>
                        <div className="hidden md:block w-px h-10 bg-gray-200" />
                        <div className="text-center">
                            <p className="text-4xl font-black text-brand-blue leading-none">15k+</p>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-2">Happy Orders</p>
                        </div>
                        <div className="hidden md:block w-px h-10 bg-gray-200" />
                        <div className="text-center">
                            <p className="text-4xl font-black text-brand-blue leading-none">20m</p>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-2">Delivery Time</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
