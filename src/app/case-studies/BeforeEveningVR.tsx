import { type CSSProperties, type ReactNode, useState } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { LocalizedContent } from '../i18n/LocalizedContent';
import { beforeEveningTranslations } from '../i18n/caseStudyTranslations';
import { useLanguage } from '../context/LanguageContext';
import { CaseStudyThread, MainLineTag } from '../components/CaseStudyThread';

const SLUG = 'before-evening-vr';
const VIDEO_ID = '12lrGjc5Ok49GS4F0buul_ob3fnZoFd5e';

const metadata = [
  { label: 'Type', value: 'VR narrative game' },
  { label: 'Duration', value: 'Jan – Apr 2026' },
  { label: 'Team', value: 'Three people' },
  { label: 'Platform', value: 'Meta Quest 3' },
  { label: 'Role', value: 'Project manager, AI agent design, Convai and MetaHuman integration, VR interaction, scene', wide: true },
  { label: 'Stack', value: 'Unreal Engine 5.7.4, Convai.AI, MetaHuman, Quixel Bridge, Claude via UE5 MCP', wide: true },
];

const partLabels = ['01 · The workflow', '02 · NPC agents', '03 · Interaction'];

const partTitles = ['Developed with UE5 through MCP', 'What each character knows', 'From voice to MetaHuman'];

const architecture = {
  agent: ['Persona', 'Story tree', 'Knowledge', 'Memory', 'Sight', 'Actions'],
  input: ['Hold A to talk', 'Hold up a clue'],
  face: ['Speech to text', 'Agent reply', 'Text-to-speech', 'Audio2Face', 'Lip-sync, gaze, gesture'],
};

const narrativeBeats = [
  {
    scene: 'School Gate',
    title: 'Principal Zhao',
    copy: 'Yi Linlan returns as a teacher and is welcomed by Principal Zhao, whose calm, official welcome sets the tone for the opening.',
    image: '/before-evening/dialogue-principal.webp',
    alt: 'Principal Zhao speaking in the game',
    position: 'bottom',
  },
  {
    scene: 'Classroom',
    title: 'Teacher Zhou',
    copy: 'Teacher Zhou remembers more than Yi Linlan expects. Their conversation brings back what happened in that classroom.',
    image: '/before-evening/dialogue-teacher.webp',
    alt: 'Teacher Zhou speaking in the game',
    position: 'bottom',
  },
  {
    scene: 'Archive',
    title: 'The archive administrator',
    copy: 'The administrator keeps strictly to the rules of the numbered files. The records here turn suspicion into evidence of what happened to He Qinyue.',
    image: '/before-evening/dialogue-archive.webp',
    alt: 'The archive administrator speaking in the game',
    position: 'bottom',
  },
  {
    scene: 'Medical Room',
    title: 'He Qinyue',
    copy: 'He Qinyue, now the school psychologist, speaks with Yi Linlan directly. Her responses draw on what the player has found and said earlier.',
    image: '/before-evening/medical-room.webp',
    alt: 'Medical Room in-game environment',
    position: 'center',
  },
];

const agentParts = [
  { title: 'Persona', copy: "Each character's background and persona prompt." },
  {
    title: 'Story tree',
    copy: "I set up a main story tree in Convai's Narrative Design. Each section gives the character one objective, and the character moves to the next section when the player brings up the right clue.",
  },
  { title: 'Knowledge', copy: "Each character's knowledge bank holds only what that person would know about the school and the incident." },
  {
    title: 'Memory',
    copy: "Convai's long-term memory keeps what the player has said. Five minutes after the player leaves a character, I also save the conversation as a timestamped local note, the way an Obsidian vault stores pages.",
  },
  {
    title: 'Sight',
    copy: 'Every object the player can pick up carries a text tag. When the player holds one up, the character reads the tag, which stands in for sight.',
  },
  { title: 'Actions', copy: 'Convai actions let a character nod, turn, or look at an object the player holds out, as well as speak.' },
];

const cues = [
  { title: 'Mental-health poster', copy: "The school's official message about student wellbeing.", image: '/before-evening/cue-poster.webp' },
  { title: 'Injury observation record', copy: 'A document that makes the bullying concrete.', image: '/before-evening/cue-record.webp' },
  {
    title: 'Newspaper message',
    copy: 'A crumpled newspaper with a message in red that calls the player to the corridor.',
    image: '/before-evening/cue-newspaper.webp',
  },
  {
    title: 'Future Campus poster',
    copy: "A magazine cover of Principal Zhao and the school's renovation plan.",
    image: '/before-evening/cue-future-campus.webp',
  },
];

const exteriorLayers = [
  {
    title: 'Near layer, 5–15 m',
    copy: 'A neighbouring school with window frames, brickwork, and a few shapes inside.',
    image: '/before-evening/exterior-near.webp',
    alt: 'The neighbouring school seen through an office window',
  },
  {
    title: 'Mid layer, 15–30 m',
    copy: 'Lower-detail housing, trees, and a car park that give the view depth.',
    image: '/before-evening/exterior-mid.webp',
    alt: 'Housing and trees around the school at dusk',
  },
  {
    title: 'Far layer, beyond 30 m',
    copy: 'Painted skyline cards and the dusk skybox, with no real geometry.',
    image: '/before-evening/exterior-far.webp',
    alt: 'Skyline cards and the dusk skybox behind the school',
  },
];

const claudeUses = [
  { title: 'Quest 3 controller bindings', copy: 'Movement, snap turn, grabbing, and hold-to-talk on the Quest 3 controllers.' },
  { title: 'First-person comfort', copy: 'Tuning strafe, snap turns, and the comfort vignette that came out of the first test.' },
  { title: 'Convai plugin', copy: 'Setting up and debugging the plugin on each character.' },
];

const claudeFixes = [
  'Characters not recognising an object the player had picked up',
  'Replies that took too long',
  'Objects clipping through other geometry',
];

const guidance = [
  { title: 'Architecture', copy: 'Lit corridors lead to the next destination, and unlit stairwells and rooms steer players back toward them.' },
  { title: 'Light', copy: 'Warm interior light marks the rooms that matter. Cooler tones mark the spaces in between.' },
  { title: 'Sound', copy: 'Rain is louder near windows and outside doors, which helps players orient themselves.' },
  { title: 'Characters', copy: 'Characters can tell the player where to go or whom to find next.' },
];

const tests = [
  {
    round: 'Round 1 · Greybox, no characters',
    title: 'Movement comfort',
    signal: 'Two testers took the headset off within ten minutes. Smooth turning on the right stick fought with natural head movement.',
    response: 'I added strafe to the left stick, replaced smooth turning with snap turns, and added a comfort vignette.',
    outcome: 'Testers in round two reported no comparable motion sickness.',
  },
  {
    round: 'Round 2 · Interior nearly complete',
    title: 'The view outside',
    signal: '"Everything inside feels real, but when I look out the window, it ruins it." Outside the windows there was only empty space.',
    response: 'I built the exterior in three layers: a neighbouring school within 15 m, housing and trees up to 30 m, and painted skyline cards beyond.',
    outcome: 'In round three, several testers spent time just looking outside.',
  },
  {
    round: 'Round 3 · Full build',
    title: 'Conversation timing',
    signal: 'Testers noticed a 3–4 second gap between finishing a question and hearing the answer.',
    response: 'I tested streaming responses, added a thinking animation to fill the pause, and tuned the prompts for shorter replies.',
    outcome: 'The gap got shorter but did not go away. It is the first thing to fix in a second version.',
  },
];

const stats = [
  { value: '15–20 min', label: 'Playable experience on Quest 3' },
  { value: '4 AI characters', label: 'Each a Convai agent on a MetaHuman' },
  { value: '3 rounds', label: 'Headset tests' },
  { value: 'Commendation', label: 'Metaverse + AI Contest 2025/26' },
];

const contributions = [
  {
    title: 'AI and interaction',
    items: [
      'Designed the agent structure: story tree, knowledge, memory, and sight',
      'Connected Convai to the MetaHuman characters in UE5',
      'Used an AI agent through UE5 MCP for controller bindings, comfort tuning, and Convai debugging',
      'Built locomotion, grabbing, triggers, and hold-to-talk in Blueprints',
      'Fixed motion comfort, the exterior, and response delay after each test round',
    ],
  },
  {
    title: 'Project and scene',
    items: [
      'Project manager for the team of three',
      'Researched Chinese senior secondary schools and drew the floor plan',
      'Built the school environment, the three-layer exterior, and the dusk skybox',
      'Produced 3D assets',
    ],
  },
];

function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.62, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ children, intro, label, group }: { children: ReactNode; intro?: string; label?: string; group?: string }) {
  const { isCN } = useLanguage();
  const navGroup = group && isCN ? (beforeEveningTranslations[group] ?? group) : group;

  return (
    <div className="mb-8 md:mb-10">
      {label && <p className="mb-4 text-sm font-medium text-[var(--eve-accent)]">{label}</p>}
      <h2
        data-nav-group={navGroup}
        className="text-balance text-[clamp(2rem,4.2vw,4.5rem)] font-medium leading-[0.98] tracking-[-0.045em] text-[var(--eve-text)]"
      >
        {children}
      </h2>
      {intro && <p className="mt-5 text-pretty text-base leading-7 text-[var(--eve-muted)]">{intro}</p>}
    </div>
  );
}

function Figure({ src, alt, caption, className = '' }: { src: string; alt: string; caption?: string; className?: string }) {
  return (
    <figure className={className}>
      <div className="overflow-hidden rounded-2xl bg-[var(--eve-surface)]">
        <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
      </div>
      {caption && <figcaption className="mt-3 text-pretty text-sm leading-6 text-[var(--eve-muted)]">{caption}</figcaption>}
    </figure>
  );
}

function PendingFigure({
  src,
  alt,
  caption,
  brief,
  aspect,
  className = '',
}: {
  src: string;
  alt: string;
  caption?: string;
  brief: string;
  aspect: string;
  className?: string;
}) {
  const [missing, setMissing] = useState(false);

  if (missing && !import.meta.env.DEV) return null;

  return (
    <figure className={className}>
      {missing ? (
        <div
          className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-white/25 bg-[var(--eve-surface)] p-6 text-center"
          style={{ aspectRatio: aspect }}
        >
          <p className="max-w-xl text-pretty text-sm font-medium leading-6 text-[var(--eve-accent)]">{brief}</p>
          <p className="font-mono text-xs text-[var(--eve-muted)]">public{src}</p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl bg-[var(--eve-surface)]">
          <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" onError={() => setMissing(true)} />
        </div>
      )}
      {caption && <figcaption className="mt-3 text-pretty text-sm leading-6 text-[var(--eve-muted)]">{caption}</figcaption>}
    </figure>
  );
}

function useTranslate() {
  const { isCN } = useLanguage();
  return (value: string) => (isCN ? (beforeEveningTranslations[value] ?? value) : value);
}

function TitledList({ items }: { items: { title: string; copy: string }[] }) {
  const t = useTranslate();

  return (
    <ul className="space-y-5">
      {items.map((item) => (
        <li key={item.title} className="flex gap-3">
          <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--eve-accent)]" aria-hidden="true" />
          <p className="text-pretty text-sm leading-6 text-[var(--eve-muted)]">
            <span className="block font-medium text-[var(--eve-text)]">{t(item.title)}</span>
            {t(item.copy)}
          </p>
        </li>
      ))}
    </ul>
  );
}

function Chip({ children, accent = false }: { children: ReactNode; accent?: boolean }) {
  return (
    <span
      className={`inline-flex rounded-lg border px-3 py-1.5 text-sm leading-5 text-[var(--eve-text)] ${
        accent ? 'border-[var(--eve-accent)]' : 'border-white/12'
      } bg-[var(--eve-surface-soft)]`}
    >
      {children}
    </span>
  );
}

function Chain({ items }: { items: string[] }) {
  const t = useTranslate();

  return (
    <ol className="flex flex-wrap items-center gap-2">
      {items.map((item, index) => (
        <li key={item} className="flex items-center gap-2">
          {index > 0 && <ArrowRight size={14} strokeWidth={2} className="text-[var(--eve-accent)]" aria-hidden="true" />}
          <Chip>{t(item)}</Chip>
        </li>
      ))}
    </ol>
  );
}

function PartBlock({ index, note, children }: { index: number; note: string; children: ReactNode }) {
  const t = useTranslate();

  return (
    <div className="rounded-xl border border-white/12 bg-[#201d18] p-5 md:p-6">
      <p className="text-sm font-medium text-[var(--eve-accent)]">{t(partLabels[index])}</p>
      <h3 className="mt-1.5 text-lg font-medium tracking-[-0.02em] text-[var(--eve-text)]">{t(partTitles[index])}</h3>
      <p className="mt-1 text-xs text-[var(--eve-muted)]">{t(note)}</p>
      <div className="mt-5">{children}</div>
    </div>
  );
}

function ArchitectureDiagram() {
  const t = useTranslate();

  return (
    <div className="rounded-2xl border border-[var(--eve-accent)]/60 bg-[var(--eve-surface)] p-5 md:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
        <div>
          <p className="text-sm font-medium text-[var(--eve-accent)]">{t(partLabels[0])}</p>
          <h3 className="mt-1.5 text-xl font-medium tracking-[-0.02em] text-[var(--eve-text)]">{t(partTitles[0])}</h3>
        </div>
        <p className="text-sm text-[var(--eve-muted)]">Unreal Engine 5.7.4 · Convai.AI · MetaHuman · Quixel Bridge · UE5 MCP</p>
      </div>
      <div className="mt-6 grid gap-3 lg:grid-cols-2">
        <PartBlock index={1} note="Runs in Convai">
          <ul className="flex flex-wrap gap-2">
            {architecture.agent.map((item) => (
              <li key={item}>
                <Chip>{t(item)}</Chip>
              </li>
            ))}
          </ul>
        </PartBlock>
        <PartBlock index={2} note="On each MetaHuman in Unreal Engine 5">
          <ul className="mb-3 flex flex-wrap gap-2">
            {architecture.input.map((item) => (
              <li key={item}>
                <Chip accent>{t(item)}</Chip>
              </li>
            ))}
          </ul>
          <Chain items={architecture.face} />
        </PartBlock>
      </div>
    </div>
  );
}

export function BeforeEveningVR() {
  return (
    <LocalizedContent translations={beforeEveningTranslations}>
      <article
        className="relative min-h-[100dvh] overflow-hidden bg-[var(--eve-bg)] text-[var(--eve-text)]"
        style={
          {
            '--eve-bg': '#11100e',
            '--eve-surface': '#1b1915',
            '--eve-surface-soft': '#24211b',
            '--eve-text': '#f3efe5',
            '--eve-muted': '#b8b09f',
            '--eve-accent': '#d2a934',
            '--project-accent': '#d2a934',
            '--project-muted': '#b8b09f',
            '--project-nav-surface': 'rgba(24, 22, 18, 0.88)',
            '--project-thread-surface': '#1b1915',
            '--project-thread-dot': '#11100e',
          } as CSSProperties
        }
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[44rem] bg-[radial-gradient(circle_at_76%_18%,rgba(210,169,52,0.14),transparent_32rem)]" />

        <div className="relative mx-auto w-full max-w-[1320px] px-5 pb-24 pt-10 sm:px-8 md:pb-36 md:pt-14 lg:px-12">
          <Link
            to="/work"
            className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-[var(--eve-muted)] transition-colors hover:border-[var(--eve-accent)] hover:text-[var(--eve-text)] active:translate-y-px"
          >
            <ArrowLeft size={16} strokeWidth={1.7} />
            All projects
          </Link>

          <header className="pb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium tracking-[0.04em] text-[var(--eve-accent)]">
                <MainLineTag slug={SLUG} />
                <span aria-hidden="true">·</span>
                <span>PolyU SD5975 Virtual and Augmented Reality</span>
              </p>
              <h1 className="max-w-[62rem] text-balance text-[clamp(2.6rem,6vw,5.6rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-[var(--eve-text)]">
                MetaHuman agents in a VR mystery
              </h1>
              <p className="mt-6 text-pretty text-lg leading-8 text-[var(--eve-muted)]">
                As project manager of a three-person team, I designed what the AI characters in this 15–20 minute Quest 3 mystery know, remember, and react to, and connected them to MetaHuman in Unreal Engine 5 through Convai. The project won a Commendation Award at PolyU.
              </p>
            </motion.div>

            <motion.div
              className="mt-10 grid gap-6 md:mt-12 md:grid-cols-12 md:items-stretch"
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.82, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div id="demo" className="flex flex-col md:col-span-8">
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_30px_90px_rgba(0,0,0,0.38)]">
                  <iframe
                    src={`https://drive.google.com/file/d/${VIDEO_ID}/preview`}
                    title="VR mystery gameplay demo"
                    className="aspect-video w-full"
                    allow="autoplay; encrypted-media"
                    loading="eager"
                    allowFullScreen
                  />
                </div>
                <p className="mt-3 text-sm text-[var(--eve-muted)]">Gameplay and narrative showcase, June 2026</p>
                <p className="mt-1 text-sm text-[var(--eve-muted)]">To keep the video short, the NPC replies play at 2× speed.</p>
              </div>

              <div className="rounded-2xl border border-white/12 bg-[var(--eve-surface)] p-6 md:col-span-4 md:p-7">
                <dl className="grid grid-cols-2 gap-x-5 gap-y-6">
                  {metadata.map((item) => (
                    <div key={item.label} className={item.wide ? 'col-span-2' : ''}>
                      <dt className="mb-1.5 text-sm font-medium text-[var(--eve-accent)]">{item.label}</dt>
                      <dd className="text-sm leading-6 text-[var(--eve-muted)]">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </motion.div>
          </header>

          <section className="py-12 md:py-18">
            <Reveal>
              <SectionHeading label="The idea" group="The idea">
                A mystery where the witnesses are agents
              </SectionHeading>
            </Reveal>
            <Reveal>
              <div className="grid gap-8 rounded-2xl bg-[var(--eve-accent)] p-7 text-[#17140c] md:p-10 lg:grid-cols-12 lg:items-end lg:gap-12">
                <p className="text-pretty text-2xl font-medium leading-snug tracking-[-0.025em] md:text-3xl lg:col-span-7">
                  Each character pairs a MetaHuman face with a Convai agent, and I developed them in Unreal Engine 5 through MCP. Players solve the mystery just by talking to them.
                </p>
                <p className="text-pretty text-base leading-7 text-[#2f2a1b] lg:col-span-5">
                  The story: Yi Linlan returns to her old school as a teacher and finds that He Qinyue, the girl she once bullied, now works there as the school psychologist. Each of the four characters remembers that time differently.
                </p>
              </div>
            </Reveal>
            <Reveal className="mt-6">
              <ArchitectureDiagram />
              <p className="mt-5 text-pretty text-sm leading-6 text-[var(--eve-muted)]">
                In play, it is a simple loop: explore the school, find a character, ask in your own words, and show them what you found.
              </p>
            </Reveal>
          </section>

          <section className="pb-12 md:pb-18">
            <Reveal>
              <SectionHeading
                label={partLabels[0]}
                group={partLabels[0]}
                intro="I ran an AI agent from PowerShell on Windows, connected to Unreal Engine 5 through an MCP server, where it could edit Blueprints, change input mappings, read logs, and change plugin settings. The NPC agents and the interaction below were both built this way."
              >
                Working inside the engine through MCP
              </SectionHeading>
            </Reveal>
            <Reveal>
              <PendingFigure
                src="/before-evening/diagram-mcp-workflow.webp"
                alt="Developing in Unreal Engine 5 through an MCP server, with each change tested in the headset"
                brief="示意图 1 · MCP 开发流程：Me → PowerShell → AI agent → UE5 MCP server → Unreal Editor（四类操作）→ Quest 3 头显测试 → 保留或回退"
                aspect="16 / 9"
                className="mb-6"
              />
            </Reveal>
            <Reveal className="grid gap-6 lg:grid-cols-12">
              <div className="rounded-2xl border border-white/12 bg-[var(--eve-surface)] p-7 md:p-9 lg:col-span-7">
                <h3 className="text-xl font-medium tracking-[-0.02em]">What I used it for</h3>
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <TitledList items={claudeUses.slice(0, 2)} />
                  <TitledList items={claudeUses.slice(2)} />
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-2xl border border-white/12 bg-[var(--eve-surface)] p-7 md:p-9 lg:col-span-5">
                <div>
                  <h3 className="text-xl font-medium tracking-[-0.02em]">Bugs it helped fix</h3>
                  <ul className="mt-6 space-y-3 text-pretty text-sm leading-6 text-[var(--eve-muted)]">
                    {claudeFixes.map((fix) => (
                      <li key={fix} className="border-t border-white/12 pt-3 first:border-t-0 first:pt-0">
                        {fix}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-8 text-pretty text-sm font-medium leading-6 text-[var(--eve-text)]">
                  I tested every change made through MCP in the headset before keeping it.
                </p>
              </div>
            </Reveal>
            <Reveal className="grid gap-x-6 lg:grid-cols-2">
              <PendingFigure
                src="/before-evening/mcp-session.webp"
                alt="An AI agent working through the UE5 MCP server in PowerShell"
                brief="真实截图 · PowerShell 里 AI agent 通过 MCP 操作 UE5 的会话（API key 和路径要打码）"
                aspect="16 / 10"
                className="mt-6"
              />
              <PendingFigure
                src="/before-evening/mcp-blueprint.webp"
                alt="A Blueprint edited through MCP"
                brief="真实截图 · 通过 MCP 改过的 Blueprint（可以是 VRPawn 输入事件图的高清重截）"
                aspect="16 / 10"
                className="mt-6"
              />
            </Reveal>
          </section>

          <section className="pb-12 md:pb-18">
            <Reveal>
              <SectionHeading
                label={partLabels[1]}
                group={partLabels[1]}
                intro="Gong Shengao wrote who the characters are. I designed the rest of each agent in Convai."
              >
                What a character is made of
              </SectionHeading>
            </Reveal>
            <Reveal>
              <PendingFigure
                src="/before-evening/diagram-agent-anatomy.webp"
                alt="The six parts of a character agent around a MetaHuman"
                brief="示意图 2 · 角色构成：MetaHuman 周围六个部分（Persona、Story tree、Knowledge、Memory、Sight、Actions），附线索的两条路径和记忆流程"
                aspect="16 / 10"
                className="mb-6"
              />
            </Reveal>
            <Reveal className="rounded-2xl bg-[var(--eve-surface-soft)] p-7 md:p-10">
              <div className="grid gap-8 md:grid-cols-2 md:gap-12">
                <TitledList items={agentParts.slice(0, 3)} />
                <TitledList items={agentParts.slice(3)} />
              </div>
            </Reveal>
            <Reveal className="grid gap-x-4 lg:grid-cols-12 lg:items-start">
              <PendingFigure
                src="/before-evening/convai-narrative-design.webp"
                alt="The story tree in Convai's Narrative Design"
                brief="真实截图 · Convai Narrative Design 故事树（可加知识库或记忆设置页）"
                aspect="16 / 10"
                className="mt-6 lg:col-span-7"
              />
              <PendingFigure
                src="/before-evening/memory-note.webp"
                alt="A conversation saved as a timestamped local note"
                brief="真实截图 · 本地保存的带时间戳对话笔记（在 Obsidian 里打开）"
                aspect="7 / 6"
                className="mt-6 lg:col-span-5"
              />
            </Reveal>
          </section>

          <section className="pb-12 md:pb-18">
            <Reveal>
              <SectionHeading
                group={partLabels[1]}
                intro="What the player learns in one space changes what they can ask in the next."
              >
                Four characters, four spaces
              </SectionHeading>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {narrativeBeats.map((beat) => (
                <Reveal key={beat.scene}>
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-[var(--eve-surface)]">
                    <img
                      src={beat.image}
                      alt={beat.alt}
                      className="aspect-[4/3] w-full object-cover"
                      style={{ objectPosition: beat.position }}
                      loading="lazy"
                    />
                    <div className="p-6">
                      <p className="text-sm font-medium text-[var(--eve-accent)]">{beat.scene}</p>
                      <h3 className="mt-2 text-xl font-medium tracking-[-0.02em] text-[var(--eve-text)]">{beat.title}</h3>
                      <p className="mt-3 text-pretty text-sm leading-6 text-[var(--eve-muted)]">{beat.copy}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
            <p className="mt-4 text-pretty text-sm leading-6 text-[var(--eve-muted)]">The subtitles show each character's spoken reply.</p>
            <Reveal className="mt-10 rounded-2xl border border-white/12 bg-[var(--eve-surface)] p-7 md:p-9">
              <div className="grid gap-4 lg:grid-cols-12 lg:items-end lg:gap-12">
                <h3 className="text-xl font-medium tracking-[-0.02em] lg:col-span-5">Four clues that move the story</h3>
                <p className="text-pretty text-sm leading-6 text-[var(--eve-muted)] lg:col-span-7">
                  Mentioning a clue to the right character moves the story on. Holding one up lets the character read its tag and react.
                </p>
              </div>
              <ul className="mt-8 grid grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-4">
                {cues.map((cue) => (
                  <li key={cue.title}>
                    <div className="flex h-56 items-center justify-center rounded-xl bg-[var(--eve-surface-soft)] p-4 md:h-64">
                      <img src={cue.image} alt={cue.title} className="h-full w-auto max-w-full object-contain" loading="lazy" />
                    </div>
                    <h4 className="mt-4 text-base font-medium text-[var(--eve-text)]">{cue.title}</h4>
                    <p className="mt-1.5 text-pretty text-sm leading-6 text-[var(--eve-muted)]">{cue.copy}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-pretty text-sm leading-6 text-[var(--eve-muted)]">The in-game text is in Chinese because the story is set in a Chinese school.</p>
            </Reveal>
          </section>

          <section className="pb-12 md:pb-18">
            <Reveal>
              <SectionHeading
                label={partLabels[2]}
                group={partLabels[2]}
                intro="Each reply passes through a chain of steps, and each one adds delay. Together they left a 3–4 second gap that testers noticed in round three."
              >
                Talking to a MetaHuman
              </SectionHeading>
            </Reveal>
            <Reveal className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <Figure src="/before-evening/controller-map.webp" alt="Meta Quest 3 controller mapping for the game" className="lg:col-span-7" />
              <div className="lg:col-span-5">
                <h3 className="text-xl font-medium tracking-[-0.02em]">Hold A to talk</h3>
                <p className="mt-4 text-pretty text-sm leading-6 text-[var(--eve-muted)]">
                  Characters listen only while A is held, so side conversations in the room are not picked up. The other buttons handle movement, which the first round of testing reshaped.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <PendingFigure
                src="/before-evening/diagram-voice-pipeline.webp"
                alt="From the player's voice to a MetaHuman reply in Unreal Engine 5"
                brief="示意图 5 · 语音到 MetaHuman：Hold A → Speech to text → Agent answers → Text-to-speech → Audio2Face → Lip-sync, gaze, gesture，每步配线稿插画，标注两处修复和 3–4 s 总延迟"
                aspect="120 / 49"
                className="mt-8"
              />
            </Reveal>
            <Reveal className="mt-8 grid gap-6 rounded-2xl bg-[var(--eve-surface-soft)] p-6 md:grid-cols-2 md:gap-10 md:p-10">
              <p className="text-pretty text-base leading-7 text-[var(--eve-muted)]">
                I connected Convai to the MetaHuman characters in Unreal Engine 5 and fixed two problems on the way. A mid-project engine update broke the Convai plugin, so I locked the engine version. On long replies, the voice and the face drifted out of sync, so I split replies into shorter segments.
              </p>
              <p className="text-pretty text-base leading-7 text-[var(--eve-muted)]">
                The prompts Gong wrote shaped movement as well as words. Audio2Face takes gesture intensity from the energy of the speech, so "You are tired and resigned" gives softer speech and smaller gestures, while "You are nervous and have something to hide" gives faster speech and a shifting gaze.
              </p>
            </Reveal>
            <Reveal className="grid gap-x-4 md:grid-cols-2">
              <PendingFigure
                src="/before-evening/emotion-tired.webp"
                alt="A character answering with the tired, resigned prompt"
                caption='"You are tired and resigned"'
                brief="真实截图 6a · 同一角色在「疲惫认命」提示词下回答的一帧：语气轻、手势小"
                aspect="16 / 9"
                className="mt-8"
              />
              <PendingFigure
                src="/before-evening/emotion-nervous.webp"
                alt="A character answering with the nervous prompt"
                caption='"You are nervous and have something to hide"'
                brief="真实截图 6b · 在「紧张、有所隐瞒」提示词下回答的一帧：语速快、眼神游移"
                aspect="16 / 9"
                className="mt-8"
              />
            </Reveal>
          </section>

          <section className="pb-12 md:pb-18">
            <Reveal>
              <SectionHeading
                label="The world"
                group="The world"
                intro="I built the school myself, from scratch, so that anyone who went to a Chinese high school would recognise it: the proportions, the corridors, the windows set a little too high to see out of."
              >
                A school players recognise
              </SectionHeading>
            </Reveal>
            <Reveal>
              <Figure
                src="/before-evening/school-entrance.webp"
                alt="The school entrance at dusk in the game"
                caption="The entrance at dusk, lit by a low western sun and a custom skybox."
                className="[&>div]:aspect-[16/10] md:[&>div]:aspect-[2/1]"
              />
            </Reveal>
            <Reveal className="mt-6 grid gap-8 rounded-2xl border border-white/12 bg-[var(--eve-surface)] p-7 md:p-9 lg:grid-cols-12 lg:gap-0">
              <div className="lg:col-span-5 lg:pr-9">
                <h3 className="text-xl font-medium tracking-[-0.02em]">From reference photos to a floor plan</h3>
                <p className="mt-4 text-pretty text-sm leading-6 text-[var(--eve-muted)]">
                  I spent two weeks collecting photos of Chinese senior secondary schools: floor plans, ceiling heights, window placement, and staff offices. The floor plan I drew from them can be crossed in under five minutes, but it folds back on itself so the school feels larger.
                </p>
                <PendingFigure
                  src="/before-evening/floor-plan.webp"
                  alt="The floor plan I drew for the school"
                  brief="真实图 · 你画的学校平面图"
                  aspect="4 / 3"
                  className="mt-6"
                />
              </div>
              <div className="border-t border-white/12 pt-8 lg:col-span-7 lg:border-l lg:border-t-0 lg:pl-9 lg:pt-0">
                <h3 className="text-xl font-medium tracking-[-0.02em]">Guidance without UI</h3>
                <p className="mb-5 mt-4 text-pretty text-sm leading-6 text-[var(--eve-muted)]">We left out UI markers, quest arrows, and waypoints, and used the building to guide players instead.</p>
                <TitledList items={guidance} />
              </div>
            </Reveal>
          </section>

          <section className="pb-12 md:pb-18">
            <Reveal>
              <SectionHeading label="Testing" group="Testing" intro="Each round tested a fuller build on the Quest 3.">
                Three rounds on the headset
              </SectionHeading>
            </Reveal>
            <div className="grid gap-5 lg:grid-cols-3">
              {tests.map((test) => (
                <Reveal key={test.title}>
                  <article className="h-full rounded-2xl border border-white/12 bg-[var(--eve-surface)] p-7">
                    <p className="text-sm font-medium text-[var(--eve-accent)]">{test.round}</p>
                    <h3 className="mt-3 text-2xl font-medium tracking-[-0.025em]">{test.title}</h3>
                    <p className="mt-6 text-pretty text-sm leading-6 text-[var(--eve-muted)]">{test.signal}</p>
                    <p className="mt-5 border-t border-white/12 pt-5 text-pretty text-sm leading-6 text-[var(--eve-muted)]">{test.response}</p>
                    <p className="mt-5 text-pretty text-sm font-medium leading-6 text-[var(--eve-text)]">{test.outcome}</p>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-8">
              <h3 className="text-xl font-medium tracking-[-0.02em]">The three exterior layers added after round two</h3>
              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {exteriorLayers.map((layer) => (
                  <figure key={layer.title}>
                    <img
                      src={layer.image}
                      alt={layer.alt}
                      className="aspect-[3/2] w-full rounded-2xl bg-[var(--eve-surface)] object-cover"
                      loading="lazy"
                    />
                    <figcaption className="mt-4">
                      <p className="text-base font-medium text-[var(--eve-text)]">{layer.title}</p>
                      <p className="mt-1.5 text-pretty text-sm leading-6 text-[var(--eve-muted)]">{layer.copy}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </Reveal>
          </section>

          <section className="border-t border-white/12 pb-12 pt-10 md:pb-18 md:pt-12">
            <Reveal>
              <SectionHeading
                label="Outcome"
                group="Outcome"
                intro="We presented the project on 21 April 2026 with slides, a talk, and a showcase video instead of a live headset demo that could fail on the day. Reviewers singled out the AI dialogue and the MetaHuman characters, and one faculty reviewer said the pipeline could carry a longer narrative game."
              >
                Presented in April, commended in July
              </SectionHeading>
            </Reveal>
            <div className="grid gap-8 md:grid-cols-2 md:items-start">
              <Reveal>
                <Figure
                  src="/before-evening/team-photo.webp"
                  alt="The team during project development"
                  caption="Left to right: Gong Shengao, Lu Zhengping, Lin Yang."
                  className="[&>div]:h-[20rem] md:[&>div]:h-[22rem] [&_img]:object-cover"
                />
                <ul className="mt-4 space-y-2 text-pretty text-sm leading-6 text-[var(--eve-muted)]">
                  <li>
                    <span className="font-medium text-[var(--eve-text)]">Gong Shengao</span>: narrative text, character prompts, atmospheric effects, and the showcase video
                  </li>
                  <li>
                    <span className="font-medium text-[var(--eve-text)]">Lin Yang</span>: 3D props, texturing, level design, player flow, and Blueprint logic
                  </li>
                </ul>
              </Reveal>
              <Reveal>
                <Figure
                  src="/before-evening/commendation-award.webp"
                  alt="Lu Zhengping's Commendation Award certificate from the 2025/26 Metaverse and AI Contest"
                  caption="The project received a Commendation Award in the 2025/26 Metaverse + AI Contest at PolyU on 21 July 2026."
                  className="[&>div]:h-[20rem] md:[&>div]:h-[22rem] [&>div]:bg-black [&_img]:object-contain"
                />
                <a
                  href="https://libguides.lb.polyu.edu.hk/i-Space/contest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm text-[var(--eve-accent)] hover:text-[var(--eve-text)]"
                >
                  Contest details <ArrowUpRight size={15} strokeWidth={1.7} />
                </a>
              </Reveal>
            </div>

            <Reveal className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.value} className="rounded-2xl bg-[var(--eve-surface-soft)] p-6">
                  <p className="text-2xl font-medium tracking-[-0.04em] text-[var(--eve-text)] md:text-3xl">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--eve-muted)]">{stat.label}</p>
                </div>
              ))}
            </Reveal>

            <Reveal className="mt-6 rounded-2xl border border-white/12 bg-[var(--eve-surface)] p-7 md:p-8">
              <h3 className="text-2xl font-medium tracking-[-0.025em]">My responsibilities</h3>
              <div className="mt-7 grid gap-7 md:grid-cols-2 md:gap-10">
                {contributions.map((group) => (
                  <div key={group.title}>
                    <h4 className="text-sm font-medium text-[var(--eve-accent)]">{group.title}</h4>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-[var(--eve-muted)]">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Reveal>
          </section>

          <section className="pb-12 md:pb-18">
            <Reveal>
              <SectionHeading label="Next" group="Next">
                What still needs work
              </SectionHeading>
            </Reveal>
            <Reveal className="rounded-2xl border border-white/12 bg-[var(--eve-surface)] p-7 md:p-9">
              <p className="text-pretty text-base leading-7 text-[var(--eve-muted)]">
                Reviewers wanted the central conflict to arrive sooner. Spoken responses need to be shorter, players should be able to interrupt, and emotional delivery needs more control. They also felt the video read more like a trailer than a gameplay demo.
              </p>
              <p className="mt-6 text-pretty text-base leading-7 text-[var(--eve-text)]">
                For the next version, I would work on response time and ambient sound first, then add the passing of time, starting with characters that read the device clock. More scenes can wait until the conversations feel quicker and more believable.
              </p>
            </Reveal>
          </section>

          <CaseStudyThread slug={SLUG} />
        </div>
      </article>
    </LocalizedContent>
  );
}
