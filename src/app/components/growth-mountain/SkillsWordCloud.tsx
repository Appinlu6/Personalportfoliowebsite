import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router';
import { useLanguage } from '../../context/LanguageContext';
import { AXIS_COLOR, mountainLines, projects, skills, type MountainLineId, type Project } from '../../data/growthMountain';

type Anchor = MountainLineId | 'core';

type Word = {
  id: string;
  label: string;
  labelCN: string;
  weight: number;
  lines: MountainLineId[];
  color: string;
  projects: Project[];
  mix: Partial<Record<Anchor, number>>;
};

type Placed = Word & { x: number; y: number; size: number; w: number; h: number };

type Active = { kind: 'word' | 'line'; id: string } | null;

const MAIN_LINES: MountainLineId[] = ['human', 'data', 'growth'];
const GLOW_COLOR = '#2F5BEA';
const FONT_FAMILY = '"Work Sans", ui-sans-serif, system-ui, sans-serif';
const lineById = new Map(mountainLines.map((line) => [line.id, line]));

const shortLabel = (label: string) => label.replace(/\s*[(（][^)）]*[)）]\s*$/, '');

const words: Word[] = skills
  .map((skill) => {
    const used = projects.filter((project) => project.skillIds.includes(skill.id));
    const mix: Partial<Record<Anchor, number>> = {};
    for (const project of used) {
      const anchor: Anchor = MAIN_LINES.includes(project.line as MountainLineId) ? (project.line as MountainLineId) : 'core';
      mix[anchor] = (mix[anchor] ?? 0) + 1;
    }
    const lines = MAIN_LINES.filter((id) => mix[id]);
    const top = Math.max(...lines.map((id) => mix[id] ?? 0), 0);
    const leaders = lines.filter((id) => mix[id] === top);
    return {
      id: skill.id,
      label: shortLabel(skill.label),
      labelCN: shortLabel(skill.labelCN),
      weight: used.length,
      lines,
      color: leaders.length === 1 ? lineById.get(leaders[0])!.color : AXIS_COLOR,
      projects: used,
      mix,
    };
  })
  .filter((word) => word.weight > 0)
  .sort((a, b) => b.weight - a.weight || a.label.localeCompare(b.label));

const maxWeight = Math.max(...words.map((word) => word.weight));

function anchorsFor(width: number, height: number, narrow: boolean): Record<Anchor, { x: number; y: number }> {
  return narrow
    ? {
        human: { x: width * 0.3, y: height * 0.54 },
        data: { x: width * 0.5, y: height * 0.44 },
        growth: { x: width * 0.7, y: height * 0.54 },
        core: { x: width * 0.5, y: height * 0.5 },
      }
    : {
        human: { x: width * 0.3, y: height * 0.56 },
        data: { x: width * 0.5, y: height * 0.42 },
        growth: { x: width * 0.7, y: height * 0.56 },
        core: { x: width * 0.5, y: height * 0.5 },
      };
}

type Box = { x: number; y: number; w: number; h: number };

const overlaps = (a: Box, b: Box) => Math.abs(a.x - b.x) * 2 < a.w + b.w && Math.abs(a.y - b.y) * 2 < a.h + b.h;

const NARROW_WIDTH = 560;

/**
 * Places the largest words first. Each word starts at the weighted centre of its lines
 * and walks out along a spiral until it finds a free spot inside a generous canvas.
 * The result is then cropped to the words, so the cloud stays as tight as the spiral allows.
 */
function layoutWords(width: number, isCN: boolean, measure: (text: string, size: number) => number) {
  const narrow = width < NARROW_WIDTH;
  const canvasHeight = Math.round(narrow ? width * 2.8 : width * 1.2);
  const scales = [1, 0.94, 0.88, 0.82, 0.76];
  let placed: Placed[] = [];
  for (const scale of scales) {
    const attempt = tryLayout(width, canvasHeight, isCN, measure, scale, scale === scales[scales.length - 1]);
    if (attempt) {
      placed = attempt;
      break;
    }
  }
  if (!placed.length) return { placed, height: 0 };

  const pad = 14;
  const minX = Math.min(...placed.map((word) => word.x - word.w / 2));
  const maxX = Math.max(...placed.map((word) => word.x + word.w / 2));
  const minY = Math.min(...placed.map((word) => word.y - word.h / 2));
  const maxY = Math.max(...placed.map((word) => word.y + word.h / 2));
  const dx = width / 2 - (minX + maxX) / 2;
  const dy = pad - minY;
  return {
    placed: placed.map((word) => ({ ...word, x: word.x + dx, y: word.y + dy })),
    height: Math.ceil(maxY - minY + pad * 2),
  };
}

function tryLayout(
  width: number,
  height: number,
  isCN: boolean,
  measure: (text: string, size: number) => number,
  scale: number,
  force: boolean,
): Placed[] | null {
  const narrow = width < NARROW_WIDTH;
  const anchors = anchorsFor(width, height, narrow);
  const maxSize = Math.min(30, Math.max(20, width / 26)) * scale;
  const minSize = Math.min(14, Math.max(12, width / 50)) * Math.max(scale, 0.88);
  const gap = narrow ? 5 : 7;
  const margin = 8;
  const stretch = narrow ? 1.1 : 1.6;
  const placed: Placed[] = [];

  for (const word of words) {
    const total = Object.values(word.mix).reduce((sum, n) => sum + (n ?? 0), 0);
    let tx = 0;
    let ty = 0;
    for (const [anchor, n] of Object.entries(word.mix) as [Anchor, number][]) {
      tx += (anchors[anchor].x * n) / total;
      ty += (anchors[anchor].y * n) / total;
    }
    const size = minSize + (maxSize - minSize) * Math.sqrt((word.weight - 1) / Math.max(maxWeight - 1, 1));
    const pillW = measure(isCN ? word.labelCN : word.label, size) + size * 1.05;
    const pillH = size * 1.65;
    const w = pillW + gap;
    const h = pillH + gap;
    const inside = (box: Box) =>
      box.x - box.w / 2 >= margin && box.x + box.w / 2 <= width - margin && box.y - box.h / 2 >= margin && box.y + box.h / 2 <= height - margin;

    let best: Box | null = null;
    for (let t = 0; t < 4000; t += 0.12) {
      const r = 1.6 * t;
      const box = { x: tx + r * Math.cos(t) * stretch, y: ty + r * Math.sin(t), w, h };
      if (inside(box) && !placed.some((other) => overlaps(box, { ...other, w: other.w + gap, h: other.h + gap }))) {
        best = box;
        break;
      }
      if (r > Math.max(width, height) * 1.5) break;
    }
    if (!best && !force) return null;
    const spot = best ?? { x: Math.min(Math.max(tx, w / 2 + margin), width - w / 2 - margin), y: Math.min(Math.max(ty, h / 2 + margin), height - h / 2 - margin), w, h };
    placed.push({ ...word, x: spot.x, y: spot.y, size, w: pillW, h: pillH });
  }

  return placed;
}

function createMeasure() {
  const context = typeof document === 'undefined' ? null : document.createElement('canvas').getContext('2d');
  return (text: string, size: number) => {
    if (!context) return text.length * size * 0.56;
    context.font = `500 ${size}px ${FONT_FAMILY}`;
    return context.measureText(text).width;
  };
}

function isRelated(word: Word, active: Active, activeWord: Word | undefined) {
  if (!active) return true;
  if (active.kind === 'line') return word.lines.includes(active.id as MountainLineId);
  if (!activeWord) return true;
  return word.id === activeWord.id || word.projects.some((project) => activeWord.projects.includes(project));
}

export function SkillsWordCloud({ className = '' }: { className?: string }) {
  const { isCN } = useLanguage();
  const frameRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [fontsReady, setFontsReady] = useState(false);
  const [hovered, setHovered] = useState<Active>(null);
  const [pinned, setPinned] = useState<Active>(null);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    const observer = new ResizeObserver(([entry]) => setWidth(Math.round(entry.contentRect.width)));
    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let cancelled = false;
    const done = () => !cancelled && setFontsReady(true);
    if (document.fonts?.ready) document.fonts.ready.then(done, done);
    else done();
    return () => {
      cancelled = true;
    };
  }, []);

  const layout = useMemo(
    () => (width > 0 && fontsReady ? layoutWords(width, isCN, createMeasure()) : null),
    [width, isCN, fontsReady],
  );

  const active = hovered ?? pinned;
  const activeWord = active?.kind === 'word' ? words.find((word) => word.id === active.id) : undefined;
  const glows = useMemo(() => {
    if (!layout) return [];
    return mountainLines.flatMap((line) => {
      const members = layout.placed.filter((word) => word.color === line.color);
      if (!members.length) return [];
      const xs = members.flatMap((word) => [word.x - word.w / 2, word.x + word.w / 2]);
      const ys = members.flatMap((word) => [word.y - word.h / 2, word.y + word.h / 2]);
      const [x0, x1, y0, y1] = [Math.min(...xs), Math.max(...xs), Math.min(...ys), Math.max(...ys)];
      return [{ id: line.id, color: line.color, x: (x0 + x1) / 2, y: (y0 + y1) / 2, w: x1 - x0, h: y1 - y0 }];
    });
  }, [layout]);

  const togglePin = (next: NonNullable<Active>) =>
    setPinned((current) => (current?.kind === next.kind && current.id === next.id ? null : next));

  return (
    <div className={`@container relative flex flex-col overflow-hidden bg-white font-['Work_Sans'] ${className}`}>
      <ul className="flex flex-wrap gap-1.5 px-3 pt-3 @xl:px-4 @xl:pt-4">
        {mountainLines.map((line) => {
          const isActive = active?.kind === 'line' && active.id === line.id;
          const faded = active?.kind === 'line' && !isActive;
          return (
            <li key={line.id}>
              <button
                type="button"
                className="flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white/90 px-2.5 py-1 text-left transition-[background-color,opacity] duration-200 hover:bg-neutral-100"
                style={{ opacity: faded ? 0.35 : 1 }}
                onMouseEnter={() => setHovered({ kind: 'line', id: line.id })}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered({ kind: 'line', id: line.id })}
                onBlur={() => setHovered(null)}
                onClick={() => togglePin({ kind: 'line', id: line.id })}
                aria-pressed={pinned?.kind === 'line' && pinned.id === line.id}
              >
                <span className="h-2 w-2 flex-shrink-0 rounded-full" style={{ backgroundColor: line.color }} aria-hidden="true" />
                <span className="text-xs font-medium text-neutral-900">{isCN ? line.labelCN : line.label}</span>
              </button>
            </li>
          );
        })}
      </ul>

      <div
        ref={frameRef}
        className="flex w-full flex-1 items-center"
        style={{ minHeight: layout?.height || 360 }}
        onClick={(event) => {
          if (event.target === event.currentTarget) setPinned(null);
        }}
      >
        {layout && (
          <div
            className="relative isolate mx-auto"
            style={{ width, height: layout.height }}
            role="group"
            aria-label={isCN ? '三条主线的技能词云' : 'Word cloud of skills across the three lines'}
            onClick={(event) => {
              if (event.target === event.currentTarget) setPinned(null);
            }}
          >
            {glows.map((glow) => (
              <span
                key={glow.id}
                aria-hidden="true"
                className="pointer-events-none absolute -z-10 rounded-full blur-3xl"
                style={{
                  left: glow.x - glow.w / 2,
                  top: glow.y - glow.h / 2,
                  width: glow.w,
                  height: glow.h,
                  background: `radial-gradient(closest-side, ${GLOW_COLOR}12, ${GLOW_COLOR}00)`,
                }}
              />
            ))}
            {layout.placed.map((word) => {
              const related = isRelated(word, active, activeWord);
              const focused = activeWord?.id === word.id;
              const label = isCN ? word.labelCN : word.label;
              return (
                <button
                  key={word.id}
                  type="button"
                  aria-label={`${label}, ${word.weight} ${isCN ? '个项目' : word.weight === 1 ? 'project' : 'projects'}`}
                  aria-pressed={pinned?.kind === 'word' && pinned.id === word.id}
                  className="absolute flex items-center justify-center whitespace-nowrap rounded-full font-medium leading-none outline-none transition-[opacity,transform,box-shadow,background-color] duration-200 ease-out focus-visible:ring-2 focus-visible:ring-neutral-900/25"
                  style={{
                    left: word.x - word.w / 2,
                    top: word.y - word.h / 2,
                    width: word.w,
                    height: word.h,
                    fontSize: word.size,
                    fontFamily: FONT_FAMILY,
                    color: word.color,
                    backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(244,244,246,0.6) 100%)',
                    backdropFilter: 'blur(14px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(14px) saturate(180%)',
                    boxShadow: focused ? '0 6px 12px -4px rgba(0,0,0,0.12)' : '0 4px 9px -4px rgba(0,0,0,0.08)',
                    opacity: related ? 1 : 0.2,
                    transform: focused ? 'translateY(-2px) scale(1.04)' : undefined,
                    zIndex: focused ? 1 : undefined,
                  }}
                  onMouseEnter={() => setHovered({ kind: 'word', id: word.id })}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered({ kind: 'word', id: word.id })}
                  onBlur={() => setHovered(null)}
                  onClick={() => togglePin({ kind: 'word', id: word.id })}
                >
                  {label}
                </button>
              );
            })}
          </div>
        )}
      </div>

      <div aria-live="polite">
        {activeWord && (
          <div
            className={`absolute inset-x-3 bottom-3 z-20 rounded-2xl border border-neutral-200 bg-white/95 p-4 shadow-[0_12px_40px_rgba(0,0,0,0.08)] backdrop-blur ${
              pinned?.kind === 'word' && pinned.id === activeWord.id ? '' : 'pointer-events-none'
            }`}
          >
            <p className="text-sm font-semibold text-neutral-900">
              {isCN ? activeWord.labelCN : activeWord.label}
              <span className="ml-2 text-xs font-normal text-neutral-500">
                {isCN ? `${activeWord.weight} 个项目` : `${activeWord.weight} ${activeWord.weight === 1 ? 'project' : 'projects'}`}
              </span>
            </p>
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {activeWord.projects.map((project) => {
                const color = lineById.get(project.line as MountainLineId)?.color ?? AXIS_COLOR;
                const content = (
                  <>
                    <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: color }} aria-hidden="true" />
                    {isCN ? project.titleCN : project.title}
                  </>
                );
                const chip = 'flex items-center gap-1.5 rounded-md border border-neutral-200 px-2 py-1 text-xs text-neutral-700';
                return (
                  <li key={project.id}>
                    {project.caseStudySlug ? (
                      <Link to={`/work/${project.caseStudySlug}`} className={`${chip} transition-colors hover:border-neutral-400`}>
                        {content}
                      </Link>
                    ) : (
                      <span className={chip}>{content}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
