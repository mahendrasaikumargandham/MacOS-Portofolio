import { lazy, Suspense, useState } from 'react';
import { Navbar, Dock, Welcome, BootScreen, Home } from './components';
import useWindowStore from './store/window';

const apps = {
  terminal: lazy(() => import('./windows/Terminal')),
  safari: lazy(() => import('./windows/Safari')),
  resume: lazy(() => import('./windows/Resume')),
  finder: lazy(() => import('./windows/Finder')),
  txtfile: lazy(() => import('./windows/Text')),
  imgfile: lazy(() => import('./windows/Image')),
  contact: lazy(() => import('./windows/Contact')),
  photos: lazy(() => import('./windows/Photos')),
};

const DesktopWindows = () => {
  const windows = useWindowStore((state) => state.windows);
  return Object.entries(apps).map(([key, app]) => {
    const AppWindow = app;
    return windows[key].isOpen && (
      <Suspense key={key} fallback={<div className="app-loading" role="status">Opening app…</div>}>
        <AppWindow />
      </Suspense>
    );
  });
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <main className="desktop">
      {isLoading && <BootScreen onComplete={() => setIsLoading(false)} />}
      <div className="desktop-content" data-ready={!isLoading} inert={isLoading}>
        <Navbar />
        <Welcome />
        <Home />
        <DesktopWindows />
        <Dock />
      </div>
    </main>
  );
}
