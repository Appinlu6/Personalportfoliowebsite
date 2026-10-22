import { useEffect, useMemo, useRef, useState, type ComponentProps } from 'react';
import { Canvas, useFrame, useThree, type ThreeEvent } from '@react-three/fiber';
import { Html, Line, OrbitControls } from '@react-three/drei';
import {
  CatmullRomCurve3,
  Color,
  DoubleSide,
  Vector3,
  type BufferAttribute,
  type Group,
  type Material,
  type Mesh,
  type PerspectiveCamera,
  type Points,
} from 'three';
import type { Line2, LineMaterial } from 'three-stdlib';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import { AXIS_COLOR, MOUNTAIN_NOW_YEAR, ridges, storyLinks, type MountainLineId } from '../../data/growthMountain';
import { useLanguage } from '../../context/LanguageContext';
import {
  PEAK_HEIGHT,
  projectById,
  lineColor,
  placedProjects,
  placedRoles,
  placedSkills,
  radiusAt,
  roleById,
  yearRings,
  yearToY,
  type PlacedProject,
  type PlacedRole,
  type PlacedSkill,
  type Vec3,
} from './layout';
import {
  anim,
  currentPos,
  emphasisOf,
  projectKey,
  mountainStore,
  roleKey,
  skillKey,
  useFocus,
  useMountain,
  type Emphasis,
} from './store';

const WHITE = new Color('#ffffff');
const GROUP_OFFSET = new Vector3(0, -PEAK_HEIGHT / 2, 0);
const BASE_DISTANCE = 22;
const OVERVIEW_ELEVATION = 3.5 / BASE_DISTANCE;
const UNFOLD_SECONDS = 0.9;
/** Half the width the overview must keep in frame: the base ring plus its year labels. */
const FIT_HALF_WIDTH = 8.4;

/** Lower nodes fade towards the background; higher nodes keep their full colour. */
function fadeByHeight(hex: string, t: number) {
  return new Color(hex).lerp(WHITE, 0.55 * (1 - t)).getStyle();
}

function setCursor(pointer: boolean) {
  document.body.style.cursor = pointer ? 'pointer' : '';
}

/** Touch has no hover; a tap would otherwise leave a sticky hover state behind. */
const canHover = (e: ThreeEvent<PointerEvent>) => e.nativeEvent.pointerType !== 'touch';

const NARROW_WIDTH = 480;

/** Portrait viewports lay the unfolded timeline out vertically. */
const COLUMN_ASPECT = 0.8;

/** Where a selected node settles on portrait viewports, as a fraction of the view height above centre. */
const PORTRAIT_FOCUS_HEIGHT = 0.17;

/** Pixel budget of the vertical timeline: skill labels | skill dots, edges, project nodes | project labels. */
const COLUMN = {
  margin: 12,
  skillLabel: 144,
  skillGap: 8,
  edge: 40,
  labelOffset: 14,
  projectLabel: 128,
  headerSpace: 150,
  /** Skill labels are short single rows, so they may start closer to the header than project labels. */
  skillHeaderSpace: 132,
  footerSpace: 60,
};

function useColumnLayout() {
  return useThree((s) => s.size.width / s.size.height < COLUMN_ASPECT);
}

/** Tap targets about 32px across on touch screens, never smaller than `min` world units. */
const TOUCH_TARGET_PX = 16;

function useHitRadius(min: number) {
  const size = useThree((s) => s.size);
  const camera = useThree((s) => s.camera) as PerspectiveCamera;
  const coarse = useMemo(() => window.matchMedia('(pointer: coarse)').matches, []);
  if (!coarse) return min;
  // The overview frame is bound by whichever of its width or height is tighter.
  const unitsPerPixel = Math.max(
    (2 * FIT_HALF_WIDTH) / size.width,
    (2 * BASE_DISTANCE * Math.tan((camera.fov * Math.PI) / 360)) / size.height,
  );
  return Math.max(min, TOUCH_TARGET_PX * unitsPerPixel);
}

/* ------------------------------------------------------------------ */
/* Animation helpers                                                   */
/* ------------------------------------------------------------------ */

/** Eases a material's opacity towards a target every frame. */
function useFadeMaterial(getMaterial: () => Material | undefined | null, target: number) {
  const current = useRef(target);
  useFrame((_, delta) => {
    const material = getMaterial();
    if (!material) return;
    const next = current.current + (target - current.current) * (1 - Math.exp(-delta * 10));
    current.current = Math.abs(next - target) < 0.002 ? target : next;
    material.opacity = current.current;
    material.visible = current.current > 0.01;
  });
}

/** Moves a group between its mountain position and its unfolded-timeline position. */
function useAnimatedPosition(key: string, base: Vec3) {
  const ref = useRef<Group>(null);
  const seen = useRef(-1);
  useFrame(() => {
    if (!ref.current || seen.current === anim.version) return;
    seen.current = anim.version;
    ref.current.position.set(...currentPos(key, base));
  });
  return ref;
}

type DynamicLineProps = {
  /** Returns the control points for the current frame. */
  getPoints: () => Vec3[];
  curved?: boolean;
  opacity: number;
} & Omit<ComponentProps<typeof Line>, 'points' | 'opacity' | 'ref'>;

function sample(points: Vec3[], curved?: boolean): Vec3[] {
  if (!curved || points.length < 3) return points;
  return new CatmullRomCurve3(points.map((p) => new Vector3(...p)))
    .getPoints(64)
    .map((v) => [v.x, v.y, v.z] as Vec3);
}

/** A drei Line whose geometry follows moving nodes, with eased opacity. */
function DynamicLine({ getPoints, curved, opacity, ...props }: DynamicLineProps) {
  const ref = useRef<Line2>(null);
  const seen = useRef(anim.version);
  const initial = useMemo(() => sample(getPoints(), curved), []); // eslint-disable-line react-hooks/exhaustive-deps

  useFadeMaterial(() => ref.current?.material as LineMaterial | undefined, opacity);

  useFrame(() => {
    if (!ref.current || seen.current === anim.version) return;
    seen.current = anim.version;
    ref.current.geometry.setPositions(sample(getPoints(), curved).flat());
    if (props.dashed) ref.current.computeLineDistances();
  });

  return <Line ref={ref} points={initial} transparent {...props} />;
}

const LINE_OPACITY: Record<Emphasis, number> = { hidden: 0, dim: 0.07, normal: 0.8, active: 1 };
const NODE_OPACITY: Record<Emphasis, number> = { hidden: 0, dim: 0.15, normal: 1, active: 1 };
const LABEL_OPACITY: Record<Emphasis, number> = { hidden: 0, dim: 0.18, normal: 1, active: 1 };

/* ------------------------------------------------------------------ */
/* Scene pieces                                                        */
/* ------------------------------------------------------------------ */

function YearRing({ year }: { year: number }) {
  const expandedLine = useMountain((s) => s.expandedLine);
  const focus = useFocus();
  const y = yearToY(year);
  const r = radiusAt(y) * 1.12 + 0.15;
  const points = useMemo(
    () =>
      Array.from({ length: 97 }, (_, i) => {
        const a = (i / 96) * Math.PI * 2;
        return [Math.cos(a) * r, y, Math.sin(a) * r] as Vec3;
      }),
    [r, y],
  );
  const role = useActiveRole();
  const inRole = role !== null && y >= role.startY - 0.01 && y <= role.endY + 0.01;
  const opacity = expandedLine ? 0 : inRole ? 1 : focus.active ? 0.45 : 0.9;

  return (
    <group>
      <DynamicLine getPoints={() => points} color={inRole ? '#b5b5b5' : '#e4e4e4'} lineWidth={1} opacity={opacity} />
      <Html position={[r + 0.25, y, 0]} center zIndexRange={[10, 0]} style={{ pointerEvents: 'none' }}>
        <span
          className={`font-['Work_Sans'] text-[10px] tracking-wide transition-opacity duration-500 ${
            inRole ? 'font-semibold text-neutral-800' : 'text-neutral-400'
          }`}
          style={{ opacity: expandedLine ? 0 : 1 }}
        >
          {year}
        </span>
      </Html>
    </group>
  );
}

function Ridge({ line }: { line: MountainLineId }) {
  const focus = useFocus();
  const hoverLine = useMountain((s) => s.hoverLine);
  const ids = ridges[line];
  const keys = ids.map(projectKey);

  let emphasis: Emphasis;
  if (focus.visible) emphasis = focus.focusLine === line ? 'active' : 'hidden';
  else if (!focus.active) emphasis = 'normal';
  else emphasis = hoverLine === line || keys.every((k) => focus.active!.has(k)) ? 'active' : 'dim';

  const interactive = emphasis !== 'hidden';

  return (
    <DynamicLine
      getPoints={() => ids.map((id) => currentPos(projectKey(id), projectById[id].position))}
      curved
      color={lineColor(line)}
      lineWidth={emphasis === 'active' ? 3.4 : 2.4}
      opacity={emphasis === 'normal' ? 0.85 : LINE_OPACITY[emphasis]}
      onPointerOver={(e: ThreeEvent<PointerEvent>) => {
        if (!interactive || !canHover(e)) return;
        e.stopPropagation();
        setCursor(true);
        mountainStore.set({ hoverLine: line });
      }}
      onPointerOut={() => {
        setCursor(false);
        if (mountainStore.get().hoverLine === line) mountainStore.set({ hoverLine: null });
      }}
      onClick={(e: ThreeEvent<MouseEvent>) => {
        if (!interactive) return;
        e.stopPropagation();
        mountainStore.set({ expandedLine: line, selected: null, hoverLine: null });
      }}
    />
  );
}

function ProjectNode({ project }: { project: PlacedProject }) {
  const { isCN } = useLanguage();
  const focus = useFocus();
  const expandedLine = useMountain((s) => s.expandedLine);
  const selected = useMountain((s) => s.selected);
  const key = projectKey(project.id);
  const emphasis = emphasisOf(focus, key);
  const ref = useAnimatedPosition(key, project.position);
  const core = useRef<Mesh>(null);
  const halo = useRef<Mesh>(null);
  const color = expandedLine ? project.color : fadeByHeight(project.color, project.t);
  const isSelected = selected === key;
  const column = useColumnLayout() && expandedLine !== null;
  const hitRadius = useHitRadius(project.size * 1.4);

  useFadeMaterial(() => core.current?.material as Material, NODE_OPACITY[emphasis]);
  useFadeMaterial(
    () => halo.current?.material as Material,
    emphasis === 'hidden' || emphasis === 'dim' ? 0 : isSelected ? 0.22 : project.t > 0.6 || emphasis === 'active' ? 0.12 : 0,
  );

  const interactive = emphasis !== 'hidden';

  return (
    <group ref={ref} position={project.position}>
      <mesh ref={core}>
        <sphereGeometry args={[project.size, 32, 32]} />
        <meshStandardMaterial color={color} roughness={0.45} transparent />
      </mesh>
      <mesh
        scale={hitRadius}
        onPointerOver={(e) => {
          if (!interactive || !canHover(e)) return;
          e.stopPropagation();
          setCursor(true);
          mountainStore.set({ hoverNode: key });
        }}
        onPointerOut={() => {
          setCursor(false);
          if (mountainStore.get().hoverNode === key) mountainStore.set({ hoverNode: null });
        }}
        onClick={(e) => {
          if (!interactive) return;
          e.stopPropagation();
          mountainStore.set({ selected: key, hoverNode: null });
        }}
      >
        <sphereGeometry args={[1, 12, 12]} />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
      </mesh>
      <mesh ref={halo}>
        <sphereGeometry args={[project.size * 2.1, 32, 32]} />
        <meshBasicMaterial color={project.color} transparent opacity={0} depthWrite={false} />
      </mesh>
      <Html position={[0, column ? 0 : project.size + 0.12, 0]} zIndexRange={[10, 0]} style={{ pointerEvents: 'none' }}>
        <span
          className={`block w-max rounded-md bg-white/85 px-1.5 py-0.5 font-['Work_Sans'] text-[11px] font-medium leading-tight transition-opacity duration-300 ${
            column
              ? 'translate-x-[14px] -translate-y-1/2 text-left'
              : `-translate-x-1/2 -translate-y-full text-center ${expandedLine ? 'max-w-[8.5rem]' : 'whitespace-nowrap'}`
          }`}
          style={{
            color: project.t > 0.5 || expandedLine ? '#111' : '#555',
            opacity: LABEL_OPACITY[emphasis],
            maxWidth: column ? COLUMN.projectLabel : undefined,
          }}
        >
          {isCN ? project.labelCN : project.label}
          {expandedLine && (
            <span className="block text-[10px] font-normal text-neutral-500">{isCN ? project.periodCN : project.period}</span>
          )}
        </span>
      </Html>
    </group>
  );
}

function SkillNode({ skill }: { skill: PlacedSkill }) {
  const { isCN } = useLanguage();
  const focus = useFocus();
  const hoverNode = useMountain((s) => s.hoverNode);
  const expandedLine = useMountain((s) => s.expandedLine);
  const key = skillKey(skill.id);
  const emphasis = emphasisOf(focus, key);
  const ref = useAnimatedPosition(key, skill.position);
  const dot = useRef<Mesh>(null);
  const column = useColumnLayout() && expandedLine !== null;
  // In the overview skills crowd around projects, so only enlarge their tap targets once a line is unfolded.
  const touchRadius = useHitRadius(0.2);
  const hitRadius = expandedLine ? touchRadius : 0.2;
  const showLabel =
    emphasis === 'active' || hoverNode === key || (expandedLine !== null && emphasis === 'normal');
  const interactive = emphasis !== 'hidden';

  useFadeMaterial(
    () => dot.current?.material as Material,
    emphasis === 'normal' ? 0.9 : NODE_OPACITY[emphasis],
  );

  return (
    <group ref={ref} position={skill.position}>
      <mesh ref={dot}>
        <sphereGeometry args={[skill.shared ? 0.075 : 0.06, 16, 16]} />
        <meshStandardMaterial
          color={emphasis === 'active' ? '#3a3a3a' : skill.shared ? '#7a7a7a' : '#b3b3b3'}
          roughness={0.6}
          transparent
        />
      </mesh>
      <mesh
        onPointerOver={(e) => {
          if (!interactive || !canHover(e)) return;
          e.stopPropagation();
          setCursor(true);
          mountainStore.set({ hoverNode: key });
        }}
        onPointerOut={() => {
          setCursor(false);
          if (mountainStore.get().hoverNode === key) mountainStore.set({ hoverNode: null });
        }}
        onClick={(e) => {
          if (!interactive) return;
          e.stopPropagation();
          mountainStore.set({ selected: key, hoverNode: null });
        }}
      >
        <sphereGeometry args={[hitRadius, 8, 8]} />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
      </mesh>
      <Html position={[0, column ? 0 : 0.2, 0]} center={!column} zIndexRange={[10, 0]} style={{ pointerEvents: 'none' }}>
        <span
          className={`block font-['Work_Sans'] text-[10px] leading-[13px] text-neutral-600 transition-opacity duration-300 ${
            column ? 'w-max -translate-x-[calc(100%+8px)] -translate-y-1/2 text-right' : 'whitespace-nowrap'
          }`}
          style={{ opacity: showLabel ? 1 : 0, maxWidth: column ? COLUMN.skillLabel : undefined }}
        >
          {isCN ? skill.labelCN : skill.label}
        </span>
      </Html>
    </group>
  );
}

function SkillEdges() {
  const focus = useFocus();
  return (
    <group>
      {placedSkills.flatMap((skill) =>
        skill.projectIds.map((id) => {
          const a = skillKey(skill.id);
          const b = projectKey(id);
          const emphasis = emphasisOf(focus, a, b);
          const project = projectById[id];
          return (
            <DynamicLine
              key={`${skill.id}-${id}`}
              getPoints={() => [currentPos(a, skill.position), currentPos(b, project.position)]}
              color={emphasis === 'active' ? project.color : skill.shared ? '#bdbdbd' : '#dddddd'}
              lineWidth={emphasis === 'active' ? 1.4 : skill.shared ? 1 : 0.8}
              opacity={emphasis === 'active' ? 0.75 : LINE_OPACITY[emphasis]}
            />
          );
        }),
      )}
    </group>
  );
}

function DashedLinks() {
  const focus = useFocus();
  const links = [
    ...placedProjects
      .filter((project) => project.parentId)
      .map((project) => ({ from: project.id, to: project.parentId!, color: project.color })),
    ...storyLinks.filter((link) => !link.skillId).map((link) => ({ ...link, color: '#9a9a9a' })),
  ];

  return (
    <group>
      {links.map((link) => {
        const a = projectKey(link.from);
        const b = projectKey(link.to);
        const emphasis = emphasisOf(focus, a, b);
        return (
          <DynamicLine
            key={`${link.from}-${link.to}`}
            getPoints={() => [
              currentPos(a, projectById[link.from].position),
              currentPos(b, projectById[link.to].position),
            ]}
            color={link.color}
            lineWidth={1.2}
            dashed
            dashSize={0.13}
            gapSize={0.1}
            opacity={emphasis === 'normal' ? 0.55 : LINE_OPACITY[emphasis]}
          />
        );
      })}
    </group>
  );
}

const PARTICLE_COUNT = 60;

/** The unfinished summit: a pulsing growth point with particles drifting upward. */
function GrowthPoint() {
  const expandedLine = useMountain((s) => s.expandedLine);
  const focus = useFocus();
  const phd = projectById['phd-research'].position;
  const tipY = yearToY(MOUNTAIN_NOW_YEAR) + 1.3;
  const core = useRef<Mesh>(null);
  const particles = useRef<Points>(null);
  const visible = expandedLine ? 0 : focus.active ? 0.3 : 1;

  const seeds = useMemo(
    () =>
      Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
        angle: (i * 2.399) % (Math.PI * 2),
        radius: 0.08 + ((i * 7) % 10) * 0.035,
        offset: (i * 0.137) % 1,
      })),
    [],
  );
  const positions = useMemo(() => new Float32Array(PARTICLE_COUNT * 3), []);

  useFadeMaterial(() => core.current?.material as Material, visible);
  useFadeMaterial(() => particles.current?.material as Material, visible * 0.85);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (core.current) core.current.scale.setScalar(1 + Math.sin(time * 2) * 0.18);
    if (!particles.current) return;
    seeds.forEach((seed, i) => {
      const progress = (seed.offset + time * 0.12) % 1;
      positions[i * 3] = Math.cos(seed.angle) * seed.radius * (1 - progress * 0.5);
      positions[i * 3 + 1] = tipY - 0.6 + progress * 1.8;
      positions[i * 3 + 2] = Math.sin(seed.angle) * seed.radius * (1 - progress * 0.5);
    });
    (particles.current.geometry.attributes.position as BufferAttribute).needsUpdate = true;
  });

  return (
    <group>
      <DynamicLine
        getPoints={() => [currentPos(projectKey('phd-research'), phd), [0, tipY, 0]]}
        color="#111111"
        lineWidth={1.2}
        dashed
        dashSize={0.08}
        gapSize={0.08}
        opacity={visible}
      />
      <mesh ref={core} position={[0, tipY, 0]}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshBasicMaterial color="#111111" transparent />
      </mesh>
      <points ref={particles}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#111111" size={0.07} transparent opacity={0.85} depthWrite={false} />
      </points>
    </group>
  );
}

const AXIS_TOP = yearToY(MOUNTAIN_NOW_YEAR);

/** The central time axis: one segment per work or study role, bottom to top. */
function TimeAxis() {
  const focus = useFocus();
  const expandedLine = useMountain((s) => s.expandedLine);
  const spineOpacity = expandedLine ? 0 : focus.active ? 0.3 : 0.9;

  return (
    <group>
      <DynamicLine getPoints={() => [[0, 0, 0], [0, AXIS_TOP, 0]]} color="#d4d4d4" lineWidth={1} opacity={spineOpacity} />
      {placedRoles.map((role) => (
        <RoleSegment key={role.id} role={role} />
      ))}
    </group>
  );
}

function RoleSegment({ role }: { role: PlacedRole }) {
  const { isCN } = useLanguage();
  const focus = useFocus();
  const selected = useMountain((s) => s.selected);
  const key = roleKey(role.id);
  const emphasis = emphasisOf(focus, key);
  const isSelected = selected === key;
  const tick = useRef<Mesh>(null);
  const interactive = emphasis !== 'hidden';
  // Narrow screens are too crowded for every role name; show one only when its role is in focus.
  const narrow = useThree((s) => s.size.width < NARROW_WIDTH);
  const labelOpacity = narrow && emphasis !== 'active' && !isSelected ? 0 : LABEL_OPACITY[emphasis];

  useFadeMaterial(() => tick.current?.material as Material, NODE_OPACITY[emphasis]);

  const pointerHandlers = {
    onPointerOver: (e: ThreeEvent<PointerEvent>) => {
      if (!interactive || !canHover(e)) return;
      e.stopPropagation();
      setCursor(true);
      mountainStore.set({ hoverNode: key });
    },
    onPointerOut: () => {
      setCursor(false);
      if (mountainStore.get().hoverNode === key) mountainStore.set({ hoverNode: null });
    },
    onClick: (e: ThreeEvent<MouseEvent>) => {
      if (!interactive) return;
      e.stopPropagation();
      mountainStore.set({ selected: key });
    },
  };

  return (
    <group>
      <DynamicLine
        getPoints={() => [[0, role.startY, 0], [0, role.endY, 0]]}
        color={fadeByHeight(AXIS_COLOR, 0.35 + role.t * 0.65)}
        lineWidth={emphasis === 'active' || isSelected ? 5 : 3.5}
        opacity={LINE_OPACITY[emphasis]}
        {...pointerHandlers}
      />
      <mesh ref={tick} position={[0, role.startY, 0]} scale={emphasis === 'active' || isSelected ? 1.5 : 1}>
        <sphereGeometry args={[0.075, 16, 16]} />
        <meshBasicMaterial color={AXIS_COLOR} transparent />
      </mesh>
      <mesh position={[0, role.startY, 0]} {...pointerHandlers}>
        <sphereGeometry args={[0.24, 8, 8]} />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
      </mesh>
      <Html position={[0, role.labelY, 0]} zIndexRange={[11, 0]} style={{ pointerEvents: 'none' }}>
        <button
          type="button"
          className={`block -translate-x-[calc(100%+12px)] -translate-y-1/2 whitespace-nowrap rounded-md bg-white/85 px-1.5 py-0.5 font-['Work_Sans'] text-[10px] tracking-wide transition-[opacity,color] duration-300 ${
            isSelected || emphasis === 'active' ? 'font-semibold text-neutral-800' : 'text-neutral-400'
          }`}
          style={{ opacity: labelOpacity, pointerEvents: interactive && labelOpacity > 0 ? 'auto' : 'none' }}
          onPointerEnter={(e) => e.pointerType === 'mouse' && mountainStore.set({ hoverNode: key })}
          onPointerLeave={() => {
            if (mountainStore.get().hoverNode === key) mountainStore.set({ hoverNode: null });
          }}
          onPointerDown={(e) => e.stopPropagation()}
          onClick={(e) => {
            e.stopPropagation();
            mountainStore.set({ selected: key });
          }}
        >
          {isCN ? role.labelCN : role.label}
        </button>
      </Html>
    </group>
  );
}

/** The hovered role wins over the selected one. */
function useActiveRole(): PlacedRole | null {
  const hoverNode = useMountain((s) => s.hoverNode);
  const selected = useMountain((s) => s.selected);
  const key = hoverNode?.startsWith('r:') ? hoverNode : !hoverNode && selected?.startsWith('r:') ? selected : null;
  return key ? roleById[key.slice(2)] : null;
}

const bandRadius = (y: number) => radiusAt(y) * 1.12 + 0.15;

/** A translucent layer of the mountain spanning the active role's years. */
function RoleBand() {
  const role = useActiveRole();
  const shown = useRef<PlacedRole | null>(null);
  if (role) shown.current = role;
  const current = shown.current;
  const shell = useRef<Mesh>(null);

  useFadeMaterial(() => shell.current?.material as Material, role ? 0.035 : 0);

  if (!current) return null;
  const height = Math.max(current.endY - current.startY, 0.05);
  const edge = (y: number) =>
    Array.from({ length: 97 }, (_, i) => {
      const a = (i / 96) * Math.PI * 2;
      return [Math.cos(a) * bandRadius(y), y, Math.sin(a) * bandRadius(y)] as Vec3;
    });

  return (
    <group key={current.id}>
      <mesh ref={shell} position={[0, current.startY + height / 2, 0]}>
        <cylinderGeometry args={[bandRadius(current.endY), bandRadius(current.startY), height, 96, 1, true]} />
        <meshBasicMaterial color="#111111" transparent opacity={0} side={DoubleSide} depthWrite={false} />
      </mesh>
      <DynamicLine getPoints={() => edge(current.startY)} color="#a3a3a3" lineWidth={1.2} opacity={role ? 0.9 : 0} />
      <DynamicLine getPoints={() => edge(current.endY)} color="#a3a3a3" lineWidth={1.2} opacity={role ? 0.9 : 0} />
    </group>
  );
}

/** Thin connectors from each project to the role it was done in. */
function RoleLinks() {
  const focus = useFocus();
  return (
    <group>
      {placedProjects
        .filter((project) => project.line !== 'converge')
        .map((project) => {
          const a = projectKey(project.id);
          const emphasis = emphasisOf(focus, a, roleKey(project.roleId));
          return (
            <DynamicLine
              key={project.id}
              getPoints={() => [currentPos(a, project.position), project.axisPoint]}
              color={emphasis === 'active' ? project.color : '#d9d9d9'}
              lineWidth={emphasis === 'active' ? 1.2 : 0.8}
              opacity={emphasis === 'active' ? 0.7 : emphasis === 'normal' ? 0.55 : LINE_OPACITY[emphasis]}
            />
          );
        })}
    </group>
  );
}

/* ------------------------------------------------------------------ */
/* Controllers                                                         */
/* ------------------------------------------------------------------ */

/** Advances the unfold progress and lays out the timeline when a line is expanded. */
function UnfoldController() {
  const { isCN } = useLanguage();
  const expandedLine = useMountain((s) => s.expandedLine);
  const camera = useThree((s) => s.camera) as PerspectiveCamera;
  const size = useThree((s) => s.size);

  useEffect(() => {
    if (!expandedLine) return;

    const ids = ridges[expandedLine];
    const right = new Vector3();
    camera.getWorldDirection(right);
    right.set(-right.z, 0, right.x).normalize();

    const visibleHeight = 2 * anim.fitDistance * Math.tan((camera.fov * Math.PI) / 360);
    const width = Math.min(visibleHeight * (size.width / size.height) * 0.72, 18);
    const center = new Vector3(0, PEAK_HEIGHT / 2, 0);
    const at = (x: number, y: number): Vec3 => {
      const p = center.clone().addScaledVector(right, x);
      return [p.x, p.y + y, p.z];
    };

    const targets = new Map<string, Vec3>();
    const unitsPerPixel = visibleHeight / size.height;
    const labelPx = (text: string) => (isCN ? text.length * 10 : text.length * 5.6);

    if (size.width / size.height < COLUMN_ASPECT) {
      const px = (value: number) => value * unitsPerPixel;
      const contentWidth =
        COLUMN.margin * 2 + COLUMN.skillLabel + COLUMN.skillGap + COLUMN.edge + COLUMN.labelOffset + COLUMN.projectLabel;
      const left = -size.width / 2 + Math.max(COLUMN.margin, (size.width - contentWidth) / 2 + COLUMN.margin);
      const skillX = px(left + COLUMN.skillLabel + COLUMN.skillGap);
      const projectX = skillX + px(COLUMN.edge);
      const top = px(size.height / 2 - COLUMN.headerSpace);
      const bottom = px(-size.height / 2 + COLUMN.footerSpace);

      const ys: Record<string, number> = {};
      ids.forEach((id, i) => {
        ys[id] = bottom + ((top - bottom) * i) / Math.max(ids.length - 1, 1);
        targets.set(projectKey(id), at(projectX, ys[id]));
      });

      // Skills sit at the mean height of their projects, pushed apart so wrapped labels never touch.
      const column = [...new Set(ids.flatMap((id) => projectById[id].skillIds))].map((skillId) => {
        const skill = placedSkills.find((s) => s.id === skillId)!;
        const owners = ids.filter((owner) => projectById[owner].skillIds.includes(skillId));
        const lines = Math.ceil(labelPx(isCN ? skill.labelCN : skill.label) / COLUMN.skillLabel);
        return {
          skillId,
          y: owners.reduce((sum, owner) => sum + ys[owner], 0) / owners.length,
          half: px(lines * 13 + 6) / 2,
        };
      });
      column.sort((a, b) => a.y - b.y);
      const skillTop = top + px(COLUMN.headerSpace - COLUMN.skillHeaderSpace);
      for (let i = 0; i < column.length; i += 1) {
        const floor = i === 0 ? bottom + column[0].half : column[i - 1].y + column[i - 1].half + column[i].half;
        column[i].y = Math.max(column[i].y, floor);
      }
      for (let i = column.length - 1; i >= 0; i -= 1) {
        const ceiling =
          i === column.length - 1 ? skillTop - column[i].half : column[i + 1].y - column[i + 1].half - column[i].half;
        column[i].y = Math.min(column[i].y, ceiling);
      }
      for (const item of column) targets.set(skillKey(item.skillId), at(skillX, item.y));

      anim.progress = 0;
      anim.line = expandedLine;
      anim.targets = targets;
      anim.version += 1;
      return;
    }
    const xs: Record<string, number> = {};
    ids.forEach((id, i) => {
      xs[id] = -width / 2 + (width * i) / Math.max(ids.length - 1, 1);
      targets.set(projectKey(id), at(xs[id], 0));
    });

    // Each skill takes the first row (alternating above and below the line) where its label fits.
    const halfView = (visibleHeight * (size.width / size.height)) / 2;
    const rows: [number, number][][] = [];
    const placed = new Set<string>();
    for (const id of ids) {
      for (const skillId of projectById[id].skillIds) {
        if (placed.has(skillId)) continue;
        placed.add(skillId);
        const owners = ids.filter((owner) => projectById[owner].skillIds.includes(skillId));
        const skill = placedSkills.find((s) => s.id === skillId)!;
        const halfWidth = (labelPx(isCN ? skill.labelCN : skill.label) / 2 + 10) * unitsPerPixel;
        const mean = owners.reduce((sum, owner) => sum + xs[owner], 0) / owners.length;
        const x = Math.min(Math.max(mean, -halfView + halfWidth), halfView - halfWidth);
        const firstSide = placed.size % 2;
        let row = 0;
        for (let k = 0; ; k += 1) {
          row = Math.floor(k / 2) * 2 + ((firstSide + k) % 2);
          if (!(rows[row] ?? []).some(([a, b]) => x - halfWidth < b && x + halfWidth > a)) break;
        }
        (rows[row] ??= []).push([x - halfWidth, x + halfWidth]);
        const y = (row % 2 === 0 ? 1 : -1) * (1.6 + Math.floor(row / 2) * 0.8);
        targets.set(skillKey(skillId), at(x, y));
      }
    }

    anim.progress = 0;
    anim.line = expandedLine;
    anim.targets = targets;
    anim.version += 1;
  }, [expandedLine, camera, size, isCN]);

  useFrame((_, delta) => {
    const goal = mountainStore.get().expandedLine ? 1 : 0;
    if (anim.progress === goal) return;
    const step = delta / UNFOLD_SECONDS;
    anim.progress = goal > anim.progress ? Math.min(anim.progress + step, 1) : Math.max(anim.progress - step, 0);
    if (anim.progress === 0) {
      anim.line = null;
      anim.targets = new Map();
    }
    anim.version += 1;
  });

  return null;
}

/** Pulls the camera back on narrow viewports so the whole mountain stays in frame. */
function CameraFit({ margin }: { margin: number }) {
  const camera = useThree((state) => state.camera) as PerspectiveCamera;
  const aspect = useThree((state) => state.size.width / state.size.height);

  useEffect(() => {
    const halfFov = Math.atan(Math.tan((camera.fov * Math.PI) / 360) * aspect);
    const widthFit = FIT_HALF_WIDTH / Math.tan(halfFov);
    anim.fitDistance = Math.max(BASE_DISTANCE * margin, widthFit);
    camera.position.setLength(anim.fitDistance);
  }, [aspect, camera, margin]);

  return null;
}

/** Glides the camera towards a selected node, and back to the overview. */
function CameraDirector() {
  const selected = useMountain((s) => s.selected);
  const expandedLine = useMountain((s) => s.expandedLine);
  const dragging = useMountain((s) => s.dragging);
  const camera = useThree((s) => s.camera);
  const controls = useThree((s) => s.controls) as OrbitControlsImpl | null;
  const goal = useRef<{ target: Vector3; distance: number; elevation?: number } | null>(null);
  const wasExpanded = useRef(false);

  useEffect(() => {
    const perspective = camera as PerspectiveCamera;
    if (expandedLine) {
      // On portrait viewports the bottom sheet would cover the node, so slide the timeline up beneath the header.
      const id = selected?.startsWith('p:') ? selected.slice(2) : null;
      let y = 0;
      if (id && perspective.aspect < COLUMN_ASPECT) {
        const viewHeight = 2 * anim.fitDistance * Math.tan((perspective.fov * Math.PI) / 360);
        const node = new Vector3(...currentPos(selected!, projectById[id].position)).add(GROUP_OFFSET);
        y = node.y - viewHeight * PORTRAIT_FOCUS_HEIGHT;
      }
      goal.current = { target: new Vector3(0, y, 0), distance: anim.fitDistance, elevation: 0 };
    } else if (selected && !selected.startsWith('s:')) {
      const id = selected.slice(2);
      const role = selected.startsWith('r:') ? roleById[id] : null;
      const point: Vec3 = role
        ? [0, (role.startY + role.endY) / 2, 0]
        : currentPos(selected, projectById[id].position);
      const distance = anim.fitDistance * (role ? 1 : 0.62);
      const node = new Vector3(...point).add(GROUP_OFFSET);
      const viewHeight = 2 * distance * Math.tan((perspective.fov * Math.PI) / 360);
      const viewWidth = viewHeight * perspective.aspect;
      const forward = camera.getWorldDirection(new Vector3()).setY(0).normalize();
      const right = new Vector3().crossVectors(forward, camera.up).normalize();
      // Keep the node clear of the card: beside it on wide viewports, above the bottom sheet on portrait ones.
      const portrait = perspective.aspect < COLUMN_ASPECT;
      const shift = portrait ? 0 : (perspective.aspect < 1.2 ? 0.22 : 0.14) * (role ? 0.3 : 1);
      const drop = portrait ? (role ? 0.18 : 0.24) : role ? 0.05 : 0.12;
      const target = node.addScaledVector(right, viewWidth * shift).add(new Vector3(0, -viewHeight * drop, 0));
      goal.current = { target, distance };
    } else {
      goal.current = {
        target: new Vector3(0, 0, 0),
        distance: anim.fitDistance,
        elevation: wasExpanded.current ? OVERVIEW_ELEVATION : undefined,
      };
    }
    wasExpanded.current = expandedLine !== null;
  }, [selected, expandedLine]);

  useEffect(() => {
    if (dragging) goal.current = null;
  }, [dragging]);

  useFrame((_, delta) => {
    if (!goal.current || !controls) return;
    const k = 1 - Math.exp(-delta * 4);
    controls.target.lerp(goal.current.target, k);
    const direction = camera.position.clone().sub(controls.target).normalize();
    const elevation = goal.current.elevation;
    if (elevation !== undefined) {
      direction.y += (elevation - direction.y) * k;
      direction.normalize();
    }
    const distance = camera.position.distanceTo(controls.target);
    camera.position.copy(controls.target).addScaledVector(direction, distance + (goal.current.distance - distance) * k);
    controls.update();
    if (
      controls.target.distanceTo(goal.current.target) < 0.01 &&
      Math.abs(goal.current.distance - distance) < 0.02 &&
      (elevation === undefined || Math.abs(direction.y - elevation) < 0.005)
    ) {
      goal.current = null;
    }
  });

  return null;
}

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function Controls({ embedded }: { embedded: boolean }) {
  const selected = useMountain((s) => s.selected);
  const expandedLine = useMountain((s) => s.expandedLine);
  const hoverLine = useMountain((s) => s.hoverLine);
  const hoverNode = useMountain((s) => s.hoverNode);
  const dragging = useMountain((s) => s.dragging);
  const controls = useThree((s) => s.controls) as OrbitControlsImpl | null;
  const resumeTimer = useRef<number | undefined>(undefined);
  const pointerDown = useRef(false);
  const [reducedMotion] = useState(prefersReducedMotion);

  const idle = !selected && !expandedLine && !hoverLine && !hoverNode && !dragging && !reducedMotion;

  // Inside a scrolling page, vertical swipes must scroll the page; only sideways swipes rotate.
  useEffect(() => {
    if (embedded && controls?.domElement) controls.domElement.style.touchAction = 'pan-y';
  }, [embedded, controls]);

  return (
    <OrbitControls
      makeDefault
      enablePan={false}
      enableZoom={!embedded}
      enableRotate={!expandedLine}
      minDistance={8}
      maxDistance={45}
      minPolarAngle={Math.PI * 0.22}
      maxPolarAngle={Math.PI * 0.58}
      autoRotate={idle}
      autoRotateSpeed={0.5}
      enableDamping
      onStart={() => {
        pointerDown.current = true;
      }}
      onChange={() => {
        if (!pointerDown.current || mountainStore.get().dragging) return;
        window.clearTimeout(resumeTimer.current);
        mountainStore.set({ dragging: true });
      }}
      onEnd={() => {
        pointerDown.current = false;
        if (!mountainStore.get().dragging) return;
        resumeTimer.current = window.setTimeout(() => mountainStore.set({ dragging: false }), 2500);
      }}
    />
  );
}

function Mountain() {
  return (
    <group position={GROUP_OFFSET.toArray()}>
      {yearRings.map((year) => (
        <YearRing key={year} year={year} />
      ))}
      <RoleBand />
      <TimeAxis />
      <RoleLinks />
      <SkillEdges />
      <DashedLinks />
      {(['human', 'data', 'growth'] as const).map((line) => (
        <Ridge key={line} line={line} />
      ))}
      {placedSkills.map((skill) => (
        <SkillNode key={skill.id} skill={skill} />
      ))}
      {placedProjects.map((project) => (
        <ProjectNode key={project.id} project={project} />
      ))}
      <GrowthPoint />
    </group>
  );
}

type SceneProps = {
  /** Lives inside a scrolling page: no wheel or pinch zoom, vertical swipes scroll the page. */
  embedded?: boolean;
  /** Stops rendering while scrolled out of view. */
  active?: boolean;
};

export default function GrowthMountainScene({ embedded = false, active = true }: SceneProps) {
  useEffect(() => () => setCursor(false), []);

  return (
    <Canvas
      camera={{ position: [0, 3.5, BASE_DISTANCE], fov: 38 }}
      dpr={[1, 2]}
      frameloop={active ? 'always' : 'never'}
      onPointerMissed={() => {
        const { selected, expandedLine } = mountainStore.get();
        if (selected) mountainStore.set({ selected: null });
        else if (expandedLine) mountainStore.set({ expandedLine: null });
      }}
    >
      <color attach="background" args={['#ffffff']} />
      <ambientLight intensity={0.9} />
      <directionalLight position={[6, 10, 8]} intensity={1.4} />
      <CameraFit margin={embedded ? 1.3 : 1} />
      <UnfoldController />
      <CameraDirector />
      <Mountain />
      <Controls embedded={embedded} />
    </Canvas>
  );
}
