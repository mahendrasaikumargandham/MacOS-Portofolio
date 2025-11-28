import React, { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';

const FONT_WEIGHTS = {
    subtitle: { min: 100, max: 400, default: 100 },
    title: { min: 400, max: 900, default: 400 }
};

const renderText = (text, className, baseWeight = 400) => {
    return [...text].map((char, i) => (
        <span
            key={i}
            className={className}
            style={{ fontVariationSettings: `"wght" ${baseWeight}` }}
        >
            {char === " " ? "\u00A0" : char}
        </span>
    ));
};

const Welcome = () => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    useGSAP(() => {
        const setupTextHover = (container, type) => {
            if (!container) return;

            const letters = container.querySelectorAll("span");
            const { min, max, default: defaultWeight } = FONT_WEIGHTS[type];

            let containerLeft = 0;

            const handleMouseEnter = () => {
                containerLeft = container.getBoundingClientRect().left;
            };

            const handleMouseMove = (e) => {
                const mouseX = e.clientX;

                letters.forEach((letter) => {
                    const rect = letter.getBoundingClientRect();
                    const letterCenter = rect.left + rect.width / 2;
                    const distance = Math.abs(mouseX - letterCenter);

                    // Gaussian falloff — higher = wider effect
                    const intensity = Math.exp(-(distance * distance) / 1);
                    const targetWeight = min + (max - min) * intensity;

                    gsap.to(letter, {
                        duration: 0.4,
                        ease: "power2.out",
                        fontVariationSettings: `"wght" ${targetWeight}`
                    });
                });
            };

            const handleMouseLeave = () => {
                gsap.to(letters, {
                    duration: 0.8,
                    ease: "elastic.out(1, 0.3)",
                    fontVariationSettings: `"wght" ${defaultWeight}`
                });
            };

            container.addEventListener("mouseenter", handleMouseEnter);
            container.addEventListener("mousemove", handleMouseMove);
            container.addEventListener("mouseleave", handleMouseLeave);

            // Cleanup on unmount
            return () => {
                container.removeEventListener("mouseenter", handleMouseEnter);
                container.removeEventListener("mousemove", handleMouseMove);
                container.removeEventListener("mouseleave", handleMouseLeave);
            };
        };

        const cleanup1 = setupTextHover(titleRef.current, "title");
        const cleanup2 = setupTextHover(subtitleRef.current, "subtitle");

        return () => {
            cleanup1?.();
            cleanup2?.();
        };
    }, []);

    return (
        <section id="welcome" className="select-none">
            <p ref={subtitleRef} className="tracking-tight">
                {renderText("Hey, I'm Mahendra! Welcome to my", "text-3xl", 100)}
            </p>
            <h1 ref={titleRef} className="mt-7 tracking-tighter">
                {renderText("Portfolio", "text-9xl")}
            </h1>

            <div className="small-screen">
                This portfolio is designed for desktop/tablet screens only.
            </div>
        </section>
    );
};

export default Welcome;