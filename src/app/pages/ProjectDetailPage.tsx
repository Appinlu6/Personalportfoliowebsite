import { useParams, Link } from 'react-router';

const caseStudies: Record<string, React.ReactNode> = {
  'bauhinia-mind': <BauhiniaMind />,
};

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const content = slug ? caseStudies[slug] : null;

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Project not found</p>
          <Link to="/work" className="underline" style={{ color: 'var(--warm-accent)' }}>
            ← Back to Work
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {content}
    </div>
  );
}

function BauhiniaMind() {
  return (
    <article className="py-20">
      <div className="max-w-4xl mx-auto px-6">

        {/* Back link */}
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 8H3M3 8L8 3M3 8L8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          All Projects
        </Link>

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-xs px-3 py-1 rounded-full"
              style={{ backgroundColor: '#F5E6DC', color: 'var(--warm-accent)' }}
            >
              Featured Project
            </span>
          </div>
          <h1 className="mb-4" style={{ fontSize: '3rem', lineHeight: '1.1' }}>
            Bauhinia-Mind
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Designing an AI-powered digital therapeutics platform for mental health care
          </p>
          <div className="flex flex-wrap gap-8 text-sm">
            <div>
              <p className="text-muted-foreground mb-1">Role</p>
              <p>Lead UX Researcher & Designer</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-1">Timeline</p>
              <p>Sep 2024 – Apr 2025</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-1">Recognition</p>
              <p>Capstone Grade: A+</p>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="aspect-[16/9] bg-muted rounded-xl overflow-hidden mb-16">
          <img
            src="https://images.unsplash.com/photo-1522075782449-e45a34f1ddfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50YWwlMjBoZWFsdGglMjBtaW5kZnVsbmVzcyUyMG1lZGl0YXRpb24lMjBjYWxtJTIwcGVyc29ufGVufDF8fHx8MTc3OTUxMTg3NHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Project overview"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose max-w-none">
          <h2 className="mb-4" style={{ fontSize: '1.5rem' }}>Overview</h2>
          <div className="not-prose mb-16 rounded-2xl border border-border bg-card p-10 flex gap-12">
            {/* Left: summary */}
            <div style={{ flex: '0 0 60%' }}>
              <p className="text-base leading-[1.8] text-foreground" style={{ fontFamily: "'Avenir', 'Nunito', sans-serif", fontWeight: 300 }}>
                Bauhinia-Mind is an empathic, memory-enabled AI health companion for Mainland Chinese students in Hong Kong. It pairs localized medical navigation with culturally-sensitive emotional companionship — helping students who face both an unfamiliar medical system and the quiet habit of handling illness alone. The project reframes their stress through the Interactive Acculturation Model (IAM), and turns "companionship" from an abstract feeling into a designable, measurable variable.
              </p>
            </div>

            {/* Divider */}
            <div className="w-px bg-border flex-shrink-0" />

            {/* Right: metadata */}
            <div className="flex-1 flex flex-col gap-5">
              {[
                { label: 'Type', value: 'MSc Capstone · Grade A+' },
                { label: 'Role', value: 'Sole designer & developer (research · UX · system architecture · development)' },
                { label: 'Duration', value: 'Jan – Jul 2026' },
                { label: 'Stack', value: 'Figma · Cursor · GitHub · Supabase · Neo4j · RAG / LLM' },
                { label: 'Methods', value: 'Double Diamond · Research-through-Design' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1" style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 600 }}>{label}</p>
                  <p className="text-sm text-foreground leading-relaxed" style={{ fontFamily: "'Avenir', 'Nunito', sans-serif", fontWeight: 300 }}>{value}</p>
                </div>
              ))}
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1" style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 600 }}>Links</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm" style={{ color: 'var(--warm-accent)' }}>
                  <a href="#" className="hover:opacity-70 transition-opacity">Live demo</a>
                  <span className="text-muted-foreground">·</span>
                  <a href="#" className="hover:opacity-70 transition-opacity">Final report</a>
                  <span className="text-muted-foreground">·</span>
                  <a href="#" className="hover:opacity-70 transition-opacity">Usability findings</a>
                </div>
              </div>
            </div>
          </div>

          <h2 className="mb-4" style={{ fontSize: '1.5rem' }}>Research & Discovery</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            The research phase involved mixed-method approaches including semi-structured interviews with
            university counseling centers, surveys with 150+ students, and analysis of existing digital
            mental health interventions. Key findings revealed significant barriers to traditional mental
            health services, including stigma, long wait times, and limited culturally-adapted resources.
          </p>

          <div className="grid grid-cols-3 gap-6 my-12 p-8 bg-muted/30 rounded-xl">
            <div>
              <p className="mb-1" style={{ fontSize: '2rem', color: 'var(--warm-accent)' }}>72%</p>
              <p className="text-sm text-muted-foreground">of students reported unmet mental health needs</p>
            </div>
            <div>
              <p className="mb-1" style={{ fontSize: '2rem', color: 'var(--warm-accent)' }}>4–6 weeks</p>
              <p className="text-sm text-muted-foreground">average wait time for counseling services</p>
            </div>
            <div>
              <p className="mb-1" style={{ fontSize: '2rem', color: 'var(--warm-accent)' }}>83%</p>
              <p className="text-sm text-muted-foreground">would use a digital intervention if available</p>
            </div>
          </div>

          <h2 className="mb-4" style={{ fontSize: '1.5rem' }}>Design Process</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            The design process followed an iterative, user-centered approach involving stakeholder workshops,
            low-fidelity prototyping, and usability testing with target users. The platform architecture was
            informed by established digital health frameworks and mental health clinical guidelines.
          </p>

          <div className="aspect-[16/9] bg-muted rounded-xl overflow-hidden my-12">
            <img
              src="https://images.unsplash.com/photo-1627542557169-5ed71c66ed85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBtb2NrdXAlMjBtaW5pbWFsJTIwY2xlYW4lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzc5NTExODc4fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Design mockups"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="mb-4" style={{ fontSize: '1.5rem' }}>Key Features</h2>
          <div className="space-y-6 mb-12">
            <div className="border-l-2 pl-6" style={{ borderColor: 'var(--warm-accent)' }}>
              <h4 className="mb-2">Personalized Assessment & Recommendation</h4>
              <p className="text-muted-foreground leading-relaxed">
                Machine learning algorithms analyze user responses to validated psychological assessments
                (PHQ-9, GAD-7) to recommend tailored intervention modules and track symptom progression over time.
              </p>
            </div>
            <div className="border-l-2 pl-6" style={{ borderColor: 'var(--warm-accent)' }}>
              <h4 className="mb-2">Modular Intervention Library</h4>
              <p className="text-muted-foreground leading-relaxed">
                Evidence-based content modules covering CBT, mindfulness, behavioral activation, and emotion
                regulation, each adapted for Hong Kong university student context and cultural considerations.
              </p>
            </div>
            <div className="border-l-2 pl-6" style={{ borderColor: 'var(--warm-accent)' }}>
              <h4 className="mb-2">Crisis Detection & Escalation</h4>
              <p className="text-muted-foreground leading-relaxed">
                Safety protocols built into the system detect high-risk responses and provide immediate
                resources, including direct connections to university counseling services and crisis hotlines.
              </p>
            </div>
          </div>

          <h2 className="mb-4" style={{ fontSize: '1.5rem' }}>Impact & Outcomes</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Preliminary pilot testing with 45 students over 4 weeks showed statistically significant
            improvements in self-reported anxiety and depression symptoms. The platform received a System
            Usability Scale score of 82.5, indicating excellent usability. The project received Grade A+
            for the MSc capstone and is currently under consideration for implementation at partner universities.
          </p>

          <div className="aspect-video bg-muted rounded-xl overflow-hidden my-12">
            <img
              src="https://images.unsplash.com/photo-1526724038726-3007ffb8025f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxtZW50YWwlMjBoZWFsdGglMjBtaW5kZnVsbmVzcyUyMG1lZGl0YXRpb24lMjBjYWxtJTIwcGVyc29ufGVufDF8fHx8MTc3OTUxMTg3NHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Impact visualization"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="mb-4" style={{ fontSize: '1.5rem' }}>Reflections & Future Work</h2>
          <p className="text-muted-foreground mb-12 leading-relaxed">
            This project reinforced the importance of co-design with clinical stakeholders and the necessity
            of rigorous ethical frameworks when designing AI-driven health interventions. Future iterations
            will explore peer support features, integration with wearable devices for passive symptom monitoring,
            and expanded culturally-adapted content for diverse student populations across Asia.
          </p>
        </div>

        {/* Back to work */}
        <div className="pt-12 border-t border-border">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 8H3M3 8L8 3M3 8L8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to All Projects
          </Link>
        </div>
      </div>
    </article>
  );
}
