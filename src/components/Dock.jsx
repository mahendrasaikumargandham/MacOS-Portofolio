import React, { useRef } from "react";
import { Tooltip } from "react-tooltip";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { dockApps } from "../constants/index";
import useWindowStore from "../store/window";

const CONFIG = {
  baseWidth: 45,
  maxWidth: 85,
  distanceBoundary: 140,
};

const DockIcon = ({ mouseX, id, name, icon, canOpen = true, toggleApp }) => {
  const ref = useRef(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(
    distance,
    [-CONFIG.distanceBoundary, 0, CONFIG.distanceBoundary],
    [CONFIG.baseWidth, CONFIG.maxWidth, CONFIG.baseWidth]
  );

  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="aspect-square flex items-end mb-2 z-10" // Added z-10 to ensure it sits on top
    >
      <button
        type="button"
        // 1. REMOVED 'disabled={!canOpen}' to fix the click issue
        className="dock-icon rounded-2xl overflow-hidden transition-all duration-200 shadow-md w-full h-full relative"
        aria-label={name}
        data-tooltip-id="dock-tooltip"
        data-tooltip-content={name}
        data-tooltip-delay-show={100}
        onClick={(e) => {
            // Prevent event bubbling issues
            e.stopPropagation();
            toggleApp({ id, canOpen });
        }}
      >
        <img
          src={`/images/${icon}`}
          alt={name}
          loading="lazy"
          // 2. ADDED 'pointer-events-none': Makes sure the click goes to the BUTTON, not the image
          className="w-full h-full object-cover pointer-events-none" 
        />
      </button>
    </motion.div>
  );
};

const Dock = () => {
  const mouseX = useMotionValue(Infinity);
  // Default to empty object if store is not ready
  const { openWindow, closeWindow, windows } = useWindowStore() || { windows: {} };

  const toggleApp = (app) => {
    if (!app) return;
    
    // Debugging: This will show up in your console if the click works
    console.log("Opening App:", app.id); 

    const windowState = windows[app.id];

    if (windowState?.isOpen) {
        closeWindow(app.id);
    } else {
        openWindow(app.id);
    }

    console.log(windows);
  };

  return (
    <section id="dock">
      <motion.div
        className="dock-container"
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
      >
        {dockApps.map((app) => (
          <DockIcon
            key={app.id}
            mouseX={mouseX}
            toggleApp={toggleApp}
            {...app}
          />
        ))}

        <Tooltip
          id="dock-tooltip"
          place="top"
          className="dock-tooltip"
          offset={20}
        />
      </motion.div>
    </section>
  );
};

export default Dock;