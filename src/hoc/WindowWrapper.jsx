import { useEffect, useRef } from 'react';
import useWindowStore from '../store/window';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const zIndex = useWindowStore((state) => state.windows[windowKey].zIndex);
    const isMinimized = useWindowStore((state) => Boolean(state.windows[windowKey].isMinimized));
    const isMaximized = useWindowStore((state) => Boolean(state.windows[windowKey].isMaximized));
    const isActive = useWindowStore((state) => {
      const top = Math.max(...Object.values(state.windows).filter((window) => window.isOpen && !window.isMinimized).map((window) => window.zIndex));
      return state.windows[windowKey].zIndex === top;
    });
    const focusWindow = useWindowStore((state) => state.focusWindow);
    const toggleMaximize = useWindowStore((state) => state.toggleMaximize);
    const ref = useRef(null);
    const dragRef = useRef(null);

    useEffect(() => {
      const element = ref.current;
      const media = gsap.matchMedia();
      media.add('(min-width: 640px)', () => {
        const [drag] = Draggable.create(element, {
          trigger: element.querySelector('#window-header'),
          bounds: '.desktop-content',
          edgeResistance: 1,
          dragClickables: false,
        });
        dragRef.current = drag;
        if (useWindowStore.getState().windows[windowKey].isMaximized) drag.disable();
        const resize = () => drag.applyBounds();
        window.addEventListener('resize', resize);
        return () => {
          window.removeEventListener('resize', resize);
          drag.kill();
          dragRef.current = null;
          gsap.set(element, { clearProps: 'transform' });
        };
      });
      return () => media.revert();
    }, []);

    useEffect(() => {
      const drag = dragRef.current;
      if (!drag) return;
      if (isMaximized || isMinimized) drag.disable();
      else drag.enable();
    }, [isMaximized, isMinimized]);

    return (
      <section id={windowKey} ref={ref} style={{ zIndex }} className="app-window"
        data-active={isActive}
        data-minimized={isMinimized} data-maximized={isMaximized}
        hidden={isMinimized} inert={isMinimized} tabIndex={-1}
        role="region" aria-label={windowKey + ' window'}
        onPointerDown={() => focusWindow(windowKey)}
        onDoubleClick={(event) => {
          if (event.target.closest('#window-header') && !event.target.closest('button, input, a')) toggleMaximize(windowKey);
        }}
        onFocusCapture={() => focusWindow(windowKey)}>
        <div className="window-content"><Component {...props} /></div>
      </section>
    );
  };
  Wrapped.displayName = 'WindowWrapper(' + (Component.displayName || Component.name || 'Component') + ')';
  return Wrapped;
};

export default WindowWrapper;
