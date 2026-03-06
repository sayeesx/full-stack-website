'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    color: string;
    duration: number;
    delay: number;
}

export const ConfettiBackground = () => {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        const colors = ['#D7141A', '#11457E']; // Brand Red and Blue
        const newParticles = Array.from({ length: 30 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 4 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            duration: Math.random() * 10 + 10,
            delay: Math.random() * 5,
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute"
                    style={{
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: p.size * 2,
                        height: p.size * 3,
                        background: `linear-gradient(135deg, ${p.color} 50%, rgba(255,255,255,0.2) 100%)`, // 3D Shading effect
                        clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                        filter: 'blur(0.5px)',
                    }}
                    animate={{
                        y: [0, -80, 0],
                        x: [0, 40, 0],
                        rotate: [0, 180, 360],
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.6, 0.2],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    );
};
