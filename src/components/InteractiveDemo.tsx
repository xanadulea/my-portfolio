"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function InteractiveDemo() {
  const [borderRadius, setBorderRadius] = useState(16);
  const [spacing, setSpacing] = useState(24);
  const [accentHue, setAccentHue] = useState(220);

  const accentColor = `hsl(${accentHue}, 60%, 55%)`;
  const accentLight = `hsl(${accentHue}, 60%, 95%)`;

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-xs text-neutral-400 uppercase tracking-widest mb-3">
          Try it yourself
        </p>
        <h2 className="text-2xl font-light text-neutral-400">
          Design Token Explorer
        </h2>
        <p className="text-sm text-neutral-500 mt-2 max-w-md mx-auto">
          Drag the sliders. Watch the card respond in real-time. This is the
          level of polish I bring to every interaction.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Controls */}
        <div className="space-y-8">
          <div>
            <div className="flex justify-between text-xs text-neutral-500 mb-2">
              <span>Border Radius</span>
              <span className="font-mono">{borderRadius}px</span>
            </div>
            <input
              type="range"
              min="0"
              max="40"
              value={borderRadius}
              onChange={(e) => setBorderRadius(Number(e.target.value))}
              className="w-full h-1.5 bg-neutral-200 rounded-full appearance-none cursor-pointer accent-neutral-800"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs text-neutral-500 mb-2">
              <span>Spacing</span>
              <span className="font-mono">{spacing}px</span>
            </div>
            <input
              type="range"
              min="8"
              max="48"
              value={spacing}
              onChange={(e) => setSpacing(Number(e.target.value))}
              className="w-full h-1.5 bg-neutral-200 rounded-full appearance-none cursor-pointer accent-neutral-800"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs text-neutral-500 mb-2">
              <span>Accent Color</span>
              <span className="font-mono">{accentHue}°</span>
            </div>
            <input
              type="range"
              min="0"
              max="360"
              value={accentHue}
              onChange={(e) => setAccentHue(Number(e.target.value))}
              className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, 
                  hsl(0, 60%, 55%), 
                  hsl(120, 60%, 55%), 
                  hsl(240, 60%, 55%), 
                  hsl(360, 60%, 55%))`,
              }}
            />
          </div>

          <p className="text-xs text-neutral-400 mt-4">
            These controls modify CSS variables in real-time. In a real project,
            this concept scales to full design systems — letting teams
            experiment before writing code.
          </p>
        </div>

        {/* Live Preview Card */}
        <div className="flex items-center justify-center">
          <motion.div
            animate={{
              borderRadius: borderRadius,
              padding: spacing,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="w-full max-w-sm shadow-xl"
            style={{
              backgroundColor: "white",
              border: `1px solid ${accentLight}`,
            }}
          >
            <div
              className="w-full h-2 rounded-full mb-4"
              style={{ backgroundColor: accentColor }}
            />
            <motion.h3
              animate={{ fontSize: spacing > 30 ? 20 : 18 }}
              className="font-medium text-neutral-800 mb-2"
            >
              Premium Feature
            </motion.h3>
            <p className="text-sm text-neutral-500 leading-relaxed">
              This card responds to every slider change with spring physics. No
              jank. No lag. Just smooth, intentional motion.
            </p>
            <motion.button
              animate={{
                borderRadius: borderRadius / 3,
                backgroundColor: accentColor,
              }}
              className="mt-4 px-5 py-2 text-white text-sm font-medium"
              style={{ backgroundColor: accentColor }}
            >
              Try it now
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}