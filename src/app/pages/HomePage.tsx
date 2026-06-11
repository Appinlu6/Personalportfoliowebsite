import image_20260523_1315046 from '@/imports/20260523-1315046.png';
import { motion, useReducedMotion } from 'framer-motion';
import { useIntro } from '../context/IntroContext';
import { useHomeContentReady } from '../hooks/useHomeContentReady';
import { introRevealTransition } from '../lib/motion';
import { PageContainer } from '../components/PageContainer';
import { ProfileSection } from '../components/ProfileSection';
import { ProjectGrid } from '../components/ProjectGrid';

export function HomePage() {
  const { phase, isHome } = useIntro();
  const reducedMotion = useReducedMotion();

  useHomeContentReady(image_20260523_1315046);

  const concealDuringIntro = isHome && phase === 'playing';
  const animateReveal = isHome && phase === 'exiting';

  const revealProps = (index: number) => ({
    key: animateReveal ? `reveal-${index}` : `idle-${index}`,
    initial: animateReveal ? { opacity: 0, y: 16 } : false,
    animate: concealDuringIntro ? { opacity: 0, y: 16 } : { opacity: 1, y: 0 },
    transition: animateReveal
      ? introRevealTransition(index, !!reducedMotion)
      : { duration: 0 },
  });

  return (
    <section className="page-shell bg-white pt-24 pb-8" aria-hidden={concealDuringIntro}>
      <PageContainer className="pt-4 pb-10">
        <ProfileSection portraitReveal={revealProps(0)} />

        <motion.div {...revealProps(3)} style={{ marginTop: '48px' }}>
          <div className="mb-8 border-b pb-3" style={{ borderColor: '#EEEEEE' }}>
            <h2
              className="font-['Work_Sans'] font-semibold text-left tracking-[-0.01em]"
              style={{ fontSize: '1.5rem', color: '#111111' }}
            >
              Projects
            </h2>
          </div>
          <ProjectGrid columns={3} animated={false} />
        </motion.div>
      </PageContainer>
    </section>
  );
}
