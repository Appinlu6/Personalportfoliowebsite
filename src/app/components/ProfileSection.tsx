import { useEffect, useState, type ComponentProps, type ReactNode } from 'react';
import image_20260523_1315046 from '@/imports/20260523-1315046.png';
import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
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
  const { isCN } = useLanguage();
  const reducedMotion = useReducedMotion();
  const [ready, setReady] = useState(false);

  const concealed = isHome && phase === 'playing';

  useEffect(() => {
    if (!concealed) setReady(true);
  }, [concealed]);

  const animateState = concealed ? 'hidden' : ready ? 'visible' : 'hidden';
  const skipMotion = !!reducedMotion;

  const interests = isCN
    ? [
        '情感与信息支持的自适应编排',
        '跨文化求医',
        '数字健康管理',
        '智能硬件与运动康复',
        '医院与企业协同研究',
        '通过设计开展研究',
      ]
    : [
        'Adaptive Emotional and Informational Support',
        'Cross-Cultural Care-Seeking',
        'Digital Health Management',
        'Smart Hardware for Sports Rehabilitation',
        'Hospital and Industry Collaboration',
        'Research through Design',
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
              {isCN ? '陆正平 (Arvin)' : 'Lu Zhengping (Arvin)'}
            </h1>
            <p
              className="font-['Work_Sans'] font-semibold"
              style={{ color: PRIMARY, fontSize: '14px', lineHeight: 1.45, marginBottom: '12px' }}
            >
              {isCN ? '跨学科 AI 研究者与产品设计师' : 'Interdisciplinary AI Researcher & Product Designer'}
            </p>
            <BlockBody>
              {isCN
                ? '九年的 UX、医疗科技、AI 与创业实践，构成了我研究 AI 如何支持人的健康与福祉的跨学科视角。'
                : 'Nine years across UX, healthcare technology, AI, and entrepreneurship shape my interdisciplinary research on how AI can support human wellbeing.'}
            </BlockBody>
          </ProfileBlock>

          <Divider className="mt-5" />

          {/* Row 1: Block 1 + Block 2 */}
          <ProfileRow className="mt-[30px]">
            <ProfileBlock>
              <InfoBlock
                title={isCN ? '9 年经验' : '9 Years'}
                subtitle={isCN ? '医疗 × AI × 产品设计' : 'Healthcare × AI × Product Design'}
                body={isCN ? '从医疗创新到以人为中心的 AI，持续设计连接技术与人的系统。' : 'From healthcare innovation to human-centered AI, designing systems that connect technology and people.'}
              />
            </ProfileBlock>
            <ProfileBlock>
              <InfoBlock
                title={isCN ? '40+ 项目' : '40+ Projects'}
                subtitle={isCN ? '23 家医院 · 5 个政府部门' : '23 Hospitals · 5 Government Departments'}
                body={isCN ? '主导中国多地大型医疗、公共服务与智慧城市项目。' : 'Led large-scale healthcare, public-service, and smart-city initiatives across China.'}
              />
            </ProfileBlock>
          </ProfileRow>

          <Divider className="mt-[30px]" />

          {/* Row 2: Block 3 + Block 4 */}
          <ProfileRow className="mt-[10px]">
            <ProfileBlock>
              <InfoBlock
                title={isCN ? '联合创始人' : 'Co-founder'}
                subtitle={isCN ? '熠安可创 × 健康科技' : "Yi'an Kechuang × Health Technology"}
                body={isCN
                  ? '与医院及产业伙伴合作，主导健康管理、智能硬件与运动康复方向的 AI 产品化。'
                  : 'Leading AI product development across health management, smart hardware, and sports rehabilitation with hospital and industry partners.'}
              />
            </ProfileBlock>
            <ProfileBlock>
              <InfoBlock
                title={isCN ? 'A+ 研究' : 'A+ Research'}
                subtitle="Bauhinia-Mind"
                body={isCN ? '一个具备记忆能力的 AI 伙伴，探索数字健康、照护与人机关系。' : 'A memory-enabled AI companion exploring digital health, care, and human-AI relationships.'}
              />
            </ProfileBlock>
          </ProfileRow>

          <Divider className="mt-[30px]" />

          {/* Row 3: Block 5 + Block 6 */}
          <ProfileRow className="mt-[10px]">
            <ProfileBlock>
              <BlockTitle>{isCN ? '成果认可' : 'Recognition'}</BlockTitle>
              <BlockSubtitle>{isCN ? '医疗科技创新' : 'Innovation in Healthcare Technology'}</BlockSubtitle>
              <BlockBody>
                {isCN
                  ? '在产品创新、业务影响与公共健康贡献方面获得认可。'
                  : 'Recognized through product innovation, business impact, and public-health contributions.'}
              </BlockBody>
              <div className="mt-4">
                <BlockSubtitle>{isCN ? '奖项' : 'Awards'}</BlockSubtitle>
              </div>
              <BlockList>
                {(isCN
                  ? [
                      '2 项业务突破奖',
                      '2 项产品创新奖',
                      '1 项抗疫贡献奖',
                    ]
                  : [
                      '2 Business Breakthrough Awards',
                      '2 Product Innovation Awards',
                      '1 Anti-Epidemic Contribution Award',
                    ]).map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-foreground">·</span>
                    <span className="min-w-0">{item}</span>
                  </li>
                ))}
              </BlockList>
            </ProfileBlock>
            <ProfileBlock>
              <BlockTitle>{isCN ? '研究方向' : 'Research Focus'}</BlockTitle>
              <BlockSubtitle>{isCN ? '医疗 AI、健康管理与运动康复' : 'Healthcare AI, Health Management, and Rehabilitation'}</BlockSubtitle>
              <BlockList>
                {interests.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-foreground">·</span>
                    <span className="min-w-0">{item}</span>
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
