import { create } from 'zustand';

const storageKey = 'portfolio-appearance';
const mobileMedia = window.matchMedia('(max-width: 639px)');
const activeKey = () => mobileMedia.matches ? 'portfolio-mobile-appearance' : storageKey;
const validTheme = (value) => ['light', 'dark', 'system'].includes(value) ? value : 'system';
const readTheme = () => {
  try {
    return validTheme(localStorage.getItem(activeKey()) || (mobileMedia.matches ? 'light' : 'system'));
  } catch {
    return mobileMedia.matches ? 'light' : 'system';
  }
};

const applyTheme = (theme) => {
  const dark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
};

const useAppearanceStore = create((set) => ({
  theme: readTheme(),
  setTheme: (value) => {
    const theme = validTheme(value);
    applyTheme(theme);
    set({ theme });
    try {
      localStorage.setItem(activeKey(), theme);
    } catch {
      // The selection still works when browser storage is unavailable.
    }
  },
}));

export function initializeAppearance() {
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  const syncSystem = () => applyTheme(useAppearanceStore.getState().theme);
  const syncStorage = (event) => {
    if (event.key !== activeKey() && event.key !== null) return;
    const theme = readTheme();
    useAppearanceStore.setState({ theme });
    applyTheme(theme);
  };
  const syncDevice = () => {
    const theme = readTheme();
    useAppearanceStore.setState({ theme });
    applyTheme(theme);
  };
  syncSystem();
  media.addEventListener('change', syncSystem);
  mobileMedia.addEventListener('change', syncDevice);
  window.addEventListener('storage', syncStorage);
  return () => {
    media.removeEventListener('change', syncSystem);
    mobileMedia.removeEventListener('change', syncDevice);
    window.removeEventListener('storage', syncStorage);
  };
}

export default useAppearanceStore;
