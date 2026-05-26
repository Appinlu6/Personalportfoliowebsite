import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

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

export function ContactPage() {
  return (
    <section className="py-32 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.h1
            className="mb-4 font-semibold font-['Work_Sans']"
            style={{ fontSize: '3.5rem' }}
            variants={fadeUp}
            transition={{ duration: 0.42, ease: 'easeOut' }}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            className="text-muted-foreground mb-12 max-w-2xl"
            variants={fadeUp}
            transition={{ duration: 0.42, ease: 'easeOut' }}
          >
            Interested in collaboration, research opportunities, or just want to connect?
            Feel free to reach out.
          </motion.p>

          <motion.div className="space-y-6" variants={stagger}>
            <motion.a
              href="mailto:appinlu@gmail.com"
              className="flex items-center gap-4 p-6 rounded-xl bg-card border border-border hover:border-[var(--warm-accent)] transition-all group hover:shadow-[0_18px_45px_rgba(210,116,92,0.16)]"
              variants={fadeUp}
              transition={{ duration: 0.42, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
            >
              <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--warm-accent-light)' }}>
                <Mail className="w-6 h-6" style={{ color: 'var(--warm-accent)' }} />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <p>appinlu@gmail.com</p>
              </div>
              <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>

            <motion.div className="grid md:grid-cols-2 gap-6" variants={stagger}>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 rounded-xl bg-card border border-border hover:border-[var(--warm-accent)] transition-all group hover:shadow-[0_18px_45px_rgba(210,116,92,0.16)]"
                variants={fadeUp}
                transition={{ duration: 0.42, ease: 'easeOut' }}
                whileHover={{ y: -6 }}
              >
                <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--warm-accent-light)' }}>
                  <Linkedin className="w-6 h-6" style={{ color: 'var(--warm-accent)' }} />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
                  <p>Connect</p>
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>

              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 rounded-xl bg-card border border-border hover:border-[var(--warm-accent)] transition-all group hover:shadow-[0_18px_45px_rgba(210,116,92,0.16)]"
                variants={fadeUp}
                transition={{ duration: 0.42, ease: 'easeOut' }}
                whileHover={{ y: -6 }}
              >
                <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--warm-accent-light)' }}>
                  <Github className="w-6 h-6" style={{ color: 'var(--warm-accent)' }} />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">GitHub</p>
                  <p>View Projects</p>
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
