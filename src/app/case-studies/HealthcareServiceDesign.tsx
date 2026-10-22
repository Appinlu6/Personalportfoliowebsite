import { type CSSProperties, type ReactNode } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { LocalizedContent } from '../i18n/LocalizedContent';
import { healthcareServiceTranslations } from '../i18n/caseStudyTranslations';
import { CaseStudyThread, MainLineTag } from '../components/CaseStudyThread';

const SLUG = 'tencent-medical-cloud-o2o';
const NEWS_URL =
  'https://www.cn-healthcare.com/article/20180708/content-505457.html?appfrom=jkj&from=timeline&isappinstalled=0';

const PRESS_SOURCE =
  'CN-Healthcare, 8 July 2018: "Fudan University Shanghai Cancer Center: a precise patient service platform built on the electronic visit card."';

const story = [
  'In August 2017 I joined Tencent Healthcare and worked on my first project with a hospital, improving how patients get through a visit.',
  'We built the hospital an online platform for registration, payment, and reports. It went after the "three longs and one short": long waits to register, to pay, and for reports, and a short time with the doctor.',
  'Offline, we walked the hospital and followed patients. We looked for the points where people got confused or lost at each step, and mapped their journey. At the triage desk, the lifts, the payment windows, and the stairs, we put roll-up banners, floor decals, and acrylic boards, so a person could see where to go next.',
  'I went with the team to Fudan University Shanghai Cancer Center.',
  'While I was designing the payment step, I borrowed a scanner from the hospital. I set it at the distance of a real payment window and kept changing the size of the QR code, until staff could scan it from a comfortable distance on the first try. It was a small piece of a large service.',
  'After the materials were produced, we stayed on site for two weeks. We walked the route a patient takes from the entrance and kept moving the materials until every point on the visit map had clear guidance.',
  'It was tiring, but the project planted a seed in me. It was human-centered design in the real sense.',
];

const launchVideos = [
  {
    src: '/videos/healthcare-before-2017-08-24.mp4',
    poster: '/videos/healthcare-before-2017-08-24.jpg',
    label: 'Before launch · 24 August 2017',
  },
  {
    src: '/videos/healthcare-after-2017-10-19.mp4',
    poster: '/videos/healthcare-after-2017-10-19.jpg',
    label: 'Three days after launch · 19 October 2017',
  },
];

const senses = [
  {
    mark: '望',
    title: 'Look',
    copy: 'In the hospital, I watched how patients moved through the visit and where they got stuck.',
  },
  {
    mark: '闻',
    title: 'Listen',
    copy: 'I sat in on patients and doctors talking their way through the visit.',
  },
  {
    mark: '问',
    title: 'Ask',
    copy: 'I asked patients and the clinical staff how the visit felt.',
  },
  {
    mark: '切',
    title: 'Walk',
    copy: 'I went through the whole visit myself.',
  },
];

const layers = [
  {
    mark: '点',
    title: 'Points',
    copy: 'Registration, payment, and reports in the account, with illustrations for the moments in between: a patient waiting, a busy doctor, no result yet, and registration done.',
  },
  {
    mark: '线',
    title: 'The line',
    copy: 'Check-in while waiting and collecting medicine at the window carry the patient from the phone to the counter. I tested the QR code and barcode on a payment-window scanner until I found the best size.',
  },
  {
    mark: '面',
    title: 'The place',
    copy: 'Posters by the lifts, roll-up banners in the corridors, a large process poster in the waiting area, stickers at the windows, and decals on the floor, so a patient could see where to go at each point.',
  },
];

const floorGroups = [
  {
    caption: 'Outside the outpatient entrance. The screen asked people to open WeChat and follow the account.',
    photos: [
      {
        src: '/healthcare-service/floor-screen.webp',
        alt: 'The outpatient building with a screen showing a WeChat follow step and a QR code',
      },
      {
        src: '/healthcare-service/floor-screen-close.webp',
        alt: 'Close view of the outdoor screen: open WeChat, scan, and follow the account',
      },
    ],
  },
  {
    caption: 'In the lobby, banners showed how to book, where to enter, and how to pay on WeChat or Alipay without queuing.',
    photos: [
      {
        src: '/healthcare-service/floor-banners.webp',
        alt: 'Four roll-up banners for booking, the entrance, WeChat payment, and Alipay payment',
      },
    ],
  },
  {
    caption: 'In the hall, a column poster for scanning to pay, and a medical guide at the desk.',
    photos: [
      {
        src: '/healthcare-service/floor-pillar.webp',
        alt: 'A blue poster on a column in the hall: scan WeChat to pay and skip the queue',
      },
      {
        src: '/healthcare-service/floor-guide-desk.webp',
        alt: 'A medical guide standing at the guide desk beside the account banner',
      },
    ],
  },
  {
    caption: 'The WeChat payment banner listed the steps, and people stopped to follow them. Account cards were stacked at the counter.',
    photos: [
      {
        src: '/healthcare-service/floor-payment-hall.webp',
        alt: 'A crowded corridor with the visit-flow sign and the WeChat payment banner',
      },
      {
        src: '/healthcare-service/floor-payment-steps.webp',
        alt: 'The WeChat payment banner listing the steps to get an electronic visit card and pay',
      },
      {
        src: '/healthcare-service/floor-cards.webp',
        alt: 'A stack of account cards on the counter, with someone holding a handful of them',
      },
    ],
  },
];

function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.56, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-balance text-[clamp(2.1rem,4.4vw,4.7rem)] font-medium leading-[0.98] tracking-[-0.045em] text-[var(--hsd-text)]">
      {children}
    </h2>
  );
}

function PhotoGroup({
  photos,
  caption,
}: {
  photos: { src: string; alt: string }[];
  caption: string;
}) {
  const columns = photos.length === 3 ? 'sm:grid-cols-3' : photos.length === 2 ? 'sm:grid-cols-2' : '';

  return (
    <figure>
      <div className={`grid gap-4 ${columns}`}>
        {photos.map((shot) => (
          <div key={shot.src} className="overflow-hidden rounded-2xl border border-[var(--hsd-line)] bg-[var(--hsd-surface)]">
            <img src={shot.src} alt={shot.alt} loading="lazy" decoding="async" className="block h-auto w-full" />
          </div>
        ))}
      </div>
      <figcaption className="mt-3 text-sm leading-6 text-[var(--hsd-muted)]">{caption}</figcaption>
    </figure>
  );
}

function Board({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="mt-8">
      <div className="overflow-hidden rounded-2xl border border-[var(--hsd-line)] bg-[var(--hsd-surface)]">
        <img src={src} alt={alt} loading="lazy" decoding="async" className="block h-auto w-full" />
      </div>
      <figcaption className="mt-3 text-sm leading-6 text-[var(--hsd-muted)]">{caption}</figcaption>
    </figure>
  );
}

export function HealthcareServiceDesign() {
  return (
    <LocalizedContent translations={healthcareServiceTranslations}>
      <article
        className="relative min-h-[100dvh] overflow-hidden bg-[var(--hsd-bg)] text-[var(--hsd-text)]"
        style={
          {
            '--hsd-bg': '#f4f6fb',
            '--hsd-surface': '#fcfdff',
            '--hsd-text': '#30394f',
            '--hsd-muted': '#667187',
            '--hsd-accent': '#6b78a0',
            '--hsd-accent-soft': '#dfe3ef',
            '--hsd-line': '#d1d8e6',
            '--project-accent': '#6b78a0',
            '--project-muted': '#667187',
            '--project-nav-surface': 'rgba(248, 249, 253, 0.92)',
          } as CSSProperties
        }
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_78%_9%,rgba(107,120,160,0.15),transparent_27rem)]" />

        <div className="relative mx-auto w-full max-w-[1320px] px-5 pb-24 pt-10 sm:px-8 md:pb-32 md:pt-14 lg:px-12">
          <Link
            to="/work"
            className="mb-10 inline-flex items-center gap-2 rounded-full border border-[var(--hsd-line)] bg-white/60 px-4 py-2 text-sm text-[var(--hsd-muted)] transition-colors hover:border-[var(--hsd-accent)] hover:text-[var(--hsd-text)] active:translate-y-px"
          >
            <ArrowLeft size={16} strokeWidth={1.7} />
            All projects
          </Link>

          <header className="pb-10 md:pb-12">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.66, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium tracking-[0.04em] text-[var(--hsd-accent)]">
                <MainLineTag slug={SLUG} />
                <span aria-hidden="true">·</span>
                <span>Tencent Healthcare</span>
              </p>
              <h1 className="text-[clamp(3.3rem,6.5vw,6.1rem)] font-semibold leading-[0.92] tracking-[-0.058em] text-[var(--hsd-text)]">
                Healthcare Service Design
              </h1>
            </motion.div>
          </header>

          <div className="max-w-[52rem] space-y-4 text-pretty text-lg leading-8 text-[var(--hsd-muted)]">
            {story.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <section className="pt-16 md:pt-24">
            <Reveal>
              <SectionHeading>User research and interviews</SectionHeading>
            </Reveal>
            <Board
              src="/healthcare-service/look-listen-ask-walk-light.webp"
              alt="Four fieldwork panels marked 望, 闻, 问, and 切 over slides of the outpatient visit, the pathology consultation, patient interviews, and the visit I went through"
              caption="The 2017 fieldwork board, recolored for this page. The prescription in the last panel is blurred."
            />
            <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {senses.map((item, index) => (
                <li key={item.mark} className="rounded-2xl border border-[var(--hsd-line)] bg-[var(--hsd-surface)] p-6">
                  <p className="text-sm font-medium text-[var(--hsd-accent)]">
                    {index + 1} · {item.mark} {item.title}
                  </p>
                  <p className="mt-3 text-pretty text-base leading-7 text-[var(--hsd-muted)]">{item.copy}</p>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-pretty text-base leading-8 text-[var(--hsd-muted)]">
              We interviewed patients, nurses, doctors, and other hospital staff, and turned what we heard into an experience map of the real pain points. We designed the online registration flow and the in-hospital materials from that map.
            </p>
          </section>

          <section className="pt-16 md:pt-24">
            <Reveal>
              <SectionHeading>Design method and direction</SectionHeading>
            </Reveal>
            <Board
              src="/healthcare-service/points-line-place-light.webp"
              alt="The service design board: account screens for registration, payment, and reports with four illustrations; check-in and pharmacy collection codes; and the posters, banners, stickers, and floor decals placed around the hospital"
              caption="The 2017 design board, recolored for this page. Names on the mock screens are blurred."
            />
            <p className="mt-8 text-pretty text-base leading-8 text-[var(--hsd-muted)]">
              We split a full visit, in time and in space, into points. The line is the design that connects one point to the next. The place is the real hospital, where those points and lines have to work for a patient walking through.
            </p>
            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {layers.map((item) => (
                <div key={item.mark} className="rounded-2xl border border-[var(--hsd-line)] bg-[var(--hsd-surface)] p-6 md:p-7">
                  <p className="text-sm font-medium text-[var(--hsd-accent)]">
                    {item.mark} {item.title}
                  </p>
                  <p className="mt-3 text-pretty text-base leading-7 text-[var(--hsd-muted)]">{item.copy}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="pt-16 md:pt-24">
            <Reveal>
              <SectionHeading>After it went live</SectionHeading>
            </Reveal>
            <div className="mt-8 grid max-w-[40rem] grid-cols-2 gap-4">
              {launchVideos.map((video) => (
                <figure key={video.src}>
                  <div className="overflow-hidden rounded-2xl border border-[var(--hsd-line)] bg-[var(--hsd-surface)]">
                    <video
                      src={video.src}
                      poster={video.poster}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      aria-label={video.label}
                      className="block aspect-[544/960] h-auto w-full object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 text-sm leading-6 text-[var(--hsd-muted)]">{video.label}</figcaption>
                </figure>
              ))}
            </div>
            <div className="mt-8 space-y-6 text-pretty text-base leading-8 text-[var(--hsd-muted)]">
              <p>
                The account and the materials went live on 16 October 2017. We worked with the medical guides in the halls, helping patients find their next step, and followed up a week later.
              </p>
              <p>
                Patients were spending 4.5 fewer hours in the hospital on average, and doctors 3 fewer hours collecting materials. Doctors and patients thanked us in person.
              </p>
            </div>
            <div className="mt-8 space-y-8">
              {floorGroups.map((group) => (
                <PhotoGroup key={group.caption} photos={group.photos} caption={group.caption} />
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-[var(--hsd-line)] bg-[var(--hsd-surface)] p-7 md:p-9">
              <p className="text-sm font-medium text-[var(--hsd-accent)]">In the press · July 2018</p>
              <p className="mt-4 text-pretty text-base leading-7 text-[var(--hsd-text)]">{PRESS_SOURCE}</p>
              <a
                href={NEWS_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--hsd-accent)] transition-opacity hover:opacity-70"
              >
                Read the article (Chinese)
                <ArrowUpRight size={15} strokeWidth={1.7} />
              </a>
            </div>
          </section>

          <CaseStudyThread slug={SLUG} />
        </div>
      </article>
    </LocalizedContent>
  );
}
