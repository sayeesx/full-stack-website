'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Send } from 'lucide-react';
import { Button } from './ui/Button';

export const ContactSection = () => {
    return (
        <section id="contact" className="py-12 md:py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
                    {/* Contact Info */}
                    <div className="space-y-8 md:space-y-12">
                        <div className="space-y-3 md:space-y-4 text-center lg:text-left">
                            <h2 className="text-3xl md:text-5xl font-black text-brand-blue uppercase tracking-tight">
                                GET IN <span className="text-brand-red italic">TOUCH</span>
                            </h2>
                            <p className="text-gray-500 font-medium text-base md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                                Have a question or want to place a large order? Reach out to the Republic.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                            <div className="space-y-4 md:space-y-6">
                                <div className="flex items-center gap-4 group justify-center lg:justify-start">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-red-50 text-brand-red rounded-xl flex items-center justify-center group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                                        <Phone size={20} className="md:w-6 md:h-6" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Call Us</p>
                                        <p className="text-brand-blue font-black text-base md:text-lg">+1 (555) 123-FRY</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group justify-center lg:justify-start">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                                        <MessageCircle size={20} className="md:w-6 md:h-6" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">WhatsApp</p>
                                        <p className="text-brand-blue font-black text-base md:text-lg">+1 (555) 999-CRUNCH</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4 md:space-y-6">
                                <div className="flex items-center gap-4 group justify-center lg:justify-start">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-50 text-gray-400 rounded-xl flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                                        <MapPin size={20} className="md:w-6 md:h-6" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Location</p>
                                        <p className="text-brand-blue font-black text-base md:text-lg">Crunch Valley, CV</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="w-full h-56 md:h-80 bg-gray-50 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden relative border border-gray-100">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-bold uppercase tracking-widest text-[10px] md:text-sm">
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
                        className="bg-section-bg p-6 md:p-10 rounded-[2.5rem] md:rounded-[3.5rem] border border-gray-100"
                    >
                        <form className="space-y-4 md:space-y-6">
                            <div className="space-y-4 md:space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-brand-blue uppercase tracking-widest ml-1">Name</label>
                                        <input
                                            type="text"
                                            className="w-full bg-white border border-gray-100 focus:border-brand-red rounded-xl px-5 py-3 md:py-4 outline-none transition-all font-bold placeholder:text-gray-300 text-sm md:text-base"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-brand-blue uppercase tracking-widest ml-1">Phone</label>
                                        <input
                                            type="tel"
                                            className="w-full bg-white border border-gray-100 focus:border-brand-red rounded-xl px-5 py-3 md:py-4 outline-none transition-all font-bold placeholder:text-gray-300 text-sm md:text-base"
                                            placeholder="Phone Number"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-brand-blue uppercase tracking-widest ml-1">Message</label>
                                    <textarea
                                        rows={3}
                                        className="w-full bg-white border border-gray-100 focus:border-brand-red rounded-xl px-5 py-3 md:py-4 outline-none transition-all font-bold placeholder:text-gray-300 resize-none text-sm md:text-base"
                                        placeholder="Tell us what you crave..."
                                    />
                                </div>
                            </div>

                            <Button variant="primary" size="lg" fullWidth className="group py-4 md:py-5 text-lg md:text-xl">
                                Send Message <Send className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
