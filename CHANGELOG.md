# 更新记录

按日期倒序。每条写清改了什么、影响哪些页面，括号里是对应的提交。

## 2026-10-20

### Bauhinia-Mind 案例页 User Research 重做（`/work/bauhinia-mind`）

- **调研说明：** Research Approach 补一句调研方式：2026 年 1 月飞书匿名问卷，15 位在港内地学生（本硕博，19–28 岁，均不会粤语）。
- **现场照片：** 三张访谈照片保留，放在问卷截图前面。
- **问卷截图：** 新增 Survey Results，并排放三张飞书问卷截图（答卷总览、量表与多选统计、开放题），可点开放大。
- **归纳图：** 新图 `research-synthesis.webp` 取代旧长图，上半部分是 Pattern Clustering（Information / Culture / Emotion 三类），下半部分是三类 Gap 和 Integrated Support Gap。
- **市场研究两张图：** Competitive landscape map 换成 Research Positioning Diagram（`research-positioning.webp`，旧的 `competitive-landscape-map.webp` 删除），Service Benchmark Matrix 换成按公开证据编码的新版。下方 Conclusion 改为与图中注释一致的表述：四项服务各自覆盖部分维度，没有一项同时覆盖本地就医导航和持续对话支持，Bauhinia-Mind 的定位是设计目标、尚未验证。
- **旧长图：** 从 `public/` 移到 `docs/bauhinia-figures/style-reference-old-research.webp`，只当画风参考。

### 隐藏 MetaHuman agents 案例

和垂直领域、目标技能关系不大，先下架，内容和资源全部保留。

- **项目列表：** 首页和 Work 页不再显示这张卡片（`projects.ts` 里加 `hidden: true`）。
- **案例页链接：** `/work/before-evening-vr` 仍可直接打开，方便单独发给别人；页底的「Where this leads」区块不再显示。
- **技能地图：** 这个项目不再出现，Data → Intelligence 线从 7 站变成 6 站；只连着它的 AI-assisted Development (MCP)、VR Interaction Design 两个标签也一起隐藏。Unreal Engine Development 还连着医院、马拉松、觅决，保留。
- **其他案例页：** 智慧医院、Mandarin 页底部的时间线里不再有这一站。
- **恢复方法：** 删掉 `src/app/data/projects.ts` 和 `src/app/data/growthMountain.ts` 里这个项目的 `hidden: true` 即可。

### 开屏动画文案

- 第三行从「Designing for human wellbeing. / 为人的福祉而设计。」改为「Building for human wellbeing. / 为人的福祉而创造。」，和上一行「Researching AI.」形成研究与动手的对照。（`CinematicIntro.tsx`）

## 2026-10-19

### MetaHuman agents VR 案例页（`/work/before-evening-vr`）重做

页面从「三层并列」改成以开发方式为主线：01 开发流程包含 02 NPC 智能体和 03 交互。`117b49b`、`adc479a`

- **命名：** 全站去掉「Before Evening」，项目名改为「MetaHuman agents in a VR mystery / VR 悬疑游戏里的 MetaHuman 智能体」。项目卡片、技能地图里的简介同步改成「通过 MCP 在 Unreal Engine 5 里完成开发」。
- **Claude：** 正文和图里都换成泛称「an AI agent / through MCP」，只在顶部 Stack 里保留一次「Claude via UE5 MCP」。
- **The idea：** 黄色卡片改为一句话讲清「MetaHuman 面孔 + Convai 智能体，通过 MCP 在 UE5 里开发」；下面加了总览图，外框是「Developed with UE5 through MCP」加技术栈一行，里面并列 02 和 03 两块。
- **01 · The workflow：** 标题「Working inside the engine through MCP」，配 1 号流程图（我 → PowerShell → AI agent → UE5 MCP server → UE5 编辑器 → 头显测试 → 保留或回退）。
- **02 · NPC agents：**
  - 顺序调整为：What a character is made of → Four characters, four spaces → Four clues that move the story。
  - 2 号图重画成解剖图式插画：中间是金色线稿半身像，六个部分（Knowledge、Memory、Sight、Actions、Persona、Story tree）用引线指到身体对应位置；下方 Clues 面板放 4 个真实道具缩略图，Memory 面板加图标。
  - 场景卡片改为一个场景配一个角色，去掉办公室，标题改为「Four characters, four spaces」，每行 3 张、统一 4:3 裁切。
  - 线索模块和 Material cue system 合并为一个，4 个道具用真实裁切图。
- **03 · Interaction：**
  - Quest 3 手柄图和「Hold A to talk」挪到这一节。
  - 5 号语音流程图改成插画版，每一步配一幅线稿小图；删掉原来的 01–04 文字列表，下面只留两段正文并排。
  - 章节开头「four steps」改为「a chain of steps」。
- **The world：** 大图换成 process book 里的校门口黄昏画面（`school-entrance.webp`），原来那张和中景图重复，已删除。
- **Testing：** 生成的三层外景示意图删掉，换成 process book 5.4 节的近景、中景、远景三张实拍图（`exterior-near/mid/far.webp`）。
- **视频：** 下方加注释「To keep the video short, the NPC replies play at 2× speed.」
- **待补的图：** 还没有真实截图的位置（MCP 会话、Blueprint、Convai Narrative Design、记忆笔记、平面图、两张情绪对比帧）在开发环境显示虚线占位，线上自动隐藏。需求写在 `docs/before-evening-figures.md`。
- **图的源文件：** 1、2、5 号图是 `docs/before-evening-figures/` 里的 HTML，改字后用 `render.sh` 重新导出。

### 能力标签与技能地图

`117b49b`、`adc479a`

- 新增三个能力：Unreal Engine Development（共享，连到智慧医院、智慧马拉松、腾讯觅决和 MetaHuman agents）、AI-assisted Development (MCP)、VR Interaction Design。
- MetaHuman agents 的标签改为：Conversational AI、AI Product Design、Unreal Engine Development、AI-assisted Development (MCP)、VR Interaction Design、UX Research。去掉了 Agent Framework Design。
- 这个项目在技能地图里归到 Data → Intelligence 线。
- `docs/growth-mountain.md` 的能力表同步更新。

### 案例页底部「Where this leads」区块

`adc479a`，影响 MetaHuman agents、Mandarin、智慧医院三页

- 删掉「Next on this line」卡片，以及项目的 `bridge` 过渡文案字段（原来只有智慧医院用到）。
- 版面改为上下结构：上方通栏时间线，各站横向排开（手机上仍竖排）；下方是故事线卡片和能力卡片。没有故事线时，能力卡片铺满整行。
- 项目名换行时，↗ 箭头和最后一个词绑在一起，不再单独掉行。
- 暗色页面下卡片背景和时间线圆点跟随页面配色（`117b49b`）。

### 代码与资源整理

- 压缩图片和视频，HEVC 封面视频转成 H.264，删掉 `public` 里没有引用的文件（包括旧的 process book PDF）。`8df21f0`
- 删掉 Figma Make 模板遗留的 48 个未使用 UI 组件和冗余依赖，新增 `/projects` 跳转到 `/work`，README 改写为作品集说明。`7e360bd`
- 完成 Mandarin 案例页，加入作品集案例页 skill（`.cursor/skills/portfolio-case-study`），调整首页和技能地图。`9b8ac97`
