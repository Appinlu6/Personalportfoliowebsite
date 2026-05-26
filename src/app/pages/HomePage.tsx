import image_20260523_1315046 from '@/imports/20260523-1315046.png'
import image_20260523_1315046_1 from '@/imports/20260523-1315046-1.png'
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import photo from '../../imports/20260523-1315043.png';

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

const ctaStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

export function HomePage() {
  return (
    <section className="pt-28 pb-8">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <motion.div
          className="flex items-center gap-20"
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
              style={{ fontSize: '108px', lineHeight: '1.05', marginLeft: '-5px' }}
              variants={fadeUp}
              transition={{ duration: 0.42, ease: 'easeOut' }}
            >
              Hello
            </motion.h1>
            <motion.div
              className="text-base text-muted-foreground mb-6 space-y-4"
              style={{ lineHeight: '1.7' }}
              variants={fadeUp}
              transition={{ duration: 0.42, ease: 'easeOut' }}
            >
              <p className="text-[15px]"> I'm LU Zhengping (Arvin) — a UX / HCI designer and researcher working at the intersection of AI, design, and human well-being.</p>
              <p className="font-[Avenir] text-[15px]">
                After 6 years designing UX at Tencent and ByteDance, I'm now an MSc candidate in Generative AI and Humanities at PolyU, building human-centered AI systems for mental health care.
              </p>
            </motion.div>
            <motion.div
              className="flex items-center gap-4"
              variants={ctaStagger}
            >
              <motion.div variants={fadeUp} transition={{ duration: 0.42, ease: 'easeOut' }} whileHover={{ y: -6 }}>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-9 py-5 rounded-xl transition-all duration-200 font-semibold tracking-wide hover:opacity-90 font-['Work_Sans'] hover:shadow-[0_18px_45px_rgba(210,116,92,0.25)]"
                  style={{ backgroundColor: 'var(--warm-accent)', color: 'white' }}
                >
                  Resume
                </Link>
              </motion.div>
              <motion.div variants={fadeUp} transition={{ duration: 0.42, ease: 'easeOut' }} whileHover={{ y: -6 }}>
                <Link
                  to="/work"
                  className="inline-flex items-center justify-center px-9 py-5 rounded-xl transition-all duration-200 font-semibold tracking-wide hover:opacity-90 font-['Work_Sans'] hover:shadow-[0_18px_45px_rgba(210,116,92,0.25)]"
                  style={{ backgroundColor: 'var(--warm-accent)', color: 'white' }}
                >
                  Projects
                </Link>
              </motion.div>
              <motion.div variants={fadeUp} transition={{ duration: 0.42, ease: 'easeOut' }} whileHover={{ y: -6 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-9 py-5 rounded-xl transition-all duration-200 font-semibold tracking-wide hover:opacity-90 font-['Work_Sans'] hover:shadow-[0_18px_45px_rgba(210,116,92,0.25)]"
                  style={{ backgroundColor: 'var(--warm-accent)', color: 'white' }}
                >
                  Contact
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
