import { Suspense, lazy, useEffect, useRef, useState, type ReactNode } from 'react';
import { Link } from 'react-router';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import {
  mountainLines,
  projects,
  roles,
  skills,
  type MountainLineId,
  type Project,
  type Role,
} from '../../data/growthMountain';
import { useLanguage } from '../../context/LanguageContext';
import { mountainStore, useMountain } from './store';
import { lineColor } from './layout';

const GrowthMountainScene = lazy(() => import('./GrowthMountainScene'));

const skillById = Object.fromEntries(skills.map((s) => [s.id, s]));
const roleById = Object.fromEntries(roles.map((r) => [r.id, r]));

const isMouse = (event: { pointerType: string }) => event.pointerType === 'mouse';

function supportsWebGL() {
  try {
    const canvas = document.createElement('canvas');
    return Boolean(canvas.getContext('webgl2') ?? canvas.getContext('webgl'));
  } catch {
    return false;
  }
}

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const media = window.matchMedia(query);
    const onChange = () => setMatches(media.matches);
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, [query]);
  return matches;
}

/** `near` latches once the element approaches the viewport; `visible` tracks it live. */
function useViewport(ref: React.RefObject<HTMLElement | null>, enabled: boolean) {
  const [near, setNear] = useState(!enabled);
  const [visible, setVisible] = useState(!enabled);
  useEffect(() => {
    if (!enabled || !ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
        if (entry.isIntersecting) setNear(true);
      },
      { rootMargin: '300px 0px' },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [enabled, ref]);
  return { near, visible };
}

function Legend() {
  const { isCN } = useLanguage();
  const hoverLine = useMountain((s) => s.hoverLine);
  const expandedLine = useMountain((s) => s.expandedLine);

  return (
    <ul className="flex flex-wrap gap-1.5 @xl:mt-4 @xl:block @xl:space-y-1">
      {mountainLines.map((line) => {
        const active = hoverLine === line.id || expandedLine === line.id;
        const faded = (hoverLine || expandedLine) && !active;
        return (
          <li key={line.id}>
            <button
              type="button"
              className="flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white/90 px-2.5 py-1 text-left transition-[background-color,opacity] duration-200 hover:bg-neutral-100 @xl:w-full @xl:items-start @xl:gap-2.5 @xl:rounded-lg @xl:border-0 @xl:bg-transparent @xl:px-2 @xl:py-1.5"
              style={{ opacity: faded ? 0.35 : 1 }}
              onPointerEnter={(e) => isMouse(e) && mountainStore.set({ hoverLine: line.id })}
              onPointerLeave={(e) => isMouse(e) && mountainStore.set({ hoverLine: null })}
              onClick={() =>
                mountainStore.set({
                  expandedLine: expandedLine === line.id ? null : line.id,
                  selected: null,
                  hoverLine: null,
                })
              }
            >
              <span className="h-2 w-2 flex-shrink-0 rounded-full @xl:mt-1.5" style={{ backgroundColor: line.color }} />
              <span>
                <span className="block text-xs font-medium text-neutral-900 @xl:text-sm">{isCN ? line.labelCN : line.label}</span>
                <span className="hidden max-w-[13rem] text-balance text-xs leading-5 text-neutral-500 @4xl:block">
                  {isCN ? line.taglineCN : line.tagline}
                </span>
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

function ExpandedHeader({ lineId }: { lineId: MountainLineId }) {
  const { isCN } = useLanguage();
  const line = mountainLines.find((l) => l.id === lineId)!;

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3 }}
      className="absolute left-1/2 top-4 z-20 flex w-[min(24rem,calc(100%-2rem))] -translate-x-1/2 flex-col items-center text-center font-['Work_Sans'] @xl:top-6"
    >
      <span className="flex items-center gap-2 text-base font-semibold @xl:text-lg" style={{ color: line.color }}>
        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: line.color }} />
        {isCN ? line.labelCN : line.label}
      </span>
      <span className="mt-1 text-xs text-neutral-500 @xl:text-sm">{isCN ? line.taglineCN : line.tagline}</span>
      <button
        type="button"
        onClick={() => mountainStore.set({ expandedLine: null, selected: null })}
        className="mt-3 rounded-full border border-neutral-200 bg-white px-3.5 py-1 text-xs text-neutral-700 transition-colors hover:border-neutral-400"
      >
        {isCN ? '返回总览' : 'Back to overview'}
      </button>
    </motion.div>
  );
}

function CardShell({ nodeKey, children }: { nodeKey: string; children: ReactNode }) {
  const { isCN } = useLanguage();
  return (
    <motion.aside
      key={nodeKey}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      className="absolute inset-x-3 bottom-3 z-20 max-h-[50%] overflow-y-auto overscroll-contain rounded-2xl border border-neutral-200 bg-white/95 p-4 font-['Work_Sans'] shadow-[0_12px_40px_rgba(0,0,0,0.08)] backdrop-blur @xl:inset-x-auto @xl:bottom-6 @xl:right-6 @xl:max-h-[calc(100%-3rem)] @xl:w-[22rem] @xl:p-5"
    >
      <button
        type="button"
        aria-label={isCN ? '关闭' : 'Close'}
        onClick={() => mountainStore.set({ selected: null })}
        className="absolute right-2 top-2 rounded-full p-2 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-700 @xl:right-3 @xl:top-3 @xl:p-1"
      >
        <X className="h-4 w-4" />
      </button>
      {children}
    </motion.aside>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const { isCN } = useLanguage();
  const color = lineColor(project.line);
  const role = roleById[project.roleId];

  return (
    <>
      <div className="flex items-center gap-2 text-xs text-neutral-500">
        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
        {isCN ? project.periodCN : project.period}
      </div>
      <h3 className="mt-2 pr-6 text-base font-semibold leading-snug text-neutral-900 @xl:text-lg">
        {isCN ? project.titleCN : project.title}
      </h3>
      <button
        type="button"
        onClick={() => mountainStore.set({ selected: `r:${role.id}` })}
        className="mt-1 text-left text-xs text-neutral-500 underline-offset-2 hover:text-neutral-800 hover:underline"
      >
        {isCN ? role.titleCN : role.title}
      </button>
      <p className="mt-3 text-[13px] leading-5 text-neutral-600 @xl:text-sm @xl:leading-6">{isCN ? project.summaryCN : project.summary}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.skillIds.map((id) => (
          <span key={id} className="rounded-md border border-neutral-200 px-2 py-0.5 text-xs text-neutral-600">
            {isCN ? skillById[id].labelCN : skillById[id].label}
          </span>
        ))}
      </div>
      {project.caseStudySlug && (
        <Link
          to={`/work/${project.caseStudySlug}`}
          className="mt-4 inline-block text-sm font-medium underline underline-offset-4"
          style={{ color }}
        >
          {isCN ? '查看案例' : 'View case study'}
        </Link>
      )}
    </>
  );
}

function RoleCard({ role }: { role: Role }) {
  const { isCN } = useLanguage();
  const roleProjects = projects.filter((p) => p.roleId === role.id);

  return (
    <>
      <div className="flex items-center gap-2 text-xs text-neutral-500">
        <span className="h-2 w-2 rounded-full bg-neutral-800" />
        {isCN ? role.periodCN : role.period}
      </div>
      <h3 className="mt-2 pr-6 text-base font-semibold leading-snug text-neutral-900 @xl:text-lg">{isCN ? role.titleCN : role.title}</h3>
      <p className="mt-2 text-[13px] leading-5 text-neutral-600 @xl:text-sm @xl:leading-6">{isCN ? role.summaryCN : role.summary}</p>
      <p className="mt-4 text-[11px] uppercase tracking-[0.14em] text-neutral-400">{isCN ? '项目' : 'Projects'}</p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {roleProjects.map((project) => (
          <button
            key={project.id}
            type="button"
            onClick={() => mountainStore.set({ selected: `p:${project.id}`, hoverNode: null })}
            onPointerEnter={(e) => isMouse(e) && mountainStore.set({ hoverNode: `p:${project.id}` })}
            onPointerLeave={(e) => isMouse(e) && mountainStore.set({ hoverNode: null })}
            className="flex items-center gap-1.5 rounded-md border border-neutral-200 px-2 py-1 text-xs text-neutral-700 transition-colors hover:border-neutral-400 @xl:py-0.5"
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: lineColor(project.line) }} />
            {isCN ? project.labelCN : project.label}
          </button>
        ))}
      </div>
    </>
  );
}

function NodeCard({ nodeKey }: { nodeKey: string }) {
  const id = nodeKey.slice(2);
  const project = nodeKey.startsWith('p:') ? projects.find((p) => p.id === id) : undefined;
  const role = nodeKey.startsWith('r:') ? roleById[id] : undefined;
  if (!project && !role) return null;

  return (
    <CardShell nodeKey={nodeKey}>
      {project ? <ProjectCard project={project} /> : <RoleCard role={role!} />}
    </CardShell>
  );
}

function Hint() {
  const { isCN } = useLanguage();
  const expandedLine = useMountain((s) => s.expandedLine);
  const selected = useMountain((s) => s.selected);
  const touch = useMediaQuery('(hover: none)');

  if (!expandedLine) return null;
  const text = touch
    ? isCN ? '点按节点查看概要' : 'Tap a node for details'
    : isCN ? '点击节点查看概要 · Esc 返回' : 'Click a node for details · Esc to go back';

  return (
    <p
      className={`pointer-events-none absolute bottom-3 left-1/2 z-20 w-max max-w-[calc(100%-2rem)] -translate-x-1/2 rounded-full bg-white/85 px-3 py-1 text-center font-['Work_Sans'] text-[11px] text-neutral-400 transition-opacity duration-200 @xl:bottom-4 @xl:text-xs ${
        selected ? 'opacity-0 @xl:opacity-100' : ''
      }`}
    >
      {text}
    </p>
  );
}

type GrowthSkillsMapProps = {
  /** `page` fills the viewport; `embedded` fills its parent and lives inside a scrolling page. */
  variant?: 'page' | 'embedded';
  /** Shown instead of the 3D map when WebGL is unavailable. */
  fallback?: ReactNode;
  /** Sizes and frames the embedded map; not applied to the fallback. */
  className?: string;
};

export function GrowthSkillsMap({ variant = 'embedded', fallback = null, className = '' }: GrowthSkillsMapProps) {
  const { isCN } = useLanguage();
  const selected = useMountain((s) => s.selected);
  const expandedLine = useMountain((s) => s.expandedLine);
  const embedded = variant === 'embedded';
  const container = useRef<HTMLDivElement>(null);
  const { near, visible } = useViewport(container, embedded);
  const [webgl] = useState(supportsWebGL);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      const { selected: current, expandedLine: line } = mountainStore.get();
      if (current) mountainStore.set({ selected: null });
      else if (line) mountainStore.set({ expandedLine: null });
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      mountainStore.reset();
    };
  }, []);

  if (!webgl) return <>{fallback}</>;

  return (
    <div
      ref={container}
      className={`@container relative isolate overflow-hidden bg-white ${embedded ? `w-full ${className}` : 'h-screen w-screen'}`}
    >
      {near && (
        <Suspense fallback={null}>
          <GrowthMountainScene embedded={embedded} active={visible} />
        </Suspense>
      )}

      <AnimatePresence>
        {!expandedLine && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`absolute inset-x-3 top-3 z-20 font-['Work_Sans'] transition-opacity duration-200 @xl:inset-x-auto @xl:left-4 @xl:top-6 @xl:max-w-xs ${
              selected ? 'pointer-events-none opacity-0 @xl:pointer-events-auto @xl:opacity-100' : ''
            }`}
          >
            {embedded ? (
              <p className="hidden px-2 text-sm font-semibold text-neutral-900 @xl:block">
                {isCN ? '成长与能力图谱' : 'Growth & Skills Map'}
              </p>
            ) : (
              <>
                <p className="hidden px-2 text-[11px] uppercase tracking-[0.18em] text-neutral-400 @xl:block">Prototype</p>
                <h1 className="mb-2 px-2 text-lg font-semibold text-neutral-900 @xl:mb-0 @xl:mt-1 @xl:text-xl">
                  {isCN ? '成长与能力图谱' : 'Growth & Skills Map'}
                </h1>
              </>
            )}
            <Legend />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>{expandedLine && <ExpandedHeader lineId={expandedLine} />}</AnimatePresence>
      <AnimatePresence>{selected && <NodeCard nodeKey={selected} />}</AnimatePresence>
      <Hint />
    </div>
  );
}
