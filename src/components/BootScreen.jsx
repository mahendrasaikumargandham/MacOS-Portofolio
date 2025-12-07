import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const BootScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isBooted, setIsBooted] = useState(false);

  useEffect(() => {
    // Compressed timeline to fit within 3 seconds
    const timeline = [
      { width: 30, delay: 200 },   // Immediate start
      { width: 30, delay: 800 },   // Brief pause
      { width: 75, delay: 1500 },  // Quick jump
      { width: 85, delay: 2200 },  // Almost there
      { width: 100, delay: 2600 }, // Finished loading
    ];

    let timeouts = [];

    timeline.forEach(({ width, delay }) => {
      timeouts.push(setTimeout(() => setProgress(width), delay));
    });

    // Trigger fade-out exactly at 3000ms (3s)
    timeouts.push(setTimeout(() => {
      setIsBooted(true);
    }, 3000));

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      animate={{ opacity: isBooted ? 0 : 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }} // Slightly faster fade out
      onAnimationComplete={() => {
        if (isBooted) onComplete();
      }}
      className="fixed inset-0 bg-black z-[99999] flex flex-col items-center justify-center cursor-none pointer-events-none"
    >
      {/* Apple Logo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mb-10"
      >
        <svg
          viewBox="0 0 384 512"
          className="w-24 h-24 fill-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" />
        </svg>
      </motion.div>

      {/* Loading Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="w-40 h-1 bg-[#333] rounded-full overflow-hidden" // Slightly thinner bar
      >
        <motion.div
          className="h-full bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.4)]"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default BootScreen;