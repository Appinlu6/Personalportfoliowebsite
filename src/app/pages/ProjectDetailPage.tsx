import type { ReactNode } from 'react';
import { Link, useParams } from 'react-router';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const caseStudies: Record<string, ReactNode> = {
  'bauhinia-mind': <BauhiniaMind />,
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

const metadata = [
  { label: 'Type', value: 'MScGAH Capstone Project · Grade A+' },
  { label: 'Duration', value: 'Jan 2026 – Apr 2026' },
  { label: 'Role', value: 'Sole Designer & Developer (UX, GraphRAG, Neo4j, Frontend)' },
  { label: 'Stack', value: 'Figma · React · Supabase pgvector · Neo4j · Gemini LLM' },
  { label: 'Methods', value: 'Double Diamond · Research-through-Design · IAM' },
];

const coreProblems = [
  {
    title: 'Information Island',
    description:
      "Fragmented medical infrastructure and unfamiliar GP-first triage create high cognitive load when students need care.",
  },
  {
    title: 'Cultural Island',
    description:
      'Cross-border healthcare norms and the "Good News Only" communication loop block culturally grounded support.',
  },
  {
    title: 'Emotional Island',
    description:
      'Acculturation stress and physical vulnerability compound into subjective isolation when illness is handled alone.',
  },
];

const researchWorkflow = [
  {
    number: '01',
    name: 'Ethnographic Inquiries',
    desc: 'Semi-structured interviews conducted with N=25 Mainland students to establish behavioral baseline maps.',
  },
  {
    number: '02',
    name: 'Quantitative Filter',
    desc: 'Applying the UCLA Loneliness Scale to isolate subjective isolation vectors from pathological symptoms.',
  },
  {
    number: '03',
    name: 'Affinity Synthesis',
    desc: 'Clustering 150+ qualitative feedback points into explicit socio-technical friction domains.',
  },
  {
    number: '04',
    name: 'Interface Mapping',
    desc: 'Translating systemic behavioral deadlocks into functional GraphRAG system imperatives.',
  },
];

const researchInsights = [
  {
    label: 'Socio-Technical Friction',
    value:
      "High cognitive load when encountering Hong Kong's GP-first triage paradigm; profound system mismatch compared to Mainland direct hospital access.",
  },
  {
    label: 'The Cultural Blindspot',
    value:
      'The “Good News Only” communication loop blocks traditional peer/family support, turning a transient physical illness into profound subjective isolation.',
  },
  {
    label: 'System Imperative',
    value:
      'Immediate solution closure via an automated Action Card and cross-border equivalent medication translation mapping.',
  },
];

const features = [
  {
    title: 'Personalized Assessment & Recommendation',
    body:
      'Machine learning algorithms analyze user responses to validated psychological assessments (PHQ-9, GAD-7) to recommend tailored intervention modules and track symptom progression over time.',
  },
  {
    title: 'Modular Intervention Library',
    body:
      'Evidence-based content modules covering CBT, mindfulness, behavioral activation, and emotion regulation, each adapted for Hong Kong university student context and cultural considerations.',
  },
  {
    title: 'Crisis Detection & Escalation',
    body:
      'Safety protocols built into the system detect high-risk responses and provide immediate resources, including direct connections to university counseling services and crisis hotlines.',
  },
];

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const content = slug ? caseStudies[slug] : null;

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Project not found</p>
          <Link to="/work" className="underline" style={{ color: 'var(--warm-accent)' }}>
            Back to Work
          </Link>
        </div>
      </div>
    );
  }

  return <div className="min-h-screen pt-20">{content}</div>;
}

function BauhiniaMind() {
  return (
    <article
      className="relative overflow-hidden py-20"
      style={{
        background:
          'radial-gradient(circle at 92% 8%, rgba(201, 43, 46, 0.18), transparent 24rem), radial-gradient(circle at 3% 72%, rgba(255, 255, 255, 0.55), transparent 22rem), linear-gradient(135deg, var(--bm-paper-soft) 0%, var(--bm-paper) 55%, #FBE5DE 100%)',
      }}
    >
      <div className="pointer-events-none absolute right-[-16rem] top-[-9rem] z-0 h-[24rem] w-[32rem] rotate-[-10deg] rounded-[6rem] bg-[var(--bm-red)] opacity-55 shadow-[0_28px_50px_rgba(122,16,35,0.16)]" />
      <div className="pointer-events-none absolute right-[-7rem] top-[11rem] z-0 hidden h-64 w-80 rounded-full bg-[#F1B996]/55 md:block" />

      <motion.div
        className="relative z-10 page-container"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <motion.div variants={fadeUp}>
          <Link
            to="/work"
            className="mb-12 inline-flex items-center gap-2 text-sm text-[var(--bm-burgundy)] transition-opacity hover:opacity-70"
          >
            <ArrowLeft size={16} />
            All Projects
          </Link>
        </motion.div>

        <motion.div variants={fadeUp} className="mb-16">
          <h1 className="mb-4 text-[var(--bm-red)]" style={{ fontSize: '3rem', lineHeight: '1.1' }}>
            Bauhinia-Mind
          </h1>
          <p className="mb-8 text-xl text-[var(--bm-slate)]">
            An Empathic, Memory-Enabled AI Health Companion for Mainland Chinese Students in Hong Kong
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="not-prose mb-16 rounded-[2rem] border border-white/65 bg-white/68 p-8 shadow-[var(--bm-shadow)] md:p-10"
        >
          <div className="flex flex-col gap-8 md:flex-row md:items-stretch md:gap-10">
            <div className="flex w-full flex-col md:w-[52%] md:flex-shrink-0">
              <div className="flex aspect-[16/9] flex-col items-center justify-center gap-3 overflow-hidden rounded-[1.25rem] border border-dashed border-[var(--bm-slate)]/25 bg-white/80">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M8 5.5v13l11-6.5-11-6.5Z" fill="var(--bm-red)" />
                  </svg>
                </div>
                <p className="text-sm text-[var(--bm-slate)]">Video placeholder</p>
              </div>

              <div className="mt-8 grid flex-1 grid-cols-2 content-start gap-x-10 gap-y-5">
                {metadata.map(({ label, value }) => (
                  <div key={label}>
                    <p
                      className="mb-0.5 text-[14px] uppercase tracking-widest text-black"
                      style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 600 }}
                    >
                      {label}
                    </p>
                    <p
                      className="text-[11px] leading-snug text-foreground"
                      style={{ fontFamily: "'Avenir', 'Nunito', sans-serif", fontWeight: 300 }}
                    >
                      {value}
                    </p>
                  </div>
                ))}
                <div>
                  <p
                    className="mb-0.5 text-[14px] uppercase tracking-widest text-black"
                    style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 600 }}
                  >
                    Links
                  </p>
                  <div className="flex flex-wrap gap-x-2 gap-y-0.5 text-[11px] text-[var(--bm-burgundy)]">
                    <a href="#" className="transition-opacity hover:opacity-70">
                      Final report
                    </a>
                    <span className="text-[var(--bm-slate)]">·</span>
                    <a href="#" className="transition-opacity hover:opacity-70">
                      Usability findings
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex min-w-0 flex-1 flex-col md:pt-0">
              <h2
                className="mb-3 font-semibold text-[var(--bm-red)] font-['Work_Sans']"
                style={{ fontSize: '1.125rem' }}
              >
                Abstract
              </h2>
              <div
                className="space-y-4 text-[14px] leading-[1.8] text-foreground"
                style={{ fontFamily: "'Avenir', 'Nunito', sans-serif", fontWeight: 300 }}
              >
                <p>
                  Bauhinia-Mind is an empathic, memory-enabled AI health companion for Mainland Chinese students
                  navigating cross-cultural adaptation stress in Hong Kong.
                </p>
                <p>
                  The project reframes acculturation pressure through the Interactive Acculturation Model (IAM), turning
                  companionship from an abstract feeling into a designable, measurable variable.
                </p>
                <p>
                  A hybrid GraphRAG layer combines Neo4j structured reasoning with Supabase semantic search,
                  operationalizing humanities theory into a computational Know–Feel–Act empathy framework.
                </p>
                <p>
                  Operating within non-clinical boundaries, the platform acts as a supportive cultural broker—
                  transforming fragmented medical infrastructure data into stable, traceable, and actionable navigation
                  guidance for students who often handle illness alone.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-stretch md:gap-8">
          <motion.div
            variants={fadeUp}
            className="not-prose flex-1 rounded-[2rem] border border-white/65 bg-white/68 p-8 shadow-[var(--bm-shadow)] md:p-10"
          >
            <h2
              className="mb-6 font-semibold text-[var(--bm-red)] font-['Work_Sans']"
              style={{ fontSize: '1.125rem' }}
            >
              Background / Brief intro
            </h2>

            <div className="space-y-5">
              <div>
                <h3
                  className="mb-2 text-[14px] uppercase tracking-widest text-black"
                  style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 600 }}
                >
                  Target problem
                </h3>
                <p
                  className="text-[14px] leading-[1.8] text-foreground"
                  style={{ fontFamily: "'Avenir', 'Nunito', sans-serif", fontWeight: 300 }}
                >
                  Mainland Chinese students in Hong Kong face a systemic gap where acculturation stress meets
                  healthcare literacy. Through qualitative profiling of 25 students, the research revealed invisible
                  behavioral loops—socio-technical friction with Hong Kong&apos;s GP-first triage, and a &ldquo;Good News
                  Only&rdquo; communication norm that blocks peer and family support—turning transient physical illness
                  into profound subjective isolation.
                </p>

                <div className="mt-4 flex flex-col gap-3">
                  {coreProblems.map((problem) => (
                    <div
                      key={problem.title}
                      className="rounded-xl border border-[var(--bm-orange)]/20 bg-[#FBE5DE]/55 px-4 py-3 shadow-sm"
                    >
                      <p
                        className="mb-1 text-[13px] font-semibold text-[var(--bm-burgundy)]"
                        style={{ fontFamily: "'Work Sans', sans-serif" }}
                      >
                        {problem.title}
                      </p>
                      <p
                        className="text-[12px] leading-relaxed text-[var(--bm-slate)]"
                        style={{ fontFamily: "'Avenir', 'Nunito', sans-serif", fontWeight: 300 }}
                      >
                        {problem.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3
                  className="mb-2 text-[14px] uppercase tracking-widest text-black"
                  style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 600 }}
                >
                  What this project aims
                </h3>
                <p
                  className="text-[14px] leading-[1.8] text-foreground"
                  style={{ fontFamily: "'Avenir', 'Nunito', sans-serif", fontWeight: 300 }}
                >
                  Bauhinia-Mind aims to close this gap by translating acculturation pressure into a designable system
                  imperative: immediate solution closure through automated Action Cards, cross-border medication
                  translation, and traceable medical navigation—while operating as a supportive cultural broker within
                  strict non-clinical boundaries.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="not-prose flex-1 rounded-[2rem] border border-white/65 bg-white/68 p-8 shadow-[var(--bm-shadow)] md:p-10"
          >
            <h2
              className="mb-3 font-semibold text-[var(--bm-red)] font-['Work_Sans']"
              style={{ fontSize: '1.125rem' }}
            >
              Related work
            </h2>
            <p
              className="mb-5 text-[13px] leading-relaxed text-[var(--bm-slate)]"
              style={{ fontFamily: "'Avenir', 'Nunito', sans-serif", fontWeight: 300 }}
            >
              Theoretical and empirical foundations that anchor the design—from acculturation psychology to
              human-centered AI in cross-cultural health contexts.
            </p>

            <div className="space-y-5">
              <div className="border-t border-[rgba(122,16,35,0.12)] pt-5">
                <p
                  className="mb-1.5 text-[14px] uppercase tracking-widest text-black"
                  style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 600 }}
                >
                  Reference
                </p>
                <p
                  className="mb-3 text-[13px] leading-relaxed text-foreground"
                  style={{ fontFamily: "'Avenir', 'Nunito', sans-serif", fontWeight: 300 }}
                >
                  Berry, J. W. (1997). Immigration, acculturation, and adaptation.{' '}
                  <em>Applied Psychology: An International Review</em>, 46(1), 5–34.
                </p>
                <p
                  className="mb-1.5 text-[14px] uppercase tracking-widest text-black"
                  style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 600 }}
                >
                  Context description
                </p>
                <p
                  className="text-[13px] leading-[1.75] text-foreground"
                  style={{ fontFamily: "'Avenir', 'Nunito', sans-serif", fontWeight: 300 }}
                >
                  The Interactive Acculturation Model (IAM) frames how newcomers negotiate integration,
                  assimilation, separation, or marginalization. Bauhinia-Mind maps these constructs to product
                  behaviour—translating abstract acculturation dynamics into measurable companionship variables and
                  culturally-sensitive interaction patterns.
                </p>
              </div>

              <div className="border-t border-[rgba(122,16,35,0.12)] pt-5">
                <p
                  className="mb-1.5 text-[14px] uppercase tracking-widest text-black"
                  style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 600 }}
                >
                  Reference
                </p>
                <p
                  className="mb-3 text-[13px] leading-relaxed text-foreground"
                  style={{ fontFamily: "'Avenir', 'Nunito', sans-serif", fontWeight: 300 }}
                >
                  Bourque F., &amp; Biron, C. (2015). Contextual and cultural factors in mental health help-seeking
                  among immigrants. <em>International Journal of Culture and Mental Health</em>, 8(4), 365–378.
                </p>
                <p
                  className="mb-1.5 text-[14px] uppercase tracking-widest text-black"
                  style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 600 }}
                >
                  Context description
                </p>
                <p
                  className="text-[13px] leading-[1.75] text-foreground"
                  style={{ fontFamily: "'Avenir', 'Nunito', sans-serif", fontWeight: 300 }}
                >
                  Prior work shows that stigma, language barriers, and unfamiliar care pathways suppress help-seeking
                  among mobile student populations. This project extends that literature by pairing ethnographic
                  insight with a GraphRAG architecture that makes navigation guidance explicit, traceable, and
                  culturally brokered rather than generic.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="prose max-w-none">
          <CaseSection title="Research & Discovery">
            <p className="mb-12 max-w-3xl leading-relaxed text-[var(--bm-slate)]">
              Investigating the systemic gap where acculturation stress meets healthcare literacy. Through deep qualitative
              profiling of 25 Mainland Chinese students, the research decoded the invisible behavioral loops that lead to
              emotional isolation during moments of physical vulnerability.
            </p>

            <motion.div
              className="my-12 rounded-[2rem] bg-white/52 p-8 shadow-[var(--bm-shadow)]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
            >
              <p className="mb-8 border-l-4 border-[var(--bm-orange)] pl-4 text-lg italic text-[var(--bm-wine)]">
                The Methodology Architecture
              </p>
              <div className="grid gap-6 md:grid-cols-4">
                {researchWorkflow.map((step) => (
                  <motion.div key={step.number} variants={fadeUp} className="relative">
                    <p className="mb-2 text-xl italic text-[var(--bm-red)]">{step.number}</p>
                    <h3 className="mb-3 text-base font-semibold text-foreground">{step.name}</h3>
                    <p className="text-sm leading-relaxed text-[var(--bm-slate)]">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="mb-16 grid gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="rounded-[2rem] border border-white/65 bg-white/44 p-8 shadow-[var(--bm-shadow)]">
                <div className="flex min-h-80 flex-col items-center justify-center rounded-[1.5rem] border border-dashed border-[rgba(122,16,35,0.18)] bg-white/40 p-8 text-center">
                  <p className="mb-3 text-3xl italic text-[rgba(201,43,46,0.34)]">Fig 2.1</p>
                  <p className="mb-2 text-xs uppercase tracking-[0.22em] text-[var(--bm-slate)]">User Context Visualization</p>
                  <p className="text-sm leading-relaxed text-[var(--bm-slate)]">
                    Late-night domestic micro-environment simulation for understanding healthcare uncertainty in private spaces.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="rounded-[2rem] bg-white/60 p-8 shadow-[var(--bm-shadow)]">
                <p className="mb-3 text-xs uppercase tracking-[0.22em] text-[var(--bm-slate)]">
                  Representative Case Study / Persona Archetype A
                </p>
                <h3 className="mb-8 text-2xl font-medium text-[var(--bm-wine)]">The Vulnerable Newcomer</h3>

                <blockquote className="mb-8 border-l-4 border-[var(--bm-orange)] pl-6">
                  <p className="text-xl italic leading-relaxed text-foreground">
                    "My stomach hurt badly and I felt nauseous, but I did not know the difference between registration
                    and emergency care. Here, I am used to sharing good news only, so I would rather endure it until
                    morning than add pressure to my parents."
                  </p>
                  <footer className="mt-4 text-xs uppercase tracking-[0.16em] text-[var(--bm-burgundy)]">
                    Wang Xiaoyu, 19, first-year undergraduate in Hong Kong for 3 weeks
                  </footer>
                </blockquote>

                <div className="divide-y divide-[rgba(122,16,35,0.14)]">
                  {researchInsights.map((insight) => (
                    <div key={insight.label} className="grid gap-3 py-5 md:grid-cols-[0.34fr_0.66fr]">
                      <p className="text-xs uppercase tracking-[0.16em] text-[var(--bm-slate)]">{insight.label}</p>
                      <p className="text-sm leading-relaxed text-foreground">{insight.value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </CaseSection>

          <CaseSection title="Theory — Interactive Acculturation Model" number="05 — Theoretical Anchor">
            <div className="grid items-start gap-10 md:grid-cols-2">
              <div className="space-y-6">
                <CopySlot label="IAM theoretical bridge · ~3 short paragraphs explaining how Berry's Interactive Acculturation Model anchors the design — the theory→system translation" />
                <CopySlot label="Key constructs (integration / assimilation / separation / marginalization) mapped to product behaviour · 1 paragraph" />
              </div>
              <FigPlaceholder
                id="Fig 05"
                label="IAM spine diagram"
                ratio="4:3"
                caption="Fig 05 — IAM Theoretical Spine (placeholder)"
              />
            </div>
          </CaseSection>

          <CaseSection title="Design Process" number="06 — Design Direction">
            <p className="mb-12 max-w-prose leading-relaxed text-[var(--bm-slate)]">
              The design process followed an iterative, user-centered approach involving stakeholder workshops,
              low-fidelity prototyping, and usability testing with target users. The platform architecture was
              informed by established digital health frameworks and mental health clinical guidelines.
            </p>

            <FigPlaceholder
              id="Fig 06"
              label="Two-arms design diagram"
              ratio="16:9"
              caption="Fig 06 — Design Two-Arms Architecture (placeholder)"
              className="mb-12"
            />

            <p className="mb-6 text-xs uppercase tracking-[0.22em] text-[var(--bm-slate)]">
              Key Features · A / B / C
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  className="rounded-[1.5rem] border-l-4 bg-white/48 p-6 shadow-[var(--bm-shadow)]"
                  style={{ borderColor: 'var(--bm-orange)' }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={fadeUp}
                >
                  <p className="mb-3 text-xl italic text-[var(--bm-red)]">
                    {String.fromCharCode(65 + i)}
                  </p>
                  <h4 className="mb-2">{feature.title}</h4>
                  <p className="text-sm leading-relaxed text-[var(--bm-slate)]">{feature.body}</p>
                </motion.div>
              ))}
            </div>
          </CaseSection>

          <CaseSection title="System Architecture" number="07 — Orchestration">
            <div className="grid items-start gap-10 md:grid-cols-[1.5fr_1fr]">
              <FigPlaceholder
                id="Fig 07"
                label="GraphRAG orchestration diagram"
                ratio="16:9"
                caption="Fig 07 — System Orchestration (placeholder)"
              />
              <div className="space-y-4">
                <CopySlot label="Annotation A · Neo4j structured-reasoning layer · 1 short paragraph" />
                <CopySlot label="Annotation B · Supabase semantic vector layer · 1 short paragraph" />
                <CopySlot label="Annotation C · Gemini LLM empathy controller · 1 short paragraph" />
              </div>
            </div>
          </CaseSection>

          <CaseSection title="Safety & Non-Clinical Boundaries" number="08 — Safety">
            <div className="max-w-prose space-y-6">
              <CopySlot label="Lead paragraph · how the system refuses clinical claims, redirects to humans, and logs escalations · ~2 short paragraphs" />
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-white/70 px-3 py-1 text-[var(--bm-burgundy)] shadow-sm">
                  Non-clinical
                </span>
                <span className="rounded-full bg-white/70 px-3 py-1 text-[var(--bm-burgundy)] shadow-sm">
                  Crisis-aware
                </span>
                <span className="rounded-full bg-white/70 px-3 py-1 text-[var(--bm-burgundy)] shadow-sm">
                  Bilingual escalation
                </span>
                <span className="rounded-full bg-white/70 px-3 py-1 text-[var(--bm-burgundy)] shadow-sm">
                  Cultural broker
                </span>
              </div>
            </div>
          </CaseSection>

          <CaseSection title="Impact & Outcomes" number="09 — Outcomes">
            <p className="mb-12 max-w-prose leading-relaxed text-[var(--bm-slate)]">
              Preliminary pilot testing with 45 students over 4 weeks showed statistically significant
              improvements in self-reported anxiety and depression symptoms. The platform received a System
              Usability Scale score of 82.5, indicating excellent usability. The project received Grade A+
              for the MSc capstone and is currently under consideration for implementation at partner universities.
            </p>

            {/* big stat blocks */}
            <div className="mb-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-[1.5rem] bg-white/60 p-6 shadow-[var(--bm-shadow)]">
                <p className="mb-2 text-xs uppercase tracking-[0.22em] text-[var(--bm-slate)]">
                  Pilot sample
                </p>
                <p className="text-[var(--bm-red)]" style={{ fontSize: '3rem', lineHeight: '1.05' }}>
                  45
                </p>
                <p className="mt-1 text-sm text-[var(--bm-slate)]">students · 4 weeks</p>
              </div>
              <div className="rounded-[1.5rem] bg-white/60 p-6 shadow-[var(--bm-shadow)]">
                <p className="mb-2 text-xs uppercase tracking-[0.22em] text-[var(--bm-slate)]">
                  SUS score
                </p>
                <p className="text-[var(--bm-red)]" style={{ fontSize: '3rem', lineHeight: '1.05' }}>
                  82.5
                </p>
                <p className="mt-1 text-sm text-[var(--bm-slate)]">excellent usability</p>
              </div>
              <div className="rounded-[1.5rem] bg-white/60 p-6 shadow-[var(--bm-shadow)]">
                <p className="mb-2 text-xs uppercase tracking-[0.22em] text-[var(--bm-slate)]">
                  Capstone grade
                </p>
                <p className="text-[var(--bm-red)]" style={{ fontSize: '3rem', lineHeight: '1.05' }}>
                  A+
                </p>
                <p className="mt-1 text-sm text-[var(--bm-slate)]">MScGAH · PolyU</p>
              </div>
            </div>

            {/* 86.7 vs 80 comparison bar */}
            <div className="rounded-[2rem] bg-white/55 p-8 shadow-[var(--bm-shadow)]">
              <p className="mb-6 text-xs uppercase tracking-[0.22em] text-[var(--bm-slate)]">
                [ Metric label · what 86.7% vs 80% measures · TBD ]
              </p>
              <div className="space-y-5">
                <div>
                  <div className="mb-2 flex items-baseline justify-between">
                    <span className="text-sm text-foreground">Bauhinia-Mind</span>
                    <span className="text-xl italic text-[var(--bm-red)]">86.7%</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-white/70">
                    <div className="h-full rounded-full bg-[var(--bm-red)]" style={{ width: '86.7%' }} />
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex items-baseline justify-between">
                    <span className="text-sm text-[var(--bm-slate)]">Baseline</span>
                    <span className="text-xl italic text-[var(--bm-slate)]">80%</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-white/70">
                    <div className="h-full rounded-full bg-[var(--bm-slate)]/70" style={{ width: '80%' }} />
                  </div>
                </div>
              </div>
              <figcaption className="mt-5 text-xs uppercase tracking-[0.22em] text-[var(--bm-slate)]">
                Fig 09 — Bauhinia-Mind vs baseline (placeholder metric)
              </figcaption>
            </div>
          </CaseSection>

          <CaseSection title="User Journeys" number="10 — Journeys">
            <div className="space-y-12">
              {/* journey 1 — image left */}
              <div className="grid items-center gap-8 md:grid-cols-[0.7fr_1fr]">
                <FigPlaceholder
                  id="Fig 10A"
                  label="Journey UI · onboarding flow"
                  ratio="9:16"
                  caption="Fig 10A — Onboarding journey (placeholder)"
                />
                <CopySlot label="Journey A · onboarding narrative · what the newcomer sees in the first 60 seconds · 1–2 paragraphs" />
              </div>
              {/* journey 2 — image right */}
              <div className="grid items-center gap-8 md:grid-cols-[1fr_0.7fr]">
                <CopySlot label="Journey B · in-moment help narrative · the late-night symptom check flow · 1–2 paragraphs" />
                <FigPlaceholder
                  id="Fig 10B"
                  label="Journey UI · symptom-check flow"
                  ratio="9:16"
                  caption="Fig 10B — Symptom-check journey (placeholder)"
                />
              </div>
            </div>
          </CaseSection>

          <CaseSection title="Reflections & Future Work" number="11 — Reflection">
            <p className="max-w-prose leading-relaxed text-[var(--bm-slate)]">
              This project reinforced the importance of co-design with clinical stakeholders and the necessity
              of rigorous ethical frameworks when designing AI-driven health interventions. Future iterations
              will explore peer support features, integration with wearable devices for passive symptom monitoring,
              and expanded culturally-adapted content for diverse student populations across Asia.
            </p>
          </CaseSection>
        </div>

        <div className="border-t border-[rgba(122,16,35,0.18)] pt-12">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm text-[var(--bm-burgundy)] transition-opacity hover:opacity-70"
          >
            <ArrowLeft size={16} />
            Back to All Projects
          </Link>
        </div>
      </motion.div>
    </article>
  );
}

function CaseSection({
  title,
  number,
  children,
}: {
  title: string;
  number?: string;
  children: ReactNode;
}) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      className="mb-16"
    >
      {number && (
        <p className="mb-2 text-xs uppercase tracking-[0.22em] text-[var(--bm-slate)]">
          {number}
        </p>
      )}
      <h2 className="mb-6 text-[var(--bm-wine)]" style={{ fontSize: '1.5rem' }}>
        {title}
      </h2>
      {children}
    </motion.section>
  );
}

function FigPlaceholder({
  id,
  label,
  ratio,
  caption,
  className = '',
}: {
  id: string;
  label: string;
  ratio: string;
  caption: string;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div
        className="relative overflow-hidden rounded-[2rem] border border-dashed border-[rgba(122,16,35,0.18)] bg-white/45 shadow-[var(--bm-shadow)]"
        style={{ aspectRatio: ratio.replace(':', ' / ') }}
      >
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <p className="text-3xl italic text-[rgba(201,43,46,0.34)]">
            [ {id} · {label} · {ratio} ]
          </p>
        </div>
      </div>
      <figcaption className="mt-3 text-xs uppercase tracking-[0.22em] text-[var(--bm-slate)]">
        {caption}
      </figcaption>
    </figure>
  );
}

function CopySlot({ label }: { label: string }) {
  return (
    <div className="rounded-[1.5rem] border border-dashed border-[rgba(122,16,35,0.18)] bg-white/30 p-6">
      <p className="text-xs uppercase tracking-[0.22em] text-[var(--bm-slate)]">
        [ Copy slot · {label} ]
      </p>
    </div>
  );
}
