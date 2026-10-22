import { type CSSProperties, type ReactNode } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { LocalizedContent } from '../i18n/LocalizedContent';
import { smartMarathonTranslations } from '../i18n/caseStudyTranslations';
import { CaseStudyThread, MainLineTag } from '../components/CaseStudyThread';
import { useLanguage } from '../context/LanguageContext';

const SLUG = 'tencent-micision-smart-marathon';
const ASSETS = '/smart-marathon';
const NEWS_URL = 'https://baijiahao.baidu.com/s?id=1631502413485477426&wfr=spider&for=pc';

const metadata = [
  { label: 'Type', value: 'Race command platform' },
  { label: 'Duration', value: 'January-April 2019' },
  { label: 'Role', value: 'Product manager and design lead' },
  { label: 'Team', value: '3 people' },
  { label: 'Delivery', value: '2019 Yangzhou International Half Marathon' },
  { label: 'Scope', value: 'Coordination, research, visualization, Unreal Engine, development' },
];

const projectConstraints = [
  { value: 'First', label: 'Case of its kind in China, with no earlier research to draw on' },
  { value: '6', label: 'Partner organizations' },
  { value: '< 1 month', label: 'To deliver' },
  { value: '3', label: 'People, with two other projects running at the same time' },
];

const researchQuestions = [
  'Which data do they need, and in which situation?',
  'What does the content have to include?',
  'How fast does it have to respond?',
  'How much data is there?',
];

const requirements = [
  {
    area: 'Map',
    rows: [
      ['Problem', 'Landmark models along the route are too coarse', 'Refine the models'],
      ['Need', 'Mark hospitals where ambulances are based', 'Show those hospitals on the map'],
      ['Need', 'Scenic spots need more detail', 'Finer buildings; separate scenic scenes, people as models, cameras'],
      ['Need', 'Locations are given in kilometers', 'Add distance markers'],
    ],
  },
  {
    area: 'Vehicles',
    rows: [
      ['Problem', 'Ambulances and lead cars look alike', 'Separate models and names'],
      ['Need', 'Finer vehicle types', 'Models and IDs for ambulance, lead, sweep, and patrol'],
      ['Need', 'Idle vehicles stay at a hospital', "Mark each ambulance's base hospital"],
      ['Need', 'Ambulance status', 'Standby, en route, treating, returning'],
      ['Need', 'The rescue itself', 'Destination, route, and camera after pickup'],
    ],
  },
  {
    area: 'People',
    rows: [
      ['Problem', 'People are hard to see', 'Stronger colors, or different effects'],
      ['Need', 'Find one group and what they are doing', "One view per group, plus that person's details"],
      ['Problem', 'New emergencies do not show', 'Count them, grade the severity, keep a rescue history'],
    ],
  },
  {
    area: 'System',
    rows: [
      ['Problem', 'Hard to aim the view or find a place', 'Pan the map, or drag a filter to a kilometer'],
      ['Need', 'Stronger live coverage', 'Commentary, aerial shots, orbiting views'],
      ['Need', 'A race clock', 'Add a race clock'],
      ['Need', 'Command vehicle screen', 'Adapt the layout'],
      ['Need', 'Shared data', "Yangzhou's cloud: GIS, road cameras, police heat map, emergency command"],
    ],
  },
];

const chartFramework = [
  {
    title: 'Composition',
    branches: [
      { when: 'Static share', charts: ['Concentric chart'] },
      { when: 'Changing, few periods: relative difference', charts: ['100% stacked bar'] },
      { when: 'Changing, few periods: absolute difference', charts: ['Stacked bar'] },
      { when: 'Changing, many periods', charts: ['Area chart'] },
    ],
  },
  {
    title: 'Distribution',
    branches: [
      { when: 'Geographic location', charts: ['Outdoor map', 'Indoor map'] },
      { when: 'Numeric, one dimension', charts: ['Column map', 'Landmark'] },
      { when: 'Numeric, two dimensions', charts: ['Scatter map', 'Heat map'] },
      { when: 'Numeric, many dimensions', charts: ['Arc map', 'Radial map'] },
    ],
  },
  {
    title: 'Comparison',
    branches: [
      { when: 'Many items', charts: ['Table'] },
      { when: 'One category', charts: ['Horizontal bar'] },
      { when: 'Several categories', charts: ['Stacked bar'] },
    ],
  },
  {
    title: 'Trend',
    branches: [
      { when: 'Many dates', charts: ['Line chart'] },
      { when: 'Few dates, many categories', charts: ['Multi-line chart'] },
      { when: 'Few dates, few categories', charts: ['Column chart'] },
    ],
  },
];

const runnerGroups = [
  { label: 'Referees', color: '#f5c518' },
  { label: 'Security staff', color: '#34c759' },
  { label: 'Pacers', color: '#ff5a1f' },
  { label: 'Runners', color: '#2f80ff' },
  { label: 'Medical runners', color: '#ff6fae' },
];

const emergencyFlow = [
  { title: 'Detect', copy: 'A wristband reports an abnormal reading.' },
  { title: 'Locate', copy: "An alarm spreads out from the runner's position on the map." },
  { title: 'Assess', copy: "Click the alarm to see the runner's details." },
  { title: 'Dispatch', copy: 'Send help from the nearest first-aid station or ambulance.' },
];

const fieldCalibration = [
  {
    title: 'Location accuracy',
    copy: 'Checked whether the GIS positions reported by each wristband matched where runners actually were on the course.',
  },
  {
    title: 'Sampling frequency',
    copy: 'Tested how often wristbands should collect and send data so the command screen stayed current.',
  },
  {
    title: 'Battery life',
    copy: 'Measured whether the battery could last the full race at each collection and upload rate.',
  },
  {
    title: 'Alert rules',
    copy: 'Reviewed abnormal readings with the event team to separate false alarms from genuine health risks.',
  },
];

const contributions = [
  {
    title: 'Product management',
    items: ['Defined the product scope', 'Planned the delivery process', 'Set priorities for a delivery of under a month'],
  },
  {
    title: 'Research and design',
    items: ['Interviewed command staff', 'Turned their scenarios into the requirements list', 'Designed the chart framework and interactions'],
  },
  {
    title: '3D and development',
    items: ['Designed the Yangzhou 3D scene', 'Designed the markers, particles, and alarms', 'Supported the Unreal Engine build'],
  },
  {
    title: 'Coordination and delivery',
    items: [
      'Aligned six partner organizations',
      'Calibrated wristband and location data on site in Yangzhou',
      'Defined abnormal-signal alert rules with the event team',
      'Supported the race-day launch',
    ],
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
      transition={{ duration: 0.56, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ children, intro, label }: { children: ReactNode; intro?: string; label?: string }) {
  return (
    <div className="mb-8 md:mb-10">
      {label && <p className="mb-4 text-sm font-medium text-[var(--sm-accent)]">{label}</p>}
      <h2 className="text-balance text-[clamp(2.1rem,4.4vw,4.7rem)] font-medium leading-[0.98] tracking-[-0.045em] text-[var(--sm-text)]">
        {children}
      </h2>
      {intro && <p className="mt-5 text-pretty text-base leading-7 text-[var(--sm-muted)]">{intro}</p>}
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
      <div className={`overflow-hidden rounded-2xl border border-[var(--sm-line)] bg-[#05070b] ${frameClassName}`}>
        <img src={src} alt={alt} loading="lazy" decoding="async" className="block h-full w-full object-cover" />
      </div>
      {caption && <figcaption className="mt-3 text-pretty text-sm leading-6 text-[var(--sm-muted)]">{caption}</figcaption>}
    </figure>
  );
}

function PressQuote({ href, label, caption, children }: { href: string; label: string; caption: string; children: ReactNode }) {
  const { isCN } = useLanguage();

  return (
    <figure className="rounded-2xl border border-[var(--sm-line)] bg-[var(--sm-surface)] p-7 md:p-9">
      <p className="text-sm font-medium text-[var(--sm-accent)]">{label}</p>
      <blockquote className="mt-4 text-pretty text-[clamp(1.25rem,2.1vw,1.8rem)] font-medium leading-[1.25] tracking-[-0.02em] text-[var(--sm-text)]">
        {children}
      </blockquote>
      <figcaption className="mt-6 text-pretty text-sm leading-6 text-[var(--sm-muted)]">{caption}</figcaption>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--sm-accent)] transition-colors hover:text-[var(--sm-text)]"
      >
        {isCN ? '阅读原文' : 'Read the article (Chinese)'} <ArrowUpRight size={15} strokeWidth={1.7} />
      </a>
    </figure>
  );
}

export function SmartMarathon() {
  return (
    <LocalizedContent translations={smartMarathonTranslations}>
      <article
      className="relative min-h-[100dvh] overflow-hidden bg-[var(--sm-bg)] text-[var(--sm-text)]"
      style={
        {
          '--sm-bg': '#f1f7f3',
          '--sm-surface': '#fbfefc',
          '--sm-text': '#17332a',
          '--sm-muted': '#5f746b',
          '--sm-accent': '#3f7c59',
          '--sm-accent-soft': '#dbeadf',
          '--sm-line': '#cadbcf',
          '--project-accent': '#3f7c59',
          '--project-muted': '#5f746b',
          '--project-nav-surface': 'rgba(248, 252, 249, 0.9)',
        } as CSSProperties
      }
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_78%_10%,rgba(63,124,89,0.15),transparent_27rem)]" />

      <div className="relative mx-auto w-full max-w-[1320px] px-5 pb-24 pt-10 sm:px-8 md:pb-32 md:pt-14 lg:px-12">
        <Link
          to="/work"
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-[var(--sm-line)] bg-white/55 px-4 py-2 text-sm text-[var(--sm-muted)] transition-colors hover:border-[var(--sm-accent)] hover:text-[var(--sm-text)] active:translate-y-px"
        >
          <ArrowLeft size={16} strokeWidth={1.7} />
          All projects
        </Link>

        <header className="pb-14 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.66, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium tracking-[0.04em] text-[var(--sm-accent)]">
              <MainLineTag slug={SLUG} />
              <span aria-hidden="true">·</span>
              <span>Tencent Micision</span>
            </p>
            <h1 className="text-[clamp(3.6rem,7vw,6.6rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-[var(--sm-text)]">
              Smart Marathon
            </h1>
            <p className="mt-6 text-pretty text-lg leading-8 text-[var(--sm-muted)]">
              I led product and design for a race command platform that put runners, ambulances, and first-aid stations on one 3D map of Yangzhou, used live at the 2019 Yangzhou International Half Marathon.
            </p>
          </motion.div>

          <motion.div
            className="mt-10 grid gap-6 md:mt-12 md:grid-cols-12 md:items-stretch"
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.74, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col md:col-span-8">
              <div className="aspect-video overflow-hidden rounded-2xl border border-[var(--sm-line)] bg-black shadow-[0_28px_70px_rgba(38,83,57,0.13)]">
                <video
                  className="block h-full w-full object-contain"
                  controls
                  playsInline
                  preload="metadata"
                  poster="/videos/smart-marathon-demo-poster.jpg"
                  aria-label="Smart Marathon V2.0 demo on the Yangzhou 3D map"
                >
                  <source src="/videos/smart-marathon-demo.mp4" type="video/mp4" />
                  <a href="/videos/smart-marathon-demo.mp4">Download the project video</a>
                </video>
              </div>
              <p className="mt-3 text-sm leading-6 text-[var(--sm-muted)]">Smart Marathon V2.0 demo, recorded on 20 May 2020 (1:07).</p>
            </div>

            <div className="rounded-2xl border border-[var(--sm-line)] bg-[var(--sm-surface)] p-6 md:col-span-4 md:p-7">
              <dl className="grid grid-cols-2 gap-x-5 gap-y-6">
                {metadata.map((item, index) => (
                  <div key={item.label} className={index >= 4 ? 'col-span-2' : ''}>
                    <dt className="mb-1.5 text-sm font-medium text-[var(--sm-accent)]">{item.label}</dt>
                    <dd className="text-sm leading-6 text-[var(--sm-muted)]">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>
        </header>

        <section className="pb-12 md:pb-18">
          <Reveal>
            <SectionHeading label="The problem">One screen for a live race</SectionHeading>
          </Reveal>
          <Reveal className="rounded-2xl bg-[var(--sm-accent)] p-7 text-[#f5fbf7] md:p-9">
            <p className="text-pretty text-[clamp(1.65rem,3vw,2.7rem)] font-medium leading-[1.08] tracking-[-0.035em]">
              When a runner gets into trouble, the command room has to find them on the big screen and send the nearest first-aid team.
            </p>
            <p className="mt-10 text-pretty text-sm leading-6 text-[#dfefe4]">
              Falls, cardiac arrest, heatstroke, wrong turns, and runners too tired to reach the finish are all race-day risks. A race relies on a large crew of security staff, referees, ambulances, first-aid stations, and medics.
            </p>
          </Reveal>
        </section>

        <section className="pb-12 md:pb-18">
          <Reveal>
            <SectionHeading>Six partners, under a month</SectionHeading>
          </Reveal>
          <Reveal className="rounded-2xl bg-[var(--sm-text)] p-6 text-[#eff8f2] md:p-9">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {projectConstraints.map((item) => (
                <div key={item.label}>
                  <p className="text-3xl font-medium tracking-[-0.04em] text-[#a9d0b6]">{item.value}</p>
                  <p className="mt-3 text-pretty text-sm leading-6 text-[#c8ddd0]">{item.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="mt-6 space-y-4 text-pretty text-base leading-7 text-[var(--sm-muted)]">
            <p>
              The partners were the Yangzhou sports organizing committee, the traffic police, the emergency command center, the Shanghai wristband maker Lingling Zhineng (零零智能), Yangzhou Telecom, and Shenzhen Pingzi Technology.
            </p>
            <p>Besides design, I also handled project management, product management, and development.</p>
          </Reveal>
        </section>

        <section className="pb-12 md:pb-18">
          <Reveal>
            <SectionHeading intro="We interviewed the people running the command center: sports bureau administrators, emergency commanders, and security commanders.">
              Researching the command room
            </SectionHeading>
          </Reveal>
          <Reveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {researchQuestions.map((question) => (
              <div key={question} className="rounded-2xl border border-[var(--sm-line)] bg-[var(--sm-surface)] p-6 text-sm font-medium leading-6 text-[var(--sm-text)]">
                {question}
              </div>
            ))}
          </Reveal>
          <Reveal className="mt-6">
            <p className="mb-4 text-pretty text-base leading-7 text-[var(--sm-muted)]">
              We then looked at who receives the information next, filled in the missing dimensions, and wrote the requirements list.
            </p>
            <div className="overflow-hidden rounded-2xl border border-[var(--sm-line)] bg-[var(--sm-surface)]">
              <p className="border-b border-[var(--sm-line)] px-4 py-3 text-sm font-medium text-[var(--sm-text)] sm:px-5">
                Requirements for the Yangzhou race
              </p>
              <table className="w-full border-collapse text-left text-[13px] leading-5">
                <thead className="bg-[var(--sm-accent-soft)] text-[var(--sm-text)]">
                  <tr>
                    <th scope="col" className="w-[4.5rem] px-3 py-2 font-medium sm:px-4">Area</th>
                    <th scope="col" className="px-3 py-2 font-medium sm:px-4">Problem or need</th>
                    <th scope="col" className="px-3 py-2 font-medium sm:px-4">Solution</th>
                  </tr>
                </thead>
                {requirements.map((group) => (
                  <tbody key={group.area}>
                    {group.rows.map(([kind, need, solution], index) => (
                      <tr key={need} className="border-t border-[var(--sm-line)] align-top">
                        {index === 0 && (
                          <th
                            scope="rowgroup"
                            rowSpan={group.rows.length}
                            className="whitespace-nowrap px-3 py-1.5 font-medium text-[var(--sm-text)] sm:px-4"
                          >
                            {group.area}
                          </th>
                        )}
                        <td className="px-3 py-1.5 text-[var(--sm-text)] sm:px-4">
                          <span className="mr-2 font-medium text-[var(--sm-accent)]">{kind}</span>
                          {need}
                        </td>
                        <td className="px-3 py-1.5 text-[var(--sm-muted)] sm:px-4">{solution}</td>
                      </tr>
                    ))}
                  </tbody>
                ))}
              </table>
            </div>
          </Reveal>
        </section>

        <section className="pb-12 md:pb-18">
          <Reveal>
            <SectionHeading intro="I sorted the race data by how each set relates: composition, distribution, comparison, or trend. Each relationship points to a set of chart forms.">
              Matching data to visual form
            </SectionHeading>
          </Reveal>
          <Reveal className="grid gap-5 md:grid-cols-2">
            {chartFramework.map((group) => (
              <article key={group.title} className="h-full rounded-2xl border border-[var(--sm-line)] bg-[var(--sm-surface)] p-6 md:p-7">
                <h3 className="text-xl font-medium tracking-[-0.02em] text-[var(--sm-text)]">{group.title}</h3>
                <ul className="mt-4 divide-y divide-[var(--sm-line)]">
                  {group.branches.map((branch) => (
                    <li key={branch.when} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3 text-sm leading-6">
                      <span className="text-[var(--sm-muted)]">{branch.when}</span>
                      <span className="flex flex-wrap gap-2">
                        {branch.charts.map((chart) => (
                          <span key={chart} className="rounded-full bg-[var(--sm-accent-soft)] px-3 py-0.5 text-xs font-medium text-[var(--sm-text)]">
                            {chart}
                          </span>
                        ))}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </Reveal>
        </section>

        <section className="pb-12 md:pb-18">
          <Reveal>
            <SectionHeading intro="I used the GIS data to build a workflow in UE4 that generates the city automatically. I then designed the markers for landmarks, hospitals, and distance along the course.">
              Building Yangzhou in 3D
            </SectionHeading>
          </Reveal>
          <Reveal className="grid gap-4 sm:grid-cols-2">
            <Figure src={`${ASSETS}/scene-model.gif`} alt="The 3D model of Yangzhou" frameClassName="aspect-[440/240]" />
            <Figure src={`${ASSETS}/scene-night.gif`} alt="The 3D Yangzhou scene lit for the big screen" frameClassName="aspect-[440/240]" />
          </Reveal>
          <Reveal className="mt-6">
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              <Figure src={`${ASSETS}/marker-landmark.gif`} alt="Landmark marker" frameClassName="aspect-[850/774]" />
              <Figure src={`${ASSETS}/marker-hospital.gif`} alt="Hospital marker" frameClassName="aspect-[850/774]" />
              <Figure src={`${ASSETS}/marker-distance.gif`} alt="Distance and station marker" frameClassName="aspect-[850/774]" />
            </div>
            <p className="mt-3 text-pretty text-sm leading-6 text-[var(--sm-muted)]">
              Left to right: landmark, hospital, and distance markers. The labels are placeholders for the landmark name, hospital name, race distance, and station name.
            </p>
          </Reveal>

          <Reveal className="mt-10 grid gap-6 lg:grid-cols-12 lg:items-center">
            <Figure src={`${ASSETS}/runners.gif`} alt="Runners shown as colored particles along the course" frameClassName="aspect-[430/289]" className="lg:col-span-7" />
            <div className="lg:col-span-5 lg:pl-4">
              <h3 className="text-2xl font-medium tracking-[-0.025em] text-[var(--sm-text)]">Five particle colors</h3>
              <p className="mt-4 text-pretty text-sm leading-6 text-[var(--sm-muted)]">
                I gave each group on the course its own particle color. Ordinary runners are blue, the strongest contrast with the course. The particles pulse at the same rate the wristbands refresh, so people can tell the data is live.
              </p>
              <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--sm-text)]">
                {runnerGroups.map((group) => (
                  <li key={group.label} className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: group.color }} aria-hidden="true" />
                    {group.label}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="mt-10">
            <div className="grid gap-4 sm:grid-cols-2">
              <Figure src={`${ASSETS}/ambulances-route.gif`} alt="Ambulances and medical stations along the route" frameClassName="aspect-[348/243]" />
              <Figure src={`${ASSETS}/ambulance-detail.gif`} alt="Ambulance marker" frameClassName="aspect-[348/243]" />
            </div>
            <p className="mt-3 text-pretty text-sm leading-6 text-[var(--sm-muted)]">
              Left: ambulances and medical stations along the route. Right: the ambulance marker. Clicking an ambulance shows its driver, phone number, and plate.
            </p>
          </Reveal>
        </section>

        <section className="pb-12 md:pb-18">
          <Reveal>
            <SectionHeading>Designing the emergency loop</SectionHeading>
          </Reveal>
          <Reveal className="rounded-2xl bg-[var(--sm-accent)] p-6 text-[#f5fbf7] md:p-9">
            <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {emergencyFlow.map((item) => (
                <li key={item.title} className="rounded-2xl border border-white/16 bg-white/[0.055] p-6">
                  <h3 className="text-xl font-medium tracking-[-0.02em]">{item.title}</h3>
                  <p className="mt-3 text-pretty text-sm leading-6 text-[#dfefe4]">{item.copy}</p>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal className="mt-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <Figure src={`${ASSETS}/alarm-1.gif`} alt="An alarm spreading from a runner on the course" frameClassName="aspect-[400/280]" />
              <Figure src={`${ASSETS}/alarm-2.gif`} alt="Runner details and nearby medical resources during an alarm" frameClassName="aspect-[370/259]" />
            </div>
            <p className="mt-3 text-pretty text-sm leading-6 text-[var(--sm-muted)]">
              The alarm spreads out from the runner. From there, the commander opens the runner's details and dispatches the nearest station or ambulance on the map.
            </p>
          </Reveal>
        </section>

        <section className="pb-12 md:pb-18">
          <Reveal>
            <SectionHeading intro="This was my first project using smart-hardware data in a live event. Before race day, I worked in Yangzhou with the official wristband team to test the data feeding the command screen.">
              Calibrating real hardware on site
            </SectionHeading>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {fieldCalibration.map((item) => (
              <Reveal key={item.title}>
                <article className="h-full rounded-2xl border border-[var(--sm-line)] bg-[var(--sm-surface)] p-6">
                  <h3 className="text-lg font-medium tracking-[-0.015em] text-[var(--sm-text)]">{item.title}</h3>
                  <p className="mt-3 text-pretty text-sm leading-6 text-[var(--sm-muted)]">{item.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-[var(--sm-accent)] p-7 text-[#f5fbf7] md:p-8">
              <p className="text-sm font-medium text-[#cfe6d7]">Outcome</p>
              <p className="mt-3 text-pretty text-xl font-medium leading-snug tracking-[-0.02em]">
                A collection and upload schedule that kept the data fresh while letting every wristband last the whole race.
              </p>
            </div>
            <div className="rounded-2xl border border-[var(--sm-line)] bg-[var(--sm-surface)] p-7 md:p-8">
              <p className="text-sm font-medium text-[var(--sm-accent)]">Alert logic</p>
              <p className="mt-3 text-pretty text-xl font-medium leading-snug tracking-[-0.02em] text-[var(--sm-text)]">
                Only confirmed abnormal signals reached the command screen, so supervisors could tell the medical team at a given kilometer exactly which runner needed help.
              </p>
            </div>
          </Reveal>
        </section>

        <section className="border-t border-[var(--sm-line)] pt-10 md:pt-12">
          <Reveal>
            <SectionHeading label="Outcome" intro="The platform went live in the race command center at the Yangzhou International Half Marathon on 21 April 2019.">
              Race day, April 2019
            </SectionHeading>
          </Reveal>
          <Reveal>
            <Figure
              src={`${ASSETS}/race-day-command-room.webp`}
              alt="Staff in the race command room watching the platform on the video wall"
              caption="The race supervision room on race day."
              frameClassName="aspect-[865/649] bg-[var(--sm-surface)]"
              className="mx-auto max-w-[54rem]"
            />
          </Reveal>
          <Reveal className="mt-6 grid gap-6 md:grid-cols-2 md:items-start">
            <Figure
              src={`${ASSETS}/race-day-8km.webp`}
              alt="A staff member on the phone at the command desk"
              caption="During the race, the platform flagged a runner at 8 km with an abnormal heart rate. Staff called a nearby ambulance to help."
              frameClassName="aspect-[865/545] bg-[var(--sm-surface)]"
            />
            <Figure
              src={`${ASSETS}/race-day-vice-mayor.webp`}
              alt="Officials and the team in front of the video wall in the command room"
              caption="Yu Ting, Vice Mayor of Yangzhou, visited the command room during the race, praised the big screen as innovative, and asked for specific improvements."
              frameClassName="aspect-[865/552] bg-[var(--sm-surface)]"
            />
          </Reveal>

          <Reveal className="mt-6">
            <PressQuote
              href={NEWS_URL}
              label="In the press · April 2019"
              caption="China Daily's official Baidu account, 22 April 2019, on the Yangzhou International Half Marathon the day before, which drew more than 30,000 registered runners. The article called the platform China's first smart marathon management platform and credited Tencent's big data, maps, visual design, and medical cloud teams, with partners Yanrui Wangke (晏锐网科) and Lingling Zhineng (零零智能). Quote translated from Chinese."
            >
              “Through AI and big-data analysis, the decision-support platform can spot runners whose heart rate is nearing a dangerous level the moment it happens and warn managers, heading off trouble before it starts.”
            </PressQuote>
          </Reveal>

          <Reveal className="mt-8 rounded-2xl border border-[var(--sm-line)] bg-[var(--sm-surface)] p-7 md:p-9">
            <h3 className="text-2xl font-medium tracking-[-0.025em] text-[var(--sm-text)]">My responsibilities</h3>
            <div className="mt-7 grid gap-7 sm:grid-cols-2">
              {contributions.map((group) => (
                <div key={group.title}>
                  <h4 className="text-sm font-medium text-[var(--sm-accent)]">{group.title}</h4>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-[var(--sm-muted)]">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <Reveal>
          <CaseStudyThread slug={SLUG} showConnections={false} />
        </Reveal>
      </div>
      </article>
    </LocalizedContent>
  );
}
