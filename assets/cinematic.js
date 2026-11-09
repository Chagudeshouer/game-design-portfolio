const header = document.querySelector(".cine-header");
const hero = document.querySelector(".hero-scene");
const heroVideo = document.querySelector("#hero-video");
const abilityScene = document.querySelector(".ability-scene");
const abilityVideos = [...document.querySelectorAll(".ability-video")];
const resumeDrawer = document.querySelector("#resume-drawer");
const openResumeButtons = [...document.querySelectorAll("[data-open-resume]")];
const closeResumeButtons = [...document.querySelectorAll("[data-close-resume]")];
const resumePanel = document.querySelector(".resume-panel");
const projectDetail = document.querySelector("#project-detail");
const projectStore = document.querySelector(".project-store");
const projectMediaStage = document.querySelector("#project-media-stage");
const projectMediaTabs = document.querySelector("#project-media-tabs");
const projectMarketingArt = document.querySelector("#project-marketing-art");
const projectDetailIndex = document.querySelector("#project-detail-index");
const projectDetailGenre = document.querySelector("#project-detail-genre");
const projectDetailTitle = document.querySelector("#project-detail-title");
const projectStoreTags = document.querySelector("#project-store-tags");
const projectStoreSummary = document.querySelector("#project-store-summary");
const projectStoreFacts = document.querySelector("#project-store-facts");
const projectResponsibilities = document.querySelector("#project-responsibilities");
const projectDownloadActions = document.querySelector("#project-download-actions");
const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".cine-nav-links");
const pageStatusIndex = document.querySelector(".page-status-index");
const pageStatusLabel = document.querySelector(".page-status-label");
const cursorLight = document.querySelector(".cursor-light");
const signalCanvas = document.querySelector("#signal-canvas");
const motionReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const projectDemoUrl = "https://pan.baidu.com/s/11tXk_kZPDcFYwvAITxxwkg?pwd=0721";

const projectCatalog = {
  "cat-dog": {
    index: "02",
    title: "猫狗碰撞（团队项目）",
    genre: "3D 团队多人 · 大乱斗 · 动作",
    eyebrow: "3D MULTIPLAYER ARENA",
    type: "3D / 团队多人 / 大乱斗 / 动作",
    role: "队长 / 核心策划",
    tools: "Unity3D · C# · Photon Fusion · ShaderGraph",
    summary:
      "萌宠题材的多端联机大乱斗。在多样地形中争夺地盘，结合大乱斗与连击机制，搭配角色技能与道具，带来快节奏的战术博弈体验。",
    responsibilities: [
      "主导设计“大乱斗+占点”核心循环，构建 4 个差异化角色定位（坦克/辅助/输出/侦查）。通过技能CD、血量与机动性数值调控，确保局内职业互补与对抗平衡。",
      "搭建 3 张含高低差、多掩体的白盒地图。设计“动态环境交互”机制（如可破坏掩体、地形陷阱），结合道具刷新，丰富局内战术博弈深度。",
      "建立局内收益模型，针对占点速率与连杀奖励进行动态调整，避免“滚雪球”导致的一边倒体验，优化对局节奏。",
      "使用 Unity 搭建白盒，编写 C# 逻辑与交互设计，完成 Shader 特效与像素美术。作为队长统筹程序与美术需求，把控开发进度，确保按期交付。",
    ],
    marketingImage: "assets/images/cat-dog/marketing-promo.png",
    marketingAlt: "猫狗碰撞宣发图",
    media: [
      {
        type: "video",
        src: "assets/video/projects/cat-dog-demo-20261105.mp4",
        poster: "assets/images/cat-dog/objective-combat.png",
        label: "完整实机演示",
        alt: "猫狗碰撞完整实机演示",
      },
      {
        type: "image",
        src: "assets/images/cat-dog/character-roster.png",
        label: "角色阵容 / 四类定位",
        alt: "猫狗碰撞四类角色阵容选择界面",
      },
      {
        type: "image",
        src: "assets/images/cat-dog/whitebox-map.png",
        label: "白盒地图 / 场景搭建",
        alt: "猫狗碰撞白盒地图与场景搭建画面",
      },
      {
        type: "image",
        src: "assets/images/cat-dog/objective-combat.png",
        label: "核心循环 / 大乱斗与占点",
        alt: "猫狗碰撞实机占点对抗画面",
      },
      {
        type: "image",
        src: "assets/images/cat-dog/skill-feedback.png",
        label: "技能演出 / 战斗反馈",
        alt: "猫狗碰撞角色技能演出画面",
      },
      {
        type: "image",
        src: "assets/images/cat-dog/environment-gameplay.png",
        label: "动态环境 / 移动战斗",
        alt: "猫狗碰撞树林与水岸场景战斗画面",
      },
    ],
    caseUrl: "work/cat-dog.html?v=cat-dog-case-20261109-01",
    demoUrl: projectDemoUrl,
    designUrl: "",
  },
  "bullet-journey": {
    index: "01",
    title: "弹幕拼途（AI辅助独立游戏）",
    genre: "2D 弹幕射击 · Roguelike · 卡牌构筑",
    eyebrow: "BULLET HELL ROGUELIKE",
    type: "2D 俯视角弹幕射击 / Roguelike / 卡牌构筑",
    role: "独立开发 / 系统策划",
    tools: "Unity · C# · OpenAI Codex · AI 美术工具",
    summary:
      "一个把实时弹幕战斗、卡牌构筑和 Roguelike 路线选择组合起来的独立游戏原型。玩家需要在躲避弹幕、使用卡牌、规划成长与选择分支路线之间持续做取舍。",
    responsibilities: [
      "设计实时弹幕战斗、卡牌拖拽施放、合成强化、资源管理与 Roguelike 分支路线。",
      "将玩法拆成系统规则与功能需求，并围绕战斗、卡牌和成长机制持续迭代原型。",
      "使用 Codex 配合 Unity / C# 加速功能实现，根据运行结果调整设计。",
      "使用 AI 工具辅助制作像素角色、地图与技能特效，并完成筛选和调整。",
    ],
    marketingImage: "assets/images/bullet-journey/marketing-promo.png",
    marketingAlt: "弹幕拼途宣发图",
    media: [
      {
        type: "video",
        src: "assets/video/projects/bullet-journey-demo-20261105.mp4",
        poster: "assets/images/bullet-journey/battle-overview.webp",
        label: "完整实机演示",
        alt: "弹幕拼途完整实机演示",
      },
      {
        type: "image",
        src: "assets/images/bullet-journey/battle-overview.webp",
        label: "战斗实机 / 弹幕与卡牌",
        alt: "弹幕拼途战斗实机画面",
      },
      {
        type: "image",
        src: "assets/images/bullet-journey/skill-cutin.webp",
        label: "技能演出 / 冰晶连携",
        alt: "弹幕拼途冰系技能演出画面",
      },
      {
        type: "image",
        src: "assets/images/bullet-journey/card-debug-panel.webp",
        label: "卡牌系统 / 调试面板",
        alt: "弹幕拼途卡牌系统调试界面",
      },
      {
        type: "image",
        src: "assets/images/bullet-journey/development-editor-01.webp",
        label: "开发过程 / Unity 编辑器",
        alt: "弹幕拼途角色与卡牌配置开发画面",
      },
      {
        type: "image",
        src: "assets/images/bullet-journey/development-editor-02.webp",
        label: "开发过程 / 战斗场景",
        alt: "弹幕拼途敌人与战斗场景开发画面",
      },
    ],
    caseUrl: "work/bullet-journey.html?v=project-cases-20261105-02",
    demoUrl: projectDemoUrl,
    designUrl: "",
  },
  "eastern-snow": {
    index: "03",
    title: "东方雪冥录（关卡白盒）",
    genre: "RPG · 动作冒险 · STG",
    eyebrow: "SNOWFIELD ACTION RPG",
    type: "RPG / 动作冒险 / STG",
    role: "策划 / 程序 / 关卡",
    tools: "Unity3D · ProBuilder · PolyBrush",
    summary:
      "幻想乡迎来又一个寒冷的冬天，博丽神社附近却接连发生参拜村民在风雪中伤亡的异样事件。博丽灵梦与自称“最强”的冰冻妖精琪露诺结伴踏入雪原，在战斗、探索与解谜中施展符卡弹幕和寒冰之力，逐步逼近这场冬日异变背后的元凶。",
    responsibilities: [
      "关卡设计与构建：使用 ProBuilder 与 PolyBrush 在 Unity 中搭建全流程关卡白盒，设计符合世界观的场景动线、地形结构与视野布局。",
      "核心玩法实现：以“弹幕符卡”作为关卡玩法主题，围绕战斗、探索、解谜制作并实现远程射击、障碍破坏与“破魔点”封印机制，通过差异化敌人配置和机关设计验证玩法。",
      "体验节奏把控：规划“叙事引导—战斗学习—探索解谜—BOSS 高潮”的体验流程，运用镜头控制、环境叙事（血迹/火场）与伙伴对话调控关卡节奏和情绪。",
    ],
    marketingImage: "assets/images/eastern-snow/marketing-promo.jpg",
    marketingAlt: "东方雪冥录宣发图",
    media: [
      {
        type: "video",
        src: "assets/video/projects/eastern-snow-demo-20261105.mp4",
        poster: "assets/images/eastern-snow/snowfield-route.png",
        label: "完整实机演示",
        alt: "东方雪冥录完整实机演示",
      },
      {
        type: "image",
        src: "assets/images/eastern-snow/snowfield-route.png",
        label: "雪原场景 / 关卡动线",
        alt: "东方雪冥录雪原白盒场景与关卡动线",
      },
      {
        type: "image",
        src: "assets/images/eastern-snow/level-flow.png",
        label: "全流程关卡 / 路线规划",
        alt: "东方雪冥录全流程关卡路线规划图",
      },
      {
        type: "image",
        src: "assets/images/eastern-snow/partner-dialogue.png",
        label: "叙事节奏 / 伙伴对话",
        alt: "东方雪冥录博丽灵梦与琪露诺的伙伴对话画面",
      },
      {
        type: "image",
        src: "assets/images/eastern-snow/seal-gate.png",
        label: "探索解谜 / 封印区域",
        alt: "东方雪冥录封印门与探索解谜场景",
      },
    ],
    caseUrl: "work/eastern-snow.html?v=eastern-case-20261105-01",
    demoUrl: projectDemoUrl,
    designUrl: "",
  },
  "wheat-story": {
    index: "04",
    title: "麦田物语（毕业设计）",
    genre: "模拟经营 · 农场",
    eyebrow: "FARM SIMULATION / GRADUATION PROJECT",
    type: "模拟经营 / 农场",
    role: "毕业设计 / 独立开发",
    tools: "Unity · C# · ScriptableObject · A* · Json · BlendTree",
    summary:
      "一场突如其来的海难，将玩家带到一座民风和睦、风景如画的新小岛。在这里成为新晋农场主，体验四季耕作、与性格各异的村民互动、完成特色委托，逐步融入当地生活，在这片新天地扎根。",
    responsibilities: [
      "核心玩法设计：设计“农场经营 + 贸易 + 委托”三位一体玩法体系，构建完整的农业经济循环。",
      "经营系统架构：设计真实作物生长模型，通过 ScriptableObject 记录发芽、成长、成熟等阶段数据；构建包含季节性价格波动与区域特产机制的动态市场贸易系统，并实现委托任务链。",
      "数值经济模型：建立作物生长—市场价格—天气的平衡公式，设计土地湿润度衰减与浇水效果之间的数值关系。",
      "程序与场景实现：使用 Tilemap 搭建可扩展农场场景；开发 A* 算法 NPC 日程系统和 Json 多存档管理；实现昼夜季节系统，通过全局灯光控制天气变化。",
      "特色系统开发：利用 BlendTree 制作工具动画；开发蓝图家具建造、资源管理、拖拽式仓库、季节日历与任务追踪系统。",
    ],
    marketingImage: "assets/images/wheat-story/marketing-promo.png",
    marketingAlt: "麦田物语宣发图",
    media: [
      {
        type: "video",
        src: "assets/video/projects/wheat-story-demo-20261105.mp4",
        poster: "assets/images/wheat-story/marketing-promo.png",
        label: "完整实机演示",
        alt: "麦田物语完整实机演示",
      },
      {
        type: "image",
        src: "assets/images/wheat-story/marketing-promo.png",
        label: "宣发图 / 岛屿农场",
        alt: "麦田物语像素风岛屿农场宣发图",
      },
      {
        type: "image",
        src: "assets/images/wheat-story/unity-systems.png",
        label: "系统架构 / Unity 场景",
        alt: "麦田物语 Unity 场景与经营系统管理组件",
      },
      {
        type: "image",
        src: "assets/images/wheat-story/npc-dialogue.png",
        label: "NPC 交互 / 对话",
        alt: "麦田物语 NPC 对话与任务系统",
      },
      {
        type: "image",
        src: "assets/images/wheat-story/crop-database.png",
        label: "作物系统 / 阶段数据库",
        alt: "麦田物语基于 ScriptableObject 的作物生长阶段数据库",
      },
      {
        type: "image",
        src: "assets/images/wheat-story/weather-cycle.png",
        label: "昼夜天气 / 场景氛围",
        alt: "麦田物语雨天夜晚与作物生长场景",
      },
      {
        type: "image",
        src: "assets/images/wheat-story/trade-and-quests.png",
        label: "交易委托 / 建造系统",
        alt: "麦田物语物品交易、委托任务与蓝图建造界面",
      },
    ],
    caseUrl: "",
    demoUrl: projectDemoUrl,
    designUrl: "",
  },
  "angel-cat": {
    index: "05",
    title: "天使喵（团队项目）",
    genre: "解谜 · 剧情 · 2D 横版",
    eyebrow: "NARRATIVE PUZZLE / TIME REWRITE",
    type: "解谜 / 剧情 / 2D 横版",
    role: "队长 / 主策 / 程序",
    tools: "Unity · C# · ScriptableObject · IEnumerator",
    summary:
      "作为普度众生的天使喵，你遇到了一名忧郁少年。穿越过去后，通过切换形态撕取关键回忆片段，像剪辑电影般改写父母争吵的回忆，用蝴蝶效应重塑家庭未来。用喵爪修正时间线，把破碎的关系拼回温暖结局。",
    responsibilities: [
      "项目统筹：负责游戏策划案撰写与开发流程把控，搭建核心数值模型，协调程序、美术团队工作对接；主导游戏测试与玩法验证，确保系统逻辑与叙事体验的一致性。",
      "核心玩法设计：创新设计“解谜 + 画面元素撕取 + 时间线修正”复合玩法系统；构建“多结局时间线”叙事框架，让玩家的解谜选择触发不同剧情分支。",
      "叙事系统设计：编写非线性剧情脚本；实现 Timeline 剧情动画系统，确保过场演出与玩法无缝衔接。",
      "解谜系统架构：设计“画面元素撕取”核心机制，关联场景可交互物体与时间线修正逻辑；开发猫咪变身时限系统，通过 IEnumerator 协程实现状态管理与中断控制。",
      "数值与关卡设计：搭建解谜元素数据模型，平衡难度曲线与剧情触发条件；设计多解法关卡结构，使每种解法对应独特的时间线修正效果。",
      "程序实现：使用 Unity Tilemap 搭建 2D 解谜场景，实现元素交互逻辑；基于 ScriptableObject 构建剧情数据库，优化对话内容管理流程；开发 UI 数据可视化系统，实时反馈时间线变动状态。",
    ],
    marketingImage: "assets/images/angel-cat/marketing-promo.png",
    marketingAlt: "天使喵宣发图",
    media: [
      {
        type: "video",
        src: "assets/video/projects/angel-cat-demo-20261105.mp4",
        poster: "assets/images/angel-cat/form-switch.png",
        label: "完整实机演示",
        alt: "天使喵完整实机演示",
      },
      {
        type: "image",
        src: "assets/images/angel-cat/marketing-promo.png",
        label: "宣发图 / 天使喵",
        alt: "天使喵项目宣发图",
      },
      {
        type: "image",
        src: "assets/images/angel-cat/unity-dialogue-editor.png",
        label: "对话系统 / Unity 编辑器",
        alt: "天使喵在 Unity 中搭建的对话与剧情系统",
      },
      {
        type: "image",
        src: "assets/images/angel-cat/dialogue-system.png",
        label: "角色对话 / 剧情演出",
        alt: "天使喵角色对话与过场演出画面",
      },
      {
        type: "image",
        src: "assets/images/angel-cat/form-switch.png",
        label: "形态切换 / 时间线修正",
        alt: "天使喵形态切换与时间线进度界面",
      },
      {
        type: "image",
        src: "assets/images/angel-cat/narrative-choice.png",
        label: "剧情推进 / 角色选择",
        alt: "天使喵剧情推进与角色对话选择画面",
      },
      {
        type: "image",
        src: "assets/images/angel-cat/memory-rewrite.png",
        label: "猫咪形态 / 回忆互动",
        alt: "天使喵以猫咪形态探索场景并改写回忆",
      },
    ],
    caseUrl: "",
    demoUrl: projectDemoUrl,
    designUrl: "",
  },
};

function playVideo(video) {
  if (!video) return;
  const result = video.play();
  if (result?.catch) result.catch(() => {});
}

playVideo(heroVideo);

let lastFocus = null;

function setMenuState(isOpen) {
  if (!menuButton || !navLinks) return;
  navLinks.classList.toggle("open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "关闭导航" : "打开导航");
}

function openResume() {
  if (!resumeDrawer) return;
  lastFocus = document.activeElement;
  resumeDrawer.classList.add("is-open");
  resumeDrawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-locked");
  setMenuState(false);
  resumeDrawer.querySelector("[data-close-resume]")?.focus();
}

function closeResume() {
  if (!resumeDrawer) return;
  resumeDrawer.classList.remove("is-open");
  resumeDrawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("is-locked");
  if (lastFocus instanceof HTMLElement) lastFocus.focus();
}

let lastProjectFocus = null;

function formatVideoTime(value) {
  if (!Number.isFinite(value) || value < 0) return "00:00";
  const totalSeconds = Math.floor(value);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function setupProjectVideoControls() {
  const video = projectMediaStage?.querySelector("video");
  const toggle = projectMediaStage?.querySelector("[data-video-toggle]");
  const seek = projectMediaStage?.querySelector("[data-video-seek]");
  const time = projectMediaStage?.querySelector("[data-video-time]");
  const sound = projectMediaStage?.querySelector("[data-video-sound]");
  if (!video || !toggle || !seek || !time || !sound) return;

  let isSeeking = false;
  let resumeAfterSeek = false;

  const renderProgress = (progress, current) => {
    const duration = Number.isFinite(video.duration) ? video.duration : 0;
    const boundedProgress = Math.min(100, Math.max(0, progress));
    seek.style.setProperty("--progress", `${boundedProgress}%`);
    seek.setAttribute("aria-valuenow", String(Math.round(boundedProgress)));
    seek.setAttribute(
      "aria-valuetext",
      `${formatVideoTime(current)} / ${formatVideoTime(duration)}`,
    );
    time.textContent = `${formatVideoTime(current)} / ${formatVideoTime(duration)}`;
  };

  const updateTime = () => {
    const duration = Number.isFinite(video.duration) ? video.duration : 0;
    const current = Number.isFinite(video.currentTime) ? video.currentTime : 0;
    const progress = duration > 0 ? (current / duration) * 100 : 0;
    renderProgress(progress, current);
  };

  const setProgress = (progress) => {
    if (!Number.isFinite(video.duration) || video.duration <= 0) return;
    const boundedProgress = Math.min(100, Math.max(0, progress));
    const nextTime = (boundedProgress / 100) * video.duration;
    renderProgress(boundedProgress, nextTime);
    video.currentTime = nextTime;
  };

  const updatePlayState = () => {
    const isPaused = video.paused;
    toggle.textContent = isPaused ? "播放" : "暂停";
    toggle.setAttribute("aria-label", isPaused ? "播放视频" : "暂停视频");
  };

  const updateSoundState = () => {
    sound.textContent = video.muted ? "声音：关" : "声音：开";
    sound.setAttribute("aria-label", video.muted ? "打开视频声音" : "关闭视频声音");
  };

  video.defaultMuted = false;
  video.muted = false;
  video.volume = 1;

  const finishSeeking = () => {
    if (!isSeeking) return;
    isSeeking = false;
    video.addEventListener("seeked", updateTime, { once: true });
    if (resumeAfterSeek) playVideo(video);
    resumeAfterSeek = false;
  };

  const seekFromPointer = (clientX) => {
    const bounds = seek.getBoundingClientRect();
    if (!bounds.width) return;
    const progress = ((clientX - bounds.left) / bounds.width) * 100;
    setProgress(progress);
  };

  seek.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    isSeeking = true;
    resumeAfterSeek = !video.paused;
    if (resumeAfterSeek) video.pause();
    seek.setPointerCapture?.(event.pointerId);
    seekFromPointer(event.clientX);
  });

  seek.addEventListener("pointermove", (event) => {
    if (isSeeking) seekFromPointer(event.clientX);
  });

  seek.addEventListener("pointerup", finishSeeking);
  seek.addEventListener("pointercancel", finishSeeking);

  seek.addEventListener("keydown", (event) => {
    const duration = Number.isFinite(video.duration) ? video.duration : 0;
    if (!duration) return;
    const currentProgress = duration > 0 ? (video.currentTime / duration) * 100 : 0;
    let nextProgress = null;
    if (event.key === "ArrowLeft") nextProgress = currentProgress - 2;
    if (event.key === "ArrowRight") nextProgress = currentProgress + 2;
    if (event.key === "PageDown") nextProgress = currentProgress - 10;
    if (event.key === "PageUp") nextProgress = currentProgress + 10;
    if (event.key === "Home") nextProgress = 0;
    if (event.key === "End") nextProgress = 100;
    if (nextProgress === null) return;
    event.preventDefault();
    setProgress(nextProgress);
  });

  toggle.addEventListener("click", () => {
    if (video.paused) playVideo(video);
    else video.pause();
  });

  sound.addEventListener("click", () => {
    video.muted = !video.muted;
    if (!video.muted) video.volume = 1;
    updateSoundState();
  });

  video.addEventListener("loadedmetadata", updateTime);
  video.addEventListener("durationchange", updateTime);
  video.addEventListener("timeupdate", () => {
    if (!isSeeking) updateTime();
  });
  video.addEventListener("play", updatePlayState);
  video.addEventListener("pause", updatePlayState);
  video.addEventListener("volumechange", updateSoundState);

  updateTime();
  updatePlayState();
  updateSoundState();

  const startWithSound = () => {
    video.defaultMuted = false;
    video.muted = false;
    video.volume = 1;
    updateSoundState();

    const autoplayRequest = video.play();
    if (!autoplayRequest?.catch) return;

    autoplayRequest.catch(() => {
      video.defaultMuted = true;
      video.muted = true;
      updateSoundState();

      const mutedAutoplayRequest = video.play();
      if (mutedAutoplayRequest?.catch) {
        mutedAutoplayRequest.catch(() => {
          toggle.textContent = "点击播放";
        });
      }

      const restoreSoundAfterGesture = () => {
        video.defaultMuted = false;
        video.muted = false;
        video.volume = 1;
        updateSoundState();
        if (video.paused) playVideo(video);
      };
      document.addEventListener("pointerdown", restoreSoundAfterGesture, {
        once: true,
        capture: true,
      });
    });
  };

  startWithSound();
}

function renderProjectMedia(project, activeIndex = 0) {
  const media = project.media[activeIndex];

  if (!media) {
    projectMediaStage.innerHTML = `
      <div class="project-media-empty">
        <span>${project.index} / MEDIA PENDING</span>
        <strong>${project.title}</strong>
        <small>项目视频与截图待接入</small>
      </div>
    `;
    projectMediaTabs.innerHTML = "";
    return;
  }

  if (media.type === "video") {
    projectMediaStage.innerHTML = `
      <div class="project-video-frame">
        <video autoplay playsinline preload="auto" poster="${media.poster || ""}" aria-label="${media.alt}">
          <source src="${media.src}" type="video/mp4" />
          当前浏览器无法播放项目视频。
        </video>
        <div class="project-video-controls">
          <button type="button" class="project-video-button" data-video-toggle aria-label="暂停视频">
            暂停
          </button>
          <div
            class="project-video-seek"
            data-video-seek
            role="slider"
            tabindex="0"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow="0"
            aria-valuetext="00:00 / 00:00"
            aria-label="视频播放进度"
          ></div>
          <span class="project-video-time" data-video-time>00:00 / 00:00</span>
          <button type="button" class="project-video-button" data-video-sound aria-label="关闭视频声音">
            声音：开
          </button>
        </div>
      </div>
    `;
    setupProjectVideoControls();
  } else {
    projectMediaStage.innerHTML = `
      <img src="${media.src}" alt="${media.alt}" />
    `;
  }

  projectMediaTabs.innerHTML = project.media
    .map(
      (item, index) => `
        <button
          class="project-media-tab"
          type="button"
          role="tab"
          aria-selected="${index === activeIndex}"
          data-project-media-index="${index}"
          aria-label="查看${item.label}"
        >
          <img src="${item.poster || item.src}" alt="" />
          <span>${item.type === "video" ? "▶ " : ""}${item.label}</span>
        </button>
      `,
    )
    .join("");

  projectMediaTabs.querySelectorAll("[data-project-media-index]").forEach((button) => {
    button.addEventListener("click", () => {
      renderProjectMedia(project, Number(button.dataset.projectMediaIndex));
    });
  });
}

function renderProjectDownloads(project) {
  const downloadItem = (label, url, fileName) => {
    if (url) {
      return `
        <a
          class="project-download"
          href="${url}"
          download="${fileName || ""}"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>↓</span>
          ${label}
        </a>
      `;
    }

    return `
      <span class="project-download is-unavailable" aria-disabled="true">
        <span>—</span>
        ${label} · 待补充
      </span>
    `;
  };

  const caseItem = (url, unavailableLabel) => {
    if (url) {
      return `
        <a class="project-download" href="${url}" aria-label="预览网页版策划案">
          <span>↗</span>
          预览网页版策划案
        </a>
      `;
    }

    return `
      <span class="project-download is-unavailable" aria-disabled="true">
        <span>—</span>
        ${unavailableLabel} · 待补充
      </span>
    `;
  };

  projectDownloadActions.innerHTML = `
    ${downloadItem("下载游戏 Demo", project.demoUrl, `${project.title}-Demo.zip`)}
    ${caseItem(project.caseUrl || project.designUrl, "下载策划案")}
  `;
}

function renderProjectDetail(project) {
  projectDetailIndex.textContent = `PROJECT / ${project.index}`;
  projectDetailGenre.textContent = project.eyebrow;
  projectDetailTitle.textContent = project.title;
  projectStoreTags.innerHTML = project.genre
    .split(" · ")
    .map((tag) => `<span>${tag}</span>`)
    .join("");
  projectStoreSummary.textContent = project.summary;
  projectStoreFacts.innerHTML = `
    <div><dt>项目类型</dt><dd>${project.type}</dd></div>
    <div><dt>我的分工</dt><dd>${project.role}</dd></div>
    <div><dt>技术栈</dt><dd>${project.tools}</dd></div>
  `;
  projectResponsibilities.innerHTML = project.responsibilities
    .map((item) => `<li>${item}</li>`)
    .join("");
  renderProjectDownloads(project);

  if (project.marketingImage) {
    projectMarketingArt.innerHTML = `
      <img src="${project.marketingImage}" alt="${project.marketingAlt}" />
    `;
  } else {
    projectMarketingArt.innerHTML = `
      <div class="project-marketing-placeholder">
        <span>CAPSULE ART / PENDING</span>
        <strong>${project.title}</strong>
      </div>
    `;
  }

  renderProjectMedia(project, 0);
}

function openProject(projectId) {
  const project = projectCatalog[projectId];
  if (!project || !projectDetail) return;
  lastProjectFocus = document.activeElement;
  renderProjectDetail(project);
  projectDetail.classList.add("is-open");
  projectDetail.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-locked");
  setMenuState(false);
  projectDetail.querySelector(".project-detail-close")?.focus();
}

function closeProject() {
  if (!projectDetail) return;
  projectMediaStage?.querySelector("video")?.pause();
  projectDetail.classList.remove("is-open");
  projectDetail.setAttribute("aria-hidden", "true");
  document.body.classList.remove("is-locked");
  if (lastProjectFocus instanceof HTMLElement) lastProjectFocus.focus();
}

openResumeButtons.forEach((button) => button.addEventListener("click", openResume));
closeResumeButtons.forEach((button) => button.addEventListener("click", closeResume));
document.querySelectorAll("[data-project-open]").forEach((button) => {
  button.addEventListener("click", () => openProject(button.dataset.projectOpen));
});
document.querySelectorAll("[data-close-project]").forEach((button) => {
  button.addEventListener("click", closeProject);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && projectDetail?.classList.contains("is-open")) {
    closeProject();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Tab" || !projectDetail?.classList.contains("is-open") || !projectStore) {
    return;
  }
  const controls = [
    ...projectStore.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  ];
  if (!controls.length) return;
  const first = controls[0];
  const last = controls[controls.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

menuButton?.addEventListener("click", () => {
  setMenuState(menuButton.getAttribute("aria-expanded") !== "true");
});

navLinks?.querySelectorAll("a, button").forEach((control) => {
  control.addEventListener("click", () => setMenuState(false));
});

document.addEventListener("keydown", (event) => {
  const drawerOpen = resumeDrawer?.classList.contains("is-open");

  if (event.key === "Escape") {
    if (drawerOpen) closeResume();
    setMenuState(false);
  }

  if (
    event.key === "ArrowRight" &&
    !drawerOpen &&
    window.scrollY < window.innerHeight * 0.25
  ) {
    openResume();
  }

  if (event.key !== "Tab" || !drawerOpen || !resumePanel) return;
  const controls = [
    ...resumePanel.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  ];
  if (!controls.length) return;
  const first = controls[0];
  const last = controls[controls.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

let dragStart = null;

hero?.addEventListener(
  "pointerdown",
  (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    dragStart = { x: event.clientX, y: event.clientY };
  },
  { passive: true },
);

hero?.addEventListener(
  "pointerup",
  (event) => {
    if (!dragStart) return;
    const deltaX = event.clientX - dragStart.x;
    const deltaY = event.clientY - dragStart.y;
    const isMobileViewport = window.matchMedia("(max-width: 720px)").matches;
    const swipedTowardResume = isMobileViewport ? deltaX < -110 : deltaX > 110;
    dragStart = null;
    if (swipedTowardResume && Math.abs(deltaX) > Math.abs(deltaY) * 1.4) openResume();
  },
  { passive: true },
);

hero?.addEventListener(
  "wheel",
  (event) => {
    if (resumeDrawer?.classList.contains("is-open")) return;
    if (Math.abs(event.deltaX) < 45 || Math.abs(event.deltaX) < Math.abs(event.deltaY)) return;
    event.preventDefault();
    openResume();
  },
  { passive: false },
);

function updateHeader() {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
}

let scrollFrame = null;

function updateSceneProgress() {
  const progress = Math.min(1, Math.max(0, window.scrollY / window.innerHeight));
  if (hero) hero.style.setProperty("--scene-progress", progress.toFixed(3));
  updateHeader();
  scrollFrame = null;
}

updateSceneProgress();
window.addEventListener(
  "scroll",
  () => {
    if (scrollFrame != null) return;
    scrollFrame = requestAnimationFrame(updateSceneProgress);
  },
  { passive: true },
);

const chapters = [...document.querySelectorAll("[data-chapter]")];

if (chapters.length && "IntersectionObserver" in window) {
  const chapterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        pageStatusIndex.textContent = entry.target.dataset.chapter;
        pageStatusLabel.textContent = entry.target.dataset.label;
      });
    },
    { threshold: 0, rootMargin: "-42% 0px -52%" },
  );
  chapters.forEach((chapter) => chapterObserver.observe(chapter));
}

document.addEventListener("pointermove", (event) => {
  document.body.classList.add("has-pointer");
  if (cursorLight) {
    cursorLight.style.transform = `translate3d(${event.clientX - 165}px, ${event.clientY - 165}px, 0)`;
  }
  if (!hero) return;
  const x = (event.clientX / window.innerWidth) * 2 - 1;
  const y = (event.clientY / window.innerHeight) * 2 - 1;
  hero.style.setProperty("--pointer-x", x.toFixed(3));
  hero.style.setProperty("--pointer-y", y.toFixed(3));
});

document.addEventListener("pointerleave", () => {
  document.body.classList.remove("has-pointer");
});

document.querySelectorAll(".ability-tile").forEach((tile) => {
  tile.addEventListener("pointermove", (event) => {
    const rect = tile.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    tile.style.setProperty("--tile-x", `${x.toFixed(1)}%`);
    tile.style.setProperty("--tile-y", `${y.toFixed(1)}%`);
  });
});

if (signalCanvas && hero) {
  const context = signalCanvas.getContext("2d");
  let width = 0;
  let height = 0;
  let particles = [];
  let frameId = null;
  const pointer = { x: 0, y: 0, active: false };

  const makeParticles = () =>
    Array.from({ length: 42 }, (_, index) => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.00018,
      vy: (Math.random() - 0.5) * 0.00018,
      size: 0.7 + Math.random() * 1.9,
      gold: index % 7 === 0,
    }));

  function resizeSignalCanvas() {
    const rect = hero.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = rect.width;
    height = rect.height;
    signalCanvas.width = Math.max(1, Math.round(width * dpr));
    signalCanvas.height = Math.max(1, Math.round(height * dpr));
    signalCanvas.style.width = `${width}px`;
    signalCanvas.style.height = `${height}px`;
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (!particles.length) particles = makeParticles();
  }

  function drawSignalField() {
    context.clearRect(0, 0, width, height);
    if (pointer.active) {
      const gradient = context.createRadialGradient(
        pointer.x,
        pointer.y,
        0,
        pointer.x,
        pointer.y,
        210,
      );
      gradient.addColorStop(0, "rgba(99, 201, 184, 0.14)");
      gradient.addColorStop(1, "rgba(99, 201, 184, 0)");
      context.fillStyle = gradient;
      context.fillRect(pointer.x - 220, pointer.y - 220, 440, 440);
    }

    particles.forEach((point) => {
      if (!motionReduced) {
        point.x += point.vx;
        point.y += point.vy;
        if (point.x < -0.02) point.x = 1.02;
        if (point.x > 1.02) point.x = -0.02;
        if (point.y < -0.02) point.y = 1.02;
        if (point.y > 1.02) point.y = -0.02;
      }
    });

    for (let i = 0; i < particles.length; i += 1) {
      const a = particles[i];
      const ax = a.x * width;
      const ay = a.y * height;
      for (let j = i + 1; j < particles.length; j += 1) {
        const b = particles[j];
        const bx = b.x * width;
        const by = b.y * height;
        const distance = Math.hypot(ax - bx, ay - by);
        if (distance > 155) continue;
        context.beginPath();
        context.moveTo(ax, ay);
        context.lineTo(bx, by);
        context.strokeStyle = `rgba(99, 201, 184, ${(1 - distance / 155) * 0.14})`;
        context.lineWidth = 0.7;
        context.stroke();
      }
      context.beginPath();
      context.arc(ax, ay, a.size, 0, Math.PI * 2);
      context.fillStyle = a.gold ? "rgba(216, 168, 78, 0.72)" : "rgba(99, 201, 184, 0.52)";
      context.fill();
    }

    if (!motionReduced) frameId = requestAnimationFrame(drawSignalField);
  }

  hero.addEventListener("pointermove", (event) => {
    const rect = hero.getBoundingClientRect();
    pointer.x = event.clientX - rect.left;
    pointer.y = event.clientY - rect.top;
    pointer.active = true;
  });
  hero.addEventListener("pointerleave", () => {
    pointer.active = false;
  });

  const signalResizeObserver = new ResizeObserver(resizeSignalCanvas);
  signalResizeObserver.observe(hero);
  resizeSignalCanvas();
  drawSignalField();

  document.addEventListener("visibilitychange", () => {
    if (document.hidden && frameId != null) {
      cancelAnimationFrame(frameId);
      frameId = null;
    } else if (!document.hidden && frameId == null) {
      drawSignalField();
    }
  });
}

if (abilityVideos.length && abilityScene) {
  const abilityObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target.querySelector("video");
        if (!video) return;
        if (entry.isIntersecting) playVideo(video);
        else video.pause();
      });
    },
    { threshold: 0.55 },
  );

  document.querySelectorAll(".ability-tile").forEach((tile) => {
    abilityObserver.observe(tile);
  });
}

const profileLinks = [...document.querySelectorAll(".profile-directory a")];
const profileBlocks = [...document.querySelectorAll(".profile-block")];

if (profileLinks.length && profileBlocks.length) {
  const setActiveProfileLink = (id) => {
    profileLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${id}`;
      if (isActive) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  };

  let profileFrame = null;
  const updateProfileDirectory = () => {
    const marker = window.scrollY + window.innerHeight * 0.4;
    let current = profileBlocks[0];
    profileBlocks.forEach((block) => {
      const blockTop = block.getBoundingClientRect().top + window.scrollY;
      if (blockTop <= marker) current = block;
    });
    setActiveProfileLink(current.id);
    profileFrame = null;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (profileFrame != null) return;
      profileFrame = requestAnimationFrame(updateProfileDirectory);
    },
    { passive: true },
  );
  updateProfileDirectory();
}

abilityVideos.forEach((video) => {
  const offset = Number(video.dataset.offset || 0);
  const applyOffset = () => {
    if (!Number.isFinite(video.duration) || video.duration <= 0) return;
    video.currentTime = offset % video.duration;
  };
  if (video.readyState >= 1) applyOffset();
  else video.addEventListener("loadedmetadata", applyOffset, { once: true });
});

const projectPreviewVideos = [...document.querySelectorAll(".project-preview-video")];

if (projectPreviewVideos.length && "IntersectionObserver" in window) {
  const projectPreviewObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting) playVideo(video);
        else video.pause();
      });
    },
    { threshold: 0.2 },
  );
  projectPreviewVideos.forEach((video) => projectPreviewObserver.observe(video));
}

projectPreviewVideos.forEach((video) => {
  const offset = Number(video.dataset.offset || 0);
  const applyOffset = () => {
    if (!Number.isFinite(video.duration) || video.duration <= 0) return;
    video.currentTime = offset % video.duration;
  };
  if (video.readyState >= 1) applyOffset();
  else video.addEventListener("loadedmetadata", applyOffset, { once: true });
});

const revealElements = document.querySelectorAll(".reveal");

if (motionReduced || !("IntersectionObserver" in window)) {
  revealElements.forEach((element) => element.classList.add("visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.13, rootMargin: "0px 0px -32px" },
  );
  revealElements.forEach((element) => revealObserver.observe(element));
}

const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());
