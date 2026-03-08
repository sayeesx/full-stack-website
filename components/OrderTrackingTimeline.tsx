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
}

const orderSteps: OrderStep[] = [
  {
    id: 0,
    title: "Order Received",
    timestamp: "09:10 AM, 10 Nov 2019",
    duration: "05:00",
    icon: <Package className="w-4 h-4" />,
  },
  {
    id: 1,
    title: "Preparing Order",
    timestamp: "09:15 AM, 10 Nov 2019",
    duration: "14:55",
    icon: <Clock className="w-4 h-4" />,
  },
  {
    id: 2,
    title: "On The Way",
    timestamp: "09:30 AM, 10 Nov 2019",
    duration: "30:00",
    icon: <Truck className="w-4 h-4" />,
  },
];

export default function OrderTrackingTimeline({
  invoiceNumber = "123456",
  foodImage = "/api/placeholder/200/200",
  autoProgress = true,
}: OrderTrackingTimelineProps) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (!autoProgress) return;

    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < orderSteps.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 30000); // Progress every 30 seconds

    return () => clearInterval(timer);
  }, [autoProgress]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-rose-50/30 to-slate-50 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-md bg-white rounded-3xl shadow-2xl shadow-rose-500/10 overflow-hidden"
      >
        {/* Header */}
        <div className="relative bg-gradient-to-br from-white to-rose-50/50 pt-8 pb-6 px-6 border-b border-rose-100">
          <button className="absolute left-6 top-8 w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow flex items-center justify-center">
            <svg
              className="w-5 h-5 text-slate-700"
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
          <div className="text-center">
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
              Order Status
            </h1>
            <p className="text-sm text-slate-500 mt-1 font-medium">
              Invoice: {invoiceNumber}
            </p>
          </div>
        </div>

        {/* Food Image */}
        <div className="flex justify-center py-8 bg-gradient-to-b from-rose-50/50 to-white">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute inset-0 bg-rose-400/20 rounded-full blur-2xl" />
            <img
              src={foodImage}
              alt="Order Food"
              className="relative w-40 h-40 rounded-full object-cover shadow-xl ring-4 ring-white"
            />
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="px-8 py-8 space-y-8">
          {orderSteps.map((step, index) => (
            <TimelineStep
              key={step.id}
              step={step}
              isActive={currentStep >= index}
              isLast={index === orderSteps.length - 1}
              showProgress={currentStep > index}
              shouldAnimate={currentStep === index}
            />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="px-8 pb-8 space-y-3">
          <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-rose-500 text-white text-sm font-semibold rounded-full shadow-lg shadow-rose-500/30 hover:bg-rose-600 hover:shadow-xl hover:shadow-rose-500/40 transition-all duration-300 mx-auto block">
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              📍
            </motion.span>
            Tracking
          </button>

          <button className="w-full py-4 bg-gradient-to-r from-rose-500 to-rose-600 text-white text-base font-bold rounded-2xl shadow-lg shadow-rose-500/30 hover:shadow-xl hover:shadow-rose-500/40 hover:from-rose-600 hover:to-rose-700 transition-all duration-300 transform hover:scale-[1.02]">
            Confirm Delivery
          </button>
        </div>
      </motion.div>
    </div>
  );
}

interface TimelineStepProps {
  step: OrderStep;
  isActive: boolean;
  isLast: boolean;
  showProgress: boolean;
  shouldAnimate: boolean;
}

function TimelineStep({
  step,
  isActive,
  isLast,
  showProgress,
  shouldAnimate,
}: TimelineStepProps) {
  return (
    <div className="relative flex items-start gap-4">
      {/* Timeline Node */}
      <div className="relative flex flex-col items-center">
        {/* Animated Node */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="relative z-10"
        >
          {/* Ripple Animation */}
          <AnimatePresence>
            {shouldAnimate && (
              <>
                <motion.div
                  initial={{ scale: 1, opacity: 0.6 }}
                  animate={{ scale: 2.5, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                  className="absolute inset-0 bg-rose-500 rounded-full"
                />
                <motion.div
                  initial={{ scale: 1, opacity: 0.4 }}
                  animate={{ scale: 2, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: 0.3,
                  }}
                  className="absolute inset-0 bg-rose-500 rounded-full"
                />
              </>
            )}
          </AnimatePresence>

          {/* Node Circle */}
          <motion.div
            animate={{
              backgroundColor: isActive ? "#ef4444" : "#e2e8f0",
              scale: shouldAnimate ? [1, 1.1, 1] : 1,
            }}
            transition={{
              backgroundColor: { duration: 0.3 },
              scale: { duration: 0.6, repeat: shouldAnimate ? Infinity : 0 },
            }}
            className="relative w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
          >
            {showProgress ? (
              <Check className="w-5 h-5 text-white" strokeWidth={3} />
            ) : (
              <div className={isActive ? "text-white" : "text-slate-400"}>
                {step.icon}
              </div>
            )}
          </motion.div>
        </motion.div>

        {/* Connecting Line */}
        {!isLast && (
          <div className="absolute top-12 left-1/2 -translate-x-1/2 w-0.5 h-20 -z-0">
            {/* Background Dashed Line */}
            <div className="absolute inset-0 border-l-2 border-dashed border-slate-200" />

            {/* Animated Progress Line */}
            {showProgress && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0 bg-gradient-to-b from-rose-500 to-rose-400"
                style={{ width: "2px", left: "-1px" }}
              />
            )}
          </div>
        )}
      </div>

      {/* Step Content */}
      <div className="flex-1 pt-2">
        <div className="flex items-start justify-between gap-4">
          <div>
            <motion.h3
              animate={{
                color: isActive ? "#0f172a" : "#94a3b8",
              }}
              className="font-bold text-base leading-tight"
            >
              {step.title}
            </motion.h3>
            <motion.div
              animate={{
                opacity: isActive ? 1 : 0.5,
              }}
              className="flex items-center gap-1.5 mt-1.5 text-xs"
            >
              <Clock className="w-3.5 h-3.5 text-rose-500" />
              <span className="text-slate-600 font-medium">
                {step.timestamp}
              </span>
            </motion.div>
          </div>

          {/* Duration Badge */}
          <motion.div
            animate={{
              opacity: isActive ? 1 : 0.4,
              color: isActive && shouldAnimate ? "#ef4444" : "#64748b",
            }}
            className="text-sm font-bold tracking-wide"
          >
            {step.duration}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
