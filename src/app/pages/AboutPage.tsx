import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import bytedanceLogo from '@/assets/logos/bytedance.png';
import tencentLogo from '@/assets/logos/tencent.png';
import polyuLogo from '@/assets/logos/polyu.png';
import cuzLogo from '@/assets/logos/cuz.png';
import { useLanguage } from '../context/LanguageContext';
import { PageContainer } from '../components/PageContainer';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

function LogoPlaceholder({ className = '' }: { className?: string }) {
  return (
    <div
      className={`h-[60px] w-[60px] flex-shrink-0 rounded-xl bg-white border border-border ${className}`.trim()}
      aria-hidden
    />
  );
}

function CompanyLogo({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`h-[60px] w-[60px] flex-shrink-0 rounded-xl object-cover ${className}`.trim()}
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
  const logoOrder = 'order-1 sm:order-none';
  return (
    <motion.div
      className="grid grid-cols-[60px_1fr] items-start gap-x-4 gap-y-3 sm:grid-cols-[10rem_60px_1fr] sm:gap-x-6 sm:gap-y-0"
      variants={fadeUp}
      transition={{ duration: 0.42, ease: 'easeOut' }}
    >
      <span
        className="order-2 self-center text-sm text-muted-foreground sm:order-none sm:self-start sm:pt-0.5 sm:text-right sm:text-base"
        style={{ fontFamily: "'Avenir', 'Nunito', sans-serif", fontWeight: 300 }}
      >
        {date}
      </span>
      {logoSrc ? (
        <CompanyLogo src={logoSrc} alt={logoAlt ?? ''} className={logoOrder} />
      ) : (
        <LogoPlaceholder className={logoOrder} />
      )}
      <div className="order-3 col-span-2 sm:order-none sm:col-span-1">{children}</div>
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
  const { isCN } = useLanguage();

  const skillsLocalized = isCN
    ? [
        '用户研究',
        '可用性测试',
        '服务设计',
        '设计系统',
        'Figma / 原型',
        '数据分析',
        'AI/ML 设计',
        '无障碍设计',
      ]
    : skills;

  return (
    <section className="page-shell pt-28 pb-20 md:py-32">
      <PageContainer className="pt-4 md:pt-8">
        <motion.h1
          className="mb-12 font-semibold font-['Work_Sans'] md:mb-20"
          style={{ fontSize: '32px' }}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.42, ease: 'easeOut' }}
        >
          {isCN ? '简历' : 'Resume'}
        </motion.h1>

        {/* Work Experience */}
        <motion.div
          className="flex flex-col gap-6 mb-12 pb-12 border-b border-border md:flex-row md:items-start md:gap-16 md:mb-20 md:pb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={stagger}
        >
          <motion.div className="w-full flex-shrink-0 md:w-48" variants={fadeUp} transition={{ duration: 0.42, ease: 'easeOut' }}>
            <h2 className="font-semibold font-['Work_Sans']" style={{ fontSize: '28px' }}>{isCN ? '工作经历' : 'Work Experience'}</h2>
          </motion.div>
          <div className="flex-1 space-y-4 md:space-y-5">
            <ResumeEntry date="2022 – 2023" logoSrc={bytedanceLogo} logoAlt="ByteDance">
              <p style={{ fontSize: '1.1rem', fontFamily: "'Work Sans', sans-serif", fontWeight: 600 }} className="mb-0.5">ByteDance (Lark / Feishu)</p>
              <p className="text-base text-muted-foreground italic mb-2">{isCN ? '创意设计师（全球营销）' : 'Creative Designer, Global Marketing'}</p>
              <div className="space-y-2" style={{ fontFamily: "'Avenir', 'Nunito', sans-serif", fontWeight: 300 }}>
                <p className="text-base text-muted-foreground leading-relaxed">{isCN ? '· 为 Lark 全球化发布设计多区域营销活动与创意素材。' : "· Designed global marketing campaigns and creative assets for Lark's international launch across multiple regions."}</p>
                <p className="text-base text-muted-foreground leading-relaxed">{isCN ? '· 优化活动与官网设计，提升用户获取与转化。' : '· Improved campaign and website design to lift user acquisition and conversion.'}</p>
              </div>
            </ResumeEntry>
            <ResumeEntry date="2018 – 2021" logoSrc={tencentLogo} logoAlt="Tencent">
              <p style={{ fontSize: '1.1rem', fontFamily: "'Work Sans', sans-serif", fontWeight: 600 }} className="mb-0.5">Tencent (Healthcare Department)</p>
              <p className="text-base text-muted-foreground italic mb-3">{isCN ? '高级产品设计师' : 'Senior Product Designer'}</p>
              <div className="space-y-2" style={{ fontFamily: "'Avenir', 'Nunito', sans-serif", fontWeight: 300 }}>
                <p className="text-base text-muted-foreground leading-relaxed">{isCN ? '· 主导智慧医院、医保与公共健康平台等医疗 SaaS 产品的 UX/UI。' : '· Led UX/UI for healthcare SaaS products — smart hospitals, medical insurance, and public-health platforms.'}</p>
                <p className="text-base text-muted-foreground leading-relaxed">{isCN ? '· 设计由 AI 与大数据驱动的数据可视化系统，支持医疗决策。' : '· Designed AI- and big-data-driven data visualization systems supporting medical decision-making.'}</p>
                <p className="text-base text-muted-foreground leading-relaxed">{isCN ? '· 牵头腾讯觅影相关项目，落地 40+ 医院与政务机构项目。' : '· Spearheaded "Tencent Micision," delivering 40+ projects across hospitals and government institutions.'}</p>
                <p className="text-base text-muted-foreground leading-relaxed">{isCN ? '· 获得 5 项公司级奖项，包括医疗抗疫贡献奖。' : '· Recognized with 5 company awards, including a Medical Anti-Epidemic Contribution Award.'}</p>
              </div>
            </ResumeEntry>
            <ResumeEntry date="Feb – Jul 2017" logoSrc={tencentLogo} logoAlt="Tencent">
              <p style={{ fontSize: '1.1rem', fontFamily: "'Work Sans', sans-serif", fontWeight: 600 }} className="mb-0.5">Tencent (Healthcare Department)</p>
              <p className="text-base text-muted-foreground italic mb-2">{isCN ? '视觉设计实习生' : 'Visual Design Intern'}</p>
              <div className="space-y-2" style={{ fontFamily: "'Avenir', 'Nunito', sans-serif", fontWeight: 300 }}>
                <p className="text-base text-muted-foreground leading-relaxed">{isCN ? '· 为医疗硬件产品设计 UI 与视觉体系，包括血糖监测 App 与青少年脊柱健康设备 SpineCare。' : '· Designed UI and visual systems for healthcare hardware products, including a glucose-monitoring app and the SpineCare adolescent spine-care device.'}</p>
              </div>
            </ResumeEntry>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          className="flex flex-col gap-6 mb-12 pb-12 border-b border-border md:flex-row md:gap-16 md:mb-20 md:pb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={stagger}
        >
          <motion.div className="w-full flex-shrink-0 md:w-48" variants={fadeUp} transition={{ duration: 0.42, ease: 'easeOut' }}>
            <h2 className="font-semibold font-['Work_Sans']" style={{ fontSize: '28px' }}>{isCN ? '教育经历' : 'Education'}</h2>
          </motion.div>
          <div className="flex-1 h-auto overflow-visible space-y-8 md:space-y-10">
            <ResumeEntry date="2026 – 2029" logoSrc={polyuLogo} logoAlt="The Hong Kong Polytechnic University">
              <p style={{ fontSize: '1.1rem', fontFamily: "'Work Sans', sans-serif", fontWeight: 600 }} className="mb-1">The Hong Kong Polytechnic University</p>
              <p className="text-base text-muted-foreground mb-2">{isCN ? 'Doctor of AI（在读）' : 'Doctor of AI (In Progress)'}</p>
              <p className="text-base text-muted-foreground">{isCN ? '三年制博士项目（2026 – 2029）' : 'Three-year doctoral program (2026 – 2029)'}</p>
            </ResumeEntry>
            <ResumeEntry date="2025 – 2026" logoSrc={polyuLogo} logoAlt="The Hong Kong Polytechnic University">
              <p style={{ fontSize: '1.1rem', fontFamily: "'Work Sans', sans-serif", fontWeight: 600 }} className="mb-1">The Hong Kong Polytechnic University</p>
              <p className="text-base text-muted-foreground mb-2">{isCN ? '生成式 AI 与人文学 硕士' : 'MSc in Generative AI & Humanities'}</p>
              <p className="text-base text-muted-foreground">{isCN ? '毕业项目：Bauhinia-Mind（A+）' : 'Capstone: Bauhinia-Mind (Grade A+)'}</p>
            </ResumeEntry>
            <ResumeEntry date="2013 – 2017" logoSrc={cuzLogo} logoAlt="Communication University of Zhejiang">
              <p style={{ fontSize: '1.1rem', fontFamily: "'Work Sans', sans-serif", fontWeight: 600 }} className="mb-1">Communication University of Zhejiang</p>
              <p className="text-base text-muted-foreground mb-2">{isCN ? '视觉传达设计 学士' : 'BA in Visual Communication Design'}</p>
            </ResumeEntry>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          className="flex flex-col gap-6 mb-12 md:flex-row md:gap-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={stagger}
        >
          <motion.div className="w-full flex-shrink-0 md:w-48" variants={fadeUp} transition={{ duration: 0.42, ease: 'easeOut' }}>
            <h2 className="font-semibold font-['Work_Sans']" style={{ fontSize: '28px' }}>{isCN ? '技能与专长' : 'Skills & Expertise'}</h2>
          </motion.div>
          <div className="flex-1">
            <motion.div
              className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:ml-[12.5rem]"
              variants={skillStagger}
            >
              {skillsLocalized.map((skill) => (
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
