import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';

export function ContactPage() {
  return (
    <section className="py-32 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <h1 className="mb-4 font-semibold font-['Work_Sans']" style={{ fontSize: '3.5rem' }}>
          Get in Touch
        </h1>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Interested in collaboration, research opportunities, or just want to connect?
          Feel free to reach out.
        </p>

        <div className="space-y-6">
          <a
            href="mailto:appinlu@gmail.com"
            className="flex items-center gap-4 p-6 rounded-xl bg-card border border-border hover:border-[var(--warm-accent)] transition-all group"
          >
            <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--warm-accent-light)' }}>
              <Mail className="w-6 h-6" style={{ color: 'var(--warm-accent)' }} />
            </div>
            <div className="flex-1">
              <p className="text-sm text-muted-foreground mb-1">Email</p>
              <p>appinlu@gmail.com</p>
            </div>
            <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 rounded-xl bg-card border border-border hover:border-[var(--warm-accent)] transition-all group"
            >
              <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--warm-accent-light)' }}>
                <Linkedin className="w-6 h-6" style={{ color: 'var(--warm-accent)' }} />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
                <p>Connect</p>
              </div>
              <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 rounded-xl bg-card border border-border hover:border-[var(--warm-accent)] transition-all group"
            >
              <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--warm-accent-light)' }}>
                <Github className="w-6 h-6" style={{ color: 'var(--warm-accent)' }} />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">GitHub</p>
                <p>View Projects</p>
              </div>
              <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
