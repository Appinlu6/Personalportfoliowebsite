import { type CSSProperties, type ReactNode } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const NEWS_URL = 'https://baijiahao.baidu.com/s?id=1631502413485477426&wfr=spider&for=pc';

const metadata = [
  { label: 'Type', value: 'Marathon command platform' },
  { label: 'Duration', value: 'March-April 2019' },
  { label: 'Role', value: 'Product manager and design lead' },
  { label: 'Delivery', value: 'Yangzhou Marathon' },
  { label: 'Team', value: '3 people' },
  { label: 'Scope', value: 'Coordination, research, visualization, Unreal Engine, development' },
];

const projectConstraints = [
  {
    value: 'First',
    label: 'Domestic marathon big data lake visualization project',
  },
  {
    value: '6',
    label: 'Partner organizations working across the event',
  },
  {
    value: '< 1 month',
    label: 'From exploration to live delivery',
  },
  {
    value: '3',
    label: 'People on the core project team',
  },
];

const commandRoles = [
  {
    title: 'Sports bureau staff',
    copy: 'Needed an overview of race progress, participation, and operational status.',
  },
  {
    title: 'Medical commanders',
    copy: 'Needed abnormal health signals, precise runner locations, and nearby rescue resources.',
  },
  {
    title: 'Security commanders',
    copy: 'Needed crowd, route, checkpoint, and incident information in one shared view.',
  },
];

const researchQuestions = [
  'Which data is needed in each situation?',
  'How much detail supports the decision?',
  'How quickly must the data update?',
  'Who receives the information next?',
];

const dataRelationships = [
  {
    title: 'Composition',
    copy: 'What the event is made of and how each group contributes to the whole.',
  },
  {
    title: 'Distribution',
    copy: 'Where runners, staff, vehicles, and incidents are located along the route.',
  },
  {
    title: 'Comparison',
    copy: 'How participant groups, checkpoints, and operational resources differ.',
  },
  {
    title: 'Trend',
    copy: 'How pace, density, health signals, and race conditions change over time.',
  },
];

const emergencyFlow = [
  {
    title: 'Detect',
    copy: 'Bracelet data identifies an abnormal health signal.',
  },
  {
    title: 'Locate',
    copy: 'The map highlights the runner and exact route position.',
  },
  {
    title: 'Assess',
    copy: 'Commanders review runner details and nearby medical resources.',
  },
  {
    title: 'Dispatch',
    copy: 'The nearest ambulance or first-aid team is contacted.',
  },
];

const contributions = [
  {
    title: 'Product management',
    items: ['Defined the product scope', 'Planned the delivery process', 'Balanced priorities within the four-week schedule'],
  },
  {
    title: 'Research and design',
    items: ['Interviewed command staff', 'Translated scenarios into requirements', 'Designed the information and interaction framework'],
  },
  {
    title: '3D and development',
    items: ['Designed the Yangzhou 3D scene', 'Defined runner and unit visualization', 'Supported Unreal Engine implementation'],
  },
  {
    title: 'Coordination and delivery',
    items: ['Aligned six partner organizations', 'Integrated bracelet and location data', 'Supported the live event launch'],
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

function SectionHeading({ children, intro }: { children: ReactNode; intro?: string }) {
  return (
    <div className="mb-8 max-w-[46rem] md:mb-10">
      <h2 className="text-[clamp(2.1rem,4.4vw,4.7rem)] font-medium leading-[0.98] tracking-[-0.045em] text-[var(--sm-text)]">
        {children}
      </h2>
      {intro && <p className="mt-5 max-w-[62ch] text-base leading-7 text-[var(--sm-muted)]">{intro}</p>}
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
      className={`flex min-h-0 items-center justify-center overflow-hidden rounded-2xl border border-[var(--sm-line)] bg-[linear-gradient(145deg,var(--sm-surface),var(--sm-placeholder))] p-7 text-center ${className}`}
    >
      <div className="max-w-[18rem]">
        <p className="text-base font-medium tracking-[-0.015em] text-[var(--sm-text)]">{title}</p>
        <p className="mt-2 text-sm leading-6 text-[var(--sm-muted)]">{note}</p>
      </div>
    </div>
  );
}

export function SmartMarathon() {
  return (
    <article
      className="relative min-h-[100dvh] overflow-hidden bg-[var(--sm-bg)] text-[var(--sm-text)]"
      style={
        {
          '--sm-bg': '#f1f7f3',
          '--sm-surface': '#fbfefc',
          '--sm-placeholder': '#e1ede5',
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
            <p className="mb-4 text-sm font-medium tracking-[0.08em] text-[var(--sm-accent)]">Tencent Micision</p>
            <h1 className="max-w-[58rem] text-[clamp(3.6rem,7vw,6.6rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-[var(--sm-text)]">
              Smart Marathon
            </h1>
            <p className="mt-6 max-w-[44rem] text-lg leading-8 text-[var(--sm-muted)]">
              A real-time race command platform that turns runner data into faster emergency response.
            </p>
          </motion.div>

          <motion.div
            className="mt-10 grid gap-6 md:mt-12 md:grid-cols-12 md:items-stretch"
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.74, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col md:col-span-8">
              <MediaPlaceholder
                title="Project overview video"
                note="16:9 video showing the race map, live data, and emergency workflow"
                className="aspect-video w-full shadow-[0_28px_70px_rgba(38,83,57,0.13)]"
              />
              <p className="mt-3 text-sm leading-6 text-[var(--sm-muted)]">Video will be added when the final source file is available.</p>
            </div>

            <div className="rounded-2xl border border-[var(--sm-line)] bg-[var(--sm-surface)] p-6 md:col-span-4 md:p-7">
              <dl className="grid grid-cols-2 gap-x-5 gap-y-6">
                {metadata.map((item, index) => (
                  <div key={item.label} className={index === 5 ? 'col-span-2' : ''}>
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
            <SectionHeading intro="Falls, heatstroke, cardiac events, route errors, and exhaustion can require a coordinated response across the entire course.">
              One screen for a live race
            </SectionHeading>
          </Reveal>
          <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-stretch">
            <div className="rounded-2xl bg-[var(--sm-accent)] p-7 text-[#f5fbf7] md:p-9 lg:col-span-5">
              <p className="text-[clamp(1.65rem,3vw,2.7rem)] font-medium leading-[1.08] tracking-[-0.035em]">
                Commanders needed to locate a runner, understand the situation, and reach the nearest response team within minutes.
              </p>
              <p className="mt-10 max-w-[34rem] text-sm leading-6 text-[#dfefe4]">
                The platform combined runner location, wearable health data, route conditions, ambulances, first-aid stations, and command decisions.
              </p>
            </div>
            <MediaPlaceholder
              title="Race command overview"
              note="16:10 interface view showing the Yangzhou course and live event data"
              className="aspect-[16/10] lg:col-span-7"
            />
          </Reveal>
        </section>

        <section className="pb-12 md:pb-18">
          <Reveal>
            <SectionHeading intro="The project began without a domestic reference case and moved from concept to live event in less than one month.">
              Coordinating six partners in four weeks
            </SectionHeading>
          </Reveal>
          <Reveal className="rounded-2xl bg-[var(--sm-text)] p-6 text-[#eff8f2] md:p-9">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {projectConstraints.map((item) => (
                <div key={item.label}>
                  <p className="text-3xl font-medium tracking-[-0.04em] text-[#a9d0b6]">{item.value}</p>
                  <p className="mt-3 max-w-[16rem] text-sm leading-6 text-[#c8ddd0]">{item.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="mt-6">
            <MediaPlaceholder
              title="Partner and delivery map"
              note="16:9 diagram showing the organizing committee, public security, rescue command, telecom, wearable, and technology partners"
              className="aspect-video"
            />
          </Reveal>
        </section>

        <section className="pb-12 md:pb-18">
          <Reveal>
            <SectionHeading intro="We studied the event command center to understand what each team needed, when they needed it, and who received the information next.">
              Researching the command room
            </SectionHeading>
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-12 lg:items-stretch">
            <Reveal className="lg:col-span-7">
              <MediaPlaceholder
                title="Command center research"
                note="4:3 photograph or research board showing interviews with event command staff"
                className="aspect-[4/3] h-full"
              />
            </Reveal>
            <Reveal className="rounded-2xl border border-[var(--sm-line)] bg-[var(--sm-surface)] p-7 md:p-8 lg:col-span-5">
              <div className="space-y-7">
                {commandRoles.map((role) => (
                  <article key={role.title}>
                    <h3 className="text-lg font-medium tracking-[-0.015em] text-[var(--sm-text)]">{role.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--sm-muted)]">{role.copy}</p>
                  </article>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal className="mt-6 grid gap-4 sm:grid-cols-2">
            {researchQuestions.map((question, index) => (
              <div
                key={question}
                className={`rounded-2xl p-6 text-sm font-medium leading-6 ${
                  index === 0 ? 'bg-[var(--sm-accent-soft)] text-[var(--sm-text)]' : 'border border-[var(--sm-line)] bg-white/65 text-[var(--sm-muted)]'
                }`}
              >
                {question}
              </div>
            ))}
          </Reveal>
        </section>

        <section className="pb-12 md:pb-18">
          <Reveal>
            <SectionHeading intro="We organized the event data around four statistical relationships, then selected the chart form for each operational question.">
              Matching data to visual form
            </SectionHeading>
          </Reveal>
          <Reveal>
            <MediaPlaceholder
              title="Visualization framework"
              note="16:9 diagram mapping the event dataset to composition, distribution, comparison, and trend"
              className="aspect-video"
            />
          </Reveal>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {dataRelationships.map((relationship, index) => (
              <Reveal key={relationship.title}>
                <article
                  className={`h-full rounded-2xl p-7 ${
                    index === 2 ? 'bg-[var(--sm-accent-soft)]' : 'border border-[var(--sm-line)] bg-[var(--sm-surface)]'
                  }`}
                >
                  <h3 className="text-xl font-medium tracking-[-0.02em] text-[var(--sm-text)]">{relationship.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--sm-muted)]">{relationship.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="pb-12 md:pb-18">
          <Reveal>
            <SectionHeading intro="Unreal Engine brought the route, city landmarks, medical resources, checkpoints, and moving participants into one spatial view.">
              Making the city readable in real time
            </SectionHeading>
          </Reveal>
          <Reveal>
            <MediaPlaceholder
              title="Yangzhou 3D race environment"
              note="Wide image showing the modeled city, race route, and event infrastructure"
              className="aspect-[16/7]"
            />
          </Reveal>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <Reveal>
              <MediaPlaceholder title="Landmarks" note="Square image showing the landmark marker system" className="aspect-square" />
            </Reveal>
            <Reveal>
              <MediaPlaceholder title="Hospitals" note="Square image showing hospitals and medical stations" className="aspect-square" />
            </Reveal>
            <Reveal>
              <MediaPlaceholder title="Milestones" note="Square image showing distance and checkpoint markers" className="aspect-square" />
            </Reveal>
          </div>
          <Reveal className="mt-6 grid gap-6 lg:grid-cols-12 lg:items-center">
            <MediaPlaceholder
              title="Live runner visualization"
              note="16:9 scene showing five participant groups, route position, and real-time data refresh"
              className="aspect-video lg:col-span-8"
            />
            <div className="lg:col-span-4 lg:pl-5">
              <h3 className="text-2xl font-medium tracking-[-0.025em] text-[var(--sm-text)]">Five participant groups</h3>
              <p className="mt-4 text-sm leading-6 text-[var(--sm-muted)]">
                Particle colors separate event roles. Ordinary runners use the highest-contrast color because they represent the largest data group.
              </p>
              <p className="mt-4 text-sm leading-6 text-[var(--sm-muted)]">
                The pulse rate follows the wearable refresh cycle, helping the command team perceive that the map is receiving live data.
              </p>
            </div>
          </Reveal>
        </section>

        <section className="pb-12 md:pb-18">
          <Reveal>
            <SectionHeading intro="An abnormal wearable signal becomes useful only when the command team can connect it with location, people, and nearby response resources.">
              Designing the emergency loop
            </SectionHeading>
          </Reveal>
          <Reveal className="rounded-2xl bg-[var(--sm-accent)] p-6 text-[#f5fbf7] md:p-9">
            <div className="grid gap-5 md:grid-cols-4">
              {emergencyFlow.map((item) => (
                <article key={item.title} className="rounded-2xl border border-white/16 bg-white/[0.055] p-6">
                  <h3 className="text-xl font-medium tracking-[-0.02em]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#dfefe4]">{item.copy}</p>
                </article>
              ))}
            </div>
          </Reveal>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Reveal>
              <MediaPlaceholder
                title="Abnormal signal alert"
                note="4:3 map view showing the expanding alarm around a runner"
                className="aspect-[4/3]"
              />
              <p className="mt-3 text-sm leading-6 text-[var(--sm-muted)]">The alert marks the affected area and opens the runner's detailed information.</p>
            </Reveal>
            <Reveal>
              <MediaPlaceholder
                title="Medical dispatch"
                note="4:3 map view showing nearby ambulances and first-aid stations"
                className="aspect-[4/3]"
              />
              <p className="mt-3 text-sm leading-6 text-[var(--sm-muted)]">Vehicle details and contact information help dispatchers reach the nearest response team.</p>
            </Reveal>
          </div>
        </section>

        <section className="border-t border-[var(--sm-line)] pt-10 md:pt-12">
          <Reveal>
            <SectionHeading intro="The platform launched at the Yangzhou Marathon in April 2019 and was used by the live event command team.">
              Live validation and contribution
            </SectionHeading>
          </Reveal>
          <Reveal className="grid gap-6 rounded-2xl bg-[var(--sm-text)] p-6 text-[#eff8f2] md:p-9 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="text-[clamp(1.65rem,3vw,2.7rem)] font-medium leading-[1.08] tracking-[-0.035em]">
                During the race, the platform flagged an abnormal heart rate at the 8-kilometer mark.
              </p>
              <p className="mt-6 max-w-[34rem] text-sm leading-6 text-[#c8ddd0]">
                Staff used the location information to contact a nearby ambulance for assistance.
              </p>
            </div>
            <MediaPlaceholder
              title="Competition supervision site"
              note="16:9 photograph of the command team using the platform during the race"
              className="aspect-video border-white/14 bg-[linear-gradient(145deg,#244238,#315846)] lg:col-span-7 [&_p]:text-[#dcece1]"
            />
          </Reveal>

          <div className="mt-6 grid gap-6 md:grid-cols-2 md:items-start">
            <Reveal>
              <MediaPlaceholder
                title="Live event delivery"
                note="4:3 photograph showing the platform installed at the Yangzhou Marathon"
                className="aspect-[4/3]"
              />
              <p className="mt-3 text-sm leading-6 text-[var(--sm-muted)]">The system moved from product exploration to live delivery in under four weeks.</p>
            </Reveal>
            <Reveal>
              <MediaPlaceholder
                title="On-site review"
                note="4:3 photograph of the event operations review and platform demonstration"
                className="aspect-[4/3]"
              />
              <p className="mt-3 text-sm leading-6 text-[var(--sm-muted)]">The live platform was reviewed on site by event leadership and the Mayor of Yangzhou.</p>
            </Reveal>
          </div>

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
            <a
              href={NEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--sm-accent)] transition-colors hover:text-[var(--sm-text)]"
            >
              Read the event coverage <ArrowUpRight size={15} strokeWidth={1.7} />
            </a>
          </Reveal>
        </section>
      </div>
    </article>
  );
}
