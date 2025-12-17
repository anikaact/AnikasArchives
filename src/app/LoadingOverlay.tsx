"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingOverlay() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for all images and assets to load
    const handleLoad = () => {
      // Small delay for smooth transition
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };

    // Check if all images are loaded
    const images = document.querySelectorAll("img");
    const imagePromises = Array.from(images).map((img) => {
      if ((img as HTMLImageElement).complete) {
        return Promise.resolve();
      }
      return new Promise((resolve) => {
        img.addEventListener("load", resolve, { once: true });
        img.addEventListener("error", resolve, { once: true });
      });
    });

    Promise.all(imagePromises).then(() => {
      handleLoad();
    });

    // Fallback: if page is already loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  const heartVariants = {
    animate: {
      y: [0, -10, 0],
      scale: [1, 1.1, 1],
      opacity: [0.6, 1, 0.6],
    },
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
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
  );
}

