import type { TranslationMap } from './LocalizedContent';

const common: TranslationMap = {
  'All projects': '全部项目',
  'All Projects': '全部项目',
  'Back to All Projects': '返回全部项目',
  Type: '类型',
  Duration: '周期',
  Role: '职责',
  Scope: '范围',
  Tools: '工具',
  Stack: '技术栈',
  Partners: '协作团队',
  Team: '团队',
  Delivery: '交付',
  Methods: '研究方法',
  Links: '相关资料',
  Overview: '项目概览',
  Conclusion: '结论',
  Opportunity: '设计机会',
  'My responsibilities': '我的职责',
  'Product direction': '产品方向',
  'Field research': '实地研究',
  'Service design': '服务设计',
  'Testing and launch': '测试与上线',
  Data: '数据层',
  Region: '区域',
  City: '城市',
  Hospital: '医院',
  Detect: '识别',
  Locate: '定位',
  Assess: '研判',
  Dispatch: '调度',
};

export const beforeEveningTranslations: TranslationMap = {
  ...common,
  'VR narrative game': 'VR 叙事游戏',
  'A psychological mystery set in a Chinese high school, built around live voice conversations with AI characters.':
    '一场发生在中国高中的心理悬疑故事，玩家通过实时语音与 AI 角色对话，逐步拼回被掩埋的往事。',
  'Gameplay and narrative showcase, June 2026': '玩法与叙事演示，2026 年 6 月',
  'Spring 2026': '2026 年春季',
  'Project manager, scene designer, VR interaction programmer': '项目管理、场景设计与 VR 交互开发',
  Platform: '平台',
  Stack: '技术栈',
  'A school visit that turns personal': '一次逐渐失控的返校',
  'The player takes the role of Yi Linlan, a teacher returning to the school she once attended. Familiar rooms begin to bring back the part of her past she has avoided.':
    '玩家扮演教师易林岚，回到自己曾经就读的学校。熟悉的房间一点点唤回她始终回避的过去。',
  'Most of the 15 to 20 minute experience takes place on the campus at dusk.':
    '整段体验约 15 至 20 分钟，故事发生在临近夜晚的校园里。',
  "Yi Linlan arrives expecting a routine visit. She soon learns that He Qinyue, a student she once bullied, now works at the school as a psychologist.":
    '易林岚原以为这只是一次普通到访，却发现自己当年欺负过的学生何沁玥，如今成了学校的心理老师。',
  'The player pieces together what happened by talking to staff and examining files, photographs, and objects. Characters remember what has already been discussed and react to evidence shown later.':
    '玩家需要与教职工交谈，查看档案、照片和物件，拼出当年的真相。角色会记住此前的对话，也会对之后出示的证据作出回应。',
  'The story moves through five school spaces': '故事沿着五个校园场景展开',
  'Information found in one scene changes what the player can ask in the next.':
    '在前一个场景找到的信息，会改变玩家在下一个场景能问的问题。',
  'School Gate': '校门',
  Arrival: '抵达',
  'Yi Linlan returns to the school where she once studied, this time as a teacher. The opening gives players a few quiet minutes to settle into the space.':
    '易林岚以教师身份回到母校。开场留出几分钟的安静探索，让玩家先熟悉空间。',
  Office: '办公室',
  'The old file': '旧档案',
  "A file in the office conflicts with Yi Linlan's account of the past. It gives the player a reason to keep looking.":
    '办公室里的一份档案与易林岚的说法互相矛盾，也让玩家有了继续追查的理由。',
  Classroom: '教室',
  'Teacher Zhou': '周老师',
  "Teacher Zhou remembers more than Yi Linlan expects. Their conversation brings the old classroom incident back into focus.":
    '周老师记得的细节比易林岚预想得更多。两人的谈话让当年的教室事件重新浮出水面。',
  Archive: '档案室',
  'The school record': '校方记录',
  'In the archive, names, dates, and disciplinary records show what happened to He Qinyue.':
    '档案中的姓名、日期和处分记录，逐渐交代了何沁玥当年的遭遇。',
  'Medical Room': '医务室',
  'He Qinyue': '何沁玥',
  'He Qinyue, now the school psychologist, speaks with Yi Linlan directly. Her responses draw on what the player has found and said earlier.':
    '已经成为学校心理老师的何沁玥与易林岚正面交谈。她的回答会结合玩家此前找到的线索和说过的话。',
  'Hold A to talk': '按住 A 键交谈',
  'Hold the button, ask a question, then release it. Convai generates the response and sends it through the MetaHuman character in real time.':
    '按住按钮说出问题，松开后，Convai 会实时生成回答并由 MetaHuman 角色说出。',
  'Simple input': '简单直接的输入',
  'Hold-to-talk keeps conversation separate from movement and object handling.':
    '按住说话的方式让对话、移动和物件操作互不干扰。',
  'Showing evidence': '出示证据',
  'Characters react when the player brings an object from an earlier scene into the conversation.':
    '当玩家把之前场景中的物件带入对话时，角色会作出相应反应。',
  'The Quest 3 controls keep talking separate from movement and object handling.':
    'Quest 3 的操作把交谈、移动和物件处理清楚区分开。',
  'Building a believable school': '搭建可信的校园',
  'We modelled the campus from scratch, using the scale and layout of a Chinese senior secondary school as our reference.':
    '校园从零开始建模，尺度和布局参考了中国普通高中。',
  'Low evening light and a custom skybox place the story close to nightfall.':
    '低角度的傍晚光线与定制天空盒，把故事放在将要入夜的时刻。',
  'The corridors stay cooler and darker, with rain at the windows and repeated sightlines helping players find their way.':
    '走廊的色温更冷、光线更暗。窗外的雨景与重复出现的视线线索，帮助玩家辨认方向。',
  'Early tests showed that the world felt empty outside the windows. We added buildings, trees, skyline cards, and fog at three depths. In the next test, players stopped to look outside.':
    '早期测试中，窗外的世界显得空。我们在三个景深层次加入建筑、树木、城市剪影与雾效。下一轮测试时，玩家开始停在窗边向外看。',
  'Connecting voice to MetaHuman': '让语音驱动 MetaHuman',
  'The conversation system links Convai with generated speech, facial animation, and MetaHuman playback.':
    '对话系统把 Convai、语音生成、面部动画与 MetaHuman 播放串联起来。',
  'We built the interaction logic in Blueprints so we could test changes on the headset quickly.':
    '交互逻辑使用蓝图搭建，便于直接在头显中快速测试修改。',
  'What the player says': '玩家说话',
  "Convai transcribes the player's speech and sends it to the agent written for that character.":
    'Convai 将玩家语音转成文字，再交给为该角色设定的智能体。',
  'How the character answers': '角色回答',
  'The agent writes a response using the character prompt and current story context. Text-to-speech then produces the voice.':
    '智能体根据角色提示词和当前剧情生成回答，再通过文字转语音输出。',
  'Animating the reply': '让回答动起来',
  'The audio drives lip movement and facial blendshapes. Gaze and small body movements continue while the character speaks.':
    '音频驱动口型与面部混合形状；角色说话时，视线和细微肢体动作也会持续。',
  'What changed after testing': '测试后改了什么',
  'We ran three rounds on the Quest 3. Each round focused on the issue that interrupted play most.':
    '我们在 Quest 3 上进行了三轮测试，每一轮都先处理最影响体验的问题。',
  'Movement comfort': '移动舒适度',
  'Two testers removed the headset within ten minutes.': '两位测试者在十分钟内摘下了头显。',
  'We added strafe and snap rotation, then tuned the comfort vignette.':
    '随后加入平移与分段转向，并调整了舒适度遮罩。',
  'The next group completed the section without similar reports of motion sickness.':
    '下一组测试者顺利完成该段体验，没有再出现类似的晕动反馈。',
  'World continuity': '环境连续性',
  'The empty exterior broke immersion whenever players looked through a window.':
    '玩家一看向窗外，空旷的外部环境就会打断沉浸感。',
  'We filled the view with buildings, trees, skyline cards, and fog arranged at three depths.':
    '我们用建筑、树木、城市剪影和雾效补足三个景深层次。',
  'During the next test, players stopped at the windows to look outside.':
    '下一轮测试中，玩家会主动停在窗边观察外部环境。',
  'Conversation timing': '对话等待时间',
  'A five-second response gap made the AI feel less present.': '五秒的等待让 AI 角色失去了在场感。',
  'We shortened the prompts, tested streaming responses, and added a small thinking animation.':
    '我们压缩提示词、测试流式响应，并加入简短的思考动画。',
  'Latency fell to about three seconds, but remains the clearest priority for a second version.':
    '延迟降到约三秒，但它仍是下一版本最需要继续解决的问题。',
  'What still needs work': '仍需改进',
  'Reviewers responded well to the MetaHuman characters and the open-ended dialogue. They also wanted the central conflict to arrive sooner. Spoken responses need to be shorter, players should be able to interrupt, and emotional delivery needs more control.':
    '评审认可 MetaHuman 角色和开放式对话，同时希望核心冲突更早出现。角色回答还可以更短，并支持玩家打断；情绪表达也需要更细致的控制。',
  'For the next version, I would work on response time and ambient sound first. More scenes can wait until the conversations feel quicker and more believable.':
    '下一版会优先处理响应速度和环境声音。等对话更快、更自然之后，再扩展更多场景。',
  'We used posters, records, photographs, and handwritten messages to carry clues between scenes.':
    '海报、档案、照片和手写留言承担了跨场景传递线索的作用。',
  'Team and Award': '团队与奖项',
  'Gong Shengao (Left)': '龚圣淏（左）',
  'Gong Shengao': '龚圣淏',
  '(Left)': '（左）',
  'AI prompting, atmospheric effects, and narrative design': 'AI 提示词、氛围特效与叙事设计',
  'Lu Zhengping (Middle)': '陆正平（中）',
  'Lu Zhengping': '陆正平',
  '(Middle)': '（中）',
  'Project management, scene and environment design, asset production, VR interaction programming, and MetaHuman integration with Convai.AI':
    '项目管理、场景与环境设计、资产制作、VR 交互开发，以及 MetaHuman 与 Convai.AI 接入',
  'Lin Yang (Right)': '林洋（右）',
  'Lin Yang': '林洋',
  '(Right)': '（右）',
  '3D assets, texturing, level design, player flow, and Blueprint logic': '3D 资产、材质、关卡设计、玩家动线与蓝图逻辑',
  'Process book': '过程文档',
  'Pitch deck': '项目提案',
  'Before Evening received a Commendation Award in the 2025/26 Metaverse + AI Contest at PolyU on 21 July 2026.':
    'Before Evening 于 2026 年 7 月 21 日获得香港理工大学 2025/26「Metaverse + AI Contest」优异奖。',
  'Contest details': '查看比赛详情',
};

export const smartHospitalTranslations: TranslationMap = {
  ...common,
  'Smart Hospital V2.0 demonstration at Nanshan Hospital': '南山医院智慧医院运营管理系统 V2.0 演示',
  'Download the project video': '下载项目视频',
  'Smart Hospital V2.0, Nanshan Hospital. Product demonstration, 2 min 53 sec.': '南山医院智慧医院运营管理系统 V2.0 演示，时长 2 分 53 秒。',
  'Tencent Micision': '腾讯觅决',
  'Smart Hospital': '智慧医院',
  'A medical data platform that helps hospital leaders read operations across departments, regions, and time.':
    '一套面向医院管理者的医疗数据平台，用同一视角查看跨科室、跨区域与不同时段的运营状况。',
  'Project overview video': '项目概览视频',
  '16:9 video showing the product, navigation, and hospital scenarios': '16:9 视频，展示产品、浏览路径与医院应用场景',
  'Video will be added when the final source file is available.': '最终视频素材确认后补充。',
  'Hospital operations platform': '医院运营管理平台',
  '2018-2021': '2018–2021',
  'Product design lead': '产品设计负责人',
  Pilot: '试点',
  'A hospital in Shenzhen': '深圳某医院',
  'Research, product framework, data visualization, 3D experience': '调研、产品框架、数据可视化与 3D 体验',
  'Private cloud and cloud rendering': '私有云与云渲染',
  'From traditional reports to a 3D decision-making platform': '从传统报表到立体决策平台',
  'Hospital leaders had access to large amounts of operational data, but the reporting tools made comparison, prioritization, and early warning difficult.':
    '医院管理者掌握大量运营数据，但传统报表很难支持横向比较、优先级判断和风险预警。',
  'We set out to help hospital leaders see operational data across space and time, with a clear, intuitive view of how the hospital works as a whole.':
    '项目要解决的是：让管理者从空间和时间两个维度，整体、直观地理解医院系统的运行数据。',
  'The pilot brought departmental performance, patient distribution, medical resources, and regional context into one visual environment.':
    '试点将科室运营、患者分布、医疗资源和区域信息放进同一个可视化环境。',
  'Product overview image': '产品概览图',
  '16:10 interface view showing the hospital operations platform': '16:10 界面图，展示医院运营平台全貌',
  'Field research shaped the brief': '从医院现场确定问题',
  'We visited hospitals, observed daily reporting routines, and interviewed decision makers and information teams.':
    '我们走访医院，观察日常汇报流程，并访谈管理决策者和信息化团队。',
  'Fragmented indicators': '指标彼此割裂',
  'Most reports showed isolated metrics, making relationships between departments difficult to see.':
    '多数报表只呈现单项指标，科室之间的关系难以看清。',
  'No shared analytical view': '缺少统一分析视角',
  'Data lived across separate platforms, so administrators lacked one place for comparison and review.':
    '数据分散在不同平台，管理者没有统一的比较与复盘入口。',
  'Low practical use': '数据难以用于日常决策',
  'The data existed, but its hierarchy and presentation made it difficult to use during daily decisions.':
    '数据虽然存在，信息层级与呈现方式却不适合日常判断。',
  'Limited regional context': '缺少区域语境',
  'Hospital data rarely connected with community and city data, reducing its value for planning.':
    '医院数据很少与社区和城市数据关联，难以支撑更长期的规划。',
  'Structuring 140+ data dimensions': '重组 140+ 个数据维度',
  'The pilot dataset contained more than 140 dimensions. We used card sorting and scenario planning to turn those inputs into a coherent product structure.':
    '试点数据超过 140 个维度。我们通过卡片分类与场景规划，把零散输入整理成清晰的产品结构。',
  'Research and card sorting': '调研与卡片分类',
  '4:3 image showing hospital visits, source data, and the grouping workshop': '4:3 图片，记录医院走访、原始数据与分类工作坊',
  'Visit hospitals': '走进医院',
  'We observed daily reporting routines and interviewed hospital directors, department heads, and information teams.':
    '观察日常汇报流程，并访谈院长、科室负责人和信息化团队。',
  'Collect the dataset': '收集数据',
  'The pilot hospital provided more than 140 data dimensions for the first working demonstration.':
    '试点医院为首个可运行版本提供了 140 多个数据维度。',
  'Group the indicators': '整理指标',
  'Card sorting helped us find relationships, priorities, and gaps across the source data.':
    '卡片分类帮助团队找出数据之间的关系、优先级与缺口。',
  'Build the scenario': '串联场景',
  'We connected the modules through a viewing path that moved from operations to regional planning.':
    '以一条从院内运营延伸到区域规划的浏览路径串联各模块。',
  'Product framework diagram': '产品框架图',
  '16:9 diagram connecting the six product modules and their interaction paths': '16:9 图，呈现六个产品模块及其交互路径',
  Outpatient: '门诊',
  Inpatient: '住院',
  Patients: '患者',
  'Chronic disease': '慢病',
  Resources: '资源',
  'From hospital floor to city scale': '从院内楼层看到整座城市',
  'The viewing path begins with in-hospital operations, expands to regional patient distribution, and ends with city-wide medical resources.':
    '浏览路径从院内运营出发，逐步扩展到区域患者分布，最后看到全市医疗资源。',
  Point: '点',
  'Operational detail inside departments, wards, and beds.': '科室、病区与床位层面的运营细节。',
  Plane: '面',
  'Patient distribution and comparisons across administrative areas.': '行政区域间的患者分布与对比。',
  Volume: '体',
  'Medical resources viewed across the wider urban system.': '在城市系统中查看医疗资源。',
  'Cross-scale experience path': '跨尺度体验路径',
  '16:9 image showing the transition from hospital operations to regional and city views': '16:9 图片，展示从院内运营到区域、城市视角的过渡',
  'A layered language for 3D data': '为 3D 数据建立层级',
  'The 3D environment combines data with geographic context so administrators can compare locations without losing a sense of place.':
    '3D 环境把数据与地理语境结合起来，让管理者比较不同位置时仍能保持空间感。',
  '3D scene layer diagram': '3D 场景分层图',
  '4:3 diagram showing data, infrastructure, administrative regions, and natural conditions': '4:3 图，展示数据、基础设施、行政区域与自然环境',
  'Risk, distribution, magnitude, and change occupy the clearest visual position.': '风险、分布、规模与变化占据最清晰的视觉层。',
  Infrastructure: '基础设施',
  'Hospitals, landmarks, roads, and bridges make the scene recognizable.': '医院、地标、道路与桥梁帮助使用者辨认环境。',
  'Administrative regions': '行政区域',
  'Boundaries and transport networks support comparison across locations.': '边界与交通网络支撑跨区域比较。',
  'Natural conditions': '自然环境',
  'Terrain, rivers, and vegetation preserve geographic context.': '地形、河流与植被保留地理语境。',
  'Turning scenes into reusable components': '把场景沉淀成可复用组件',
  'A reusable chart library and three levels of spatial detail allowed the same product language to support different operational questions.':
    '可复用图表库配合三层空间细节，让同一套产品语言适应不同运营问题。',
  'Medical chart component library': '医疗图表组件库',
  'Wide image showing the reusable charts prepared for common hospital scenarios': '宽幅图片，展示为常见医院场景准备的可复用图表',
  'City resource view': '城市资源视图',
  'GIS-based 3D scene with regional data and medical resource distribution': '基于 GIS 的 3D 场景，展示区域数据与医疗资源分布',
  'City data can be compared by administrative area and connected with map POI data.':
    '城市数据可按行政区域比较，并与地图 POI 数据关联。',
  'Hospital operations view': '医院运营视图',
  'Department, bed, and patient data shown inside the hospital scenario': '在医院场景中呈现科室、床位与患者数据',
  'Drill-down views support staffing, bed use, critical patient monitoring, and inpatient analysis.':
    '下钻视图支持人员配置、床位使用、危重患者监测和住院分析。',
  'Time-based analysis': '时间维度分析',
  '16:9 comparison showing how the timeline reveals change and supports forecasting': '16:9 对比图，展示时间轴如何呈现变化并支持预测',
  'The sky and timeline system add time to the scene, helping users compare trends across different moments.':
    '天空与时间轴系统把时间带入场景，便于比较不同时段的变化趋势。',
  'Delivery and contribution': '交付与成果',
  'The first implementation launched in 2019. By 2021, the team had delivered projects for more than 20 hospitals.':
    '首个项目于 2019 年上线。到 2021 年，团队已为 20 多家医院完成交付。',
  'Hospital delivery': '医院交付',
  '16:9 photograph or deployment diagram showing the system in use': '16:9 现场照片或部署图，展示系统实际使用情况',
  'Deployments combined on-site hardware, private cloud infrastructure, cloud rendering, and remote version updates.':
    '落地方案整合现场硬件、私有云基础设施、云渲染与远程版本更新。',
  'First hospital delivery': '首个医院项目交付',
  'Hospitals delivered by 2021': '截至 2021 年完成交付的医院',
  'Led the 0-to-1 product definition': '主导产品从 0 到 1 的定义',
  'Translated field findings into a product framework': '把实地发现转化为产品框架',
  'Structured the six operational modules': '梳理六个运营模块',
  'Design and delivery': '设计与交付',
  'Designed the cross-scale viewing path': '设计跨尺度浏览路径',
  'Defined the 3D data presentation language': '定义 3D 数据呈现语言',
  'Supported component reuse and hospital deployment': '推动组件复用与医院落地',
};

export const smartMarathonTranslations: TranslationMap = {
  ...common,
  'Tencent Micision': '腾讯觅决',
  'Smart Marathon': '智慧马拉松',
  'A real-time race command platform that turns runner data into faster emergency response.':
    '一套实时赛事指挥平台，把跑者数据转化为更快的应急响应。',
  'Project overview video': '项目概览视频',
  '16:9 video showing the race map, live data, and emergency workflow': '16:9 视频，展示赛事地图、实时数据与应急流程',
  'Video will be added when the final source file is available.': '最终视频素材确认后补充。',
  'Marathon command platform': '马拉松赛事指挥平台',
  'March-April 2019': '2019 年 3–4 月',
  'Product manager and design lead': '产品经理与设计负责人',
  'Yangzhou Marathon': '扬州马拉松',
  '3 people': '3 人',
  'Coordination, research, visualization, Unreal Engine, development': '跨方协调、调研、可视化、Unreal Engine 与开发',
  'One screen for a live race': '用一块屏幕掌握整场赛事',
  'Falls, heatstroke, cardiac events, route errors, and exhaustion can require a coordinated response across the entire course.':
    '跌倒、中暑、心脏异常、路线偏离和体力透支，都可能需要沿赛道的多个团队共同响应。',
  'Commanders needed to locate a runner, understand the situation, and reach the nearest response team within minutes.':
    '指挥人员需要在几分钟内定位跑者、判断情况，并联系最近的救援力量。',
  'The platform combined runner location, wearable health data, route conditions, ambulances, first-aid stations, and command decisions.':
    '平台把跑者位置、穿戴设备健康数据、赛道状态、救护车、急救站和调度决策放在同一视图。',
  'Race command overview': '赛事指挥总览',
  '16:10 interface view showing the Yangzhou course and live event data': '16:10 界面图，展示扬州赛道与实时赛事数据',
  'Coordinating six partners in four weeks': '四周内协同六方落地',
  'The project began without a domestic reference case and moved from concept to live event in less than one month.':
    '当时国内没有可参考的同类案例，项目在不到一个月内从概念走到赛事现场。',
  First: '首个',
  'Domestic marathon big data lake visualization project': '国内马拉松大数据湖可视化项目',
  'Partner organizations working across the event': '参与赛事协作的机构',
  '< 1 month': '不到 1 个月',
  'From exploration to live delivery': '从探索到现场交付',
  'People on the core project team': '核心项目团队人数',
  'Partner and delivery map': '协作与交付关系图',
  '16:9 diagram showing the organizing committee, public security, rescue command, telecom, wearable, and technology partners':
    '16:9 图，展示组委会、公安、应急救援、通信、穿戴设备与技术团队的协作关系',
  'Researching the command room': '走进赛事指挥室',
  'We studied the event command center to understand what each team needed, when they needed it, and who received the information next.':
    '我们进入赛事指挥中心，了解不同团队在什么时刻需要什么信息，以及信息接下来交给谁。',
  'Command center research': '指挥中心调研',
  '4:3 photograph or research board showing interviews with event command staff': '4:3 照片或研究板，记录对赛事指挥人员的访谈',
  'Sports bureau staff': '体育局工作人员',
  'Needed an overview of race progress, participation, and operational status.': '需要掌握赛事进度、参与情况和整体运行状态。',
  'Medical commanders': '医疗指挥人员',
  'Needed abnormal health signals, precise runner locations, and nearby rescue resources.': '需要异常健康信号、跑者精确位置与附近救援资源。',
  'Security commanders': '安保指挥人员',
  'Needed crowd, route, checkpoint, and incident information in one shared view.': '需要在统一视图中查看人群、路线、检查点与事件信息。',
  'Which data is needed in each situation?': '每种情况需要哪些数据？',
  'How much detail supports the decision?': '多少细节足以支持判断？',
  'How quickly must the data update?': '数据需要多快更新？',
  'Who receives the information next?': '下一步由谁接收信息？',
  'Matching data to visual form': '为数据选择合适的视觉形式',
  'We organized the event data around four statistical relationships, then selected the chart form for each operational question.':
    '我们先按四类统计关系整理赛事数据，再为每个运营问题选择对应图表。',
  'Visualization framework': '可视化框架',
  '16:9 diagram mapping the event dataset to composition, distribution, comparison, and trend': '16:9 图，将赛事数据对应到构成、分布、比较与趋势',
  Composition: '构成',
  'What the event is made of and how each group contributes to the whole.': '赛事由哪些群体构成，各自占整体的多少。',
  Distribution: '分布',
  'Where runners, staff, vehicles, and incidents are located along the route.': '跑者、工作人员、车辆与事件在赛道上的位置。',
  Comparison: '比较',
  'How participant groups, checkpoints, and operational resources differ.': '不同参赛群体、检查点与运营资源之间的差异。',
  Trend: '趋势',
  'How pace, density, health signals, and race conditions change over time.': '配速、密度、健康信号和赛事状态如何随时间变化。',
  'Making the city readable in real time': '让城市在实时数据中变得可读',
  'Unreal Engine brought the route, city landmarks, medical resources, checkpoints, and moving participants into one spatial view.':
    'Unreal Engine 将路线、城市地标、医疗资源、检查点和移动中的参赛者放进同一空间视图。',
  'Yangzhou 3D race environment': '扬州 3D 赛事环境',
  'Wide image showing the modeled city, race route, and event infrastructure': '宽幅图片，展示城市模型、赛道与赛事设施',
  Landmarks: '地标',
  'Square image showing the landmark marker system': '方形图片，展示地标标记系统',
  Hospitals: '医院',
  'Square image showing hospitals and medical stations': '方形图片，展示医院与医疗站点',
  Milestones: '里程点',
  'Square image showing distance and checkpoint markers': '方形图片，展示里程与检查点标记',
  'Live runner visualization': '实时跑者可视化',
  '16:9 scene showing five participant groups, route position, and real-time data refresh': '16:9 场景，展示五类参与者、路线位置与实时数据刷新',
  'Five participant groups': '五类参与者',
  'Particle colors separate event roles. Ordinary runners use the highest-contrast color because they represent the largest data group.':
    '粒子颜色用于区分赛事角色。普通跑者人数最多，因此使用对比最强的颜色。',
  'The pulse rate follows the wearable refresh cycle, helping the command team perceive that the map is receiving live data.':
    '粒子脉冲与穿戴设备刷新频率同步，让指挥团队能感知地图正在接收实时数据。',
  'Designing the emergency loop': '设计应急闭环',
  'An abnormal wearable signal becomes useful only when the command team can connect it with location, people, and nearby response resources.':
    '只有把穿戴设备的异常信号与位置、人员和附近救援资源联系起来，它才真正能帮助指挥决策。',
  'Bracelet data identifies an abnormal health signal.': '手环数据识别异常健康信号。',
  'The map highlights the runner and exact route position.': '地图突出显示跑者及其赛道位置。',
  'Commanders review runner details and nearby medical resources.': '指挥人员查看跑者信息和附近医疗资源。',
  'The nearest ambulance or first-aid team is contacted.': '联系最近的救护车或急救队。',
  'Abnormal signal alert': '异常信号预警',
  '4:3 map view showing the expanding alarm around a runner': '4:3 地图视图，展示跑者周围扩散的警报',
  "The alert marks the affected area and opens the runner's detailed information.": '预警标记影响区域，并打开跑者详细信息。',
  'Medical dispatch': '医疗调度',
  '4:3 map view showing nearby ambulances and first-aid stations': '4:3 地图视图，展示附近救护车与急救站',
  'Vehicle details and contact information help dispatchers reach the nearest response team.':
    '车辆详情与联系方式帮助调度人员迅速联系最近的响应团队。',
  'Live validation and contribution': '现场验证与成果',
  'The platform launched at the Yangzhou Marathon in April 2019 and was used by the live event command team.':
    '平台于 2019 年 4 月在扬州马拉松上线，并由现场赛事指挥团队实际使用。',
  'During the race, the platform flagged an abnormal heart rate at the 8-kilometer mark.':
    '比赛期间，平台在 8 公里处识别到一名跑者心率异常。',
  'Staff used the location information to contact a nearby ambulance for assistance.':
    '工作人员根据定位信息联系了附近救护车前往协助。',
  'Competition supervision site': '赛事督导现场',
  '16:9 photograph of the command team using the platform during the race': '16:9 现场照片，展示指挥团队在比赛期间使用平台',
  'Live event delivery': '赛事现场交付',
  '4:3 photograph showing the platform installed at the Yangzhou Marathon': '4:3 现场照片，展示平台在扬州马拉松完成部署',
  'The system moved from product exploration to live delivery in under four weeks.': '系统在不到四周内从产品探索走到现场交付。',
  'On-site review': '现场评审',
  '4:3 photograph of the event operations review and platform demonstration': '4:3 现场照片，记录赛事运营评审与平台演示',
  'The live platform was reviewed on site by event leadership and the Mayor of Yangzhou.':
    '赛事领导与扬州市市长在现场听取了平台汇报并进行评审。',
  'Product management': '产品管理',
  'Defined the product scope': '明确产品范围',
  'Planned the delivery process': '规划交付流程',
  'Balanced priorities within the four-week schedule': '在四周周期内协调优先级',
  'Research and design': '研究与设计',
  'Interviewed command staff': '访谈赛事指挥人员',
  'Translated scenarios into requirements': '把现场场景转化为产品需求',
  'Designed the information and interaction framework': '设计信息与交互框架',
  '3D and development': '3D 与开发',
  'Designed the Yangzhou 3D scene': '设计扬州 3D 场景',
  'Defined runner and unit visualization': '定义跑者与赛事单位的可视化方式',
  'Supported Unreal Engine implementation': '支持 Unreal Engine 落地',
  'Coordination and delivery': '协作与交付',
  'Aligned six partner organizations': '协调六家合作机构',
  'Integrated bracelet and location data': '接入手环与定位数据',
  'Supported the live event launch': '支持赛事现场上线',
  'Read the event coverage': '查看赛事报道',
};

export const healthcareServiceTranslations: TranslationMap = {
  ...common,
  'Tencent Medical Cloud': '腾讯医疗云',
  'Healthcare Service Design': '医疗服务设计',
  'An online and in-hospital service system that shortened patient visits and reduced administrative work.':
    '一套连接线上服务与院内引导的就医系统，缩短患者在院时间，也减少医务人员的事务性工作。',
  'Service system overview': '服务系统概览',
  '16:9 image or video introducing the patient journey and connected service touchpoints': '16:9 图片或视频，介绍患者旅程及相互衔接的服务触点',
  'Final project media will replace this placeholder.': '最终项目素材确认后替换此占位内容。',
  'Patient experience service design': '患者体验服务设计',
  'August-October 2017': '2017 年 8–10 月',
  'Product manager and service designer': '产品经理与服务设计师',
  Hospitals: '合作医院',
  'Fudan University Shanghai Cancer Center and Beijing 301 Hospital': '复旦大学附属肿瘤医院与北京 301 医院',
  Channels: '服务渠道',
  'WeChat official account and in-hospital service materials': '微信公众号与院内服务物料',
  'Observation, interviews, journey mapping, prototyping, and field testing': '观察、访谈、旅程地图、原型与现场测试',
  'Shortening the hospital day': '缩短患者在医院的一天',
  'Long queues and repeated information handoffs made a hospital visit difficult for patients and staff.':
    '漫长排队和反复的信息交接，让患者和医务人员都承受了额外负担。',
  'The service joined digital tasks and hospital guidance into one continuous visit.':
    '这套服务把线上操作与院内引导接成一段连续的就医旅程。',
  'It addressed registration, waiting, examinations, payment, and document collection through the hospital account and on-site materials.':
    '患者可通过医院公众号与现场物料完成挂号、候诊、检查、缴费和资料领取。',
  'Average reduction in the time patients spent at the hospital.': '患者平均在院时间减少',
  "Average reduction in doctors' time spent collecting materials.": '医生平均资料收集时间减少',
  'Before and after launch': '上线前后',
  'Wide comparison showing outpatient conditions before launch and after the new service went live': '宽幅对比图，展示门诊服务上线前后的现场变化',
  'Researching inside the hospital': '在医院现场开展研究',
  'The research combined observation, interviews, and a complete first-person visit through the hospital.':
    '研究结合现场观察、访谈和一次完整的第一人称就医体验。',
  'Patient journey observation': '患者旅程观察',
  'Portrait photograph of waiting areas, service counters, and in-hospital navigation': '竖幅照片，记录候诊区、服务台与院内导视',
  'On-site field study': '现场田野调研',
  'Portrait photograph documenting queues and communication during a hospital visit': '竖幅照片，记录就医过程中的排队与沟通',
  'This was the first product project I led. Entering the service as a patient made the friction visible in a way reports could not.':
    '这是我第一次主导产品项目。亲自以患者身份走完整个流程，让报告里看不见的摩擦变得具体。',
  'The team visited Fudan University Shanghai Cancer Center and studied communication among patients, doctors, and department leaders.':
    '团队前往复旦大学附属肿瘤医院，观察患者、医生和科室负责人之间的信息传递。',
  Observe: '观察',
  'Followed the complete visit and recorded where patients slowed down, waited, or asked for help.':
    '跟随完整就医流程，记录患者停顿、等待和寻求帮助的节点。',
  Listen: '倾听',
  'Sat in on conversations between patients and doctors to understand missing information and uncertainty.':
    '旁听医患沟通，理解信息缺口和不确定感来自哪里。',
  Interview: '访谈',
  'Spoke with patients, doctors, and department heads about practical pain points in the service.':
    '与患者、医生和科室负责人交流服务中的实际问题。',
  Experience: '亲历',
  'Registered as a patient and completed the journey firsthand to test each transition in context.':
    '以患者身份挂号并完成整段旅程，在真实情境中检验每一次流程衔接。',
  'Rebuilding the patient journey': '重新梳理患者旅程',
  'A journey map brought the observed pain points, opportunities, and touchpoints into one working view.':
    '旅程地图把观察到的问题、机会点和触点放在同一张工作视图中。',
  'Patient journey map': '患者旅程地图',
  'Wide journey map showing observations, patient needs, pain points, and service opportunities': '宽幅旅程地图，展示观察、患者需求、问题与服务机会',
  'The map kept the service grounded in what happened between departments, screens, signs, and people.':
    '这张地图让设计始终回到科室、屏幕、标识和人之间真实发生的事情。',
  Guidance: '就医引导',
  'Help patients understand where to go and what to prepare before each transition.': '让患者在每次流程转换前知道去哪里、准备什么。',
  'Queue information': '候诊信息',
  'Reduce repeated questions by making waiting status and next actions easier to find.': '让候诊状态和下一步更容易找到，减少重复询问。',
  'Document handoff': '资料交接',
  'Improve the transfer of codes, reports, and collection information between channels.': '改善取件码、报告和领取信息在不同渠道间的传递。',
  'Service continuity': '服务连续性',
  'Keep online instructions and hospital guidance consistent across the entire visit.': '让线上提示与院内引导在整个就医过程中保持一致。',
  'Choosing the first release': '确定第一期范围',
  'Research interviews and early tests helped define which parts of the journey should be improved first.':
    '访谈与早期测试帮助团队判断，患者旅程中的哪些部分应该优先改进。',
  Arrive: '到院',
  Register: '挂号',
  Wait: '候诊',
  Consult: '就诊',
  Examine: '检查',
  Pay: '缴费',
  'Collect medicine': '取药',
  'The first release focused on moments where clearer information or a better handoff could remove repeated waiting and uncertainty.':
    '第一期聚焦那些可以通过更清楚的信息或更顺畅的交接，减少重复等待和不确定感的节点。',
  'Phase 1 design framework': '第一期设计框架',
  '16:9 framework connecting journey findings, design objectives, and the selected service touchpoints': '16:9 框架图，连接旅程发现、设计目标与选定的服务触点',
  'Designing points, paths, and places': '设计点、线与场',
  'The service was organized through individual touchpoints, the complete patient path, and the surrounding hospital environment.':
    '服务从单个触点、完整患者路径和周边院内环境三个层次展开。',
  Points: '点',
  'Design each online and offline touchpoint around the action a patient needs to complete at that moment.':
    '围绕患者当下要完成的动作，设计每个线上与线下触点。',
  'Touchpoint detail': '触点细节',
  'Close view of one critical patient action and its supporting guidance': '局部视图，展示一项关键患者操作及其引导',
  Paths: '线',
  'Connect the hospital account, check-in, consultation, examination, payment, and medicine collection into one journey.':
    '把公众号、签到、就诊、检查、缴费和取药连接成完整旅程。',
  Places: '场',
  'Use floor decals, posters, standing signs, and stickers to make destinations clear throughout the hospital.':
    '通过地贴、海报、立式标牌和贴纸，让院内目的地更容易辨认。',
  'Connecting digital and physical guidance': '连接数字服务与实体引导',
  'The WeChat service and physical guidance were designed as connected parts of the same hospital journey.':
    '微信服务与实体导视被作为同一段就医旅程的两部分共同设计。',
  'Online and offline service system': '线上线下一体化服务系统',
  'Wide framework showing the hospital account, functional modules, QR touchpoints, and guidance materials': '宽幅框架图，展示医院公众号、功能模块、二维码触点与引导物料',
  'Digital service': '数字服务',
  'The hospital account supported key tasks across registration, waiting, consultation, examination, payment, and medicine collection.':
    '医院公众号覆盖挂号、候诊、就诊、检查、缴费和取药等关键任务。',
  Registration: '挂号',
  'Queue status': '候诊进度',
  Reports: '报告',
  Payment: '缴费',
  'Physical guidance': '实体引导',
  'Floor decals, posters, standing signs, and stickers helped patients find destinations and confirm the next action.':
    '地贴、海报、立式标牌和贴纸帮助患者找到目的地，并确认下一步。',
  'QR codes and barcodes for waiting-room check-in and medicine collection were repeatedly tested to find a practical scan size.':
    '候诊签到与取药所用的二维码和条形码经过多轮测试，最终确定适合现场扫描的尺寸。',
  'Results and contribution': '结果与贡献',
  'The team launched in the hospital, supported patients on site, and returned one week later to review the outcome.':
    '团队在医院完成上线、现场协助患者使用，并于一周后回访评估结果。',
  'Official launch': '正式上线',
  'The online service and hospital materials went live on October 16, 2017.': '线上服务与院内物料于 2017 年 10 月 16 日正式启用。',
  'On-site support': '现场支持',
  'The project team and medical guides helped patients use the new service in the hospital.': '项目团队与医导在医院现场协助患者使用新服务。',
  'Follow-up visit': '上线回访',
  'One week later, the team returned to collect feedback from patients and doctors.': '一周后，团队回到医院收集患者与医生的反馈。',
  'Launch-day support': '上线当天支持',
  '4:3 photograph of patients using the new service with staff assistance': '4:3 现场照片，展示患者在工作人员协助下使用新服务',
  'Post-launch hospital visit': '上线后回访',
  '4:3 photograph documenting service use and follow-up observations': '4:3 现场照片，记录服务使用与后续观察',
  'Defined the Phase 1 service scope': '定义第一期服务范围',
  'Connected research findings with delivery priorities': '把研究发现与交付优先级对应起来',
  'Coordinated the online and hospital experience': '统筹线上与院内体验',
  'Observed the full patient journey': '观察完整患者旅程',
  'Interviewed patients, doctors, and department heads': '访谈患者、医生与科室负责人',
  'Tested the service as a patient': '以患者身份体验并测试服务',
  'Built the patient journey map': '建立患者旅程地图',
  'Grouped pain points and opportunities': '整理问题与机会点',
  'Designed the points, paths, and places framework': '设计点、线、场框架',
  'Tested QR and barcode sizes': '测试二维码与条形码尺寸',
  'Supported the hospital launch': '支持医院现场上线',
  'Collected post-launch feedback': '收集上线后反馈',
  'Read the hospital case report': '查看医院案例报道',
};

export const larkGlobalTranslations: TranslationMap = {
  ...common,
  'Lark and Feishu': 'Lark 与飞书',
  'Global Marketing Design': '全球营销设计',
  'Web experiences and reusable systems that helped marketing teams publish, test, and sell faster.':
    '通过网站体验与可复用系统，帮助营销团队更快发布、验证并支持销售。',
  'Global marketing design reel': '全球营销设计合集',
  '16:9 video showing Customer Stories, product pages, 3D work, and design operation systems':
    '16:9 视频，展示客户案例、产品页面、3D 视觉与设计运营系统',
  'Final project media will replace this placeholder.': '最终项目素材确认后替换此占位内容。',
  'Global marketing website and design operations': '全球营销网站与设计运营',
  'Web designer, visual designer, and frontend builder': '网页设计、视觉设计与前端搭建',
  'PMM, Sales, Product, UX, and Creative Design': 'PMM、销售、产品、UX 与创意设计',
  'Customer Stories, product pages, 3D campaigns, component library, and brand assets':
    '客户案例、产品页面、3D 营销视觉、组件库与品牌资产',
  'Framer, CMS, Spline, Lark aPaaS, and low-code workflows': 'Framer、CMS、Spline、飞书 aPaaS 与低代码工作流',
  'Designing for the marketing loop': '围绕营销闭环开展设计',
  'The work connected brand quality with the practical needs of PMM, Sales, Product, and Creative Design.':
    '这项工作把品牌品质与 PMM、销售、产品和创意设计团队的实际需求连接起来。',
  'A marketing page was useful only when teams could publish, test, and update it at business speed.':
    '营销页面只有跟得上业务的发布、测试和更新节奏，才真正有价值。',
  'The design scope expanded from page craft to content systems, tools, shared assets, and team operating models.':
    '设计范围也因此从单个页面，扩展到内容系统、工具、共享资产与团队协作方式。',
  'Customer-facing work': '面向客户的设计',
  'Customer Stories, product websites, campaign visuals, motion, and 3D product storytelling.':
    '客户案例、产品网站、营销视觉、动效与 3D 产品叙事。',
  'Internal systems': '内部系统',
  'CMS templates, interface components, asset retrieval, SOPs, training, and ongoing operations.':
    'CMS 模板、界面组件、资产检索、SOP、培训与持续运营。',
  'Customer Stories as a system': '把客户案例做成一套系统',
  'Customer Stories needed to attract local prospects while giving PMM and Sales a faster route from brief to publication.':
    '客户案例需要吸引本地潜在客户，同时缩短 PMM 和销售从提出需求到内容发布的过程。',
  'Customer Stories landing page': '客户案例首页',
  'Wide desktop view showing regional filters, featured stories, story cards, and lead capture':
    '桌面端宽幅视图，展示区域筛选、精选案例、内容卡片与线索收集',
  'Business context': '业务背景',
  'Lark needed different customer evidence for different regions. The site had to improve brand credibility while supporting faster sales conversations and lead generation.':
    'Lark 需要针对不同市场提供相应的客户证据。网站要兼顾品牌可信度、销售沟通和线索转化速度。',
  'Regional relevance': '区域相关性',
  'Different markets needed customer stories that reflected local industries, use cases, and buyer concerns.':
    '不同市场需要能回应当地行业、使用场景与采购顾虑的客户故事。',
  'Faster testing': '更快验证',
  'PMM teams needed to publish and adjust stories quickly as commercial strategies changed.':
    '商业策略变化时，PMM 团队需要快速发布并调整案例内容。',
  'Sales support': '销售支持',
  'The website needed to help sales teams explain product value with credible customer evidence.':
    '网站需要用可信的客户证据，帮助销售更清楚地说明产品价值。',
  'Building without a dedicated engineer': '没有专职工程师也能落地',
  'Limited engineering capacity made self-directed development the fastest way to test the new publishing model.':
    '工程资源有限，自主搭建成为验证新发布模式最快的办法。',
  '2 weeks': '2 周',
  'From learning Framer to a working landing-page and story-page template.':
    '从学习 Framer 到完成可用的首页与案例页模板。',
  'The build included tag filters, card behavior, motion, and content templates. Unresolved platform features were discussed directly with the Framer team.':
    '搭建范围包括标签筛选、卡片交互、动效与内容模板。平台能力不明确时，我们直接与 Framer 团队沟通确认。',
  'Framer tool and build process': 'Framer 工具与搭建过程',
  '16:10 image showing tool evaluation, template construction, filters, card logic, and interaction tests':
    '16:10 图片，展示工具评估、模板搭建、筛选、卡片逻辑与交互测试',
  'Turning pages into reusable modules': '把页面拆成可复用模块',
  'The final site separated layout rules from story content so PMM could manage regional updates independently.':
    '最终网站将版式规则与案例内容分离，让 PMM 可以独立维护不同地区的更新。',
  'CMS template system': 'CMS 模板系统',
  'Tall image showing editable CMS fields, module rules, and reusable story layouts': '长图，展示可编辑的 CMS 字段、模块规则与可复用案例版式',
  'What became reusable': '沉淀下来的模块',
  'Industry and region tags': '行业与地区标签',
  'Story cards': '案例卡片',
  'Hero and banner modules': '首屏与横幅模块',
  'Article content blocks': '文章内容模块',
  'Typography rules': '文字排版规则',
  'Motion behavior': '动效规则',
  'Reported efficiency improvement after PMM took ownership of routine Customer Stories updates.':
    'PMM 接手客户案例日常更新后，反馈发布效率提升。',
  'Publishing SOP': '发布 SOP',
  'Wide before-and-after workflow showing the handoff change from repeated design support to PMM self-service':
    '宽幅前后对比流程，展示从反复依赖设计支持到 PMM 自助发布的变化',
  'Extending the product visual language': '扩展产品视觉语言',
  'The same approach continued across product websites, motion studies, and 3D commerce visuals.':
    '同一思路延伸到产品网站、动效探索与 3D 商业视觉。',
  'Feishu Project homepage': '飞书项目首页',
  'Wide product page showing the five core benefits, clearer hierarchy, and product interface views':
    '宽幅产品页，展示五项核心价值、更清晰的信息层级与产品界面',
  'Feishu Project website': '飞书项目网站',
  'Refined the product homepage around five core benefits, clearer information hierarchy, and 3D visual concepts.':
    '围绕五项核心价值重构产品首页，改善信息层级，并探索 3D 视觉概念。',
  'Attendance device renders': '考勤设备渲染',
  'Portrait composition showing the product, feature details, exploded view, and commerce page':
    '竖幅组合图，展示产品、功能细节、爆炸图与电商页面',
  'Lark attendance device': 'Lark 考勤设备',
  'Reworked supplier material, rebuilt the product renders, and aligned the commerce page with the Lark visual language.':
    '重新整理供应商素材与产品渲染，并让电商页面与 Lark 的视觉语言保持一致。',
  'Spline motion study': 'Spline 动效探索',
  '16:9 video showing an interactive 3D concept for the Feishu Project homepage': '16:9 视频，展示飞书项目首页的交互式 3D 概念',
  'Design review': '设计取舍',
  'The 3D direction improved visual communication and received positive feedback. The final homepage used static 3D to stay consistent with related product pages and control development cost.':
    '3D 方向改善了视觉表达，也获得了积极反馈。最终首页采用静态 3D，以保持相关产品页面的一致性，并控制开发成本。',
  'Creating a shared interface library': '建立共享界面组件库',
  'Repeated interface recreation created delays, inconsistent visuals, and avoidable review cycles across teams.':
    '各团队反复重做界面，带来了延误、视觉不一致和本可避免的审核成本。',
  'Feishu product functions documented by 2023 Q1': '截至 2023 年第一季度完成归档的飞书产品功能',
  'Languages supported across Chinese, English, and Japanese': '支持中文、英文与日文',
  'Abstract interface assets in the domestic component set': '国内组件库中的抽象界面资产',
  'Abstract interface assets in the Lark Global set': 'Lark Global 组件库中的抽象界面资产',
  'Multilingual interface component library': '多语言界面组件库',
  'Wide view showing standard and abstract interface components across product groups and languages':
    '宽幅视图，展示跨产品组与多语言的标准界面和抽象界面组件',
  'Workflow before and after the library': '组件库建立前后的流程',
  'Wide process map showing how approved interfaces replaced repeated abstraction, confirmation, and rework':
    '宽幅流程图，展示已审核界面如何替代反复抽象、确认与返工',
  'Building the brand asset platform': '搭建品牌资产平台',
  'The asset platform brought interface files, abstract UI, videos, and commercial materials into one searchable place.':
    '资产平台把界面文件、抽象 UI、视频和商业素材集中到一个可检索入口。',
  'Built with Lark aPaaS': '基于飞书 aPaaS 搭建',
  'With limited engineering resources, the design team defined the first release around upload, download, categories, and file formats, then built the platform internally.':
    '在工程资源有限的情况下，设计团队先确定上传、下载、分类与文件格式等首期能力，再在内部完成平台搭建。',
  'Version 1.0 launched in 2023 Q2 with usage guidelines, contributor training, weekly release notes, and feedback activities.':
    '1.0 版本于 2023 年第二季度上线，同时配套使用规范、贡献者培训、每周更新说明与反馈活动。',
  'Lark brand asset platform': 'Lark 品牌资产平台',
  '16:10 platform view showing categories, asset cards, upload, download, and format information':
    '16:10 平台视图，展示分类、资产卡片、上传、下载与格式信息',
  'People covered at launch': '上线时覆盖人数',
  'Accumulated users after eight workdays': '上线 8 个工作日累计用户',
  'Page views on launch day': '上线首日浏览量',
  'Weekly page views': '每周浏览量',
  'Researching AI-assisted design operations': '研究 AI 如何辅助设计运营',
  'The existing systems create a practical foundation for testing where AI can reduce repeat work without weakening review quality.':
    '现有系统为后续实验提供了真实基础：AI 可以在哪些环节减少重复劳动，同时不降低审核质量。',
  'This is an active research direction based on the operational work above. It is not presented as a shipped Lark product.':
    '这项研究延续了上述设计运营实践，目前仍在推进，尚未作为 Lark 产品功能上线。',
  'Brief understanding': '需求理解',
  'Can AI turn a PMM brief into a structured first draft while keeping the business goal visible?':
    'AI 能否把 PMM 需求整理成结构化初稿，同时不丢失业务目标？',
  'Approved asset retrieval': '已审核资产检索',
  'Can multimodal search find the right interface, campaign, and brand assets from the existing libraries?':
    '多模态检索能否从现有资产库中找到合适的界面、营销与品牌素材？',
  'Localization support': '本地化支持',
  'Can AI adapt page structure and copy for a market without changing verified customer facts?':
    'AI 能否针对不同市场调整页面结构和文案，同时保留已核实的客户事实？',
  'Preflight review': '交付前检查',
  'Can AI flag brand, accessibility, terminology, and responsive issues before design handoff?':
    'AI 能否在设计交付前发现品牌、无障碍、术语和响应式问题？',
  'Approved context': '已审核上下文',
  'Brief and intent': '需求与意图',
  'AI-assisted draft': 'AI 辅助初稿',
  'Human review': '人工审核',
  'Publish and measure': '发布与衡量',
  'Evaluation should compare cycle time, factual accuracy, brand consistency, localization quality, and the amount of human correction required.':
    '评估将比较制作周期、事实准确度、品牌一致性、本地化质量，以及所需人工修改量。',
  'AI efficiency research framework': 'AI 效率研究框架',
  'Wide diagram connecting approved knowledge, multimodal asset search, assisted drafting, human review, and measurable outcomes':
    '宽幅图，连接已审核知识、多模态资产检索、辅助起稿、人工审核与可衡量结果',
  'Outcomes and contribution': '成果与贡献',
  'The work moved from individual web pages to reusable systems that teams could operate and improve themselves.':
    '工作从单个网页逐步沉淀为团队可以自行运营、持续改进的复用系统。',
  'Efficiency improvement reported for the Customer Stories publishing workflow.': '客户案例发布流程反馈的效率提升',
  'A repeatable operating model': '可持续复用的运营方式',
  'Templates, standards, training, ownership, and feedback kept the systems useful after launch.':
    '模板、规范、培训、明确的维护责任与反馈机制，让系统上线后仍然持续发挥作用。',
  'Marketing experience': '营销体验',
  'Designed Customer Stories and product pages': '设计客户案例与产品页面',
  'Translated product benefits into web narratives': '把产品价值转化为网页叙事',
  'Built motion and 3D visual directions': '建立动效与 3D 视觉方向',
  'Frontend and tooling': '前端与工具',
  'Built reusable pages in Framer': '使用 Framer 搭建可复用页面',
  'Created CMS modules and content rules': '建立 CMS 模块与内容规则',
  'Tested low-code workflows when engineering capacity was limited': '在工程资源有限时验证低代码工作流',
  'Design operations': '设计运营',
  'Led the interface component library': '主导界面组件库',
  'Built the brand asset platform with Lark aPaaS': '使用飞书 aPaaS 搭建品牌资产平台',
  'Created SOPs and trained PMM and design teams': '建立 SOP，并培训 PMM 与设计团队',
  'Ongoing research': '持续研究',
  'Mapped repeatable work for AI assistance': '梳理适合 AI 辅助的重复工作',
  'Defined source and review requirements': '明确内容来源与审核要求',
  'Separated research hypotheses from shipped results': '区分研究假设与已交付成果',
};

export const bauhiniaMindTranslations: TranslationMap = {
  'Bauhinia-Mind': '紫荆心智',
  ...common,
  'An Empathic, Memory-Enabled AI Health Companion for Mainland Chinese Students in Hong Kong':
    '为在港内地学生设计的共情式记忆型 AI 健康伙伴',
  'MSc in Generative AI and the Humanities Capstone · Grade A+': '生成式 AI 与人文学硕士毕业项目 · A+',
  'Jan 2026 – Apr 2026': '2026 年 1 月至 4 月',
  'Sole Researcher, Designer & Builder (UX Research, System Design, GraphRAG, Frontend)':
    '独立研究、设计与开发（UX 研究、系统设计、GraphRAG、前端）',
  'IAM · Narrative Medicine · Know-Feel-Act · Research-through-Design':
    '互动涵化模型 · 叙事医学 · Know-Feel-Act · 通过设计开展研究',
  'Final report': '完整报告',
  'Architecture diagram': '架构图',
  Abstract: '摘要',
  'Mainland Chinese students in Hong Kong often face a dual challenge: practical uncertainty in an unfamiliar healthcare system and emotional stress during cross-cultural transition.':
    '在港内地学生常常同时面对两类压力：对本地医疗体系不熟悉带来的现实不确定，以及跨文化适应中的情绪负担。',
  'Bauhinia-Mind addresses this gap as a bilingual, memory-enabled, non-clinical AI companion that integrates localized medical navigation and empathetic dialogue within one safety-aware conversational pipeline.':
    '紫荆心智是一个双语、具备跨会话记忆的非临床 AI 伙伴。它把本地就医导航与共情对话整合在同一条具备安全边界的会话流程中。',
  'Technically, the system combines hybrid GraphRAG retrieval (Supabase pgvector with 3072-dimensional embeddings + Neo4j structured reasoning), bilingual query enhancement, and a structured Know-Feel-Act (A/B/C) empathy policy.':
    '系统采用混合 GraphRAG 检索（Supabase pgvector 3072 维向量与 Neo4j 结构化推理）、双语查询增强，以及结构化的 Know-Feel-Act（A/B/C）共情策略。',
  'The current prototype has processed 30 localized Hong Kong medical documents, built a knowledge graph with 1,188 nodes and 1,733 relations, and maintains average response latency under 2.5 seconds while preserving strict non-diagnostic boundaries.':
    '当前原型已处理 30 份香港本地医疗资料，建立包含 1,188 个节点和 1,733 条关系的知识图谱；在严格遵守非诊断边界的前提下，平均响应时间低于 2.5 秒。',
  'Research & Gap': '研究与机会缺口',
  'User Research': '用户研究',
  'RESEARCH APPROACH': '研究方法',
  'Research Approach': '研究方法',
  'A structured multi-dimensional questionnaire was designed around the complete healthcare-seeking journey, rather than isolated service touchpoints.':
    '问卷以完整求医旅程为线索，覆盖各阶段的服务触点。',
  'The framework examines each stage through five UX dimensions—Information, Decision, Culture, Emotion, and Support—to identify where uncertainty, friction, and emotional stress emerge.':
    '研究从信息、决策、文化、情绪和支持五个体验维度审视每个阶段，寻找不确定、阻碍与情绪压力出现的位置。',
  'From:': '旅程阶段：',
  'Search → Decide → Navigate → Seek Care → Follow-up': '搜索 → 决策 → 导航 → 就医 → 随访',
  'Across:': '体验维度：',
  'Information · Decision · Culture · Emotion · Support': '信息 · 决策 · 文化 · 情绪 · 支持',
  'CONCLUSION': '结论',
  'The user research reveals that the three challenges—information fragmentation, cross-cultural system mismatch, and emotional vulnerability—are not isolated. They reinforce one another across the healthcare-seeking journey, increasing uncertainty and making it harder for students to decide what to do next.':
    '用户研究显示，信息碎片化、跨文化医疗路径差异和情绪脆弱会在求医过程中互相放大，让学生更难判断下一步。',
  'OPPORTUNITY': '设计机会',
  'Bauhinia-Mind can address this interconnected gap by acting as a non-clinical cultural host that translates local healthcare information into culturally understandable, emotionally supportive, and executable guidance.':
    '紫荆心智可以作为非临床的“文化向导”，把本地医疗信息转化为文化上易理解、情绪上有支持、行动上可执行的指引。',
  'From isolated pain points → to an integrated support journey that connects information, culture, emotion, and action.':
    '设计机会在于把零散问题串成一段连接信息、文化、情绪与行动的支持旅程。',
  'Market Research & Benchmark Matrix': '市场研究与竞品矩阵',
  'The competitive landscape and service benchmark reveal a consistent gap: existing solutions are strong in isolated areas, but no single service integrates localized healthcare grounding, cross-cultural adaptation, empathetic support, continuity, and actionable navigation across the full user journey.':
    '竞品与服务基准分析发现了一个持续存在的空缺：现有方案往往只擅长单一环节，没有一项服务能在完整旅程中同时覆盖本地医疗依据、跨文化适应、共情支持、连续性与可执行导航。',
  'Bauhinia-Mind addresses this gap by acting as a non-clinical cultural host, connecting reliable local information with emotional understanding and clear next steps.':
    '紫荆心智以非临床文化向导的角色，将可靠的本地信息、情绪理解与清晰的下一步连接起来。',
  'From fragmented support → to an integrated, grounded, empathetic, and actionable pathway.':
    '最终形成一条有依据、能共情、可行动的完整支持路径。',
  'Related work': '相关研究',
  REFERENCE: '参考文献',
  Reference: '参考文献',
  'IMPLICATION FOR DESIGN': '对设计的启发',
  'Implication for design': '对设计的启发',
  'Mainland students in Hong Kong face both system unfamiliarity and identity stress. Bauhinia-Mind models this as a dual challenge: practical pathway uncertainty and emotional vulnerability.':
    '在港内地学生既不熟悉本地医疗体系，也承受身份与文化适应压力。紫荆心智将其视为“求医路径不确定”与“情绪脆弱”的双重挑战。',
  'The system operationalizes empathy into a structured Know-Feel-Act policy: acknowledge emotion, gently follow up, then offer low-pressure executable next steps.':
    '系统将共情落实为结构化的 Know-Feel-Act 策略：先回应情绪，再温和追问，最后给出低压力、可执行的下一步。',
  'Healthcare support benefits from continuity, not one-off answers. Bauhinia-Mind uses cross-session memory to provide context-aware follow-up and build relational trust.':
    '健康支持需要连续关系。紫荆心智通过跨会话记忆提供结合上下文的跟进，并逐步建立信任。',
  'Pure generative chat is insufficient in healthcare-adjacent scenarios. Bauhinia-Mind combines bilingual vector retrieval and Neo4j graph reasoning to improve factual reliability while preserving supportive interaction.':
    '单纯的生成式对话不足以应对健康相关场景。紫荆心智结合双语向量检索与 Neo4j 图推理，在保留支持性互动的同时提高事实可靠性。',
  Methodology: '研究方法',
  'Bauhinia-Mind translates cross-cultural healthcare challenges and humanistic theories into a grounded, empathetic, and safety-aware conversational pipeline.':
    '紫荆心智将跨文化求医问题与人文理论，转化为有依据、能共情并具备安全意识的对话流程。',
  Grounded: '有依据',
  'Culturally Bridged': '跨文化衔接',
  Empathetic: '共情',
  'Related Work → Methodology Mapping Table': '相关研究 → 方法映射表',
  'BACKGROUND FINDING': '背景发现',
  'Background Finding': '背景发现',
  'RELATED WORK': '相关研究',
  'Related Work': '相关研究',
  'DESIGN PRINCIPLE': '设计原则',
  'Design Principle': '设计原则',
  'SYSTEM TRANSLATION': '系统实现',
  'System Translation': '系统实现',
  'Information Island': '信息孤岛',
  'RAG / Grounded AI': 'RAG / 有依据的 AI',
  'Reliable + actionable': '可靠且可执行',
  'HK Sources + GraphRAG': '香港本地资料 + GraphRAG',
  'Cultural Island': '文化隔阂',
  IAM: '互动涵化模型',
  'Bridge two systems': '衔接两套体系',
  'Bilingual + pathway reasoning': '双语 + 路径推理',
  'Emotional Island': '情绪孤岛',
  'Narrative Medicine + Know–Feel–Act': '叙事医学 + Know–Feel–Act',
  'Understand before acting': '理解之后再行动',
  'A/B/C empathy policy': 'A/B/C 共情策略',
  'Discontinuous Support': '支持不连续',
  'Bickmore / Generative Agents': 'Bickmore / 生成式智能体',
  'Continuity builds trust': '连续互动建立信任',
  'Cross-session memory': '跨会话记忆',
  'Expected Outcome': '预期结果',
  'BACKGROUND PROBLEM': '背景问题',
  'Background Problem': '背景问题',
  'Fragmented · Unfamiliar · Emotionally unsupported': '信息碎片化 · 体系陌生 · 缺少情绪支持',
  'BAUHINIA-MIND': '紫荆心智',
  'Grounded · Culturally bridged · Empathetic': '有依据 · 能衔接文化差异 · 具备共情',
  OUTCOME: '结果',
  Outcome: '结果',
  'Clear, executable next steps': '清晰、可执行的下一步',
  'Theoretical Framework': '理论框架',
  'Design Process': '设计过程',
  'DESIGN TRANSLATION & PRODUCT ARCHITECTURE': '设计转译与产品架构',
  'Design Translation & Product Architecture': '设计转译与产品架构',
  'A → B · FROM EVIDENCE TO PRINCIPLES': 'A → B · 从证据到原则',
  'A → B · From Evidence to Principles': 'A → B · 从证据到原则',
  'Research findings, market gaps, and theoretical insights were synthesized into a small set of design principles. This creates a consistent decision framework rather than translating individual findings directly into isolated features.':
    '研究发现、市场缺口与理论启发被整理成一组精简的设计原则，为后续产品决策提供一致依据。',
  'B → C · FROM PRINCIPLES TO CAPABILITIES': 'B → C · 从原则到能力',
  'B → C · From Principles to Capabilities': 'B → C · 从原则到能力',
  'Abstract principles were converted into concrete product capabilities that can be designed, implemented, and evaluated. This step ensures that each capability has a clear rationale and directly supports a defined user or system need.':
    '抽象原则被转化为可设计、可实现、可评估的产品能力。每项能力都有清楚的依据，并直接回应明确的用户或系统需求。',
  'C → D · FROM CAPABILITIES TO ARCHITECTURE': 'C → D · 从能力到架构',
  'C → D · From Capabilities to Architecture': 'C → D · 从能力到架构',
  'The capabilities were then organized according to their role in the overall experience: visible user-facing functions, intelligent support mechanisms, and underlying grounding and safety infrastructure. This clarifies how different capabilities work together as one coherent system.':
    '随后按整体体验中的作用组织这些能力：用户可见功能、智能支持机制，以及底层依据与安全基础设施。由此可以看清不同能力如何协同为一个完整系统。',
  'PROTOTYPE JOURNEY': '原型旅程',
  'Prototype Journey': '原型旅程',
  'From core capabilities to a continuous interaction experience': '从核心能力到连续的互动体验',
  'The prototype was structured around the user journey rather than individual screens, allowing each core capability to be tested at the moment it becomes meaningful.':
    '原型按照用户旅程组织。每项核心能力都会在真正需要它的时刻接受测试。',
  'System Architecture': '系统架构',
  'What does the system consist of?': '系统由什么构成？',
  'Bauhinia-Mind is built as a modular hybrid GraphRAG system, combining conversational interaction, intent-based orchestration, semantic retrieval, knowledge-graph reasoning, and empathy-aware generation within one coordinated architecture.':
    '紫荆心智采用模块化混合 GraphRAG 架构，将会话交互、基于意图的编排、语义检索、知识图谱推理与共情生成整合起来。',
  'The architecture separates semantic evidence retrieval from structured pathway reasoning, then fuses both with user intent before response generation. This allows the system to answer not only “what information is relevant?” but also “what should the user do next?”':
    '架构将语义证据检索与结构化路径推理分开，再结合用户意图生成回答。因此，系统既能判断哪些信息相关，也能给出用户下一步可以做什么。',
  'What is the path of a single request?': '一次请求如何流转？',
  'The system does not activate every module for every query. Instead, requests are dynamically routed according to user intent and risk level.':
    '系统不会为每个问题都启动全部模块，而是根据用户意图与风险等级动态分流。',
  'A typical medical query first passes through intent detection and safety screening, then retrieves both structured pathway evidence and relevant local documents. These contexts are fused before empathy-aware generation and post-processing.':
    '典型的医疗相关问题会先经过意图识别与安全筛查，再检索结构化路径证据和相关本地资料。两类上下文融合后，进入共情生成与后处理。',
  'For example:': '例如：',
  'Medical Query → Graph Retrieval + HA Vector Retrieval → Context Fusion → Empathy Policy → Action Card':
    '医疗问题 → 图检索 + 医管局资料向量检索 → 上下文融合 → 共情策略 → 行动卡片',
  'Key Supporting Mechanisms': '关键支持机制',
  'Three supporting mechanisms extend the core architecture beyond retrieval and generation.':
    '核心架构还包含三项支持机制。',
  'EMOTION & EMPATHY PROCESSING': '情绪与共情处理',
  'Emotion & Empathy Processing': '情绪与共情处理',
  'Emotional cues, user intent, and retrieved context are translated into a structured Acknowledge → Gentle Follow-up → Micro-action policy, turning empathy into actionable support rather than generic reassurance.':
    '系统把情绪线索、用户意图和检索上下文转化为“回应情绪 → 温和追问 → 微行动”的结构，让共情落实为具体支持。',
  'MEMORY & CONTINUITY': '记忆与连续性',
  'Memory & Continuity': '记忆与连续性',
  'Relevant cross-session context is retained and recalled to support personalized follow-up, allowing the system to build continuity rather than treating every interaction as a new conversation.':
    '系统保留并按需调用相关的跨会话上下文，以支持个性化跟进。每次对话都能承接此前背景。',
  'SAFETY & ESCALATION': '安全与升级处理',
  'Safety & Escalation': '安全与升级处理',
  'Non-diagnostic boundaries, high-risk escalation, PII redaction, and audit logging keep the system appropriate for healthcare-adjacent use.':
    '非诊断边界、高风险升级、个人信息脱敏与审计日志，让系统适合用于健康相关场景。',
  Validation: '验证',
  'User journeys are used as validation narratives to test whether the system can connect emotional reassurance, localized medical navigation, and safety-aware decision support in realistic situations.':
    '我们以用户旅程作为验证叙事，测试系统能否在真实情境中连接情绪支持、本地就医导航与具备安全意识的决策支持。',
  '[ Fig 10A · Journey UI · onboarding flow · 9:16 ]': '[ 图 10A · 旅程界面 · 新用户引导 · 9:16 ]',
  'Journey UI · onboarding flow': '旅程界面 · 新用户引导',
  'Fig 10A — Onboarding journey (placeholder)': '图 10A — 新用户引导旅程（占位）',
  'FIG 10A — ONBOARDING JOURNEY (PLACEHOLDER)': '图 10A — 新用户引导旅程（占位）',
  '[ COPY SLOT · JOURNEY A · ONBOARDING NARRATIVE · WHAT THE NEWCOMER SEES IN THE FIRST 60 SECONDS · 1–2 PARAGRAPHS ]':
    '[ 文案占位 · 旅程 A · 新用户引导叙事 · 初次使用的 60 秒 · 1–2 段 ]',
  'Journey A · onboarding narrative · what the newcomer sees in the first 60 seconds · 1–2 paragraphs':
    '旅程 A · 新用户引导叙事 · 初次使用的 60 秒 · 1–2 段',
  '[ COPY SLOT · JOURNEY B · IN-MOMENT HELP NARRATIVE · THE LATE-NIGHT SYMPTOM CHECK FLOW · 1–2 PARAGRAPHS ]':
    '[ 文案占位 · 旅程 B · 即时帮助叙事 · 深夜症状查询流程 · 1–2 段 ]',
  'Journey B · in-moment help narrative · the late-night symptom check flow · 1–2 paragraphs':
    '旅程 B · 即时帮助叙事 · 深夜症状查询流程 · 1–2 段',
  '[ Fig 10B · Journey UI · symptom-check flow · 9:16 ]': '[ 图 10B · 旅程界面 · 症状查询流程 · 9:16 ]',
  'Journey UI · symptom-check flow': '旅程界面 · 症状查询流程',
  'Fig 10B — Symptom-check journey (placeholder)': '图 10B — 症状查询旅程（占位）',
  'FIG 10B — SYMPTOM-CHECK JOURNEY (PLACEHOLDER)': '图 10B — 症状查询旅程（占位）',
  'Safety & Non-Clinical Boundaries': '安全与非临床边界',
  '[ COPY SLOT · LEAD PARAGRAPH · HOW THE SYSTEM REFUSES CLINICAL CLAIMS, REDIRECTS TO HUMANS, AND LOGS ESCALATIONS · ~2 SHORT PARAGRAPHS ]':
    '[ 文案占位 · 系统如何拒绝临床判断、转介人工支持并记录升级事件 · 约 2 个短段落 ]',
  'Lead paragraph · how the system refuses clinical claims, redirects to humans, and logs escalations · ~2 short paragraphs':
    '系统如何拒绝临床判断、转介人工支持并记录升级事件 · 约 2 个短段落',
  'Non-clinical': '非临床',
  'Crisis-aware': '识别危机',
  'Bilingual escalation': '双语升级支持',
  'Cultural broker': '文化桥梁',
  'Impact & Outcomes': '影响与成果',
  'Preliminary pilot testing with 45 students over 4 weeks showed statistically significant improvements in self-reported anxiety and depression symptoms. The platform received a System Usability Scale score of 82.5, indicating excellent usability. The project received Grade A+ for the MSc capstone and is currently under consideration for implementation at partner universities.':
    '为期四周、共 45 名学生参与的初步试点显示，参与者自述的焦虑与抑郁症状有统计显著改善。平台的系统可用性量表得分为 82.5，达到优秀水平。项目获得硕士毕业项目 A+，并正在与合作院校讨论落地可能。',
  'Core Discovery': '核心发现',
  'FRAGMENTED BUT AUTHORITATIVE SUPPORT': '可靠但碎片化的支持',
  'Fragmented but Authoritative Support': '可靠但碎片化的支持',
  'Hospital Authority and university channels are reliable but fragmented and non-conversational, making urgent decisions difficult to execute in real time.':
    '医管局与高校渠道可靠，却彼此分散，也缺少对话式支持，导致紧急情况下的信息难以及时转化为行动。',
  'CROSS-CULTURAL PATHWAY MISMATCH': '跨文化求医路径差异',
  'Cross-Cultural Pathway Mismatch': '跨文化求医路径差异',
  'Mainland-to-Hong Kong differences in GP-first triage, public/private routing, and insurance logic increase cognitive load when students are already unwell.':
    '内地与香港在全科医生首诊、公私营转介和保险逻辑上的差异，会在学生身体不适时进一步增加认知负担。',
  'DESIGN IMPERATIVE': '设计要求',
  'Design Imperative': '设计要求',
  'A trustworthy companion must combine emotional reassurance with executable medical next steps, rather than providing one without the other.':
    '可信的健康伙伴需要同时提供情绪安定与可执行的就医下一步，两者缺一不可。',
  'Data and Validation Snapshot': '数据与验证概览',
  'Processed 30 localized medical documents and constructed a Neo4j graph with 1,188 nodes and 1,733 relations (from 1,592 extracted triples).':
    '处理 30 份香港本地医疗资料，并基于 1,592 个抽取三元组构建包含 1,188 个节点、1,733 条关系的 Neo4j 图谱。',
  'Hybrid GraphRAG achieved 86.7% pathway correctness versus 80.0% for vector-only retrieval, with average end-to-end latency under 2.5s.':
    '混合 GraphRAG 的路径正确率为 86.7%，高于纯向量检索的 80.0%；端到端平均延迟低于 2.5 秒。',
  'These findings directly informed the later system architecture, safety design, and output formatting.':
    '这些结果直接影响了后续系统架构、安全设计与输出格式。',
  'PILOT SAMPLE': '试点样本',
  'Pilot sample': '试点样本',
  'students · 4 weeks': '名学生 · 4 周',
  'SUS SCORE': 'SUS 得分',
  'SUS score': 'SUS 得分',
  'excellent usability': '可用性优秀',
  'CAPSTONE GRADE': '毕业项目成绩',
  'Capstone grade': '毕业项目成绩',
  'MScGAH · PolyU': '生成式 AI 与人文学硕士 · 香港理工大学',
  '[ METRIC LABEL · WHAT 86.7% VS 80% MEASURES · TBD ]': '[ 指标说明 · 86.7% 与 80% 的比较维度 · 待补充 ]',
  '[ Metric label · what 86.7% vs 80% measures · TBD ]': '[ 指标说明 · 86.7% 与 80% 的比较维度 · 待补充 ]',
  'Metric label · what 86.7% vs 80% measures · TBD': '指标说明 · 86.7% 与 80% 的比较维度 · 待补充',
  Baseline: '基线',
  'FIG 09 — BAUHINIA-MIND VS BASELINE (PLACEHOLDER METRIC)': '图 09 — 紫荆心智与基线比较（指标占位）',
  'Fig 09 — Bauhinia-Mind vs baseline (placeholder metric)': '图 09 — 紫荆心智与基线比较（指标占位）',
  'Reflections & Future Work': '反思与下一步',
  'This project reinforced the importance of co-design with clinical stakeholders and the necessity of rigorous ethical frameworks when designing AI-driven health interventions. Future iterations will explore peer support features, integration with wearable devices for passive symptom monitoring, and expanded culturally-adapted content for diverse student populations across Asia.':
    '这个项目让我更确认，与临床相关方共同设计以及建立严格伦理框架，是 AI 健康干预不可省略的部分。后续将探索同伴支持、可穿戴设备的被动症状监测，并为亚洲不同学生群体扩展更贴近其文化背景的内容。',
};
