import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar, Dock, Welcome, BootScreen, Home } from "./components";
import { Terminal, Safari, Resume, Finder, Text, Image, Contact, Photos } from "./windows";
import gsap from "gsap";
import Draggable from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="relative w-full h-screen overflow-hidden">
  
      {isLoading && <BootScreen onComplete={() => setIsLoading(false)} />}

      <motion.div 
        className="w-full h-full"
        initial={{ scale: 1.1, filter: "blur(10px)" }} 
        animate={{ 
          scale: isLoading ? 1.1 : 1, 
          filter: isLoading ? "blur(10px)" : "blur(0px)" 
        }}
        transition={{ duration: 0.5, ease: "easeOut" }} 
      >
          <Navbar />
          <Welcome />
          <Dock />
          <Terminal />
          <Safari />
          <Resume />
          <Finder />
          <Text />
          <Image />
          <Contact />
          <Photos />
          <Home />
      </motion.div>

    </main>
  );
};

export default App;