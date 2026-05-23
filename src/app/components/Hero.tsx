export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-muted-foreground mb-4">UX / HCI Designer & Researcher</p>
          <h1 className="mb-6" style={{ fontSize: '4rem', lineHeight: '1.1' }}>
            Lu Zhengping <span className="text-muted-foreground">(Arvin)</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl" style={{ lineHeight: '1.6' }}>
            Designing human-centered systems that bridge technology and mental health care,
            with a focus on evidence-based interventions and accessible digital therapeutics.
          </p>
          <a
            href="#case-study"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-colors"
            style={{ backgroundColor: 'var(--warm-accent)', color: 'white' }}
          >
            View Featured Project
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 8H13M13 8L8 3M13 8L8 13"
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
