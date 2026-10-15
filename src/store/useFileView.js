import { useEffect, useState } from 'react';
export function useFileView() {
  const [choice, setChoice] = useState(null);
  const [mobile, setMobile] = useState(() => matchMedia('(max-width: 639px)').matches);
  useEffect(() => {
    const media = matchMedia('(max-width: 639px)');
    const update = () => setMobile(media.matches);
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);
  return [choice || (mobile ? 'list' : 'grid'), setChoice];
}

