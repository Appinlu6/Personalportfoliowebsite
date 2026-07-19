import { Outlet, useLocation } from 'react-router';
import { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Mail, Phone, Linkedin } from 'lucide-react';
import { IntroProvider, useIntro } from '../context/IntroContext';
import { LanguageProvider, useLanguage } from '../context/LanguageContext';
import { introRevealTransition } from '../lib/motion';
import { CinematicIntro } from './CinematicIntro';
import { Navigation } from './Navigation';

function RootLayout() {
  const { pathname } = useLocation();
  const { phase, isHome } = useIntro();
  const { isCN } = useLanguage();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const shouldLock = isHome && phase === 'playing';
    document.body.style.overflow = shouldLock ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isHome, phase]);

  const concealDuringIntro = isHome && phase === 'playing';
  const animateNavReveal = isHome && phase === 'exiting';

  return (
    <div className="min-h-screen flex flex-col">
      <motion.div
        key={animateNavReveal ? 'nav-reveal' : 'nav-idle'}
        initial={animateNavReveal ? { opacity: 0, y: 16 } : false}
        animate={concealDuringIntro ? { opacity: 0, y: 16 } : { opacity: 1, y: 0 }}
        transition={
          animateNavReveal
            ? introRevealTransition(2, !!reducedMotion)
            : { duration: 0 }
        }
        aria-hidden={concealDuringIntro}
      >
        <Navigation />
      </motion.div>

      <main className="flex-1">
        <Outlet />
      </main>

      <div className="border-t border-border">
        <div className="page-container py-16">
          <div className="flex flex-wrap items-start justify-between gap-x-16 gap-y-8 lg:gap-x-24">
            <div className="flex min-w-0 flex-1 flex-wrap items-start justify-between gap-x-14 gap-y-6 sm:gap-x-16 lg:gap-x-24 xl:max-w-[72%]">
              <div className="flex min-w-[10rem] flex-col gap-1">
                <span className="font-semibold text-foreground tracking-wide uppercase font-['Work_Sans']" style={{ fontSize: '18px' }}>{isCN ? '邮箱' : 'Email'}</span>
                <div className="flex items-center gap-2 text-muted-foreground" style={{ fontSize: '16px' }}>
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <a href="mailto:arvin.lu.zp@gmail.com" className="break-all hover:text-foreground transition-colors sm:break-normal">arvin.lu.zp@gmail.com</a>
                </div>
              </div>
              <div className="flex min-w-[10rem] flex-col gap-1">
                <span className="font-semibold text-foreground tracking-wide uppercase font-['Work_Sans']" style={{ fontSize: '18px' }}>{isCN ? '电话' : 'Phone'}</span>
                <div className="flex items-center gap-2 text-muted-foreground" style={{ fontSize: '16px' }}>
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <a href="tel:+85265881993" className="whitespace-nowrap hover:text-foreground transition-colors">+852 6588 1993</a>
                </div>
              </div>
              <div className="flex min-w-[10rem] flex-col gap-1">
                <span className="font-semibold text-foreground tracking-wide uppercase font-['Work_Sans']" style={{ fontSize: '18px' }}>{isCN ? '关注我' : 'Follow Me'}</span>
                <div className="flex items-center gap-2 text-muted-foreground" style={{ fontSize: '16px' }}>
                  <Linkedin className="w-4 h-4 flex-shrink-0" />
                  <a href="https://www.linkedin.com/in/zhengping-lu-a03427381?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="whitespace-nowrap hover:text-foreground transition-colors">LinkedIn</a>
                </div>
              </div>
            </div>
            <div className="ml-auto flex flex-shrink-0 flex-col items-end gap-1 text-muted-foreground" style={{ fontSize: '16px' }}>
              <span className="whitespace-nowrap">© 2026 Lu Zhengping.</span>
              <span className="whitespace-nowrap">{isCN ? '用心设计。' : 'Designed with care.'}</span>
            </div>
          </div>
        </div>
      </div>

      <CinematicIntro />
    </div>
  );
}

export function Root() {
  return (
    <LanguageProvider>
      <IntroProvider>
        <RootLayout />
      </IntroProvider>
    </LanguageProvider>
  );
}
