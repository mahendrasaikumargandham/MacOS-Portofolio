import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar, Dock, Welcome, BootScreen } from "./components";

import { Terminal } from "./windows/index";
import gsap from "gsap";
import Draggable from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="relative w-full h-screen overflow-hidden">
      
      {/* 1. THE BOOT SCREEN (Top Layer) */}
      {/* It sits on top because of z-index inside the component */}
      {isLoading && <BootScreen onComplete={() => setIsLoading(false)} />}

      {/* 2. THE DESKTOP (Bottom Layer) */}
      {/* We render this immediately so it's ready to be revealed */}
      <motion.div 
        className="w-full h-full"
        // Initial state: Slightly zoomed in (1.1) and invisible? 
        // No, keep opacity 1 so the black overlay fades to reveal it.
        initial={{ scale: 1.1, filter: "blur(10px)" }} 
        animate={{ 
          // When loading finishes, scale to normal and remove blur
          scale: isLoading ? 1.1 : 1, 
          filter: isLoading ? "blur(10px)" : "blur(0px)" 
        }}
        transition={{ duration: 0.5, ease: "easeOut" }} // Slow, smooth entry
      >
          {/* Your actual App Content */}
          <Navbar />
          <Welcome />
          <Dock />
          <Terminal />
          
          {/* ... Add your windows/other components here ... */}
          
      </motion.div>

    </main>
  );
};

export default App;