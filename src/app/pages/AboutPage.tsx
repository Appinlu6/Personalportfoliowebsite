import { motion } from 'framer-motion';

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

const skillStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.06,
    },
  },
};

export function AboutPage() {
  return (
    <section className="py-32 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <motion.h1
          className="mb-20 font-semibold font-['Work_Sans']"
          style={{ fontSize: '3.5rem' }}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.42, ease: 'easeOut' }}
        >
          Resume
        </motion.h1>

        {/* Work Experience */}
        <motion.div
          className="flex gap-16 mb-20 pb-20 border-b border-border"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={stagger}
        >
          <motion.div className="w-48 flex-shrink-0" variants={fadeUp} transition={{ duration: 0.42, ease: 'easeOut' }}>
            <h2 className="font-semibold font-['Work_Sans']" style={{ fontSize: '28px' }}>Work Experience</h2>
          </motion.div>
          <div className="flex-1 space-y-10">
            <motion.div
              className="grid grid-cols-[10rem_1fr] gap-x-10"
              variants={fadeUp}
              transition={{ duration: 0.42, ease: 'easeOut' }}
            >
              <span className="text-base text-muted-foreground block text-right pt-0.5" style={{ fontFamily: "'Avenir', 'Nunito', sans-serif", fontWeight: 300 }}>2022 – 2023</span>
              <div>
                <p style={{ fontSize: '1.1rem', fontFamily: "'Work Sans', sans-serif", fontWeight: 600 }} className="mb-0.5">ByteDance (Lark / Feishu)</p>
                <p className="text-base text-muted-foreground italic mb-2">Creative Designer, Global Marketing</p>
                <div className="space-y-2" style={{ fontFamily: "'Avenir', 'Nunito', sans-serif", fontWeight: 300 }}>
                  <p className="text-base text-muted-foreground leading-relaxed">· Designed global marketing campaigns and creative assets for Lark's international launch across multiple regions.</p>
                  <p className="text-base text-muted-foreground leading-relaxed">· Improved campaign and website design to lift user acquisition and conversion.</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="grid grid-cols-[10rem_1fr] gap-x-10"
              variants={fadeUp}
              transition={{ duration: 0.42, ease: 'easeOut' }}
            >
              <span className="text-base text-muted-foreground block text-right pt-0.5" style={{ fontFamily: "'Avenir', 'Nunito', sans-serif", fontWeight: 300 }}>2018 – 2021</span>
              <div>
                <p style={{ fontSize: '1.1rem', fontFamily: "'Work Sans', sans-serif", fontWeight: 600 }} className="mb-0.5">Tencent (Healthcare Department)</p>
                <p className="text-base text-muted-foreground italic mb-3">Senior Product Designer</p>
                <div className="space-y-2" style={{ fontFamily: "'Avenir', 'Nunito', sans-serif", fontWeight: 300 }}>
                  <p className="text-base text-muted-foreground leading-relaxed">· Led UX/UI for healthcare SaaS products — smart hospitals, medical insurance, and public-health platforms.</p>
                  <p className="text-base text-muted-foreground leading-relaxed">· Designed AI- and big-data-driven data visualization systems supporting medical decision-making.</p>
                  <p className="text-base text-muted-foreground leading-relaxed">· Spearheaded "Tencent Micision," delivering 40+ projects across hospitals and government institutions.</p>
                  <p className="text-base text-muted-foreground leading-relaxed">· Recognized with 5 company awards, including a Medical Anti-Epidemic Contribution Award.</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="grid grid-cols-[10rem_1fr] gap-x-10"
              variants={fadeUp}
              transition={{ duration: 0.42, ease: 'easeOut' }}
            >
              <span className="text-base text-muted-foreground block text-right pt-0.5" style={{ fontFamily: "'Avenir', 'Nunito', sans-serif", fontWeight: 300 }}>Feb – Jul 2017</span>
              <div>
                <p style={{ fontSize: '1.1rem', fontFamily: "'Work Sans', sans-serif", fontWeight: 600 }} className="mb-0.5">Tencent (Healthcare Department)</p>
                <p className="text-base text-muted-foreground italic mb-2">Visual Design Intern</p>
                <div className="space-y-2" style={{ fontFamily: "'Avenir', 'Nunito', sans-serif", fontWeight: 300 }}>
                  <p className="text-base text-muted-foreground leading-relaxed">· Designed UI and visual systems for healthcare hardware products, including a glucose-monitoring app and the SpineCare adolescent spine-care device.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          className="flex gap-16 mb-20 pb-20 border-b border-border"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={stagger}
        >
          <motion.div className="w-48 flex-shrink-0" variants={fadeUp} transition={{ duration: 0.42, ease: 'easeOut' }}>
            <h2 className="font-semibold font-['Work_Sans']" style={{ fontSize: '28px' }}>Education</h2>
          </motion.div>
          <div className="flex-1 space-y-10">
            <motion.div
              className="grid grid-cols-[10rem_1fr] gap-x-10"
              variants={fadeUp}
              transition={{ duration: 0.42, ease: 'easeOut' }}
            >
              <span className="text-base text-muted-foreground block text-right pt-0.5" style={{ fontFamily: "'Avenir', 'Nunito', sans-serif", fontWeight: 300 }}>2025 – 2026</span>
              <div>
                <p style={{ fontSize: '1.1rem', fontFamily: "'Work Sans', sans-serif", fontWeight: 600 }} className="mb-1">The Hong Kong Polytechnic University</p>
                <p className="text-base text-muted-foreground mb-2">MSc in Generative AI & Humanities</p>
                <p className="text-base text-muted-foreground">Capstone: Bauhinia-Mind (Grade A+)</p>
              </div>
            </motion.div>
            <motion.div
              className="grid grid-cols-[10rem_1fr] gap-x-10"
              variants={fadeUp}
              transition={{ duration: 0.42, ease: 'easeOut' }}
            >
              <span className="text-base text-muted-foreground block text-right pt-0.5" style={{ fontFamily: "'Avenir', 'Nunito', sans-serif", fontWeight: 300 }}>2013 – 2017</span>
              <div>
                <p style={{ fontSize: '1.1rem', fontFamily: "'Work Sans', sans-serif", fontWeight: 600 }} className="mb-1">Communication University of Zhejiang</p>
                <p className="text-base text-muted-foreground mb-2">BA in Visual Communication Design</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          className="flex gap-16 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={stagger}
        >
          <motion.div className="w-48 flex-shrink-0" variants={fadeUp} transition={{ duration: 0.42, ease: 'easeOut' }}>
            <h2 className="font-semibold font-['Work_Sans']" style={{ fontSize: '28px' }}>Skills & Expertise</h2>
          </motion.div>
          <div className="flex-1">
            <motion.div
              className="grid grid-cols-2 gap-3 ml-[12.5rem]"
              variants={skillStagger}
            >
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 rounded-lg bg-card border border-border text-base"
                  variants={fadeUp}
                  transition={{ duration: 0.32, ease: 'easeOut' }}
                  whileHover={{ y: -4 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
