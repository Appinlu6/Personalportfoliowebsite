import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { useLocation } from 'react-router';
import { useReducedMotion } from 'framer-motion';
import { hasSeenIntro, markIntroSeen } from '../lib/motion';

type IntroPhase = 'idle' | 'playing' | 'exiting' | 'complete';

type IntroContextValue = {
  phase: IntroPhase;
  isHome: boolean;
  shouldPlayIntro: boolean;
  isRevealing: boolean;
  revealReady: boolean;
  isHomeReady: boolean;
  markHomeReady: () => void;
  skipIntro: () => void;
  completeIntro: () => void;
  startExit: () => void;
};

const IntroContext = createContext<IntroContextValue | null>(null);

export function IntroProvider({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const reducedMotion = useReducedMotion();
  const isHome = pathname === '/';

  const [phase, setPhase] = useState<IntroPhase>(() => {
    if (hasSeenIntro() || reducedMotion) return 'complete';
    return 'idle';
  });
  const [isHomeReady, setIsHomeReady] = useState(() => hasSeenIntro() || !!reducedMotion);

  useEffect(() => {
    if (!isHome) return;

    if (hasSeenIntro() || reducedMotion) {
      setPhase('complete');
      setIsHomeReady(true);
      return;
    }

    setIsHomeReady(false);
    setPhase((current) => (current === 'complete' ? 'complete' : 'playing'));
  }, [isHome, reducedMotion]);

  const markHomeReady = useCallback(() => {
    setIsHomeReady(true);
  }, []);

  const startExit = useCallback(() => {
    setPhase((current) => (current === 'playing' ? 'exiting' : current));
  }, []);

  const completeIntro = useCallback(() => {
    markIntroSeen();
    setPhase('complete');
  }, []);

  const skipIntro = useCallback(() => {
    if (phase === 'playing') {
      setPhase('exiting');
    }
  }, [phase]);

  const value = useMemo<IntroContextValue>(
    () => ({
      phase,
      isHome,
      shouldPlayIntro: isHome && (phase === 'playing' || phase === 'exiting'),
      isRevealing: phase === 'exiting',
      revealReady: phase === 'complete' || phase === 'exiting',
      isHomeReady,
      markHomeReady,
      skipIntro,
      completeIntro,
      startExit,
    }),
    [phase, isHome, isHomeReady, markHomeReady, skipIntro, completeIntro, startExit],
  );

  return <IntroContext.Provider value={value}>{children}</IntroContext.Provider>;
}

export function useIntro() {
  const context = useContext(IntroContext);
  if (!context) {
    throw new Error('useIntro must be used within IntroProvider');
  }
  return context;
}
