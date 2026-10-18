import {
  CONVERGE_COLOR,
  FOUNDATION_COLOR,
  MOUNTAIN_BASE_YEAR,
  MOUNTAIN_NOW_YEAR,
  MOUNTAIN_PEAK_YEAR,
  mountainLines,
  projects,
  roles,
  skills,
  type NodeLineId,
  type Project,
  type Role,
  type Skill,
} from '../../data/growthMountain';

export type Vec3 = [number, number, number];

/** Recent years get more height so the converging top of the mountain stays readable. */
const EARLY_UNITS_PER_YEAR = 0.75;
const RECENT_UNITS_PER_YEAR = 1.55;
const RECENT_FROM_YEAR = 2023;

export const BASE_RADIUS = 6.4;

const deg = (d: number) => (d * Math.PI) / 180;

const LINE_ANGLE: Record<NodeLineId, number> = {
  data: deg(200),
  growth: deg(330),
  human: deg(85),
  foundation: deg(265),
  converge: 0,
};

/** Hand-tuned offsets so nodes on the same ridge at similar heights do not overlap. */
const ANGLE_OFFSET: Record<string, number> = {
  'smart-hospital': deg(-24),
  'smart-marathon': deg(20),
  micision: deg(-2),
  mandarin: deg(-14),
  'multimodal-har': deg(10),
  'marketing-cloud': deg(-12),
  lark: deg(10),
  'chillttoo-products': deg(-6),
  'chillttoo-community': deg(8),
  'before-evening': deg(-10),
  'bauhinia-mind': deg(8),
};

export function yearToY(year: number) {
  const early = Math.min(year, RECENT_FROM_YEAR) - MOUNTAIN_BASE_YEAR;
  const recent = Math.max(year - RECENT_FROM_YEAR, 0);
  return early * EARLY_UNITS_PER_YEAR + recent * RECENT_UNITS_PER_YEAR;
}

export const PEAK_HEIGHT = yearToY(MOUNTAIN_PEAK_YEAR);

/** Mountain silhouette: wide at the base, narrowing towards the peak. */
export function radiusAt(y: number) {
  const t = Math.min(Math.max(y / PEAK_HEIGHT, 0), 1);
  return BASE_RADIUS * Math.pow(1 - t, 0.85);
}

/** 0 at the base, 1 at the peak. Drives brightness and size. */
export function heightRatio(y: number) {
  return Math.min(Math.max(y / PEAK_HEIGHT, 0), 1);
}

export function lineColor(line: NodeLineId) {
  if (line === 'foundation') return FOUNDATION_COLOR;
  if (line === 'converge') return CONVERGE_COLOR;
  return mountainLines.find((l) => l.id === line)!.color;
}

export type PlacedProject = Project & {
  position: Vec3;
  angle: number;
  radius: number;
  size: number;
  color: string;
  t: number;
  /** Where this project meets its role on the central axis. */
  axisPoint: Vec3;
};

export type PlacedRole = Role & {
  startY: number;
  endY: number;
  /** Labels are nudged apart when roles start close together. */
  labelY: number;
  t: number;
};

export type PlacedSkill = Skill & {
  position: Vec3;
  projectIds: string[];
  shared: boolean;
};

const ROLE_LABEL_GAP = 0.56;

function placeRoles(): PlacedRole[] {
  let lastLabelY = -Infinity;
  return roles.map((role) => {
    const startY = yearToY(role.start);
    const endY = yearToY(role.end ?? MOUNTAIN_NOW_YEAR);
    const labelY = Math.max(startY, lastLabelY + ROLE_LABEL_GAP);
    lastLabelY = labelY;
    return { ...role, startY, endY, labelY, t: heightRatio(startY) };
  });
}

export const placedRoles: PlacedRole[] = placeRoles();

export const roleById = Object.fromEntries(placedRoles.map((r) => [r.id, r])) as Record<string, PlacedRole>;

function placeProject(project: Project): PlacedProject {
  const y = yearToY(project.anchor);
  const t = heightRatio(y);
  const angle = LINE_ANGLE[project.line] + (ANGLE_OFFSET[project.id] ?? 0);
  const radius =
    project.line === 'converge' ? 0 : project.line === 'foundation' ? radiusAt(y) * 0.8 : radiusAt(y) * 0.9;
  const size = project.id === 'micision' || project.line === 'converge' ? 0.3 : 0.15 + t * 0.1;
  const role = roleById[project.roleId];

  return {
    ...project,
    position: [Math.cos(angle) * radius, y, Math.sin(angle) * radius],
    angle,
    radius,
    size,
    color: lineColor(project.line),
    t,
    axisPoint: [0, Math.min(Math.max(y, role.startY), role.endY), 0],
  };
}

export const placedProjects: PlacedProject[] = projects.map(placeProject);

export const projectById = Object.fromEntries(placedProjects.map((p) => [p.id, p])) as Record<
  string,
  PlacedProject
>;

function placeSkills(): PlacedSkill[] {
  const owners = new Map<string, string[]>();
  for (const project of projects) {
    for (const skillId of project.skillIds) {
      owners.set(skillId, [...(owners.get(skillId) ?? []), project.id]);
    }
  }

  const singlesByParent = new Map<string, string[]>();
  for (const skill of skills) {
    const ids = owners.get(skill.id) ?? [];
    if (ids.length === 1) singlesByParent.set(ids[0], [...(singlesByParent.get(ids[0]) ?? []), skill.id]);
  }

  return skills.map((skill, index) => {
    const ids = owners.get(skill.id) ?? [];
    const linked = ids.map((id) => projectById[id]);

    if (linked.length === 1) {
      const parent = linked[0];
      const siblings = singlesByParent.get(parent.id)!;
      const i = siblings.indexOf(skill.id);
      const spread = (i - (siblings.length - 1) / 2) * deg(17);
      const angle = parent.angle + spread;
      const radius = parent.radius + 1.5;
      const y = parent.position[1] + (i % 2 === 0 ? 0.28 : -0.28);
      return {
        ...skill,
        position: [Math.cos(angle) * radius, y, Math.sin(angle) * radius],
        projectIds: ids,
        shared: false,
      };
    }

    const y = linked.reduce((sum, p) => sum + p.position[1], 0) / linked.length;
    const mx = linked.reduce((sum, p) => sum + p.position[0], 0) / linked.length;
    const mz = linked.reduce((sum, p) => sum + p.position[2], 0) / linked.length;
    const jitter = ((index * 37) % 9 - 4) * deg(5);
    const angle = (Math.hypot(mx, mz) < 0.2 ? linked[0].angle : Math.atan2(mz, mx)) + jitter;
    const radius = radiusAt(y) + 1.4;

    return {
      ...skill,
      position: [Math.cos(angle) * radius, y, Math.sin(angle) * radius],
      projectIds: ids,
      shared: true,
    };
  });
}

export const placedSkills: PlacedSkill[] = placeSkills();

export const yearRings = Array.from(
  { length: Math.floor(MOUNTAIN_NOW_YEAR - MOUNTAIN_BASE_YEAR) + 1 },
  (_, i) => MOUNTAIN_BASE_YEAR + i,
);
