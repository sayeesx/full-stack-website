'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const CTABanner = () => {
    return (
        <section className="py-24 px-4 bg-white">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-brand-red rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden"
                >
                    {/* Decorative Circles */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-blue opacity-20 rounded-full -translate-x-1/2 translate-y-1/2" />

                    <div className="relative z-10 space-y-6 md:space-y-8">
                        <h2 className="text-3xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
                            CRAVING <br />
                            <span className="italic text-white/90">CRUNCH?</span>
                        </h2>
                        <p className="text-lg md:text-2xl font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] text-red-100 max-w-md mx-auto">
                            Your Chicken. Your Way. Right Now.
                        </p>
                        <div className="pt-4 flex justify-center">
                            <Link href="/menu" className="w-full sm:w-auto px-4">
                                <Button
                                    variant="secondary"
                                    size="lg"
                                    className="bg-brand-blue hover:bg-white text-white hover:text-brand-blue transform hover:scale-105 md:hover:scale-110 w-full transition-all py-6 text-xl"
                                >
                                    Order Now <ArrowRight className="ml-2" size={24} />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
