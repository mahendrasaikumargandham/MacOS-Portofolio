import { List, LayoutGrid } from 'lucide-react';

export default function ViewSwitcher({ view, onChange }) {
  return <div className="view-switcher" role="group" aria-label="View options">
    <button type="button" aria-label="List view" aria-pressed={view === 'list'} onClick={() => onChange('list')}><List size={18} /></button>
    <button type="button" aria-label="Grid view" aria-pressed={view === 'grid'} onClick={() => onChange('grid')}><LayoutGrid size={18} /></button>
  </div>;
}
