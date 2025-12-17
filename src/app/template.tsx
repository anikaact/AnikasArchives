"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [showLoader, setShowLoader] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Trigger exit animation
    setIsExiting(true);
    setShowLoader(true);
    
    // Hide loader and show new content after transition
    const timer = setTimeout(() => {
      setIsExiting(false);
      setShowLoader(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [pathname]);

  const heartVariants = {
    animate: {
      y: [0, -10, 0],
      scale: [1, 1.1, 1],
      opacity: [0.6, 1, 0.6],
    },
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {showLoader && (
          <motion.div
            key="page-loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] bg-[#fff5f6] flex items-center justify-center"
          >
            <div className="flex items-center gap-4">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  variants={heartVariants}
                  animate="animate"
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                  className="text-6xl text-[#f4bfc1]"
                  style={{
                    filter: "drop-shadow(0 2px 4px rgba(244, 191, 193, 0.3))",
                  }}
                >
                  ♥
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isExiting ? 0 : 1, y: isExiting ? -20 : 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: [0.17, 0.67, 0.83, 0.67] }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}

