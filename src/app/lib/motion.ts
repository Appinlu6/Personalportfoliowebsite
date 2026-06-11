export const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const INTRO_SESSION_KEY = 'portfolio-cinematic-intro-seen';

export const INTRO_BG = '#FFFFFF';
export const INTRO_TEXT = '#111111';

export function introRevealTransition(index: number, reducedMotion = false) {
  return {
    duration: reducedMotion ? 0.01 : 0.8,
    delay: reducedMotion ? 0 : index * 0.1,
    ease: EASE_OUT_EXPO,
  };
}

export function hasSeenIntro(): boolean {
  try {
    return sessionStorage.getItem(INTRO_SESSION_KEY) === 'true';
  } catch {
    return false;
  }
}

export function markIntroSeen(): void {
  try {
    sessionStorage.setItem(INTRO_SESSION_KEY, 'true');
  } catch {
    // sessionStorage may be unavailable in private browsing edge cases
  }
}
