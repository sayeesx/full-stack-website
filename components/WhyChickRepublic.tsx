'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Heart, DollarSign } from 'lucide-react';

const trustItems = [
    {
        icon: ShieldCheck,
        title: 'Freshly Fried',
        desc: 'Each piece is fried to order, ensuring maximum crunch and heat.'
    },
    {
        icon: Zap,
        title: 'Fast Delivery',
        desc: 'Our cloud kitchen model ensures your food arrives hot in 30 mins.'
    },
    {
        icon: Heart,
        title: 'Premium Quality',
        desc: 'We use high-grade oil and 100% farm-fresh premium chicken.'
    },
    {
        icon: DollarSign,
        title: 'Best Value',
        desc: 'Quality crunch that doesnt break the bank. Premium food, fair prices.'
    }
];

export const WhyChickRepublic = () => {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 scrollbar-hide snap-x snap-mandatory">
                    {trustItems.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1 }}
                            className="min-w-[280px] md:min-w-0 p-8 rounded-[2rem] border-2 border-gray-50 hover:border-brand-red/10 transition-colors group text-center lg:text-left snap-start"
                        >
                            <div className="w-16 h-16 bg-blue-50 text-brand-blue rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-all duration-300 lg:mx-0 mx-auto transform group-hover:-rotate-3">
                                <item.icon size={32} />
                            </div>
                            <h4 className="text-xl font-black text-brand-blue mb-2 md:mb-4 uppercase tracking-tight group-hover:text-brand-red transition-colors">
                                {item.title}
                            </h4>
                            <p className="text-gray-500 font-medium leading-relaxed text-sm md:text-base">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
