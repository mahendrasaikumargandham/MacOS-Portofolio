import clsx from 'clsx';
import React, { useRef } from 'react'
import { locations } from '../constants';
import { useGSAP } from '@gsap/react';
import { Draggable } from 'gsap/Draggable';
import useWindowStore from '../store/window';
import useLocationStore from '../store/location';

// Ensure GSAP Plugin is registered
import gsap from "gsap";
gsap.registerPlugin(Draggable);

const projects = locations.work?.children ?? [];

const Home = () => {
    const homeRef = useRef(null);
    const draggedTarget = useRef(null);
    const { setActiveLocation } = useLocationStore();
    const { openWindow } = useWindowStore();

    const handleOpenProjectFinder = (project) => {
        setActiveLocation(project);
        openWindow("finder");
    }

    useGSAP(() => {
        const media = gsap.matchMedia();
        media.add('(min-width: 640px)', () => {
            const folders = homeRef.current.querySelectorAll('.folder');
            const instances = Draggable.create(folders, {
                bounds: homeRef.current,
                zIndexBoost: false,
                onPress() {
                    gsap.killTweensOf(this.target);
                    draggedTarget.current = null;
                },
                onDragStart() {
                    draggedTarget.current = this.target;
                    homeRef.current.dataset.dragging = 'true';
                },
                onDragEnd() {
                    delete homeRef.current.dataset.dragging;
                    const drag = this;
                    gsap.to(this.target, {
                        x: 0, y: 0,
                        duration: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 0.24,
                        ease: 'power2.out', overwrite: true,
                        onUpdate: () => drag.update(),
                    });
                },
            });
            const resetPositions = () => {
                gsap.killTweensOf(folders);
                gsap.set(folders, { x: 0, y: 0 });
                instances.forEach((instance) => instance.update());
            };
            window.addEventListener('resize', resetPositions);
            return () => {
                window.removeEventListener('resize', resetPositions);
                gsap.killTweensOf(folders);
                instances.forEach((instance) => instance.kill());
                gsap.set(folders, { clearProps: 'transform' });
                draggedTarget.current = null;
                delete homeRef.current.dataset.dragging;
            };
        });
        return () => media.revert();
    }, []);

  return (
    <section id="home" ref={homeRef}>
        <ul>
            {projects.map((project) => (
                <li
                    key={project.id}
                    // Combine folder classes with the dynamic position from data
                    // 'folder' is not a tailwind class but useful for GSAP selector
                    className={clsx("group folder font-sf", project.windowPosition)}
                    onClick={(event) => {
                        if (draggedTarget.current !== event.currentTarget) handleOpenProjectFinder(project);
                    }}
                    role="button" tabIndex={0}
                    onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); handleOpenProjectFinder(project); } }}
                >
                    <img src="/images/folder.png" alt={project.name} draggable="false" />
                    <p>{project.name}</p>
                </li>
            ))}
        </ul>
    </section>
  )
}

export default Home
