"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Clock, Package, Truck } from "lucide-react";

interface OrderStep {
  id: number;
  title: string;
  timestamp: string;
  duration: string;
  icon: React.ReactNode;
}

interface OrderTrackingTimelineProps {
  invoiceNumber?: string;
  foodImage?: string;
  autoProgress?: boolean;
  onClose?: () => void;
}

const orderSteps: OrderStep[] = [
  {
    id: 0,
    title: "Order Received",
    timestamp: "09:10 AM, Today",
    duration: "05:00",
    icon: <Package className="w-4 h-4" />,
  },
  {
    id: 1,
    title: "Preparing Order",
    timestamp: "09:15 AM, Today",
    duration: "14:55",
    icon: <Clock className="w-4 h-4" />,
  },
  {
    id: 2,
    title: "On The Way",
    timestamp: "09:30 AM, Today",
    duration: "30:00",
    icon: <Truck className="w-4 h-4" />,
  },
];

export default function OrderTrackingTimeline({
  invoiceNumber = "CR-892341",
  foodImage = "/burger-combo.jpeg",
  autoProgress = true,
  onClose,
}: OrderTrackingTimelineProps) {

  const [currentStep, setCurrentStep] = useState(0);
  const [segment, setSegment] = useState(0);

  useEffect(() => {
    if (!autoProgress) return;

    const interval = setInterval(() => {

      setSegment((prev) => {
        if (prev < 5) return prev + 1;

        setCurrentStep((s) => {
          if (s < orderSteps.length - 1) return s + 1;
          return s;
        });

        return 0;
      });

    }, 5000);

    return () => clearInterval(interval);

  }, [autoProgress]);

  return (
    <div className="flex flex-col h-full bg-white max-w-full overflow-hidden">

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col h-full overflow-hidden"
      >

        {/* Header */}

        <div className="relative bg-white pt-5 pb-3 px-4 border-b border-gray-100 shrink-0">

          {onClose && (
            <button
              onClick={onClose}
              className="absolute left-4 top-5 w-8 h-8 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center text-brand-blue"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          <div className="text-center">
            <h1 className="text-lg font-black text-brand-blue uppercase">
              Order Status
            </h1>

            <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">
              Invoice: {invoiceNumber}
            </p>
          </div>
        </div>


        {/* Food Image */}

        <div className="flex justify-center py-4 bg-gray-50/30">

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative"
          >

            <div className="absolute inset-0 bg-brand-red/10 rounded-full blur-xl" />

            <img
              src={foodImage}
              alt="food"
              className="relative w-24 h-24 rounded-2xl object-cover shadow-lg ring-2 ring-white"
            />

          </motion.div>
        </div>


        {/* Timeline */}

        <div className="relative px-6 py-6 space-y-10">

          {orderSteps.map((step, index) => (

            <TimelineStep
              key={step.id}
              step={step}
              index={index}
              segment={segment}
              isActive={currentStep >= index}
              shouldAnimate={currentStep === index}
              isLast={index === orderSteps.length - 1}
            />

          ))}

        </div>


        {/* Bottom Button */}

        <div className="p-4 border-t border-gray-100 bg-white shrink-0">
          <button className="w-full py-3.5 bg-brand-red text-white text-[11px] font-black uppercase rounded-xl">
            Help & Support
          </button>
        </div>

      </motion.div>
    </div>
  );
}



interface TimelineStepProps {
  step: OrderStep;
  index: number;
  segment: number;
  isActive: boolean;
  shouldAnimate: boolean;
  isLast: boolean;
}



function TimelineStep({
  step,
  segment,
  isActive,
  shouldAnimate,
  isLast,
}: TimelineStepProps) {

  return (

    <div className="relative flex items-start gap-4">


      {/* Node */}

      <div className="relative flex-shrink-0 w-8 h-8 flex items-center justify-center">

        {!isLast && (

          <div className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-col gap-[3px]">

            {[...Array(6)].map((_, i) => (

              <motion.div
                key={i}
                className="w-[2px] h-[6px]"
                animate={{
                  backgroundColor:
                    shouldAnimate && segment >= i
                      ? "#D7141A"
                      : "#e2e8f0",
                }}
                transition={{ duration: 0.3 }}
              />

            ))}

          </div>

        )}


        <div className="relative z-10 w-8 h-8">


          {/* Ripple pulses */}

          <AnimatePresence>

            {shouldAnimate &&
              [...Array(segment + 1)].map((_, i) => (

                <motion.div
                  key={i}
                  initial={{ scale: 1, opacity: 0.4 }}
                  animate={{ scale: 1.6, opacity: 0 }}
                  transition={{
                    duration: 1.2,
                    ease: "easeOut",
                  }}
                  className="absolute inset-0 bg-brand-red rounded-full"
                />

              ))}

          </AnimatePresence>


          {/* Node circle */}

          <motion.div
            animate={{
              backgroundColor: isActive ? "#D7141A" : "#e2e8f0",
            }}
            transition={{ duration: 0.3 }}
            className="w-8 h-8 rounded-full flex items-center justify-center shadow-sm"
          >

            {isActive ? (
              <Check className="w-3.5 h-3.5 text-white" strokeWidth={4} />
            ) : (
              <div className="text-slate-400 scale-75">{step.icon}</div>
            )}

          </motion.div>

        </div>
      </div>


      {/* Content */}

      <div className="flex-1 pt-1">

        <div className="flex items-center justify-between">

          <div>

            <motion.h3
              animate={{
                color: isActive ? "#11457E" : "#94a3b8",
              }}
              className="font-black text-[11px] uppercase"
            >
              {step.title}
            </motion.h3>

            <div className="flex items-center gap-1 mt-1 text-[9px]">

              <Clock className="w-2.5 h-2.5 text-brand-red" />

              <span className="text-gray-400 font-bold uppercase tracking-widest">
                {step.timestamp}
              </span>

            </div>

          </div>


          <div className="text-[9px] font-black tracking-widest text-brand-blue">
            {step.duration}
          </div>

        </div>

      </div>

    </div>

  );
}