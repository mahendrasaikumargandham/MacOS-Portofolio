import { useEffect, useRef, useState } from 'react';
import { Monitor, Moon, SlidersHorizontal, Sun } from 'lucide-react';
import useAppearanceStore from '../store/appearance';

const options = [
  { value: 'light', label: 'Light', Icon: Sun },
  { value: 'dark', label: 'Dark', Icon: Moon },
  { value: 'system', label: 'System', Icon: Monitor },
];

export default function AppearanceMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useAppearanceStore((state) => state.theme);
  const setTheme = useAppearanceStore((state) => state.setTheme);
  const containerRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    containerRef.current.querySelector('input:checked')?.focus();
    const dismissOutside = (event) => {
      if (!containerRef.current.contains(event.target)) setIsOpen(false);
    };
    const dismissEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        triggerRef.current.focus();
      }
    };
    document.addEventListener('pointerdown', dismissOutside);
    document.addEventListener('focusin', dismissOutside);
    document.addEventListener('keydown', dismissEscape);
    return () => {
      document.removeEventListener('pointerdown', dismissOutside);
      document.removeEventListener('focusin', dismissOutside);
      document.removeEventListener('keydown', dismissEscape);
    };
  }, [isOpen]);

  return (
    <div className="appearance-menu" ref={containerRef}>
      <button type="button" ref={triggerRef} className="appearance-trigger"
        title="Appearance" aria-label="Appearance" aria-haspopup="dialog"
        aria-expanded={isOpen} aria-controls={isOpen ? 'appearance-panel' : undefined}
        onClick={() => setIsOpen((open) => !open)}>
        <SlidersHorizontal size={16} aria-hidden="true" />
      </button>
      {isOpen && (
        <section id="appearance-panel" className="appearance-panel" role="dialog" aria-labelledby="appearance-title">
          <h2 id="appearance-title">Appearance</h2>
          <p>Make this desktop yours.</p>
          <fieldset>
            <legend className="sr-only">Choose a theme</legend>
            <div className="appearance-options">
              {options.map((option) => {
                const Icon = option.Icon;
                return (
                  <label key={option.value} className="appearance-option">
                    <input type="radio" name="appearance" value={option.value}
                      checked={theme === option.value} onChange={() => setTheme(option.value)} />
                    <span className={'appearance-preview appearance-preview-' + option.value}>
                      <Icon size={22} aria-hidden="true" />
                    </span>
                    <span>{option.label}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>
          <p className="appearance-note" aria-live="polite">
            {theme === 'system' ? 'Automatically matches your device.' : `${theme === 'dark' ? 'Dark' : 'Light'} appearance is always on.`}
          </p>
        </section>
      )}
    </div>
  );
}
