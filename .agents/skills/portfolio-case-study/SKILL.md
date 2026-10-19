---
name: portfolio-case-study
description: 作品集案例页（src/app/case-studies/*.tsx）的统一叙事、文案、版式、图片与数据标准。产品交付类以智慧医院页为样板，研究 / 数据分析类以 Mandarin（CBS5504）页为样板。Use when restructuring, writing, or reviewing any case study page in this portfolio, or when the user asks to apply the Smart Hospital or Mandarin standard to another project.
---

# 作品集案例页标准

两个样板页：

- 产品交付类：`src/app/case-studies/SmartHospital.tsx`
- 研究 / 数据分析类：`src/app/case-studies/CBS5504Mandarin.tsx`

逐节拆解、改前改后的文案、技术细节见 [reference.md](reference.md)。

## 一、工作流程（必须遵守）

1. **先收齐源材料，再提问。** 报告 PDF、notebook（Colab `.ipynb`）、过程记录（飞书 wiki）、已上线的网站、原始数据表都要先读。读完把会影响写法的问题一次问清，用 AskQuestion 给选项。典型问题：
   - 哪些是"我"做的，哪些是"我们"做的。
   - 分期、分类等结构以哪份材料为准。
   - 材料之间有矛盾时听哪份。
2. **先给叙事大纲，不直接改。** 用户原话："先给我叙事 大纲啊，不要直接改，我还没详细部署任务呢，比如要用什么 skill"。大纲用一段文字讲清 story 顺序，等用户确认、并指定要用的 skill 后再动手。
3. **用户点名的小改可以直接做**，只改点名的那一处，其他问题列出来等确认。
4. **不 commit、不 push**，除非用户明确要求。推送前列出工作区里还有哪些不相关的改动，确认范围。
5. 每轮改完：
   - `npm run build` 通过。
   - 浏览器在 1024 / 1280 / 1440 和手机宽度下检查，没有横向溢出。
   - 中文模式检查一遍（方法见 reference.md）。
   - 用中文汇报，先讲结果，再列和已确认大纲不一样的地方、数据上的出入、需要用户确认的事。
6. 文案全部改完后，用 humanizer skill（`~/.codex/skills/humanizer/SKILL.md`）盘一遍。先给出编号清单（当前句 → 建议句），用户挑选后再改，改完同步中文。

## 二、事实与诚实

- **统一叫法。**
  - 腾讯时期的项目统一归属「腾讯觅决 / Tencent Micision」。
  - 机构写官方全称，改过名的写「现名（曾用名）」或按用户指定的格式；英文名要查官方写法，不要自己拼。
  - 研究对象全页一个叫法（例如"橘"一律写 Mandarin）。
- **只写用户确认过的事实。** 不编时间（"built in weeks"）、不编角色（"took the brief directly from the hospital"）、不编数字、不编原因。缺信息就问。
  - 例：数据从 508 条变成 470 条，原因要问用户（答案是人工校对去重），不能自己写成"continued adding records"。
- **分清归属。**
  - "I led"（我主导）、"our team led, with the hospital's support"（团队牵头、客户配合）、"I built X myself"（亲手做的部分）分开写，按用户的原话。
  - 页面上每一处主语（I / we / the four of us）都要对得上真实分工；拿不准就问，并用 notebook 等源文件核对。
  - 团队成员名字保持英文；本人的职责分行列出，其他成员一行；排序按用户指定。
- **时间线要对。** 先交付、后续追加的模块放在交付之后讲，不能为了叙事倒置。
- **没做成的照实写。** 例如 "planned with Tencent AI Lab, not built"。全页只在一两处说明，不要每节都重复"没做"。故事讲到实际做到的地方就结束。
  - 试过又放弃的方法也照实写，例如 "I tried an LDA topic model first and dropped it"，图表标题沿用旧名时要说明。
- **材料互相矛盾时**，数字以实际跑出来的结果（notebook）为准，结构和阅读顺序以报告为准，并在汇报里告诉用户哪里不一致。
- **数据里没有的词和说法不写。** 例如某个词只出现在 n-gram 里、原文找不到，就不放；语料里没有海关报告，就不能写 "in a customs report"。
- **新闻引用。**
  - 去找公开报道，引文逐字对照原文；英文版注明 "Quote translated from Chinese"，链接文字写 "Read the article (Chinese)"。
  - 卡片格式：`In the press · 月份 年份` 标签、引文、出处说明（媒体、日期、背景）。
  - 报道里没有的说法（例如"预测"）不能挂在报道名下，只能作为本人陈述。
  - 报道写了多家合作方的，照实保留。
- 照片里有人脸的，提醒用户确认可以公开。

## 三、叙事结构

1. **挂在主线上。** 每页属于成长山（`src/app/data/growthMountain.ts`）的一条主线：页首用 `MainLineTag`，页尾用 `CaseStudyThread`。项目卡片的 tags 用成长山里的技能名称，和地图保持一致。
2. **一个贯穿全页的框架做骨架。** 智慧医院用的是三层：What happened / Why it happened / What happens next。
   - 框架在「问题」部分用三张卡片预告。
   - 正文每一层只在开始的那一节标一次 Layer 标签（`SectionHeading` 的 `label`），后续各节只传 `group`，左侧导航按 Layer 分组。
3. **产品交付类默认章节顺序**（按项目实际情况增减）：
   1. 页首：主线标签 · 项目归属，标题，**一句话**介绍（我做了什么、规模、结果），视频，项目信息栏。
   2. 问题：一句大字陈述 + 一行补充，加上框架卡片。
   3. 调研：痛点卡片，加上能交代项目起点的早期报道。
   4. 方法：步骤标题放在对应图片正上方，加一句话把方法连到产物（例如脑图）。
   5. 设计架构：按因果顺序摆图：调研/对稿照片 → 分类 → 原型。
   6. 设计语言、各模块展示：缺素材的模块先用虚线占位框（"Screen recording to come"）。
   7. 成果：交付现场照片 + 说明，数据卡片，My responsibilities。
   8. 特别篇章（如疫情紧急模块）：时间与背景、个人角色、现场照片、报道。
   9. 下一阶段 / 未完成部分：照实写，然后结束。
   10. `CaseStudyThread`。
   - 研究类的顺序见第四节。
4. **图片顺序服从逻辑。** 用户的标准是"调研后，才有了产品布局的原型图"：先放调研照片，再放分类，最后放原型；总览图放在细节图前面。
5. **标题和内容对得上。** 例如成果节讲的是 2019 年交付，标题就写 "First delivered in 2019"，不要写成 "23 hospitals by 2021"。

## 四、研究 / 数据分析类项目

1. **阅读顺序和报告大致相同。** 默认顺序：
   1. 页首。
   2. Abstract，附 Keywords。
   3. The question：研究问题，加文献综述，写成各领域卡片和研究空白。
   4. 数据：来源，然后数据字典，然后清洗 pipeline。
   5. 分析方法，每种方法一节。
   6. 阶段 / 发现：跨方法综合。
   7. 洞见。
   8. 成果物（网站、报告），呼应报告结尾的展望。
   9. 局限。
   10. 团队与产出。
   11. `CaseStudyThread`。
   - 改完要对照报告检查各节主题是否一一对应。
2. **先铺开结果，再讲洞见。** 用户原话："每一个方法都是先按朝代分析了数据，才有所发现，不是一种方法对应一个发现，这样是错的。"
   - 每种方法都完整展示按维度（如朝代）切出来的结果。
   - 之后单独一节讲怎样从这些规律里得出洞见。
   - 用户实际的工作顺序也要体现，例如"先按朝代做词云、逐个分析，后面才按类别收拢"。
3. **洞见必须配证据。** 每个洞见旁边放支撑它的图，结论条写在文字下方。
   - 阶段部分：每阶段一段解读，加各方法的证据卡（Word cloud / Network / Word2Vec / Places / Themes 各一句，带具体数字），再配两张缩略图。
   - 洞见用的图尽量不和阶段缩略图重复。
4. **分类从哪来要讲清。** 类别是人工归纳还是模型找的、谁归纳的、原始标签多乱、怎样收拢成最终几类、每类多少条。
   - 类别规则和时代划分规则都放进数据字典，做成表格。
5. **数据字典做成表格**：字段 / 原始表头 / 含义 / 一条真实记录的示例，不用一个字段一张卡片。
6. **Pipeline 每一步挂源文件。** 文件放 `public/<slug>/data/`，点击即可打开。
   - CSV 带 UTF-8 BOM，浏览器里中文不乱码；xlsx 浏览器只能下载，能给 CSV 就给 CSV。
   - 条数按文件实际数：原始表格没处理过、没去重，写行数（"532 rows"），清洗后的写记录数（"470 records"）。
   - 两者的差值写清是怎么去掉的。
7. **真实过程素材优先**：notebook 代码片段、分词前后对比、CSV 样例、真实输出图。

## 五、文案标准

- **页首介绍只写一句。**
- **少用副标题。** `SectionHeading` 的 `intro` 只有在补充新信息时才保留；只是复述标题的删掉。
- **同一件事一页最多说两次。** 重点检查：没做成的部分、"led"、时限（"within a week"）、框架里的列举项。
- **痛点写成一张卡片**：从上到下的圆点列表，每条是粗体短标题 + 一句解释。
- **原文词的英文写法**（中文古籍、品种名、地名等）：
  - 先找官方译名（国家标准、通行译本、机构官网），例如 南丰蜜桔 写 Nanfeng mandarin（GB/T 19051-2008），橘颂 写 Hawkes 译本的 *In Praise of the Orange-Tree*。
  - 没有官方译名的用斜体 CamelCase 拼音加中文：*ChuBiZhi* (楚必致)、*HaiHong* (海红)。
  - 普通词写英文加中文：loyalty (忠贞)。
  - 书名用官方译名，即使和全页叫法不同也保留（书名里的 "Orange" 不改），正文统一用全页叫法。
- **要去掉的机械味**（humanizer 在两个样板页上找出来的）：
  - 拆成两句的"不是 A 而是 B"："The data was already there. What was missing was…"；"survives not by holding on to… but by fitting into…"。
  - "From X to Y" 式的标题一页最多一个，而且不能夸大，比如没做成的能力不能放进标题。
  - 格言式标题和开头："Context is king"、"Seeing the forest through algorithms"、"A symbol has no fixed meaning"。
  - 舞台式开场："No single chart made the case."
  - 重复前文的收尾句："Neither shift shows up in a single passage. Both show up once…"。
  - 空泛结论："a structured body of evidence to argue with"，改成可核查的说法。
  - 凑三项的列举、抽象说法："one visual environment"、"a layered language for 3D data"。
  - 戏剧化的半句话："Where fever patients were, as it happened."
  - -ing 尾巴："…, making relationships difficult to see"。
  - 简历腔术语："Defined cross-department analysis scenarios"。
- **保留具体的个人细节**，比如 "Everyone was in quarantine and working from home."；"I expected virtue (德) to lead… *JiangPu* (江浦) came first."
- **图片说明**写清图里是什么、是谁、在做什么；项目信息栏里已经有的名称不再重复。
- 并排的图共用一条说明："Left: … Right: …"。
- **公开站是英文。** 每改一句英文，同时更新 `src/app/i18n/caseStudyTranslations.ts` 里对应的中文翻译；用户给的中文原句逐字使用。

## 六、版式标准

- **正文不加宽度上限。** 只保留容器的 `max-w-[1320px]`，段落加 `text-pretty`。用户的标准是"明明够宽还是要换行"就不对。
- **同一组卡片配色一致。** 不能只有一张颜色不同；要改就整组一起改。
- **数据卡片和 My responsibilities 上下排**；职责分组（Product direction / Design and delivery）左右并列。
- **步骤标题**放在组合图正上方，按列对齐，不单独做步骤卡片。
- **补充说明紧跟相关的图**，例如部署方式那句放在上线照片说明的下方。
- 并排图片按原图宽度比例分栏（例如 `md:grid-cols-[1140fr_2369fr]`）。
- **图表画廊一行三张**，卡片要小，维度标签（如朝代名）要醒目；图上字小的，点击放大看原图。
- **单张宽图做成左图右说明**（7 : 5），右边是 "How to read it" 卡片：怎么读、几条能对上原文的要点、注意事项。铺满太大、不铺满又空的图都这样处理。
- **长内容做成表格**，不要一项一张卡片。小表格在手机上要能换行，不设最小宽度；中文词条整体不断行。
- 左右分栏里图比文字矮时，图垂直居中，不要顶在上面留一大块空白。
- 手机端也要检查。

## 七、图片标准

- **数据分析结果用 notebook 跑出来的原图，不风格化**，图上的中文标注保留，在说明卡里解释。
- 设计稿、示意图上直接画了中文标注的，英文站要**裁掉或重做**。重做时保留真实截图内容，文字换成英文，视觉风格贴合本页配色。
- 同一页的示意图风格统一，例如全部用浅色背景、白卡片。
- 重做工具：本机 codex 的 image2（gpt-image-2）。原图和 prompt 放在 `public/<slug>/source/`。
- 用户提供的现场照片，先建议放哪一节，确认后再放。

## 八、交付前检查

```
- [ ] 源材料都读过；影响写法的问题已问清
- [ ] 大纲已经过用户确认
- [ ] 事实、数字、时间、归属都有用户确认或公开来源；每处 I / we 对得上分工
- [ ] 研究类：阅读顺序对上报告；方法结果先铺开；每个洞见有证据图；源文件可点开、条数和文件一致
- [ ] 原文词有官方译名或斜体拼音；研究对象全页一个叫法
- [ ] 页首一句话；没有可有可无的副标题
- [ ] 没有重复三次以上的说法；humanizer 清单已经过用户挑选并修改
- [ ] 框架标签只出现一次，左侧导航分组正确
- [ ] 图片顺序符合因果；数据图是原图；设计图没有中文标注残留
- [ ] 中文翻译同步更新，中文模式检查过
- [ ] build 通过；1024 / 1280 / 1440 和手机端都检查过
- [ ] 未经要求不提交
```
