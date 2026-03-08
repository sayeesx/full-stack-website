'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Plus,
    Minus,
    Search,
    ChevronRight,
    MessageCircle,
    Phone,
    Mail,
    ArrowLeft,
    ShoppingBag,
    Clock,
    HelpCircle,
    Truck
} from 'lucide-react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const faqs = [
    {
        question: "How long does delivery usually take?",
        answer: "Our standard delivery time is 30-45 minutes depending on your location and order size. You can track your order in real-time through the order tracking timeline."
    },
    {
        question: "Can I customize my order?",
        answer: "Absolutely! Most of our items have a 'Customize' option where you can remove ingredients or add extras like our signature spicy sauce or extra cheese."
    },
    {
        question: "Do you have vegetarian options?",
        answer: "While we specialize in fried chicken, we offer several vegetarian sides including our signature coleslaw, seasoned fries, and corn on the cob. Check our 'Sides' category for more details."
    },
    {
        question: "What is your refund policy?",
        answer: "If you're not satisfied with your order or there's an issue with your delivery, please contact our support team immediately. We offer full or partial refunds for order errors or significant delays."
    },
    {
        question: "How do I use a promo code?",
        answer: "You can enter your promo code at the checkout screen before proceeding to payment. The discount will be applied automatically to your total."
    }
];

export default function SupportPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="min-h-screen bg-white font-sans selection:bg-brand-red/10 selection:text-brand-red">
            <Navbar />

            <main className="pt-[80px] pb-32">
                {/* Hero Section */}
                <section className="relative py-16 md:py-24 bg-[#11457E] overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/20 rounded-full blur-[120px] -mr-64 -mt-64" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px] -ml-64 -mb-64" />

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-3xl mx-auto text-center space-y-8">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full border border-white/20 backdrop-blur-md"
                            >
                                <HelpCircle className="w-4 h-4 text-brand-red" />
                                <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Support Center</span>
                            </motion.div>

                            <div className="space-y-4">
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85]"
                                >
                                    HOW CAN WE <br />
                                    <span className="text-brand-red italic underline decoration-white/20">HELP?</span>
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-white/60 font-bold uppercase tracking-widest text-[10px] md:text-xs"
                                >
                                    The Chick Republic Support Crew is here for you 24/7
                                </motion.p>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="relative max-w-xl mx-auto"
                            >
                                <div className="absolute inset-0 bg-brand-red/30 rounded-2xl blur-2xl opacity-50" />
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search delivery, refunds, menu..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full h-16 md:h-20 bg-white rounded-2xl px-16 text-sm md:text-base font-bold outline-none ring-0 focus:ring-8 focus:ring-brand-red/20 transition-all border-none shadow-2xl text-brand-blue placeholder:text-gray-300"
                                    />
                                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Support Categories */}
                <section className="py-12 -mt-12 relative z-20">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                            <SupportCategory
                                icon={<Truck className="w-6 h-6" />}
                                title="Delivery Info"
                                description="Live tracking policies, delivery times, and local coverage areas."
                                link="/"
                            />
                            <SupportCategory
                                icon={<ShoppingBag className="w-6 h-6" />}
                                title="Order Status"
                                description="Need to cancel or modify? Check your recently placed orders here."
                                link="#"
                            />
                            <SupportCategory
                                icon={<Clock className="w-6 h-6" />}
                                title="Refund Policy"
                                description="Not satisfied? Learn about our 100% crunch satisfaction guarantee."
                                link="#"
                            />
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl mx-auto space-y-16">
                            <div className="space-y-4 text-center">
                                <h2 className="text-4xl md:text-5xl font-black text-brand-blue uppercase tracking-tight leading-none">
                                    COMMON <span className="text-brand-red italic">QUESTIONS</span>
                                </h2>
                                <p className="text-gray-400 font-bold text-[10px] md:text-xs uppercase tracking-[0.3em]">Quick answers to common cravings</p>
                            </div>

                            <div className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <FAQItem
                                        key={index}
                                        question={faq.question}
                                        answer={faq.answer}
                                        isOpen={openIndex === index}
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Tiles */}
                <section className="py-20 bg-gray-50/50 rounded-[3rem] md:rounded-[5rem] mx-4">
                    <div className="container mx-auto px-6 text-center space-y-16">
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl font-black text-brand-blue uppercase tracking-tight leading-none">
                                STILL NEED <span className="text-brand-red italic underline decoration-brand-blue/10">THE CREW?</span>
                            </h2>
                            <p className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.3em]">We're just a click away</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto text-left">
                            <ContactTile
                                icon={<MessageCircle className="w-6 h-6" />}
                                title="Live Chat"
                                detail="Ready to chat now"
                                subDetail="2 min average wait"
                                color="bg-green-500/10 text-green-600"
                            />
                            <ContactTile
                                icon={<Phone className="w-6 h-6" />}
                                title="Hotline"
                                detail="+1 (555) 123-FRY"
                                subDetail="Available 24/7"
                                color="bg-brand-red/10 text-brand-red"
                            />
                            <ContactTile
                                icon={<Mail className="w-6 h-6" />}
                                title="Email"
                                detail="support@chickrepublic.com"
                                subDetail="Replies within 1 hour"
                                color="bg-brand-blue/10 text-brand-blue"
                            />
                        </div>

                        <div className="pt-8 flex flex-col items-center gap-6">
                            <div className="h-px w-20 bg-gray-200" />
                            <Link
                                href="/"
                                className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-brand-red transition-all duration-300 group"
                            >
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" />
                                RETURN TO THE FRY
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

function SupportCategory({ icon, title, description, link }: { icon: React.ReactNode, title: string, description: string, link: string }) {
    return (
        <Link href={link} className="group p-8 md:p-10 bg-white rounded-[2.5rem] border border-gray-100 shadow-premium hover:shadow-hover transition-all duration-500 transform hover:-translate-y-2">
            <div className="space-y-6">
                <div className="w-16 h-16 bg-gray-50 text-brand-blue rounded-2xl flex items-center justify-center group-hover:bg-brand-red group-hover:text-white transition-all duration-500 shadow-inner group-hover:rotate-6">
                    {icon}
                </div>
                <div className="space-y-3">
                    <h3 className="text-xl font-black text-brand-blue uppercase tracking-tight">{title}</h3>
                    <p className="text-gray-400 font-medium text-xs leading-relaxed line-clamp-2">{description}</p>
                </div>
                <div className="pt-2 flex items-center text-[10px] font-black text-brand-blue uppercase tracking-[0.2em] group-hover:text-brand-red transition-colors">
                    EXPLORE <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </Link>
    );
}

function FAQItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) {
    return (
        <div className={`rounded-[2rem] border transition-all duration-500 overflow-hidden ${isOpen ? 'bg-white border-brand-red/30 shadow-2xl scale-[1.02]' : 'bg-gray-50/50 border-transparent hover:border-gray-200'}`}>
            <button
                onClick={onClick}
                className="w-full px-8 py-6 flex items-center justify-between gap-6 text-left"
            >
                <span className={`text-sm md:text-base font-black uppercase tracking-tight leading-tight ${isOpen ? 'text-brand-red' : 'text-brand-blue'}`}>{question}</span>
                <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-brand-red text-white rotate-180' : 'bg-white text-gray-400 shadow-sm'}`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="px-8 pb-8 text-gray-500 font-medium text-xs md:text-sm leading-relaxed max-w-2xl">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function ContactTile({ icon, title, detail, subDetail, color }: { icon: React.ReactNode, title: string, detail: string, subDetail: string, color: string }) {
    return (
        <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-premium hover:shadow-hover transition-all duration-500 group overflow-hidden relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-bl-[4rem] -mr-12 -mt-12 transition-all duration-500 group-hover:bg-brand-red/5" />

            <div className="flex flex-col items-start space-y-6 relative z-10">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${color} shadow-sm transition-all duration-500 group-hover:rotate-[360deg]`}>
                    {icon}
                </div>
                <div className="space-y-1">
                    <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">{title}</h4>
                    <p className="text-base md:text-lg font-black text-brand-blue uppercase tracking-tight group-hover:text-brand-red transition-colors">{detail}</p>
                    <p className="text-[9px] font-bold text-gray-300 uppercase tracking-widest">{subDetail}</p>
                </div>
            </div>
        </div>
    );
}
