import { Link } from 'react-router';
import { motion } from 'framer-motion';
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
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

const cardFadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <Link to={`/work/${project.slug}`} className="block group cursor-pointer h-full">
      <div className="bg-card rounded-xl overflow-hidden border border-border hover:border-[var(--warm-accent)] transition-all duration-300 h-full flex flex-col hover:shadow-[0_18px_45px_rgba(210,116,92,0.16)]">
        <div className="aspect-[16/9] bg-muted overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} project visual`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center gap-3 mb-2">
            {project.featured && (
              <span
                className="text-xs px-3 py-1 rounded-full"
                style={{ backgroundColor: '#F5E6DC', color: 'var(--warm-accent)' }}
              >
                Latest
              </span>
            )}
            <span className="text-xs text-muted-foreground">{project.year}</span>
          </div>
          <h3 className="mb-2 font-medium" style={{ fontSize: '1.125rem' }}>
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-3 flex-1 line-clamp-3">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
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
  const gridClass =
    columns === 3
      ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'
      : 'grid grid-cols-1 md:grid-cols-2 gap-5';

  if (!animated) {
    return (
      <div className={`${gridClass} ${className}`.trim()}>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className={`${gridClass} ${className}`.trim()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={cardStagger}
    >
      {projects.map((project) => (
        <motion.div
          key={project.slug}
          variants={cardFadeUp}
          transition={{ duration: 0.42, ease: 'easeOut' }}
          whileHover={{ y: -6 }}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </motion.div>
  );
}
