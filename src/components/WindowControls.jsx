import React from 'react'
import useWindowStore from '../store/window'

const WindowControls = ({ target }) => {
    const closeWindow = useWindowStore((state) => state.closeWindow);
    const minimizeWindow = useWindowStore((state) => state.minimizeWindow);
    const toggleMaximize = useWindowStore((state) => state.toggleMaximize);
    const isMaximized = useWindowStore((state) => Boolean(state.windows[target].isMaximized));
    const minimize = () => {
      minimizeWindow(target);
      requestAnimationFrame(() => document.querySelector(`#dock [data-window-key="${target}"]`)?.focus());
    };
    const close = () => {
      closeWindow(target);
      requestAnimationFrame(() => {
        const visible = [...document.querySelectorAll('.app-window:not([hidden])')];
        visible.sort((a, b) => Number(b.style.zIndex) - Number(a.style.zIndex));
        (visible[0] || document.querySelector(`#dock [data-window-key="${target}"]`) || document.querySelector('#dock button'))?.focus();
      });
    };
  return (
    <div id = "window-controls">
      <button type="button" className="close" title="Close" aria-label="Close window" onClick={close} />
      <button type="button" className="minimize" title="Minimize to Dock" aria-label="Minimize window" onClick={minimize} />
      <button type="button" className="maximize" title={isMaximized ? 'Restore size' : 'Maximize'} aria-label={isMaximized ? 'Restore window' : 'Maximize window'} aria-pressed={isMaximized} onClick={() => toggleMaximize(target)} />
    </div>
  )
}

export default WindowControls
