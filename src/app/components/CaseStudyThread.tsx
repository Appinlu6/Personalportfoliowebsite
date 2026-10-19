import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import {
  mountainLines,
  projects,
  ridges,
  skills,
  storyLinks,
  type MountainLineId,
  type Project,
} from '../data/growthMountain';

function findProject(slug: string) {
  return projects.find((project) => project.caseStudySlug === slug);
}

function findLine(project: Project | undefined) {
  if (!project) return undefined;
  return mountainLines.find((line) => line.id === project.line);
}

const projectById = new Map(projects.map((project) => [project.id, project]));
const skillById = new Map(skills.map((skill) => [skill.id, skill]));

/** The main line a case study sits on, for the page header. */
export function MainLineTag({ slug, className = '' }: { slug: string; className?: string }) {
  const { isCN } = useLanguage();
  const line = findLine(findProject(slug));
  if (!line) return null;

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className="h-2 w-2 flex-shrink-0 rounded-full" style={{ backgroundColor: line.color }} aria-hidden="true" />
      {isCN ? line.labelCN : line.label}
    </span>
  );
}

function ProjectLink({ project, children }: { project: Project; children: ReactNode }) {
  if (!project.caseStudySlug) return <>{children}</>;
  return (
    <Link to={`/work/${project.caseStudySlug}`} className="group/link inline-flex items-center gap-1.5 hover:text-[var(--project-accent)]">
      {children}
      <ArrowUpRight size={15} strokeWidth={1.7} className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
    </Link>
  );
}

/** Closing section of a case study: where the project sits on the Growth & Skills Map and what it connects to. */
export function CaseStudyThread({ slug }: { slug: string }) {
  const { isCN } = useLanguage();
  const project = findProject(slug);
  const line = findLine(project);
  if (!project || !line) return null;

  const ridge = ridges[project.line as MountainLineId].map((id) => projectById.get(id)).filter((p): p is Project => Boolean(p));
  const step = ridge.findIndex((p) => p.id === project.id);
  const next = step >= 0 ? ridge[step + 1] : undefined;

  const connections = storyLinks
    .filter((link) => link.from === project.id || link.to === project.id)
    .map((link) => ({
      link,
      other: projectById.get(link.from === project.id ? link.to : link.from),
      outgoing: link.from === project.id,
    }))
    .filter((item): item is typeof item & { other: Project } => Boolean(item.other));

  const label = (p: Project) => (isCN ? p.titleCN : p.title);
  const border = 'color-mix(in srgb, var(--project-accent) 22%, transparent)';

  return (
    <section className="mt-16 border-t pt-10 md:mt-24 md:pt-12" style={{ borderColor: border }}>
      <p className="mb-4 text-sm font-medium text-[var(--project-accent)]">
        {isCN ? '成长与能力图谱' : 'Growth & Skills Map'}
      </p>
      <h2 className="max-w-[46rem] text-[clamp(2.1rem,4.4vw,4.2rem)] font-medium leading-[0.98] tracking-[-0.045em]">
        {isCN ? '这条线通向哪里' : 'Where this leads'}
      </h2>

      <div className="mt-8 grid gap-6 md:mt-10 lg:grid-cols-12">
        <div className="rounded-2xl border bg-[var(--project-thread-surface,rgba(255,255,255,0.6))] p-6 md:p-7 lg:col-span-5" style={{ borderColor: border }}>
          <p className="flex items-center gap-2 text-sm font-medium">
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: line.color }} aria-hidden="true" />
            {isCN ? line.labelCN : line.label}
          </p>
          <p className="mt-3 text-lg leading-7 tracking-[-0.01em]">{isCN ? line.taglineCN : line.tagline}</p>
          {step >= 0 && (
            <p className="mt-2 text-sm text-[var(--project-muted)]">
              {isCN ? `这条线上的第 ${step + 1} 站，共 ${ridge.length} 站` : `Stop ${step + 1} of ${ridge.length} on this line`}
            </p>
          )}
          <ol className="mt-6 space-y-0">
            {ridge.map((p, index) => {
              const current = p.id === project.id;
              return (
                <li key={p.id} className="relative flex gap-4 pb-4 last:pb-0">
                  {index < ridge.length - 1 && (
                    <span className="absolute left-[5px] top-4 h-full w-px" style={{ backgroundColor: border }} aria-hidden="true" />
                  )}
                  <span
                    className="relative mt-1.5 h-[11px] w-[11px] flex-shrink-0 rounded-full border-2"
                    style={{ borderColor: line.color, backgroundColor: current ? line.color : 'var(--project-thread-dot, white)' }}
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <p className={`text-sm leading-6 ${current ? 'font-semibold' : ''}`}>
                      {current ? label(p) : <ProjectLink project={p}>{label(p)}</ProjectLink>}
                    </p>
                    <p className="text-xs text-[var(--project-muted)]">{isCN ? p.periodCN : p.period}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="grid content-start gap-5 lg:col-span-7">
          {next && (
            <article className="rounded-2xl border bg-[var(--project-thread-surface,rgba(255,255,255,0.6))] p-6 md:p-7" style={{ borderColor: border }}>
              <p className="text-sm font-medium text-[var(--project-accent)]">{isCN ? '这条线的下一站' : 'Next on this line'}</p>
              <h3 className="mt-3 text-xl font-medium tracking-[-0.02em]">
                <ProjectLink project={next}>{label(next)}</ProjectLink>
              </h3>
              {(isCN ? project.bridgeCN : project.bridge) && (
                <p className="mt-3 text-sm leading-6 text-[var(--project-muted)]">{isCN ? project.bridgeCN : project.bridge}</p>
              )}
            </article>
          )}

          {connections.map(({ link, other, outgoing }) => {
            const skill = link.skillId ? skillById.get(link.skillId) : undefined;
            return (
              <article key={`${link.from}-${link.to}`} className="rounded-2xl border bg-[var(--project-thread-surface,rgba(255,255,255,0.6))] p-6 md:p-7" style={{ borderColor: border }}>
                <p className="text-sm font-medium text-[var(--project-accent)]">
                  {outgoing ? (isCN ? '延续到' : 'Carried forward to') : isCN ? '源自' : 'Built on'}
                </p>
                <h3 className="mt-3 text-xl font-medium tracking-[-0.02em]">
                  <ProjectLink project={other}>{label(other)}</ProjectLink>
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--project-muted)]">{isCN ? link.noteCN : link.note}</p>
                {skill && (
                  <p className="mt-4 inline-flex rounded-full px-3 py-1 text-xs" style={{ backgroundColor: 'color-mix(in srgb, var(--project-accent) 10%, transparent)' }}>
                    {isCN ? skill.labelCN : skill.label}
                  </p>
                )}
              </article>
            );
          })}

          <div className="rounded-2xl border bg-[var(--project-thread-surface,rgba(255,255,255,0.6))] p-6 md:p-7" style={{ borderColor: border }}>
            <p className="text-sm font-medium text-[var(--project-accent)]">{isCN ? '这个项目沉淀的能力' : 'Skills from this project'}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.skillIds.map((id) => {
                const skill = skillById.get(id);
                if (!skill) return null;
                return (
                  <span key={id} className="rounded-full border px-3 py-1 text-xs" style={{ borderColor: border }}>
                    {isCN ? skill.labelCN : skill.label}
                  </span>
                );
              })}
            </div>
            <Link
              to="/about#skills"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--project-accent)] transition-opacity hover:opacity-75"
            >
              {isCN ? '查看完整的成长与能力图谱' : 'Explore the full Growth & Skills Map'}
              <ArrowRight size={16} strokeWidth={1.7} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
