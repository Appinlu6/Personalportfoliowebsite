import { useRef } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/projects';

type ProjectGridProps = {
  columns?: 2 | 3;
  className?: string;
  animated?: boolean;
};

const cardStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.01,
    },
  },
};

const cardFadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const projectCopyCN: Record<string, { title: string; year: string; tags: string[] }> = {
  'bauhinia-mind': {
    title: 'Bauhinia-Mind',
    year: '2026 年 1 月 – 4 月',
    tags: ['用户研究', '服务设计', 'AI/ML', '数字健康'],
  },
  'tencent-micision-smart-hospital': {
    title: '腾讯觅影 — 智慧医院',
    year: '2018 – 2021',
    tags: ['0-1 产品设计', '数据可视化', '医疗 UX', '设计领导力'],
  },
  'tencent-medical-cloud-o2o': {
    title: '医疗服务设计',
    year: '2017 – 2018',
    tags: ['患者体验', 'O2O 服务设计', '旅程地图', '田野调研'],
  },
  'tencent-micision-smart-marathon': {
    title: '腾讯觅影 — 智慧马拉松',
    year: '2019 年 1 月 – 4 月',
    tags: ['0-1 产品管理', '复杂数据可视化', 'UE 3D 技术设计', '需求转译'],
  },
  'lark-global-marketing-website': {
    title: 'Lark 全球营销官网',
    year: '2022 – 2023',
    tags: ['网页设计', '界面设计', '营销流程优化', '前端落地'],
  },
  'before-evening-vr': {
    title: 'BEFORE EVENING — AI 驱动 VR 叙事体验',
    year: '2026 年 1 月 – 4 月',
    tags: ['UE5 引擎', 'VR 开发', 'AI 对话系统', 'MCP 开发'],
  },
};

function ProjectCard({
  project,
  isCN,
}: {
  project: (typeof projects)[number];
  isCN: boolean;
}) {
  const localized = isCN ? projectCopyCN[project.slug] : undefined;
  const title = localized?.title ?? project.title;
  const year = localized?.year ?? project.year;
  const tags = localized?.tags ?? project.tags;
  const hoverVideoRef = useRef<HTMLVideoElement | null>(null);
  const shouldUseHoverVideo = !project.hoverImage && Boolean(project.hoverVideo);

  const playHoverVideo = () => {
    const videoEl = hoverVideoRef.current;
    if (!videoEl) return;
    videoEl.currentTime = 0;
    void videoEl.play().catch(() => {
      // Ignore autoplay prevention errors on unsupported environments.
    });
  };

  const resetHoverVideo = () => {
    const videoEl = hoverVideoRef.current;
    if (!videoEl) return;
    videoEl.pause();
    videoEl.currentTime = 0;
  };

  return (
    <Link
      to={`/work/${project.slug}`}
      className="block group cursor-pointer h-full"
      onMouseEnter={shouldUseHoverVideo ? playHoverVideo : undefined}
      onMouseLeave={shouldUseHoverVideo ? resetHoverVideo : undefined}
      onFocus={shouldUseHoverVideo ? playHoverVideo : undefined}
      onBlur={shouldUseHoverVideo ? resetHoverVideo : undefined}
    >
      <div className="bg-card rounded-xl overflow-hidden border border-border hover:border-[var(--warm-accent)] transition-all duration-300 h-full flex flex-col hover:shadow-[0_18px_45px_rgba(210,116,92,0.16)]">
        <div className="relative aspect-[4/3] bg-muted overflow-hidden">
          <img
            src={project.image}
            alt={`${title} project visual`}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {project.hoverImage && (
            <img
              src={project.hoverImage}
              alt=""
              className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden="true"
            />
          )}
          {!project.hoverImage && project.hoverVideo && (
            <video
              ref={hoverVideoRef}
              className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              src={project.hoverVideo}
              poster={project.image}
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden="true"
            />
          )}
        </div>
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center gap-3 mb-2">
            {project.featured && (
              <span
                className="text-xs px-3 py-1 rounded-full"
                style={{ backgroundColor: '#F5E6DC', color: 'var(--warm-accent)' }}
              >
                {isCN ? '最新' : 'Latest'}
              </span>
            )}
            <span className="text-xs text-muted-foreground">{year}</span>
          </div>
          <h3 className="mb-4 font-medium" style={{ fontSize: '1.125rem' }}>
            {title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export function ProjectGrid({ columns = 3, className = '', animated = true }: ProjectGridProps) {
  const { isCN } = useLanguage();

  const gridClass =
    columns === 3
      ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'
      : 'grid grid-cols-1 md:grid-cols-2 gap-5';

  if (!animated) {
    return (
      <div className={`${gridClass} ${className}`.trim()}>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} isCN={isCN} />
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className={`${gridClass} ${className}`.trim()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={cardStagger}
    >
      {projects.map((project) => (
        <motion.div
          key={project.slug}
          variants={cardFadeUp}
          transition={{ duration: 0.32, ease: 'easeOut' }}
          whileHover={{ y: -6 }}
        >
          <ProjectCard project={project} isCN={isCN} />
        </motion.div>
      ))}
    </motion.div>
  );
}
