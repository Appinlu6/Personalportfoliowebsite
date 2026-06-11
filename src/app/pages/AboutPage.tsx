import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import bytedanceLogo from '@/assets/logos/bytedance.png';
import tencentLogo from '@/assets/logos/tencent.png';
import polyuLogo from '@/assets/logos/polyu.png';
import cuzLogo from '@/assets/logos/cuz.png';
import { PageContainer } from '../components/PageContainer';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

function LogoPlaceholder() {
  return (
    <div
      className="h-[60px] w-[60px] flex-shrink-0 rounded-xl bg-white border border-border"
      aria-hidden
    />
  );
}

function CompanyLogo({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className="h-[60px] w-[60px] flex-shrink-0 rounded-xl object-cover"
    />
  );
}

function ResumeEntry({
  date,
  logoSrc,
  logoAlt,
  children,
}: {
  date: string;
  logoSrc?: string;
  logoAlt?: string;
  children: ReactNode;
}) {
  return (
    <motion.div
      className="grid grid-cols-[10rem_60px_1fr] items-start gap-x-6"
      variants={fadeUp}
      transition={{ duration: 0.42, ease: 'easeOut' }}
    >
      <span
        className="block pt-0.5 text-right text-base text-muted-foreground"
        style={{ fontFamily: "'Avenir', 'Nunito', sans-serif", fontWeight: 300 }}
      >
        {date}
      </span>
      {logoSrc ? (
        <CompanyLogo src={logoSrc} alt={logoAlt ?? ''} />
      ) : (
        <LogoPlaceholder />
      )}
      <div>{children}</div>
    </motion.div>
  );
}

const skills = [
  'User Research',
  'Usability Testing',
  'Service Design',
  'Design Systems',
  'Figma / Prototyping',
  'Data Analysis',
  'AI/ML Design',
  'Accessibility',
];

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

const skillStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.06,
    },
  },
};

export function AboutPage() {
  return (
    <section className="page-shell py-32">
      <PageContainer className="pt-8">
        <motion.h1
          className="mb-20 font-semibold font-['Work_Sans']"
          style={{ fontSize: '32px' }}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.42, ease: 'easeOut' }}
        >
          Resume
        </motion.h1>

        {/* Work Experience */}
        <motion.div
          className="flex gap-16 mb-20 pb-20 border-b border-border"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={stagger}
        >
          <motion.div className="w-48 flex-shrink-0" variants={fadeUp} transition={{ duration: 0.42, ease: 'easeOut' }}>
            <h2 className="font-semibold font-['Work_Sans']" style={{ fontSize: '28px' }}>Work Experience</h2>
          </motion.div>
          <div className="flex-1 space-y-10">
            <ResumeEntry date="2022 – 2023" logoSrc={bytedanceLogo} logoAlt="ByteDance">
              <p style={{ fontSize: '1.1rem', fontFamily: "'Work Sans', sans-serif", fontWeight: 600 }} className="mb-0.5">ByteDance (Lark / Feishu)</p>
              <p className="text-base text-muted-foreground italic mb-2">Creative Designer, Global Marketing</p>
              <div className="space-y-2" style={{ fontFamily: "'Avenir', 'Nunito', sans-serif", fontWeight: 300 }}>
                <p className="text-base text-muted-foreground leading-relaxed">· Designed global marketing campaigns and creative assets for Lark's international launch across multiple regions.</p>
                <p className="text-base text-muted-foreground leading-relaxed">· Improved campaign and website design to lift user acquisition and conversion.</p>
              </div>
            </ResumeEntry>
            <ResumeEntry date="2018 – 2021" logoSrc={tencentLogo} logoAlt="Tencent">
              <p style={{ fontSize: '1.1rem', fontFamily: "'Work Sans', sans-serif", fontWeight: 600 }} className="mb-0.5">Tencent (Healthcare Department)</p>
              <p className="text-base text-muted-foreground italic mb-3">Senior Product Designer</p>
              <div className="space-y-2" style={{ fontFamily: "'Avenir', 'Nunito', sans-serif", fontWeight: 300 }}>
                <p className="text-base text-muted-foreground leading-relaxed">· Led UX/UI for healthcare SaaS products — smart hospitals, medical insurance, and public-health platforms.</p>
                <p className="text-base text-muted-foreground leading-relaxed">· Designed AI- and big-data-driven data visualization systems supporting medical decision-making.</p>
                <p className="text-base text-muted-foreground leading-relaxed">· Spearheaded "Tencent Micision," delivering 40+ projects across hospitals and government institutions.</p>
                <p className="text-base text-muted-foreground leading-relaxed">· Recognized with 5 company awards, including a Medical Anti-Epidemic Contribution Award.</p>
              </div>
            </ResumeEntry>
            <ResumeEntry date="Feb – Jul 2017" logoSrc={tencentLogo} logoAlt="Tencent">
              <p style={{ fontSize: '1.1rem', fontFamily: "'Work Sans', sans-serif", fontWeight: 600 }} className="mb-0.5">Tencent (Healthcare Department)</p>
              <p className="text-base text-muted-foreground italic mb-2">Visual Design Intern</p>
              <div className="space-y-2" style={{ fontFamily: "'Avenir', 'Nunito', sans-serif", fontWeight: 300 }}>
                <p className="text-base text-muted-foreground leading-relaxed">· Designed UI and visual systems for healthcare hardware products, including a glucose-monitoring app and the SpineCare adolescent spine-care device.</p>
              </div>
            </ResumeEntry>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          className="flex gap-16 mb-20 pb-20 border-b border-border"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={stagger}
        >
          <motion.div className="w-48 flex-shrink-0" variants={fadeUp} transition={{ duration: 0.42, ease: 'easeOut' }}>
            <h2 className="font-semibold font-['Work_Sans']" style={{ fontSize: '28px' }}>Education</h2>
          </motion.div>
          <div className="flex-1 space-y-10">
            <ResumeEntry date="2025 – 2026" logoSrc={polyuLogo} logoAlt="The Hong Kong Polytechnic University">
              <p style={{ fontSize: '1.1rem', fontFamily: "'Work Sans', sans-serif", fontWeight: 600 }} className="mb-1">The Hong Kong Polytechnic University</p>
              <p className="text-base text-muted-foreground mb-2">MSc in Generative AI & Humanities</p>
              <p className="text-base text-muted-foreground">Capstone: Bauhinia-Mind (Grade A+)</p>
            </ResumeEntry>
            <ResumeEntry date="2013 – 2017" logoSrc={cuzLogo} logoAlt="Communication University of Zhejiang">
              <p style={{ fontSize: '1.1rem', fontFamily: "'Work Sans', sans-serif", fontWeight: 600 }} className="mb-1">Communication University of Zhejiang</p>
              <p className="text-base text-muted-foreground mb-2">BA in Visual Communication Design</p>
            </ResumeEntry>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          className="flex gap-16 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={stagger}
        >
          <motion.div className="w-48 flex-shrink-0" variants={fadeUp} transition={{ duration: 0.42, ease: 'easeOut' }}>
            <h2 className="font-semibold font-['Work_Sans']" style={{ fontSize: '28px' }}>Skills & Expertise</h2>
          </motion.div>
          <div className="flex-1">
            <motion.div
              className="grid grid-cols-2 gap-3 ml-[12.5rem]"
              variants={skillStagger}
            >
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 rounded-lg bg-card border border-border text-base"
                  variants={fadeUp}
                  transition={{ duration: 0.32, ease: 'easeOut' }}
                  whileHover={{ y: -4 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </PageContainer>
    </section>
  );
}
