import { dockApps, locations } from '../constants';
import useWindowStore from '../store/window';
import useLocationStore from '../store/location';

export default function Dock() {
  const windows = useWindowStore((state) => state.windows);
  const openWindow = useWindowStore((state) => state.openWindow);
  const setActiveLocation = useLocationStore((state) => state.setActiveLocation);
  const minimizedDocuments = Object.entries(windows).filter(([key, win]) =>
    win.isOpen && win.isMinimized && !dockApps.some((app) => app.id === key));

  const openApp = (app) => {
    if (!app.canOpen) return;
    if (app.id === 'trash') {
      setActiveLocation(locations.trash);
      openWindow('finder');
    } else {
      openWindow(app.id);
    }
  };

  return (
    <nav id="dock" aria-label="Applications">
      <div className="dock-container">
        {dockApps.map((app) => (
          <div className={'dock-item ' + (app.id === 'trash' ? 'dock-separated' : '')} key={app.id}>
            <button type="button" className="dock-icon" aria-label={app.name}
              data-window-key={app.id} title={windows[app.id]?.isMinimized ? `Restore ${app.name}` : app.name}
              disabled={!app.canOpen} onClick={() => openApp(app)}>
              <img src={'/images/' + app.icon} alt="" draggable="false" />
              <span className="dock-label">{app.name}</span>
            </button>
            <span className="dock-indicator" data-open={Boolean(windows[app.id]?.isOpen)} />
          </div>
        ))}
        {minimizedDocuments.map(([key, win]) => (
          <div className="dock-item dock-separated" key={key}>
            <button type="button" className="dock-icon" data-window-key={key}
              aria-label={`Restore ${win.data?.name || (key === 'resume' ? 'Resume' : 'document')}`}
              onClick={() => openWindow(key)}>
              <img src={key === 'resume' ? '/images/pdf.png' : key === 'imgfile' ? '/images/image.png' : '/images/txt.png'} alt="" />
              <span className="dock-label">{win.data?.name || 'Resume'}</span>
            </button>
            <span className="dock-indicator" data-open="true" />
          </div>
        ))}
      </div>
    </nav>
  );
}
