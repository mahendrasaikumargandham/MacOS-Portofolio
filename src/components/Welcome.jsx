import { useEffect, useState } from 'react';
import { ArrowUpRight, Gamepad2 } from 'lucide-react';
import { locations } from '../constants';
import useLocationStore from '../store/location';
import useWindowStore from '../store/window';

const previews = [
  { name: 'Rubix Rampage', image: '/images/gameplay.jpg', caption: 'Open-world adventure' },
  { name: 'TDM Multiplayer', image: '/images/gameplay-av.jpg', caption: 'Multiplayer arena' },
];

function localGreeting() {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return 'Good morning';
  if (hour >= 12 && hour < 17) return 'Good afternoon';
  return 'Good evening';
}

export default function Welcome() {
  const [greeting, setGreeting] = useState(localGreeting);
  const setActiveLocation = useLocationStore((state) => state.setActiveLocation);
  const openWindow = useWindowStore((state) => state.openWindow);
  useEffect(() => {
    const updateGreeting = () => setGreeting(localGreeting());
    const timer = window.setInterval(updateGreeting, 60000);
    document.addEventListener('visibilitychange', updateGreeting);
    return () => {
      window.clearInterval(timer);
      document.removeEventListener('visibilitychange', updateGreeting);
    };
  }, []);
  const explore = (location) => {
    setActiveLocation(location);
    openWindow('finder');
  };

  return (
    <section id="welcome" aria-label="Welcome to Mahendra's portfolio">
      <div className="compact-intro">
        <p className="local-greeting">{greeting},</p>
        <h1><span className="intro-prefix">This is </span>Mahendra<span className="surname">Gandham<span className="name-period">.</span></span></h1>
        <p className="welcome-subtitle">Serious about software.<br />Curious about what's possible.</p>
        <div className="hero-actions">
          <button type="button" className="hero-primary" onClick={() => explore(locations.work)}>Discover my work <ArrowUpRight size={15} /></button>
          <button type="button" className="intro-about" onClick={() => explore(locations.about)}>About me <ArrowUpRight size={14} /></button>
        </div>
      </div>
      <div className="compact-projects">
      <article className="featured-project">
        <a className="featured-preview" href="https://scalewithmahi.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit ScaleWithMahi (opens in a new tab)">
          <span className="preview-address">scalewithmahi.com <ArrowUpRight size={12} /></span>
          <img className="featured-desktop" src="/images/scalewithmahi-desktop.jpg" alt="ScaleWithMahi desktop homepage with DSA, Java and system design learning paths" width="1360" height="900" decoding="async" />
          <img className="featured-mobile" src="/images/scalewithmahi-mobile.jpg" alt="ScaleWithMahi responsive mobile homepage" width="390" height="844" decoding="async" />
        </a>
        <div className="featured-details">
          <div><h2>ScaleWithMahi<span>MAIN PROJECT</span></h2><p>DSA. Java. System design. One place to grow.</p></div>
          <p className="project-users">100+ users</p>
          <a href="https://scalewithmahi.com/" target="_blank" rel="noopener noreferrer">Visit website <ArrowUpRight size={14} /></a>
        </div>
      </article>
      <div className="project-widgets">
        {previews.map((preview) => {
          const project = locations.work.children.find((item) => item.name === preview.name);
          if (!project) return null;
          return (
            <button
              key={project.id}
              type="button"
              className="project-widget"
              aria-label={`Explore ${project.name}`}
              onClick={() => {
                setActiveLocation(project);
                openWindow('finder');
              }}
            >
              <span className="widget-photo">
                <img src={preview.image} alt={`Gameplay from ${project.name}`} decoding="async" draggable="false" />
                <span className="widget-badge"><Gamepad2 size={13} aria-hidden="true" /> Unity / C#</span>
              </span>
              <span className="widget-caption">
                <span><strong>{project.name}</strong><span className="widget-description">{preview.caption}</span></span>
                <ArrowUpRight className="widget-arrow" size={18} aria-hidden="true" />
              </span>
            </button>
          );
        })}
      </div>
      </div>
    </section>
  );
}
