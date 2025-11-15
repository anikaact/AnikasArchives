"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Hearts() {
  const { scrollYProgress } = useScroll();

  // Slow, scroll-dependent fade & rise
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.6], [50, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [0.8, 1]);

  const hearts = ["♥", "♥", "♥"];

  return (
    <div className="flex flex-col items-center gap-40 mt-12 mb-28">
      {hearts.map((heart, i) => (
        <motion.span
          key={i}
          style={{
            opacity,
            y,
            scale,
            // stagger based on index, but still scroll-controlled
            transition: "transform 0.2s linear",
          }}
          className="text-[#f4bfc1] text-9xl"
        >
          {heart}
        </motion.span>
      ))}
    </div>
  );
}
