import { useCallback, useEffect, useRef } from 'react';
import { animate, motion, useMotionValue, useReducedMotion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { EASE_OUT_EXPO, INTRO_BG, INTRO_TEXT } from '../lib/motion';
import { useIntro } from '../context/IntroContext';

const TIMELINE = {
  nameStart: 1000,
  nameDuration: 1000,
  line2Start: 2000,
  line2Duration: 1000,
  line3Start: 3000,
  line3Duration: 1000,
  holdStart: 4000,
  holdDuration: 1500,
  exitStart: 5500,
  exitDuration: 1000,
  completeAt: 6500,
} as const;

const SKIP_EXIT_DURATION = 500;

export function CinematicIntro() {
  const { isCN } = useLanguage();
  const reducedMotion = useReducedMotion();
  const { shouldPlayIntro, completeIntro, startExit, isRevealing, isHomeReady } = useIntro();

  const timersRef = useRef<number[]>([]);
  const skippedRef = useRef(false);
  const exitStartedRef = useRef(false);
  const animationReadyRef = useRef(false);
  const exitDurationRef = useRef(TIMELINE.exitDuration);

  const overlayOpacity = useMotionValue(1);

  const clearTimers = () => {
    timersRef.current.forEach((id) => window.clearTimeout(id));
    timersRef.current = [];
  };

  const schedule = (fn: () => void, delay: number) => {
    const id = window.setTimeout(fn, delay);
    timersRef.current.push(id);
  };

  const finishIntro = useCallback(() => {
    if (skippedRef.current) return;
    skippedRef.current = true;
    clearTimers();
    completeIntro();
  }, [completeIntro]);

  const runExit = useCallback(() => {
    if (exitStartedRef.current) return;
    exitStartedRef.current = true;
    startExit();
    void animate(overlayOpacity, 0, {
      duration: exitDurationRef.current / 1000,
      ease: EASE_OUT_EXPO,
    });
    schedule(() => finishIntro(), exitDurationRef.current);
  }, [startExit, overlayOpacity, finishIntro]);

  const tryRunExit = useCallback(() => {
    if (!animationReadyRef.current || !isHomeReady || exitStartedRef.current) return;
    runExit();
  }, [isHomeReady, runExit]);

  const handleSkip = () => {
    if (skippedRef.current || exitStartedRef.current) return;
    clearTimers();
    animationReadyRef.current = true;
    exitDurationRef.current = SKIP_EXIT_DURATION;
    tryRunExit();
  };

  useEffect(() => {
    if (!shouldPlayIntro || reducedMotion) return undefined;

    skippedRef.current = false;
    exitStartedRef.current = false;
    animationReadyRef.current = false;
    exitDurationRef.current = TIMELINE.exitDuration;
    clearTimers();
    overlayOpacity.set(1);

    schedule(() => {
      animationReadyRef.current = true;
      tryRunExit();
    }, TIMELINE.exitStart);

    return clearTimers;
  }, [shouldPlayIntro, reducedMotion, overlayOpacity, tryRunExit, finishIntro]);

  useEffect(() => {
    tryRunExit();
  }, [isHomeReady, tryRunExit]);

  if (!shouldPlayIntro || reducedMotion) return null;

  const isExiting = isRevealing;
  const exitSeconds = exitDurationRef.current / 1000;

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden cursor-pointer"
      role="presentation"
      aria-hidden="true"
      style={{
        backgroundColor: INTRO_BG,
        opacity: overlayOpacity,
      }}
      onClick={handleSkip}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          handleSkip();
        }
      }}
      tabIndex={-1}
    >
      <motion.div
        className="flex flex-col items-center px-6 text-center select-none pointer-events-none"
        initial={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        animate={
          isExiting
            ? { opacity: 0, scale: 1.01, filter: 'blur(12px)' }
            : { opacity: 1, scale: 1, filter: 'blur(0px)' }
        }
        transition={{
          duration: exitSeconds,
          ease: EASE_OUT_EXPO,
        }}
      >
        <motion.div
          animate={
            isExiting
              ? { scale: 1 }
              : { scale: [1, 1, 1.006, 1.006] }
          }
          transition={
            isExiting
              ? { duration: 0 }
              : {
                  delay: TIMELINE.holdStart / 1000,
                  duration: TIMELINE.holdDuration / 1000,
                  times: [0, 0.2, 1],
                  ease: 'easeInOut',
                }
          }
          className="flex flex-col items-center"
        >
          <motion.h1
            className="font-['Work_Sans'] font-light tracking-[0.03em]"
            style={{
              color: INTRO_TEXT,
              fontSize: 'clamp(2rem, 5.5vw, 3.25rem)',
              lineHeight: 1.15,
            }}
            initial={{ opacity: 0, y: 10, filter: 'blur(20px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{
              delay: TIMELINE.nameStart / 1000,
              duration: TIMELINE.nameDuration / 1000,
              ease: EASE_OUT_EXPO,
            }}
          >
            {isCN ? '陆正平' : 'Lu Zhengping'}
          </motion.h1>

          <motion.p
            className="mt-7 font-['Work_Sans'] font-light uppercase"
            style={{
              color: INTRO_TEXT,
              fontSize: 'clamp(0.78rem, 2vw, 0.95rem)',
              letterSpacing: '0.18em',
              opacity: 0.82,
            }}
            initial={{ opacity: 0, y: 8, filter: 'blur(16px)' }}
            animate={{ opacity: 0.82, y: 0, filter: 'blur(0px)' }}
            transition={{
              delay: TIMELINE.line2Start / 1000,
              duration: TIMELINE.line2Duration / 1000,
              ease: EASE_OUT_EXPO,
            }}
          >
            {isCN ? '连接 AI 与设计' : 'Bridging AI and Design'}
          </motion.p>

          <motion.p
            className="mt-4 font-['Work_Sans'] font-light tracking-[0.02em]"
            style={{
              color: INTRO_TEXT,
              fontSize: 'clamp(0.95rem, 2.4vw, 1.125rem)',
              opacity: 0.62,
            }}
            initial={{ opacity: 0, y: 6, filter: 'blur(12px)' }}
            animate={{ opacity: 0.62, y: 0, filter: 'blur(0px)' }}
            transition={{
              delay: TIMELINE.line3Start / 1000,
              duration: TIMELINE.line3Duration / 1000,
              ease: EASE_OUT_EXPO,
            }}
          >
            {isCN ? '为了人的智慧。' : 'for human intelligence.'}
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
