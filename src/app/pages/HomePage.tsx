import image_20260523_1315046 from '@/imports/20260523-1315046.png';
import { motion } from 'framer-motion';
import { PageContainer } from '../components/PageContainer';
import { ProjectGrid } from '../components/ProjectGrid';

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

export function HomePage() {
  return (
    <section className="page-shell pt-24 pb-8">
      <PageContainer className="pt-4 pb-10">
        <motion.div
          className="flex items-center gap-12 mb-12"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div
            className="flex-shrink-0"
            variants={fadeUp}
            transition={{ duration: 0.42, ease: 'easeOut' }}
          >
            <img
              src={image_20260523_1315046}
              alt="Lu Zhengping (Arvin)"
              className="w-[19rem] h-[19rem] rounded-2xl object-cover object-top"
            />
          </motion.div>
          <div className="flex-1 min-w-0">
            <motion.h1
              className="mb-6 font-bold font-[Work_Sans]"
              style={{ fontSize: '32px', lineHeight: '1.05', marginLeft: '-2px' }}
              variants={fadeUp}
              transition={{ duration: 0.42, ease: 'easeOut' }}
            >
              Lu Zhengping (Arvin)
            </motion.h1>
            <motion.div
              className="text-base text-muted-foreground space-y-4"
              style={{ lineHeight: '1.7' }}
              variants={fadeUp}
              transition={{ duration: 0.42, ease: 'easeOut' }}
            >
              <p className="text-[15px]">
                A UX / HCI designer and researcher working at the intersection of AI, design, and human well-being.
              </p>
              <p className="font-[Avenir] text-[15px]">
                After 6 years designing UX at Tencent and ByteDance, I'm now an MSc candidate in Generative AI and
                Humanities at PolyU, building human-centered AI systems for mental health care.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="mb-8 border-b border-border pb-3"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.42, ease: 'easeOut' }}
        >
          <h2 className="font-semibold font-['Work_Sans'] text-left" style={{ fontSize: '27px' }}>
            Projects
          </h2>
        </motion.div>

        <ProjectGrid columns={3} />
      </PageContainer>
    </section>
  );
}
