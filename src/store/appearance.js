import { create } from 'zustand';

const storageKey = 'portfolio-appearance';
const validTheme = (value) => ['light', 'dark', 'system'].includes(value) ? value : 'system';
const readTheme = () => {
  try {
    return validTheme(localStorage.getItem(storageKey));
  } catch {
    return 'system';
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
      localStorage.setItem(storageKey, theme);
    } catch {
      // The selection still works when browser storage is unavailable.
    }
  },
}));

export function initializeAppearance() {
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  const syncSystem = () => applyTheme(useAppearanceStore.getState().theme);
  const syncStorage = (event) => {
    if (event.key !== storageKey && event.key !== null) return;
    const theme = readTheme();
    useAppearanceStore.setState({ theme });
    applyTheme(theme);
  };
  syncSystem();
  media.addEventListener('change', syncSystem);
  window.addEventListener('storage', syncStorage);
  return () => {
    media.removeEventListener('change', syncSystem);
    window.removeEventListener('storage', syncStorage);
  };
}

export default useAppearanceStore;
