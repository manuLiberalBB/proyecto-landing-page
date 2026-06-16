import { useEffect } from 'react';

export function usePageMeta(title, { noindex = false } = {}) {
  useEffect(() => {
    document.title = title;

    let robotsMeta = document.querySelector('meta[name="robots"]');

    if (noindex) {
      if (!robotsMeta) {
        robotsMeta = document.createElement('meta');
        robotsMeta.name = 'robots';
        document.head.appendChild(robotsMeta);
      }
      robotsMeta.content = 'noindex, nofollow';
    }

    return () => {
      if (noindex && robotsMeta) {
        robotsMeta.remove();
      }
    };
  }, [title, noindex]);
}
