export function About() {
  const skills = [
    'User Research',
    'Usability Testing',
    'Service Design',
    'Design Systems',
    'Figma / Prototyping',
    'Data Analysis',
    'AI/ML Design',
    'Accessibility',
  ];

  return (
    <section id="about" className="py-32 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="mb-16" style={{ fontSize: '2.5rem' }}>
          About
        </h2>

        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <div>
            <h3 className="mb-6">Background</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Lu Zhengping (Arvin) is a UX/HCI designer and researcher specializing in digital health
              interventions and human-centered AI systems. His work explores how design can bridge
              technological capability with human needs in sensitive, high-stakes contexts.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently seeking PhD opportunities in HCI, Human-AI Interaction, or Digital Health to
              continue research at the intersection of design, technology, and mental health care.
            </p>
          </div>

          <div>
            <h3 className="mb-6">Education</h3>
            <div className="space-y-4">
              <div>
                <p className="mb-1">MSc Generative AI and Humanities</p>
                <p className="text-sm text-muted-foreground mb-1">
                  The Hong Kong Polytechnic University
                </p>
                <p className="text-sm text-muted-foreground">
                  GPA: 3.43 / 4.3 | Capstone Grade: A+
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="mb-6">Skills & Expertise</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-lg bg-card border border-border"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              alert('CV download would be implemented here with actual file');
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 transition-all hover:bg-foreground hover:text-background"
            style={{ borderColor: 'var(--warm-accent)' }}
          >
            Download CV
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10M11.3333 5.33333L8 2M8 2L4.66667 5.33333M8 2V10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
