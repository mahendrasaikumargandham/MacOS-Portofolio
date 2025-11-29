import React, { useState, useEffect } from 'react';
import dayjs from "dayjs";
import { navIcons, navLinks } from '../constants/index';
import useWindowStore from '../store/window';

const Navbar = () => {
    const [time, setTime] = useState(dayjs().format("ddd MMM D h:mm A"));
    const { openWindow } = useWindowStore();
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(dayjs().format("ddd MMM D h:mm A"));
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full h-8 bg-black/20 backdrop-blur-md flex justify-between items-center px-4 z-[9999] text-white shadow-sm font-sf select-none">
            {/* --- Left Side --- */}
            <div className="flex items-center gap-4">
                {/* 1. Fixed Apple Logo (Correct SVG) */}
                <div className="hover:bg-white/20 px-2 py-1 rounded transition-colors cursor-default flex items-center justify-center">
                    <svg 
                            viewBox="0 0 384 512" 
                            className="w-3.5 h-3.5 fill-white" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z"/>
                        </svg>
                </div>

                {/* 2. App Name */}
                <span className="font-bold text-[13px] tracking-wide cursor-default hidden sm:block">
                    Mahendra's Portfolio
                </span>

                {/* 3. Your Original Nav Items (Projects, Contact, etc.) */}
                <ul className="flex items-center gap-4 h-full">
                    {navLinks.map(({ id, name, type }) => (
                        <li 
                            key={id} 
                            className="text-[13px] font-medium hover:bg-white/20 px-2 py-0.5 rounded transition-colors cursor-pointer hidden md:block"
                            onClick={() => openWindow(type)}
                        >
                            {name}
                        </li>
                    ))}
                </ul>
            </div>

            {/* --- Right Side --- */}
            <div className="flex items-center gap-4">
                <ul className="flex items-center gap-3">
                    {navIcons.map(({ id, img }) => (
                        <li key={id}>
                            <img 
                                src={img} 
                                alt={`icon-${id}`} 
                                className="w-4 h-4 object-contain invert hover:opacity-70 transition-opacity cursor-default" 
                            />
                        </li>
                    ))}
                </ul>
                <time className="text-[13px] font-medium min-w-[120px] text-right cursor-default">
                    {time}
                </time>
            </div>
        </nav>
    )
}

export default Navbar