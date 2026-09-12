import { useState } from 'react';
import { Link } from 'react-router';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpenText,
  Braces,
  Check,
  Database,
  FileText,
  Network,
  Presentation,
} from 'lucide-react';

const pipeline = [
  {
    id: 'curate',
    number: '01',
    title: 'Curate and segment',
    description:
      'We assembled a multi-genre archive, retained provenance for every record, and divided the corpus into eight historical eras. This made comparison possible without detaching a result from its source.',
    input: 'Literature, official histories, agricultural manuals and medical texts',
    method: 'Source logging, schema design and chronological segmentation',
    output: '470 traceable records across eight eras',
    checkpoint: 'Could every record be returned to its original text and historical setting?',
    icon: Database,
  },
  {
    id: 'prepare',
    number: '02',
    title: 'Prepare the language',
    description:
      'A semantic fusion step combined the original passage, keywords, symbolism tags and modern descriptions. Jieba tokenisation, a custom stop-word list and manual review then prepared the classical Chinese for analysis.',
    input: 'Original text, tags, interpretation notes and source metadata',
    method: 'Semantic fusion, Jieba, stop words and entity normalisation',
    output: 'A structured and reviewable analysis corpus',
    checkpoint: 'Did normalisation preserve historically meaningful distinctions?',
    icon: Braces,
  },
  {
    id: 'analyse',
    number: '03',
    title: 'Construct the evidence',
    description:
      'TF-IDF identified vocabulary distinctive to each era. Era-specific Word2Vec models tested changes in semantic neighbourhoods, while co-occurrence matrices and NetworkX exposed relationships between people, places and institutions.',
    input: 'Clean text, era labels and a preserved single-character 橘 token',
    method: 'TF-IDF, Word2Vec Skip-gram and NetworkX',
    output: 'Rankings, semantic neighbours and co-occurrence networks',
    checkpoint: 'Was an apparent pattern stable enough to justify returning to the texts?',
    icon: Network,
  },
  {
    id: 'interpret',
    number: '04',
    title: 'Interpret and publish',
    description:
      'Computational outputs were treated as leads rather than conclusions. We checked surprising terms against primary passages, compared evidence across methods, and translated the resulting argument into a paper, presentation and interactive website.',
    input: 'Model outputs, source passages and team review notes',
    method: 'Distant reading, close reading and evidence triangulation',
    output: 'Three historical shifts and a public research interface',
    checkpoint: 'Could a reader see both the claim and the evidence behind it?',
    icon: BookOpenText,
  },
];

const projectTimeline = [
  { date: '23 Oct', title: 'Frame', detail: 'Selected one cultural object and tested whether it could support a diachronic claim.' },
  { date: '24 to 31 Oct', title: 'Plan', detail: 'Defined the research question, corpus schema, roles and review rhythm.' },
  { date: '1 to 9 Nov', title: 'Build', detail: 'Collected sources, logged provenance and completed the first cleaning pass.' },
  { date: '8 to 14 Nov', title: 'Test', detail: 'Compared tokenisation, TF-IDF, Word2Vec and semantic networks.' },
  { date: '15 to 21 Nov', title: 'Interpret', detail: 'Returned to primary texts and narrowed the argument to three historical shifts.' },
  { date: '22 to 26 Nov', title: 'Publish', detail: 'Completed the report, presentation and interactive research website.' },
];

const sourceTypes = [
  ['Classical literature', 'Chu Ci and Tang poetry', 'Aesthetic and moral symbolism'],
  ['Official histories and geography', 'Xin Tang Shu and Shi Ji', 'Tribute, governance and economic geography'],
  ['Agricultural monographs', "Han Yanzhi's Ju Lu", 'Cultivation, varieties and preservation'],
  ['Medical compendia', "Li Shizhen's Ben Cao Gang Mu", 'Chenpi and practical medical use'],
];

const eras = [
  'Prehistoric and ancient',
  'Pre-Qin',
  'Qin and Han',
  'Wei, Jin and Northern and Southern dynasties',
  'Sui and Tang',
  'Song and Yuan',
  'Ming and Qing',
  'Modern',
];

const decisions = [
  {
    title: 'Semantic fusion',
    body: 'Original text, keywords, symbolism and modern descriptions were combined into one analysis context. This helped a small corpus carry implicit meaning, but also introduced interpretive assumptions that had to be checked during close reading.',
  },
  {
    title: 'Entity normalisation',
    body: 'Ju, gan, cheng and you were consolidated as Mandarin only where the record supported it, while the single-character 橘 was always preserved. The choice increased statistical visibility but could flatten historical citrus taxonomy.',
  },
  {
    title: 'Small-corpus modelling',
    body: 'Era-specific Skip-gram models used a context window of 5 and 150 epochs. Their neighbours were interpreted as exploratory signals, not as proof of causation or a complete history of language change.',
  },
];

const team = [
  { name: 'Lu Zhengping', role: 'Project management, corpus construction, data extraction, cleaning and analysis, TF-IDF analysis, web visualisation and presentation.' },
  { name: 'Ba Yuxin', role: 'Academic report, source review and literature synthesis.' },
  { name: 'Yang Yulai', role: 'Primary-source data collection and presentation development.' },
  { name: 'Yang Yuqing', role: 'Academic report, source review and literature synthesis.' },
];

const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

function SectionKicker({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <p className={`mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.24em] ${light ? 'text-[#f3a36d]' : 'text-[#a94f20]'}`}>
      {children}
    </p>
  );
}

function Figure({
  src,
  alt,
  caption,
  className = '',
  imageClassName = 'object-contain',
}: {
  src: string;
  alt: string;
  caption: string;
  className?: string;
  imageClassName?: string;
}) {
  return (
    <figure className={`overflow-hidden rounded-[1.25rem] border border-[#281d16]/10 bg-white ${className}`}>
      <div className="overflow-hidden bg-[#fbfaf7] p-3 sm:p-5">
        <img src={src} alt={alt} className={`h-full w-full ${imageClassName}`} loading="lazy" />
      </div>
      <figcaption className="border-t border-[#281d16]/10 px-5 py-4 text-sm leading-6 text-[#68584f]">{caption}</figcaption>
    </figure>
  );
}

export function CBS5504Mandarin() {
  const [activeStage, setActiveStage] = useState(pipeline[0].id);
  const reduceMotion = useReducedMotion();
  const selectedStage = pipeline.find((stage) => stage.id === activeStage) ?? pipeline[0];
  const SelectedIcon = selectedStage.icon;

  return (
    <article className="overflow-hidden bg-[#f7f4ef] text-[#241c17]">
      <section className="relative isolate min-h-[calc(100dvh-5rem)] overflow-hidden bg-[#17130f] text-white">
        <img
          src="/cbs5504/mandarin-cover.webp"
          alt="Mandarin orange trees in a mountain orchard"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        {!reduceMotion && (
          <video
            className="absolute inset-0 h-full w-full object-cover opacity-60"
            src="/cbs5504/mandarin-cover-hover.mp4"
            poster="/cbs5504/mandarin-cover.webp"
            autoPlay
            muted
            loop
            playsInline
          />
        )}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,14,9,0.94)_0%,rgba(20,14,9,0.72)_48%,rgba(20,14,9,0.16)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#17130f] to-transparent" />

        <div className="page-container relative z-10 flex min-h-[calc(100dvh-5rem)] flex-col py-10 sm:py-14">
          <Link to="/work" className="inline-flex w-fit items-center gap-2 text-sm text-white/72 transition-colors hover:text-white">
            <ArrowLeft size={16} />
            All Projects
          </Link>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={reveal}
            transition={{ duration: 0.65 }}
            className="mt-auto max-w-5xl pb-8"
          >
            <SectionKicker light>Digital humanities · CBS5504</SectionKicker>
            <h1 className="text-[clamp(3.5rem,9vw,8.2rem)] font-medium leading-[0.86] tracking-[-0.068em] text-white">Mandarin</h1>
            <p className="mt-6 max-w-4xl text-[clamp(1.45rem,3.3vw,3rem)] leading-[1.04] tracking-[-0.038em] text-white/94">
              A semantic evolution spanning three thousand years
            </p>
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/68 sm:text-lg">
              Tracing cultural change through a 470-record corpus, computational analysis and close reading.
            </p>
          </motion.div>
        </div>
      </section>

      <main>
        <section className="border-b border-[#281d16]/10 bg-[#efe8de]">
          <dl className="page-container grid gap-px py-0 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['Corpus', '470 traceable records'],
              ['Coverage', '8 historical eras'],
              ['Core methods', 'TF-IDF · Word2Vec · NetworkX'],
              ['Duration', 'Oct to Nov 2025'],
            ].map(([label, value]) => (
              <div key={label} className="border-[#281d16]/10 py-6 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0">
                <dt className="text-[0.66rem] uppercase tracking-[0.18em] text-[#8b7568]">{label}</dt>
                <dd className="mt-2 text-sm leading-6 text-[#403229]">{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="page-container py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <SectionKicker>Research question</SectionKicker>
              <h2 id="question" className="max-w-lg text-[clamp(2.25rem,4vw,4.6rem)] leading-[0.98] tracking-[-0.045em]">
                How does one fruit acquire new meanings over 3,000 years?
              </h2>
            </div>
            <div className="space-y-9">
              <p className="text-xl leading-8 tracking-[-0.015em] text-[#3f3129] sm:text-2xl sm:leading-9">
                Existing studies often separate the orange into literary symbolism, agricultural technique, medical use or economic history. We asked what becomes visible when those records are read as one continuous cultural biography.
              </p>
              <div className="grid gap-7 border-t border-[#281d16]/14 pt-7 sm:grid-cols-2">
                <div>
                  <p className="text-sm text-[#8b7568]">Research gap</p>
                  <p className="mt-2 leading-7">Fragmented, mostly synchronic accounts offered little quantitative evidence for long-term semantic change.</p>
                </div>
                <div>
                  <p className="text-sm text-[#8b7568]">Digital humanities response</p>
                  <p className="mt-2 leading-7">Use distant reading to locate patterns, then return to source passages to test the historical interpretation.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 overflow-hidden rounded-[1.25rem] border border-[#281d16]/10 bg-[#f0e5d5] p-3 sm:p-5">
            <img src="/cbs5504/thesis-trajectory.webp" alt="Illustrated trajectory from virtue through tribute and medicine to global trade" className="w-full rounded-xl" />
          </div>
          <div className="mt-5 grid gap-5 border-t border-[#281d16]/14 pt-6 md:grid-cols-3">
            {[
              ['01', 'Moral Mirror', 'Pre-Qin texts personified the orange as integrity, loyalty and rootedness.'],
              ['02', 'Political Token', 'Tang and Song records placed it inside tribute, court and logistics systems.'],
              ['03', 'Practical Resource', 'Ming-Qing and modern texts recast it through medicine, classification and trade.'],
            ].map(([index, title, body]) => (
              <div key={title} className="grid grid-cols-[2rem_1fr] gap-3">
                <span className="pt-1 text-xs tabular-nums text-[#a94f20]">{index}</span>
                <div>
                  <h3 className="text-lg tracking-[-0.02em]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#68584f]">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-[#281d16]/10 bg-[#f0ebe3] py-20 sm:py-28">
          <div className="page-container">
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
              <div>
                <h2 id="corpus" className="text-[clamp(2.2rem,4.2vw,4.8rem)] leading-[0.98] tracking-[-0.045em]">Corpus as argument</h2>
                <p className="mt-7 max-w-xl text-lg leading-8 text-[#5c4b41]">
                  The corpus design joined sources that are usually studied apart. Each record retained its quotation, provenance, era and interpretive notes.
                </p>
              </div>
              <div className="border-t border-[#281d16]/14">
                {sourceTypes.map(([title, source, purpose], index) => (
                  <div key={title} className="grid gap-3 border-b border-[#281d16]/14 py-6 sm:grid-cols-[2rem_1fr_1fr]">
                    <span className="text-xs tabular-nums text-[#a94f20]">0{index + 1}</span>
                    <div>
                      <h3 className="font-medium">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-[#68584f]">{source}</p>
                    </div>
                    <p className="text-sm leading-6 text-[#514137]">{purpose}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 grid grid-cols-2 border-l border-t border-[#281d16]/12 sm:grid-cols-4 lg:grid-cols-8">
              {eras.map((era, index) => (
                <div key={era} className="min-h-36 border-b border-r border-[#281d16]/12 p-4">
                  <p className="text-xs tabular-nums text-[#a94f20]">{String(index + 1).padStart(2, '0')}</p>
                  <p className="mt-7 text-sm leading-5 text-[#514137]">{era}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="page-container py-20 sm:py-28">
          <SectionKicker>Method</SectionKicker>
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <h2 id="method" className="text-[clamp(2.2rem,4.2vw,4.8rem)] leading-[0.98] tracking-[-0.045em]">From historical text to evidence</h2>
            <p className="max-w-2xl text-xl leading-8 text-[#514137] sm:text-2xl sm:leading-9">
              The final research method used three forms of evidence: distinctive vocabulary, semantic neighbourhoods and relational networks.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-[18rem_minmax(0,1fr)]">
            <Figure
              src="/cbs5504/dh-pipeline.webp"
              alt="Four-stage digital humanities pipeline from the final presentation"
              caption="The four-stage pipeline used in the final presentation: cleaning, NLP processing, computational analysis and visualisation."
              className="h-fit"
            />

            <div className="overflow-hidden rounded-[1.25rem] border border-[#281d16]/12 bg-[#201a16]">
              <div className="grid gap-1 p-3 sm:grid-cols-2 xl:grid-cols-4" role="tablist" aria-label="Research pipeline stages">
                {pipeline.map((stage) => {
                  const isActive = stage.id === activeStage;
                  return (
                    <button
                      key={stage.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`pipeline-panel-${stage.id}`}
                      onClick={() => setActiveStage(stage.id)}
                      className={`flex items-center gap-3 rounded-lg px-4 py-3 text-left transition-colors ${isActive ? 'bg-[#f08a4b] text-[#201a16]' : 'text-white/62 hover:bg-white/8 hover:text-white'}`}
                    >
                      <span className="text-xs tabular-nums">{stage.number}</span>
                      <span className="text-sm font-medium">{stage.title}</span>
                    </button>
                  );
                })}
              </div>

              <motion.div
                key={selectedStage.id}
                id={`pipeline-panel-${selectedStage.id}`}
                role="tabpanel"
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="min-h-[33rem] bg-[#fbfaf7] p-7 sm:p-10 lg:p-12"
              >
                <div className="flex items-start justify-between gap-5">
                  <h3 className="text-3xl tracking-[-0.035em] sm:text-4xl">{selectedStage.title}</h3>
                  <SelectedIcon className="h-8 w-8 shrink-0 text-[#a94f20]" strokeWidth={1.4} />
                </div>
                <p className="mt-7 max-w-3xl text-lg leading-8 text-[#514137]">{selectedStage.description}</p>
                <dl className="mt-10 grid border-l border-t border-[#281d16]/10 sm:grid-cols-3">
                  {[
                    ['Input', selectedStage.input],
                    ['Method', selectedStage.method],
                    ['Output', selectedStage.output],
                  ].map(([label, value]) => (
                    <div key={label} className="border-b border-r border-[#281d16]/10 p-5">
                      <dt className="text-[0.65rem] uppercase tracking-[0.18em] text-[#9a887b]">{label}</dt>
                      <dd className="mt-3 text-sm leading-6 text-[#493a31]">{value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-6 flex items-start gap-3 border-l-2 border-[#a94f20] bg-[#f1e3d7] p-5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#a94f20]" />
                  <p className="text-sm leading-6"><span className="font-medium">Quality checkpoint:</span> {selectedStage.checkpoint}</p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="mt-20">
            <h3 className="text-2xl tracking-[-0.03em]">How the six-week project ran</h3>
            <ol className="mt-7 border-t border-[#281d16]/14">
              {projectTimeline.map((item, index) => (
                <li key={item.date} className="grid gap-3 border-b border-[#281d16]/14 py-5 sm:grid-cols-[7rem_2rem_9rem_1fr] sm:items-baseline">
                  <span className="text-sm tabular-nums text-[#a94f20]">{item.date}</span>
                  <span className="hidden text-xs text-[#9a887b] sm:block">0{index + 1}</span>
                  <span className="font-medium">{item.title}</span>
                  <span className="leading-7 text-[#68584f]">{item.detail}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-y border-[#281d16]/10 bg-[#efe8de] py-20 sm:py-28">
          <div className="page-container">
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
              <div>
                <h2 id="judgement" className="text-[clamp(2.2rem,4.2vw,4.8rem)] leading-[0.98] tracking-[-0.045em]">Human judgement inside the pipeline</h2>
              </div>
              <div className="border-t border-[#281d16]/14">
                {decisions.map((decision, index) => (
                  <div key={decision.title} className="grid gap-3 border-b border-[#281d16]/14 py-7 sm:grid-cols-[2rem_12rem_1fr]">
                    <span className="text-xs tabular-nums text-[#a94f20]">0{index + 1}</span>
                    <h3 className="font-medium">{decision.title}</h3>
                    <p className="text-sm leading-7 text-[#5c4b41]">{decision.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="page-container py-20 sm:py-28">
          <SectionKicker>Finding 01</SectionKicker>
          <div className="grid items-start gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
            <div>
              <h2 id="moral-mirror" className="text-[clamp(2.2rem,4.2vw,4.8rem)] leading-[0.98] tracking-[-0.045em]">The Moral Mirror</h2>
              <p className="mt-7 text-lg leading-8 text-[#5c4b41]">
                Pre-Qin writing links the orange with virtue, loyalty, independence and the southern landscape. It functions as a model of character before it functions as an economic object.
              </p>
              <div className="mt-9 border-l-2 border-[#a94f20] pl-5">
                <p className="text-sm font-medium text-[#a94f20]">The useful surprise</p>
                <p className="mt-2 leading-7 text-[#493a31]">
                  We expected virtue to dominate the TF-IDF ranking. Jiangpu appeared first instead. Returning to the texts revealed that moral identity was inseparable from Chu geography and the image of rootedness.
                </p>
              </div>
            </div>
            <Figure
              src="/cbs5504/jiangpu-evidence.webp"
              alt="Pre-Qin TF-IDF evidence chart from the final presentation"
              caption="The final presentation paired the Pre-Qin TF-IDF ranking with a spatial heatmap. The unexpected prominence of Jiangpu redirected the close reading toward geography."
            />
          </div>
        </section>

        <section className="border-y border-[#281d16]/10 bg-[#f0ebe3] py-20 sm:py-28">
          <div className="page-container">
            <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
              <Figure
                src="/cbs5504/cooccurrence-network.webp"
                alt="Semantic co-occurrence network for orange culture"
                caption="Co-occurrence analysis placed the orange inside networks of court, tribute, medicine, commerce and place. Node size encodes degree centrality; edges encode shared context."
              />
              <div>
                <p className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#a94f20]">Finding 02</p>
                <h2 id="political-token" className="text-[clamp(2.2rem,4.2vw,4.8rem)] leading-[0.98] tracking-[-0.045em]">The Political Token</h2>
                <p className="mt-7 text-lg leading-8 text-[#5c4b41]">
                  In Tang and Song records, tribute becomes a central relation. The orange moves into court exchange, state logistics and systems of provenance. References to Wenzhou and Wu show how political value also reorganised geographic attention.
                </p>
                <p className="mt-6 text-sm leading-7 text-[#68584f]">
                  Agricultural writing such as Ju Lu adds another layer: cultivation, storage and named varieties made the fruit increasingly standardised and governable.
                </p>
              </div>
            </div>
            <Figure
              src="/cbs5504/tribute-routes.webp"
              alt="Illustrated interpretation of southern citrus tribute routes"
              caption="A presentation illustration used to explain the logistics argument. It is contextual interpretation, not a reconstructed historical map."
              className="mt-10"
              imageClassName="object-cover"
            />
          </div>
        </section>

        <section className="page-container py-20 sm:py-28">
          <div className="grid items-start gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
            <div>
              <p className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#a94f20]">Finding 03</p>
              <h2 id="practical-resource" className="text-[clamp(2.2rem,4.2vw,4.8rem)] leading-[0.98] tracking-[-0.045em]">The Practical Resource</h2>
              <p className="mt-7 text-lg leading-8 text-[#5c4b41]">
                Ming-Qing records show a medical turn. Word2Vec neighbours move toward Li Shizhen, Chenpi, peel and flavour or nature. The whole fruit is increasingly described through functional parts, while modern records add brand, origin and export.
              </p>
              <p className="mt-6 text-sm leading-7 text-[#68584f]">
                Exploratory topic modelling supported the same direction, but the final argument rests on agreement between multiple methods and close reading rather than one chart.
              </p>
            </div>
            <Figure
              src="/cbs5504/medical-turn.webp"
              alt="Charts showing the rise of medical language in the Ming-Qing corpus"
              caption="Presentation evidence for the medical turn. The topic chart is treated as exploratory; Word2Vec neighbours and source passages provide the stronger interpretive support."
            />
          </div>

          <div className="mt-16 grid gap-8 border-t border-[#281d16]/14 pt-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-sm font-medium text-[#a94f20]">The larger argument</p>
              <h3 className="mt-3 text-3xl leading-tight tracking-[-0.035em]">Cultural disenchantment, with continuity</h3>
            </div>
            <p className="text-xl leading-8 text-[#514137]">
              The orange moves from moral personification to political institution and practical resource. Its symbolic life does not simply disappear. It survives by entering new contexts across poetry, medicine and commerce.
            </p>
          </div>
        </section>

        <section className="border-y border-[#281d16]/10 bg-[#efe8de] py-20 sm:py-28">
          <div className="page-container grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <h2 id="public-interface" className="text-[clamp(2.2rem,4.2vw,4.8rem)] leading-[0.98] tracking-[-0.045em]">Research as a public interface</h2>
            </div>
            <div>
              <p className="max-w-2xl text-xl leading-8 text-[#514137] sm:text-2xl sm:leading-9">
                The final website turns the paper into a guided historical journey. Readers can move between eras and connect interpretive claims with visual evidence.
              </p>
              <a
                href="https://mandarin-orange-research.figma.site/"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#201a16] px-5 py-3 text-sm text-white transition-colors hover:bg-[#a94f20]"
              >
                Visit the final research website <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section className="page-container py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <h2 id="reflection" className="text-[clamp(2.2rem,4.2vw,4.8rem)] leading-[0.98] tracking-[-0.045em]">What this study can and cannot claim</h2>
            </div>
            <div>
              <p className="text-xl leading-8 text-[#514137] sm:text-2xl sm:leading-9">
                The project demonstrates a full-cycle digital humanities method. It identifies patterns worth investigating, but it does not claim an exhaustive or causal history of the Mandarin.
              </p>
              <div className="mt-10 border-t border-[#281d16]/14">
                {[
                  ['Curated scale', 'A 470-record corpus offers depth and traceability, but coverage is uneven across eras and genres.'],
                  ['Interpretive data', "Tags and fused descriptions help bridge classical language, while also carrying the team's assumptions into the analysis."],
                  ['Exploratory models', 'Small era-specific Word2Vec models can suggest semantic movement, not establish historical causation.'],
                  ['Next step', 'Expand the corpus, publish the schema and source-level evidence, and test the method on other cultural objects.'],
                ].map(([title, body]) => (
                  <div key={title} className="grid gap-3 border-b border-[#281d16]/14 py-6 sm:grid-cols-[10rem_1fr]">
                    <h3 className="font-medium">{title}</h3>
                    <p className="text-sm leading-7 text-[#68584f]">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#281d16]/10 bg-[#f0ebe3] py-20 sm:py-28">
          <div className="page-container">
            <SectionKicker>Research record</SectionKicker>
            <h2 id="outputs" className="max-w-3xl text-[clamp(2.2rem,4.2vw,4.8rem)] leading-[0.98] tracking-[-0.045em]">Outputs and contribution</h2>
            <div className="mt-12 grid border-l border-t border-[#281d16]/12 sm:grid-cols-2">
              {[
                {
                  icon: FileText,
                  title: 'Final report',
                  body: 'The complete 17-page research paper, including corpus design, NLP implementation, findings and future work.',
                  href: '/cbs5504/final-report.pdf',
                  action: 'Read PDF',
                },
                {
                  icon: Presentation,
                  title: 'Final presentation',
                  body: 'The 28-slide presentation used to explain the research question, pipeline, evidence and academic contribution.',
                  href: '/cbs5504/final-presentation.pdf',
                  action: 'View slides',
                },
                {
                  icon: Network,
                  title: 'Interactive result',
                  body: 'A public-facing timeline that translates the final research argument into an explorable visual narrative.',
                  href: 'https://mandarin-orange-research.figma.site/',
                  action: 'Explore website',
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`group min-h-72 border-b border-r border-[#281d16]/12 bg-[#f7f4ef] p-7 transition-colors hover:bg-white sm:p-9 ${item.title === 'Interactive result' ? 'sm:col-span-2' : ''}`}
                  >
                    <Icon className="h-6 w-6 text-[#a94f20]" strokeWidth={1.5} />
                    <h3 className="mt-12 text-2xl tracking-[-0.03em]">{item.title}</h3>
                    <p className="mt-3 max-w-md text-sm leading-6 text-[#68584f]">{item.body}</p>
                    <span className="mt-7 inline-flex items-center gap-2 text-sm text-[#a94f20]">{item.action} <ArrowUpRight size={15} /></span>
                  </a>
                );
              })}
            </div>

            <div className="mt-16 grid gap-8 border-t border-[#281d16]/14 pt-8 md:grid-cols-3">
              {[
                ['Research', 'A continuous cultural biography assembled from literary, political, agricultural and medical records.'],
                ['Method', 'A transparent workflow that connects distant reading with source-level interpretation.'],
                ['Public scholarship', 'A visual interface that makes a specialised humanities argument accessible beyond the classroom.'],
              ].map(([title, body]) => (
                <div key={title}>
                  <h3 className="font-medium">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#68584f]">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="page-container py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <h2 id="team" className="text-[clamp(2.2rem,4.2vw,4.8rem)] leading-[0.98] tracking-[-0.045em]">Team and my role</h2>
              <p className="mt-7 text-lg leading-8 text-[#5c4b41]">A four-person research project developed through weekly reviews and shared source checking.</p>
            </div>
            <div className="border-t border-[#281d16]/14">
              {team.map((member, index) => (
                <div key={member.name} className="grid gap-3 border-b border-[#281d16]/14 py-6 sm:grid-cols-[12rem_1fr]">
                  <p className={`font-medium ${index === 0 ? 'text-[#a94f20]' : ''}`}>{member.name}{index === 0 ? ' · My contribution' : ''}</p>
                  <p className="text-sm leading-6 text-[#68584f]">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-5 border-t border-[#281d16]/14 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-[#68584f]">CBS5504 AI-Driven Cross-Cultural Linguistic Exploration</p>
              <p className="mt-1 text-sm text-[#68584f]">MSc in Generative AI and the Humanities · The Hong Kong Polytechnic University</p>
            </div>
            <Link to="/work" className="inline-flex items-center gap-2 text-sm text-[#a94f20] hover:underline">
              <ArrowLeft size={15} /> Back to all projects
            </Link>
          </div>
        </section>
      </main>
    </article>
  );
}
