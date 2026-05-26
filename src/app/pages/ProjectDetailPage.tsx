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
  { label: 'Role', value: 'Sole Designer & Developer (UX, GraphRAG, Neo4j, Frontend)' },
  { label: 'Duration', value: 'Jan 2026 – Apr 2026' },
  { label: 'Stack', value: 'Figma · React · Supabase pgvector · Neo4j · Gemini LLM' },
  { label: 'Methods', value: 'Double Diamond · Research-through-Design · IAM' },
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
        className="relative z-10 mx-auto max-w-4xl px-6"
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
          <div className="mb-4 flex items-center gap-3">
            <span className="rounded-full bg-white/70 px-3 py-1 text-xs text-[var(--bm-burgundy)] shadow-sm">
              Featured Project
            </span>
          </div>
          <h1 className="mb-4 text-[var(--bm-red)]" style={{ fontSize: '3rem', lineHeight: '1.1' }}>
            Bauhinia-Mind
          </h1>
          <p className="mb-8 text-xl text-[var(--bm-slate)]">
            A Bilingual GraphRAG-Based Empathic Medical Navigation and Emotional Companion
          </p>
          <div className="flex flex-wrap gap-8 text-sm">
            <div>
              <p className="mb-1 text-[var(--bm-slate)]">Role</p>
              <p>Lead UX Researcher & Designer</p>
            </div>
            <div>
              <p className="mb-1 text-[var(--bm-slate)]">Timeline</p>
              <p>Jan 2026 – Apr 2026</p>
            </div>
            <div>
              <p className="mb-1 text-[var(--bm-slate)]">Recognition</p>
              <p>Capstone Grade: A+</p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="mb-16 overflow-hidden rounded-[2rem] bg-white/55 p-3 shadow-[var(--bm-shadow)]">
          <div className="aspect-[16/9] overflow-hidden rounded-[1.5rem] bg-muted">
            <img
              src="https://images.unsplash.com/photo-1522075782449-e45a34f1ddfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50YWwlMjBoZWFsdGglMjBtaW5kZnVsbmVzcyUyMG1lZGl0YXRpb24lMjBjYWxtJTIwcGVyc29ufGVufDF8fHx8MTc3OTUxMTg3NHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Project overview"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        <div className="prose max-w-none">
          <CaseSection title="Introduction">
            <div className="not-prose mb-16 rounded-[2rem] border border-white/65 bg-white/68 p-8 shadow-[var(--bm-shadow)] md:p-10">
              <div className="max-w-4xl">
                <p className="text-base leading-relaxed text-foreground" style={{ fontFamily: "'Avenir', 'Nunito', sans-serif", fontWeight: 300 }}>
                  Bauhinia-Mind is an empathic, memory-enabled AI health companion designed for Mainland Chinese students facing cross-cultural adaptation stress in Hong Kong. By combining a hybrid GraphRAG orchestration layer (Neo4j structured reasoning + Supabase semantic vector search) with a tailored Know–Feel–Act empathy framework, the platform operationalizes abstract humanities theories into a computational system. Operating strictly within non-clinical boundaries, it acts as a supportive cultural broker, transforming fragmented medical infrastructure data into stable, traceable, and actionable navigation guidance.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                {metadata.map(({ label, value }) => (
                  <div key={label}>
                    <p className="mb-1 text-xs uppercase tracking-widest text-[var(--bm-slate)]" style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 600 }}>
                      {label}
                    </p>
                    <p className="text-sm leading-relaxed text-foreground" style={{ fontFamily: "'Avenir', 'Nunito', sans-serif", fontWeight: 300 }}>
                      {value}
                    </p>
                  </div>
                ))}
                <div>
                  <p className="mb-1 text-xs uppercase tracking-widest text-[var(--bm-slate)]" style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 600 }}>
                    Links
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-[var(--bm-burgundy)]">
                    <a href="#" className="transition-opacity hover:opacity-70">Live demo</a>
                    <span className="text-[var(--bm-slate)]">·</span>
                    <a href="#" className="transition-opacity hover:opacity-70">Final report</a>
                    <span className="text-[var(--bm-slate)]">·</span>
                    <a href="#" className="transition-opacity hover:opacity-70">Usability findings</a>
                  </div>
                </div>
              </div>
            </div>
          </CaseSection>

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
              className="mb-16 grid gap-8 md:grid-cols-[0.85fr_1.15fr]"
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

          <CaseSection title="Design Process">
            <p className="mb-6 leading-relaxed text-[var(--bm-slate)]">
              The design process followed an iterative, user-centered approach involving stakeholder workshops,
              low-fidelity prototyping, and usability testing with target users. The platform architecture was
              informed by established digital health frameworks and mental health clinical guidelines.
            </p>

            <div className="my-12 overflow-hidden rounded-[2rem] bg-white/55 p-3 shadow-[var(--bm-shadow)]">
              <div className="aspect-[16/9] overflow-hidden rounded-[1.5rem] bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1627542557169-5ed71c66ed85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBtb2NrdXAlMjBtaW5pbWFsJTIwY2xlYW4lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzc5NTExODc4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Design mockups"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </CaseSection>

          <CaseSection title="Key Features">
            <div className="mb-12 space-y-6">
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  className="rounded-[1.5rem] border-l-4 bg-white/48 p-6 shadow-[var(--bm-shadow)]"
                  style={{ borderColor: 'var(--bm-orange)' }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={fadeUp}
                >
                  <h4 className="mb-2">{feature.title}</h4>
                  <p className="leading-relaxed text-[var(--bm-slate)]">{feature.body}</p>
                </motion.div>
              ))}
            </div>
          </CaseSection>

          <CaseSection title="Impact & Outcomes">
            <p className="mb-6 leading-relaxed text-[var(--bm-slate)]">
              Preliminary pilot testing with 45 students over 4 weeks showed statistically significant
              improvements in self-reported anxiety and depression symptoms. The platform received a System
              Usability Scale score of 82.5, indicating excellent usability. The project received Grade A+
              for the MSc capstone and is currently under consideration for implementation at partner universities.
            </p>

            <div className="my-12 overflow-hidden rounded-[2rem] bg-white/55 p-3 shadow-[var(--bm-shadow)]">
              <div className="aspect-video overflow-hidden rounded-[1.5rem] bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1526724038726-3007ffb8025f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxtZW50YWwlMjBoZWFsdGglMjBtaW5kZnVsbmVzcyUyMG1lZGl0YXRpb24lMjBjYWxtJTIwcGVyc29ufGVufDF8fHx8MTc3OTUxMTg3NHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Impact visualization"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </CaseSection>

          <CaseSection title="Reflections & Future Work">
            <p className="mb-12 leading-relaxed text-[var(--bm-slate)]">
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

function CaseSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      <h2 className="mb-4 text-[var(--bm-wine)]" style={{ fontSize: '1.5rem' }}>
        {title}
      </h2>
      {children}
    </motion.section>
  );
}
