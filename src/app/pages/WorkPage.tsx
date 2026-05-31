import { motion } from 'framer-motion';
import { PageContainer } from '../components/PageContainer';
import { ProjectGrid } from '../components/ProjectGrid';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export function WorkPage() {
  return (
    <section className="page-shell py-32 bg-muted/30">
      <PageContainer className="pt-8">
        <motion.h1
          className="mb-4 font-semibold font-['Work_Sans']"
          style={{ fontSize: '32px' }}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.42, ease: 'easeOut' }}
        >
          Selected Work
        </motion.h1>
        <motion.p
          className="text-muted-foreground mb-12 max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.42, ease: 'easeOut' }}
        >
          Product and interaction design across healthcare, AI, and consumer tech.
        </motion.p>

        <ProjectGrid columns={3} />
      </PageContainer>
    </section>
  );
}
