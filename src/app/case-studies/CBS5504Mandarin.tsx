import { useState, type CSSProperties, type ReactNode } from 'react';
import { Link } from 'react-router';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Download } from 'lucide-react';
import { LocalizedContent } from '../i18n/LocalizedContent';
import { useLanguage } from '../context/LanguageContext';
import { mandarinTranslations } from '../i18n/caseStudyTranslations';
import { CaseStudyThread, MainLineTag } from '../components/CaseStudyThread';

const SLUG = 'cbs5504-mandarin-cultural-evolution';
const SITE_URL = 'https://mandarin-orange-research.figma.site/';
const COLAB = '/cbs5504/colab';
const DATA = '/cbs5504/data';

const metadata = [
  { label: 'Role', value: 'Project lead · corpus, NLP analysis, website' },
  { label: 'Team', value: '4 people' },
  { label: 'Corpus', value: '470 records · 8 eras' },
  { label: 'Methods', value: 'TF-IDF · NetworkX · Word2Vec · Jieba' },
  { label: 'Duration', value: 'Oct–Nov 2025 · 6 weeks' },
];

const dataLabel = 'The data';
const analysisLabel = 'Analysis, era by era';
const insightsLabel = 'From patterns to insights';

const abstract =
  'Studies of the Mandarin in Chinese culture are split across literature, art, agriculture, and medicine, and most rest on close reading of a few famous texts. We built a corpus of 470 passages from eight eras and read it with NLP: TF-IDF keywords, keyword networks, and Word2Vec. The words trace a process we call cultural disenchantment. The Mandarin is a moral mirror in Pre-Qin texts, a political token under the Tang and Song, and a practical resource for medicine and trade from Ming–Qing to today. Reading at this distance shows patterns that close reading alone would miss.';

const keywords = 'Mandarin · Digital humanities · Semantic evolution · Word2Vec · Distant reading';

const fields = [
  {
    title: 'Literary imagery',
    copy: 'Reads Qu Yuan’s *In Praise of the Orange-Tree* (橘颂) as the gentleman’s virtue, but rarely follows that image into later dynasties.',
  },
  {
    title: 'Art history',
    copy: 'Treats Wang Xizhi’s *FengJuTie* (奉橘帖), a letter sent with a gift of Mandarins, as aristocratic exchange, apart from the economy around it.',
  },
  {
    title: 'Agricultural history',
    copy: 'Documents the *Monograph of the Oranges of Wenchou* (橘录) as the first citrus monograph, with little link to culture.',
  },
  {
    title: 'Medical and economic history',
    copy: 'Follows chenpi (陈皮) and medicine-food homology (药食同源) in Ming–Qing as a purely practical story.',
  },
];

const sourceTypes = [
  { title: 'Classical literature', source: '*Songs of the South* (楚辞), Tang and Song poetry', use: 'Moral and aesthetic symbolism' },
  {
    title: 'Official histories and geography',
    source: '*Records of the Grand Historian* (史记), *New Book of Tang* (新唐书), local gazetteers',
    use: 'Tribute, governance, economic geography',
  },
  { title: 'Agricultural monographs', source: 'Han Yanzhi’s *Monograph of the Oranges of Wenchou* (橘录, 1178)', use: 'Cultivation, varieties, storage' },
  { title: 'Medical compendia', source: 'Li Shizhen’s *Compendium of Materia Medica* (本草纲目, 1578)', use: 'Chenpi and medical use' },
  { title: 'Modern scholarship', source: 'Papers and references from China National Knowledge Infrastructure (CNKI)', use: 'Trade, health research, festival customs' },
];

const dictionary: { field: string; header: string; holds: string; example: string; gloss?: string }[] = [
  { field: 'id', header: '唯一编号', holds: 'Unique record ID', example: 'A328' },
  { field: 'Era', header: '时代', holds: 'Dynasty as the source gives it', example: '战国', gloss: 'Warring States' },
  {
    field: 'Text',
    header: '原文片段',
    holds: 'The passage as quoted',
    example: '后皇嘉树，橘徕服兮。',
    gloss: '“Fairest of all God’s trees, the orange came and settled here.” (Hawkes)',
  },
  { field: 'Source', header: '文献出处', holds: 'Book and chapter', example: '《楚辞·橘颂》', gloss: '*Songs of the South*, “In Praise of the Orange-Tree”' },
  { field: 'Author/Period', header: '作者/时期', holds: 'Author, or period if unknown', example: '屈原', gloss: 'Qu Yuan' },
  { field: 'Category', header: '四大类标签', holds: 'Theme label, assigned by hand (see below)', example: '文化与象征', gloss: 'Culture and symbolism' },
  {
    field: 'Description',
    header: '描述',
    holds: 'A short note in modern Chinese on what the passage says',
    example: '《橘颂》的开篇之句，奠定了全诗赞美橘树高贵品格的基调。',
    gloss: 'The opening line, setting the tone of praise for the tree’s noble character.',
  },
  {
    field: 'Keyword',
    header: 'jieba提取关键词',
    holds: 'Keywords extracted with Jieba',
    example: '橘颂, 嘉树, 忠贞, 品德',
    gloss: 'the poem’s title, fine tree, loyalty, moral character',
  },
  {
    field: 'Symbolism',
    header: '后续人工修订',
    holds: 'Terms revised by hand, mostly what the passage stands for',
    example: '君子品德, 忠贞不渝',
    gloss: 'a gentleman’s character, unwavering loyalty',
  },
  {
    field: 'MediaType',
    header: '用于Neo4j节点类型',
    holds: 'Planned as a Neo4j node type; in practice it records the genre',
    example: '诗歌 (骚体)',
    gloss: 'poem, in the *sao* style',
  },
  { field: 'Era_clean', header: '—', holds: 'One of eight eras, added during cleaning (see below)', example: '先秦', gloss: 'Pre-Qin' },
];

const categoryLabels = [
  { name: 'Culture and symbolism', zh: '文化与象征', covers: 'Virtue, poetry, festivals, gifts, omens', count: 236 },
  { name: 'Economy and trade', zh: '经济与商业', covers: 'Tribute, tax, markets, spread, export', count: 78 },
  { name: 'Medicine and practical use', zh: '医疗与实用', covers: 'Peel, prescriptions, food as medicine', count: 65 },
  { name: 'Physical form', zh: '橘的物性与形态', covers: 'Varieties, look, taste, storage', count: 52 },
  { name: 'Geography', zh: '地理与分布', covers: 'Growing regions and place names', count: 39 },
];

const eras = [
  { era: 'Prehistoric', zh: '史前', period: 'Antiquity', pattern: '史前 原始 上古 传说', file: 'prehistoric', count: 4 },
  { era: 'Pre-Qin', zh: '先秦', period: 'Before 221 BCE', pattern: '夏 商 周 春秋 战国 先秦', file: 'preqin', count: 48 },
  { era: 'Qin–Han', zh: '秦汉', period: '221 BCE – 220 CE', pattern: '秦 汉 两汉', file: 'qinhan', count: 37 },
  { era: 'Wei–Jin', zh: '魏晋南北朝', period: '220–589', pattern: '三国 魏晋 晋 南北朝', file: 'weijin', count: 46 },
  { era: 'Sui–Tang', zh: '隋唐', period: '581–907', pattern: '隋 唐', file: 'suitang', count: 46 },
  { era: 'Song–Yuan', zh: '宋元', period: '960–1368', pattern: '五代 宋 辽 金 元', file: 'songyuan', count: 69 },
  { era: 'Ming–Qing', zh: '明清', period: '1368–1911', pattern: '明 清', file: 'mingqing', count: 118 },
  { era: 'Modern', zh: '近现代', period: '1912 – today', pattern: '民国 近代 现代 当代', file: 'modern', count: 102 },
];

const pipeline: { title: string; file?: string; rows?: string; copy: string }[] = [
  {
    title: 'Collect',
    file: 'Mandarin_corpus_raw.csv',
    rows: '532 rows',
    copy: 'All four of us pulled passages that mention the Mandarin, the trifoliate orange (枳), or chenpi (陈皮) from the Chinese Text Project in batches, added modern papers from CNKI, and gave each record a first label.',
  },
  {
    title: 'Proofread and relabel',
    file: 'Mandarin_corpus_clean_1110.csv',
    rows: '470 records',
    copy: 'I checked every record by hand, removed blank rows and duplicates to leave 470 records, added a description to each, settled the category labels, and revised the keywords.',
  },
  {
    title: 'Standardize',
    file: 'step1_clean.csv',
    copy: 'I renamed the Chinese headers to the dictionary fields, regenerated missing or duplicate IDs, converted traditional characters to simplified, and collapsed whitespace.',
  },
  {
    title: 'Normalize eras',
    file: 'step1_clean_era_fixed.csv',
    copy: 'The era rules above filled in Era_clean. The 31 records they could not place were assigned by hand, leaving no unknowns.',
  },
  {
    title: 'Fuse and tokenize',
    copy: 'Each method reads one fused context per record: Text, Keyword, and Symbolism, plus Description for Word2Vec. A custom stopword list drops classical particles such as 之, 乎, 者, 也 and generic research words. Variant names are merged into one Mandarin token, and that single-character token is kept so it can sit at the center of the networks.',
  },
];

const eraViews = [
  { id: 'wordcloud', label: 'Word clouds' },
  { id: 'tfidf', label: 'TF-IDF top 20' },
];

const categories = [
  { name: 'Culture and symbolism', file: 'culture', chart: 'tfidf', count: 236, measure: 'TF-IDF on Symbolism' },
  { name: 'Medicine and practical use', file: 'medicine', chart: 'tfidf', count: 65, measure: 'TF-IDF on Keyword' },
  { name: 'Economy and trade', file: 'economy', chart: 'tfidf', count: 78, measure: 'TF-IDF on Keyword' },
  { name: 'Geography', file: 'geography', chart: 'count', count: 39, measure: 'Place names in Text, by count' },
  { name: 'Physical form', file: 'physical', chart: 'count', count: 52, measure: 'Phrases in Text, by count' },
];

const networkLegend = [
  { name: 'Culture and symbolism', color: '#f39c12' },
  { name: 'Economy and trade', color: '#3498db' },
  { name: 'Medicine and practical use', color: '#27ae60' },
  { name: 'Geography', color: '#9b59b6' },
  { name: 'Physical form', color: '#e74c3c' },
];

const textOnlyTokens = ['皇嘉树', '橘徕', '服兮'];

const fusedTokens: { token: string; kind?: 'signal' | 'glued' }[] = [
  { token: '皇嘉树' },
  { token: '橘徕' },
  { token: '服兮橘', kind: 'glued' },
  { token: '开篇' },
  { token: '之句' },
  { token: '奠定' },
  { token: '全诗' },
  { token: '赞美', kind: 'signal' },
  { token: '橘树' },
  { token: '高贵', kind: 'signal' },
  { token: '品格', kind: 'signal' },
  { token: '基调' },
  { token: '橘颂嘉树', kind: 'glued' },
  { token: '忠贞', kind: 'signal' },
  { token: '品德', kind: 'signal' },
  { token: '君子', kind: 'signal' },
  { token: '品德', kind: 'signal' },
  { token: '忠贞不渝', kind: 'signal' },
];

const tokenizerCode = `def clean_and_tokenize(text):
    text = str(text)
    text = text.replace("桔", "橘").replace("柑", "橘") \\
               .replace("橙", "橘").replace("柚", "橘")
    text = re.sub(r"[^\\u4e00-\\u9fa5]", "", text)
    words = jieba.lcut(text)
    return [w for w in words
            if (len(w) > 1 or w == "橘") and w not in stopwords]

# one Skip-gram model per era
model = Word2Vec(sentences=era_tokens, vector_size=100,
                 window=5, min_count=1, epochs=150, sg=1)`;

const word2vecRead = {
  how: 'Each row is one era’s model; the boxes are the five words closest to Mandarin in it. Most are noise. The ones I could trace to a passage:',
  points: [
    'Pre-Qin: place of origin (产地) and *YanLing* (延陵), a fief in the state of Wu.',
    'Qin–Han: *JiaoFu* (交甫) and the Han River (汉水), from the legend of Zheng Jiaofu.',
    'Sui–Tang: *YiDi* (一蒂), twin fruit on one stem, read as an omen.',
    'Song–Yuan: Yongjia County (永嘉县), annual revenue (岁入), tribute title (贡号).',
    'Ming–Qing: Li Shizhen (李时珍), peel and leaves (皮叶).',
  ],
  note: 'Mandarin never appears as a token in the four prehistoric records, so that era has no model. The modern row is all generic words.',
};

const placesRead = {
  how: 'Rows are eras. Columns, left to right: Chu, Huainan, Dongting, Wenzhou, Wu, Quzhou, Guangdong, Fujian, Sichuan, Jiangxi, Japan, Europe & US, trade ports. Each cell is that region’s share of the era’s place mentions.',
  points: [
    'Chu holds 17 of 30 mentions in Pre-Qin.',
    'Wenzhou takes over from Wei–Jin on and peaks at 26 mentions in Song–Yuan.',
    'Fujian and Guangdong grow in Ming–Qing; Europe & US and trade ports appear in modern records.',
  ],
};

const themes = [
  { name: 'Virtue', words: '德 君子 忠 颂 离骚 屈原 嘉树 独立 志' },
  { name: 'Tribute', words: '贡 赐 御 皇 瑞 进贡 宫 殿 上林' },
  { name: 'Medicine', words: '陈皮 药 医 治 疗 本草 理气 化痰 止咳 脾 肺 燥湿 李时珍' },
];

const themesRead = {
  how: 'Each bar splits one era’s hits across three hand-built keyword dictionaries:',
  points: [
    'Virtue words are 77% of Pre-Qin hits.',
    'Tribute peaks at 65% in Sui–Tang and stays at 57% in Song–Yuan.',
    'Medicine jumps to 84% in Ming–Qing, 128 of 152 hits.',
    'Virtue climbs back to 36% in modern records.',
  ],
  note: 'The chart title in my notebook says LDA. I tried an LDA topic model first and dropped it, so these bars show where my themes appear, not topics the data found on its own.',
};

const phases = [
  {
    id: 'moral-mirror',
    eras: 'Pre-Qin & Qin–Han',
    tag: 'Personification',
    title: 'A moral mirror',
    reading:
      'I expected virtue (德) to lead the Pre-Qin word cloud. *JiangPu* (江浦), the riverbanks of Chu, came first. Back in the passages, the moral image is tied to place: the tree is “commanded not to move” in Qu Yuan’s poem, and Yanzi says that planted north of the Huai the Mandarin turns into the bitter trifoliate orange (枳). By Qin–Han the picture is already mixed: the *Records of the Grand Historian* (史记) counts a thousand Mandarin trees as wealth equal to a marquis.',
    evidence: [
      [
        'Word cloud',
        '*JiangPu* (江浦), loyalty (忠贞), and receiving the mandate (受命) lead Pre-Qin. Qin–Han turns to the *Records of the Grand Historian*, a marquis of a thousand households (千户侯), and regional economy (区域经济).',
      ],
      ['Network', 'The Pre-Qin culture node gathers loyalty (忠贞), moral character (品德), fine tree (嘉树), and Qu Yuan’s poem itself.'],
      ['Word2Vec', 'Place of origin (产地) and *YanLing* (延陵) sit next to Mandarin in Pre-Qin; the Han River (汉水) legend of *JiaoFu* (交甫) does in Qin–Han.'],
      ['Places', 'Chu accounts for 17 of 30 place mentions in Pre-Qin records.'],
      ['Themes', 'Virtue words are 77% of Pre-Qin theme hits and fall to 29% in Qin–Han.'],
    ],
    charts: [
      { src: 'tfidf-preqin', caption: 'Pre-Qin TF-IDF top 20' },
      { src: 'network-preqin', caption: 'Pre-Qin keyword network' },
    ],
  },
  {
    id: 'political-token',
    eras: 'Sui–Tang & Song–Yuan',
    tag: 'Institutionalization',
    title: 'A political token',
    reading:
      'The Mandarin moves into court and tax records. Twin fruit on one stem was read as an auspicious sign, and Wenzhou Mandarins became tribute. In 1178 Han Yanzhi wrote the *Monograph of the Oranges of Wenchou* (橘录), a whole book on Wenzhou varieties, cultivation, and storage.',
    evidence: [
      [
        'Word cloud',
        'Sui–Tang ranks local tribute (土贡), tribute goods (贡品), and auspicious omen (瑞应) high. Song–Yuan opens with tribute goods, *HaiHong* (海红), a Wenzhou variety known today as Ougan, and Wenzhou itself.',
      ],
      ['Network', 'The Song–Yuan network links the *Monograph* (橘录), Wenzhou tribute Mandarins, and grafting.'],
      [
        'Word2Vec',
        'Neighbors of Mandarin include *YiDi* (一蒂), twin fruit on one stem, in Sui–Tang, then Yongjia County (永嘉县), annual revenue (岁入), and tribute title (贡号) in Song–Yuan.',
      ],
      ['Places', 'Wenzhou rises from 0 Pre-Qin mentions to 26 in Song–Yuan, half of that era’s total.'],
      ['Themes', 'Tribute words reach 65% of Sui–Tang theme hits, their highest share in any era, and stay at 57% in Song–Yuan.'],
    ],
    charts: [
      { src: 'network-songyuan', caption: 'Song–Yuan keyword network' },
      { src: 'geography-heatmap', caption: 'Region shares by era' },
    ],
  },
  {
    id: 'practical-resource',
    eras: 'Ming–Qing & Modern',
    tag: 'Medicine and commodity',
    title: 'A practical resource',
    reading:
      'Li Shizhen’s *Compendium of Materia Medica* (本草纲目) describes the fruit part by part: peel, pith, seeds, leaves. Writing shifts from what the Mandarin means to what it does, and Fujian and Guangdong gain ground as growing regions. In modern records it becomes a product that is traded and lab-tested, though the old symbolism has not gone away.',
    evidence: [
      [
        'Word cloud',
        'Chenpi (陈皮) weighs 7.38 in Ming–Qing, the heaviest term in any era, ahead of qingpi (青皮), prescriptions (方剂), and medicine-food homology (药食同源). Modern records add antioxidant (抗氧化), flavonoids (黄酮), and export (出口).',
      ],
      ['Network', 'The Ming–Qing medicine node carries chenpi, qingpi, prescriptions, medicinal properties (药性), and external treatment (外治法).'],
      ['Word2Vec', 'Li Shizhen (李时珍) and peel and leaves (皮叶) are among the closest neighbors of Mandarin in Ming–Qing.'],
      ['Places', 'Fujian rises to 5 mentions and Guangdong to 3 in Ming–Qing; modern records add Europe & US (6) and trade ports (4).'],
      ['Themes', 'Medicine words are 84% of Ming–Qing theme hits. In modern records virtue words climb back to 36%, and auspicious (吉祥) leads the modern word cloud.'],
    ],
    charts: [
      { src: 'tfidf-mingqing', caption: 'Ming–Qing TF-IDF top 20' },
      { src: 'wordcloud-modern', caption: 'Modern word cloud' },
    ],
  },
];

const insights = [
  {
    kicker: 'Disenchantment',
    title: 'The descent from the altar',
    lead: 'Every method points to the same long trend: over 3,000 years the Mandarin loses its aura.',
    points: [
      'In Pre-Qin it is sacred, Qu Yuan’s emblem of moral character. Virtue words are 77% of theme hits.',
      'Under the Tang and Song it turns political, an imperial omen and a tribute good. Tribute words peak at 65%.',
      'By Ming–Qing it is material, taken apart into peel, pith, and other drugs. Medicine words reach 84%.',
    ],
    conclusion: 'In the report we read this arc as a small version of a wider shift in Chinese culture, from elite ideals to everyday use.',
    charts: [{ src: 'theme-shares', caption: 'Theme shares by era' }],
  },
  {
    kicker: 'Re-contextualization',
    title: 'Meaning follows context',
    lead: 'Grouped by category, the corpus splits three ways: culture settles on auspicious (吉祥), medicine on chenpi (陈皮), economy on spread (传播) and export (出口).',
    points: ['In the *Songs of the South*, the Mandarin is a gentleman.', 'In the *Compendium of Materia Medica*, it is a drug.', 'In modern trade papers, it is an export.'],
    conclusion: 'The symbol lasts because each new setting finds a use for it.',
    charts: [
      { src: 'category-culture-tfidf', caption: 'Culture and symbolism' },
      { src: 'category-medicine-tfidf', caption: 'Medicine and practical use' },
      { src: 'category-economy-tfidf', caption: 'Economy and trade' },
    ],
  },
  {
    kicker: 'Distant reading',
    title: 'Reading all 470 records at once',
    lead: 'Humanities research is good at close reading. Reading every record together made both shifts below visible.',
    points: [
      'Eight separately trained Word2Vec models show Mandarin’s neighbors drifting from places and legends (产地, 汉水) to tribute titles (贡号) to Li Shizhen and peel (皮叶).',
      'Theme counts date the medical turn: medicine words stay at 5 hits or fewer per era until Ming–Qing, then jump to 128.',
    ],
    conclusion: 'Each claim about the Mandarin’s history now has a count behind it that anyone can check.',
    charts: [{ src: 'word2vec-neighbors', caption: 'Word2Vec neighbors by era' }],
  },
];

const limits = [
  'The corpus is small and uneven: 4 prehistoric records against 118 from Ming–Qing.',
  'Famous lines repeat. The opening of *In Praise of the Orange-Tree* appears in five records, which lifts its words in the Pre-Qin rankings.',
  'Fusing annotations helps Jieba but also carries our own reading into the data, along with glued tokens like 服兮橘.',
  'Per-era Word2Vec models on a few dozen records are noisy. I used neighbors as pointers to passages, not as proof.',
];

const team: { name: string; role: string; duties?: string[] }[] = [
  {
    name: 'Lu Zhengping',
    role: 'Project lead',
    duties: [
      'Designed the corpus schema and drew the category themes',
      'Led raw-record collection, source review, and literature synthesis',
      'Proofread and relabeled the whole corpus',
      'Ran all of the NLP analysis',
      'Built the research website and presented the project',
    ],
  },
  { name: 'Yang Yuqing', role: 'Collected and labeled raw records; academic report, source review, and literature synthesis.' },
  { name: 'Ba Yuxin', role: 'Collected raw records; literature synthesis.' },
  { name: 'Yang Yulai', role: 'Collected raw records; source review.' },
];

const outputs = [
  { title: 'Final report', detail: '17-page research paper', href: '/cbs5504/final-report.pdf', action: 'Read PDF' },
  { title: 'Final presentation', detail: '28 slides', href: '/cbs5504/final-presentation.pdf', action: 'View slides' },
  { title: 'Research website', detail: 'Interactive timeline of eight eras', href: SITE_URL, action: 'Visit site' },
];

function useTranslate() {
  const { isCN } = useLanguage();
  return (value: string) => (isCN ? (mandarinTranslations[value] ?? value) : value);
}

function Rich({ text }: { text: string }) {
  const t = useTranslate();
  return (
    <>
      {t(text)
        .split(/\*([^*]+)\*/)
        .map((part, index) => (index % 2 ? <em key={index}>{part}</em> : part))}
    </>
  );
}

function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.58, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ children, id, intro, label, group }: { children: ReactNode; id?: string; intro?: string; label?: string; group?: string }) {
  const { isCN } = useLanguage();
  const navGroup = group && isCN ? (mandarinTranslations[group] ?? group) : group;

  return (
    <div className="mb-8 md:mb-10">
      {label && <p className="mb-4 text-sm font-medium text-[var(--mo-accent)]">{label}</p>}
      <h2 id={id} data-nav-group={navGroup} className="text-balance text-[clamp(2.1rem,4.4vw,4.4rem)] font-medium leading-[0.98] tracking-[-0.045em] text-[var(--mo-text)]">
        {children}
      </h2>
      {intro && (
        <p className="mt-5 text-pretty text-base leading-7 text-[var(--mo-muted)] md:text-lg md:leading-8">
          <Rich text={intro} />
        </p>
      )}
    </div>
  );
}

function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-2xl border border-[var(--mo-line)] bg-[var(--mo-surface)] p-6 md:p-8 ${className}`}>{children}</div>;
}

function CardTitle({ children }: { children: ReactNode }) {
  return <p className="mb-5 text-sm font-medium text-[var(--mo-accent)]">{children}</p>;
}

function Bullets({ items, className = '' }: { items: string[]; className?: string }) {
  return (
    <ul className={`space-y-2.5 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-pretty text-sm leading-6">
          <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--mo-accent)]" aria-hidden="true" />
          <span>
            <Rich text={item} />
          </span>
        </li>
      ))}
    </ul>
  );
}

function Token({ children, kind }: { children: ReactNode; kind?: 'signal' | 'glued' }) {
  const style =
    kind === 'signal'
      ? 'border-[var(--mo-accent)] bg-[var(--mo-accent-soft)] text-[var(--mo-text)]'
      : kind === 'glued'
        ? 'border-dashed border-[#b9a593] text-[var(--mo-muted)]'
        : 'border-[var(--mo-line)] bg-white text-[var(--mo-muted)]';

  return <span className={`inline-flex rounded-lg border px-2.5 py-1 text-[0.95rem] ${style}`}>{children}</span>;
}

function ZoomLink({ src, children }: { src: string; children: ReactNode }) {
  return (
    <a href={src} target="_blank" rel="noopener noreferrer" className="block cursor-zoom-in">
      {children}
    </a>
  );
}

function ColabFigure({ src, alt, caption, className = '' }: { src: string; alt: string; caption?: string; className?: string }) {
  return (
    <figure className={`overflow-hidden rounded-2xl border border-[var(--mo-line)] bg-white ${className}`}>
      <ZoomLink src={src}>
        <img src={src} alt={alt} loading="lazy" decoding="async" className="mx-auto block w-full" />
      </ZoomLink>
      {caption && (
        <figcaption className="border-t border-[var(--mo-line)] bg-[var(--mo-surface)] px-5 py-4 text-pretty text-sm leading-6 text-[var(--mo-muted)] md:px-6">
          <Rich text={caption} />
        </figcaption>
      )}
    </figure>
  );
}

function Thumb({ src, caption }: { src: string; caption: string }) {
  const t = useTranslate();
  const href = `${COLAB}/${src}.webp`;

  return (
    <figure className="overflow-hidden rounded-xl border border-[var(--mo-line)] bg-white">
      <ZoomLink src={href}>
        <img src={href} alt={t(caption)} loading="lazy" decoding="async" className="block aspect-[3/2] w-full object-contain p-1.5" />
      </ZoomLink>
      <figcaption className="border-t border-[var(--mo-line)] bg-[var(--mo-surface)] px-3 py-2 text-xs text-[var(--mo-muted)]">{t(caption)}</figcaption>
    </figure>
  );
}

function SideFigure({ src, alt, read, children }: { src: string; alt: string; read: { how: string; points: string[]; note?: string }; children?: ReactNode }) {
  const t = useTranslate();
  return (
    <div className="grid items-start gap-5 lg:grid-cols-12">
      <ColabFigure className="lg:col-span-7" src={src} alt={alt} />
      <Card className="lg:col-span-5">
        <CardTitle>{t('How to read it')}</CardTitle>
        <p className="text-pretty text-sm leading-6 text-[var(--mo-muted)]">
          <Rich text={read.how} />
        </p>
        {children}
        <Bullets items={read.points} className="mt-4" />
        {read.note && (
          <p className="mt-5 border-t border-[var(--mo-line)] pt-4 text-pretty text-sm leading-6 text-[var(--mo-muted)]">
            <Rich text={read.note} />
          </p>
        )}
      </Card>
    </div>
  );
}

function Tabs({
  label,
  items,
  active,
  onChange,
  className = '',
}: {
  label: string;
  items: { id: string; label: string }[];
  active: string;
  onChange: (id: string) => void;
  className?: string;
}) {
  const t = useTranslate();

  return (
    <div role="tablist" aria-label={t(label)} className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((item) => {
        const selected = item.id === active;
        return (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={selected}
            onClick={() => onChange(item.id)}
            className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
              selected
                ? 'border-[var(--mo-accent)] bg-[var(--mo-accent)] text-white'
                : 'border-[var(--mo-line)] bg-white text-[var(--mo-muted)] hover:border-[var(--mo-accent)] hover:text-[var(--mo-text)]'
            }`}
          >
            {t(item.label)}
          </button>
        );
      })}
    </div>
  );
}

function EraGallery() {
  const t = useTranslate();
  const { isCN } = useLanguage();
  const [view, setView] = useState(eraViews[0].id);
  const viewLabel = eraViews.find((item) => item.id === view)?.label ?? '';

  return (
    <>
      <Tabs label="Choose a chart" items={eraViews} active={view} onChange={setView} className="mb-5" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {eras.map((item, index) => (
          <figure key={item.file} className="flex flex-col overflow-hidden rounded-2xl border border-[var(--mo-line)] bg-[var(--mo-surface)]">
            <figcaption className="flex items-start justify-between gap-3 px-5 pb-3.5 pt-4">
              <span>
                <span className="flex items-baseline gap-2.5">
                  <span className="text-sm tabular-nums text-[var(--mo-accent)]">0{index + 1}</span>
                  <span className="text-xl font-medium leading-tight tracking-[-0.02em]">{t(item.era)}</span>
                </span>
                <span className="mt-1 block text-sm text-[var(--mo-muted)]">
                  {!isCN && `${item.zh} · `}
                  {t(item.period)}
                </span>
              </span>
              <span className="flex-shrink-0 pt-1 text-sm tabular-nums text-[var(--mo-muted)]">
                {item.count} {t('records')}
              </span>
            </figcaption>
            <div className="mt-auto">
              <ZoomLink src={`${COLAB}/${view}-${item.file}.webp`}>
                <img
                  src={`${COLAB}/${view}-${item.file}.webp`}
                  alt={`${t(viewLabel)} · ${t(item.era)}`}
                  loading="lazy"
                  decoding="async"
                  className="block aspect-[3/2] w-full border-t border-[var(--mo-line)] bg-white object-contain p-2"
                />
              </ZoomLink>
            </div>
          </figure>
        ))}
      </div>
    </>
  );
}

function CategoryExplorer() {
  const t = useTranslate();
  const [active, setActive] = useState(categories[0].file);
  const current = categories.find((item) => item.file === active) ?? categories[0];

  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--mo-line)] bg-[var(--mo-surface)]">
      <div className="border-b border-[var(--mo-line)] p-4">
        <Tabs label="Choose a category" items={categories.map((item) => ({ id: item.file, label: item.name }))} active={active} onChange={setActive} />
      </div>
      <p className="px-5 pt-4 text-sm text-[var(--mo-muted)] md:px-6">
        {current.count} {t('records ·')} {t(current.measure)}
      </p>
      <div className="grid gap-4 p-4 md:grid-cols-2 md:p-5">
        <ZoomLink src={`${COLAB}/category-${current.file}-${current.chart}.webp`}>
          <img
            src={`${COLAB}/category-${current.file}-${current.chart}.webp`}
            alt={`${t(current.name)} · ${t('Top 20 terms')}`}
            loading="lazy"
            decoding="async"
            className="block aspect-[5/3] w-full rounded-xl border border-[var(--mo-line)] bg-white object-contain p-2"
          />
        </ZoomLink>
        <ZoomLink src={`${COLAB}/category-${current.file}-cloud.webp`}>
          <img
            src={`${COLAB}/category-${current.file}-cloud.webp`}
            alt={`${t(current.name)} · ${t('Word cloud')}`}
            loading="lazy"
            decoding="async"
            className="block aspect-[5/3] w-full rounded-xl border border-[var(--mo-line)] bg-white object-contain p-2"
          />
        </ZoomLink>
      </div>
    </div>
  );
}

function NetworkExplorer() {
  const t = useTranslate();
  const [active, setActive] = useState(eras[1].file);
  const current = eras.find((item) => item.file === active) ?? eras[1];

  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--mo-line)] bg-white">
      <div className="border-b border-[var(--mo-line)] bg-[var(--mo-surface)] p-4">
        <Tabs label="Choose an era" items={eras.map((item) => ({ id: item.file, label: item.era }))} active={active} onChange={setActive} />
      </div>
      <ZoomLink src={`${COLAB}/network-${current.file}.webp`}>
        <img
          key={current.file}
          src={`${COLAB}/network-${current.file}.webp`}
          alt={`${t('Keyword network, centered on Mandarin')} · ${t(current.era)}`}
          loading="lazy"
          decoding="async"
          className="mx-auto block w-full max-w-[52rem]"
        />
      </ZoomLink>
      <ul className="flex flex-wrap gap-x-6 gap-y-2 border-t border-[var(--mo-line)] bg-[var(--mo-surface)] px-6 py-4">
        {networkLegend.map((item) => (
          <li key={item.name} className="flex items-center gap-2 text-sm">
            <span className="h-3 w-3 flex-shrink-0 rounded-full" style={{ backgroundColor: item.color }} aria-hidden="true" />
            <span>{t(item.name)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CBS5504Mandarin() {
  const reduceMotion = useReducedMotion();
  const { isCN } = useLanguage();
  const t = useTranslate();
  const keepWords = isCN ? '' : '[word-break:keep-all]';
  const th = 'pb-2.5 pr-4 text-left text-xs font-medium uppercase tracking-[0.08em] text-[var(--mo-muted)]';
  const td = 'py-2.5 pr-4 align-top';

  return (
    <LocalizedContent translations={mandarinTranslations}>
      <article
        className="relative overflow-hidden bg-[var(--mo-bg)] text-[var(--mo-text)]"
        style={
          {
            '--mo-bg': '#f7f4ef',
            '--mo-surface': '#fffdf9',
            '--mo-text': '#241c17',
            '--mo-muted': '#68584f',
            '--mo-accent': '#a94f20',
            '--mo-accent-soft': '#f3e6da',
            '--mo-line': '#e4d9cc',
          } as CSSProperties
        }
      >
        <section className="relative isolate overflow-hidden bg-[#17130f] text-white">
          <img src="/cbs5504/mandarin-cover.webp" alt="Mandarin trees in a mountain orchard" className="absolute inset-0 h-full w-full object-cover opacity-60" />
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
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,14,9,0.94)_0%,rgba(20,14,9,0.72)_50%,rgba(20,14,9,0.2)_100%)]" />

          <div className="relative z-10 mx-auto flex min-h-[78dvh] w-full max-w-[1320px] flex-col px-5 py-10 sm:px-8 md:py-14 lg:px-12">
            <Link
              to="/work"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/75 transition-colors hover:border-white/50 hover:text-white"
            >
              <ArrowLeft size={16} strokeWidth={1.7} />
              All projects
            </Link>

            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.68, ease: [0.16, 1, 0.3, 1] }} className="mt-auto pt-24">
              <p className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium tracking-[0.04em] text-[#f3a36d]">
                <MainLineTag slug={SLUG} />
                <span aria-hidden="true">·</span>
                <span>PolyU MSc · CBS5504</span>
              </p>
              <h1 className="text-[clamp(3.6rem,9vw,8rem)] font-medium leading-[0.86] tracking-[-0.065em]">Mandarin</h1>
              <p className="mt-5 text-[clamp(1.4rem,3vw,2.6rem)] leading-[1.06] tracking-[-0.035em] text-white/92">A semantic evolution spanning three thousand years</p>
              <p className="mt-7 text-pretty text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
                I led a four-person digital humanities project and built its NLP analysis and website, tracing how 470 Chinese texts describe the Mandarin over 3,000 years.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="relative mx-auto w-full max-w-[1320px] px-5 pb-24 sm:px-8 md:pb-32 lg:px-12">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-6 border-b border-[var(--mo-line)] py-8 md:grid-cols-3 lg:grid-cols-5">
            {metadata.map((item, index) => (
              <div key={item.label} className={index === 0 ? 'col-span-2 md:col-span-1' : ''}>
                <dt className="mb-1.5 text-sm font-medium text-[var(--mo-accent)]">{item.label}</dt>
                <dd className="text-sm leading-6 text-[var(--mo-muted)]">{item.value}</dd>
              </div>
            ))}
          </dl>

          <section className="pt-16 md:pt-24">
            <Reveal>
              <SectionHeading id="abstract">Abstract</SectionHeading>
            </Reveal>
            <Reveal>
              <Card>
                <p className={`text-pretty text-lg leading-8 md:text-xl md:leading-9 ${keepWords}`}>{abstract}</p>
                <p className="mt-6 border-t border-[var(--mo-line)] pt-5 text-sm leading-6 text-[var(--mo-muted)]">
                  <span className="font-medium text-[var(--mo-accent)]">Keywords</span> · {keywords}
                </p>
              </Card>
            </Reveal>
          </section>

          <section className="pt-16 md:pt-24">
            <Reveal>
              <SectionHeading id="question" label="The question">
                How does one fruit pick up new meanings over 3,000 years?
              </SectionHeading>
            </Reveal>
            <Reveal className="rounded-2xl bg-[var(--mo-accent)] p-7 text-[#fdf3ea] md:p-9">
              <p className="text-pretty text-[clamp(1.5rem,2.7vw,2.4rem)] font-medium leading-[1.12] tracking-[-0.03em]">
                Studies of the Mandarin usually stay inside one field: poetry, farming, medicine, or trade. We read all of them as one record and asked whether the shifts show up
                in the words.
              </p>
            </Reveal>
            <Reveal className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {fields.map((field) => (
                <Card key={field.title} className="!p-6">
                  <p className="font-medium">{field.title}</p>
                  <p className="mt-2 text-pretty text-sm leading-6 text-[var(--mo-muted)]">
                    <Rich text={field.copy} />
                  </p>
                </Card>
              ))}
            </Reveal>
            <p className="mt-5 text-pretty text-sm leading-6 text-[var(--mo-muted)]">
              Three gaps follow. The fields rarely meet, most studies cover one golden age rather than the long run, and conclusions rest on close reading with no counts behind
              them.
            </p>
          </section>

          <section className="pt-16 md:pt-24">
            <Reveal>
              <SectionHeading
                id="collection"
                label={dataLabel}
                group={dataLabel}
                intro="Classical passages were collected from the Chinese Text Project (Ctext); modern papers and references came from CNKI. Every record keeps its quotation and source, so any chart can be traced back to a passage."
              >
                470 records across eight eras
              </SectionHeading>
            </Reveal>
            <Reveal className="grid gap-5 lg:grid-cols-12">
              <Card className="lg:col-span-5">
                <CardTitle>Where the records come from</CardTitle>
                <ul className="divide-y divide-[var(--mo-line)]">
                  {sourceTypes.map((item) => (
                    <li key={item.title} className="py-4 first:pt-0 last:pb-0">
                      <p className="font-medium">{item.title}</p>
                      <p className="mt-1 text-sm leading-6 text-[var(--mo-muted)]">
                        <Rich text={item.source} /> · {item.use}
                      </p>
                    </li>
                  ))}
                </ul>
              </Card>
              <ColabFigure
                className="self-start lg:col-span-7"
                src={`${COLAB}/era-distribution.webp`}
                alt="Bar chart of records per era, from Prehistoric to Modern"
                caption="Records per era, from my notebook. Ming–Qing (118) and Modern (102) carry the most; Prehistoric has only 4."
              />
            </Reveal>
          </section>

          <section className="pt-16 md:pt-24">
            <Reveal>
              <SectionHeading
                id="dictionary"
                group={dataLabel}
                intro="We agreed on the fields before collecting anything, so four people could fill one table. Two of them, Category and Era, needed rules of their own."
              >
                A data dictionary first
              </SectionHeading>
            </Reveal>
            <Reveal>
              <Card className="overflow-x-auto">
                <table className="w-full min-w-[52rem] text-sm">
                  <thead>
                    <tr className="border-b border-[var(--mo-line)]">
                      <th className={th}>Field</th>
                      <th className={th}>Original header</th>
                      <th className={th}>What it holds</th>
                      <th className={th}>Example · record A328</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--mo-line)]">
                    {dictionary.map((row) => (
                      <tr key={row.field}>
                        <td className={`${td} whitespace-nowrap font-mono text-[0.8rem]`}>{row.field}</td>
                        <td className={`${td} whitespace-nowrap text-[var(--mo-muted)]`}>{row.header}</td>
                        <td className={`${td} text-[var(--mo-muted)]`}>{row.holds}</td>
                        <td className={`${td} !pr-0`}>
                          {row.example}
                          {row.gloss && !isCN && (
                            <span className="ml-2 text-[var(--mo-muted)]">
                              <Rich text={row.gloss} />
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>
            </Reveal>

            <Reveal className="mt-5 grid gap-5 lg:grid-cols-2">
              <Card className="overflow-x-auto">
                <CardTitle>Category: five labels, assigned by hand</CardTitle>
                <p className="text-pretty text-sm leading-6 text-[var(--mo-muted)]">
                  No model picked these. From the first batch of records I drew four themes, practical use, commerce, medicine, and culture, and kept time and place as separate
                  axes. All four of us labeled records as we collected them, which left the raw table with 169 free-form labels that mixed themes with genres, such as literature
                  (文学) and literature/poetry (文学/诗歌). I then went through every record myself and collapsed them into five, with geography and physical form as labels of their own.
                </p>
                <table className="mt-5 w-full text-sm">
                  <thead>
                    <tr className="border-b border-[var(--mo-line)]">
                      <th className={th}>Label</th>
                      <th className={th}>Covers</th>
                      <th className={`${th} !pr-0 text-right`}>Records</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--mo-line)]">
                    {categoryLabels.map((row) => (
                      <tr key={row.name}>
                        <td className={td}>
                          <span className="block">{t(row.name)}</span>
                          {!isCN && <span className="block text-xs text-[var(--mo-muted)]">{row.zh}</span>}
                        </td>
                        <td className={`${td} text-[var(--mo-muted)]`}>{t(row.covers)}</td>
                        <td className={`${td} !pr-0 text-right tabular-nums`}>{row.count}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>
              <Card className="overflow-x-auto">
                <CardTitle>Era: eight periods, by rule</CardTitle>
                <p className="text-pretty text-sm leading-6 text-[var(--mo-muted)]">
                  A regular expression maps each dynasty label to an era: any label containing one of the listed characters goes there, so Warring States (战国) lands in Pre-Qin.
                </p>
                <table className="mt-5 w-full text-sm">
                  <thead>
                    <tr className="border-b border-[var(--mo-line)]">
                      <th className={th}>Era</th>
                      <th className={th}>Years</th>
                      <th className={th}>Matches</th>
                      <th className={`${th} !pr-0 text-right`}>Records</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--mo-line)]">
                    {eras.map((row) => (
                      <tr key={row.file}>
                        <td className={`${td} whitespace-nowrap`}>{t(row.era)}</td>
                        <td className={`${td} text-[var(--mo-muted)] sm:whitespace-nowrap`}>{t(row.period)}</td>
                        <td className={`${td} tracking-[0.04em]`}>
                          {row.pattern.split(' ').map((token) => (
                            <span key={token} className="mr-[0.5em] inline-block whitespace-nowrap last:mr-0">
                              {token}
                            </span>
                          ))}
                        </td>
                        <td className={`${td} !pr-0 text-right tabular-nums`}>{row.count}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>
            </Reveal>
          </section>

          <section className="pt-16 md:pt-24">
            <Reveal>
              <SectionHeading id="cleaning" group={dataLabel} intro="Every file in the pipeline is linked; click a file name to open it.">
                From raw table to clean corpus
              </SectionHeading>
            </Reveal>
            <Reveal>
              <Card>
                <ol className="divide-y divide-[var(--mo-line)]">
                  {pipeline.map((step, index) => (
                    <li key={step.title} className="grid gap-2 py-4 first:pt-0 last:pb-0 md:grid-cols-[2rem_18rem_1fr] md:gap-5">
                      <span className="text-sm tabular-nums text-[var(--mo-accent)]">0{index + 1}</span>
                      <div>
                        <p className="font-medium">{step.title}</p>
                        {step.file && (
                          <a
                            href={`${DATA}/${step.file}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1.5 inline-flex max-w-full items-center gap-1.5 rounded bg-[var(--mo-accent-soft)] px-1.5 py-0.5 font-mono text-xs text-[var(--mo-text)] underline-offset-2 hover:underline"
                          >
                            <Download size={12} strokeWidth={1.8} aria-hidden="true" className="flex-shrink-0" />
                            <span className="truncate">{step.file}</span>
                          </a>
                        )}
                        {step.rows && <span className="mt-1 block text-xs text-[var(--mo-muted)]">{t(step.rows)}</span>}
                      </div>
                      <p className="text-pretty text-sm leading-6 text-[var(--mo-muted)]">
                        <Rich text={step.copy} />
                      </p>
                    </li>
                  ))}
                </ol>
              </Card>
            </Reveal>
          </section>

          <section className="pt-16 md:pt-24">
            <Reveal>
              <SectionHeading
                id="wordclouds"
                label={analysisLabel}
                group={analysisLabel}
                intro="I cut the corpus by era first and read each era on its own. Within an era every record is a document; I dropped the Mandarin's own names and function words, summed each term's TF-IDF weight, and drew the cloud and the top-20 ranking from those weights."
              >
                A word cloud for each era
              </SectionHeading>
            </Reveal>
            <Reveal>
              <EraGallery />
            </Reveal>
            <p className="mt-5 text-pretty text-sm leading-6 text-[var(--mo-muted)]">
              Charts as they came out of my Colab notebook; click any chart to open it at full size. Generic words such as 记载 (recorded) and era names such as 唐宋 still rank
              high in some eras; I read past them rather than tune the stopword list for each chart.
            </p>
          </section>

          <section className="pt-16 md:pt-24">
            <Reveal>
              <SectionHeading id="categories" group={analysisLabel} intro="Only after the era pass did I pool records by their five category labels and rank terms inside each.">
                Then grouped by category
              </SectionHeading>
            </Reveal>
            <Reveal>
              <CategoryExplorer />
            </Reveal>
            <p className="mt-5 text-pretty text-sm leading-6 text-[var(--mo-muted)]">
              This view set the research direction. Culture and symbolism came out rich and complete; the other four labels were thin and patchy. So culture became the main thread,
              and the other four serve as evidence at its turning points.
            </p>
          </section>

          <section className="pt-16 md:pt-24">
            <Reveal>
              <SectionHeading
                id="word2vec"
                group={analysisLabel}
                intro="I trained a separate Skip-gram model for each era and listed the five words closest to Mandarin. This is the one method that needed Jieba, and Jieba needed help."
              >
                Word2Vec: what sits next to Mandarin
              </SectionHeading>
            </Reveal>
            <Reveal className="grid gap-5 md:grid-cols-12">
              <Card className="md:col-span-4">
                <CardTitle>Jieba on the original line</CardTitle>
                <div className="flex flex-wrap gap-2">
                  {textOnlyTokens.map((token) => (
                    <Token key={token}>{token}</Token>
                  ))}
                </div>
                <p className="mt-5 text-pretty text-sm leading-6 text-[var(--mo-muted)]">
                  Jieba is trained on modern Chinese, so it cuts classical lines into fragments. Three tokens, none of them a word.
                </p>
              </Card>
              <Card className="md:col-span-8">
                <CardTitle>Jieba on the fused record</CardTitle>
                <div className="flex flex-wrap gap-2">
                  {fusedTokens.map((item, index) => (
                    <Token key={`${item.token}-${index}`} kind={item.kind}>
                      {item.token}
                    </Token>
                  ))}
                </div>
                <p className="mt-5 text-pretty text-sm leading-6 text-[var(--mo-muted)]">
                  Adding the description, keywords, and symbolism gives the model words it can use: loyalty (忠贞), gentleman (君子), moral character (品德). Dashed tokens are
                  fields glued together after punctuation was stripped, a cost of the fusion step.
                </p>
              </Card>
            </Reveal>

            <Reveal className="mt-5 grid gap-5 lg:grid-cols-12">
              <figure className="overflow-hidden rounded-2xl bg-[#201a16] lg:col-span-7">
                <figcaption className="border-b border-white/10 px-6 py-4 text-sm text-white/60">Tokenizer and model settings, from my Colab notebook</figcaption>
                <pre className="overflow-x-auto p-6 text-[0.8rem] leading-6 text-[#f3e6da]">
                  <code>{tokenizerCode}</code>
                </pre>
              </figure>
              <Card className="lg:col-span-5">
                <CardTitle>One word instead of four</CardTitle>
                <p className="text-pretty text-sm leading-6 text-[var(--mo-muted)]">
                  <Rich text="Mapping *Ju* (桔), *Gan* (柑), *Cheng* (橙), and *You* (柚) to a single Mandarin token lets a small corpus train one word instead of four. It also erases the line between Mandarin, sweet orange, and pomelo, which a citrus historian would want kept." />
                </p>
              </Card>
            </Reveal>

            <Reveal className="mt-5">
              <SideFigure src={`${COLAB}/word2vec-neighbors.webp`} alt="Five nearest neighbors of Mandarin in each era's Word2Vec model" read={word2vecRead} />
            </Reveal>
          </section>

          <section className="pt-16 md:pt-24">
            <Reveal>
              <SectionHeading
                id="networks"
                group={analysisLabel}
                intro="For each era, Mandarin sits at the center and links to the five categories; each category links to its eight most frequent terms from Keyword and Symbolism."
              >
                A keyword network for each era
              </SectionHeading>
            </Reveal>
            <Reveal>
              <NetworkExplorer />
            </Reveal>
            <p className="mt-5 text-pretty text-sm leading-6 text-[var(--mo-muted)]">
              Built with NetworkX. The legend inside each chart is in Chinese; the row under it gives the same five colors in English.
            </p>
          </section>

          <section className="pt-16 md:pt-24">
            <Reveal>
              <SectionHeading id="places" group={analysisLabel} intro="Place names matched against a gazetteer I wrote, counted per era over the fused records.">
                Where the Mandarin is written about
              </SectionHeading>
            </Reveal>
            <Reveal>
              <SideFigure src={`${COLAB}/geography-heatmap.webp`} alt="Heatmap of region shares by era" read={placesRead} />
            </Reveal>
          </section>

          <section className="pt-16 md:pt-24">
            <Reveal>
              <SectionHeading id="themes" group={analysisLabel} intro="Keywords matched against three theme dictionaries, as a share of each era's hits.">
                Theme words by era
              </SectionHeading>
            </Reveal>
            <Reveal>
              <SideFigure src={`${COLAB}/theme-shares.webp`} alt="Stacked bars of virtue, tribute, and medicine word shares by era" read={themesRead}>
                <ul className="mt-3 space-y-1 text-sm leading-6">
                  {themes.map((theme) => (
                    <li key={theme.name}>
                      <span className="font-medium">{t(theme.name)}</span> <span className="text-[var(--mo-muted)]">{theme.words}</span>
                    </li>
                  ))}
                </ul>
              </SideFigure>
            </Reveal>
          </section>

          <section className="pt-16 md:pt-24">
            <Reveal>
              <SectionHeading
                id="phases"
                label={insightsLabel}
                group={insightsLabel}
                intro="I counted a phase only when several methods pointed the same way in the same eras, then went back to the passages to read why."
              >
                Three phases, read across methods
              </SectionHeading>
            </Reveal>
            <div className="space-y-12 md:space-y-16">
              {phases.map((phase) => (
                <Reveal key={phase.id} className="grid gap-5 lg:grid-cols-12">
                  <div className="lg:col-span-5">
                    <p className="text-sm font-medium text-[var(--mo-accent)]">
                      {phase.eras} · {phase.tag}
                    </p>
                    <h3 id={phase.id} className="mt-2 text-balance text-[clamp(1.6rem,2.6vw,2.3rem)] font-medium leading-[1.05] tracking-[-0.03em]">
                      {phase.title}
                    </h3>
                    <p className={`mt-4 text-pretty text-base leading-7 text-[var(--mo-muted)] ${keepWords}`}>
                      <Rich text={phase.reading} />
                    </p>
                    <div className="mt-5 grid grid-cols-2 gap-3">
                      {phase.charts.map((chart) => (
                        <Thumb key={chart.src} src={chart.src} caption={chart.caption} />
                      ))}
                    </div>
                  </div>
                  <Card className="self-start lg:col-span-7">
                    <CardTitle>Evidence</CardTitle>
                    <ul className="space-y-4">
                      {phase.evidence.map(([method, copy]) => (
                        <li key={method} className="grid gap-1 sm:grid-cols-[6rem_1fr] sm:gap-4">
                          <span className="text-sm font-medium">{t(method)}</span>
                          <span className={`text-pretty text-sm leading-6 text-[var(--mo-muted)] ${keepWords}`}>
                            <Rich text={copy} />
                          </span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </Reveal>
              ))}
            </div>
          </section>

          <section className="pt-16 md:pt-24">
            <Reveal>
              <SectionHeading id="insights" group={insightsLabel} intro="Read together, the three phases support three claims. Each one sits next to the chart it rests on.">
                From disenchantment to reconstruction
              </SectionHeading>
            </Reveal>
            <div className="space-y-5">
              {insights.map((item) => (
                <Reveal key={item.kicker} className="grid overflow-hidden rounded-2xl border border-[var(--mo-line)] bg-[var(--mo-surface)] lg:grid-cols-12">
                  <div className="flex flex-col lg:col-span-5">
                    <div className="flex-1 p-7 md:p-8">
                      <p className="text-sm font-medium text-[var(--mo-accent)]">{item.kicker}</p>
                      <h3 className="mt-2 text-pretty text-[1.6rem] font-medium leading-[1.1] tracking-[-0.025em]">{item.title}</h3>
                      <p className={`mt-4 text-pretty text-sm leading-6 text-[var(--mo-muted)] ${keepWords}`}>
                        <Rich text={item.lead} />
                      </p>
                      <Bullets items={item.points} className={`mt-5 ${keepWords}`} />
                    </div>
                    <div className="bg-[var(--mo-accent)] px-7 py-6 text-[#fdf3ea] md:px-8">
                      <p className="text-xs font-medium uppercase tracking-[0.1em] text-[#f6dfcc]">Conclusion</p>
                      <p className="mt-2 text-pretty text-base font-medium leading-6">{item.conclusion}</p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center border-t border-[var(--mo-line)] bg-white p-4 md:p-5 lg:col-span-7 lg:border-l lg:border-t-0">
                    {item.charts.length === 1 ? (
                      <ZoomLink src={`${COLAB}/${item.charts[0].src}.webp`}>
                        <img src={`${COLAB}/${item.charts[0].src}.webp`} alt={t(item.charts[0].caption)} loading="lazy" decoding="async" className="mx-auto block w-full" />
                      </ZoomLink>
                    ) : (
                      <div className="grid gap-3 sm:grid-cols-3">
                        {item.charts.map((chart) => (
                          <Thumb key={chart.src} src={chart.src} caption={chart.caption} />
                        ))}
                      </div>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          <section className="pt-16 md:pt-24">
            <Reveal>
              <SectionHeading
                id="website"
                intro="The report closes with a plan to turn the analysis into a public teaching tool. I designed and built that site: a timeline of eight eras, each with its word cloud, a short reading, and the evidence behind it."
              >
                The research website
              </SectionHeading>
            </Reveal>
            <Reveal className="grid gap-5 md:grid-cols-2">
              <img
                src="/cbs5504/site-hero.jpg"
                alt="Research website landing screen with the eight-era timeline"
                loading="lazy"
                decoding="async"
                className="block w-full rounded-2xl border border-[var(--mo-line)]"
              />
              <img
                src="/cbs5504/site-era.jpg"
                alt="Research website Pre-Qin page with a reading, evidence list, and word cloud"
                loading="lazy"
                decoding="async"
                className="block w-full rounded-2xl border border-[var(--mo-line)]"
              />
            </Reveal>
            <Reveal className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-6 text-[var(--mo-muted)]">
                Left: landing screen with the era timeline. Right: the Pre-Qin page, with the TF-IDF word cloud next to the reading.
              </p>
              <a
                href={SITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit flex-shrink-0 items-center gap-2 rounded-full bg-[var(--mo-text)] px-5 py-2.5 text-sm text-white transition-colors hover:bg-[var(--mo-accent)]"
              >
                Visit the website <ArrowUpRight size={16} strokeWidth={1.7} />
              </a>
            </Reveal>
          </section>

          <section className="pt-16 md:pt-24">
            <Reveal>
              <SectionHeading id="limits">What this can't claim</SectionHeading>
            </Reveal>
            <Reveal>
              <Card>
                <ul className="space-y-3">
                  {limits.map((limit) => (
                    <li key={limit} className="flex gap-3 text-pretty leading-7 text-[var(--mo-muted)]">
                      <span className="mt-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--mo-accent)]" aria-hidden="true" />
                      <span>
                        <Rich text={limit} />
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          </section>

          <section className="pt-16 md:pt-24">
            <Reveal>
              <SectionHeading id="team">Team and outputs</SectionHeading>
            </Reveal>
            <Reveal className="grid gap-5 lg:grid-cols-12">
              <Card className="lg:col-span-7">
                <ul className="divide-y divide-[var(--mo-line)]">
                  {team.map((member, index) => (
                    <li key={member.name} className="grid gap-1 py-4 first:pt-0 last:pb-0 sm:grid-cols-[10rem_1fr] sm:gap-4">
                      <p className={`text-sm font-medium ${index === 0 ? 'text-[var(--mo-accent)]' : ''}`}>{member.name}</p>
                      <div className="text-pretty text-sm leading-6 text-[var(--mo-muted)]">
                        <p className={member.duties ? 'text-[var(--mo-text)]' : ''}>{member.role}</p>
                        {member.duties && (
                          <ul className="mt-1.5 space-y-1">
                            {member.duties.map((duty) => (
                              <li key={duty} className="flex gap-2.5">
                                <span className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-[var(--mo-accent)]" aria-hidden="true" />
                                <span>{duty}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </Card>
              <Card className="lg:col-span-5">
                <ul className="divide-y divide-[var(--mo-line)]">
                  {outputs.map((item) => (
                    <li key={item.title} className="py-4 first:pt-0 last:pb-0">
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="group flex items-baseline justify-between gap-4">
                        <span>
                          <span className="block font-medium">{item.title}</span>
                          <span className="text-sm text-[var(--mo-muted)]">{item.detail}</span>
                        </span>
                        <span className="inline-flex flex-shrink-0 items-center gap-1 text-sm text-[var(--mo-accent)] group-hover:underline">
                          {item.action} <ArrowUpRight size={15} strokeWidth={1.7} />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
            <p className="mt-6 text-sm leading-6 text-[var(--mo-muted)]">
              CBS5504 AI-Driven Cross-Cultural Linguistic Exploration · MSc in Generative AI and the Humanities, The Hong Kong Polytechnic University
            </p>
          </section>

          <CaseStudyThread slug={SLUG} />
        </div>
      </article>
    </LocalizedContent>
  );
}
