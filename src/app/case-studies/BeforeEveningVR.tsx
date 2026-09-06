import { type CSSProperties, type ReactNode } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const VIDEO_ID = '12lrGjc5Ok49GS4F0buul_ob3fnZoFd5e';

const metadata = [
  { label: 'Type', value: 'VR narrative game' },
  { label: 'Duration', value: 'Spring 2026' },
  { label: 'Role', value: 'Project manager, scene designer, VR interaction programmer' },
  { label: 'Platform', value: 'Meta Quest 3' },
  { label: 'Stack', value: 'Unreal Engine 5.7.4, Convai.AI, MetaHuman, Quixel Bridge' },
];

const narrativeBeats = [
  {
    scene: 'School Gate',
    title: 'Arrival',
    copy: 'Yi Linlan returns to the school where she once studied, this time as a teacher. The opening gives players a few quiet minutes to settle into the space.',
    image: '/before-evening/school-gate.webp',
  },
  {
    scene: 'Office',
    title: 'The old file',
    copy: 'A file in the office conflicts with Yi Linlan\'s account of the past. It gives the player a reason to keep looking.',
    image: '/before-evening/office.webp',
  },
  {
    scene: 'Classroom',
    title: 'Teacher Zhou',
    copy: 'Teacher Zhou remembers more than Yi Linlan expects. Their conversation brings the old classroom incident back into focus.',
    image: '/before-evening/classroom.webp',
  },
  {
    scene: 'Archive',
    title: 'The school record',
    copy: 'In the archive, names, dates, and disciplinary records show what happened to He Qinyue.',
    image: '/before-evening/archive.webp',
  },
  {
    scene: 'Medical Room',
    title: 'He Qinyue',
    copy: 'He Qinyue, now the school psychologist, speaks with Yi Linlan directly. Her responses draw on what the player has found and said earlier.',
    image: '/before-evening/medical-room.webp',
  },
];

const tests = [
  {
    title: 'Movement comfort',
    signal: 'Two testers removed the headset within ten minutes.',
    response: 'We added strafe and snap rotation, then tuned the comfort vignette.',
    outcome: 'The next group completed the section without similar reports of motion sickness.',
  },
  {
    title: 'World continuity',
    signal: 'The empty exterior broke immersion whenever players looked through a window.',
    response: 'We filled the view with buildings, trees, skyline cards, and fog arranged at three depths.',
    outcome: 'During the next test, players stopped at the windows to look outside.',
  },
  {
    title: 'Conversation timing',
    signal: 'A five-second response gap made the AI feel less present.',
    response: 'We shortened the prompts, tested streaming responses, and added a small thinking animation.',
    outcome: 'Latency fell to about three seconds, but remains the clearest priority for a second version.',
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

function SectionHeading({ children, intro }: { children: ReactNode; intro?: string }) {
  return (
    <div className="mb-10 max-w-[44rem] md:mb-14">
      <h2 className="text-[clamp(2rem,4vw,4.5rem)] font-medium leading-[0.98] tracking-[-0.045em] text-[var(--eve-text)]">
        {children}
      </h2>
      {intro && <p className="mt-5 max-w-[60ch] text-base leading-7 text-[var(--eve-muted)]">{intro}</p>}
    </div>
  );
}

function Figure({ src, alt, caption, className = '' }: { src: string; alt: string; caption?: string; className?: string }) {
  return (
    <figure className={className}>
      <div className="overflow-hidden rounded-2xl bg-[var(--eve-surface)]">
        <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
      </div>
      {caption && <figcaption className="mt-3 text-sm leading-6 text-[var(--eve-muted)]">{caption}</figcaption>}
    </figure>
  );
}

export function BeforeEveningVR() {
  return (
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
            <p className="mb-5 text-sm font-medium tracking-[0.08em] text-[var(--eve-accent)]">
              VR narrative game
            </p>
            <h1 className="text-[clamp(4rem,7vw,6.75rem)] font-semibold leading-[0.88] tracking-[-0.065em] text-[var(--eve-text)]">
              Before Evening
            </h1>
            <p className="mt-6 max-w-[42rem] text-lg leading-8 text-[var(--eve-muted)]">
              A psychological mystery set in a Chinese high school, built around live voice conversations with AI characters.
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
                  title="Before Evening VR gameplay demo"
                  className="aspect-video w-full"
                  allow="autoplay; encrypted-media"
                  loading="eager"
                  allowFullScreen
                />
              </div>
              <p className="mt-3 text-sm text-[var(--eve-muted)]">Gameplay and narrative showcase, June 2026</p>
            </div>

            <div className="rounded-2xl border border-white/12 bg-[var(--eve-surface)] p-6 md:col-span-4 md:p-7">
              <dl className="grid grid-cols-2 gap-x-5 gap-y-6">
                {metadata.map((item, index) => (
                  <div key={item.label} className={index === 2 || index === 4 ? 'col-span-2' : ''}>
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
            <SectionHeading intro="The player takes the role of Yi Linlan, a teacher returning to the school she once attended. Familiar rooms begin to bring back the part of her past she has avoided.">
              A school visit that turns personal
            </SectionHeading>
          </Reveal>
          <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-stretch">
            <Figure
              src="/before-evening/campus-title.webp"
              alt="Before Evening campus at dusk"
              caption="Most of the 15 to 20 minute experience takes place on the campus at dusk."
              className="lg:col-span-7"
            />
            <div className="flex flex-col justify-between rounded-2xl bg-[var(--eve-surface)] p-7 md:p-9 lg:col-span-5">
              <p className="text-2xl leading-snug tracking-[-0.025em] text-[var(--eve-text)] md:text-3xl">
                Yi Linlan arrives expecting a routine visit. She soon learns that He Qinyue, a student she once bullied, now works at the school as a psychologist.
              </p>
              <p className="mt-12 max-w-[38rem] text-base leading-7 text-[var(--eve-muted)]">
                The player pieces together what happened by talking to staff and examining files, photographs, and objects. Characters remember what has already been discussed and react to evidence shown later.
              </p>
            </div>
          </Reveal>
        </section>

        <section className="pb-12 md:pb-18">
          <Reveal>
            <SectionHeading intro="Information found in one scene changes what the player can ask in the next.">
              The story moves through five school spaces
            </SectionHeading>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-12">
            {narrativeBeats.map((beat, index) => (
              <Reveal
                key={beat.scene}
                className={
                  index < 2
                    ? 'md:col-span-6'
                    : 'md:col-span-4'
                }
              >
                <article className="h-full overflow-hidden rounded-2xl bg-[var(--eve-surface)]">
                  <img
                    src={beat.image}
                    alt={`${beat.scene} in-game environment`}
                    className={`w-full object-cover ${index < 2 ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}
                    loading="lazy"
                  />
                  <div className="p-6">
                    <p className="text-sm font-medium text-[var(--eve-accent)]">{beat.scene}</p>
                    <h3 className="mt-2 text-xl font-medium tracking-[-0.02em] text-[var(--eve-text)]">{beat.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[var(--eve-muted)]">{beat.copy}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="pb-12 md:pb-18">
          <Reveal className="grid gap-8 rounded-2xl bg-[var(--eve-surface-soft)] p-6 md:p-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <h2 className="text-[clamp(2.4rem,5vw,5rem)] font-medium leading-[0.96] tracking-[-0.05em]">
                Hold A to talk
              </h2>
              <p className="mt-6 max-w-[34rem] text-base leading-7 text-[var(--eve-muted)]">
                Hold the button, ask a question, then release it. Convai generates the response and sends it through the MetaHuman character in real time.
              </p>
              <div className="mt-9 grid grid-cols-2 gap-5 border-t border-white/12 pt-7">
                <div>
                  <p className="text-2xl font-medium text-[var(--eve-accent)]">Simple input</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--eve-muted)]">Hold-to-talk keeps conversation separate from movement and object handling.</p>
                </div>
                <div>
                  <p className="text-2xl font-medium text-[var(--eve-accent)]">Showing evidence</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--eve-muted)]">Characters react when the player brings an object from an earlier scene into the conversation.</p>
                </div>
              </div>
            </div>
            <Figure
              src="/before-evening/controller-map.webp"
              alt="Meta Quest 3 controller mapping for Before Evening"
              caption="The Quest 3 controls keep talking separate from movement and object handling."
              className="lg:col-span-7"
            />
          </Reveal>
        </section>

        <section className="pb-12 md:pb-18">
          <Reveal>
            <SectionHeading intro="We modelled the campus from scratch, using the scale and layout of a Chinese senior secondary school as our reference.">
              Building a believable school
            </SectionHeading>
          </Reveal>
          <div className="grid gap-5 md:h-[44rem] md:grid-cols-12">
            <Reveal className="md:col-span-7 md:h-full">
              <Figure
                src="/before-evening/school-exterior.webp"
                alt="School exterior at dusk in Before Evening"
                caption="Low evening light and a custom skybox place the story close to nightfall."
                className="md:flex md:h-full md:flex-col md:[&>div]:min-h-0 md:[&>div]:flex-1"
              />
            </Reveal>
            <div className="grid gap-5 md:col-span-5 md:h-full md:grid-rows-2">
              <Reveal className="md:h-full">
                <Figure
                  src="/before-evening/corridor.webp"
                  alt="Dark school corridor"
                  caption="The corridors stay cooler and darker, with rain at the windows and repeated sightlines helping players find their way."
                  className="md:flex md:h-full md:flex-col md:[&>div]:min-h-0 md:[&>div]:flex-1"
                />
              </Reveal>
              <Reveal className="md:h-full">
                <Figure
                  src="/before-evening/skybox-study.webp"
                  alt="School environment and skybox study"
                  caption="Early tests showed that the world felt empty outside the windows. We added buildings, trees, skyline cards, and fog at three depths. In the next test, players stopped to look outside."
                  className="md:flex md:h-full md:flex-col md:[&>div]:min-h-0 md:[&>div]:flex-1"
                />
              </Reveal>
            </div>
          </div>
        </section>

        <section className="pb-12 md:pb-18">
          <Reveal>
            <SectionHeading intro="The conversation system links Convai with generated speech, facial animation, and MetaHuman playback.">
              Connecting voice to MetaHuman
            </SectionHeading>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            <Reveal>
              <Figure
                src="/before-evening/dialogue-principal.webp"
                alt="Principal Zhao speaking in the game"
                className="[&>div]:aspect-square [&>div]:rounded-2xl [&>div]:bg-black [&_img]:object-contain"
              />
            </Reveal>
            <Reveal>
              <Figure
                src="/before-evening/dialogue-teacher.webp"
                alt="Teacher Zhou speaking in the game"
                className="[&>div]:aspect-square [&>div]:rounded-2xl [&>div]:bg-black [&_img]:object-contain"
              />
            </Reveal>
            <Reveal className="md:col-span-2">
              <Figure
                src="/before-evening/dialogue-archive.webp"
                alt="Archive conversation in the game"
                className="[&>div]:aspect-video [&>div]:rounded-2xl [&>div]:bg-black [&_img]:object-cover"
              />
            </Reveal>
          </div>
          <Reveal className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-center">
            <Figure
              src="/before-evening/blueprint-system.webp"
              alt="Unreal Engine Blueprint system for VR interaction"
              caption="We built the interaction logic in Blueprints so we could test changes on the headset quickly."
              className="lg:col-span-7"
            />
            <div className="lg:col-span-5 lg:pl-6">
              <div className="space-y-7">
                <div>
                  <h3 className="text-xl font-medium text-[var(--eve-text)]">What the player says</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--eve-muted)]">Convai transcribes the player's speech and sends it to the agent written for that character.</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[var(--eve-text)]">How the character answers</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--eve-muted)]">The agent writes a response using the character prompt and current story context. Text-to-speech then produces the voice.</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[var(--eve-text)]">Animating the reply</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--eve-muted)]">The audio drives lip movement and facial blendshapes. Gaze and small body movements continue while the character speaks.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="pb-12 md:pb-18">
          <Reveal>
            <SectionHeading intro="We ran three rounds on the Quest 3. Each round focused on the issue that interrupted play most.">
              What changed after testing
            </SectionHeading>
          </Reveal>
          <div className="grid gap-5 lg:grid-cols-12">
            {tests.map((test, index) => (
              <Reveal
                key={test.title}
                className={index === 0 ? 'lg:col-span-3' : index === 1 ? 'lg:col-span-5' : 'lg:col-span-4'}
              >
                <article
                  className={`h-full rounded-2xl p-7 ${
                    index === 1
                      ? 'bg-[var(--eve-accent)] text-[#17140c]'
                      : 'border border-white/12 bg-[var(--eve-surface)] text-[var(--eve-text)]'
                  }`}
                >
                  <h3 className="text-2xl font-medium tracking-[-0.025em]">{test.title}</h3>
                  <p className={`mt-7 text-sm leading-6 ${index === 1 ? 'text-[#2f2a1b]' : 'text-[var(--eve-muted)]'}`}>{test.signal}</p>
                  <p className={`mt-5 border-t pt-5 text-sm leading-6 ${index === 1 ? 'border-black/20 text-[#2f2a1b]' : 'border-white/12 text-[var(--eve-muted)]'}`}>{test.response}</p>
                  <p className={`mt-5 text-sm font-medium leading-6 ${index === 1 ? 'text-[#17140c]' : 'text-[var(--eve-text)]'}`}>{test.outcome}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="pb-12 md:pb-18">
          <Reveal className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <SectionHeading>
                What still needs work
              </SectionHeading>
              <p className="max-w-[38rem] text-base leading-7 text-[var(--eve-muted)]">
                Reviewers responded well to the MetaHuman characters and the open-ended dialogue. They also wanted the central conflict to arrive sooner. Spoken responses need to be shorter, players should be able to interrupt, and emotional delivery needs more control.
              </p>
              <p className="mt-6 max-w-[38rem] text-base leading-7 text-[var(--eve-muted)]">
                For the next version, I would work on response time and ambient sound first. More scenes can wait until the conversations feel quicker and more believable.
              </p>
            </div>
            <Figure
              src="/before-evening/material-cue-board.webp"
              alt="Material cue board used in the game's clue system"
              caption="We used posters, records, photographs, and handwritten messages to carry clues between scenes."
              className="lg:col-span-7"
            />
          </Reveal>
        </section>

        <section className="border-t border-white/12 pt-8 md:pt-12">
          <Reveal>
            <SectionHeading>Team and Award</SectionHeading>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <Reveal>
              <Figure
                src="/before-evening/team-photo.webp"
                alt="Before Evening team during project development"
                className="[&>div]:h-[20rem] md:[&>div]:h-[22rem] [&_img]:object-cover"
              />
              <div className="mt-5 grid gap-5 sm:grid-cols-[0.9fr_1.25fr_0.9fr]">
                <div>
                  <p className="whitespace-nowrap text-[11px] font-medium text-[var(--eve-text)]">Gong Shengao <span className="font-normal text-[var(--eve-muted)]">(Left)</span></p>
                  <p className="mt-2 text-xs leading-5 text-[var(--eve-muted)]">AI prompting, atmospheric effects, and narrative design</p>
                </div>
                <div>
                  <p className="whitespace-nowrap text-[11px] font-medium text-[var(--eve-text)]">Lu Zhengping <span className="font-normal text-[var(--eve-muted)]">(Middle)</span></p>
                  <p className="mt-2 text-xs leading-5 text-[var(--eve-muted)]">Project management, scene and environment design, asset production, VR interaction programming, and MetaHuman integration with Convai.AI</p>
                </div>
                <div>
                  <p className="whitespace-nowrap text-[11px] font-medium text-[var(--eve-text)]">Lin Yang <span className="font-normal text-[var(--eve-muted)]">(Right)</span></p>
                  <p className="mt-2 text-xs leading-5 text-[var(--eve-muted)]">3D assets, texturing, level design, player flow, and Blueprint logic</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-5 text-sm">
                <a href="/docs/before-evening-process-book.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[var(--eve-accent)] hover:text-[var(--eve-text)]">
                  Process book <ArrowUpRight size={15} strokeWidth={1.7} />
                </a>
                <a href="/docs/before-evening-pitch-deck.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[var(--eve-accent)] hover:text-[var(--eve-text)]">
                  Pitch deck <ArrowUpRight size={15} strokeWidth={1.7} />
                </a>
              </div>
            </Reveal>
            <Reveal>
              <Figure
                src="/before-evening/commendation-award.webp"
                alt="Lu Zhengping's Commendation Award certificate from the 2025/26 Metaverse and AI Contest"
                className="[&>div]:h-[20rem] md:[&>div]:h-[22rem] [&>div]:bg-black [&_img]:object-contain"
              />
              <p className="mt-4 text-sm leading-6 text-[var(--eve-muted)]">
                Before Evening received a Commendation Award in the 2025/26 Metaverse + AI Contest at PolyU on 21 July 2026.
              </p>
              <a href="https://libguides.lb.polyu.edu.hk/i-Space/contest" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm text-[var(--eve-accent)] hover:text-[var(--eve-text)]">
                Contest details <ArrowUpRight size={15} strokeWidth={1.7} />
              </a>
            </Reveal>
          </div>
        </section>
      </div>
    </article>
  );
}
