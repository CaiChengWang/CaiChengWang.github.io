export type Locale = "zh" | "en";

export type HomepageContent = {
  locale: Locale;
  languageLabel: string;
  alternateLanguageLabel: string;
  alternateLanguageHref: string;
  skipLabel: string;
  nav: Array<{ href: string; label: string }>;
  profile: {
    name: string;
    degree: string;
    bio: string;
    facts: Array<{ label: string; value: string }>;
  };
  about: {
    title: string;
    paragraphs: string[];
    resultPrefix: string;
    resultStrong: string;
    resultSuffix: string;
  };
  sectionLabels: {
    experience: string;
    research: string;
    publications: string;
    honors: string;
    education: string;
    skills: string;
  };
  internships: Array<{
    company: string;
    role: string;
    period: string;
    summary: string;
    highlights: string[];
  }>;
  projects: Array<{
    title: string;
    period: string;
    description: string;
    output: string;
  }>;
  publications: Array<{
    abbr: string;
    title: string;
    venue: string;
    note: string;
  }>;
  honors: string[];
  education: Array<{ period: string; school: string; degree: string }>;
  skills: Array<{ label: string; value: string }>;
  footer: string;
};

const publicationBase = [
  {
    abbr: "JIII",
    title:
      "Design for Manufacturing: A Knowledge-Integrated Learning Framework for Free-Form Pipe Routing in Aeroengines",
    venue: "Journal of Industrial Information Integration, 2026",
  },
  {
    abbr: "SEC",
    title:
      "Adam-assisted quantum particle swarm optimization guided by length of potential well for numerical function optimization",
    venue: "Swarm and Evolutionary Computation, 2023",
  },
  {
    abbr: "JCDE",
    title:
      "Reinforced quantum-behaved particle swarm optimized neural network for cross-sectional distortion prediction of novel variable-diameter-die-formed metal bent tubes",
    venue: "Journal of Computational Design and Engineering, 2023",
  },
  {
    abbr: "ESWA",
    title:
      "Towards high-accuracy axial springback: Mesh-based simulation of metal tube bending via graph neural networks",
    venue: "Expert Systems with Applications, 2024",
  },
  {
    abbr: "ASOC",
    title:
      "Cross-forming-process transfer enabled graph neural networks for accurate axial-forming prediction in metal tube bending",
    venue: "Applied Soft Computing, 2025",
  },
  {
    abbr: "SCTS",
    title:
      "Self-Learning-Based Optimization for Free-form Pipe Routing in Aeroengine with Dynamic Design Environment",
    venue: "Science China Technological Sciences, 2025",
  },
];

export const zhContent: HomepageContent = {
  locale: "zh",
  languageLabel: "中文",
  alternateLanguageLabel: "English",
  alternateLanguageHref: "/en/",
  skipLabel: "跳到主要内容",
  nav: [
    { href: "#about", label: "关于我" },
    { href: "#experience", label: "实习经历" },
    { href: "#research", label: "科研经历" },
    { href: "#publications", label: "论文" },
    { href: "#honors", label: "荣誉" },
    { href: "#education", label: "教育" },
  ],
  profile: {
    name: "王才城",
    degree: "浙江大学机械工程博士研究生",
    bio: "聚焦具身智能、VLA 强化学习后训练与机器人数据基础设施。",
    facts: [
      { label: "求职方向", value: "具身智能算法" },
      { label: "预计毕业", value: "2027 年 6 月" },
      { label: "所在地", value: "杭州，中国" },
    ],
  },
  about: {
    title: "关于我",
    paragraphs: [
      "我是浙江大学机械工程学院博士研究生，研究与实践方向覆盖机器人学习、强化学习与具身智能。目前在美团 LongCat 基座大模型团队开展具身智能前沿研究实习。",
      "我的核心优势是围绕真实机器人建立完整闭环：从数采基础设施搭建与数据处理出发，在预训练 VLA 基座上进行策略后训练，并将策略部署到真实机械臂系统中持续验证与迭代。",
    ],
    resultPrefix: "目前已发表",
    resultStrong: "SCI 论文 9 篇（ESI 高被引 2 篇、热点论文 1 篇）",
    resultSuffix: "，另有 EI 会议论文 5 篇、授权国家发明专利 1 项。",
  },
  sectionLabels: {
    experience: "实习经历",
    research: "科研经历",
    publications: "代表性论文",
    honors: "荣誉与奖项",
    education: "教育经历",
    skills: "技术能力",
  },
  internships: [
    {
      company: "美团 · LongCat 基座大模型团队",
      role: "具身智能前沿研究实习生",
      period: "2026.04 — 至今",
      summary:
        "针对精细化操作与长程任务的真机部署瓶颈，开展 Human-in-the-Loop 真机策略后训练，并主导多套机械臂数采基础设施建设。",
      highlights: [
        "基于 π0.5 开展 HG-DAgger 策略后训练，将人类实时纠正帧聚合进 Buffer 进行监督微调；经 3 轮迭代，插网线任务成功率从近乎 0% 提升至接近 90%。",
        "落地 RECAP（π0.6*）真机强化学习后训练：训练价值函数、计算 N-step 优势、筛选 Top 30% 优质帧，并以 Advantage-Conditioned CFG 微调策略，成功率提升至接近 90%。",
        "提出 Agent-in-the-Loop 自动化纠偏方案：在 RoboTwin 中定位策略失败时刻，由 cuRobo 接管并合成成功轨迹，构建采集、训练、评测自动流转的数据飞轮。",
        "搭建松灵 Piper 主从臂 HIL 三模式数采系统、方舟 AC-one 拖动示教系统，以及基于 Meta Quest 3 与 MoveIt Servo 的 VR 遥操作系统。",
      ],
    },
    {
      company: "杭州无问硅一科技有限公司",
      role: "具身智能算法实习生 · 真机遥操作",
      period: "2026.01 — 2026.04",
      summary:
        "为具身智能模型获取高质量训练数据，构建面向 Franka 双臂与星海图 R1 PRO 人形机器人的遥操作系统。",
      highlights: [
        "基于 ROS2 开发 Pico VR 遥操作系统，实现 6-DoF 手柄到 Franka FR3 双臂的位置与速度控制；系统以 100 Hz 运行，控制延迟稳定在 50–100 ms。",
        "集成 Pico 头显、体感追踪器、UDCAP 数据手套与 20-DoF Wuji 灵巧手，实现双臂与灵巧手的低延迟稳定跟踪。",
        "实机横向对比 Insta360 X5、RealSense 与 ZED Mini 等第一人称视角采集方案，综合遮挡与佩戴舒适度确定最优方案。",
      ],
    },
  ],
  projects: [
    {
      title: "基于深度强化学习的动态平滑路径规划",
      period: "2023 — 至今",
      description:
        "构建基于 PPO 的路径规划智能体，以曲率、挠率与 Frenet 标架优化路径平滑度，实现零碰撞、物理可执行的路径规划，并完成六轴弯曲机床真机验证。",
      output: "以第一作者发表 SCI 一区 TOP 论文 2 篇。",
    },
    {
      title: "图神经网络与迁移学习可变形体仿真器",
      period: "2022 — 2024",
      description:
        "提出融入物理先验的 Encode-Process-Decode 图网络替代有限元计算，推理速度较 FEM 提升 6 个数量级，平均仿真误差小于 1 mm。",
      output: "产出 ESI 高被引论文 2 篇、热点论文 1 篇。",
    },
    {
      title: "基于 QPSO 的高维全局寻优算法",
      period: "2022 — 2023",
      description:
        "针对传统量子粒子群算法早熟收敛问题进行改进，在 CEC 2017 基准测试中取得 SOTA 级全局寻优性能与收敛速度。",
      output: "以第一作者发表 SCI 一区 TOP 论文 1 篇。",
    },
  ],
  publications: publicationBase.map((paper, index) => ({
    ...paper,
    note: [
      "第一作者 · 中科院一区 TOP",
      "第一作者 · 中科院一区 TOP",
      "第一作者 · ESI 高被引",
      "学生二作 · ESI 高被引、热点论文",
      "第一作者 · 中科院二区 TOP",
      "第一作者 · 中科院一区 TOP",
    ][index],
  })),
  honors: [
    "2022—2023 年度浙江大学研究生国家奖学金",
    "2023 年度浙江省专业学位研究生优秀实践成果奖",
    "2022—2023、2023—2024 年度浙江大学优秀研究生",
    "2023—2024 年度浙江大学潍柴动力奖学金",
    "国际大学生数学建模竞赛特等提名奖（Top 1%）",
    "陕西省优秀毕业生",
  ],
  education: [
    {
      period: "2022.09 — 2027.06",
      school: "浙江大学 · 机械工程学院",
      degree: "博士",
    },
    {
      period: "2018.09 — 2022.06",
      school: "西安电子科技大学",
      degree: "机械设计制造及其自动化 · 本科（专业排名 1/160，保研）",
    },
  ],
  skills: [
    { label: "编程与框架", value: "Python, PyTorch, ROS2" },
    { label: "具身智能", value: "VLA（π 系列）, HIL, HG-DAgger, RECAP" },
    { label: "算法", value: "PPO, TD3, DDPG, GNN, Diffusion" },
    { label: "平台与工具", value: "MuJoCo, Unity, MoveIt Servo, Linux" },
    {
      label: "真机平台",
      value: "Franka FR3, 松灵 Piper, 方舟 AC-one, 星海图 R1 PRO",
    },
  ],
  footer: "欢迎就具身智能、VLA 策略后训练与机器人真机部署方向交流。",
};

export const enContent: HomepageContent = {
  locale: "en",
  languageLabel: "English",
  alternateLanguageLabel: "中文",
  alternateLanguageHref: "/",
  skipLabel: "Skip to main content",
  nav: [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Internships" },
    { href: "#research", label: "Research" },
    { href: "#publications", label: "Publications" },
    { href: "#honors", label: "Honors" },
    { href: "#education", label: "Education" },
  ],
  profile: {
    name: "Caicheng Wang",
    degree: "Ph.D. Candidate at Zhejiang University",
    bio: "Focusing on embodied AI, reinforcement-learning post-training for VLA models, and robot data infrastructure.",
    facts: [
      { label: "Position sought", value: "Embodied AI Algorithm" },
      { label: "Expected graduation", value: "June 2027" },
      { label: "Location", value: "Hangzhou, China" },
    ],
  },
  about: {
    title: "About Me",
    paragraphs: [
      "I am a Ph.D. candidate at the College of Mechanical Engineering, Zhejiang University. My research and engineering experience spans robot learning, reinforcement learning, and embodied AI. I am currently an Embodied AI Research Intern with Meituan's LongCat foundation-model team.",
      "My strength is building a complete real-robot learning loop: data-collection infrastructure, data processing, policy post-training on top of pretrained VLA models, and iterative deployment and evaluation on physical robots.",
    ],
    resultPrefix: "I have published ",
    resultStrong:
      "9 SCI journal papers, including 2 ESI Highly Cited Papers and 1 Hot Paper",
    resultSuffix:
      ", together with 5 EI conference papers and 1 granted Chinese invention patent.",
  },
  sectionLabels: {
    experience: "Internships",
    research: "Research Experience",
    publications: "Selected Publications",
    honors: "Honors & Awards",
    education: "Education",
    skills: "Technical Skills",
  },
  internships: [
    {
      company: "Meituan · LongCat Foundation Model Team",
      role: "Embodied AI Research Intern",
      period: "Apr. 2026 — Present",
      summary:
        "Conducting Human-in-the-Loop real-robot policy post-training for precise and long-horizon manipulation, while leading data-collection infrastructure development across multiple robot platforms.",
      highlights: [
        "Performed HG-DAgger post-training on a π0.5 base policy by aggregating real-time human corrections into a supervised fine-tuning buffer. After three iterations, cable-insertion success increased from nearly 0% to approximately 90%.",
        "Implemented RECAP (π0.6*) post-training by learning a value function, computing N-step advantages, selecting the top 30% frames, and fine-tuning the policy with Advantage-Conditioned CFG; success increased to approximately 90%.",
        "Proposed an Agent-in-the-Loop correction pipeline in RoboTwin, where cuRobo identifies and takes over from failure states to synthesize successful trajectories for an automated collection-training-evaluation loop.",
        "Built a three-mode HIL collection system for dual Piper arms, a kinesthetic teaching system for ARX AC-one, and a Meta Quest 3 VR teleoperation system using MoveIt Servo.",
      ],
    },
    {
      company: "Hangzhou WuWen SiliconOne Technology",
      role: "Embodied AI Algorithm Intern · Teleoperation",
      period: "Jan. 2026 — Apr. 2026",
      summary:
        "Developed teleoperation data-collection systems for dual Franka arms and the Galaxea R1 PRO humanoid robot to acquire high-quality embodied-learning data.",
      highlights: [
        "Developed a ROS2-based Pico VR teleoperation system supporting position and velocity control from 6-DoF controllers to dual Franka FR3 arms; the system ran at 100 Hz with stable 50–100 ms control latency.",
        "Integrated a Pico headset, motion trackers, UDCAP data gloves, and 20-DoF Wuji dexterous hands for stable low-latency dual-arm and hand tracking.",
        "Benchmarked Insta360 X5, RealSense, and ZED Mini first-person data-collection setups on occlusion and wearability to select the most suitable configuration.",
      ],
    },
  ],
  projects: [
    {
      title: "Dynamic Smooth Path Planning with Deep Reinforcement Learning",
      period: "2023 — Present",
      description:
        "Developed a PPO path-planning agent using curvature, torsion, and Frenet frames to optimize path smoothness; achieved collision-free, physically executable paths and validated them on a six-axis tube-bending machine.",
      output: "Two first-author SCI Q1 TOP journal papers.",
    },
    {
      title: "Graph Neural Simulator with Transfer Learning",
      period: "2022 — 2024",
      description:
        "Developed a physics-informed Encode-Process-Decode graph network to replace finite-element simulation, improving inference speed by six orders of magnitude while keeping average error below 1 mm.",
      output: "Two ESI Highly Cited Papers and one Hot Paper.",
    },
    {
      title: "High-Dimensional Global Optimization with QPSO",
      period: "2022 — 2023",
      description:
        "Improved quantum-behaved particle swarm optimization to mitigate premature convergence, achieving state-of-the-art global-search performance and convergence speed on CEC 2017 benchmarks.",
      output: "One first-author SCI Q1 TOP journal paper.",
    },
  ],
  publications: publicationBase.map((paper, index) => ({
    ...paper,
    note: [
      "First author · CAS Q1 TOP",
      "First author · CAS Q1 TOP",
      "First author · ESI Highly Cited Paper",
      "Student second author · ESI Highly Cited & Hot Paper",
      "First author · CAS Q2 TOP",
      "First author · CAS Q1 TOP",
    ][index],
  })),
  honors: [
    "National Scholarship for Graduate Students, Zhejiang University, 2022–2023",
    "Outstanding Professional-Degree Graduate Practice Achievement, Zhejiang Province, 2023",
    "Outstanding Graduate Student, Zhejiang University, 2022–2023 and 2023–2024",
    "Weichai Power Scholarship, Zhejiang University, 2023–2024",
    "Outstanding Winner, Mathematical Contest in Modeling (Top 1%)",
    "Outstanding Graduate of Shaanxi Province",
  ],
  education: [
    {
      period: "Sep. 2022 — Jun. 2027",
      school: "Zhejiang University · College of Mechanical Engineering",
      degree: "Ph.D. Candidate",
    },
    {
      period: "Sep. 2018 — Jun. 2022",
      school: "Xidian University",
      degree:
        "B.Eng. in Mechanical Design, Manufacturing and Automation · Rank 1/160",
    },
  ],
  skills: [
    { label: "Programming & Frameworks", value: "Python, PyTorch, ROS2" },
    { label: "Embodied AI", value: "VLA (π series), HIL, HG-DAgger, RECAP" },
    { label: "Algorithms", value: "PPO, TD3, DDPG, GNN, Diffusion" },
    { label: "Platforms & Tools", value: "MuJoCo, Unity, MoveIt Servo, Linux" },
    {
      label: "Robot Platforms",
      value: "Franka FR3, AgileX Piper, ARX AC-one, Galaxea R1 PRO",
    },
  ],
  footer:
    "I welcome conversations about embodied AI, VLA post-training, and real-robot deployment.",
};
