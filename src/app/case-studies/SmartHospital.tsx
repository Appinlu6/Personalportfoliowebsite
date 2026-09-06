import { type CSSProperties, type ReactNode } from 'react';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const metadata = [
  { label: 'Type', value: 'Hospital operations platform' },
  { label: 'Duration', value: '2018-2021' },
  { label: 'Role', value: 'Product design lead' },
  { label: 'Pilot', value: 'A hospital in Shenzhen' },
  { label: 'Scope', value: 'Research, product framework, data visualization, 3D experience' },
  { label: 'Delivery', value: 'Private cloud and cloud rendering' },
];

const researchFindings = [
  {
    title: 'Fragmented indicators',
    copy: 'Most reports showed isolated metrics, making relationships between departments difficult to see.',
  },
  {
    title: 'No shared analytical view',
    copy: 'Data lived across separate platforms, so administrators lacked one place for comparison and review.',
  },
  {
    title: 'Low practical use',
    copy: 'The data existed, but its hierarchy and presentation made it difficult to use during daily decisions.',
  },
  {
    title: 'Limited regional context',
    copy: 'Hospital data rarely connected with community and city data, reducing its value for planning.',
  },
];

const frameworkSteps = [
  {
    title: 'Visit hospitals',
    copy: 'We observed daily reporting routines and interviewed hospital directors, department heads, and information teams.',
  },
  {
    title: 'Collect the dataset',
    copy: 'The pilot hospital provided more than 140 data dimensions for the first working demonstration.',
  },
  {
    title: 'Group the indicators',
    copy: 'Card sorting helped us find relationships, priorities, and gaps across the source data.',
  },
  {
    title: 'Build the scenario',
    copy: 'We connected the modules through a viewing path that moved from operations to regional planning.',
  },
];

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

const productModules = ['Overview', 'Outpatient', 'Inpatient', 'Patients', 'Chronic disease', 'Resources'];

const sceneLayers = [
  {
    title: 'Data',
    copy: 'Risk, distribution, magnitude, and change occupy the clearest visual position.',
  },
  {
    title: 'Infrastructure',
    copy: 'Hospitals, landmarks, roads, and bridges make the scene recognizable.',
  },
  {
    title: 'Administrative regions',
    copy: 'Boundaries and transport networks support comparison across locations.',
  },
  {
    title: 'Natural conditions',
    copy: 'Terrain, rivers, and vegetation preserve geographic context.',
  },
];

const contributions = [
  {
    title: 'Product direction',
    items: ['Led the 0-to-1 product definition', 'Translated field findings into a product framework', 'Structured the six operational modules'],
  },
  {
    title: 'Design and delivery',
    items: ['Designed the cross-scale viewing path', 'Defined the 3D data presentation language', 'Supported component reuse and hospital deployment'],
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

function SectionHeading({ children, intro }: { children: ReactNode; intro?: string }) {
  return (
    <div className="mb-8 max-w-[46rem] md:mb-10">
      <h2 className="text-[clamp(2.1rem,4.4vw,4.7rem)] font-medium leading-[0.98] tracking-[-0.045em] text-[var(--sh-text)]">
        {children}
      </h2>
      {intro && <p className="mt-5 max-w-[62ch] text-base leading-7 text-[var(--sh-muted)]">{intro}</p>}
    </div>
  );
}

function MediaPlaceholder({
  title,
  note,
  className = '',
}: {
  title: string;
  note: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`${title}. ${note}`}
      className={`flex min-h-0 items-center justify-center overflow-hidden rounded-2xl border border-[var(--sh-line)] bg-[linear-gradient(145deg,var(--sh-surface),var(--sh-placeholder))] p-7 text-center ${className}`}
    >
      <div className="max-w-[18rem]">
        <p className="text-base font-medium tracking-[-0.015em] text-[var(--sh-text)]">{title}</p>
        <p className="mt-2 text-sm leading-6 text-[var(--sh-muted)]">{note}</p>
      </div>
    </div>
  );
}

export function SmartHospital() {
  return (
    <article
      className="relative min-h-[100dvh] overflow-hidden bg-[var(--sh-bg)] text-[var(--sh-text)]"
      style={
        {
          '--sh-bg': '#f2f7fc',
          '--sh-surface': '#fbfdff',
          '--sh-placeholder': '#e4edf6',
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
            <p className="mb-4 text-sm font-medium tracking-[0.08em] text-[var(--sh-accent)]">Tencent Micision</p>
            <h1 className="text-[clamp(3.9rem,7vw,6.7rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-[var(--sh-text)]">
              Smart Hospital
            </h1>
            <p className="mt-6 max-w-[43rem] text-lg leading-8 text-[var(--sh-muted)]">
              A medical data platform that helps hospital leaders read operations across departments, regions, and time.
            </p>
          </motion.div>

          <motion.div
            className="mt-10 grid gap-6 md:mt-12 md:grid-cols-12 md:items-stretch"
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.76, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col md:col-span-8">
              <MediaPlaceholder
                title="Project overview video"
                note="16:9 video showing the product, navigation, and hospital scenarios"
                className="aspect-video w-full shadow-[0_28px_70px_rgba(50,78,108,0.13)]"
              />
              <p className="mt-3 text-sm leading-6 text-[var(--sh-muted)]">Video will be added when the final source file is available.</p>
            </div>

            <div className="rounded-2xl border border-[var(--sh-line)] bg-[var(--sh-surface)] p-6 md:col-span-4 md:p-7">
              <dl className="grid grid-cols-2 gap-x-5 gap-y-6">
                {metadata.map((item, index) => (
                  <div key={item.label} className={index === 4 || index === 5 ? 'col-span-2' : ''}>
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
            <SectionHeading intro="Hospital leaders had access to large amounts of operational data, but the reporting tools made comparison, prioritization, and early warning difficult.">
              Turning reports into a decision space
            </SectionHeading>
          </Reveal>
          <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-stretch">
            <div className="rounded-2xl bg-[var(--sh-accent)] p-7 text-[#f6fafe] md:p-9 lg:col-span-5">
              <p className="text-[clamp(1.65rem,3vw,2.7rem)] font-medium leading-[1.08] tracking-[-0.035em]">
                The challenge was to help administrators see how hospital operations behaved as one connected system.
              </p>
              <p className="mt-10 max-w-[34rem] text-sm leading-6 text-[#e3eef8]">
                The pilot brought departmental performance, patient distribution, medical resources, and regional context into one visual environment.
              </p>
            </div>
            <MediaPlaceholder
              title="Product overview image"
              note="16:10 interface view showing the hospital operations platform"
              className="aspect-[16/10] lg:col-span-7"
            />
          </Reveal>
        </section>

        <section className="pb-12 md:pb-18">
          <Reveal>
            <SectionHeading intro="We visited hospitals, observed daily reporting routines, and interviewed decision makers and information teams.">
              Field research shaped the brief
            </SectionHeading>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            {researchFindings.map((finding, index) => (
              <Reveal key={finding.title}>
                <article
                  className={`h-full rounded-2xl p-7 md:p-8 ${
                    index === 0 ? 'bg-[var(--sh-accent-soft)]' : 'border border-[var(--sh-line)] bg-[var(--sh-surface)]'
                  }`}
                >
                  <h3 className="text-xl font-medium tracking-[-0.02em] text-[var(--sh-text)]">{finding.title}</h3>
                  <p className="mt-4 max-w-[36rem] text-sm leading-6 text-[var(--sh-muted)]">{finding.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="pb-12 md:pb-18">
          <Reveal>
            <SectionHeading intro="The pilot dataset contained more than 140 dimensions. We used card sorting and scenario planning to turn those inputs into a coherent product structure.">
              Structuring 140+ data dimensions
            </SectionHeading>
          </Reveal>
          <div className="grid gap-5 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <MediaPlaceholder
                title="Research and card sorting"
                note="4:3 image showing hospital visits, source data, and the grouping workshop"
                className="aspect-[4/3]"
              />
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
              {frameworkSteps.map((step) => (
                <Reveal key={step.title}>
                  <article className="rounded-2xl border border-[var(--sh-line)] bg-[var(--sh-surface)] p-6">
                    <h3 className="text-lg font-medium tracking-[-0.015em] text-[var(--sh-text)]">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--sh-muted)]">{step.copy}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal className="mt-6">
            <MediaPlaceholder
              title="Product framework diagram"
              note="16:9 diagram connecting the six product modules and their interaction paths"
              className="aspect-video"
            />
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {productModules.map((module) => (
                <div key={module} className="rounded-2xl border border-[var(--sh-line)] bg-white/70 px-4 py-4 text-sm font-medium text-[var(--sh-text)]">
                  {module}
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="pb-12 md:pb-18">
          <Reveal>
            <SectionHeading intro="The viewing path begins with in-hospital operations, expands to regional patient distribution, and ends with city-wide medical resources.">
              From hospital floor to city scale
            </SectionHeading>
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
            <MediaPlaceholder
              title="Cross-scale experience path"
              note="16:9 image showing the transition from hospital operations to regional and city views"
              className="aspect-video"
            />
          </Reveal>
        </section>

        <section className="pb-12 md:pb-18">
          <Reveal>
            <SectionHeading intro="The 3D environment combines data with geographic context so administrators can compare locations without losing a sense of place.">
              A layered language for 3D data
            </SectionHeading>
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-12 lg:items-stretch">
            <Reveal className="lg:col-span-7">
              <MediaPlaceholder
                title="3D scene layer diagram"
                note="4:3 diagram showing data, infrastructure, administrative regions, and natural conditions"
                className="aspect-[4/3] h-full"
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
            <SectionHeading intro="A reusable chart library and three levels of spatial detail allowed the same product language to support different operational questions.">
              Turning scenes into reusable components
            </SectionHeading>
          </Reveal>
          <Reveal>
            <MediaPlaceholder
              title="Medical chart component library"
              note="Wide image showing the reusable charts prepared for common hospital scenarios"
              className="aspect-[16/7]"
            />
          </Reveal>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Reveal>
              <MediaPlaceholder
                title="City resource view"
                note="GIS-based 3D scene with regional data and medical resource distribution"
                className="aspect-[4/3]"
              />
              <p className="mt-3 text-sm leading-6 text-[var(--sh-muted)]">City data can be compared by administrative area and connected with map POI data.</p>
            </Reveal>
            <Reveal>
              <MediaPlaceholder
                title="Hospital operations view"
                note="Department, bed, and patient data shown inside the hospital scenario"
                className="aspect-[4/3]"
              />
              <p className="mt-3 text-sm leading-6 text-[var(--sh-muted)]">Drill-down views support staffing, bed use, critical patient monitoring, and inpatient analysis.</p>
            </Reveal>
            <Reveal className="md:col-span-2">
              <MediaPlaceholder
                title="Time-based analysis"
                note="16:9 comparison showing how the timeline reveals change and supports forecasting"
                className="aspect-video"
              />
              <p className="mt-3 text-sm leading-6 text-[var(--sh-muted)]">The sky and timeline system add time to the scene, helping users compare trends across different moments.</p>
            </Reveal>
          </div>
        </section>

        <section className="border-t border-[var(--sh-line)] pt-10 md:pt-12">
          <Reveal>
            <SectionHeading intro="The first implementation launched in 2019. By 2021, the team had delivered projects for more than 20 hospitals.">
              Delivery and contribution
            </SectionHeading>
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
            <Reveal className="lg:col-span-7">
              <MediaPlaceholder
                title="Hospital delivery"
                note="16:9 photograph or deployment diagram showing the system in use"
                className="aspect-video"
              />
              <p className="mt-3 text-sm leading-6 text-[var(--sh-muted)]">Deployments combined on-site hardware, private cloud infrastructure, cloud rendering, and remote version updates.</p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-[var(--sh-accent-soft)] p-6">
                  <p className="text-3xl font-medium tracking-[-0.04em] text-[var(--sh-text)]">2019</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--sh-muted)]">First hospital delivery</p>
                </div>
                <div className="rounded-2xl bg-[var(--sh-text)] p-6 text-[#edf5fc]">
                  <p className="text-3xl font-medium tracking-[-0.04em]">20+</p>
                  <p className="mt-2 text-sm leading-6 text-[#c5d8e9]">Hospitals delivered by 2021</p>
                </div>
              </div>
            </Reveal>

            <Reveal className="rounded-2xl border border-[var(--sh-line)] bg-[var(--sh-surface)] p-7 md:p-8 lg:col-span-5">
              <h3 className="text-2xl font-medium tracking-[-0.025em] text-[var(--sh-text)]">My responsibilities</h3>
              <div className="mt-7 space-y-7">
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
          </div>
        </section>
      </div>
    </article>
  );
}
