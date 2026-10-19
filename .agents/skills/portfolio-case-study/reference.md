# 样板拆解

- 第一部分：智慧医院页（产品交付类）
- 第二部分：Mandarin 页（研究 / 数据分析类）
- 第三部分：技术细节（翻译、浏览器检查、数据文件）

# 第一部分：智慧医院页

文件：`src/app/case-studies/SmartHospital.tsx`；翻译：`smartHospitalTranslations`（`src/app/i18n/caseStudyTranslations.ts`）。

## 可复用的组件

| 组件 | 用途 |
|------|------|
| `SectionHeading({label, group, intro})` | `label` 是标题上方的小字（Layer 标签只在一层的第一节传）；`group` 写进 `data-nav-group`，左侧导航据此分组 |
| `Figure({src, alt, caption, frameClassName})` | 图片 + 说明，`frameClassName` 用原图比例，例如 `aspect-[1140/667]` |
| `ModulePlaceholder({title, caption})` | 缺素材的模块：虚线框，写 "Screen recording to come" |
| `PressQuote({href, label, caption})` | 新闻引用卡片 |
| `Reveal` | 滚动进场动画 |
| `MainLineTag` / `CaseStudyThread` | 页首主线标签 / 页尾主线位置与下一站 |

每页通过 CSS 变量换主题色（`--sh-bg`、`--sh-text`、`--sh-accent` 等，加上 `--project-accent` 给共用组件用）。

## 章节地图

| # | 标题 | label / group | 内容 |
|---|------|---------------|------|
| 页首 | Smart Hospital | 主线标签 · Tencent Micision | 一句话介绍、演示视频、项目信息 |
| 1 | Plenty of data, hard to act on | The problem | 主色大字卡片；三层框架卡片 |
| 2 | Field research shaped the brief | Layer 01（label + group） | 四个痛点合成一张卡片；2018 年报道 |
| 3 | Structuring 140+ data dimensions | group L01 | 三个步骤标题放在三联图上方；一句话连到脑图 |
| 4 | From hospital floor to city scale | Layer 02（label + group） | 信息科对稿照片 → 尺度卡片 → 管理者视角图 → 布局原型 |
| 5 | Four layers in the 3D scene | group L02 | 分层 GIF、Unreal 开发照片、四张图层卡片 |
| 6 | Comparing departments, floors, and beds | group L02 | 六个模块：两个 GIF + 四个占位框 |
| 7 | First delivered in 2019 | Outcome | 上线照片 + 说明 + 部署方式；2019 / 23 数据卡片；职责两栏 |
| 8 | Monitoring COVID-19 in real time | Emergency module · 2020 | 热力图、居家开发照片和个人角色、电视采访与街景并排、2020 年报道 |
| 9 | The next stage, planned but not built | Layer 03（label + group） | 日夜 GIF（已做 / 计划）、计划卡片 |
| 10 | Where this leads | — | `CaseStudyThread` |

## 改前 → 改后（用户反馈过的文案）

| 问题 | 改前 | 改后 |
|------|------|------|
| 页首太长 | Hospital leaders had more than 140 dimensions… I led… A third layer, forecasting, was planned… but not built. | I led the 0-to-1 design of a platform that shows hospital leaders what happened and why across 140+ data dimensions, delivered to 23 hospitals. |
| 标题夸大 | From reading reports to anticipating change | Plenty of data, hard to act on |
| 对比句 | The data was already there. What was missing was structure, comparison, and a way to look ahead. | The hospital had the data, but no way to compare it across departments or see what might come next. |
| -ing 尾巴 | Most reports showed isolated metrics, making relationships between departments difficult to see. | Reports showed metrics one at a time, so the links between departments were hard to see. |
| 抽象说法 | A layered language for 3D data | Four layers in the 3D scene |
| 重复"没做" | …The plan and the vision were in place, but this stage was never built. This is where the project stopped. | The next stage, planned with Tencent AI Lab, was a timeline in the 3D scene so administrators could compare one period with another, as a step toward forecasting. |
| 半句话 | Where fever patients were, as it happened. | A real-time map of fever patients across Nanshan District. |
| 标题与内容不符 | Live in 23 hospitals by 2021 | First delivered in 2019 |
| 简历腔 | Defined cross-department analysis scenarios | Defined how departments are compared |

## 角色与归属的写法（疫情模块）

- 引言："With the hospital's support, our team built a fever monitoring module and had it live within a week."
- 个人："As design lead I owned the module directly and split the work across the team. I built the UE4 3D scene myself and handled front-end debugging and the data interfaces."

## 引用卡片的说明写法

> China News Service, 26 March 2018, on the strategic agreement between Tencent and the hospital to build a smart hospital. The cooperation covered pre-consultation, data analysis and visualization, and information security. Quote translated from Chinese.

# 第二部分：Mandarin 页

文件：`src/app/case-studies/CBS5504Mandarin.tsx`（slug `cbs5504-mandarin-cultural-evolution`）；翻译：`mandarinTranslations`。

源材料：

- 期末报告 PDF：决定阅读顺序和章节主题。
- Colab notebook：决定数字和图。
- 飞书 wiki：分类是怎么来的、每周的决策。
- 已上线的研究网站：洞见的写法。
- 原始和清洗后的数据表：放在 Pipeline 的源文件链接里。

## 可复用的组件

| 组件 | 用途 |
|------|------|
| `Rich({text})` | 先用 `t()` 翻译，再把 `*文字*` 渲染成斜体；用于书名、拼音词。中文译文里不要带星号 |
| `ColabFigure({src, alt, caption})` | notebook 原图，可点击放大 |
| `ZoomLink` | 新标签页打开原图，给字小的图表用 |
| `Thumb({src, caption})` | 证据缩略图（阶段、洞见里用） |
| `SideFigure({src, alt, read})` | 左图（7 列）右 "How to read it" 卡片（5 列）；`read` 包含 `how`、`points`、`note` |
| `Tabs` + `EraGallery` | 按朝代的画廊：一行三张，切换词云 / TF-IDF，朝代英文名 + 中文名 + 年代 + 条数 |
| `CategoryExplorer` / `NetworkExplorer` | 按类别 / 按朝代切换的图表 |
| `Token` | 分词结果的词块（区分来自原文还是标注字段） |

## 章节地图

| # | id | 标题 | 内容 |
|---|----|------|------|
| 页首 | — | Mandarin | 一句话介绍、项目信息栏 |
| 1 | abstract | Abstract | 摘要卡片，底部 Keywords |
| 2 | question | How does one fruit pick up new meanings over 3,000 years? | 主色大字陈述；四个研究领域卡片（文学、艺术、农学、医药与经济）；三个研究空白一行 |
| 3 | collection | 470 records across eight eras | 来源（Ctext、CNKI）、文献类型、朝代分布原图 |
| 4 | dictionary | A data dictionary first | 字段表（字段 / 原始表头 / 含义 / A328 示例）；类别规则表 + 时代规则表并排 |
| 5 | cleaning | From raw table to clean corpus | 五步 pipeline，每步挂源文件和条数 |
| 6 | wordclouds | A word cloud for each era | 分析的第一节；按朝代画廊 |
| 7 | categories | Then grouped by category | 五类结果；说明这一步怎样决定研究方向 |
| 8 | word2vec | Word2Vec: what sits next to Mandarin | Jieba 分词对比、代码、合并异名的取舍、`SideFigure` |
| 9 | networks | A keyword network for each era | 按朝代的网络图 |
| 10 | places | Where the Mandarin is written about | 热力图 `SideFigure` |
| 11 | themes | Theme words by era | 主题占比图 `SideFigure`，附三个关键词词典 |
| 12 | phases | Three phases, read across methods | 三个阶段：解读 + 两张缩略图（左），五种方法的证据卡（右） |
| 13 | insights | From disenchantment to reconstruction | 三个洞见：文字 + 结论条（左），证据图（右） |
| 14 | website | The research website | 呼应报告结尾说的教育工具 |
| 15 | limits | What this can't claim | 语料少且不均、名句重复、标注带入主观判断、模型噪声 |
| 16 | team | Team and outputs | 本人职责分行列出；报告、幻灯片、网站链接 |
| 17 | — | Where this leads | `CaseStudyThread` |

## 改前 → 改后（用户反馈过的内容）

| 问题 | 改前 | 改后 |
|------|------|------|
| 一种方法对应一个发现 | 每节方法直接给一个结论 | 每种方法先完整展示按朝代的结果，阶段和洞见单独成节 |
| 洞见没有证据 | 洞见只写结论 | 每个洞见旁边放主题占比图、三张类别 TF-IDF、Word2Vec 原图 |
| 分类来源不清 | "Then grouped by category" | 说明主题是本人从第一批记录归纳的；四人边收集边标注，留下 169 种标签；本人逐条收拢为五类 |
| 风格化的图 | 重画的统一配色图表 | notebook 原图，点击可放大 |
| 数据字典太占地方 | 一个字段一张卡片 | 一张表格 |
| 条数和文件不符 | "104 records"、"kept adding records" | "532 rows"（原始、未去重）；"removed blank rows and duplicates to leave 470 records" |
| 署名笼统 | "The four of us labeled every record by hand" | "All four of us labeled records as we collected them… I then went through every record myself" |
| 原文词 | 楚必致、海红 直接放中文 | *ChuBiZhi* (楚必致)、*HaiHong* (海红)；有官方译名的用官方译名 |
| not X but Y | A cultural symbol survives not by holding on to its first meaning but by fitting into new settings: court, clinic, market. | The symbol lasts because each new setting finds a use for it. |
| 格言式标题 | Context is king / Seeing the forest through algorithms | Meaning follows context / Reading all 470 records at once |
| 数据里没有的说法 | In a customs report, it is a commodity. | In modern trade papers, it is an export. |
| 空泛结论 | The numbers give the history of Chinese culture a structured body of evidence to argue with. | Each claim about the Mandarin's history now has a count behind it that anyone can check. |

## 官方译名示例

| 中文 | 英文 | 出处 |
|------|------|------|
| 楚辞 | *Songs of the South* | Hawkes 译本 |
| 橘颂 | *In Praise of the Orange-Tree* | Hawkes 译本 |
| 橘录 | *Monograph of the Oranges of Wenchou* | Hagerty 1923 |
| 史记 | *Records of the Grand Historian* | 通行译名 |
| 新唐书 | *New Book of Tang* | 通行译名 |
| 本草纲目 | *Compendium of Materia Medica* | 通行译名 |
| 南丰蜜桔 | Nanfeng mandarin | GB/T 19051-2008 |
| CNKI | China National Knowledge Infrastructure | 机构官网 |

# 第三部分：技术细节

## 翻译

- `LocalizedContent` 只翻译页面 JSX 树里的字符串子节点和 `alt`、`aria-label`、`caption`、`intro`、`label`、`note`、`title` 这几个属性，按原文完全匹配。
- 自定义组件内部写死的文字（例如 `SideFigure` 里的 "How to read it"）不会被翻译，要用 `useTranslate()` 的 `t()`。
- 模板字符串里拼出来的文字也要用 `t()`，对应的 key 不能被当作没用的 key 删掉。
- 改动多时的做法：
  1. 先备份翻译文件。
  2. 用 node 把当前页的翻译表读成 JSON。
  3. 增加新 key。
  4. 删掉页面里已经不存在的 key。
  5. 只重写这一页的翻译块。
- **不要对整个翻译文件跑 Prettier**，会把其他页面的翻译也重新排版。页面 tsx 可以跑：`npx prettier --single-quote --print-width 180 --trailing-comma all --write <file>`（仓库没有 Prettier 配置，不加参数会改成双引号、80 列）。

## 中文模式检查

1. 临时把 `src/app/context/LanguageContext.tsx` 里的 `LANGUAGE_SWITCH_ENABLED` 改成 `true`。
2. 浏览器里设置 `localStorage['portfolio-language'] = 'cn'`，然后刷新。
3. 遍历 `main article` 里的文字节点，找出还含有两个以上英文单词的段落（方法名、人名除外）。
4. 检查完把开关改回 `false`，删掉 localStorage 里的这个 key。

## 浏览器检查

- 用 `Emulation.setDeviceMetricsOverride` 模拟宽度。截图被裁切时加 `scale` 参数，例如 `{width: 1280, scale: 0.8}`、`{width: 1440, scale: 0.7}`；手机用 `{width: 390, mobile: true}`。
- 全站开了平滑滚动，跳转位置要用 `scrollTo({top, behavior: 'instant'})`；跳完用 `browser_scroll` 滚 1px 触发进场动画，再截图。
- 用 `document.documentElement.scrollWidth - innerWidth` 检查横向溢出。
- 检查完清除模拟、解锁标签页。

## 数据文件

- 放在 `public/<slug>/data/`，Pipeline 里用 `<a href target="_blank">` 链接，文件名放在带下载图标的小标签里，条数另起一行。
- CSV 要带 UTF-8 BOM，浏览器直接打开时中文才不乱码。
- 文件名用干净的写法（例如把 `xxx.xlsx.csv` 改成 `xxx.csv`），并告诉用户。
- 公开前提醒用户确认数据可以公开（例如 CNKI 摘录）。
