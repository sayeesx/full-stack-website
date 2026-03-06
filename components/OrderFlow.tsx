'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MousePointerClick, MapPin, Truck, Flame } from 'lucide-react';

const steps = [
    {
        icon: MousePointerClick,
        title: 'Choose Meal',
        desc: 'Browse our menu and pick the crunchiest fried chicken, burgers, and combos.'
    },
    {
        icon: MapPin,
        title: 'Set Location',
        desc: 'Tell us where you are, and we will find the closest cloud kitchen to serve you.'
    },
    {
        icon: Truck,
        title: 'Fast Delivery',
        desc: 'Our couriers blast off immediately. Your food arrives hot, fresh, and ready.'
    },
    {
        icon: Flame,
        title: 'Fry Harder',
        desc: 'Dive into the signature Chick Republic experience. The ultimate crunch.'
    }
];

export const OrderFlow = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16 px-4">
                    <h2 className="text-4xl md:text-5xl font-black text-brand-blue uppercase tracking-tight mb-4">
                        HOW TO <span className="text-brand-red italic">FRY HARDER</span>
                    </h2>
                    <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">
                        Four simple steps to crispy chicken heaven.
                    </p>
                </div>

                <div className="relative">
                    {/* Connector Line */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 -z-10" />

                    <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12 px-4 md:px-0 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-row md:flex-col items-center p-4 md:p-0 bg-gray-50 md:bg-transparent rounded-2xl md:rounded-none border md:border-none border-gray-100 text-left md:text-center group"
                            >
                                <div className="relative mr-4 md:mr-0 md:mb-8 shrink-0">
                                    <div className="w-16 h-16 md:w-24 md:h-24 bg-white border-2 md:border-4 border-gray-100 text-brand-blue rounded-full flex items-center justify-center group-hover:border-brand-red transition-all duration-300">
                                        <step.icon className="w-8 h-8 md:w-10 md:h-10" />
                                    </div>
                                    <div className="absolute -top-1 -right-1 w-6 h-6 md:w-10 md:h-10 bg-brand-red text-white font-black rounded-full flex items-center justify-center text-[10px] md:text-lg">
                                        {index + 1}
                                    </div>
                                </div>
                                <div className="flex-grow">
                                    <h4 className="text-base md:text-2xl font-black text-brand-blue mb-1 md:mb-4 uppercase tracking-tight">
                                        {step.title}
                                    </h4>
                                    <p className="text-gray-500 font-medium leading-relaxed text-[11px] sm:text-xs md:text-base md:max-w-[250px]">
                                        {step.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
