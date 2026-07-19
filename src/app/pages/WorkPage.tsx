import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { PageContainer } from '../components/PageContainer';
import { ProjectGrid } from '../components/ProjectGrid';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export function WorkPage() {
  const { isCN } = useLanguage();

  return (
    <section className="page-shell bg-muted/30 pt-24 pb-16 md:py-32">
      <PageContainer className="pt-2 md:pt-8">
        <motion.h1
          className="mb-3 font-semibold font-['Work_Sans'] md:mb-4"
          style={{ fontSize: '32px' }}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.42, ease: 'easeOut' }}
        >
          {isCN ? '精选项目' : 'Selected Work'}
        </motion.h1>
        <motion.p
          className="text-muted-foreground mb-6 max-w-2xl md:mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.42, ease: 'easeOut' }}
        >
          {isCN
            ? '聚焦医疗、AI 与消费科技方向的产品与交互设计实践。'
            : 'Product and interaction design across healthcare, AI, and consumer tech.'}
        </motion.p>

        <ProjectGrid columns={3} />
      </PageContainer>
    </section>
  );
}
