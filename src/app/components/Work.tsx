export function Work() {
  return (
    <section id="work" className="py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="mb-4" style={{ fontSize: '2.5rem' }}>
          Selected Work
        </h2>
        <p className="text-muted-foreground mb-16 max-w-2xl">
          Research-driven design projects exploring the intersection of technology,
          mental health, and human-computer interaction.
        </p>

        <a
          href="#case-study"
          className="block group cursor-pointer"
        >
          <div className="bg-card rounded-xl overflow-hidden border border-border hover:border-[var(--warm-accent)] transition-all duration-300">
            <div className="aspect-[16/9] bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxtZW50YWwlMjBoZWFsdGglMjBtaW5kZnVsbmVzcyUyMG1lZGl0YXRpb24lMjBjYWxtJTIwcGVyc29ufGVufDF8fHx8MTc3OTUxMTg3NHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Bauhinia-Mind project visual"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="text-xs px-3 py-1 rounded-full"
                  style={{ backgroundColor: 'var(--warm-accent-light)', color: 'var(--warm-accent)' }}
                >
                  Featured Project
                </span>
                <span className="text-xs text-muted-foreground">2024–2025</span>
              </div>
              <h3 className="mb-3" style={{ fontSize: '1.75rem' }}>
                Bauhinia-Mind
              </h3>
              <p className="text-muted-foreground mb-4">
                A digital mental health platform leveraging AI-driven personalization to deliver
                evidence-based psychological interventions for university students in Hong Kong.
              </p>
              <div className="flex flex-wrap gap-2">
                {['UX Research', 'Service Design', 'AI/ML', 'Digital Health'].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
