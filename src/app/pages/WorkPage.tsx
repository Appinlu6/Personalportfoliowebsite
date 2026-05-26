import { Link } from 'react-router';
import { motion } from 'framer-motion';

const projects = [
  {
    slug: 'bauhinia-mind',
    title: 'Bauhinia-Mind',
    year: '2024–2025',
    description:
      'A digital mental health platform leveraging AI-driven personalization to deliver evidence-based psychological interventions for university students in Hong Kong.',
    tags: ['UX Research', 'Service Design', 'AI/ML', 'Digital Health'],
    featured: true,
    image:
      'https://images.unsplash.com/photo-1526779259212-939e64788e3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxtZW50YWwlMjBoZWFsdGglMjBtaW5kZnVsbmVzcyUyMG1lZGl0YXRpb24lMjBjYWxtJTIwcGVyc29ufGVufDF8fHx8MTc3OTUxMTg3NHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    slug: 'edu-access',
    title: 'EduAccess',
    year: '2023–2024',
    description:
      'Redesigning a university e-learning platform to meet WCAG 2.1 AA standards, with a focus on cognitive accessibility for students with learning differences.',
    tags: ['Accessibility', 'UX Audit', 'Inclusive Design'],
    featured: false,
    image:
      'https://images.unsplash.com/photo-1620067285935-ead87c731296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2Nlc3NpYmlsaXR5JTIwZGlnaXRhbCUyMGxlYXJuaW5nJTIwVVglMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzc5NTEyOTA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    slug: 'wayfinder-hk',
    title: 'Wayfinder HK',
    year: '2023',
    description:
      "A contextual wayfinding system for low-vision users navigating Hong Kong's MTR network, combining haptic feedback, audio cues, and simplified visual hierarchy.",
    tags: ['HCI Research', 'Assistive Tech', 'Prototyping'],
    featured: false,
    image:
      'https://images.unsplash.com/photo-1602479185169-21606c8ce362?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMG5hdmlnYXRpb24lMjB3YXlmaW5kaW5nJTIwY2l0eSUyMEhvbmclMjBLb25nfGVufDF8fHx8MTc3OTUxMjkwNXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    slug: 'care-connect',
    title: 'CareConnect',
    year: '2022–2023',
    description:
      'A service design project mapping and redesigning the support journey for informal caregivers in Hong Kong, surfacing systemic gaps through participatory co-design workshops.',
    tags: ['Service Design', 'Co-design', 'Journey Mapping'],
    featured: false,
    image:
      'https://images.unsplash.com/photo-1760992003987-efc5259bcfbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZ2l2ZXIlMjBzdXBwb3J0JTIwY29tbXVuaXR5JTIwc2VydmljZSUyMGRlc2lnbiUyMHBlb3BsZXxlbnwxfHx8fDE3Nzk1MTI5MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

const cardStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

const cardFadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export function WorkPage() {
  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);

  return (
    <section className="py-32 bg-muted/30 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <h1 className="mb-4 font-semibold font-['Work_Sans']" style={{ fontSize: '3.5rem' }}>
          Selected Work
        </h1>
        <p className="text-muted-foreground mb-16 max-w-2xl">Product and interaction design across healthcare, AI, and consumer tech.</p>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={cardStagger}
        >
          {projects.map((project) => (
            <motion.div
              key={project.slug}
              variants={cardFadeUp}
              transition={{ duration: 0.42, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
            >
              <Link to={`/work/${project.slug}`} className="block group cursor-pointer h-full">
                <div className="bg-card rounded-xl overflow-hidden border border-border hover:border-[var(--warm-accent)] transition-all duration-300 h-full flex flex-col hover:shadow-[0_18px_45px_rgba(210,116,92,0.16)]">
                  <div className="aspect-[16/9] bg-muted overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} project visual`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      {project.featured && (
                        <span
                          className="text-xs px-3 py-1 rounded-full"
                          style={{ backgroundColor: '#F5E6DC', color: 'var(--warm-accent)' }}
                        >
                          Latest
                        </span>
                      )}
                      <span className="text-xs text-muted-foreground">{project.year}</span>
                    </div>
                    <h3 className="mb-2" style={{ fontSize: '1.25rem' }}>
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
