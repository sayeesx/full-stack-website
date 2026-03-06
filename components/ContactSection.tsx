'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Send } from 'lucide-react';
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

                        {/* Desktop & Mobile Contact Links */}
                        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 scrollbar-hide snap-x snap-mandatory">

                            <div className="flex-shrink-0 w-[85%] sm:w-auto snap-center flex items-center gap-4 group justify-start bg-red-50/50 p-4 md:p-0 rounded-2xl md:bg-transparent">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-red-50 text-brand-red rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                                    <Phone size={20} className="md:w-6 md:h-6" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Call Us</p>
                                    <p className="text-brand-blue font-black text-sm md:text-lg">+1 (555) 123-FRY</p>
                                </div>
                            </div>

                            <div className="flex-shrink-0 w-[85%] sm:w-auto snap-center flex items-center gap-4 group justify-start bg-blue-50/50 p-4 md:p-0 rounded-2xl md:bg-transparent">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                                    <MessageCircle size={20} className="md:w-6 md:h-6" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">WhatsApp</p>
                                    <p className="text-brand-blue font-black text-sm md:text-lg">+1 (555) 999-CRUNCH</p>
                                </div>
                            </div>

                            <div className="flex-shrink-0 w-[85%] sm:w-auto snap-center flex items-center gap-4 group justify-start bg-gray-50/50 p-4 md:p-0 rounded-2xl md:bg-transparent">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-50 text-gray-400 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                                    <MapPin size={20} className="md:w-6 md:h-6" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Location</p>
                                    <p className="text-brand-blue font-black text-sm md:text-lg">Crunch Valley, CV</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="w-full h-40 md:h-64 bg-gray-50 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden relative border border-gray-100">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-bold uppercase tracking-widest text-[8px] md:text-xs">
                                Google Map Integration
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800"
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
                        className="bg-section-bg p-5 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border border-gray-100"
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
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
