'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
    {
        name: 'Sarah Johnson',
        review: "The crunch is unbelievable. I've tried many fried chicken spots, but Chick Republic really does 'Fry Harder'. The Republic Bucket is a must!",
        rating: 5,
        role: 'Food Blogger'
    },
    {
        name: 'Michael Chen',
        review: "Fast delivery and the food was still piping hot. That secret sauce on the Loaded Fries is dangerous! Highly recommended.",
        rating: 5,
        role: 'Loyal Customer'
    },
    {
        name: 'Emma Williams',
        review: "Finally a place that gets the marinade right. The Zesty Burger is hands down the best chicken burger in town. Premium quality.",
        rating: 4,
        role: 'Regular Orderer'
    }
];

export const ReviewsSection = () => {
    return (
        <section id="reviews" className="py-24 bg-section-bg overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-brand-blue uppercase tracking-tight mb-4">
                        REPUBLIC <span className="text-brand-red italic">REVIEWS</span>
                    </h2>
                    <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">
                        Hear from our community of crunch lovers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white p-10 rounded-[2.5rem] shadow-premium relative group border border-gray-50"
                        >
                            <Quote className="absolute top-8 right-8 text-red-50 text-7xl transform group-hover:scale-110 transition-transform -z-0" />

                            <div className="relative z-10 space-y-6">
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={16}
                                            className={i < item.rating ? 'fill-brand-red text-brand-red' : 'fill-gray-200 text-gray-200'}
                                        />
                                    ))}
                                </div>

                                <p className="text-brand-blue font-bold italic text-lg leading-relaxed">
                                    "{item.review}"
                                </p>

                                <div className="pt-4 border-t border-gray-50 flex items-center gap-4">
                                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-brand-blue font-black text-xl">
                                        {item.name[0]}
                                    </div>
                                    <div>
                                        <h4 className="font-black text-brand-blue uppercase text-sm tracking-tight">{item.name}</h4>
                                        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">{item.role}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
