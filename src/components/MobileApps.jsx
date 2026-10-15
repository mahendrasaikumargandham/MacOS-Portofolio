import { createElement } from 'react';
import { BriefcaseBusiness, Award, FileText, Code2 } from 'lucide-react';
import { locations } from '../constants';
import useLocationStore from '../store/location';
import useWindowStore from '../store/window';

const apps = [
  { name: 'Experience', icon: BriefcaseBusiness, location: 'experience', color: 'blue' },
  { name: 'Certificates', icon: Award, location: 'certifications', color: 'gold' },
  { name: 'Resume', icon: FileText, window: 'resume', color: 'red' },
  { name: 'Skills', icon: Code2, window: 'terminal', color: 'purple' },
];

export default function MobileApps() {
  const openWindow = useWindowStore((state) => state.openWindow);
  const setActiveLocation = useLocationStore((state) => state.setActiveLocation);
  return <nav className="mobile-apps" aria-label="Portfolio apps">
    {apps.map(({ name, icon: Icon, location, window: appWindow, color }) => (
      <button key={name} type="button" onClick={() => {
        if (location) setActiveLocation(locations[location]);
        openWindow(appWindow || 'finder');
      }}>
        <span className={'mobile-app-icon ' + color}>{createElement(Icon, { size: 27, 'aria-hidden': true })}</span>
        <span>{name}</span>
      </button>
    ))}
  </nav>;
}
