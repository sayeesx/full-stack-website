'use client';

import { useRef, useEffect, useState, useMemo, useId, FC, PointerEvent } from 'react';

interface MarqueeProps {
    marqueeText?: string;
    speed?: number;
    className?: string;
    direction?: 'left' | 'right';
    interactive?: boolean;
}

const Marquee: FC<MarqueeProps> = ({
    marqueeText = 'CRISPY • JUICY • TENDER • GOLDEN • FRESHLY FRIED • NO. 1 BROASTED CHICKEN • FRY HARDER • ',
    speed = 1.0,
    className,
    direction = 'left',
    interactive = true
}) => {
    const text = useMemo(() => {
        const hasTrailing = /\s|\u00A0$/.test(marqueeText);
        return (hasTrailing ? marqueeText.replace(/\s+$/, '') : marqueeText) + '\u00A0';
    }, [marqueeText]);

    const measureRef = useRef<SVGTextElement | null>(null);
    const textPathRef = useRef<SVGTextPathElement | null>(null);
    const pathRef = useRef<SVGPathElement | null>(null);
    const [spacing, setSpacing] = useState(0);
    const [offset, setOffset] = useState(0);
    const uid = useId();
    const pathId = `line-${uid}`;

    // Very long path to allow for plenty of text and off-screen movement
    const pathD = `M-2000,60 H6000`;

    const dragRef = useRef(false);
    const lastXRef = useRef(0);
    const dirRef = useRef<'left' | 'right'>(direction);
    const velRef = useRef(0);

    const textLength = spacing;
    // Plenty of repeats to ensure no gaps ever
    const totalText = textLength
        ? Array(30).fill(text).join('')
        : text;
    const ready = spacing > 0;

    useEffect(() => {
        if (measureRef.current) setSpacing(measureRef.current.getComputedTextLength());
    }, [text, className]);

    useEffect(() => {
        if (!spacing) return;
        if (textPathRef.current) {
            // Position it far enough left to be off-screen
            const initial = -spacing * 5;
            textPathRef.current.setAttribute('startOffset', initial + 'px');
            setOffset(initial);
        }
    }, [spacing]);

    useEffect(() => {
        if (!spacing || !ready) return;
        let frame = 0;
        const step = () => {
            if (!dragRef.current && textPathRef.current) {
                const delta = dirRef.current === 'right' ? speed : -speed;
                const currentOffset = parseFloat(textPathRef.current.getAttribute('startOffset') || '0');
                let newOffset = currentOffset + delta;

                // Loop seamlessly by checking against spacing
                if (newOffset <= -spacing * 10) newOffset += spacing;
                if (newOffset >= -spacing * 2) newOffset -= spacing;

                textPathRef.current.setAttribute('startOffset', newOffset + 'px');
                setOffset(newOffset);
            }
            frame = requestAnimationFrame(step);
        };
        frame = requestAnimationFrame(step);
        return () => cancelAnimationFrame(frame);
    }, [spacing, speed, ready]);

    const onPointerDown = (e: PointerEvent) => {
        if (!interactive) return;
        dragRef.current = true;
        lastXRef.current = e.clientX;
        velRef.current = 0;
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: PointerEvent) => {
        if (!interactive || !dragRef.current || !textPathRef.current) return;
        const dx = e.clientX - lastXRef.current;
        lastXRef.current = e.clientX;
        velRef.current = dx;
        const currentOffset = parseFloat(textPathRef.current.getAttribute('startOffset') || '0');
        let newOffset = currentOffset + dx;

        if (newOffset <= -spacing * 10) newOffset += spacing;
        if (newOffset >= -spacing * 2) newOffset -= spacing;

        textPathRef.current.setAttribute('startOffset', newOffset + 'px');
        setOffset(newOffset);
    };

    const endDrag = () => {
        if (!interactive) return;
        dragRef.current = false;
        dirRef.current = velRef.current > 0 ? 'right' : 'left';
    };

    const cursorStyle = interactive ? (dragRef.current ? 'grabbing' : 'grab') : 'auto';

    return (
        <div
            className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-6 overflow-hidden flex items-center border-y border-gray-100 bg-gray-50/20"
            style={{ visibility: ready ? 'visible' : 'hidden', cursor: cursorStyle }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerLeave={endDrag}
        >
            <svg
                className="select-none w-full overflow-visible block aspect-[1440/50] text-5xl md:text-5xl font-black uppercase leading-none tracking-tighter"
                viewBox="0 0 1440 120"
                preserveAspectRatio="xMidYMid slice"
            >
                <text ref={measureRef} xmlSpace="preserve" style={{ visibility: 'hidden', opacity: 0, pointerEvents: 'none' }}>
                    {text}
                </text>
                <defs>
                    <path ref={pathRef} id={pathId} d={pathD} fill="none" stroke="transparent" />
                </defs>
                {ready && (
                    <text xmlSpace="preserve" className={`fill-brand-blue/30 stroke-brand-blue/10 stroke-[0.5] ${className ?? ''}`}>
                        <textPath ref={textPathRef} href={`#${pathId}`} startOffset={offset + 'px'} xmlSpace="preserve">
                            {totalText}
                        </textPath>
                    </text>
                )}
            </svg>
        </div>
    );
};

export default Marquee;
