import { type CSSProperties, type ReactNode } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { LocalizedContent } from '../i18n/LocalizedContent';
import { larkGlobalTranslations } from '../i18n/caseStudyTranslations';

const metadata = [
  { label: 'Type', value: 'Global marketing website and design operations' },
  { label: 'Duration', value: '2022-2023' },
  { label: 'Role', value: 'Creative Designer, Global Marketing' },
  { label: 'Responsibilities', value: 'Web design, visual design, and frontend build' },
  { label: 'Partners', value: 'PMM, Sales, Product, UX, and Creative Design' },
  { label: 'Scope', value: 'Customer Stories, product pages, component library, and brand assets' },
  { label: 'Tools', value: 'Framer, CMS, Lark aPaaS, and low-code workflows' },
];

const publishingNeeds = [
  {
    title: 'Regional relevance',
    copy: 'Different markets needed customer stories that reflected local industries, use cases, and buyer concerns.',
  },
  {
    title: 'Faster testing',
    copy: 'PMM teams needed to publish and adjust stories quickly as commercial strategies changed.',
  },
  {
    title: 'Sales support',
    copy: 'The website needed to help sales teams explain product value with credible customer evidence.',
  },
];

const cmsElements = [
  'Industry and region tags',
  'Story cards',
  'Hero and banner modules',
  'Article content blocks',
  'Typography rules',
  'Motion behavior',
];

const libraryCoverage = [
  {
    value: '23',
    label: 'Feishu product functions documented by 2023 Q1',
  },
  {
    value: '3',
    label: 'Languages supported across Chinese, English, and Japanese',
  },
  {
    value: '289',
    label: 'Abstract interface assets in the domestic component set',
  },
  {
    value: '102',
    label: 'Abstract interface assets in the Lark Global set',
  },
];

const assetLibraryMetrics = [
  { value: '400+', label: 'People covered at launch' },
  { value: '300', label: 'Accumulated users after eight workdays' },
  { value: '1,555', label: 'Page views on launch day' },
  { value: '4,500+', label: 'Weekly page views' },
];

const aiResearchQuestions = [
  {
    title: 'Brief understanding',
    copy: 'Can AI turn a PMM brief into a structured first draft while keeping the business goal visible?',
  },
  {
    title: 'Approved asset retrieval',
    copy: 'Can multimodal search find the right interface, campaign, and brand assets from the existing libraries?',
  },
  {
    title: 'Localization support',
    copy: 'Can AI adapt page structure and copy for a market without changing verified customer facts?',
  },
  {
    title: 'Preflight review',
    copy: 'Can AI flag brand, accessibility, terminology, and responsive issues before design handoff?',
  },
];

const aiWorkflow = ['Approved context', 'Brief and intent', 'AI-assisted draft', 'Human review', 'Publish and measure'];

const contributions = [
  {
    title: 'Marketing experience',
    items: ['Designed Customer Stories and product pages', 'Translated product benefits into web narratives'],
  },
  {
    title: 'Frontend and tooling',
    items: ['Built reusable pages in Framer', 'Created CMS modules and content rules', 'Tested low-code workflows when engineering capacity was limited'],
  },
  {
    title: 'Design operations',
    items: ['Led the interface component library', 'Built the brand asset platform with Lark aPaaS', 'Created SOPs and trained PMM and design teams'],
  },
  {
    title: 'Ongoing research',
    items: ['Mapped repeatable work for AI assistance', 'Defined source and review requirements', 'Separated research hypotheses from shipped results'],
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

function SectionHeading({ children, intro }: { children: ReactNode; intro?: string }) {
  return (
    <div className="mb-8 max-w-[49rem] md:mb-10">
      <h2 className="text-[clamp(2.1rem,4.4vw,4.7rem)] font-medium leading-[0.98] tracking-[-0.045em] text-[var(--lark-text)]">
        {children}
      </h2>
      {intro && <p className="mt-5 max-w-[62ch] text-base leading-7 text-[var(--lark-muted)]">{intro}</p>}
    </div>
  );
}

function MediaPlaceholder({
  title,
  note,
  className = '',
}: {
  title: string;
  note: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`${title}. ${note}`}
      className={`flex min-h-0 items-center justify-center overflow-hidden rounded-2xl border border-[var(--lark-line)] bg-[linear-gradient(145deg,var(--lark-surface),var(--lark-placeholder))] p-7 text-center ${className}`}
    >
      <div className="max-w-[19rem]">
        <p className="text-base font-medium tracking-[-0.015em] text-[var(--lark-text)]">{title}</p>
        <p className="mt-2 text-sm leading-6 text-[var(--lark-muted)]">{note}</p>
      </div>
    </div>
  );
}

function Media({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-[var(--lark-line)] bg-[var(--lark-surface)] ${className}`}>
      <img src={src} alt={alt} loading="lazy" decoding="async" className="block h-full w-full object-cover object-top" />
    </div>
  );
}

export function LarkGlobalMarketing() {
  return (
    <LocalizedContent translations={larkGlobalTranslations}>
      <article
      className="relative min-h-[100dvh] overflow-hidden bg-[var(--lark-bg)] text-[var(--lark-text)]"
      style={
        {
          '--lark-bg': '#f3f6ff',
          '--lark-surface': '#fbfcff',
          '--lark-placeholder': '#e4eaff',
          '--lark-text': '#172b4d',
          '--lark-muted': '#5d6d89',
          '--lark-accent': '#315be8',
          '--lark-accent-soft': '#dbe4ff',
          '--lark-line': '#cad6f5',
          '--project-accent': '#315be8',
          '--project-muted': '#5d6d89',
          '--project-nav-surface': 'rgba(247, 249, 255, 0.92)',
        } as CSSProperties
      }
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_78%_8%,rgba(49,91,232,0.16),transparent_28rem)]" />

      <div className="relative mx-auto w-full max-w-[1320px] px-5 pb-24 pt-10 sm:px-8 md:pb-32 md:pt-14 lg:px-12">
        <Link
          to="/work"
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-[var(--lark-line)] bg-white/65 px-4 py-2 text-sm text-[var(--lark-muted)] transition-colors hover:border-[var(--lark-accent)] hover:text-[var(--lark-text)] active:translate-y-px"
        >
          <ArrowLeft size={16} strokeWidth={1.7} />
          All projects
        </Link>

        <header className="pb-14 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.66, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-4 text-sm font-medium tracking-[0.08em] text-[var(--lark-accent)]">Lark and Feishu</p>
            <h1 className="max-w-[66rem] text-[clamp(3.3rem,6.4vw,6.1rem)] font-semibold leading-[0.92] tracking-[-0.058em] text-[var(--lark-text)]">
              Marketing Design and DesignOps
            </h1>
            <p className="mt-6 max-w-[48rem] text-lg leading-8 text-[var(--lark-muted)]">
              Web experiences and reusable systems that helped marketing teams publish, test, and sell faster.
            </p>
          </motion.div>

          <motion.div
            className="mt-10 grid gap-6 md:mt-12 md:grid-cols-12 md:items-stretch"
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.72, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col md:col-span-8">
              <div className="aspect-video w-full overflow-hidden rounded-2xl border border-[var(--lark-line)] bg-[var(--lark-surface)] shadow-[0_28px_70px_rgba(49,91,232,0.13)]">
                <img
                  src="/lark/customer-stories-live.webp"
                  alt="The live Customer Stories page on larksuite.com"
                  decoding="async"
                  className="block h-full w-full object-cover object-top"
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-[var(--lark-muted)]">
                The Customer Stories site is still live.{' '}
                <a
                  href="https://www.larksuite.com/en_us/customers"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-[var(--lark-accent)] underline-offset-4 hover:underline"
                >
                  Visit larksuite.com
                  <ArrowUpRight size={14} strokeWidth={1.8} />
                </a>
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--lark-line)] bg-[var(--lark-surface)] p-6 md:col-span-4 md:p-7">
              <dl className="grid grid-cols-2 gap-x-5 gap-y-6">
                {metadata.map((item, index) => (
                  <div key={item.label} className={index > 1 ? 'col-span-2' : ''}>
                    <dt className="mb-1.5 text-sm font-medium text-[var(--lark-accent)]">{item.label}</dt>
                    <dd className="text-sm leading-6 text-[var(--lark-muted)]">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>
        </header>

        <section className="pb-12 md:pb-18">
          <Reveal>
            <SectionHeading intro="The work connected brand quality with the practical needs of PMM, Sales, Product, and Creative Design.">
              Designing for the marketing loop
            </SectionHeading>
          </Reveal>

          <Reveal className="grid gap-6 md:grid-cols-12 md:items-stretch">
            <div className="rounded-2xl bg-[var(--lark-accent)] p-7 text-[#f8faff] md:col-span-7 md:p-9">
              <p className="max-w-[38rem] text-[clamp(1.8rem,3.5vw,3.6rem)] font-medium leading-[1.02] tracking-[-0.045em]">
                A marketing page was useful only when teams could publish, test, and update it at business speed.
              </p>
              <p className="mt-10 max-w-[36rem] text-sm leading-6 text-[#dfe7ff]">
                The design scope expanded from page craft to content systems, tools, shared assets, and team operating models.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:col-span-5 md:grid-cols-1">
              <div className="rounded-2xl border border-[var(--lark-line)] bg-[var(--lark-surface)] p-7">
                <p className="text-xl font-medium tracking-[-0.025em]">Customer-facing work</p>
                <p className="mt-3 text-sm leading-6 text-[var(--lark-muted)]">Customer Stories, product websites, campaign visuals, and motion.</p>
              </div>
              <div className="rounded-2xl bg-[var(--lark-accent-soft)] p-7">
                <p className="text-xl font-medium tracking-[-0.025em]">Internal systems</p>
                <p className="mt-3 text-sm leading-6 text-[var(--lark-muted)]">CMS templates, interface components, asset retrieval, SOPs, training, and ongoing operations.</p>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="pb-12 md:pb-18">
          <Reveal>
            <SectionHeading intro="Customer Stories needed to attract local prospects while giving PMM and Sales a faster route from brief to publication.">
              Customer Stories as a system
            </SectionHeading>
          </Reveal>

          <Reveal>
            <Media
              src="/lark/customer-stories.webp"
              alt="The Customer Stories landing page on larksuite.com, with a story detail page beside it"
              className="aspect-[2/1]"
            />
          </Reveal>

          <Reveal className="mt-6 grid gap-6 md:grid-cols-12">
            <div className="rounded-2xl border border-[var(--lark-line)] bg-[var(--lark-surface)] p-7 md:col-span-5 md:p-9">
              <p className="text-2xl font-medium tracking-[-0.03em]">Business context</p>
              <p className="mt-4 text-base leading-7 text-[var(--lark-muted)]">
                Lark needed different customer evidence for different regions. The site had to improve brand credibility while supporting faster sales conversations and lead generation.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:col-span-7">
              {publishingNeeds.map((need, index) => (
                <div
                  key={need.title}
                  className={`rounded-2xl p-6 ${index === 0 ? 'sm:col-span-2 bg-[var(--lark-accent-soft)]' : 'border border-[var(--lark-line)] bg-[var(--lark-surface)]'}`}
                >
                  <p className="text-base font-medium text-[var(--lark-text)]">{need.title}</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--lark-muted)]">{need.copy}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="pb-12 md:pb-18">
          <Reveal>
            <SectionHeading intro="Limited engineering capacity made self-directed development the fastest way to test the new publishing model.">
              Building without a dedicated engineer
            </SectionHeading>
          </Reveal>

          <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-stretch">
            <div className="rounded-2xl bg-[var(--lark-text)] p-7 text-[#f8faff] lg:col-span-5 lg:p-9">
              <p className="text-[clamp(3.2rem,6vw,5.8rem)] font-medium tracking-[-0.06em] text-[#b9c9ff]">2 weeks</p>
              <p className="mt-4 max-w-[28rem] text-xl leading-8">From learning Framer to a working landing-page and story-page template.</p>
              <p className="mt-10 text-sm leading-6 text-[#cbd5f4]">
                The build included tag filters, card behavior, motion, and content templates. Unresolved platform features were discussed directly with the Framer team.
              </p>
            </div>

            <MediaPlaceholder
              title="Framer tool and build process"
              note="16:10 image showing tool evaluation, template construction, filters, card logic, and interaction tests"
              className="aspect-[16/10] lg:col-span-7"
            />
          </Reveal>
        </section>

        <section className="pb-12 md:pb-18">
          <Reveal>
            <SectionHeading intro="The final site separated layout rules from story content so PMM could manage regional updates independently.">
              Turning pages into reusable modules
            </SectionHeading>
          </Reveal>

          <Reveal className="grid gap-6 lg:grid-cols-12">
            <Media
              src="/lark/cms-template.webp"
              alt="A Customer Story page with the CMS template fields highlighted in orange"
              className="aspect-square lg:col-span-5"
            />

            <div className="rounded-2xl border border-[var(--lark-line)] bg-[var(--lark-surface)] p-7 lg:col-span-7 lg:p-9">
              <p className="text-2xl font-medium tracking-[-0.03em]">What became reusable</p>
              <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {cmsElements.map((item, index) => (
                  <div
                    key={item}
                    className={`rounded-2xl px-4 py-5 text-sm font-medium ${index === 0 || index === 4 ? 'bg-[var(--lark-accent-soft)] text-[var(--lark-text)]' : 'border border-[var(--lark-line)] text-[var(--lark-muted)]'}`}
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-[var(--lark-accent)] p-6 text-[#f8faff]">
                <p className="text-[clamp(2.6rem,5vw,4.8rem)] font-medium tracking-[-0.055em]">80%</p>
                <p className="mt-2 max-w-[29rem] text-sm leading-6 text-[#dfe7ff]">Reported efficiency improvement after PMM took ownership of routine Customer Stories updates.</p>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-6">
            <MediaPlaceholder
              title="Publishing SOP"
              note="Wide before-and-after workflow showing the handoff change from repeated design support to PMM self-service"
              className="aspect-[16/7]"
            />
          </Reveal>
        </section>

        <section className="pb-12 md:pb-18">
          <Reveal>
            <SectionHeading intro="The same approach continued into product websites.">
              Extending the product visual language
            </SectionHeading>
          </Reveal>

          <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-stretch">
            <Media src="/lark/feishu-project.webp" alt="The Feishu Project homepage on project.feishu.cn" className="aspect-[16/10] lg:col-span-8" />
            <div className="rounded-2xl bg-[var(--lark-accent-soft)] p-7 lg:col-span-4 lg:p-9">
              <p className="text-2xl font-medium tracking-[-0.03em]">Feishu Project website</p>
              <p className="mt-4 text-base leading-7 text-[var(--lark-muted)]">
                Refined the product homepage around five core benefits and a clearer information hierarchy.
              </p>
            </div>
          </Reveal>
        </section>

        <section className="pb-12 md:pb-18">
          <Reveal>
            <SectionHeading intro="Repeated interface recreation created delays, inconsistent visuals, and avoidable review cycles across teams.">
              Creating a shared interface library
            </SectionHeading>
          </Reveal>

          <Reveal className="grid gap-6 md:grid-cols-12">
            <div className="grid grid-cols-2 gap-4 md:col-span-5">
              {libraryCoverage.map((item, index) => (
                <div
                  key={item.label}
                  className={`rounded-2xl p-6 ${index === 0 || index === 3 ? 'bg-[var(--lark-accent-soft)]' : 'border border-[var(--lark-line)] bg-[var(--lark-surface)]'}`}
                >
                  <p className="text-[clamp(2.2rem,4vw,3.8rem)] font-medium tracking-[-0.055em] text-[var(--lark-accent)]">{item.value}</p>
                  <p className="mt-3 text-sm leading-6 text-[var(--lark-muted)]">{item.label}</p>
                </div>
              ))}
            </div>

            <Media
              src="/lark/component-library.webp"
              alt="The interface component library, with abstract interfaces grouped by product"
              className="aspect-[16/10] md:col-span-7"
            />
          </Reveal>

          <Reveal className="mt-6">
            <MediaPlaceholder
              title="Workflow before and after the library"
              note="Wide process map showing how approved interfaces replaced repeated abstraction, confirmation, and rework"
              className="aspect-[16/7]"
            />
          </Reveal>
        </section>

        <section className="pb-12 md:pb-18">
          <Reveal>
            <SectionHeading intro="The asset platform brought interface files, abstract UI, videos, and commercial materials into one searchable place.">
              Building the brand asset platform
            </SectionHeading>
          </Reveal>

          <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-stretch">
            <div className="rounded-2xl bg-[var(--lark-text)] p-7 text-[#f8faff] lg:col-span-5 lg:p-9">
              <p className="text-3xl font-medium tracking-[-0.04em]">Built with Lark aPaaS</p>
              <p className="mt-5 text-base leading-7 text-[#d3ddf6]">
                With limited engineering resources, the design team defined the first release around upload, download, categories, and file formats, then built the platform internally.
              </p>
              <p className="mt-9 text-sm leading-6 text-[#aebddd]">
                Version 1.0 launched in 2023 Q2 with usage guidelines, contributor training, weekly release notes, and feedback activities.
              </p>
            </div>

            <Media
              src="/lark/asset-platform.webp"
              alt="The Feishu brand asset platform: the home page and asset category pages"
              className="aspect-[1364/884] lg:col-span-7"
            />
          </Reveal>

          <Reveal className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {assetLibraryMetrics.map((item, index) => (
              <div
                key={item.label}
                className={`rounded-2xl p-6 ${index === 1 || index === 2 ? 'bg-[var(--lark-accent-soft)]' : 'border border-[var(--lark-line)] bg-[var(--lark-surface)]'}`}
              >
                <p className="text-[clamp(2.1rem,4vw,3.6rem)] font-medium tracking-[-0.055em] text-[var(--lark-accent)]">{item.value}</p>
                <p className="mt-3 text-sm leading-6 text-[var(--lark-muted)]">{item.label}</p>
              </div>
            ))}
          </Reveal>
        </section>

        <section className="pb-12 md:pb-18">
          <Reveal>
            <SectionHeading intro="The existing systems create a practical foundation for testing where AI can reduce repeat work without weakening review quality.">
              Researching AI-assisted design operations
            </SectionHeading>
          </Reveal>

          <Reveal className="rounded-2xl border border-[var(--lark-line)] bg-[var(--lark-surface)] p-7 md:p-9">
            <p className="max-w-[55rem] text-[clamp(1.55rem,2.7vw,2.6rem)] font-medium leading-[1.1] tracking-[-0.035em]">
              This is an active research direction based on the operational work above. It is not presented as a shipped Lark product.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {aiResearchQuestions.map((question, index) => (
                <div
                  key={question.title}
                  className={`rounded-2xl p-6 ${index === 0 || index === 3 ? 'bg-[var(--lark-accent-soft)]' : 'border border-[var(--lark-line)]'}`}
                >
                  <p className="text-base font-medium text-[var(--lark-text)]">{question.title}</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--lark-muted)]">{question.copy}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-6 rounded-2xl bg-[var(--lark-accent)] p-6 text-[#f8faff] md:p-9">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {aiWorkflow.map((item, index) => (
                <div key={item} className={`rounded-2xl px-4 py-5 text-sm font-medium ${index === 2 ? 'bg-white text-[var(--lark-accent)]' : 'border border-white/25 text-[#eef2ff]'}`}>
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-6 max-w-[54rem] text-sm leading-6 text-[#dfe7ff]">
              Evaluation should compare cycle time, factual accuracy, brand consistency, localization quality, and the amount of human correction required.
            </p>
          </Reveal>

          <Reveal className="mt-6">
            <MediaPlaceholder
              title="AI efficiency research framework"
              note="Wide diagram connecting approved knowledge, multimodal asset search, assisted drafting, human review, and measurable outcomes"
              className="aspect-[16/7]"
            />
          </Reveal>
        </section>

        <section className="pb-4">
          <Reveal>
            <SectionHeading intro="The work moved from individual web pages to reusable systems that teams could operate and improve themselves.">
              Outcomes and contribution
            </SectionHeading>
          </Reveal>

          <Reveal className="grid gap-6 md:grid-cols-12">
            <div className="rounded-2xl bg-[var(--lark-accent)] p-7 text-[#f8faff] md:col-span-7 md:p-9">
              <p className="text-[clamp(3.4rem,6vw,6rem)] font-medium tracking-[-0.06em]">80%</p>
              <p className="mt-3 max-w-[34rem] text-lg leading-8 text-[#e4eaff]">Efficiency improvement reported for the Customer Stories publishing workflow.</p>
            </div>
            <div className="rounded-2xl border border-[var(--lark-line)] bg-[var(--lark-surface)] p-7 md:col-span-5 md:p-9">
              <p className="text-3xl font-medium tracking-[-0.04em]">A repeatable operating model</p>
              <p className="mt-4 text-base leading-7 text-[var(--lark-muted)]">Templates, standards, training, ownership, and feedback kept the systems useful after launch.</p>
            </div>
          </Reveal>

          <Reveal className="mt-6 rounded-2xl border border-[var(--lark-line)] bg-[var(--lark-surface)] p-7 md:p-9">
            <h3 className="text-2xl font-medium tracking-[-0.03em] text-[var(--lark-text)]">My responsibilities</h3>
            <div className="mt-7 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {contributions.map((group) => (
                <div key={group.title}>
                  <p className="text-sm font-medium text-[var(--lark-accent)]">{group.title}</p>
                  <div className="mt-3 space-y-2">
                    {group.items.map((item) => (
                      <p key={item} className="text-sm leading-6 text-[var(--lark-muted)]">{item}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>
      </div>
      </article>
    </LocalizedContent>
  );
}
