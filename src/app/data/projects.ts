export const projectTagLabelsCN = {
  'AI Product Design': 'AI 产品设计',
  'Conversational AI': '对话式 AI',
  'RAG & Knowledge Graph': 'RAG 与知识图谱',
  'NLP & Text Mining': 'NLP 与文本挖掘',
  'Human-AI Workflow': '人机协作工作流',
  'Agent Framework Design': '智能体框架设计',
  'Design Systems': '设计系统',
  'Low-code & Frontend Build': '低代码与前端搭建',
  'Brand & Content Strategy': '品牌与内容策略',
  'Data Visualization': '数据可视化',
  'Big Data Platform Design': '大数据平台设计',
  'Real-time Decision Support': '实时决策支持',
  Analysis: '数据分析',
  'UX Research': '用户研究',
  'Service Design': '服务设计',
  Healthcare: '医疗健康',
  'Digital Humanities': '数字人文',
  'Enterprise SaaS': '企业 SaaS',
  'Immersive / XR': '沉浸式 / XR',
} as const;

export type ProjectTag = keyof typeof projectTagLabelsCN;

export type Project = {
  slug: string;
  title: string;
  year: string;
  description: string;
  /** Up to three capability tags followed by one domain tag. */
  tags: ProjectTag[];
  featured: boolean;
  image: string;
  hoverImage?: string;
  hoverVideo?: string;
  externalUrl?: string;
  /** Left out of the project grids; the case study URL still works. */
  hidden?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'bauhinia-mind',
    title: 'Bauhinia-Mind',
    year: '2026 Jan – Apr',
    description:
      'An Empathic, Memory-Enabled AI Health Companion for Mainland Chinese Students in Hong Kong',
    tags: ['AI Product Design', 'RAG & Knowledge Graph', 'Conversational AI', 'Healthcare'],
    featured: false,
    image: '/bauhinia-mind-cover-lastframe.jpg',
    hoverVideo: '/videos/bauhinia-logo.mp4',
  },
  {
    slug: 'before-evening-vr',
    title: 'MetaHuman Agents in a VR Mystery',
    year: '2026 Jan - Apr',
    description:
      'A VR mystery set in a Chinese high school. Players question AI characters out loud and show them clues found around the campus. I designed the agent structure, connected Convai to MetaHuman, and developed it in Unreal Engine 5 through MCP.',
    tags: ['Conversational AI', 'Agent Framework Design', 'AI Product Design', 'Immersive / XR'],
    featured: false,
    image: '/before-evening/cover.webp',
    hoverVideo: '/videos/before-evening-cover.mp4',
    hidden: true,
  },
  {
    slug: 'cbs5504-mandarin-cultural-evolution',
    title: 'Mandarin: A Cultural Evolution',
    year: '2025 Oct - Nov',
    description:
      'A digital humanities study tracing the changing meanings of the orange across three thousand years of Chinese history through a curated corpus, NLP analysis, close reading, and interactive visualization.',
    tags: ['NLP & Text Mining', 'Data Visualization', 'Digital Humanities'],
    featured: false,
    image: '/cbs5504/mandarin-cover.webp',
    hoverVideo: '/cbs5504/mandarin-cover-hover.mp4',
  },
  {
    slug: 'lark-global-marketing-website',
    title: 'Lark & Feishu: Marketing Design and DesignOps',
    year: '2022 – 2023',
    description:
      'Responsible for the website design of Meego, the project management tool within Lark software, and the design of the Customer Stories section on the global marketing website. Also responsible for creative design, marketing solutions, and new media art support.',
    tags: ['Human-AI Workflow', 'Design Systems', 'Brand & Content Strategy'],
    featured: false,
    image: '/lark/cover.webp',
    hoverImage: '/lark/cover-hover.webp',
  },
  {
    slug: 'tencent-micision-smart-hospital',
    title: 'Tencent Micision — Smart Hospital',
    year: '2018 – 2019',
    description:
      "Led the 0-to-1 design of a hospital data platform that shows what happened and why. Piloted at the People's Hospital of Nanshan District, Shenzhen (Huazhong University of Science and Technology Union Shenzhen Hospital) and delivered to 23 hospitals by 2021.",
    tags: ['Analysis', 'Data Visualization', 'Big Data Platform Design', 'Healthcare'],
    featured: false,
    image: '/smart-hospital.webp',
    hoverVideo: '/videos/smart-hospital-cover.mp4',
  },
  {
    slug: 'tencent-micision-smart-marathon',
    title: 'Tencent Micision — Smart Marathon',
    year: '2019 Jan – Apr',
    description:
      "Spearheaded the 0-to-1 product management and design of Tencent's Smart Marathon Big Data Platform. Leveraging Unreal Engine for 3D city mapping and real-time biometric tracking, the system empowered cross-department command centers with instant emergency dispatch capabilities, successfully safeguarding the Yangzhou Marathon.",
    tags: ['Real-time Decision Support', 'Big Data Platform Design', 'Data Visualization', 'Healthcare'],
    featured: false,
    image: '/smart-Marathon.webp',
    hoverVideo: '/videos/smart-marathon-cover.mp4',
  },
  {
    slug: 'tencent-medical-cloud-o2o',
    title: 'Healthcare Service Design',
    year: '2017 Aug – Oct',
    description:
      'In August 2017 I joined Tencent Healthcare and worked on my first project with a hospital, improving how patients get through a visit.',
    tags: ['Service Design', 'UX Research', 'Healthcare'],
    featured: false,
    image: '/healthcare-service-design-cover.webp',
    hoverVideo: '/videos/healthcare-service-design-cover.mp4',
  },
];
