import { type CSSProperties, type ReactNode } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { LocalizedContent } from '../i18n/LocalizedContent';
import { useLanguage } from '../context/LanguageContext';
import { smartHospitalTranslations } from '../i18n/caseStudyTranslations';
import { CaseStudyThread, MainLineTag } from '../components/CaseStudyThread';

const SLUG = 'tencent-micision-smart-hospital';
const HOSPITAL = "The People's Hospital of Nanshan District, Shenzhen (Huazhong University of Science and Technology Union Shenzhen Hospital)";
const PRESS_2018_URL = 'https://www.chinanews.com.cn/m/jk/2018/03-26/8476447.shtml';
const PRESS_2020_URL = 'https://www.hit180.com/42665.html';

const metadata = [
  { label: 'Type', value: 'Hospital operations platform' },
  { label: 'Duration', value: '2018-2021' },
  { label: 'Role', value: 'Product design lead' },
  { label: 'Pilot', value: HOSPITAL },
  { label: 'Scope', value: 'Field research, product framework, multi-dimensional analysis, 3D visualization' },
  { label: 'Delivery', value: 'Private cloud and cloud rendering' },
];

const researchFindings = [
  {
    title: 'Fragmented indicators',
    copy: 'Reports showed metrics one at a time, so the links between departments were hard to see.',
  },
  {
    title: 'No shared view',
    copy: 'Data sat in separate systems, with no single place to compare and review it.',
  },
  {
    title: 'Hard to use day to day',
    copy: 'The data existed, but the way it was organized and shown made it hard to use in daily decisions.',
  },
  {
    title: 'Limited regional context',
    copy: 'Hospital data was rarely connected to community or city data, so it did little for planning.',
  },
];

const frameworkSteps = ['Visit hospitals', 'Collect the dataset', 'Group the indicators'];

const scalePath = [
  {
    title: 'Hospital',
    label: 'Point',
    copy: 'Operational detail inside departments, wards, and beds.',
  },
  {
    title: 'Region',
    label: 'Plane',
    copy: 'Patient distribution and comparisons across administrative areas.',
  },
  {
    title: 'City',
    label: 'Volume',
    copy: 'Medical resources viewed across the wider urban system.',
  },
];

const sceneLayers = [
  {
    title: 'Data',
    copy: "Risk, distribution, magnitude, and change sit on top, where they're easiest to see.",
  },
  {
    title: 'Infrastructure',
    copy: 'Hospitals, landmarks, roads, and bridges make the scene recognizable.',
  },
  {
    title: 'Administrative regions',
    copy: 'Boundaries and transport lines make it easy to compare locations.',
  },
  {
    title: 'Natural conditions',
    copy: 'Terrain, rivers, and vegetation keep the geography readable.',
  },
];

const layerLabels = ['Layer 01 · What happened', 'Layer 02 · Why it happened', 'Layer 03 · What happens next'];

const insightLevels = [
  {
    title: 'Statistics',
    copy: 'Core indicators summarized for directors, department heads, and operational staff, each at the level of detail their role needs.',
  },
  {
    title: 'Multi-dimensional analysis',
    copy: 'Data from separate departments compared across time and space to reveal patterns in patient flow, resource use, and operational load.',
  },
  {
    title: 'Forecasting',
    copy: 'Planned with Tencent AI Lab: a timeline in the 3D scene, as a step toward forecasting.',
  },
];

const timelinePlan = [
  {
    title: 'Distribution',
    copy: 'Where patients and cases sit across floors, districts, and the city, replayed over time.',
  },
  {
    title: 'Composition',
    copy: 'How the mix of departments, symptoms, and patient groups shifts from one period to the next.',
  },
  {
    title: 'Trends',
    copy: 'How each indicator rises or falls across days, weeks, and seasons.',
  },
  {
    title: 'Comparison',
    copy: 'One period set against another, to show what changed and where.',
  },
];

const contributions = [
  {
    title: 'Product direction',
    items: [
      'Led the 0-to-1 product definition',
      'Translated field findings into a product framework',
      'Structured the six operational modules',
      'Defined how departments are compared',
    ],
  },
  {
    title: 'Design and delivery',
    items: ['Designed the cross-scale viewing path', 'Defined the 3D data presentation language', 'Made components reusable across hospital deployments'],
  },
];

function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.58, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({
  children,
  intro,
  label,
  group,
}: {
  children: ReactNode;
  intro?: string;
  label?: string;
  group?: string;
}) {
  const { isCN } = useLanguage();
  const navGroup = group && isCN ? smartHospitalTranslations[group] ?? group : group;

  return (
    <div className="mb-8 md:mb-10">
      {label && <p className="mb-4 text-sm font-medium text-[var(--sh-accent)]">{label}</p>}
      <h2
        data-nav-group={navGroup}
        className="text-balance text-[clamp(2.1rem,4.4vw,4.7rem)] font-medium leading-[0.98] tracking-[-0.045em] text-[var(--sh-text)]"
      >
        {children}
      </h2>
      {intro && <p className="mt-5 text-pretty text-base leading-7 text-[var(--sh-muted)]">{intro}</p>}
    </div>
  );
}

function Figure({
  src,
  alt,
  caption,
  className = '',
  frameClassName = '',
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  frameClassName?: string;
}) {
  return (
    <figure className={className}>
      <div className={`overflow-hidden rounded-2xl border border-[var(--sh-line)] bg-[var(--sh-surface)] ${frameClassName}`}>
        <img src={src} alt={alt} loading="lazy" decoding="async" className="block h-full w-full object-cover" />
      </div>
      {caption && <figcaption className="mt-3 text-sm leading-6 text-[var(--sh-muted)]">{caption}</figcaption>}
    </figure>
  );
}

function ModulePlaceholder({ title, caption }: { title: string; caption: string }) {
  const { isCN } = useLanguage();

  return (
    <figure>
      <div className="flex aspect-[340/259] flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-[var(--sh-line)] bg-[var(--sh-accent-soft)]/40 p-6 text-center">
        <p className="text-lg font-medium text-[var(--sh-text)]">{title}</p>
        <p className="text-sm text-[var(--sh-muted)]">{isCN ? '演示录屏待补充' : 'Screen recording to come'}</p>
      </div>
      <figcaption className="mt-3 text-sm leading-6 text-[var(--sh-muted)]">{caption}</figcaption>
    </figure>
  );
}

function PressQuote({ href, label, caption, children }: { href: string; label: string; caption: string; children: ReactNode }) {
  const { isCN } = useLanguage();

  return (
    <figure className="rounded-2xl border border-[var(--sh-line)] bg-[var(--sh-surface)] p-7 md:p-9">
      <p className="text-sm font-medium text-[var(--sh-accent)]">{label}</p>
      <blockquote className="mt-4 text-pretty text-[clamp(1.25rem,2.1vw,1.8rem)] font-medium leading-[1.25] tracking-[-0.02em] text-[var(--sh-text)]">
        {children}
      </blockquote>
      <figcaption className="mt-6 text-pretty text-sm leading-6 text-[var(--sh-muted)]">{caption}</figcaption>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--sh-accent)] transition-colors hover:text-[var(--sh-text)]"
      >
        {isCN ? '阅读原文' : 'Read the article (Chinese)'} <ArrowUpRight size={15} strokeWidth={1.7} />
      </a>
    </figure>
  );
}

export function SmartHospital() {
  return (
    <LocalizedContent translations={smartHospitalTranslations}>
      <article
      className="relative min-h-[100dvh] overflow-hidden bg-[var(--sh-bg)] text-[var(--sh-text)]"
      style={
        {
          '--sh-bg': '#f2f7fc',
          '--sh-surface': '#fbfdff',
          '--sh-text': '#23384d',
          '--sh-muted': '#5e7185',
          '--sh-accent': '#4c7399',
          '--sh-accent-soft': '#dce8f3',
          '--sh-line': '#cad9e7',
          '--project-accent': '#4c7399',
          '--project-muted': '#5e7185',
          '--project-nav-surface': 'rgba(247, 250, 253, 0.9)',
        } as CSSProperties
      }
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_76%_9%,rgba(76,115,153,0.14),transparent_27rem)]" />

      <div className="relative mx-auto w-full max-w-[1320px] px-5 pb-24 pt-10 sm:px-8 md:pb-32 md:pt-14 lg:px-12">
        <Link
          to="/work"
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-[var(--sh-line)] bg-white/55 px-4 py-2 text-sm text-[var(--sh-muted)] transition-colors hover:border-[var(--sh-accent)] hover:text-[var(--sh-text)] active:translate-y-px"
        >
          <ArrowLeft size={16} strokeWidth={1.7} />
          All projects
        </Link>

        <header className="pb-14 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.68, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium tracking-[0.04em] text-[var(--sh-accent)]">
              <MainLineTag slug={SLUG} />
              <span aria-hidden="true">·</span>
              <span>Tencent Micision</span>
            </p>
            <h1 className="text-[clamp(3.9rem,7vw,6.7rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-[var(--sh-text)]">
              Smart Hospital
            </h1>
            <p className="mt-6 text-pretty text-lg leading-8 text-[var(--sh-muted)]">
              I led the 0-to-1 design of a platform that shows hospital leaders what happened and why across 140+ data dimensions, delivered to 23 hospitals.
            </p>
          </motion.div>

          <motion.div
            className="mt-10 grid gap-6 md:mt-12 md:grid-cols-12 md:items-stretch"
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.76, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col md:col-span-8">
              <div className="aspect-video overflow-hidden rounded-2xl border border-[var(--sh-line)] bg-black shadow-[0_28px_70px_rgba(50,78,108,0.13)]">
                <video
                  className="block h-full w-full object-contain"
                  controls
                  playsInline
                  preload="metadata"
                  poster="/videos/smart-hospital-nanshan-poster.jpg"
                  aria-label="Smart Hospital V2.0 demonstration at the People's Hospital of Nanshan District, Shenzhen (Huazhong University of Science and Technology Union Shenzhen Hospital)"
                >
                  <source src="/videos/smart-hospital-nanshan-demo.mp4" type="video/mp4" />
                  <a href="/videos/smart-hospital-nanshan-demo.mp4">Download the project video</a>
                </video>
              </div>
              <p className="mt-3 text-sm leading-6 text-[var(--sh-muted)]">Smart Hospital V2.0, product demo at the pilot hospital (2:53).</p>
            </div>

            <div className="rounded-2xl border border-[var(--sh-line)] bg-[var(--sh-surface)] p-6 md:col-span-4 md:p-7">
              <dl className="grid grid-cols-2 gap-x-5 gap-y-6">
                {metadata.map((item, index) => (
                  <div key={item.label} className={index >= 3 ? 'col-span-2' : ''}>
                    <dt className="mb-1.5 text-sm font-medium text-[var(--sh-accent)]">{item.label}</dt>
                    <dd className="text-sm leading-6 text-[var(--sh-muted)]">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>
        </header>

        <section className="pb-12 md:pb-18">
          <Reveal>
            <SectionHeading label="The problem">Plenty of data, hard to act on</SectionHeading>
          </Reveal>
          <Reveal className="rounded-2xl bg-[var(--sh-accent)] p-7 text-[#f6fafe] md:p-9">
            <p className="text-pretty text-[clamp(1.65rem,3vw,2.7rem)] font-medium leading-[1.08] tracking-[-0.035em]">
              The hospital had the data, but no way to compare it across departments or see what might come next.
            </p>
            <p className="mt-10 text-pretty text-sm leading-6 text-[#e3eef8]">
              The pilot brought departmental performance, patient distribution, medical resources, and regional context into one 3D view.
            </p>
          </Reveal>
          <Reveal className="mt-6">
            <p className="mb-4 text-sm leading-6 text-[var(--sh-muted)]">
              The platform was planned in three layers, and the first two were delivered.
            </p>
            <ol className="grid gap-5 md:grid-cols-3">
              {insightLevels.map((level, index) => {
                const last = index === insightLevels.length - 1;
                return (
                  <li
                    key={level.title}
                    className={`h-full rounded-2xl p-7 ${last ? 'bg-[var(--sh-text)] text-[#edf5fc]' : 'border border-[var(--sh-line)] bg-[var(--sh-surface)]'}`}
                  >
                    <p className={`text-sm font-medium ${last ? 'text-[#a6c6e2]' : 'text-[var(--sh-accent)]'}`}>
                      {layerLabels[index]}
                    </p>
                    <h3 className="mt-3 text-xl font-medium tracking-[-0.02em]">{level.title}</h3>
                    <p className={`mt-3 text-sm leading-6 ${last ? 'text-[#c5d8e9]' : 'text-[var(--sh-muted)]'}`}>{level.copy}</p>
                  </li>
                );
              })}
            </ol>
          </Reveal>
        </section>

        <section className="pb-12 md:pb-18">
          <Reveal>
            <SectionHeading
              label={layerLabels[0]}
              group={layerLabels[0]}
              intro="We visited hospitals and interviewed decision makers and information teams."
            >
              Field research shaped the brief
            </SectionHeading>
          </Reveal>
          <Reveal className="rounded-2xl border border-[var(--sh-line)] bg-[var(--sh-surface)] p-7 md:p-8">
            <ul className="space-y-4">
              {researchFindings.map((finding) => (
                <li key={finding.title} className="flex gap-3 text-base leading-7">
                  <span aria-hidden="true" className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--sh-accent)]" />
                  <p className="text-pretty">
                    <span className="mr-2 font-medium text-[var(--sh-text)]">{finding.title}</span>
                    <span className="text-[var(--sh-muted)]">{finding.copy}</span>
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="mt-6">
            <PressQuote
              href={PRESS_2018_URL}
              label="In the press · March 2018"
              caption="China News Service, 26 March 2018, on the strategic agreement between Tencent and the hospital to build a smart hospital. The cooperation covered pre-consultation, data analysis and visualization, and information security. Quote translated from Chinese."
            >
              “Tencent will help the hospital make effective use of its own historical and temporal data … providing a scientific basis for clinical research, service quality, and hospital management decisions.”
            </PressQuote>
          </Reveal>
        </section>

        <section className="pb-12 md:pb-18">
          <Reveal>
            <SectionHeading group={layerLabels[0]}>Structuring 140+ data dimensions</SectionHeading>
          </Reveal>
          <Reveal>
            <ol className="mb-3 grid grid-cols-3 gap-x-[2.1%] px-[2.2%]">
              {frameworkSteps.map((step, index) => (
                <li key={step} className="text-sm font-medium text-[var(--sh-text)] md:text-base">
                  <span className="mr-2 text-[var(--sh-accent)]">{String(index + 1).padStart(2, '0')}</span>
                  {step}
                </li>
              ))}
            </ol>
            <Figure
              src="/smart-hospital/card-sorting-en.png"
              alt="Field visit at the hospital, a sample of the 140+ source data fields, and the card sorting wall"
              frameClassName="aspect-[1024/410]"
            />
            <p className="mt-4 text-pretty text-base leading-7 text-[var(--sh-muted)]">
              We grouped the data by type (comparison, trend, distribution, and composition) and matched it to the six areas hospital leaders use to run the hospital. That gave us a first product architecture: the mind map below.
            </p>
          </Reveal>
          <Reveal className="mt-6">
            <Figure
              src="/smart-hospital/mindmap-en.png"
              alt="Product architecture: the operations system and its six modules with their key indicators"
              frameClassName="aspect-video"
            />
          </Reveal>
        </section>

        <section className="pb-12 md:pb-18">
          <Reveal>
            <SectionHeading label={layerLabels[1]} group={layerLabels[1]}>
              From hospital floor to city scale
            </SectionHeading>
          </Reveal>
          <Reveal className="mb-6">
            <div className="grid grid-cols-2 gap-4">
              <Figure
                src="/smart-hospital/it-review-screen.jpg"
                alt="Reviewing the map-based analysis design on screen with the hospital's IT department"
                frameClassName="aspect-[4/3]"
              />
              <Figure
                src="/smart-hospital/it-review-board.jpg"
                alt="Working through the module list on a whiteboard with the hospital's IT department"
                frameClassName="aspect-[4/3]"
              />
            </div>
            <p className="mt-3 text-sm leading-6 text-[var(--sh-muted)]">
              With the data sorted into modules, I drafted the product and UI architecture and took it to the hospital's IT department to check against their systems and data, module by module. The layout prototype below grew out of these reviews.
            </p>
          </Reveal>
          <Reveal className="rounded-2xl bg-[var(--sh-text)] p-6 text-[#edf5fc] md:p-9">
            <div className="grid gap-5 md:grid-cols-3">
              {scalePath.map((item) => (
                <article key={item.title} className="rounded-2xl border border-white/14 bg-white/[0.045] p-6">
                  <p className="text-sm font-medium text-[#a6c6e2]">{item.label}</p>
                  <h3 className="mt-3 text-2xl font-medium tracking-[-0.025em]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#c5d8e9]">{item.copy}</p>
                </article>
              ))}
            </div>
          </Reveal>
          <Reveal className="mt-6">
            <Figure
              src="/smart-hospital/scale-path-en.png"
              alt="Hospital leader's view in three scales: hospital operations, patient tracking, and regional resources"
              frameClassName="aspect-video"
            />
          </Reveal>
          <Reveal className="mt-6">
            <Figure
              src="/smart-hospital/layout-en.png"
              alt="Platform screen reading from overview stats, to the core 3D view, to drill-down detail"
              caption="The layout prototype: overview stats, then the core 3D view, then drill-down detail."
              frameClassName="aspect-video"
            />
          </Reveal>
        </section>

        <section className="pb-12 md:pb-18">
          <Reveal>
            <SectionHeading group={layerLabels[1]}>Four layers in the 3D scene</SectionHeading>
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-12 lg:items-stretch">
            <Reveal className="space-y-6 lg:col-span-7">
              <div className="flex aspect-[2/1] items-center overflow-hidden rounded-2xl border border-[var(--sh-line)] bg-black">
                <img
                  src="/smart-hospital/scene-layers.gif"
                  alt="3D scene layer diagram"
                  width={600}
                  height={300}
                  loading="lazy"
                  decoding="async"
                  className="block h-auto w-full object-contain"
                />
              </div>
              <Figure
                src="/smart-hospital/unreal-build.jpg"
                alt="Unreal Engine editor showing the 3D city scene with hospital buildings during development"
                caption="Building and tuning the 3D scene in Unreal Engine."
                frameClassName="aspect-[16/10]"
              />
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
              {sceneLayers.map((layer) => (
                <Reveal key={layer.title}>
                  <article className="h-full rounded-2xl border border-[var(--sh-line)] bg-[var(--sh-surface)] p-6">
                    <h3 className="text-lg font-medium text-[var(--sh-text)]">{layer.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--sh-muted)]">{layer.copy}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-12 md:pb-18">
          <Reveal>
            <SectionHeading
              group={layerLabels[1]}
              intro="Each of the six modules can be drilled down, filtered, and compared in the same 3D view."
            >
              Comparing departments, floors, and beds
            </SectionHeading>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Reveal>
              <ModulePlaceholder title="Overview" caption="Overview: census, revenue, and bed occupancy across the whole hospital." />
            </Reveal>
            <Reveal>
              <Figure
                src="/smart-hospital/outpatient-floors.gif"
                alt="Outpatient view expanding the 3D hospital floor by floor"
                caption="Outpatient: floors open up so departments can be compared level by level."
                frameClassName="aspect-[340/259] bg-black"
              />
            </Reveal>
            <Reveal>
              <Figure
                src="/smart-hospital/inpatient-beds.gif"
                alt="Inpatient view drilling down to individual beds in the 3D hospital"
                caption="Inpatient: drill down to single beds to check occupancy and critical patients."
                frameClassName="aspect-[340/259] bg-black"
              />
            </Reveal>
            <Reveal>
              <ModulePlaceholder title="Patients" caption="Patients: where patients come from, their age groups, and how they flow through the hospital." />
            </Reveal>
            <Reveal>
              <ModulePlaceholder title="Chronic disease" caption="Chronic disease: follow-up status and risk levels for long-term patients." />
            </Reveal>
            <Reveal>
              <ModulePlaceholder title="Resources" caption="Resources: staff, equipment, and supplies set against demand." />
            </Reveal>
          </div>
        </section>

        <section className="border-t border-[var(--sh-line)] pb-12 pt-10 md:pb-18 md:pt-12">
          <Reveal>
            <SectionHeading label="Outcome">First delivered in 2019</SectionHeading>
          </Reveal>
          <Reveal className="mb-6">
            <div className="grid gap-4 md:grid-cols-2">
              <Figure
                src="/smart-hospital/launch-briefing.jpg"
                alt="Presenting the platform on the hospital's video wall to leaders and staff"
                className="md:col-span-2"
                frameClassName="aspect-[16/9]"
              />
              <Figure
                src="/smart-hospital/launch-leaders.jpg"
                alt="Hospital leaders reviewing the patient heat map on the video wall"
                frameClassName="aspect-[4/3]"
              />
              <Figure
                src="/smart-hospital/launch-group.jpg"
                alt="Group photo of hospital leaders and the team at the launch"
                frameClassName="aspect-[4/3]"
              />
            </div>
            <p className="mt-3 text-sm leading-6 text-[var(--sh-muted)]">
              Launch at the hospital: the platform presented on the video wall to hospital leaders and staff.
            </p>
            <p className="text-sm leading-6 text-[var(--sh-muted)]">
              Deployments combined on-site hardware, private cloud infrastructure, cloud rendering, and remote version updates.
            </p>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-[var(--sh-accent-soft)] p-6">
                <p className="text-3xl font-medium tracking-[-0.04em] text-[var(--sh-text)]">2019</p>
                <p className="mt-2 text-sm leading-6 text-[var(--sh-muted)]">First hospital delivery</p>
              </div>
              <div className="rounded-2xl bg-[var(--sh-text)] p-6 text-[#edf5fc]">
                <p className="text-3xl font-medium tracking-[-0.04em]">23</p>
                <p className="mt-2 text-sm leading-6 text-[#c5d8e9]">Hospitals delivered by 2021</p>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-6 rounded-2xl border border-[var(--sh-line)] bg-[var(--sh-surface)] p-7 md:p-8">
            <h3 className="text-2xl font-medium tracking-[-0.025em] text-[var(--sh-text)]">My responsibilities</h3>
            <div className="mt-7 grid gap-7 md:grid-cols-2 md:gap-10">
              {contributions.map((group) => (
                <div key={group.title}>
                  <h4 className="text-sm font-medium text-[var(--sh-accent)]">{group.title}</h4>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-[var(--sh-muted)]">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="border-t border-[var(--sh-line)] pb-12 pt-10 md:pb-18 md:pt-12">
          <Reveal>
            <SectionHeading
              label="Emergency module · 2020"
              intro="The platform was already running when COVID-19 broke out just before Chinese New Year 2020. With the hospital's support, our team built a fever monitoring module and had it live within a week."
            >
              Monitoring COVID-19 in real time
            </SectionHeading>
          </Reveal>
          <Reveal className="grid gap-6 rounded-2xl bg-[var(--sh-text)] p-6 text-[#edf5fc] md:grid-cols-2 md:items-center md:p-9">
            <div>
              <p className="text-sm font-medium text-[#a6c6e2]">COVID-19</p>
              <p className="mt-4 text-[clamp(1.5rem,2.6vw,2.3rem)] font-medium leading-[1.12] tracking-[-0.03em]">
                A real-time map of fever patients across Nanshan District.
              </p>
              <p className="mt-6 text-pretty text-sm leading-6 text-[#c5d8e9]">
                The platform mapped the distribution and density of fever patients across Nanshan District, next to fever clinic activity, inpatient buildings, and bed occupancy, so the hospital could read the situation in one view.
              </p>
            </div>
            <Figure
              src="/smart-hospital/syndrome-heatmap.gif"
              alt="Syndrome distribution heat map across Nanshan District, centred on the hospital"
              frameClassName="aspect-[360/203] border-white/14 bg-black"
            />
          </Reveal>
          <Reveal className="mt-6 grid gap-6 md:grid-cols-12 md:items-center">
            <Figure
              src="/smart-hospital/covid-remote-build.jpg"
              alt="Working from home during quarantine, with the Unreal Engine editor open on the monitor"
              className="md:col-span-5"
              frameClassName="aspect-[4/3]"
            />
            <div className="md:col-span-7">
              <p className="text-sm font-medium text-[var(--sh-accent)]">Built from home</p>
              <h3 className="mt-3 text-2xl font-medium tracking-[-0.025em] text-[var(--sh-text)]">I led the fever monitoring module</h3>
              <p className="mt-4 text-pretty text-sm leading-6 text-[var(--sh-muted)]">
                Everyone was in quarantine and working from home. As design lead I owned the module directly and split the work across the team. I built the UE4 3D scene myself and handled front-end debugging and the data interfaces.
              </p>
            </div>
          </Reveal>
          <Reveal className="mt-6">
            <div className="grid gap-4 md:grid-cols-[1140fr_2369fr]">
              <Figure
                src="/smart-hospital/covid-tv-interview.png"
                alt="TV interview with the hospital's Party Secretary in front of the platform on the video wall"
                frameClassName="aspect-[1140/667]"
              />
              <Figure
                src="/smart-hospital/covid-3d-street-monitor.png"
                alt="Real-time 3D street-level COVID-19 monitoring view, with fever patient density over the district around the hospital"
                frameClassName="aspect-[1268/357] bg-black"
              />
            </div>
            <p className="mt-3 text-sm leading-6 text-[var(--sh-muted)]">
              Left: Shenzhen TV interviews the hospital's Party Secretary, Luo Xudong, in front of the platform on the video wall. Right: the real-time 3D street-level COVID-19 monitoring view. Both images from the HIT Expert Network report below.
            </p>
          </Reveal>
          <Reveal className="mt-6">
            <PressQuote
              href={PRESS_2020_URL}
              label="In the press · February 2020"
              caption="HIT Expert Network, 21 February 2020. Contributed by the hospital's Network Technology Department, describing its IT response to COVID-19. Quote translated from Chinese."
            >
              “The hospital worked with Tencent, Dashu Yida, and other companies to build a big-data visualization system for epidemic monitoring … It maps the distribution and density of fever patients across Nanshan District.”
            </PressQuote>
          </Reveal>
        </section>

        <section className="border-t border-[var(--sh-line)] pt-10 md:pt-12">
          <Reveal>
            <SectionHeading
              label={layerLabels[2]}
              group={layerLabels[2]}
              intro="The next stage, planned with Tencent AI Lab, was a timeline in the 3D scene so administrators could compare one period with another, as a step toward forecasting."
            >
              The next stage, planned but not built
            </SectionHeading>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 md:items-start">
            <Reveal>
              <Figure
                src="/smart-hospital/sky-day-night.gif"
                alt="Sky system moving the 3D hospital scene from day to night"
                caption="Built: the sky system moves the scene from day to night. Planned: a timeline that would replay the data itself."
                frameClassName="aspect-[360/218] bg-black"
              />
            </Reveal>
            <Reveal className="rounded-2xl border border-dashed border-[var(--sh-line)] bg-[var(--sh-surface)] p-7 md:p-8">
              <p className="text-sm font-medium text-[var(--sh-accent)]">Planned with Tencent AI Lab · not built</p>
              <ul className="mt-6 space-y-5">
                {timelinePlan.map((item) => (
                  <li key={item.title}>
                    <h3 className="text-lg font-medium tracking-[-0.015em] text-[var(--sh-text)]">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-[var(--sh-muted)]">{item.copy}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <Reveal>
          <CaseStudyThread slug={SLUG} />
        </Reveal>
      </div>
      </article>
    </LocalizedContent>
  );
}
