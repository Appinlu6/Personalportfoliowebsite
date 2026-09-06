export type Project = {
  slug: string;
  title: string;
  year: string;
  description: string;
  tags: string[];
  featured: boolean;
  image: string;
  hoverImage?: string;
  hoverVideo?: string;
};

export const projects: Project[] = [
  {
    slug: 'bauhinia-mind',
    title: 'Bauhinia-Mind',
    year: '2026 Jan – Apr',
    description:
      'An Empathic, Memory-Enabled AI Health Companion for Mainland Chinese Students in Hong Kong',
    tags: ['UX Research', 'Service Design', 'AI/ML', 'Digital Health'],
    featured: true,
    image: '/bauhinia-mind-cover-lastframe.jpg',
    hoverVideo: '/videos/bauhinia-logo.mp4',
  },
  {
    slug: 'tencent-micision-smart-hospital',
    title: 'Tencent Micision — Smart Hospital',
    year: '2018 – 2021',
    description:
      'Led the 0-to-1 design of a medical big data visualization platform, piloted at a Shenzhen hospital, empowering administrators with data-driven insights to optimize hospital operations and management.',
    tags: ['0-1 Product Design', 'Data Visualization', 'Healthcare UX', 'Design Leadership'],
    featured: false,
    image: '/smart-hospital.png',
    hoverVideo: '/videos/smart-hospital-cover.mp4',
  },
  {
    slug: 'tencent-micision-smart-marathon',
    title: 'Tencent Micision — Smart Marathon',
    year: '2019 Jan – Apr',
    description:
      "Spearheaded the 0-to-1 product management and design of Tencent's Smart Marathon Big Data Platform. Leveraging Unreal Engine for 3D city mapping and real-time biometric tracking, the system empowered cross-department command centers with instant emergency dispatch capabilities, successfully safeguarding the Yangzhou Marathon.",
    tags: ['0-to-1 Product Management', 'Complex Data Visualization', '3D Technical Design (UE)', 'Requirement Translation'],
    featured: false,
    image: '/smart-Marathon.png',
    hoverVideo: '/videos/smart-marathon-cover.mp4',
  },
  {
    slug: 'tencent-medical-cloud-o2o',
    title: 'Healthcare Service Design',
    year: '2017 – 2018',
    description:
      'Spearheaded an O2O service design solution for Tencent Medical Cloud to optimize the patient experience. By mapping complex medical journeys and integrating digital-physical touchpoints, the project successfully reduced average patient wait times by 4.5 hours.',
    tags: ['Patient Experience', 'O2O Service Design', 'Journey Mapping', 'Field Research'],
    featured: false,
    image: '/healthcare-service-design.png',
  },
  {
    slug: 'lark-global-marketing-website',
    title: 'Lark Global Marketing Website',
    year: '2022 – 2023',
    description:
      'Responsible for the website design of Meego, the project management tool within Lark software, and the design of the Customer Stories section on the global marketing website. Also responsible for creative design, marketing solutions, and new media art support.',
    tags: ['Web Design', 'Interface Design', 'Marketing Process Optimization', 'Front-end Implementation'],
    featured: false,
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    slug: 'before-evening-vr',
    title: 'Before Evening: VR Narrative Game',
    year: '2026',
    description:
      'A VR mystery set in a Chinese high school. Players investigate Yi Linlan\'s past by speaking naturally with AI-powered MetaHuman characters and showing them objects found around the campus. I worked on project management, scene design, and VR interaction programming.',
    tags: ['UE5 Engine', 'VR Development', 'AI-Driven Dialogue', 'MetaHuman'],
    featured: false,
    image: '/before-evening/cover.webp',
    hoverImage: '/before-evening/school-gate.webp',
  },
];
