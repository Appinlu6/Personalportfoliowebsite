export type MountainLineId = 'human' | 'data' | 'growth';
export type NodeLineId = MountainLineId | 'foundation' | 'converge';

export type MountainLine = {
  id: MountainLineId;
  label: string;
  labelCN: string;
  tagline: string;
  taglineCN: string;
  color: string;
};

/** A work or study experience. Roles sit on the central time axis. */
export type Role = {
  id: string;
  label: string;
  labelCN: string;
  title: string;
  titleCN: string;
  /** Decimal years, e.g. 2017.6 for August 2017. `null` end means ongoing. */
  start: number;
  end: number | null;
  period: string;
  periodCN: string;
  summary: string;
  summaryCN: string;
};

/** A project: the first-level nodes on the mountain's ridges. */
export type Project = {
  id: string;
  label: string;
  labelCN: string;
  roleId: string;
  /** Height on the mountain, in decimal years. */
  anchor: number;
  line: NodeLineId;
  title: string;
  titleCN: string;
  period: string;
  periodCN: string;
  summary: string;
  summaryCN: string;
  skillIds: string[];
  parentId?: string;
  caseStudySlug?: string;
  /** Hidden projects stay in the data but are left out of the map, the timelines, and their own skills. */
  hidden?: boolean;
};

export type Skill = {
  id: string;
  label: string;
  labelCN: string;
};

export type StoryLink = {
  from: string;
  to: string;
  skillId?: string;
  note: string;
  noteCN: string;
};

export const MOUNTAIN_BASE_YEAR = 2017;
/** The silhouette closes above "now", so the top stays wide enough for recent projects. */
export const MOUNTAIN_PEAK_YEAR = 2028.2;
/** Where ongoing roles end on the axis. */
export const MOUNTAIN_NOW_YEAR = 2027.0;

export const mountainLines: MountainLine[] = [
  {
    id: 'human',
    label: 'Human-Centered',
    labelCN: '以人为本',
    tagline: 'Starting from healthcare service design, always on the side of people.',
    taglineCN: '从医疗服务设计开始，始终站在人这一边。',
    color: '#C4572E',
  },
  {
    id: 'data',
    label: 'Data → Intelligence',
    labelCN: '从数据到智能',
    tagline: 'From making data visible to making AI understand it.',
    taglineCN: '从让数据被看见，到让 AI 读懂数据。',
    color: '#2F5BEA',
  },
  {
    id: 'growth',
    label: 'Growth & Business',
    labelCN: '增长与商业',
    tagline: 'From designing marketing platforms to running a brand.',
    taglineCN: '从营销平台的设计者，到自己做品牌的经营者。',
    color: '#13896B',
  },
];

export const FOUNDATION_COLOR = '#8C8C8C';
export const CONVERGE_COLOR = '#111111';
export const AXIS_COLOR = '#2A2A2A';

const allSkills: Skill[] = [
  { id: 'visual-design', label: 'Visual Design', labelCN: '视觉设计' },
  { id: 'ux-research', label: 'UX Research', labelCN: '用户研究' },
  { id: 'field-research', label: 'Field Research', labelCN: '田野调研' },
  { id: 'journey-mapping', label: 'Journey Mapping', labelCN: '旅程地图' },
  { id: 'service-design', label: 'Service Design', labelCN: '服务设计' },
  { id: 'data-platform', label: 'Big Data Platform Design', labelCN: '大数据平台设计' },
  { id: 'data-viz', label: 'Data Visualization', labelCN: '数据可视化' },
  { id: 'forecasting', label: 'Analysis', labelCN: '数据分析' },
  { id: 'iot-data', label: 'Real-time IoT Data', labelCN: '实时物联网数据' },
  { id: 'digital-marketing', label: 'Digital Marketing (AIPL, Segmentation, Targeting)', labelCN: '数字营销（AIPL、人群分层、精准投放）' },
  { id: 'design-systems', label: 'Design Systems', labelCN: '设计系统' },
  { id: 'low-code', label: 'Low-code & Frontend Build', labelCN: '低代码与前端搭建' },
  { id: 'brand-content', label: 'Brand & Content Strategy', labelCN: '品牌与内容策略' },
  { id: 'community-growth', label: 'Social Community Growth', labelCN: '社媒社群增长' },
  { id: 'product-sku', label: 'Product & SKU Development', labelCN: '产品与 SKU 开发' },
  { id: 'ai-product', label: 'AI Product Design', labelCN: 'AI 产品设计' },
  { id: 'rag-kg', label: 'RAG & Knowledge Graph', labelCN: 'RAG 与知识图谱' },
  { id: 'conversational-ai', label: 'Conversational AI', labelCN: '对话式 AI' },
  { id: 'nlp', label: 'NLP & Text Mining', labelCN: 'NLP 与文本挖掘' },
  { id: 'ai-safety', label: 'AI Safety', labelCN: 'AI 安全' },
  { id: 'model-eval', label: 'Model Evaluation', labelCN: '模型评估' },
  { id: 'fine-tuning', label: 'Model Fine-tuning', labelCN: '模型微调' },
  { id: 'har', label: 'Human Activity Recognition (HAR)', labelCN: '人体活动识别（HAR）' },
  { id: 'agent-framework', label: 'Agent Framework Design', labelCN: '智能体框架设计' },
  { id: 'unreal-engine', label: 'Unreal Engine Development', labelCN: 'Unreal Engine 开发' },
  { id: 'mcp-dev', label: 'AI-assisted Development (MCP)', labelCN: 'MCP 与 AI 辅助开发' },
  { id: 'vr-interaction', label: 'VR Interaction Design', labelCN: 'VR 交互设计' },
];

/** Bottom to top, in the order they appear on the axis. */
export const roles: Role[] = [
  {
    id: 'tencent-intern',
    label: 'Tencent Intern',
    labelCN: '腾讯实习',
    title: 'Tencent Healthcare · Visual Design Intern',
    titleCN: '腾讯医疗健康事业部 · 视觉设计实习生',
    start: 2017.0,
    end: 2017.3,
    period: 'Jan – Apr 2017',
    periodCN: '2017 年 1–4 月',
    summary: 'UI and visual systems for healthcare hardware. My first contact with health products.',
    summaryCN: '为医疗硬件产品设计 UI 与视觉体系，第一次接触健康产品。',
  },
  {
    id: 'tencent-health',
    label: 'Tencent Health',
    labelCN: '腾讯医疗',
    title: 'Tencent Healthcare · Senior Product Designer',
    titleCN: '腾讯医疗健康事业部 · 高级产品设计师',
    start: 2017.6,
    end: 2021.0,
    period: 'Aug 2017 – 2021',
    periodCN: '2017 年 8 月 – 2021',
    summary: 'Led UX/UI for healthcare SaaS: smart hospitals, medical insurance, and public-health platforms. Spearheaded Tencent Micision, 40+ projects across hospitals and government institutions.',
    summaryCN: '主导智慧医院、医保与公共健康平台等医疗 SaaS 的 UX/UI；牵头腾讯觅决，落地 40+ 医院与政务机构项目。',
  },
  {
    id: 'tencent-retail',
    label: 'Tencent Retail',
    labelCN: '腾讯零售',
    title: 'Tencent Smart Retail · Senior UX Designer',
    titleCN: '腾讯智慧零售 · 高级 UX 设计师',
    start: 2021.0,
    end: 2022.0,
    period: '2021 – 2022',
    periodCN: '2021 – 2022',
    summary: 'Led UX for a B2B full-funnel marketing platform for retail brands.',
    summaryCN: '负责面向零售品牌的 ToB 全链路营销平台 UX 设计。',
  },
  {
    id: 'bytedance-lark',
    label: 'ByteDance',
    labelCN: '字节跳动',
    title: 'ByteDance (Lark) · Creative Designer, Global Marketing',
    titleCN: '字节跳动（飞书）· 创意设计师（全球营销）',
    start: 2022.0,
    end: 2023.4,
    period: '2022 – 2023',
    periodCN: '2022 – 2023',
    summary: "Global marketing campaigns and the overseas website for Lark's international launch.",
    summaryCN: '负责 Lark 全球化发布的多区域营销活动与海外官网。',
  },
  {
    id: 'chillttoo',
    label: 'Chillttoo',
    labelCN: 'Chillttoo',
    title: 'Chillttoo Market · Co-founder & Marketing Director',
    titleCN: 'Chillttoo Market · 联合创始人兼营销总监',
    start: 2023.4,
    end: 2025.55,
    period: '2023 – Jul 2025',
    periodCN: '2023 – 2025 年 7 月',
    summary: 'Co-ran an automotive-culture merchandise startup. Led strategy, product design, marketing creative, and social content.',
    summaryCN: '与合伙人共同经营汽车文化周边品牌，负责战略、产品设计、营销创意与社媒内容。',
  },
  {
    id: 'polyu-msc',
    label: 'PolyU MSc',
    labelCN: '理大硕士',
    title: 'PolyU · MSc in Generative AI & Humanities',
    titleCN: '香港理工大学 · 生成式人工智能与人文学硕士',
    start: 2025.67,
    end: 2026.5,
    period: '2025 – 2026',
    periodCN: '2025 – 2026',
    summary: 'Where I moved into AI: conversational agents, RAG, AI safety, and NLP, always applied to people.',
    summaryCN: '转向 AI 的起点：对话智能体、RAG、AI 安全与 NLP，始终落在人身上。',
  },
  {
    id: 'polyu-phd',
    label: 'PolyU Doctorate',
    labelCN: '理大博士',
    title: 'PolyU · Doctor of AI',
    titleCN: '香港理工大学 · 人工智能博士',
    start: 2026.7,
    end: null,
    period: '2026 – Now',
    periodCN: '2026 年至今',
    summary: 'A three-year doctoral programme in AI (2026 – 2029).',
    summaryCN: '三年制人工智能博士项目（2026 – 2029）。',
  },
  {
    id: 'yian',
    label: "Yi'an Kechuang",
    labelCN: '熠安可创',
    title: "Shenzhen Yi'an Kechuang Intelligent Technology · AI Algorithm Engineer (Intern)",
    titleCN: '深圳熠安可创智能技术有限公司 · AI 算法工程师（实习）',
    start: 2026.75,
    end: null,
    period: 'Oct 2026 – Now',
    periodCN: '2026 年 10 月至今',
    summary: 'Multimodal learning, model fine-tuning and evaluation, and AI system architecture for sports and health.',
    summaryCN: '面向运动与健康的多模态学习、模型微调与评估，以及 AI 系统架构。',
  },
];

const allProjects: Project[] = [
  {
    id: 'health-hardware',
    label: 'Health Hardware UI',
    labelCN: '健康硬件 UI',
    roleId: 'tencent-intern',
    anchor: 2017.1,
    line: 'foundation',
    title: 'Glucose App & SpineCare',
    titleCN: '血糖监测 App 与 SpineCare',
    period: 'Jan – Apr 2017',
    periodCN: '2017 年 1–4 月',
    summary: 'UI and visual systems for a glucose-monitoring app and the SpineCare adolescent spine-care device.',
    summaryCN: '为血糖监测 App 和 SpineCare 青少年脊柱设备设计 UI 与视觉系统。',
    skillIds: ['visual-design'],
  },
  {
    id: 'healthcare-service-design',
    label: 'Healthcare Service Design',
    labelCN: '医疗服务设计',
    roleId: 'tencent-health',
    anchor: 2017.7,
    line: 'human',
    title: 'Healthcare Service Design',
    titleCN: '医疗服务设计',
    period: 'Aug – Oct 2017',
    periodCN: '2017 年 8–10 月',
    summary:
      'In August 2017 I joined Tencent Healthcare and worked on my first project with a hospital, improving how patients get through a visit.',
    summaryCN:
      '2017 年 8 月，我正式入职腾讯医疗健康部门，并参与了第一个和医院合作，升级就医服务体验的项目。',
    skillIds: ['service-design', 'journey-mapping', 'field-research', 'ux-research'],
    caseStudySlug: 'tencent-medical-cloud-o2o',
  },
  {
    id: 'smart-hospital',
    label: 'Smart Hospital',
    labelCN: '智慧医院',
    roleId: 'tencent-health',
    anchor: 2018.6,
    line: 'data',
    title: 'Smart Hospital',
    titleCN: '智慧医院',
    period: '2018 – 2019',
    periodCN: '2018 – 2019',
    summary: 'Started with field research in hospitals, then led the 0-to-1 design of a data platform that shows what happened and why. During COVID-19 it mapped fever patients across Nanshan in real time. A forecasting stage with Tencent AI Lab was planned but not built.',
    summaryCN: '从走访医院开始，主导数据平台从 0 到 1 的设计，呈现发生了什么、为什么发生。新冠期间用于实时呈现南山区发热患者分布。与腾讯 AI Lab 规划的预测阶段没有落地。',
    skillIds: ['field-research', 'ux-research', 'forecasting', 'data-viz', 'data-platform', 'unreal-engine'],
    parentId: 'micision',
    caseStudySlug: 'tencent-micision-smart-hospital',
  },
  {
    id: 'smart-marathon',
    label: 'Smart Marathon',
    labelCN: '智慧马拉松',
    roleId: 'tencent-health',
    anchor: 2019.2,
    line: 'data',
    title: 'Smart Marathon',
    titleCN: '智慧马拉松',
    period: 'Jan – Apr 2019',
    periodCN: '2019 年 1–4 月',
    summary: 'First time using smart wristbands to collect live race data. On site in Yangzhou, I calibrated sampling frequency, battery life, and abnormal-signal alert rules within a sprint of under four weeks.',
    summaryCN: '第一次用智能手环采集真实赛事数据。在扬州现场联调采集频率、续航和异常预警规则，开发冲刺不到 4 周。',
    skillIds: ['iot-data', 'data-viz', 'data-platform', 'field-research', 'unreal-engine'],
    parentId: 'micision',
    caseStudySlug: 'tencent-micision-smart-marathon',
  },
  {
    id: 'micision',
    label: 'Tencent Micision',
    labelCN: '腾讯觅决',
    roleId: 'tencent-health',
    anchor: 2020.0,
    line: 'data',
    title: 'Tencent Micision',
    titleCN: '腾讯觅决 Micision',
    period: '2017 – 2021',
    periodCN: '2017 – 2021',
    summary: 'Healthcare data platform: 40+ projects across 23 hospitals and 5 government departments, 5 company awards including an Anti-Epidemic Contribution Award. Covers smart hospitals, the smart marathon, medical-insurance supervision, and epidemic public-opinion monitoring.',
    summaryCN: '医疗数据平台：40+ 项目、23 家医院、5 个政府部门，5 项公司奖项（含抗疫贡献奖）。包含智慧医院、智慧马拉松、医保监管、疫情舆情监控等方向。',
    skillIds: ['data-platform', 'data-viz', 'forecasting', 'design-systems', 'unreal-engine'],
  },
  {
    id: 'marketing-cloud',
    label: 'Marketing Cloud',
    labelCN: '腾讯营销云',
    roleId: 'tencent-retail',
    anchor: 2021.3,
    line: 'growth',
    title: 'Tencent Marketing Cloud',
    titleCN: '腾讯营销云',
    period: '2021 – 2022',
    periodCN: '2021 – 2022',
    summary: 'UX for a B2B full-funnel marketing platform: opportunity insight, AIPL, retention, audience segmentation, and targeted delivery.',
    summaryCN: 'ToB 全链路营销平台的 UX：商机洞察、AIPL、客户留存、人群分层、精准投放。',
    skillIds: ['digital-marketing', 'ux-research', 'data-viz'],
  },
  {
    id: 'lark',
    label: 'Lark Website',
    labelCN: '飞书官网',
    roleId: 'bytedance-lark',
    anchor: 2022.4,
    line: 'growth',
    title: 'Lark & Feishu: Marketing Design and DesignOps',
    titleCN: '飞书营销设计与设计效能',
    period: '2022 – 2023',
    periodCN: '2022 – 2023',
    summary: 'Self-initiated a Framer rebuild of the overseas website and designed a workflow that lets presales and sales publish customer stories themselves. Publishing became 80% more efficient; 289 + 102 interface assets in 3 languages; the asset platform reached 400+ people and 4,500+ weekly views.',
    summaryCN: '自驱立项，用 Framer 重建海外官网，并设计一套让售前和商务自行发布客户案例的工作流。客户故事发布效率提升 80%；289 + 102 个界面资产，支持 3 种语言；素材平台覆盖 400 多人，每周 4,500 多次浏览。',
    skillIds: ['design-systems', 'low-code', 'visual-design', 'brand-content', 'agent-framework'],
    caseStudySlug: 'lark-global-marketing-website',
  },
  {
    id: 'chillttoo-products',
    label: 'IP Merchandise',
    labelCN: 'IP 文创产品',
    roleId: 'chillttoo',
    anchor: 2023.8,
    line: 'growth',
    title: 'IP Merchandise & Product Design',
    titleCN: 'IP 文创产品与产品设计',
    period: '2023 – 2025',
    periodCN: '2023 – 2025',
    summary: 'Designed car-culture IP merchandise, including magnetic decals, stickers, and car charms, from concept to product. Launched 60+ SKUs, five of which sold over 10,000 units each.',
    summaryCN: '汽车文化 IP 文创产品（磁吸贴、贴纸、汽车挂件），从概念到产品设计全程负责。推出 60+ SKU，其中 5 个爆款单款销量破万。',
    skillIds: ['product-sku', 'visual-design', 'brand-content'],
  },
  {
    id: 'chillttoo-community',
    label: 'User Community',
    labelCN: '用户社群',
    roleId: 'chillttoo',
    anchor: 2024.7,
    line: 'growth',
    title: 'User Community',
    titleCN: '用户社群',
    period: '2023 – 2025',
    periodCN: '2023 – 2025',
    summary: 'Grew a user community through targeted content: 12,000+ followers on Xiaohongshu and nearly 10,000 followers on a Double Crown Taobao store.',
    summaryCN: '通过有针对性的内容策略经营用户社群：小红书 12,000+ 粉丝，淘宝双皇冠店铺近 1 万粉丝。',
    skillIds: ['community-growth', 'digital-marketing', 'brand-content'],
  },
  {
    id: 'mandarin',
    label: 'Mandarin NLP',
    labelCN: 'Mandarin NLP',
    roleId: 'polyu-msc',
    anchor: 2025.85,
    line: 'data',
    title: 'Mandarin: A Cultural Evolution',
    titleCN: 'Mandarin 文化演变',
    period: 'Oct – Nov 2025',
    periodCN: '2025 年 10–11 月',
    summary: 'Tracing three thousand years of the orange in Chinese history with a curated corpus, NLP analysis, close reading, and interactive visualization.',
    summaryCN: '用语料库、NLP 分析、细读与交互可视化，追溯橘在三千年中国历史中的意义变化。',
    skillIds: ['nlp', 'data-viz'],
    caseStudySlug: 'cbs5504-mandarin-cultural-evolution',
  },
  {
    id: 'before-evening',
    label: 'MetaHuman Agents',
    labelCN: 'MetaHuman 智能体',
    roleId: 'polyu-msc',
    anchor: 2026.05,
    line: 'data',
    title: 'MetaHuman Agents in a VR Mystery',
    titleCN: 'VR 悬疑游戏里的 MetaHuman 智能体',
    period: 'Jan – Apr 2026',
    periodCN: '2026 年 1–4 月',
    summary: 'A VR mystery where players question AI characters out loud. I designed the agent structure, connected Convai to MetaHuman, and developed it in Unreal Engine 5 through MCP.',
    summaryCN: 'VR 悬疑叙事游戏，玩家直接开口向 AI 角色提问。我设计了智能体结构，把 Convai 接入 MetaHuman，并通过 MCP 在 Unreal Engine 5 里完成开发。',
    skillIds: ['conversational-ai', 'ai-product', 'unreal-engine', 'mcp-dev', 'vr-interaction', 'ux-research'],
    caseStudySlug: 'before-evening-vr',
    hidden: true,
  },
  {
    id: 'bauhinia-mind',
    label: 'Bauhinia-Mind',
    labelCN: '紫荆心智',
    roleId: 'polyu-msc',
    anchor: 2026.3,
    line: 'human',
    title: 'Bauhinia-Mind · A+ Capstone',
    titleCN: '紫荆心智 · A+ 毕业项目',
    period: 'Jan – Apr 2026',
    periodCN: '2026 年 1–4 月',
    summary: 'An empathic, memory-enabled AI health companion for mainland Chinese students in Hong Kong.',
    summaryCN: '面向在港内地学生、具备共情与记忆能力的 AI 健康伙伴。',
    skillIds: ['ai-product', 'rag-kg', 'conversational-ai', 'ai-safety', 'model-eval', 'service-design', 'ux-research'],
    caseStudySlug: 'bauhinia-mind',
  },
  {
    id: 'multimodal-har',
    label: 'Multimodal HAR',
    labelCN: '多模态活动识别',
    roleId: 'yian',
    anchor: 2026.6,
    line: 'data',
    title: 'Wearable Sensors × LLM Activity Recognition',
    titleCN: '可穿戴传感器 × 大模型活动识别',
    period: 'Oct 2026 – Now',
    periodCN: '2026 年 10 月至今',
    summary: 'Multimodal learning with wearable sensor signals and LLMs for human activity recognition; fine-tuning and evaluation for sports and health; the AI system architecture around it.',
    summaryCN: '可穿戴传感器信号与大语言模型结合的多模态学习，用于人体活动识别；面向运动与健康做模型微调与评估，并设计配套的 AI 系统架构。',
    skillIds: ['iot-data', 'har', 'fine-tuning', 'model-eval', 'agent-framework'],
  },
  {
    id: 'phd-research',
    label: 'Doctoral Research',
    labelCN: '博士研究',
    roleId: 'polyu-phd',
    anchor: 2027.0,
    line: 'converge',
    title: 'Doctoral Research',
    titleCN: '博士研究',
    period: '2026 – Now',
    periodCN: '2026 年至今',
    summary: 'Agentic AI and intelligent workflows, multimodal learning for health and rehabilitation, digital health management, cross-cultural healthcare navigation, and adaptive emotional and informational support.',
    summaryCN: 'Agentic AI 与智能工作流、面向健康与康复的多模态学习、数字健康管理、跨文化就医导航、自适应的情感与信息支持。',
    skillIds: ['forecasting', 'ai-product', 'har', 'agent-framework'],
  },
];

/** Ordered ridge of each main line, bottom to top. Growth & Business ends at Yi'an, where the business side meets AI health. */
const allRidges: Record<MountainLineId, string[]> = {
  human: ['healthcare-service-design', 'bauhinia-mind', 'phd-research'],
  data: ['smart-hospital', 'smart-marathon', 'micision', 'mandarin', 'before-evening', 'multimodal-har', 'phd-research'],
  growth: ['marketing-cloud', 'lark', 'chillttoo-products', 'chillttoo-community', 'multimodal-har'],
};

const allStoryLinks: StoryLink[] = [
  {
    from: 'health-hardware',
    to: 'smart-marathon',
    note: 'From designing health-hardware interfaces to collecting live hardware data.',
    noteCN: '从健康硬件的界面，到硬件数据的实时采集。',
  },
  {
    from: 'smart-marathon',
    to: 'multimodal-har',
    skillId: 'iot-data',
    note: 'I once tuned wristband sampling and alert rules on site. Now I use LLMs to read those sensor signals.',
    noteCN: '当年在现场调手环的采集频率和预警规则，现在用大模型读懂这些传感器信号。',
  },
  {
    from: 'smart-hospital',
    to: 'phd-research',
    skillId: 'forecasting',
    note: 'From statistics to multi-dimensional analysis: the data thinking behind my AI research.',
    noteCN: '从统计到多维分析，为 AI 研究打下数据思维的基础。',
  },
  {
    from: 'marketing-cloud',
    to: 'chillttoo-community',
    skillId: 'digital-marketing',
    note: 'AIPL, segmentation, and targeting learned on a marketing platform, then used in my own business.',
    noteCN: '营销平台上学到的 AIPL、人群分层、精准投放，自己创业时用上了。',
  },
  {
    from: 'lark',
    to: 'multimodal-har',
    skillId: 'agent-framework',
    note: 'Designing a workflow that lets people finish a task on their own became the basis for agent architecture.',
    noteCN: '第一次把「让别人自己能完成一件事」设计成工作流，拆流程、定角色、定交接的思路，成为 Agent 架构设计的基础。',
  },
];

export const projects = allProjects.filter((project) => !project.hidden);

const visibleProjectIds = new Set(projects.map((project) => project.id));

export const skills = allSkills.filter((skill) => projects.some((project) => project.skillIds.includes(skill.id)));

export const ridges = Object.fromEntries(
  Object.entries(allRidges).map(([line, ids]) => [line, ids.filter((id) => visibleProjectIds.has(id))]),
) as Record<MountainLineId, string[]>;

export const storyLinks = allStoryLinks.filter((link) => visibleProjectIds.has(link.from) && visibleProjectIds.has(link.to));
