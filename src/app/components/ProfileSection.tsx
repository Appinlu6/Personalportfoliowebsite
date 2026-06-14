import { useEffect, useState, type ComponentProps, type ReactNode } from 'react';
import image_20260523_1315046 from '@/imports/20260523-1315046.png';
import { motion, useReducedMotion } from 'framer-motion';
import { EASE_OUT_EXPO } from '../lib/motion';
import { useIntro } from '../context/IntroContext';

const PRIMARY = '#111111';
const SECONDARY = '#666666';
const DIVIDER = '#EEEEEE';

const blockReveal = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE_OUT_EXPO },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

type ProfileSectionProps = {
  portraitReveal: ComponentProps<typeof motion.div>;
};

function Divider({ className = '' }: { className?: string }) {
  return <div className={`border-t ${className}`.trim()} style={{ borderColor: DIVIDER }} />;
}

function ProfileBlock({ children }: { children: ReactNode }) {
  return (
    <motion.div variants={blockReveal} className="min-w-0">
      {children}
    </motion.div>
  );
}

function ProfileRow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`grid grid-cols-1 items-start gap-5 md:grid-cols-2 md:gap-x-8 ${className}`.trim()}>
      {children}
    </div>
  );
}

function BlockTitle({ children }: { children: ReactNode }) {
  return (
    <h3
      className="font-['Work_Sans'] font-semibold"
      style={{ color: PRIMARY, fontSize: '19px', lineHeight: 1.45, marginBottom: '6px' }}
    >
      {children}
    </h3>
  );
}

function BlockSubtitle({ children }: { children: ReactNode }) {
  return (
    <p
      className="font-['Work_Sans'] font-semibold"
      style={{ color: PRIMARY, fontSize: '12px', lineHeight: 1.45, marginBottom: '8px' }}
    >
      {children}
    </p>
  );
}

function BlockBody({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p className={`font-['Work_Sans'] font-normal text-sm text-muted-foreground leading-relaxed ${className}`.trim()}>
      {children}
    </p>
  );
}

function BlockList({ children }: { children: ReactNode }) {
  return (
    <ul className="space-y-1 font-['Work_Sans'] font-normal text-sm text-muted-foreground leading-relaxed">
      {children}
    </ul>
  );
}

function InfoBlock({
  title,
  subtitle,
  body,
}: {
  title: string;
  subtitle: string;
  body: string;
}) {
  return (
    <>
      <BlockTitle>{title}</BlockTitle>
      <BlockSubtitle>{subtitle}</BlockSubtitle>
      <BlockBody>{body}</BlockBody>
    </>
  );
}

export function ProfileSection({ portraitReveal }: ProfileSectionProps) {
  const { phase, isHome } = useIntro();
  const reducedMotion = useReducedMotion();
  const [ready, setReady] = useState(false);

  const concealed = isHome && phase === 'playing';

  useEffect(() => {
    if (!concealed) setReady(true);
  }, [concealed]);

  const animateState = concealed ? 'hidden' : ready ? 'visible' : 'hidden';
  const skipMotion = !!reducedMotion;

  const interests = [
    'Human–AI Interaction',
    'AI Companionship',
    'Memory Systems',
    'Digital Health',
    'Computational Humanities',
    'Human-Centered AI',
  ];

  return (
    <div className="mx-auto mb-8 flex max-w-[1200px] flex-col items-start gap-8 lg:flex-row">
      <motion.div className="flex-shrink-0 self-start" {...portraitReveal}>
        <img
          src={image_20260523_1315046}
          alt="Lu Zhengping (Arvin)"
          className="h-[19rem] w-[19rem] rounded-2xl object-cover object-top"
        />
      </motion.div>

      <div className="min-w-0 flex-1">
        <motion.div
          className="w-full"
          initial={skipMotion ? false : 'hidden'}
          animate={skipMotion ? undefined : animateState}
          variants={skipMotion ? undefined : staggerContainer}
        >
          {/* Hero */}
          <ProfileBlock>
            <h1
              className="font-['Work_Sans'] font-semibold tracking-[-0.02em]"
              style={{ color: PRIMARY, fontSize: '32px', lineHeight: 1.2, marginBottom: '16px' }}
            >
              Lu Zhengping (Arvin)
            </h1>
            <p
              className="font-['Work_Sans'] font-semibold"
              style={{ color: PRIMARY, fontSize: '14px', lineHeight: 1.45, marginBottom: '12px' }}
            >
              AI Product Designer
            </p>
            <BlockBody>
              Product practitioner with 9 years of experience across healthcare technology, AI, and
              entrepreneurship, exploring how design can create meaningful connections between
              technology and human wellbeing.
            </BlockBody>
          </ProfileBlock>

          <Divider className="mt-5" />

          {/* Row 1: Block 1 + Block 2 */}
          <ProfileRow className="mt-[30px]">
            <ProfileBlock>
              <InfoBlock
                title="9 Years"
                subtitle="Healthcare × AI × Product Design"
                body="From healthcare innovation to human-centered AI, designing systems that connect technology and people."
              />
            </ProfileBlock>
            <ProfileBlock>
              <InfoBlock
                title="40+ Projects"
                subtitle="23 Hospitals · 5 Government Departments"
                body="Led large-scale healthcare, public-service, and smart-city initiatives across China."
              />
            </ProfileBlock>
          </ProfileRow>

          <Divider className="mt-[30px]" />

          {/* Row 2: Block 3 + Block 4 */}
          <ProfileRow className="mt-[10px]">
            <ProfileBlock>
              <InfoBlock
                title="Founder"
                subtitle="0 → 1 Consumer Brand"
                body="Built 60+ products and grew a community of 10,000+ users."
              />
            </ProfileBlock>
            <ProfileBlock>
              <InfoBlock
                title="A+ Research"
                subtitle="Bauhinia-Mind"
                body="A memory-enabled AI companion exploring digital health, care, and human-AI relationships."
              />
            </ProfileBlock>
          </ProfileRow>

          <Divider className="mt-[30px]" />

          {/* Row 3: Block 5 + Block 6 */}
          <ProfileRow className="mt-[10px]">
            <ProfileBlock>
              <BlockTitle>Recognition</BlockTitle>
              <BlockSubtitle>Innovation in Healthcare Technology</BlockSubtitle>
              <BlockBody>
                Recognized through product innovation, business impact, and public-health
                contributions.
              </BlockBody>
              <BlockSubtitle>Awards</BlockSubtitle>
              <BlockList>
                {[
                  '2 Business Breakthrough Awards',
                  '2 Product Innovation Awards',
                  '1 Anti-Epidemic Contribution Award',
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-foreground">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </BlockList>
            </ProfileBlock>
            <ProfileBlock>
              <BlockTitle>Research Focus</BlockTitle>
              <BlockSubtitle>Current Interests</BlockSubtitle>
              <BlockList>
                {interests.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-foreground">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </BlockList>
            </ProfileBlock>
          </ProfileRow>
        </motion.div>
      </div>
    </div>
  );
}
