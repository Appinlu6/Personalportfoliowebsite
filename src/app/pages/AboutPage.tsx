import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import bytedanceLogo from '@/assets/logos/bytedance.png';
import tencentLogo from '@/assets/logos/tencent.png';
import polyuLogo from '@/assets/logos/polyu.png';
import cuzLogo from '@/assets/logos/cuz.png';
import chillttooLogo from '@/assets/logos/chillttoo.png';
import yianLogo from '@/assets/logos/yian.png';
import { useLanguage } from '../context/LanguageContext';
import { PageContainer } from '../components/PageContainer';
import { SkillsStagesLegacy } from '../components/SkillsStagesLegacy';
import { GrowthSkillsMap } from '../components/growth-mountain/GrowthSkillsMap';

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

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.01,
    },
  },
};

export function AboutPage() {
  const { isCN } = useLanguage();

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
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          <motion.div className="w-full flex-shrink-0 md:w-48" variants={fadeUp} transition={{ duration: 0.42, ease: 'easeOut' }}>
            <h2 className="font-semibold font-['Work_Sans']" style={{ fontSize: '28px' }}>{isCN ? '工作经历' : 'Work Experience'}</h2>
          </motion.div>
          <div className="flex-1 space-y-4 md:space-y-5">
            <ResumeEntry date={isCN ? '2026 年 10 月 至今' : 'Oct 2026 – Now'} logoSrc={yianLogo} logoAlt={isCN ? '深圳熠安可创智能技术有限公司' : "Shenzhen Yi'an Kechuang Intelligent Technology Co., Ltd."}>
              <p style={{ fontSize: '1.1rem', fontFamily: "'Work Sans', sans-serif", fontWeight: 600 }} className="mb-0.5">
                {isCN ? '深圳熠安可创智能技术有限公司' : "Shenzhen Yi'an Kechuang Intelligent Technology Co., Ltd."}
              </p>
              <p className="text-base text-muted-foreground italic mb-2">{isCN ? 'AI 算法工程师（实习）· 深圳 · 混合办公' : 'AI Algorithm Engineer (Intern) · Shenzhen · Hybrid'}</p>
              <div className="space-y-2" style={{ fontFamily: "'Avenir', 'Nunito', sans-serif", fontWeight: 300 }}>
                <p className="text-base text-muted-foreground leading-relaxed">{isCN ? '· 研究可穿戴传感器信号与大语言模型（LLM）结合的多模态学习，用于人体活动识别。' : '· Research multimodal learning with wearable sensor signals and large language models (LLMs) for human activity recognition.'}</p>
                <p className="text-base text-muted-foreground leading-relaxed">{isCN ? '· 面向运动与健康应用，开展模型微调与评估。' : '· Conduct model fine-tuning and evaluation for sports and health applications.'}</p>
                <p className="text-base text-muted-foreground leading-relaxed">{isCN ? '· 设计 AI 系统架构与应用框架。' : '· Design AI system architectures and application frameworks.'}</p>
              </div>
            </ResumeEntry>
            <ResumeEntry date={isCN ? '2023 – 2025 年 7 月' : '2023 – Jul 2025'} logoSrc={chillttooLogo} logoAlt="Chillttoo Market">
              <p style={{ fontSize: '1.1rem', fontFamily: "'Work Sans', sans-serif", fontWeight: 600 }} className="mb-0.5">{isCN ? 'Chillttoo Market（汽车文创商品 · 自主创业）' : 'Chillttoo Market (Automotive Culture Merchandise · Self-employed)'}</p>
              <p className="text-base text-muted-foreground italic mb-2">{isCN ? '联合创始人兼营销总监' : 'Co-founder & Marketing Director'}</p>
              <div className="space-y-2" style={{ fontFamily: "'Avenir', 'Nunito', sans-serif", fontWeight: 300 }}>
                <p className="text-base text-muted-foreground leading-relaxed">{isCN ? '· 与合伙人共同管理一家专注汽车文化周边（磁吸贴、贴纸、汽车挂件）的初创公司，负责战略方向、产品设计、营销创意与社交媒体内容运营，推动品牌增长与客户互动。' : '· Co-managed a startup making automotive culture merchandise, including magnetic decals, stickers, and car charms. Led strategy, product design, marketing creative, and social media content to drive brand growth and customer engagement.'}</p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {isCN ? '· 通过有针对性的内容策略，在' : '· Built a community of 12,000+ followers on '}
                  <a href="https://xhslink.cn/o/57w4W6YE0AU" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground">
                    {isCN ? '小红书' : 'Xiaohongshu'}
                  </a>
                  {isCN
                    ? '建立超过 12,000 名粉丝的社群；开发并推出 60 多个 SKU，其中 5 个成为爆款，单款销量均超过 10,000 件，带动收入显著增长并提升市场影响力。'
                    : ' through a targeted content strategy. Developed and launched 60+ SKUs, five of which became best-sellers with over 10,000 units sold each, driving significant revenue growth and market reach.'}
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {isCN ? '· 运营' : '· Grew the '}
                  <a href="https://m.tb.cn/h.jcn5eEbHbmVwUoy" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground">
                    {isCN ? '淘宝店铺' : 'Taobao store'}
                  </a>
                  {isCN
                    ? '至双皇冠信誉等级，积累近 10,000 名店铺粉丝。'
                    : ' to a Double Crown seller rating with nearly 10,000 followers.'}
                </p>
              </div>
            </ResumeEntry>
            <ResumeEntry date="2022 – 2023" logoSrc={bytedanceLogo} logoAlt="ByteDance">
              <p style={{ fontSize: '1.1rem', fontFamily: "'Work Sans', sans-serif", fontWeight: 600 }} className="mb-0.5">{isCN ? '字节跳动（Lark / 飞书）' : 'ByteDance (Lark / Feishu)'}</p>
              <p className="text-base text-muted-foreground italic mb-2">{isCN ? '创意设计师（全球营销）' : 'Creative Designer, Global Marketing'}</p>
              <div className="space-y-2" style={{ fontFamily: "'Avenir', 'Nunito', sans-serif", fontWeight: 300 }}>
                <p className="text-base text-muted-foreground leading-relaxed">{isCN ? '· 为 Lark 全球化发布设计多区域营销活动与创意素材。' : "· Designed global marketing campaigns and creative assets for Lark's international launch across multiple regions."}</p>
                <p className="text-base text-muted-foreground leading-relaxed">{isCN ? '· 优化活动与官网设计，提升用户获取与转化。' : '· Improved campaign and website design to lift user acquisition and conversion.'}</p>
              </div>
            </ResumeEntry>
            <ResumeEntry date="2021 – 2022" logoSrc={tencentLogo} logoAlt="Tencent">
              <p style={{ fontSize: '1.1rem', fontFamily: "'Work Sans', sans-serif", fontWeight: 600 }} className="mb-0.5">{isCN ? '腾讯（智慧零售）' : 'Tencent (Smart Retail)'}</p>
              <p className="text-base text-muted-foreground italic mb-2">{isCN ? '高级 UX 设计师' : 'Senior UX Designer'}</p>
              <div className="space-y-2" style={{ fontFamily: "'Avenir', 'Nunito', sans-serif", fontWeight: 300 }}>
                <p className="text-base text-muted-foreground leading-relaxed">{isCN ? '· 负责 ToB 全链路营销平台的 UX 设计。' : '· Led UX design for a B2B full-funnel marketing platform for retail brands.'}</p>
                <p className="text-base text-muted-foreground leading-relaxed">{isCN ? '· 积累从商机洞察、AIPL 人群资产、客户留存、人群包分层到精准投放的全链路数字营销经验。' : '· Built end-to-end digital marketing knowledge, from opportunity insight and AIPL audience modelling to retention, audience segmentation, and targeted delivery.'}</p>
                <p className="text-base text-muted-foreground leading-relaxed">{isCN ? '· 开始思考以数据分析为核心的营销平台如何赋能零售行业。' : '· Began exploring how data-driven marketing platforms could create value for the retail industry.'}</p>
              </div>
            </ResumeEntry>
            <ResumeEntry date={isCN ? '2017 年 8 月 – 2021' : 'Aug 2017 – 2021'} logoSrc={tencentLogo} logoAlt="Tencent">
              <p style={{ fontSize: '1.1rem', fontFamily: "'Work Sans', sans-serif", fontWeight: 600 }} className="mb-0.5">{isCN ? '腾讯（医疗健康事业部）' : 'Tencent (Healthcare Department)'}</p>
              <p className="text-base text-muted-foreground italic mb-3">{isCN ? '高级产品设计师' : 'Senior Product Designer'}</p>
              <div className="space-y-2" style={{ fontFamily: "'Avenir', 'Nunito', sans-serif", fontWeight: 300 }}>
                <p className="text-base text-muted-foreground leading-relaxed">{isCN ? '· 主导智慧医院、医保与公共健康平台等医疗 SaaS 产品的 UX/UI。' : '· Led UX/UI for healthcare SaaS products — smart hospitals, medical insurance, and public-health platforms.'}</p>
                <p className="text-base text-muted-foreground leading-relaxed">{isCN ? '· 设计医疗大数据可视化与多维预测分析系统，基于历史数据为医院运营和医疗决策提供前瞻洞察。' : '· Designed medical big-data visualization and multi-dimensional forecasting systems, using historical data to give hospitals forward-looking operational insight.'}</p>
                <p className="text-base text-muted-foreground leading-relaxed">{isCN ? '· 牵头腾讯觅决相关项目，落地 40+ 医院与政务机构项目。' : '· Spearheaded "Tencent Micision," delivering 40+ projects across hospitals and government institutions.'}</p>
                <p className="text-base text-muted-foreground leading-relaxed">{isCN ? '· 获得 5 项公司级奖项，包括医疗抗疫贡献奖。' : '· Recognized with 5 company awards, including a Medical Anti-Epidemic Contribution Award.'}</p>
              </div>
            </ResumeEntry>
            <ResumeEntry date={isCN ? '2017 年 1–4 月' : 'Jan – Apr 2017'} logoSrc={tencentLogo} logoAlt="Tencent">
              <p style={{ fontSize: '1.1rem', fontFamily: "'Work Sans', sans-serif", fontWeight: 600 }} className="mb-0.5">{isCN ? '腾讯（医疗健康事业部）' : 'Tencent (Healthcare Department)'}</p>
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
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          <motion.div className="w-full flex-shrink-0 md:w-48" variants={fadeUp} transition={{ duration: 0.42, ease: 'easeOut' }}>
            <h2 className="font-semibold font-['Work_Sans']" style={{ fontSize: '28px' }}>{isCN ? '教育经历' : 'Education'}</h2>
          </motion.div>
          <div className="flex-1 h-auto overflow-visible space-y-8 md:space-y-10">
            <ResumeEntry date={isCN ? '2026 至今' : '2026 - Now'} logoSrc={polyuLogo} logoAlt="The Hong Kong Polytechnic University">
              <p style={{ fontSize: '1.1rem', fontFamily: "'Work Sans', sans-serif", fontWeight: 600 }} className="mb-1">{isCN ? '香港理工大学' : 'The Hong Kong Polytechnic University'}</p>
              <p className="text-base text-muted-foreground mb-2">{isCN ? '人工智能博士（在读）' : 'Doctor of AI (In Progress)'}</p>
              <p className="text-base text-muted-foreground">{isCN ? '三年制博士项目（2026 – 2029）' : 'Three-year doctoral program (2026 – 2029)'}</p>
            </ResumeEntry>
            <ResumeEntry date="2025 – 2026" logoSrc={polyuLogo} logoAlt="The Hong Kong Polytechnic University">
              <p style={{ fontSize: '1.1rem', fontFamily: "'Work Sans', sans-serif", fontWeight: 600 }} className="mb-1">{isCN ? '香港理工大学' : 'The Hong Kong Polytechnic University'}</p>
              <p className="text-base text-muted-foreground mb-2">{isCN ? '生成式人工智能与人文学硕士' : 'MSc in Generative AI & Humanities'}</p>
              <p className="text-base text-muted-foreground">{isCN ? '毕业项目：紫荆心智（A+）' : 'Capstone: Bauhinia-Mind (Grade A+)'}</p>
            </ResumeEntry>
            <ResumeEntry date="2013 – 2017" logoSrc={cuzLogo} logoAlt="Communication University of Zhejiang">
              <p style={{ fontSize: '1.1rem', fontFamily: "'Work Sans', sans-serif", fontWeight: 600 }} className="mb-1">{isCN ? '浙江传媒学院' : 'Communication University of Zhejiang'}</p>
              <p className="text-base text-muted-foreground mb-2">{isCN ? '视觉传达设计学士' : 'BA in Visual Communication Design'}</p>
            </ResumeEntry>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          id="skills"
          className="flex flex-col gap-6 mb-12 scroll-mt-28 md:flex-row md:gap-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          <motion.div className="w-full flex-shrink-0 md:w-48" variants={fadeUp} transition={{ duration: 0.42, ease: 'easeOut' }}>
            <h2 className="font-semibold font-['Work_Sans']" style={{ fontSize: '28px' }}>{isCN ? '技能与专长' : 'Skills & Expertise'}</h2>
          </motion.div>
          <motion.div className="min-w-0 flex-1" variants={fadeUp} transition={{ duration: 0.42, ease: 'easeOut' }}>
            <GrowthSkillsMap
              className="h-[min(580px,80svh)] rounded-2xl border border-border md:h-[720px]"
              fallback={<SkillsStagesLegacy />}
            />
          </motion.div>
        </motion.div>
      </PageContainer>
    </section>
  );
}
