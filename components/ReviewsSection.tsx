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
        <section id="reviews" className="py-8 md:py-20 bg-section-bg overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-6 md:mb-12">
                    <h2 className="text-2xl md:text-5xl font-black text-brand-blue uppercase tracking-tight mb-1">
                        REPUBLIC <span className="text-brand-red italic">REVIEWS</span>
                    </h2>
                    <p className="text-gray-500 font-bold uppercase tracking-widest text-[9px] md:text-xs">
                        Hear from our community of crunch lovers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    {reviews.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={`bg-white p-4 md:p-6 rounded-[1rem] md:rounded-[1.5rem] relative group border-2 border-gray-200 ${index >= 2 ? 'hidden md:block' : ''}`}
                        >
                            <Quote className="absolute top-4 right-4 text-red-50 text-4xl transform group-hover:scale-110 transition-transform -z-0 hidden md:block" />

                            <div className="relative z-10 space-y-4 md:space-y-5">
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={14}
                                            className={i < item.rating ? 'fill-brand-red text-brand-red' : 'fill-gray-200 text-gray-200'}
                                        />
                                    ))}
                                </div>

                                <p className="text-brand-blue font-bold italic text-sm md:text-base leading-relaxed">
                                    "{item.review}"
                                </p>

                                <div className="pt-3 border-t border-gray-100 flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-brand-blue font-black text-lg">
                                        {item.name[0]}
                                    </div>
                                    <div>
                                        <h4 className="font-black text-brand-blue uppercase text-xs trackig-tight">{item.name}</h4>
                                        <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{item.role}</p>
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
