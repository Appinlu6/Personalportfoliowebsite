import { Link } from 'react-router';
import { motion } from 'framer-motion';

const projects = [
  {
    slug: 'bauhinia-mind',
    title: 'Bauhinia-Mind',
    year: '2026 Jan – Apr',
    description:
      'An Empathic, Memory-Enabled AI Health Companion for Mainland Chinese Students in Hong Kong',
    tags: ['UX Research', 'Service Design', 'AI/ML', 'Digital Health'],
    featured: true,
    image:
      'https://images.unsplash.com/photo-1526779259212-939e64788e3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxtZW50YWwlMjBoZWFsdGglMjBtaW5kZnVsbmVzcyUyMG1lZGl0YXRpb24lMjBjYWxtJTIwcGVyc29ufGVufDF8fHx8MTc3OTUxMTg3NHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    slug: 'tencent-micision-smart-hospital',
    title: 'Tencent Micision — Smart Hospital',
    year: '2018 – 2021',
    description:
      'Led the 0-to-1 design of a medical big data visualization platform, piloted at a Shenzhen hospital, empowering administrators with data-driven insights to optimize hospital operations and management.',
    tags: ['0-1 Product Design', 'Data Visualization', 'Healthcare UX', 'Design Leadership'],
    featured: false,
    image: '/smart-hospital.png',
  },
  {
    slug: 'tencent-medical-cloud-o2o',
    title: 'Healthcare Service Design',
    year: '2017 – 2018',
    description:
      'Spearheaded an O2O service design solution for Tencent Medical Cloud to optimize the patient experience. By mapping complex medical journeys and integrating digital-physical touchpoints, the project successfully reduced average patient wait times by 4.5 hours.',
    tags: ['Patient Experience', 'O2O Service Design', 'Journey Mapping', 'Field Research'],
    featured: false,
    image: '/healthcare-service-design.png',
  },
  {
    slug: 'tencent-micision-smart-marathon',
    title: 'Tencent Micision — Smart Marathon',
    year: '2019 Jan – Apr',
    description:
      "Spearheaded the 0-to-1 product management and design of Tencent's Smart Marathon Big Data Platform. Leveraging Unreal Engine for 3D city mapping and real-time biometric tracking, the system empowered cross-department command centers with instant emergency dispatch capabilities, successfully safeguarding the Yangzhou Marathon.",
    tags: ['0-to-1 Product Management', 'Complex Data Visualization', '3D Technical Design (UE)', 'Requirement Translation'],
    featured: false,
    image: '/smart-Marathon.png',
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
