import { useEffect } from 'react';
import { useIntro } from '../context/IntroContext';
import { projects } from '../data/projects';

function preloadImage(src: string): Promise<void> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => resolve();
    img.src = src;
  });
}

export function useHomeContentReady(heroImageSrc: string) {
  const { isHome, phase, markHomeReady } = useIntro();

  useEffect(() => {
    if (!isHome) return;

    if (phase === 'complete') {
      markHomeReady();
      return;
    }

    let cancelled = false;

    const loadContent = async () => {
      const fontReady = document.fonts?.ready ?? Promise.resolve();
      const imageSources = [heroImageSrc, ...projects.map((project) => project.image)];

      await Promise.all([fontReady, ...imageSources.map(preloadImage)]);

      if (!cancelled) {
        markHomeReady();
      }
    };

    void loadContent();

    return () => {
      cancelled = true;
    };
  }, [isHome, phase, heroImageSrc, markHomeReady]);
}
