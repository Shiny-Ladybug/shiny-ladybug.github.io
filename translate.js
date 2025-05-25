const translations = {
  zh: {
    nav: ["下载", "功能", "画廊", "常见问题", "联系"],
    downloadTitle: "下载",
    downloadText: `你有没有因为奇怪的挂机检查而无法舒畅地玩 <a href="https://florr.io" class="text-blue-600 underline hover:text-blue-800" target="_blank" rel="noopener noreferrer">florr.io</a>？下载最新版的 Florr Auto AFK ，让你以高准确率轻松解决它们。目前我们的程序没有导致任何封号记录，因此现在是很安全的。`,
    latestVersion: "最新版本：",
    exe: "下载可执行文件",
    exeMirror: "通过镜像下载",
    src: "下载源代码",
    srcMirror: "通过镜像下载",
    github: "查看 GitHub",
    featuresTitle: "功能",
    features: [
      "1. 目前最先进的模型，达到 90% 的准确率。",
      "2. 简洁、用户友好的图形界面。",
      "3. 通过窗口钩子实现后台检测。",
      "4. 支持挂机检查通知与调试。",
      "5. 自定义主题、参数与设置。",
      "6. 使用“曝光”方法对图片进行降噪。",
      "7. 提供详细文档（README.md, Settings.md）。",
      "（如果遇到问题，README 文件中大概率有解答。）"
    ],
    galleryTitle: "画廊",
    galleryText: "以下是模型解决的挂机检查图集和训练统计。",
    trainingStats: "2025 年 5 月 23 日训练，使用 225 个样本（192 训练样本，33 验证样本），共 431 轮训练。",
    faqTitle: "常见问题",
    faqSubtitle: "常见问题解答",
    faqItems: [
      {
        q: "我的 YOLO 模型无法下载。",
        a: `下这玩意要梯子。或者你可以尝试查看 <a href="https://github.com/Shiny-Ladybug/assets/releases/latest" class="text-blue-600 underline hover:text-blue-800" rel="noopener noreferrer">模型发布页</a> 并下载 afk-seg.pt、afk-det.pt，然后放到 <strong>./models</strong> 文件夹下。`
      },
      {
        q: "我的后台检测功能无法正常工作。",
        a: `如果你使用的是稳定版 Edge，请改用 Edge (Dev/Canary)。然后进入 <strong>edge://flags</strong> 并关闭 CalculateNativeWinOcclusion。<br>如果你使用的是 Chrome，请运行 <strong>"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" --disable-features=CalculateNativeWinOcclusion</strong>。<br>如果你使用的是 Firefox，hook 功能可以正常工作。`
      },
      {
        q: "它能运行多久？",
        a: `我测试过一整晚，从 22:45 到 5:40（6 小时 55 分钟）。最后一次挂机检查没有通过。`
      },
      {
        q: "电脑休眠/睡眠/关闭屏幕时能运行吗？",
        a: `不能。该程序需要通过 pyautogui 捕获屏幕。建议关闭屏幕、睡眠、休眠等超时设置，防止电脑进入休眠。`
      },
      {
        q: "支持 Linux/MacOS 吗？",
        a: `不支持。我只用 Windows，且没有 Mac 测试。如果你真的想用，可以下载 <a href="https://github.com/Shiny-Ladybug/florr-auto-afk/releases/tag/v1.1.1" rel="noopener noreferrer" class="text-blue-600 underline hover:text-blue-800">v1.1.1 源代码</a> 自行部署。`
      }
    ],
    contactTitle: "联系",
    contactText: `如有问题或建议，请通过
        <a href="https://github.com/Shiny-Ladybug/florr-auto-afk/issues" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline hover:text-blue-800">
          GitHub 问题
        </a>
        或 QQ 联系我们。`,
    creator: "作者：",
    contributors: "贡献者：",
    websiteBy: "网站由：",
    copyright:
      "© 2025 Florr Auto AFK。保留所有权利。项目遵循 GPL-3.0 许可协议。",
    buttonText: "English"
  },
  en: {
    nav: ["Download", "Features", "Gallery", "FAQ", "Contact"],
    downloadTitle: "Download",
    downloadText: `Tired of the odd, snake-like AFK Checks that stop you from relaxing while playing <a href="https://florr.io" class="text-blue-600 underline hover:text-blue-800" target="_blank" rel="noopener noreferrer">florr.io</a>? Download the latest version of Florr Auto AFK to easily bypass them with high accuracy. Our application has not caused any bans so far, so it appears to be safe to use.`,
    latestVersion: "Latest version: ",
    exe: "Download Executable",
    exeMirror: "Download via Mirror",
    src: "Download Source",
    srcMirror: "Download via Mirror",
    github: "View on GitHub",
    featuresTitle: "Features",
    features: [
      "1. Our state-of-the-art model achieves 90% accuracy.",
      "2. A clean, user-friendly GUI.",
      "3. Background detection and solving via window hooks.",
      "4. AFK check notifications and debugging support.",
      "5. Custom themes, parameters, and settings.",
      "6. Noise reduction via the \"exposure\" method.",
      "7. Includes detailed documentation (README.md, Settings.md).",
      "(If you encounter issues, there is likely a solution in the README file.)"
    ],
    galleryTitle: "Gallery",
    galleryText:
      "A collage of the countless AFK checks our model solved, and the training statistics.",
    trainingStats:
      "Trained on 5/23/2025 based on 225 instances (192 train, 33 val) with 431 epochs.",
    faqTitle: "FAQ",
    faqSubtitle: "Frequently Asked Questions.",
    faqItems: [
      {
        q: "The YOLO models cannot be downloaded.",
        a: `Use VPN as needed. Or you can try to check <a href="https://github.com/Shiny-Ladybug/assets/releases/latest" class="text-blue-600 underline hover:text-blue-800" rel="noopener noreferrer">model release</a> and download afk-seg.pt, afk-det.pt and put them to <strong>./models</strong> folder`
      },
      {
        q: "My hook function does not work properly.",
        a: `If you are using Stable Edge, use Edge (Dev/Canary) instead. And continue to <strong>edge://flags</strong> and turn off CalculateNativeWinOcclusion.<br>If you are using Chrome, run <strong>"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" --disable-features=CalculateNativeWinOcclusion</strong>. <br>If you are using Firefox, hook function will work properly.`
      },
      {
        q: "How long can it run?",
        a: `I've tested it for a night, it ran from 22:45PM to 5:40AM (6hrs 55mins). It failed to solve the last AFK Check.`
      },
      {
        q: "Can it run when my computer is sleeping/hibernating/screen off?",
        a: `No. The program requires a Display to capture by pyautogui. Btw you'd better turn off Screen, sleep, hibernate timeouts to prevent the computer from sleeping.`
      },
      {
        q: "Does it support Linux/MacOS?",
        a: `No. I'm actually a fan of Windows. And my old MacBook is dead. I even don't have a machine to test. If you really want to use it. Download <a href="https://github.com/Shiny-Ladybug/florr-auto-afk/releases/tag/v1.1.1" rel="noopener noreferrer" class="text-blue-600 underline hover:text-blue-800">v1.1.1 Source Code</a> and deploy it yourself.`
      }
    ],
    contactTitle: "Contact",
    contactText: `For questions or suggestions, contact us via
        <a href="https://github.com/Shiny-Ladybug/florr-auto-afk/issues" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline hover:text-blue-800">
          GitHub issue page
        </a>
        or QQ.`,
    creator: "Creator:",
    contributors: "Contributors:",
    websiteBy: "Website by:",
    copyright:
      "© 2025 Florr Auto AFK. All rights reserved. Project under GPL-3.0 License.",
    buttonText: "中文"
  }
};

const langToggle = document.getElementById("lang-toggle");
const langKey = "lang";
let lang = localStorage.getItem(langKey) || "en";

function updateLanguageTexts() {
  const t = translations[lang];

  // Navigation
  const navLinks = document.querySelectorAll("#navbar a");
  navLinks.forEach((el, i) => (el.textContent = t.nav[i]));

  // Download section
  document.querySelector("#download h1").textContent = t.downloadTitle;
  document.querySelector("#download p").innerHTML = t.downloadText;
  document.querySelector("#latest-version").parentElement.innerHTML =
    "<strong>" + t.latestVersion + '<span id="latest-version">Loading...</span></strong>';
  document.getElementById("download-exe-btn").querySelector("span").textContent = t.exe;
  document.getElementById("download-exe-mirror").textContent = t.exeMirror;
  document.getElementById("download-source-btn").querySelector("span").textContent = t.src;
  document.getElementById("download-source-mirror").textContent = t.srcMirror;
  document.querySelector("#download a[href*='github']").textContent = t.github;

  // Features
  document.querySelector("#features h2").textContent = t.featuresTitle;
  const featurePs = document.querySelectorAll("#features p");
  featurePs.forEach((p, i) => {
    p.textContent = t.features[i] || "";
  });

  // Gallery
  document.querySelector("#gallery h2").textContent = t.galleryTitle;
  document.querySelector("#gallery p.text-xl").textContent = t.galleryText;
  document.querySelector("#gallery p.text-lg").textContent = t.trainingStats;

  // FAQ Section
  document.querySelector("#faq h2").textContent = t.faqTitle;
  document.querySelector("#faq > div > p.text-xl").textContent = t.faqSubtitle;
  const faqItemsContainer = document.querySelector("#faq .max-w-3xl");
  const faqItemDivs = faqItemsContainer.querySelectorAll(".bg-white");
  t.faqItems.forEach((item, index) => {
    if (faqItemDivs[index]) {
      faqItemDivs[index].querySelector("h3").textContent = item.q;
      faqItemDivs[index].querySelector("p").innerHTML = item.a;
    }
  });

  // Contact
  document.querySelector("#contact h2").textContent = t.contactTitle;
  document.querySelector("#contact p.text-xl").innerHTML = t.contactText;

  const contactInfo = document.querySelector("#contact p.text-md");
  contactInfo.innerHTML = `
      ${t.creator}
      <a href="https://github.com/Shiny-Ladybug" rel="noopener noreferrer" class="font-bold hover:underline">
        Shiny Ladybug
      </a><br />
      ${t.contributors}
      <a href="https://github.com/RandomGuy1520" rel="noopener noreferrer" class="font-bold hover:underline">
        RandomGuy1520
      </a>,
      <a href="https://github.com/Shiny-Ladybug" rel="noopener noreferrer" class="font-bold hover:underline">
        Shiny Ladybug
      </a>
      <br />
      ${t.websiteBy}
      <a href="https://github.com/RandomGuy1520" rel="noopener noreferrer" class="font-bold hover:underline">
        RandomGuy1520
      </a>
      <br />
      ${t.copyright}
    `;

  // Button text
  langToggle.textContent = t.buttonText;
}

langToggle.addEventListener("click", () => {
  lang = lang === "en" ? "zh" : "en";
  localStorage.setItem(langKey, lang);
  updateLanguageTexts();
  fetchLatestRelease();
});

// Initial set
updateLanguageTexts();
