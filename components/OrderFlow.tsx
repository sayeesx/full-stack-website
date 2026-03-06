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

                    <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 overflow-x-auto md:overflow-x-visible pb-8 md:pb-0 scrollbar-hide snap-x snap-mandatory px-4 md:px-0">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="min-w-[260px] md:min-w-0 flex flex-col items-center text-center group snap-start"
                            >
                                <div className="relative mb-6 md:mb-8">
                                    <div className="w-20 h-20 md:w-24 md:h-24 bg-white border-4 border-gray-100/80 text-brand-blue rounded-full flex items-center justify-center group-hover:border-brand-red transition-all duration-300">
                                        <step.icon size={32} className="md:w-10 md:h-10" />
                                    </div>
                                    <div className="absolute -top-1 -right-1 w-8 h-8 md:w-10 md:h-10 bg-brand-red text-white font-black rounded-full flex items-center justify-center text-sm md:text-lg">
                                        {index + 1}
                                    </div>
                                </div>
                                <h4 className="text-xl md:text-2xl font-black text-brand-blue mb-2 md:mb-4 uppercase tracking-tight">
                                    {step.title}
                                </h4>
                                <p className="text-gray-500 font-medium leading-relaxed text-sm md:text-base max-w-[250px]">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
