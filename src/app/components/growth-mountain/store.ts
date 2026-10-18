import { useMemo, useSyncExternalStore } from 'react';
import { projects, ridges, storyLinks, type MountainLineId } from '../../data/growthMountain';
import type { Vec3 } from './layout';

export type MountainState = {
  hoverLine: MountainLineId | null;
  /** Node key: `p:<projectId>`, `r:<roleId>`, or `s:<skillId>`. */
  hoverNode: string | null;
  selected: string | null;
  expandedLine: MountainLineId | null;
  dragging: boolean;
};

let state: MountainState = {
  hoverLine: null,
  hoverNode: null,
  selected: null,
  expandedLine: null,
  dragging: false,
};

const listeners = new Set<() => void>();

export const mountainStore = {
  get: () => state,
  set(partial: Partial<MountainState>) {
    state = { ...state, ...partial };
    listeners.forEach((listener) => listener());
  },
  subscribe(listener: () => void) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
  reset() {
    mountainStore.set({ hoverLine: null, hoverNode: null, selected: null, expandedLine: null });
  },
};

export function useMountain<T extends string | boolean | null>(selector: (s: MountainState) => T): T {
  return useSyncExternalStore(mountainStore.subscribe, () => selector(state));
}

export const projectKey = (id: string) => `p:${id}`;
export const roleKey = (id: string) => `r:${id}`;
export const skillKey = (id: string) => `s:${id}`;

/**
 * Mutable animation state shared by everything inside the canvas.
 * `progress` runs from 0 (mountain) to 1 (unfolded timeline).
 */
export const anim = {
  progress: 0,
  version: 0,
  line: null as MountainLineId | null,
  targets: new Map<string, Vec3>(),
  fitDistance: 22,
};

const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

export function currentPos(key: string, base: Vec3): Vec3 {
  const target = anim.targets.get(key);
  if (!target || anim.progress === 0) return base;
  const t = easeInOut(anim.progress);
  return [
    base[0] + (target[0] - base[0]) * t,
    base[1] + (target[1] - base[1]) * t,
    base[2] + (target[2] - base[2]) * t,
  ];
}

const projectById = Object.fromEntries(projects.map((p) => [p.id, p]));

function lineSet(line: MountainLineId, includeSummitSkills = true) {
  const keys = new Set<string>();
  for (const id of ridges[line]) {
    keys.add(projectKey(id));
    if (!includeSummitSkills && projectById[id].line === 'converge') continue;
    for (const skillId of projectById[id].skillIds) keys.add(skillKey(skillId));
  }
  return keys;
}

function neighbourhood(key: string) {
  const keys = new Set<string>([key]);
  const id = key.slice(2);

  if (key.startsWith('s:')) {
    for (const project of projects) if (project.skillIds.includes(id)) keys.add(projectKey(project.id));
    return keys;
  }

  if (key.startsWith('r:')) {
    for (const project of projects) {
      if (project.roleId !== id) continue;
      keys.add(projectKey(project.id));
      for (const skillId of project.skillIds) keys.add(skillKey(skillId));
    }
    return keys;
  }

  const project = projectById[id];
  keys.add(roleKey(project.roleId));
  for (const skillId of project.skillIds) keys.add(skillKey(skillId));
  if (project.parentId) keys.add(projectKey(project.parentId));
  for (const child of projects) if (child.parentId === id) keys.add(projectKey(child.id));
  for (const link of storyLinks) {
    if (link.from === id) keys.add(projectKey(link.to));
    if (link.to === id) keys.add(projectKey(link.from));
  }
  return keys;
}

export type Focus = {
  /** null = everything visible. */
  visible: Set<string> | null;
  /** null = nothing emphasised; everything visible renders normally. */
  active: Set<string> | null;
  focusLine: MountainLineId | null;
};

export function useFocus(): Focus {
  const hoverLine = useMountain((s) => s.hoverLine);
  const hoverNode = useMountain((s) => s.hoverNode);
  const selected = useMountain((s) => s.selected);
  const expandedLine = useMountain((s) => s.expandedLine);

  return useMemo(() => {
    const visible = expandedLine ? lineSet(expandedLine) : null;
    const node = hoverNode ?? selected;

    if (node) {
      const near = neighbourhood(node);
      const active = visible ? new Set([...near].filter((k) => visible.has(k))) : near;
      return { visible, active, focusLine: expandedLine };
    }
    if (hoverLine && !expandedLine) {
      return { visible, active: lineSet(hoverLine, false), focusLine: hoverLine };
    }
    return { visible, active: null, focusLine: expandedLine };
  }, [hoverLine, hoverNode, selected, expandedLine]);
}

export type Emphasis = 'hidden' | 'dim' | 'normal' | 'active';

export function emphasisOf(focus: Focus, ...keys: string[]): Emphasis {
  if (focus.visible && keys.some((k) => !focus.visible!.has(k))) return 'hidden';
  if (!focus.active) return 'normal';
  return keys.every((k) => focus.active!.has(k)) ? 'active' : 'dim';
}
