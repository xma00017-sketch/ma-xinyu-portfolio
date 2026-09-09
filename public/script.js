const cursorStamp = document.querySelector(".cursor-stamp");
const categoryTabs = document.querySelectorAll(".category-tab");
const projectGrid = document.querySelector("#projectGrid");
const detailCategory = document.querySelector("#detailCategory");
const detailCount = document.querySelector("#detailCount");
const detailTitle = document.querySelector("#detailTitle");
const detailSubtitle = document.querySelector("#detailSubtitle");
const detailIntro = document.querySelector("#detailIntro");
const detailRole = document.querySelector("#detailRole");
const detailAssets = document.querySelector("#detailAssets");
const projectMeta = document.querySelector(".project-meta");
const mediaTabs = document.querySelectorAll(".media-tab");
const mediaPanel = document.querySelector("#mediaPanel");
const detailDrawer = document.querySelector(".detail-drawer");
const revealItems = document.querySelectorAll(".reveal");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const lightboxCaption = document.querySelector("#lightboxCaption");
const lightboxClose = document.querySelector(".lightbox-close");
const lightboxPrev = document.querySelector(".lightbox-prev");
const lightboxNext = document.querySelector(".lightbox-next");
const casePage = document.querySelector("#casePage");
const caseContent = document.querySelector("#caseContent");
const caseClose = document.querySelector(".case-close");
const hero = document.querySelector("#home");

const categories = {
  service: {
    label: "交互 / 服务设计",
    accent: "#b9ff3d",
    projects: [
      {
        title: "Lost in the Menu",
        type: "Service Design / UX & UI Design",
        subtitle: "跨文化菜单理解与点餐决策体验设计",
        intro: "一个面向非英语母语用户的移动端菜单理解工具。项目通过菜单任务、行为观察、适应版 NASA-TLX 与半结构化访谈，分析陌生菜名、配料描述、菜单结构和选项数量带来的理解障碍，并将研究发现转化为菜单识别、菜品解释、视觉辅助和选择支持功能。",
        role: "用户研究、研究资料整理、主题分析、交互设计、UI 设计与高保真原型制作",
        assets: "研究报告、关键洞察、用户旅程、设计原则、移动端高保真原型",
        facts: [
          ["项目性质", "个人硕士毕业项目"],
          ["项目时长", "2026 · 硕士毕业项目周期"],
          ["我的角色", "用户研究、研究资料整理、主题分析、交互设计、UI 设计与高保真原型制作"],
          ["研究方法", "菜单理解任务、行为观察、适应版 NASA-TLX、半结构化访谈、定性主题整理"],
          ["主要交付", "研究报告、关键洞察、用户旅程、设计原则、移动端高保真原型"],
          ["关键发现", "用户的困难不仅来自语言翻译，也来自菜名透明度、配料描述、菜单结构与选项数量。"],
          ["探索性功能", "在核心菜单理解功能之外，项目进一步探索基于口味偏好与用餐情境的推荐方式。"]
        ],
        cover: "/assets/projects/lost-menu/1.webp",
        images: [
          "/assets/projects/lost-menu/1.webp",
          "/assets/projects/lost-menu/2.webp",
          "/assets/projects/lost-menu/3.webp",
          "/assets/projects/lost-menu/4.png",
          "/assets/projects/lost-menu/5.webp",
          "/assets/projects/lost-menu/6.png"
        ],
        sections: [
          {
            title: "Project Overview",
            images: ["/assets/projects/lost-menu/1.webp"]
          },
          {
            title: "Research & User Insight",
            images: [
              "/assets/projects/lost-menu/2.webp",
              "/assets/projects/lost-menu/3.webp"
            ]
          },
          {
            title: "Service Strategy",
            images: [
              "/assets/projects/lost-menu/4.png",
              "/assets/projects/lost-menu/5.webp"
            ]
          },
          {
            title: "Interface Design",
            images: ["/assets/projects/lost-menu/6.png"]
          }
        ]
      },
      {
        title: "EasyCart",
        type: "UX & Service Design",
        subtitle: "面向手部运动受限用户的无障碍购物体验设计",
        intro: "一个面向手部运动受限用户的无障碍购物平台概念。项目围绕误触、重复操作、精细点击困难和跨平台比较负担，设计震颤过滤、语音与视觉搜索、大点击区域、聚合比价和简化结账流程，使无障碍能力自然融入日常购物体验。",
        role: "无障碍研究、用户画像、用户流程、界面设计、设计规范与高保真原型制作",
        assets: "用户画像、核心用户流程、可访问性设计规范、移动端高保真原型、项目视频",
        facts: [
          ["项目性质", "个人课程项目"],
          ["项目时长", "课程项目周期"],
          ["我的角色", "无障碍研究、用户画像、用户流程、界面设计、设计规范与高保真原型制作"],
          ["设计依据", "WCAG 2.2 AA、手部运动障碍使用场景、可访问性交互原则"],
          ["主要交付", "用户画像、核心用户流程、可访问性设计规范、移动端高保真原型"],
          ["核心设计原则", "看起来普通，但每一处细节都为无障碍而设计。Looks like any shopping app. Built differently underneath."],
          ["验证表述", "围绕不同程度的手部运动障碍场景构建用户画像与设计需求，方案旨在降低误触和重复操作。"]
        ],
        cover: "/assets/projects/easycart/1.webp",
        video: "/assets/projects/easycart/video/easycart-demo.mp4",
        images: [
          "/assets/projects/easycart/1.webp",
          "/assets/projects/easycart/2.png",
          "/assets/projects/easycart/3.png",
          "/assets/projects/easycart/4.webp",
          "/assets/projects/easycart/5.png",
          "/assets/projects/easycart/6.webp",
          "/assets/projects/easycart/7.webp"
        ]
      },
      {
        title: "TideTroop",
        type: "UX & Service Design",
        subtitle: "海岸清洁志愿活动的概念性服务平台",
        intro: "面向英国 10-18 岁中小学生的概念性服务平台，聚焦海岸清洁活动中参与门槛高、组织效率低、成果难反馈等问题。项目提出结合潮汐、天气和污染信息的活动推荐机制，并通过学生端与教师端原型展示核心服务流程。",
        role: "用户研究、服务设计、平台体验、展示页面整理",
        assets: "7 张静态展示页，包含服务流程、学生端与教师端概念原型、活动组织与影响力展示",
        facts: [
          ["项目性质", "课程概念项目"],
          ["我的角色", "用户研究、服务设计、平台体验、展示页面整理"],
          ["概念说明", "AI、GPS、潮汐天气与影响力仪表盘用于展示服务设想与核心流程，不表示系统已完成产品化发布或真实数据接入。"],
          ["主要交付", "服务流程、学生端与教师端概念原型、展示页面整理"]
        ],
        cover: "/assets/projects/tidetroop/1.webp",
        images: [
          "/assets/projects/tidetroop/1.webp",
          "/assets/projects/tidetroop/2.png",
          "/assets/projects/tidetroop/3.png",
          "/assets/projects/tidetroop/34.png",
          "/assets/projects/tidetroop/4.png",
          "/assets/projects/tidetroop/5.webp",
          "/assets/projects/tidetroop/7.webp"
        ]
      },
      {
        title: "SheSays",
        type: "Service Design Research",
        intro: "围绕拥有 90,000+ 成员的女性创意社群，研究成员从一次性参与走向长期贡献的体验断点。项目通过访谈、问卷、线下观察和竞品分析，提出分层 Onboarding、五阶段成长路径与留存奖励体系三套服务设计方案。",
        role: "用户研究、数据整理、用户旅程、服务方案框架与信息可视化",
        assets: "6 张服务设计展示页，包括背景研究、核心洞察、当前旅程、用户画像、方案映射与未来旅程",
        facts: [
          ["我的角色", "用户研究、数据整理、用户旅程、服务方案框架与信息可视化"],
          ["研究方法", "访谈、问卷、线下观察、竞品分析"],
          ["设计产出", "服务设计展示页、用户旅程、成员成长路径、方案框架与信息可视化。"],
          ["客户反馈与项目进展", "分层 Onboarding 方向获得客户认可并进入后续推进，成员配对机制仍在讨论，志愿者成长路径被保留为后续规划方向。"]
        ],
        cover: "/assets/projects/shesays/1.webp",
        images: [
          "/assets/projects/shesays/1.webp",
          "/assets/projects/shesays/2.webp",
          "/assets/projects/shesays/3.png",
          "/assets/projects/shesays/4.png",
          "/assets/projects/shesays/5.png",
          "/assets/projects/shesays/6.webp"
        ],
        sections: [
          {
            title: "Project Overview",
            images: ["/assets/projects/shesays/1.webp"]
          },
          {
            title: "Research & Insights",
            images: [
              "/assets/projects/shesays/2.webp",
              "/assets/projects/shesays/3.png",
              "/assets/projects/shesays/4.png"
            ]
          },
          {
            title: "Service Strategy",
            images: [
              "/assets/projects/shesays/5.png",
              "/assets/projects/shesays/6.webp"
            ]
          }
        ]
      }
    ]
  },
  graphic: {
    label: "UI 设计",
    accent: "#dfe6d6",
    projects: [
      {
        title: "Podly",
        type: "Mobile UI Design",
        intro: "一款围绕播客推荐与声音社交展开的移动端 UI 设计。项目通过 Swipe Discovery、Voice Match、Smart Discovery 等功能，展示从内容发现、语音匹配到播客收听的完整产品体验。",
        role: "移动端 UI 设计、核心功能页面、视觉系统、产品展示长图排版",
        assets: "1 张播客 App UI 设计长图，包含首页、滑动推荐、声音匹配与智能推荐模块",
        cover: "/assets/projects/podly/cover.webp",
        images: ["/assets/projects/podly/podly-ui.webp"],
        sections: [
          {
            title: "UI Presentation",
            images: ["/assets/projects/podly/podly-ui.webp"]
          }
        ]
      },
      {
        title: "Wealthline",
        type: "Web UI Design",
        intro: "一组面向财富管理与金融服务场景的网页 UI 设计，包含官网首页与个人信息总览页。项目重点呈现金融产品的可信赖视觉氛围、数据看板信息层级、资产与市场信息的清晰组织。",
        role: "网页 UI 设计、金融产品视觉风格、信息架构、数据卡片与后台页面布局",
        assets: "1 张金融网页 UI 长图，包含官网首页、产品服务展示、数据模块与个人信息后台页",
        cover: "/assets/projects/wealthline/cover.webp",
        images: ["/assets/projects/wealthline/wealthline-ui.webp"],
        sections: [
          {
            title: "Web UI Presentation",
            images: ["/assets/projects/wealthline/wealthline-ui.webp"]
          }
        ]
      },
      {
        title: "Atlas",
        type: "Travel App UI Design",
        intro: "一款围绕地图入口、旅行记录与声音回忆展开的旅行 App UI 设计。项目通过地点发现、图鉴记录、Memory Capsule 与社区分享等功能，呈现从探索目的地到保存旅程记忆的完整移动端体验。",
        role: "移动端 UI 设计、品牌识别、功能流程整理、旅行内容视觉系统、长图展示排版",
        assets: "1 张旅行 App UI 设计长图，包含品牌识别、地图探索、旅行记录、社区分享与情绪化收束页",
        cover: "/assets/projects/atlas/cover.webp",
        images: ["/assets/projects/atlas/atlas-ui.webp"],
        sections: [
          {
            title: "Travel App UI Presentation",
            images: ["/assets/projects/atlas/atlas-ui.webp"]
          }
        ]
      }
    ]
  },
  culture: {
    label: "周边文创",
    accent: "#b7b9ad",
    projects: [
      {
        title: "琉璃瑞兔",
        type: "IP Character",
        intro: "以法琅彩、瓷器纹样与北宋传统兔形象为灵感，设计具有器物装饰感与吉祥寓意的兔子 IP。原始素材为单张展示页，因此网页中会以主视觉、角色局部和纹样细节的方式放大呈现。",
        role: "IP 角色设计、纹样转译、色彩搭配、单页展示排版",
        assets: "1 张完整展示页 + 自动裁切的局部特写图",
        cover: "/assets/projects/ip-project-1/page-01.jpg",
        images: ["/assets/projects/ip-project-1/page-01.jpg"],
        detailImages: [
          "/assets/projects/ip-project-1/detail-left.jpg",
          "/assets/projects/ip-project-1/detail-center.jpg",
          "/assets/projects/ip-project-1/detail-bottom.jpg"
        ],
        sections: [
          {
            title: "IP 设定",
            images: [
              "/assets/projects/ip-project-1/page-01.jpg",
              "/assets/projects/ip-project-1/updates/ip-lineup-poster.webp",
              "/assets/projects/ip-project-1/updates/ip-extension-overview.webp"
            ]
          },
          {
            title: "角色细节",
            images: [
              "/assets/projects/ip-project-1/updates/pattern-bowl-board.webp",
              "/assets/projects/ip-project-1/updates/blue-character-board.webp",
              "/assets/projects/ip-project-1/updates/standing-character-board.webp",
              "/assets/projects/ip-project-1/updates/fan-character-board.webp"
            ]
          },
          {
            title: "实物与包装",
            images: [
              "/assets/projects/ip-project-1/updates/real-figure-hand.webp",
              "/assets/projects/ip-project-1/updates/figure-with-card.webp",
              "/assets/projects/ip-project-1/updates/product-display.webp"
            ]
          }
        ],
        singleFeature: true
      },
      {
        title: "海底捞周边延展",
        type: "Merchandise Extension",
        intro: "以北京市高校设计比赛给定的海底捞官方原始 IP 形象为基础，进行角色表情、动作与周边衍生品延展。项目重点呈现从原始形象识别到二次创作、产品应用和品牌场景化落地的完整过程。",
        role: "IP 周边延展、产品 mockup、物料系统、展示页排版",
        assets: "6 张产品延展展示页 + 3 张更新细节图",
        cover: "/assets/projects/ip-project-2/updates/merchandise-system-board.webp",
        images: [
          "/assets/projects/ip-project-2/page-01.jpg",
          "/assets/projects/ip-project-2/page-02.jpg",
          "/assets/projects/ip-project-2/page-03.jpg",
          "/assets/projects/ip-project-2/page-04.jpg",
          "/assets/projects/ip-project-2/page-05.jpg",
          "/assets/projects/ip-project-2/page-06.jpg"
        ],
        sections: [
          {
            title: "官方原始 IP",
            note: "此形象为比赛命题中提供的海底捞官方原始 IP。后续设计是在该基础上进行表情、动作、视觉物料与周边衍生品延展，用于说明原始形象来源，避免与原创延展部分混淆。",
            images: ["/assets/projects/ip-project-2/updates/official-original-ip.png"]
          },
          {
            title: "设计说明",
            images: ["/assets/projects/ip-project-2/page-06.jpg"]
          },
          {
            title: "人物延伸介绍",
            images: ["/assets/projects/ip-project-2/page-05.jpg"]
          },
          {
            title: "角色延展",
            images: ["/assets/projects/ip-project-2/updates/character-extension-sheet.webp"]
          },
          {
            title: "周边与衍生品",
            images: [
              "/assets/projects/ip-project-2/updates/merchandise-system-board.webp",
              "/assets/projects/ip-project-2/page-01.jpg",
              "/assets/projects/ip-project-2/page-02.jpg",
              "/assets/projects/ip-project-2/page-03.jpg",
              "/assets/projects/ip-project-2/page-04.jpg"
            ]
          }
        ]
      },
      {
        title: "果酱包装系列文创",
        type: "Packaging / Cultural Product",
        intro: "以地方水果与手写字体为视觉线索，延展梨、桃、梅、枇杷、杨梅等果酱包装。项目重点呈现水彩插画、口味识别、包装标签与产品陈列之间的系列化关系。",
        role: "地方文化提炼、插画视觉、包装信息设计、系列展示",
        assets: "8 张包装展示页 + 9 张果酱系列细节图",
        cover: "/assets/projects/ip-project-3/jam/product-packaging-set.webp",
        images: [
          "/assets/projects/ip-project-3/page-01.jpg",
          "/assets/projects/ip-project-3/page-02.jpg",
          "/assets/projects/ip-project-3/page-03.jpg",
          "/assets/projects/ip-project-3/page-04.jpg",
          "/assets/projects/ip-project-3/page-05.jpg",
          "/assets/projects/ip-project-3/page-06.jpg",
          "/assets/projects/ip-project-3/page-07.jpg",
          "/assets/projects/ip-project-3/page-08.jpg"
        ],
        sections: [
          {
            title: "系列总览",
            images: [
              "/assets/projects/ip-project-3/jam/series-overview.png",
              "/assets/projects/ip-project-3/jam/product-packaging-set.webp"
            ]
          },
          {
            title: "口味插画",
            images: [
              "/assets/projects/ip-project-3/jam/pear-label.png",
              "/assets/projects/ip-project-3/jam/winter-peach-label.png",
              "/assets/projects/ip-project-3/jam/bayberry-label.png",
              "/assets/projects/ip-project-3/jam/loquat-label.png"
            ]
          },
          {
            title: "瓶身标签",
            images: [
              "/assets/projects/ip-project-3/jam/peach-bottle-label.png",
              "/assets/projects/ip-project-3/jam/pear-bottle-label.png",
              "/assets/projects/ip-project-3/jam/plum-bottle-label.png"
            ]
          },
          {
            title: "原包装展示页",
            images: [
              "/assets/projects/ip-project-3/page-01.jpg",
              "/assets/projects/ip-project-3/page-02.jpg",
              "/assets/projects/ip-project-3/page-03.jpg",
              "/assets/projects/ip-project-3/page-04.jpg",
              "/assets/projects/ip-project-3/page-05.jpg",
              "/assets/projects/ip-project-3/page-06.jpg",
              "/assets/projects/ip-project-3/page-07.jpg",
              "/assets/projects/ip-project-3/page-08.jpg"
            ]
          }
        ]
      }
    ]
  }
};

let activeCategory = "service";
let activeProjectIndex = 0;
let activeMedia = "intro";
let galleryImages = [];
let lightboxIndex = 0;

if (!history.state) {
  history.replaceState({ portfolioHome: true }, "", window.location.href);
}

function getActiveProject() {
  return categories[activeCategory].projects[activeProjectIndex];
}

function getProjectFacts(project) {
  return project.facts || [
    ["我的角色", project.role],
    ["设计产出", project.assets]
  ];
}

function renderFacts(project) {
  return getProjectFacts(project)
    .map(
      ([label, value]) => `
        <div>
          <dt>${label}</dt>
          <dd>${value}</dd>
        </div>
      `
    )
    .join("");
}

function getProjectGallery(project) {
  if (project.sections) {
    return project.sections.flatMap((section) => section.images || []);
  }
  const images = project.images || [];
  const detailImages = project.detailImages || [];
  return project.singleFeature ? [...images, ...detailImages] : images;
}

function goToGallery() {
  activeMedia = "pdf";
  renderDetail();
  mediaPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function openLightbox(index) {
  if (!galleryImages.length) return;
  lightboxIndex = (index + galleryImages.length) % galleryImages.length;
  const project = getActiveProject();
  lightboxImage.src = galleryImages[lightboxIndex];
  lightboxImage.alt = `${project.title} detail ${lightboxIndex + 1}`;
  lightboxCaption.textContent = `${project.title} / ${String(lightboxIndex + 1).padStart(2, "0")} of ${String(galleryImages.length).padStart(2, "0")}`;
  lightbox.classList.add("visible");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  lightbox.classList.remove("visible");
  lightbox.setAttribute("aria-hidden", "true");
}

function moveLightbox(step) {
  openLightbox(lightboxIndex + step);
}

function renderCasePage() {
  const category = categories[activeCategory];
  const project = getActiveProject();
  const images = getProjectGallery(project);
  const sections = project.sections || null;
  const hasImages = images.length > 0;
  const showVideo = Boolean(project.video);

  galleryImages = images;
  caseContent.innerHTML = `
    <header class="case-hero">
      <p class="eyebrow">${category.label}</p>
      <h2>${project.title}</h2>
      ${project.subtitle ? `<p class="case-subtitle">${project.subtitle}</p>` : ""}
      <p>${project.intro}</p>
      <dl class="case-facts">
        ${renderFacts(project)}
      </dl>
    </header>

    ${
      showVideo
        ? `
          <section class="case-video" aria-label="${project.title} video section">
            ${
              project.video
                ? `<video class="case-video-player" src="${project.video}" controls preload="metadata"></video>`
                : `<div class="case-video-card">
                    <span>Video</span>
                    <strong>${project.title} project video placeholder</strong>
                    <p>之后可以放项目讲解视频、本地 MP4 或 B 站 / YouTube 链接。</p>
                  </div>`
            }
          </section>
        `
        : ""
    }

    <section class="case-board" aria-label="${project.title} detailed images">
      ${
        sections
          ? sections
              .map(
                (section) => `
                  <div class="case-section">
                    <h3>${section.title}</h3>
                    ${section.note ? `<p class="case-section-note">${section.note}</p>` : ""}
                    ${(section.images || [])
                      .map((src) => {
                        const index = images.indexOf(src);
                        return `
                          <button class="case-image" type="button" data-gallery-index="${index}" aria-label="Open ${project.title} detail ${index + 1}">
                            <img src="${src}" alt="${project.title} ${section.title} ${index + 1}" loading="lazy" />
                          </button>
                        `;
                      })
                      .join("")}
                  </div>
                `
              )
              .join("")
          : hasImages
          ? images
              .map(
                (src, index) => `
                  <button class="case-image" type="button" data-gallery-index="${index}" aria-label="Open ${project.title} detail ${index + 1}">
                    <img src="${src}" alt="${project.title} detail page ${index + 1}" loading="lazy" />
                  </button>
                `
              )
              .join("")
          : `<div class="case-empty">等待添加项目详情图</div>`
      }
    </section>
  `;
}

function openCasePage(options = {}) {
  const { syncHistory = true } = options;
  const alreadyOpen = casePage.classList.contains("visible");
  renderCasePage();
  casePage.classList.add("visible");
  casePage.setAttribute("aria-hidden", "false");
  document.body.classList.add("case-open");
  casePage.scrollTop = 0;

  if (syncHistory && !alreadyOpen) {
    history.pushState(
      {
        caseOpen: true,
        category: activeCategory,
        projectIndex: activeProjectIndex
      },
      "",
      window.location.href
    );
  }
}

function closeCasePage(options = {}) {
  const { syncHistory = true } = options;
  if (syncHistory && history.state?.caseOpen) {
    history.back();
    return;
  }
  casePage.classList.remove("visible");
  casePage.setAttribute("aria-hidden", "true");
  document.body.classList.remove("case-open");
}

function renderProjectGrid() {
  const category = categories[activeCategory];
  projectGrid.innerHTML = category.projects
    .map(
      (project, index) => `
        <button
          class="project-card ${index === activeProjectIndex ? "active" : ""}"
          type="button"
          data-index="${index}"
          style="--accent: ${category.accent}"
        >
          <span class="project-thumb">
            ${
              project.cover
                ? `<img src="${project.cover}" alt="${project.title} 项目封面" />`
                : `<span>${project.type}</span>`
            }
          </span>
          <strong>${project.title}</strong>
          <small>${category.label} / ${String(index + 1).padStart(2, "0")}</small>
        </button>
      `
    )
    .join("");

  projectGrid.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", () => {
      activeProjectIndex = Number(card.dataset.index);
      activeMedia = "intro";
      renderProjectGrid();
      renderDetail();
    });

    card.addEventListener("pointerenter", () => cursorStamp.classList.add("visible"));
    card.addEventListener("pointerleave", () => cursorStamp.classList.remove("visible"));
  });
}

function renderDetail() {
  const category = categories[activeCategory];
  const project = category.projects[activeProjectIndex];
  const showVideoTab = Boolean(project.video);
  if (!showVideoTab && activeMedia === "video") activeMedia = "intro";

  detailCategory.textContent = category.label;
  detailCount.textContent = `${String(activeProjectIndex + 1).padStart(2, "0")} / ${String(category.projects.length).padStart(2, "0")}`;
  detailTitle.textContent = project.title;
  detailSubtitle.textContent = project.subtitle || "";
  detailSubtitle.hidden = !project.subtitle;
  detailIntro.textContent = project.intro;
  detailRole.textContent = project.role;
  detailAssets.textContent = project.assets;
  projectMeta.innerHTML = renderFacts(project);

  mediaTabs.forEach((tab) => {
    tab.hidden = tab.dataset.media === "video" && !showVideoTab;
    tab.classList.toggle("active", tab.dataset.media === activeMedia);
  });

  galleryImages = getProjectGallery(project);

  if (activeMedia === "intro") {
    mediaPanel.innerHTML = `
      <div class="media-intro intro-clean">
        ${
          project.cover
            ? `<button class="intro-preview open-case-page" type="button" aria-label="Open ${project.title} project detail">
                <img src="${project.cover}" alt="${project.title} project preview" />
                <span>查看完整项目</span>
              </button>`
            : `<button class="intro-preview empty-preview jump-gallery" type="button">等待添加项目图片</button>`
        }
      </div>
    `;
  }

  if (activeMedia === "video") {
    mediaPanel.innerHTML = `
      <div class="media-video">
        ${
          project.video
            ? `<video class="media-video-player" src="${project.video}" controls preload="metadata"></video>`
            : `<div>
                <div class="play-button">PLAY</div>
                <p>${project.title} 的视频展示位。之后可以嵌入项目视频、B站/YouTube 链接或本地 MP4。</p>
              </div>`
        }
      </div>
    `;
  }

  if (activeMedia === "pdf") {
    const isProcessProject = activeCategory === "service" && project.images.length > 1;
    const imageMarkup = isProcessProject
      ? `
        <div class="process-viewer">
          <div class="process-toolbar">
            <div>
              <span>${project.type}</span>
              <strong>${project.title} · Process</strong>
            </div>
            <button class="open-case-page" type="button">查看完整项目</button>
          </div>
          <div class="process-scroll" tabindex="0" aria-label="${project.title} continuous project pages">
            ${project.images
              .map(
                (src, index) => `
                  <button class="process-page" type="button" data-gallery-index="${index}" aria-label="Open ${project.title} page ${index + 1}">
                    <img src="${src}" alt="${project.title} process page ${index + 1}" loading="lazy" />
                  </button>
                `
              )
              .join("")}
          </div>
        </div>
      `
      : project.sections
      ? `
        <div class="sectioned-gallery">
          ${project.sections
            .map(
              (section) => `
                <section class="section-preview-group">
                  <h4>${section.title}</h4>
                  <div class="section-preview-grid">
                    ${(section.images || [])
                      .map((src) => {
                        const index = galleryImages.indexOf(src);
                        return `
                          <button class="section-preview" type="button" data-gallery-index="${index}">
                            <img src="${src}" alt="${project.title} ${section.title}" loading="lazy" />
                          </button>
                        `;
                      })
                      .join("")}
                  </div>
                </section>
              `
            )
            .join("")}
        </div>
      `
      : project.singleFeature
      ? `
        <div class="single-showcase">
          <a class="single-main" href="${project.images[0]}" target="_blank" rel="noreferrer">
            <img src="${project.images[0]}" alt="${project.title} 完整展示页" loading="lazy" />
          </a>
          <div class="detail-crops">
            ${project.detailImages
              .map(
                (src, index) => `
                  <a class="crop-card" href="${src}" target="_blank" rel="noreferrer">
                    <img src="${src}" alt="${project.title} 局部特写 ${index + 1}" loading="lazy" />
                    <span>Detail ${String(index + 1).padStart(2, "0")}</span>
                  </a>
                `
              )
              .join("")}
          </div>
        </div>
      `
      : project.images.length
      ? project.images
          .map(
            (src, index) => `
              <a class="pdf-page image-page" href="${src}" target="_blank" rel="noreferrer">
                <img src="${src}" alt="${project.title} 展示页 ${index + 1}" loading="lazy" />
                <span>${String(index + 1).padStart(2, "0")}</span>
              </a>
            `
          )
          .join("")
      : `
        <div class="pdf-page">PDF 01</div>
        <div class="pdf-page">PDF 02</div>
        <div class="pdf-page">PDF 03</div>
      `;

    mediaPanel.innerHTML = `
      <div class="media-pdf${isProcessProject ? " media-pdf-process" : ""}">
        ${imageMarkup}
      </div>
    `;
  }

  detailDrawer.classList.remove("pop");
  void detailDrawer.offsetWidth;
  detailDrawer.classList.add("pop");
}

categoryTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    activeCategory = tab.dataset.category;
    activeProjectIndex = 0;
    activeMedia = "intro";
    categoryTabs.forEach((item) => item.classList.toggle("active", item === tab));
    renderProjectGrid();
    renderDetail();
  });
});

mediaTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    activeMedia = tab.dataset.media;
    renderDetail();
  });
});

mediaPanel.addEventListener("click", (event) => {
  const jumpTarget = event.target.closest(".jump-gallery");
  if (jumpTarget) {
    event.preventDefault();
    goToGallery();
    return;
  }

  const processFullscreen = event.target.closest(".open-process-lightbox");
  if (processFullscreen) {
    event.preventDefault();
    openLightbox(0);
    return;
  }

  const caseTarget = event.target.closest(".open-case-page");
  if (caseTarget) {
    event.preventDefault();
    openCasePage();
    return;
  }

  const processPage = event.target.closest(".process-page");
  if (processPage) {
    event.preventDefault();
    openLightbox(Number(processPage.dataset.galleryIndex) || 0);
    return;
  }

  const sectionPreview = event.target.closest(".section-preview");
  if (sectionPreview) {
    event.preventDefault();
    openLightbox(Number(sectionPreview.dataset.galleryIndex) || 0);
    return;
  }

  const galleryTarget = event.target.closest(".image-page, .single-main, .crop-card");
  if (galleryTarget) {
    event.preventDefault();
    const src = galleryTarget.getAttribute("href");
    const index = Math.max(0, galleryImages.indexOf(src));
    openLightbox(index);
  }
});

lightboxClose.addEventListener("click", closeLightbox);
lightboxPrev.addEventListener("click", () => moveLightbox(-1));
lightboxNext.addEventListener("click", () => moveLightbox(1));
caseClose.addEventListener("click", closeCasePage);

caseContent.addEventListener("click", (event) => {
  const caseImage = event.target.closest(".case-image");
  if (!caseImage) return;
  event.preventDefault();
  openLightbox(Number(caseImage.dataset.galleryIndex) || 0);
});

casePage.addEventListener("click", (event) => {
  if (event.target === casePage) closeCasePage();
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (event) => {
  if (lightbox.classList.contains("visible")) {
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") moveLightbox(-1);
    if (event.key === "ArrowRight") moveLightbox(1);
    return;
  }

  if (event.key === "Escape" && casePage.classList.contains("visible")) closeCasePage();
});

window.addEventListener("popstate", (event) => {
  if (lightbox.classList.contains("visible")) {
    closeLightbox();
  }

  if (event.state?.caseOpen) {
    activeCategory = event.state.category || activeCategory;
    activeProjectIndex = Number.isInteger(event.state.projectIndex) ? event.state.projectIndex : activeProjectIndex;
    activeMedia = "intro";
    categoryTabs.forEach((item) => item.classList.toggle("active", item.dataset.category === activeCategory));
    renderProjectGrid();
    renderDetail();
    openCasePage({ syncHistory: false });
    return;
  }

  if (casePage.classList.contains("visible")) {
    closeCasePage({ syncHistory: false });
  }
});

document.addEventListener("pointermove", (event) => {
  cursorStamp.style.setProperty("--x", `${event.clientX}px`);
  cursorStamp.style.setProperty("--y", `${event.clientY}px`);
});

function updateScrollState() {
  const heroHeight = hero?.offsetHeight || window.innerHeight;
  const progress = Math.min(1, Math.max(0, window.scrollY / Math.max(1, heroHeight * 0.72)));
  document.body.style.setProperty("--hero-progress", progress.toFixed(3));
  document.body.classList.toggle("scrolled", window.scrollY > 24);
  document.body.classList.toggle("hero-transition", progress > 0);
}

window.addEventListener("scroll", updateScrollState, { passive: true });
window.addEventListener("resize", updateScrollState);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.14 }
);

revealItems.forEach((item, index) => {
  item.style.setProperty("--reveal-delay", `${Math.min(index * 35, 180)}ms`);
  observer.observe(item);
});

renderProjectGrid();
renderDetail();
updateScrollState();
