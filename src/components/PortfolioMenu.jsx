import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { navLinks } from '../constants';

export default function PortfolioMenu({ onNavigate }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const buttonRef = useRef(null);
  useEffect(() => {
    if (!open) return;
    const outside = (event) => { if (!ref.current.contains(event.target)) setOpen(false); };
    const escape = (event) => {
      if (event.key === 'Escape') { setOpen(false); buttonRef.current.focus(); }
    };
    document.addEventListener('pointerdown', outside);
    document.addEventListener('focusin', outside);
    document.addEventListener('keydown', escape);
    return () => {
      document.removeEventListener('pointerdown', outside);
      document.removeEventListener('focusin', outside);
      document.removeEventListener('keydown', escape);
    };
  }, [open]);
  return (
    <div className="portfolio-menu" ref={ref}>
      <button type="button" ref={buttonRef} className="portfolio-trigger" aria-expanded={open}
        aria-controls="portfolio-navigation" onClick={() => setOpen(!open)}>
        Portfolio <ChevronDown size={12} aria-hidden="true" />
      </button>
      {open && <div id="portfolio-navigation" className="portfolio-panel">
        {navLinks.map((link) => <button type="button" key={link.type} onClick={() => {
          onNavigate(link.type); setOpen(false); buttonRef.current.focus();
        }}>{link.name}</button>)}
      </div>}
    </div>
  );
}
