"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    title: "Personal Info",
    fields: ["Full name", "Email address", "Phone number"],
  },
  {
    title: "Medical History",
    fields: ["Allergies", "Current medications", "Previous surgeries"],
  },
  {
    title: "Confirmation",
    fields: [],
  },
];

export default function Home() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [done, setDone] = useState(false);

  const next = () => {
    if (step < steps.length - 1) {
      setDirection(1);
      setStep(step + 1);
    } else {
      setDone(true);
    }
  };

  const back = () => {
    setDirection(-1);
    setStep(step - 1);
  };

  const progress = ((step + 1) / steps.length) * 100;

  if (done) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center"
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center text-3xl">
            ✓
          </div>
          <h1 className="text-2xl font-medium text-neutral-800 mb-2">
            You're all set!
          </h1>
          <p className="text-neutral-500">
            Your onboarding is complete. We'll be in touch.
          </p>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-neutral-500 mb-2">
            <span>
              Step {step + 1} of {steps.length}
            </span>
            <span>{steps[step].title}</span>
          </div>
          <div className="h-1.5 bg-neutral-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-blue-500 rounded-full"
              animate={{ width: `${progress}%` }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            />
          </div>
        </div>

        {/* Form card */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            initial={{ x: 50 * direction, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50 * direction, opacity: 0 }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
            className="bg-white rounded-2xl shadow-lg border border-neutral-100 p-8"
          >
            <h2 className="text-xl font-medium mb-6 text-neutral-800">
              {steps[step].title}
            </h2>

            {steps[step].fields.map((field, i) => (
              <div key={i} className="mb-4">
                <label className="block text-sm text-neutral-500 mb-1.5">
                  {field}
                </label>
                <input
                  type="text"
                  placeholder={`Enter your ${field.toLowerCase()}`}
                  className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 text-sm focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>
            ))}

            {step === 2 && (
              <div className="bg-blue-50 rounded-lg p-4 text-sm text-blue-800">
                ✓ By continuing, you confirm all information is accurate and
                complete.
              </div>
            )}

            <div className="flex gap-3 mt-6">
              {step > 0 && (
                <button
                  onClick={back}
                  className="px-6 py-2.5 text-sm text-neutral-600 hover:text-neutral-800 transition-colors"
                >
                  Back
                </button>
              )}
              <button
                onClick={next}
                className="ml-auto px-6 py-2.5 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors"
              >
                {step === 2 ? "Complete" : "Continue"}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}