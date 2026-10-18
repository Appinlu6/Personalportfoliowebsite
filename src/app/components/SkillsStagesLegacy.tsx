import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

/**
 * The original Skills & Expertise list, grouped by career stage.
 * Kept as a backup and as the fallback when WebGL is unavailable.
 */

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const skillStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.01,
    },
  },
};

const skillStages = [
  {
    years: '2025 – Now',
    yearsCN: '2025 至今',
    title: 'Building AI',
    titleCN: '构建 AI',
    skills: [
      'Model Fine-tuning',
      'Model Evaluation',
      'Human Activity Recognition (HAR)',
      'Agent Framework Design',
      'AI Product Design',
      'RAG & Knowledge Graph',
      'Conversational AI',
      'NLP & Text Mining',
      'AI Safety',
    ],
    skillsCN: [
      '模型微调',
      '模型评估',
      '人体活动识别（HAR）',
      '智能体框架设计',
      'AI 产品设计',
      'RAG 与知识图谱',
      '对话式 AI',
      'NLP 与文本挖掘',
      'AI 安全',
    ],
  },
  {
    years: '2022 – 2025',
    title: 'Scaling systems and business',
    titleCN: '规模化与经营',
    skills: ['Design Systems', 'Low-code & Frontend Build', 'Brand & Content Strategy', 'Social Community Growth', 'Product & SKU Development'],
    skillsCN: ['设计系统', '低代码与前端搭建', '品牌与内容策略', '社媒社群增长', '产品与 SKU 开发'],
  },
  {
    years: '2017 – 2022',
    title: 'Turning data into decisions',
    titleCN: '用数据驱动决策',
    skills: [
      'Data Platform (0→1)',
      'Data Visualization',
      'Multi-dimensional Analysis & Forecasting',
      'Real-time IoT Data',
      'Digital Marketing (AIPL, Segmentation, Targeting)',
    ],
    skillsCN: ['数据平台（0→1）', '数据可视化', '多维分析与预测', '实时物联网数据', '数字营销（AIPL、人群分层、精准投放）'],
  },
  {
    years: '2013 – 2017',
    title: 'Understanding people',
    titleCN: '理解人',
    skills: ['Visual Design', 'UX Research', 'Field Research', 'Journey Mapping', 'Service Design'],
    skillsCN: ['视觉设计', '用户研究', '田野调研', '旅程地图', '服务设计'],
  },
];

export function SkillsStagesLegacy() {
  const { isCN } = useLanguage();

  return (
    <div className="space-y-8 md:space-y-10">
      {skillStages.map((stage) => (
        <motion.div
          key={stage.title}
          className="grid grid-cols-1 gap-y-3 sm:grid-cols-[10rem_1fr] sm:gap-x-6"
          variants={fadeUp}
          transition={{ duration: 0.42, ease: 'easeOut' }}
        >
          <span
            className="text-sm text-muted-foreground sm:pt-0.5 sm:text-right sm:text-base"
            style={{ fontFamily: "'Avenir', 'Nunito', sans-serif", fontWeight: 300 }}
          >
            {isCN ? stage.yearsCN ?? stage.years : stage.years}
          </span>
          <div>
            <p style={{ fontSize: '1.1rem', fontFamily: "'Work Sans', sans-serif", fontWeight: 600 }} className="mb-3">
              {isCN ? stage.titleCN : stage.title}
            </p>
            <motion.div className="flex flex-wrap gap-2.5" variants={skillStagger}>
              {(isCN ? stage.skillsCN : stage.skills).map((skill) => (
                <motion.span
                  key={skill}
                  className="px-3.5 py-1.5 rounded-lg bg-card border border-border text-sm sm:text-base"
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
      ))}
    </div>
  );
}
