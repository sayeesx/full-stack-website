'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, MapPin, Send } from 'lucide-react';
import { Button } from './ui/Button';

export const ContactSection = () => {
    return (
        <section id="contact" className="py-10 md:py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
                    {/* Contact Info */}
                    <div className="space-y-6 md:space-y-8">
                        <div className="space-y-2 md:space-y-3 text-center lg:text-left">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue uppercase tracking-tight">
                                GET IN <span className="text-brand-red italic">TOUCH</span>
                            </h2>
                            <p className="text-gray-500 font-medium text-sm md:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
                                Have a question? Reach out to the Republic.
                            </p>
                        </div>

                        {/* Desktop Contact Links */}
                        <div className="hidden md:grid grid-cols-2 lg:grid-cols-2 gap-6 pb-4 md:pb-0">
                            <div className="flex items-center gap-4 group justify-start p-4 md:p-0 rounded-2xl md:bg-transparent">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-red-50 text-brand-red rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                                    <Phone size={20} className="md:w-6 md:h-6" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Call Us</p>
                                    <p className="text-brand-blue font-black text-sm md:text-lg">+1 (555) 123-FRY</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group justify-start p-4 md:p-0 rounded-2xl md:bg-transparent">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-50 text-gray-400 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                                    <MapPin size={20} className="md:w-6 md:h-6" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Location</p>
                                    <p className="text-brand-blue font-black text-sm md:text-lg">Crunch Valley, CV</p>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Contact Row */}
                        <div className="flex md:hidden justify-between items-center bg-gray-50 py-3 px-2 rounded-2xl border border-gray-100 mt-4">
                            <a href="tel:+1555123FRY" className="flex flex-col items-center flex-1 text-center group">
                                <Phone className="text-brand-red mb-1.5" size={18} />
                                <span className="text-[9px] font-black uppercase tracking-wider text-brand-blue leading-none">Call Us</span>
                                <span className="text-[8px] font-bold text-gray-400 mt-1 leading-none tracking-tight">+1 555-123-FRY</span>
                            </a>
                            <div className="w-px h-8 bg-gray-200"></div>
                            <a href="#" className="flex flex-col items-center flex-1 text-center group">
                                <MapPin className="text-gray-400 mb-1.5" size={18} />
                                <span className="text-[9px] font-black uppercase tracking-wider text-brand-blue leading-none">Location</span>
                                <span className="text-[8px] font-bold text-gray-400 mt-1 leading-none tracking-tight">Crunch Valley</span>
                            </a>
                        </div>

                        {/* Map Placeholder */}
                        <div className="w-full h-40 md:h-64 bg-gray-50 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden relative border border-gray-100">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-bold uppercase tracking-widest text-[8px] md:text-xs">
                                Google Map Integration
                            </div>
                            <img
                                src="/images/menu/placeholder.jpg"
                                alt="Map Background"
                                className="w-full h-full object-cover opacity-20 grayscale"
                            />
                        </div>
                    </div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-section-bg p-5 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border border-gray-100 mt-8 lg:mt-20"
                    >
                        <form className="space-y-4 md:space-y-5">
                            <div className="space-y-4 md:space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                                    <div className="space-y-1.5">
                                        <label className="text-[9px] font-black text-brand-blue uppercase tracking-widest ml-1">Name</label>
                                        <input
                                            type="text"
                                            className="w-full bg-white border border-gray-100 focus:border-brand-red rounded-lg px-4 py-2.5 md:py-3 outline-none transition-all font-bold placeholder:text-gray-300 text-xs md:text-sm"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[9px] font-black text-brand-blue uppercase tracking-widest ml-1">Phone</label>
                                        <input
                                            type="tel"
                                            className="w-full bg-white border border-gray-100 focus:border-brand-red rounded-lg px-4 py-2.5 md:py-3 outline-none transition-all font-bold placeholder:text-gray-300 text-xs md:text-sm"
                                            placeholder="Phone Number"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[9px] font-black text-brand-blue uppercase tracking-widest ml-1">Message</label>
                                    <textarea
                                        rows={2}
                                        className="w-full bg-white border border-gray-100 focus:border-brand-red rounded-lg px-4 py-2.5 md:py-3 outline-none transition-all font-bold placeholder:text-gray-300 resize-none text-xs md:text-sm"
                                        placeholder="Tell us what you crave..."
                                    />
                                </div>
                            </div>

                            <Button variant="primary" size="md" fullWidth className="group py-3 md:py-4">
                                Send Message <Send className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={14} />
                            </Button>

                            <div className="pt-2 text-center">
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Need immediate answers?</p>
                                <Link href="/support" className="block w-full">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        size="sm"
                                        fullWidth
                                        className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-black uppercase tracking-tight py-3"
                                    >
                                        Visit Help Center
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
