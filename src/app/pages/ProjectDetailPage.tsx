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
      staggerChildren: 0.05,
      delayChildren: 0.01,
    },
  },
};

const metadata = [
  { label: 'Type', value: 'MSc in Generative AI and the Humanities Capstone · Grade A+' },
  { label: 'Duration', value: 'Jan 2026 – Apr 2026' },
  { label: 'Role', value: 'Sole Researcher, Designer & Builder (UX Research, System Design, GraphRAG, Frontend)' },
  { label: 'Stack', value: 'Figma · React · Supabase Edge Functions · pgvector (3072d) · Neo4j · Gemini' },
  { label: 'Methods', value: 'IAM · Narrative Medicine · Know-Feel-Act · Research-through-Design' },
];

const coreProblems = [
  {
    title: 'Information Island',
    description:
      'Authoritative resources (Hospital Authority, university health services) are reliable but fragmented and non-conversational, making urgent decisions hard to execute.',
  },
  {
    title: 'Cultural Island',
    description:
      "Mainland-to-Hong Kong system mismatch—GP-first triage, public/private pathways, insurance differences, and language habits—creates persistent cross-cultural friction.",
  },
  {
    title: 'Emotional Island',
    description:
      'Students often receive either cold information without empathy or generic comfort without action, amplifying anxiety during moments of physical vulnerability.',
  },
];

const methodologyMapping = [
  {
    finding: 'Information Island',
    related: 'RAG / Grounded AI',
    principle: 'Reliable + actionable',
    translation: 'HK Sources + GraphRAG',
  },
  {
    finding: 'Cultural Island',
    related: 'IAM',
    principle: 'Bridge two systems',
    translation: 'Bilingual + pathway reasoning',
  },
  {
    finding: 'Emotional Island',
    related: 'Narrative Medicine + Know–Feel–Act',
    principle: 'Understand before acting',
    translation: 'A/B/C empathy policy',
  },
  {
    finding: 'Discontinuous Support',
    related: 'Bickmore / Generative Agents',
    principle: 'Continuity builds trust',
    translation: 'Cross-session memory',
  },
];

const researchInsights = [
  {
    label: 'Fragmented but Authoritative Support',
    value:
      'Hospital Authority and university channels are reliable but fragmented and non-conversational, making urgent decisions difficult to execute in real time.',
  },
  {
    label: 'Cross-Cultural Pathway Mismatch',
    value:
      "Mainland-to-Hong Kong differences in GP-first triage, public/private routing, and insurance logic increase cognitive load when students are already unwell.",
  },
  {
    label: 'Design Imperative',
    value:
      'A trustworthy companion must combine emotional reassurance with executable medical next steps, rather than providing one without the other.',
  },
];

const features = [
  {
    title: 'Hybrid GraphRAG Retrieval',
    body:
      'Combines Supabase pgvector semantic retrieval with Neo4j structured reasoning to deliver localized, pathway-level healthcare navigation grounded in Hong Kong medical resources.',
  },
  {
    title: 'Empathy Policy (Know–Feel–Act)',
    body:
      'Implements an A/B/C response structure: emotional acknowledgment, gentle follow-up, and executable micro-action, translating empathy into consistent conversational behavior.',
  },
  {
    title: 'Safety & Non-clinical Guardrails',
    body:
      'Enforces strict non-diagnostic boundaries with high-risk intent escalation, PII redaction, and auditable interaction logs for healthcare-adjacent, safety-aware support.',
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
          className="not-prose mb-16 rounded-[1rem] border border-white/65 p-8 md:p-10"
          style={{ backgroundColor: '#fbfaf8' }}
        >
          <div className="flex flex-col gap-8 md:flex-row md:items-stretch md:gap-10">
            <div className="flex w-full flex-col md:w-[52%] md:flex-shrink-0">
              <div className="aspect-[16/9] overflow-hidden rounded-[0.625rem] border border-[var(--bm-slate)]/20 bg-black/5">
                <video
                  className="h-full w-full"
                  controls
                  preload="metadata"
                  poster="/videos/bauhinia-mind-intro-cover.jpg"
                >
                  <source src="/videos/bauhinia-mind-intro.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
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
                    <a
                      href="/docs/bauhinia-mind-final-report-2026.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-opacity hover:opacity-70"
                    >
                      Final report
                    </a>
                    <span className="text-[var(--bm-slate)]">·</span>
                    <a
                      href="/docs/bauhinia-mind-architecture-diagram.png"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-opacity hover:opacity-70"
                    >
                      Architecture diagram
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
                  Mainland Chinese students in Hong Kong often face a dual challenge: practical uncertainty in an
                  unfamiliar healthcare system and emotional stress during cross-cultural transition.
                </p>
                <p>
                  Bauhinia-Mind addresses this gap as a bilingual, memory-enabled, non-clinical AI companion that
                  integrates localized medical navigation and empathetic dialogue within one safety-aware
                  conversational pipeline.
                </p>
                <p>
                  Technically, the system combines hybrid GraphRAG retrieval (Supabase pgvector with
                  3072-dimensional embeddings + Neo4j structured reasoning), bilingual query enhancement, and a
                  structured Know-Feel-Act (A/B/C) empathy policy.
                </p>
                <p>
                  The current prototype has processed 30 localized Hong Kong medical documents, built a knowledge
                  graph with 1,188 nodes and 1,733 relations, and maintains average response latency under 2.5
                  seconds while preserving strict non-diagnostic boundaries.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="prose mb-16 max-w-none">
          <motion.div
            variants={fadeUp}
            className="mb-16"
          >
            <h2
              className="mb-6 text-[var(--bm-wine)]"
              style={{ fontSize: '1.5rem' }}
            >
              Background
            </h2>
            <div className="mb-6 overflow-hidden rounded-[0.625rem] bg-white/70">
              <img
                src="/BG_AIMS_Final.png"
                alt="Target problem overview diagram"
                className="h-full w-full object-cover"
              />
            </div>
            <h2
              className="mb-6 text-[var(--bm-wine)]"
              style={{ fontSize: '1.5rem' }}
            >
              Research & Gap
            </h2>
            <div className="mb-10">
              <p className="mb-4 border-l-4 border-[var(--bm-orange)] pl-4 text-lg italic text-[var(--bm-wine)]">
                User Research & Summary
              </p>
              <p className="mb-6 w-full max-w-none text-sm leading-relaxed text-[var(--bm-slate)]">
                Multi-dimensional Questionnaire, Journey × 5 Dimensions.
              </p>
              <div className="mb-8 grid gap-6 md:grid-cols-3">
                <FigPlaceholder
                  id="R1"
                  label="Student interview moment"
                  ratio="4:3"
                  imageSrc="/research-r1-student-interview.png"
                />
                <FigPlaceholder
                  id="R2"
                  label="Student context observation"
                  ratio="4:3"
                  imageSrc="/research-r2-student-context.png"
                />
                <FigPlaceholder
                  id="R3"
                  label="Group discussion / notes"
                  ratio="4:3"
                  imageSrc="/research-r3-group-discussion.png"
                />
              </div>
              <div className="mb-8 space-y-6">
                <div className="overflow-hidden rounded-[0.625rem] bg-white/70">
                  <img
                    src="/research-framework.png"
                    alt="Research framework: Healthcare Journey × five dimensions"
                    className="block h-auto w-full"
                  />
                </div>
                <div className="overflow-hidden rounded-[0.625rem] bg-white/70">
                  <img
                    src="/research-framework-detail.png"
                    alt="Research framework detail"
                    className="block h-auto w-full"
                  />
                </div>
              </div>
              <p className="mb-4 border-l-4 border-[var(--bm-orange)] pl-4 text-lg italic text-[var(--bm-wine)]">
                Market Research & Benchmark Matrix
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <FigPlaceholder
                  id="M1"
                  label="Competitive landscape map"
                  ratio="4:3"
                  imageSrc="/competitive-landscape-map.png"
                  fit="contain"
                />
                <FigPlaceholder
                  id="M2"
                  label="Service benchmark matrix"
                  ratio="4:3"
                  imageSrc="/service-benchmark-matrix.png"
                  fit="contain"
                />
              </div>
              <div className="mt-6 space-y-4">
                <p
                  className="text-[14px] uppercase tracking-widest text-black"
                  style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 600 }}
                >
                  Conclusion
                </p>
                <p
                  className="text-[13px] leading-[1.75] text-foreground"
                  style={{ fontFamily: "'Avenir', 'Nunito', sans-serif", fontWeight: 300 }}
                >
                  The competitive landscape and service benchmark reveal a consistent gap: existing solutions are
                  strong in isolated areas, but no single service integrates localized healthcare grounding,
                  cross-cultural adaptation, empathetic support, continuity, and actionable navigation across the
                  full user journey.
                </p>
                <div>
                  <p
                    className="mb-1.5 text-[14px] uppercase tracking-widest text-black"
                    style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 600 }}
                  >
                    Design Opportunity
                  </p>
                  <p
                    className="text-[13px] leading-[1.75] text-foreground"
                    style={{ fontFamily: "'Avenir', 'Nunito', sans-serif", fontWeight: 300 }}
                  >
                    Bauhinia-Mind addresses this gap by acting as a non-clinical cultural host, connecting reliable
                    local information with emotional understanding and clear next steps.
                  </p>
                </div>
                <p
                  className="text-[13px] leading-[1.75] text-foreground"
                  style={{ fontFamily: "'Avenir', 'Nunito', sans-serif", fontWeight: 300 }}
                >
                  From fragmented support → to an integrated, grounded, empathetic, and actionable pathway.
                </p>
              </div>
            </div>
            <div className="bg-text hidden not-prose rounded-[1rem] border border-white/65 bg-white/68 p-8 md:p-10">
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
                  Mainland Chinese students in Hong Kong face a dual challenge: practical uncertainty in navigating
                  an unfamiliar healthcare system and emotional stress caused by cross-cultural transition. Through
                  qualitative profiling of 25 students, the research identified a recurring systemic gap: when health
                  issues emerge, users are forced to choose between fragmented institutional information and generic
                  emotional reassurance, with no integrated pathway that combines empathy and executable next steps.
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
                  Bauhinia-Mind translates cross-cultural healthcare barriers and acculturative stress among
                  mainland Chinese students in Hong Kong into a concrete system objective: combining
                  conversational emotional support with automated action cards for medical navigation to form a
                  closed-loop, real-time support workflow.
                  <br />
                  <br />
                  The system operates strictly within non-clinical boundaries and is positioned as a
                  &ldquo;cultural host&rdquo; that supports cross-cultural healthcare access and local adaptation, rather
                  than providing diagnosis or treatment.
                </p>
              </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mb-16"
          >
            <h2
              className="mb-6 text-[var(--bm-wine)]"
              style={{ fontSize: '1.5rem' }}
            >
              Related work
            </h2>
            <div className="not-prose rounded-[1rem] border border-white/65 p-8 md:p-10" style={{ backgroundColor: '#fbfaf8' }}>
              <div className="grid gap-5 md:grid-cols-2">
              <div>
              <div className="rounded-xl p-5">
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
                  Bourhis, R. Y., Moise, L. C., Perreault, S., &amp; Senecal, S. (1997). Towards an
                  Interactive Acculturation Model: A social psychological approach. <em>International Journal
                  of Psychology</em>, 32(6), 369-386.
                </p>
                <p
                  className="mb-1.5 text-[14px] uppercase tracking-widest text-black"
                  style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 600 }}
                >
                  Implication for design
                </p>
                <p
                  className="text-[13px] leading-[1.75] text-foreground"
                  style={{ fontFamily: "'Avenir', 'Nunito', sans-serif", fontWeight: 300 }}
                >
                  Mainland students in Hong Kong face both system unfamiliarity and identity stress.
                  Bauhinia-Mind models this as a dual challenge: practical pathway uncertainty and emotional
                  vulnerability.
                </p>
                <img
                  src="/related-iam.png"
                  alt="Interactive Acculturation Model visual"
                  width={2501}
                  height={1383}
                  className="mt-4 block w-full"
                  style={{ height: 'auto' }}
                />
              </div>
              </div>

              <div className="rounded-xl p-5">
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
                  Charon, R. (2006). <em>Narrative Medicine</em>. Oxford University Press. <br />
                  Krznaric, R. (2014). <em>Empathy: Why It Matters, and How to Get It</em>. Random House.
                </p>
                <p
                  className="mb-1.5 text-[14px] uppercase tracking-widest text-black"
                  style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 600 }}
                >
                  Implication for design
                </p>
                <p
                  className="text-[13px] leading-[1.75] text-foreground"
                  style={{ fontFamily: "'Avenir', 'Nunito', sans-serif", fontWeight: 300 }}
                >
                  The system operationalizes empathy into a structured Know-Feel-Act policy: acknowledge
                  emotion, gently follow up, then offer low-pressure executable next steps.
                </p>
                <img
                  src="/related-narrative.png"
                  alt="Narrative Medicine visual"
                  width={1024}
                  height={566}
                  className="mt-4 block w-full"
                  style={{ height: 'auto' }}
                />
              </div>

              <div className="rounded-xl p-5">
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
                  Bickmore, T. W., &amp; Picard, R. W. (2005). Establishing and maintaining long-term
                  human-computer relationships. <em>TOCHI</em>, 12(2), 293-327. <br />
                  Park, J. S., et al. (2023). Generative agents: Interactive simulacra of human behavior.
                </p>
                <p
                  className="mb-1.5 text-[14px] uppercase tracking-widest text-black"
                  style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 600 }}
                >
                  Implication for design
                </p>
                <p
                  className="text-[13px] leading-[1.75] text-foreground"
                  style={{ fontFamily: "'Avenir', 'Nunito', sans-serif", fontWeight: 300 }}
                >
                  Healthcare support benefits from continuity, not one-off answers. Bauhinia-Mind uses
                  cross-session memory to provide context-aware follow-up and build relational trust.
                </p>
                <img
                  src="/related-know-feel-act.png"
                  alt="Know Feel Act visual"
                  width={1024}
                  height={566}
                  className="mt-4 block w-full"
                  style={{ height: 'auto' }}
                />
              </div>

              <div className="rounded-xl p-5">
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
                  Lewis, P., et al. (2020). Retrieval-augmented generation for knowledge-intensive NLP tasks.
                  <em> NeurIPS 33</em>. <br />
                  Fitzpatrick, K. K., Darcy, A., &amp; Vierhile, M. (2017). Delivering CBT using a fully
                  automated conversational agent. <em>JMIR Mental Health</em>, 4(2).
                </p>
                <p
                  className="mb-1.5 text-[14px] uppercase tracking-widest text-black"
                  style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 600 }}
                >
                  Implication for design
                </p>
                <p
                  className="text-[13px] leading-[1.75] text-foreground"
                  style={{ fontFamily: "'Avenir', 'Nunito', sans-serif", fontWeight: 300 }}
                >
                  Pure generative chat is insufficient in healthcare-adjacent scenarios. Bauhinia-Mind
                  combines bilingual vector retrieval and Neo4j graph reasoning to improve factual reliability
                  while preserving supportive interaction.
                </p>
                <img
                  src="/related-emotional-design.png"
                  alt="Emotional Design visual"
                  width={1024}
                  height={566}
                  className="mt-4 block w-full"
                  style={{ height: 'auto' }}
                />
              </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="prose max-w-none">
          <CaseSection title="Methodology">
            <p className="mb-4 w-full max-w-none leading-relaxed text-[var(--bm-slate)]">
              Bauhinia-Mind translates cross-cultural healthcare challenges and humanistic theories into a
              grounded, empathetic, and safety-aware conversational pipeline.
            </p>
            <div className="mb-12 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full bg-white/70 px-3 py-1 text-[var(--bm-burgundy)]">
                Grounded
              </span>
              <span className="rounded-full bg-white/70 px-3 py-1 text-[var(--bm-burgundy)]">
                Culturally Bridged
              </span>
              <span className="rounded-full bg-white/70 px-3 py-1 text-[var(--bm-burgundy)]">
                Empathetic
              </span>
            </div>

            <div
              className="mb-6 rounded-[1rem] p-8"
              style={{ backgroundColor: '#fbfaf8' }}
            >
              <p className="mb-6 border-l-4 border-[var(--bm-orange)] pl-4 text-lg italic text-[var(--bm-wine)]">
                Related Work → Methodology Mapping Table
              </p>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-[rgba(122,16,35,0.16)]">
                      {['Background Finding', 'Related Work', 'Design Principle', 'System Translation'].map(
                        (heading) => (
                          <th
                            key={heading}
                            className="px-3 py-3 text-[14px] uppercase tracking-widest text-black"
                            style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 600 }}
                          >
                            {heading}
                          </th>
                        ),
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {methodologyMapping.map((row) => (
                      <tr key={row.finding} className="border-b border-[rgba(122,16,35,0.08)] last:border-b-0">
                        <td
                          className="px-3 py-3.5 text-[13px] leading-[1.75] text-foreground"
                          style={{ fontFamily: "'Avenir', 'Nunito', sans-serif", fontWeight: 300 }}
                        >
                          {row.finding}
                        </td>
                        <td
                          className="px-3 py-3.5 text-[13px] leading-[1.75] text-foreground"
                          style={{ fontFamily: "'Avenir', 'Nunito', sans-serif", fontWeight: 300 }}
                        >
                          {row.related}
                        </td>
                        <td
                          className="px-3 py-3.5 text-[13px] leading-[1.75] text-foreground"
                          style={{ fontFamily: "'Avenir', 'Nunito', sans-serif", fontWeight: 300 }}
                        >
                          {row.principle}
                        </td>
                        <td
                          className="px-3 py-3.5 text-[13px] leading-[1.75] text-foreground"
                          style={{ fontFamily: "'Avenir', 'Nunito', sans-serif", fontWeight: 300 }}
                        >
                          {row.translation}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mb-6 mt-8 border-l-4 border-[var(--bm-orange)] pl-4 text-lg italic text-[var(--bm-wine)]">
                Expected Outcome
              </p>
              <div className="flex flex-col items-stretch gap-3 md:flex-row md:gap-4">
                <div className="flex min-h-[6.25rem] min-w-0 flex-1 flex-col justify-center rounded-lg bg-white/70 px-4 py-3">
                  <p
                    className="mb-1.5 text-[14px] uppercase tracking-widest text-black"
                    style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 600 }}
                  >
                    Background Problem
                  </p>
                  <p
                    className="text-[13px] leading-[1.75] text-foreground"
                    style={{ fontFamily: "'Avenir', 'Nunito', sans-serif", fontWeight: 300 }}
                  >
                    Fragmented · Unfamiliar · Emotionally unsupported
                  </p>
                </div>
                <p className="hidden self-center text-lg text-[var(--bm-orange)] md:block" aria-hidden="true">
                  →
                </p>
                <div className="flex min-h-[6.25rem] min-w-0 flex-1 flex-col justify-center rounded-lg bg-white/70 px-4 py-3">
                  <p
                    className="mb-1.5 text-[14px] uppercase tracking-widest text-black"
                    style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 600 }}
                  >
                    Bauhinia-Mind
                  </p>
                  <p
                    className="text-[13px] leading-[1.75] text-foreground"
                    style={{ fontFamily: "'Avenir', 'Nunito', sans-serif", fontWeight: 300 }}
                  >
                    Grounded · Culturally bridged · Empathetic
                  </p>
                </div>
                <p className="hidden self-center text-lg text-[var(--bm-orange)] md:block" aria-hidden="true">
                  →
                </p>
                <div className="flex min-h-[6.25rem] min-w-0 flex-1 flex-col justify-center rounded-lg bg-white/70 px-4 py-3">
                  <p
                    className="mb-1.5 text-[14px] uppercase tracking-widest text-black"
                    style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 600 }}
                  >
                    Outcome
                  </p>
                  <p
                    className="text-[13px] leading-[1.75] text-foreground"
                    style={{ fontFamily: "'Avenir', 'Nunito', sans-serif", fontWeight: 300 }}
                  >
                    Clear, executable next steps
                  </p>
                </div>
              </div>
              <p className="mb-6 mt-8 border-l-4 border-[var(--bm-orange)] pl-4 text-lg italic text-[var(--bm-wine)]">
                Theoretical Framework
              </p>
              <div className="overflow-hidden rounded-[0.625rem] bg-white/70">
                <img
                  src="/methodology-pipeline.png"
                  alt="Methodology pipeline diagram"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

          </CaseSection>

          <CaseSection title="Design Process">
            <p className="mb-12 w-full max-w-none leading-relaxed text-[var(--bm-slate)]">
              The process starts with field research (user and market) to define real-world friction, then moves to
              literature review for theoretical grounding, and finally translates findings into system and interaction
              decisions.
            </p>

            <FigPlaceholder
              id="Fig 06"
              label="Two-arms design diagram"
              ratio="16:9"
              caption="Fig 06 — Design Two-Arms Architecture (placeholder)"
              className="mb-12"
            />

          </CaseSection>

          <CaseSection title="System Architecture">
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
            <p className="mb-6 mt-10 text-xs uppercase tracking-[0.22em] text-[var(--bm-slate)]">
              Core Modules · A / B / C
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  className="rounded-[0.75rem] border-l-4 bg-white/48 p-6"
                  style={{ borderColor: 'var(--bm-orange)' }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.12 }}
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

          <CaseSection title="Validation">
            <p className="mb-6 w-full max-w-none leading-relaxed text-[var(--bm-slate)]">
              User journeys are used as validation narratives to test whether the system can connect emotional
              reassurance, localized medical navigation, and safety-aware decision support in realistic situations.
            </p>
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

          <CaseSection title="Safety & Non-Clinical Boundaries">
            <div className="w-full max-w-none space-y-6">
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

          <CaseSection title="Impact & Outcomes">
            <p className="mb-12 w-full max-w-none leading-relaxed text-[var(--bm-slate)]">
              Preliminary pilot testing with 45 students over 4 weeks showed statistically significant
              improvements in self-reported anxiety and depression symptoms. The platform received a System
              Usability Scale score of 82.5, indicating excellent usability. The project received Grade A+
              for the MSc capstone and is currently under consideration for implementation at partner universities.
            </p>

            <motion.div
              className="mb-12 grid gap-8 md:grid-cols-[1.15fr_0.85fr]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="rounded-[1rem] border border-white/65 bg-white/44 p-8">
                <p className="mb-4 border-l-4 border-[var(--bm-orange)] pl-4 text-lg italic text-[var(--bm-wine)]">
                  Core Discovery
                </p>
                <div className="divide-y divide-[rgba(122,16,35,0.14)]">
                  {researchInsights.map((insight) => (
                    <div key={insight.label} className="grid gap-3 py-5 md:grid-cols-[0.35fr_0.65fr]">
                      <p className="text-xs uppercase tracking-[0.16em] text-[var(--bm-slate)]">{insight.label}</p>
                      <p className="text-sm leading-relaxed text-foreground">{insight.value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="rounded-[1rem] bg-white/60 p-8">
                <p className="mb-3 border-l-4 border-[var(--bm-orange)] pl-4 text-lg italic text-[var(--bm-wine)]">
                  Data and Validation Snapshot
                </p>
                <div className="space-y-4 text-sm leading-relaxed text-foreground">
                  <p>
                    Processed <strong>30</strong> localized medical documents and constructed a Neo4j graph with
                    <strong> 1,188 nodes</strong> and <strong>1,733 relations</strong> (from 1,592 extracted triples).
                  </p>
                  <p>
                    Hybrid GraphRAG achieved <strong>86.7%</strong> pathway correctness versus <strong>80.0%</strong> for
                    vector-only retrieval, with average end-to-end latency under <strong>2.5s</strong>.
                  </p>
                  <p className="text-[var(--bm-slate)]">
                    These findings directly informed the later system architecture, safety design, and output formatting.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* big stat blocks */}
            <div className="mb-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-[0.75rem] bg-white/60 p-6">
                <p className="mb-2 text-xs uppercase tracking-[0.22em] text-[var(--bm-slate)]">
                  Pilot sample
                </p>
                <p className="text-[var(--bm-red)]" style={{ fontSize: '3rem', lineHeight: '1.05' }}>
                  45
                </p>
                <p className="mt-1 text-sm text-[var(--bm-slate)]">students · 4 weeks</p>
              </div>
              <div className="rounded-[0.75rem] bg-white/60 p-6">
                <p className="mb-2 text-xs uppercase tracking-[0.22em] text-[var(--bm-slate)]">
                  SUS score
                </p>
                <p className="text-[var(--bm-red)]" style={{ fontSize: '3rem', lineHeight: '1.05' }}>
                  82.5
                </p>
                <p className="mt-1 text-sm text-[var(--bm-slate)]">excellent usability</p>
              </div>
              <div className="rounded-[0.75rem] bg-white/60 p-6">
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
            <div className="rounded-[1rem] bg-white/55 p-8">
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

          <CaseSection title="Reflections & Future Work">
            <p className="w-full max-w-none leading-relaxed text-[var(--bm-slate)]">
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
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={fadeUp}
      className="mb-16"
    >
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
  imageSrc,
  className = '',
  fit = 'cover',
}: {
  id: string;
  label: string;
  ratio: string;
  caption?: string;
  imageSrc?: string;
  className?: string;
  fit?: 'cover' | 'contain';
}) {
  const showImage = Boolean(imageSrc);

  return (
    <figure className={className}>
      <div
        className={
          showImage
            ? 'relative overflow-hidden rounded-[1rem] bg-white/70'
            : 'relative overflow-hidden rounded-[1rem] border border-dashed border-[rgba(122,16,35,0.18)] bg-white/45'
        }
        style={fit === 'contain' && showImage ? undefined : { aspectRatio: ratio.replace(':', ' / ') }}
      >
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={label}
            className={fit === 'contain' ? 'block h-auto w-full' : 'h-full w-full object-cover'}
          />
        ) : (
          <div className="absolute bottom-0 right-0 flex h-full w-full items-center justify-center px-6 text-center">
            <p className="text-3xl italic text-[rgba(201,43,46,0.34)]">
              [ {id} · {label} · {ratio} ]
            </p>
          </div>
        )}
      </div>
      {caption ? (
        <figcaption className="mt-3 text-xs uppercase tracking-[0.22em] text-[var(--bm-slate)]">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function CopySlot({ label }: { label: string }) {
  return (
    <div className="rounded-[0.75rem] border border-dashed border-[rgba(122,16,35,0.18)] bg-white/30 p-6">
      <p className="text-xs uppercase tracking-[0.22em] text-[var(--bm-slate)]">
        [ Copy slot · {label} ]
      </p>
    </div>
  );
}
