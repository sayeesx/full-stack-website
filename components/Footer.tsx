'use client';
import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
    const [isMounted, setIsMounted] = React.useState(false);

    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-brand-blue text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center transform rotate-3">
                                <span className="text-white font-black text-xl">C</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-black text-xl leading-none text-white">
                                    CHICK REPUBLIC
                                </span>
                                <span className="text-[10px] font-bold tracking-[0.2em] leading-none text-red-500">
                                    FRY HARDER
                                </span>
                            </div>
                        </Link>
                        <p className="text-blue-100 text-sm leading-relaxed max-w-xs">
                            Premium cloud kitchen serving the crispiest, most flavorful fried chicken. We don't just fry, we fry harder.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="p-2 bg-blue-800 hover:bg-brand-red rounded-full transition-colors">
                                <Facebook size={18} />
                            </Link>
                            <Link href="#" className="p-2 bg-blue-800 hover:bg-brand-red rounded-full transition-colors">
                                <Instagram size={18} />
                            </Link>
                            <Link href="#" className="p-2 bg-blue-800 hover:bg-brand-red rounded-full transition-colors">
                                <Twitter size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-black text-lg mb-6 uppercase tracking-wider">Quick Links</h4>
                        <ul className="space-y-4">
                            {['Home', 'Our Menu', 'Order Online', 'About Us', 'Reviews', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-blue-100 hover:text-brand-red text-sm font-bold transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Menu Categories */}
                    <div>
                        <h4 className="font-black text-lg mb-6 uppercase tracking-wider">Categories</h4>
                        <ul className="space-y-4">
                            {['Broasted Chicken', 'Burgers', 'Combo Meals', 'Family Buckets', 'Sides', 'Drinks'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-blue-100 hover:text-brand-red text-sm font-bold transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-black text-lg mb-6 uppercase tracking-wider">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-brand-red shrink-0" size={20} />
                                <span className="text-blue-100 text-sm">123 Fryer Street, Crunch Valley, CV 45678</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-brand-red shrink-0" size={20} />
                                <span className="text-blue-100 text-sm">+1 (555) 123-FRY-HARD</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-brand-red shrink-0" size={20} />
                                <span className="text-blue-100 text-sm">hello@chickrepublic.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-blue-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-blue-300 tracking-widest uppercase">
                    <p>© {isMounted ? currentYear : ''} CHICK REPUBLIC. ALL RIGHTS RESERVED.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
