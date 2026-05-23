export function CaseStudy() {
  return (
    <section id="case-study" className="py-32">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="mb-4" style={{ fontSize: '3rem', lineHeight: '1.1' }}>
            Bauhinia-Mind
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Designing an AI-powered digital therapeutics platform for mental health care
          </p>
          <div className="flex gap-6 text-sm">
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

        <div className="aspect-[16/9] bg-muted rounded-xl overflow-hidden mb-16">
          <img
            src="https://images.unsplash.com/photo-1522075782449-e45a34f1ddfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50YWwlMjBoZWFsdGglMjBtaW5kZnVsbmVzcyUyMG1lZGl0YXRpb24lMjBjYWxtJTIwcGVyc29ufGVufDF8fHx8MTc3OTUxMTg3NHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Project overview"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose max-w-none">
          <h3 className="mb-4" style={{ fontSize: '1.5rem' }}>
            Overview
          </h3>
          <p className="text-muted-foreground mb-12 leading-relaxed">
            This project addresses the growing mental health crisis among university students in Hong Kong
            by developing a digital platform that combines evidence-based psychological interventions with
            AI-driven personalization. The system aims to increase accessibility to mental health resources
            while maintaining clinical efficacy through human-centered design principles.
          </p>

          <h3 className="mb-4" style={{ fontSize: '1.5rem' }}>
            Research & Discovery
          </h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            The research phase involved mixed-method approaches including semi-structured interviews with
            university counseling centers, surveys with 150+ students, and analysis of existing digital
            mental health interventions. Key findings revealed significant barriers to traditional mental
            health services, including stigma, long wait times, and limited culturally-adapted resources.
          </p>

          <div className="grid grid-cols-3 gap-6 my-12 p-8 bg-muted/30 rounded-xl">
            <div>
              <p className="mb-1" style={{ fontSize: '2rem', color: 'var(--warm-accent)' }}>
                72%
              </p>
              <p className="text-sm text-muted-foreground">
                of students reported unmet mental health needs
              </p>
            </div>
            <div>
              <p className="mb-1" style={{ fontSize: '2rem', color: 'var(--warm-accent)' }}>
                4-6 weeks
              </p>
              <p className="text-sm text-muted-foreground">
                average wait time for counseling services
              </p>
            </div>
            <div>
              <p className="mb-1" style={{ fontSize: '2rem', color: 'var(--warm-accent)' }}>
                83%
              </p>
              <p className="text-sm text-muted-foreground">
                would use a digital intervention if available
              </p>
            </div>
          </div>

          <h3 className="mb-4" style={{ fontSize: '1.5rem' }}>
            Design Process
          </h3>
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

          <h3 className="mb-4" style={{ fontSize: '1.5rem' }}>
            Key Features
          </h3>
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

          <h3 className="mb-4" style={{ fontSize: '1.5rem' }}>
            Impact & Outcomes
          </h3>
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

          <h3 className="mb-4" style={{ fontSize: '1.5rem' }}>
            Reflections & Future Work
          </h3>
          <p className="text-muted-foreground mb-12 leading-relaxed">
            This project reinforced the importance of co-design with clinical stakeholders and the necessity
            of rigorous ethical frameworks when designing AI-driven health interventions. Future iterations
            will explore peer support features, integration with wearable devices for passive symptom monitoring,
            and expanded culturally-adapted content for diverse student populations across Asia.
          </p>
        </div>
      </div>
    </section>
  );
}
