import { type CSSProperties, type ReactNode } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const NEWS_URL =
  'https://www.cn-healthcare.com/article/20180708/content-505457.html?appfrom=jkj&from=timeline&isappinstalled=0';

const metadata = [
  { label: 'Type', value: 'Patient experience service design' },
  { label: 'Duration', value: 'August-October 2017' },
  { label: 'Role', value: 'Product manager and service designer' },
  { label: 'Hospitals', value: 'Fudan University Shanghai Cancer Center and Beijing 301 Hospital' },
  { label: 'Channels', value: 'WeChat official account and in-hospital service materials' },
  { label: 'Methods', value: 'Observation, interviews, journey mapping, prototyping, and field testing' },
];

const fieldworkMethods = [
  {
    title: 'Observe',
    copy: 'Followed the complete visit and recorded where patients slowed down, waited, or asked for help.',
  },
  {
    title: 'Listen',
    copy: 'Sat in on conversations between patients and doctors to understand missing information and uncertainty.',
  },
  {
    title: 'Interview',
    copy: 'Spoke with patients, doctors, and department heads about practical pain points in the service.',
  },
  {
    title: 'Experience',
    copy: 'Registered as a patient and completed the journey firsthand to test each transition in context.',
  },
];

const journeyStages = ['Arrive', 'Register', 'Wait', 'Consult', 'Examine', 'Pay', 'Collect medicine'];

const opportunityGroups = [
  {
    title: 'Guidance',
    copy: 'Help patients understand where to go and what to prepare before each transition.',
  },
  {
    title: 'Queue information',
    copy: 'Reduce repeated questions by making waiting status and next actions easier to find.',
  },
  {
    title: 'Document handoff',
    copy: 'Improve the transfer of codes, reports, and collection information between channels.',
  },
  {
    title: 'Service continuity',
    copy: 'Keep online instructions and hospital guidance consistent across the entire visit.',
  },
];

const serviceLayers = [
  {
    title: 'Points',
    copy: 'Design each online and offline touchpoint around the action a patient needs to complete at that moment.',
  },
  {
    title: 'Paths',
    copy: 'Connect the hospital account, check-in, consultation, examination, payment, and medicine collection into one journey.',
  },
  {
    title: 'Places',
    copy: 'Use floor decals, posters, standing signs, and stickers to make destinations clear throughout the hospital.',
  },
];

const deliveryMoments = [
  {
    title: 'Official launch',
    copy: 'The online service and hospital materials went live on October 16, 2017.',
  },
  {
    title: 'On-site support',
    copy: 'The project team and medical guides helped patients use the new service in the hospital.',
  },
  {
    title: 'Follow-up visit',
    copy: 'One week later, the team returned to collect feedback from patients and doctors.',
  },
];

const contributions = [
  {
    title: 'Product direction',
    items: ['Defined the Phase 1 service scope', 'Connected research findings with delivery priorities', 'Coordinated the online and hospital experience'],
  },
  {
    title: 'Field research',
    items: ['Observed the full patient journey', 'Interviewed patients, doctors, and department heads', 'Tested the service as a patient'],
  },
  {
    title: 'Service design',
    items: ['Built the patient journey map', 'Grouped pain points and opportunities', 'Designed the points, paths, and places framework'],
  },
  {
    title: 'Testing and launch',
    items: ['Tested QR and barcode sizes', 'Supported the hospital launch', 'Collected post-launch feedback'],
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
    <div className="mb-8 max-w-[48rem] md:mb-10">
      <h2 className="text-[clamp(2.1rem,4.4vw,4.7rem)] font-medium leading-[0.98] tracking-[-0.045em] text-[var(--hsd-text)]">
        {children}
      </h2>
      {intro && <p className="mt-5 max-w-[62ch] text-base leading-7 text-[var(--hsd-muted)]">{intro}</p>}
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
      className={`flex min-h-0 items-center justify-center overflow-hidden rounded-2xl border border-[var(--hsd-line)] bg-[linear-gradient(145deg,var(--hsd-surface),var(--hsd-placeholder))] p-7 text-center ${className}`}
    >
      <div className="max-w-[19rem]">
        <p className="text-base font-medium tracking-[-0.015em] text-[var(--hsd-text)]">{title}</p>
        <p className="mt-2 text-sm leading-6 text-[var(--hsd-muted)]">{note}</p>
      </div>
    </div>
  );
}

export function HealthcareServiceDesign() {
  return (
    <article
      className="relative min-h-[100dvh] overflow-hidden bg-[var(--hsd-bg)] text-[var(--hsd-text)]"
      style={
        {
          '--hsd-bg': '#f4f6fb',
          '--hsd-surface': '#fcfdff',
          '--hsd-placeholder': '#e5e9f2',
          '--hsd-text': '#30394f',
          '--hsd-muted': '#667187',
          '--hsd-accent': '#6b78a0',
          '--hsd-accent-soft': '#dfe3ef',
          '--hsd-line': '#d1d8e6',
          '--project-accent': '#6b78a0',
          '--project-muted': '#667187',
          '--project-nav-surface': 'rgba(248, 249, 253, 0.92)',
        } as CSSProperties
      }
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_78%_9%,rgba(107,120,160,0.15),transparent_27rem)]" />

      <div className="relative mx-auto w-full max-w-[1320px] px-5 pb-24 pt-10 sm:px-8 md:pb-32 md:pt-14 lg:px-12">
        <Link
          to="/work"
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-[var(--hsd-line)] bg-white/60 px-4 py-2 text-sm text-[var(--hsd-muted)] transition-colors hover:border-[var(--hsd-accent)] hover:text-[var(--hsd-text)] active:translate-y-px"
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
            <p className="mb-4 text-sm font-medium tracking-[0.08em] text-[var(--hsd-accent)]">Tencent Medical Cloud</p>
            <h1 className="max-w-[62rem] text-[clamp(3.3rem,6.5vw,6.1rem)] font-semibold leading-[0.92] tracking-[-0.058em] text-[var(--hsd-text)]">
              Healthcare Service Design
            </h1>
            <p className="mt-6 max-w-[47rem] text-lg leading-8 text-[var(--hsd-muted)]">
              An online and in-hospital service system that shortened patient visits and reduced administrative work.
            </p>
          </motion.div>

          <motion.div
            className="mt-10 grid gap-6 md:mt-12 md:grid-cols-12 md:items-stretch"
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.72, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col md:col-span-8">
              <MediaPlaceholder
                title="Service system overview"
                note="16:9 image or video introducing the patient journey and connected service touchpoints"
                className="aspect-video w-full shadow-[0_28px_70px_rgba(68,77,115,0.12)]"
              />
              <p className="mt-3 text-sm leading-6 text-[var(--hsd-muted)]">
                Final project media will replace this placeholder.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--hsd-line)] bg-[var(--hsd-surface)] p-6 md:col-span-4 md:p-7">
              <dl className="grid grid-cols-2 gap-x-5 gap-y-6">
                {metadata.map((item, index) => (
                  <div key={item.label} className={index > 2 ? 'col-span-2' : ''}>
                    <dt className="mb-1.5 text-sm font-medium text-[var(--hsd-accent)]">{item.label}</dt>
                    <dd className="text-sm leading-6 text-[var(--hsd-muted)]">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>
        </header>

        <section className="pb-12 md:pb-18">
          <Reveal>
            <SectionHeading intro="Long queues and repeated information handoffs made a hospital visit difficult for patients and staff.">
              Shortening the hospital day
            </SectionHeading>
          </Reveal>

          <Reveal className="grid gap-6 md:grid-cols-12 md:items-stretch">
            <div className="rounded-2xl bg-[var(--hsd-accent)] p-7 text-[#f8f9ff] md:col-span-7 md:p-9">
              <p className="max-w-[34rem] text-[clamp(1.8rem,3.6vw,3.7rem)] font-medium leading-[1.02] tracking-[-0.045em]">
                The service joined digital tasks and hospital guidance into one continuous visit.
              </p>
              <p className="mt-10 max-w-[37rem] text-sm leading-6 text-[#e3e7f4]">
                It addressed registration, waiting, examinations, payment, and document collection through the hospital account and on-site materials.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 md:col-span-5 md:grid-cols-1">
              <div className="rounded-2xl border border-[var(--hsd-line)] bg-[var(--hsd-surface)] p-7">
                <p className="text-[clamp(2.7rem,5vw,4.8rem)] font-medium tracking-[-0.06em] text-[var(--hsd-accent)]">4.5h</p>
                <p className="mt-3 max-w-[19rem] text-sm leading-6 text-[var(--hsd-muted)]">Average reduction in the time patients spent at the hospital.</p>
              </div>
              <div className="rounded-2xl bg-[var(--hsd-accent-soft)] p-7">
                <p className="text-[clamp(2.7rem,5vw,4.8rem)] font-medium tracking-[-0.06em] text-[var(--hsd-text)]">3h</p>
                <p className="mt-3 max-w-[19rem] text-sm leading-6 text-[var(--hsd-muted)]">Average reduction in doctors' time spent collecting materials.</p>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-6">
            <MediaPlaceholder
              title="Before and after launch"
              note="Wide comparison showing outpatient conditions before launch and after the new service went live"
              className="aspect-[16/7]"
            />
          </Reveal>
        </section>

        <section className="pb-12 md:pb-18">
          <Reveal>
            <SectionHeading intro="The research combined observation, interviews, and a complete first-person visit through the hospital.">
              Researching inside the hospital
            </SectionHeading>
          </Reveal>

          <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-stretch">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:col-span-7">
              <MediaPlaceholder
                title="Patient journey observation"
                note="Portrait photograph of waiting areas, service counters, and in-hospital navigation"
                className="aspect-[3/4]"
              />
              <MediaPlaceholder
                title="On-site field study"
                note="Portrait photograph documenting queues and communication during a hospital visit"
                className="aspect-[3/4]"
              />
            </div>

            <div className="flex flex-col justify-between rounded-2xl border border-[var(--hsd-line)] bg-[var(--hsd-surface)] p-7 lg:col-span-5 lg:p-9">
              <p className="text-[clamp(1.55rem,2.6vw,2.5rem)] font-medium leading-[1.12] tracking-[-0.035em] text-[var(--hsd-text)]">
                This was the first product project I led. Entering the service as a patient made the friction visible in a way reports could not.
              </p>
              <p className="mt-10 text-sm leading-6 text-[var(--hsd-muted)]">
                The team visited Fudan University Shanghai Cancer Center and studied communication among patients, doctors, and department leaders.
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {fieldworkMethods.map((method, index) => (
              <div
                key={method.title}
                className={`rounded-2xl p-6 ${index === 0 || index === 3 ? 'bg-[var(--hsd-accent-soft)]' : 'border border-[var(--hsd-line)] bg-[var(--hsd-surface)]'}`}
              >
                <p className="text-lg font-medium text-[var(--hsd-text)]">{method.title}</p>
                <p className="mt-3 text-sm leading-6 text-[var(--hsd-muted)]">{method.copy}</p>
              </div>
            ))}
          </Reveal>
        </section>

        <section className="pb-12 md:pb-18">
          <Reveal>
            <SectionHeading intro="A journey map brought the observed pain points, opportunities, and touchpoints into one working view.">
              Rebuilding the patient journey
            </SectionHeading>
          </Reveal>

          <Reveal>
            <MediaPlaceholder
              title="Patient journey map"
              note="Wide journey map showing observations, patient needs, pain points, and service opportunities"
              className="aspect-[16/8]"
            />
          </Reveal>

          <Reveal className="mt-6 grid gap-6 md:grid-cols-12">
            <div className="rounded-2xl bg-[var(--hsd-text)] p-7 text-[#f8f9ff] md:col-span-5 md:p-9">
              <p className="text-2xl font-medium leading-tight tracking-[-0.03em]">The map kept the service grounded in what happened between departments, screens, signs, and people.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:col-span-7">
              {opportunityGroups.map((group) => (
                <div key={group.title} className="rounded-2xl border border-[var(--hsd-line)] bg-[var(--hsd-surface)] p-6">
                  <p className="text-base font-medium text-[var(--hsd-accent)]">{group.title}</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--hsd-muted)]">{group.copy}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="pb-12 md:pb-18">
          <Reveal>
            <SectionHeading intro="Research interviews and early tests helped define which parts of the journey should be improved first.">
              Choosing the first release
            </SectionHeading>
          </Reveal>

          <Reveal className="rounded-2xl border border-[var(--hsd-line)] bg-[var(--hsd-surface)] p-6 md:p-9">
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
              {journeyStages.map((stage, index) => (
                <div
                  key={stage}
                  className={`rounded-2xl px-4 py-5 text-sm font-medium ${index === 1 || index === 4 || index === 6 ? 'bg-[var(--hsd-accent-soft)] text-[var(--hsd-text)]' : 'border border-[var(--hsd-line)] text-[var(--hsd-muted)]'}`}
                >
                  {stage}
                </div>
              ))}
            </div>
            <p className="mt-6 max-w-[57rem] text-sm leading-6 text-[var(--hsd-muted)]">
              The first release focused on moments where clearer information or a better handoff could remove repeated waiting and uncertainty.
            </p>
          </Reveal>

          <Reveal className="mt-6">
            <MediaPlaceholder
              title="Phase 1 design framework"
              note="16:9 framework connecting journey findings, design objectives, and the selected service touchpoints"
              className="aspect-video"
            />
          </Reveal>
        </section>

        <section className="pb-12 md:pb-18">
          <Reveal>
            <SectionHeading intro="The service was organized through individual touchpoints, the complete patient path, and the surrounding hospital environment.">
              Designing points, paths, and places
            </SectionHeading>
          </Reveal>

          <Reveal className="grid gap-6 md:grid-cols-12">
            <div className="rounded-2xl bg-[var(--hsd-accent)] p-7 text-[#f8f9ff] md:col-span-5 md:row-span-2 md:p-9">
              <p className="text-3xl font-medium tracking-[-0.04em]">{serviceLayers[0].title}</p>
              <p className="mt-5 max-w-[28rem] text-base leading-7 text-[#e3e7f4]">{serviceLayers[0].copy}</p>
              <MediaPlaceholder
                title="Touchpoint detail"
                note="Close view of one critical patient action and its supporting guidance"
                className="mt-10 aspect-square border-white/20"
              />
            </div>

            <div className="rounded-2xl border border-[var(--hsd-line)] bg-[var(--hsd-surface)] p-7 md:col-span-7 md:p-9">
              <p className="text-3xl font-medium tracking-[-0.04em]">{serviceLayers[1].title}</p>
              <p className="mt-4 max-w-[42rem] text-base leading-7 text-[var(--hsd-muted)]">{serviceLayers[1].copy}</p>
            </div>

            <div className="rounded-2xl bg-[var(--hsd-accent-soft)] p-7 md:col-span-7 md:p-9">
              <p className="text-3xl font-medium tracking-[-0.04em]">{serviceLayers[2].title}</p>
              <p className="mt-4 max-w-[42rem] text-base leading-7 text-[var(--hsd-muted)]">{serviceLayers[2].copy}</p>
            </div>
          </Reveal>
        </section>

        <section className="pb-12 md:pb-18">
          <Reveal>
            <SectionHeading intro="The WeChat service and physical guidance were designed as connected parts of the same hospital journey.">
              Connecting digital and physical guidance
            </SectionHeading>
          </Reveal>

          <Reveal>
            <MediaPlaceholder
              title="Online and offline service system"
              note="Wide framework showing the hospital account, functional modules, QR touchpoints, and guidance materials"
              className="aspect-[16/8]"
            />
          </Reveal>

          <Reveal className="mt-6 grid gap-6 lg:grid-cols-12 lg:items-stretch">
            <div className="rounded-2xl border border-[var(--hsd-line)] bg-[var(--hsd-surface)] p-7 lg:col-span-7 lg:p-9">
              <p className="text-2xl font-medium tracking-[-0.03em] text-[var(--hsd-text)]">Digital service</p>
              <p className="mt-4 max-w-[42rem] text-base leading-7 text-[var(--hsd-muted)]">
                The hospital account supported key tasks across registration, waiting, consultation, examination, payment, and medicine collection.
              </p>
              <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {['Registration', 'Queue status', 'Reports', 'Payment'].map((item) => (
                  <div key={item} className="rounded-2xl bg-[var(--hsd-accent-soft)] px-4 py-4 text-sm font-medium text-[var(--hsd-text)]">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-[var(--hsd-text)] p-7 text-[#f8f9ff] lg:col-span-5 lg:p-9">
              <p className="text-2xl font-medium tracking-[-0.03em]">Physical guidance</p>
              <p className="mt-4 text-base leading-7 text-[#e0e3ec]">
                Floor decals, posters, standing signs, and stickers helped patients find destinations and confirm the next action.
              </p>
              <p className="mt-8 text-sm leading-6 text-[#c9cedb]">
                QR codes and barcodes for waiting-room check-in and medicine collection were repeatedly tested to find a practical scan size.
              </p>
            </div>
          </Reveal>
        </section>

        <section className="pb-4">
          <Reveal>
            <SectionHeading intro="The team launched in the hospital, supported patients on site, and returned one week later to review the outcome.">
              Results and contribution
            </SectionHeading>
          </Reveal>

          <Reveal className="grid gap-6 md:grid-cols-12">
            {deliveryMoments.map((moment, index) => (
              <div
                key={moment.title}
                className={`rounded-2xl p-6 ${index === 0 ? 'md:col-span-5' : index === 1 ? 'md:col-span-4' : 'md:col-span-3'} ${index === 1 ? 'bg-[var(--hsd-accent-soft)]' : 'border border-[var(--hsd-line)] bg-[var(--hsd-surface)]'}`}
              >
                <p className="text-lg font-medium text-[var(--hsd-text)]">{moment.title}</p>
                <p className="mt-3 text-sm leading-6 text-[var(--hsd-muted)]">{moment.copy}</p>
              </div>
            ))}
          </Reveal>

          <Reveal className="mt-6 grid gap-6 md:grid-cols-2">
            <MediaPlaceholder
              title="Launch-day support"
              note="4:3 photograph of patients using the new service with staff assistance"
              className="aspect-[4/3]"
            />
            <MediaPlaceholder
              title="Post-launch hospital visit"
              note="4:3 photograph documenting service use and follow-up observations"
              className="aspect-[4/3]"
            />
          </Reveal>

          <Reveal className="mt-6 rounded-2xl border border-[var(--hsd-line)] bg-[var(--hsd-surface)] p-7 md:p-9">
            <h3 className="text-2xl font-medium tracking-[-0.03em] text-[var(--hsd-text)]">My responsibilities</h3>
            <div className="mt-7 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {contributions.map((group) => (
                <div key={group.title}>
                  <p className="text-sm font-medium text-[var(--hsd-accent)]">{group.title}</p>
                  <div className="mt-3 space-y-2">
                    {group.items.map((item) => (
                      <p key={item} className="text-sm leading-6 text-[var(--hsd-muted)]">{item}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <a
              href={NEWS_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--hsd-accent)] transition-opacity hover:opacity-70 active:translate-y-px"
            >
              Read the hospital case report
              <ArrowUpRight size={16} strokeWidth={1.7} />
            </a>
          </Reveal>
        </section>
      </div>
    </article>
  );
}
