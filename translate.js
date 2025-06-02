const translations = {
  zh: {
    nav: ["下载", "功能", "画廊", "常见问题", "测试", "联系", "English"],
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
    trainingStats: "2025 年 6 月 1 日训练，使用 878 个样本（747 训练样本，131 验证样本），共 521 轮训练。",
    faqTitle: "常见问题",
    faqSubtitle: "常见问题解答",
    faqItems: [
      {
        q: "我无法下载 YOLO 模型。",
        a: `我猜想你需要使用梯子。或者你可以尝试在 <a href="https://github.com/Shiny-Ladybug/assets/releases/latest" class="text-blue-600 underline hover:text-blue-800" rel="noopener noreferrer">模型发布页</a>，下载 afk-seg.pt、afk-det.pt 并放到 **\`./models\`** 文件夹下。`
      },
      {
        q: "我的后台检测功能无法正常工作。",
        a: `如果你使用的是 **Edge**，请改用 **Chrome** 或 **Firefox**。2025年5月27日后，Edge 已无法通过任何方式关闭 \`CalculateNativeWinOcclusion\`，包括 Edge Beta (137.0.3296.39) 和 Edge Canary (137.0.3283.0)。因此，Edge 现已**停止支持**。<br>如果你使用的是 **Chrome**，请以 \`"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" --disable-features=CalculateNativeWinOcclusion\` 启动。<br>如果你使用的是 **Firefox**，hook 功能可以正常工作。`
      },
      {
        q: "可以运行多久？",
        a: `我测试下来从 **22:45PM** 到 **5:40AM** *(6小时55分钟)*。最后一次挂机检查未能通过。`
      },
      {
        q: "我可以在电脑休眠/睡眠/关闭屏幕时运行吗？",
        a: `**不可以**。程序需要 pyautogui 捕获屏幕。建议你**关闭**屏幕、睡眠、休眠等超时设置，防止电脑进入休眠。`
      },
      {
        q: "支持 Linux/MacOS 吗？",
        a: `**不支持**。我只有 Windows 设备，手头没有 Mac 测试。如果你真的想用，可以下载 <a href="https://github.com/Shiny-Ladybug/florr-auto-afk/releases/tag/v1.1.1" rel="noopener noreferrer" class="text-blue-600 underline hover:text-blue-800">v1.1.1 源代码</a> 自行部署。`
      }
    ],
    testTitle: "测试",
    testDesc: "florr-auto-afk v1.2.9(Release) 测试视频",
    contactTitle: "联系",
    contactText: `如有问题或建议，请通过
        <a href="https://github.com/Shiny-Ladybug/florr-auto-afk/issues" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline hover:text-blue-800">
          GitHub Issue
        </a>
        或 QQ 联系我们。`,
    creator: "作者：",
    contributors: "贡献者：",
    websiteBy: "网站由：",
    copyright:
      "© 2025 Florr Auto AFK。保留所有权利。项目遵循 GPL-3.0 许可协议。",
  },
  en: {
    nav: ["Download", "Features", "Gallery", "FAQ", "Test", "Contact", "中文"],
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
      "Trained on `6/01/2025` based on 878 instances (747 train ~~actually 747 should be a boeing jet instead of a train~~, 131 val) with 521 epochs",
    faqTitle: "FAQ",
    faqSubtitle: "Frequently Asked Questions.",
    faqItems: [
      {
        q: "The YOLO models cannot be downloaded.",
        a: `Use VPN as needed. Or you can try to check <a href="https://github.com/Shiny-Ladybug/assets/releases/latest" class="text-blue-600 underline hover:text-blue-800" rel="noopener noreferrer">model release</a> and download afk-seg.pt, afk-det.pt and put them to **\`./models\`** folder`
      },
      {
        q: "My hook function does not work properly.",
        a: `If you are using **Edge**, use **Chrome** or **Firefox** instead. I find there is no sight of disabling \`CalculateNativeWinOcclusion\`  on 05/27/2025. Both Edge Beta (137.0.3296.39) and Edge Canary (137.0.3283.0) cannot disable the feature any longer. So I announce that Edge is **End of Support** now.<br>If you are using **Chrome**, run \`"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" --disable-features=CalculateNativeWinOcclusion\`. <br>If you are using **Firefox**, hook function will work properly.`
      },
      {
        q: "How long can it run?",
        a: `I've tested it for a night, it ran from **22:45PM** to **5:40AM** *(6hrs 55mins)*. It failed to solve the last AFK Check.`
      },
      {
        q: "Can it run when my computer is sleeping/hibernating/screen off?",
        a: `**No**. The program requires a Display to capture by pyautogui. Btw you'd better **turn off** Screen, sleep, hibernate timeouts to prevent the computer from sleeping.`
      },
      {
        q: "Does it support Linux/MacOS?",
        a: `**No**. I'm actually a fan of Windows. And my old MacBook is dead. I even don't have a machine to test. If you really want to use it. Download <a href="https://github.com/Shiny-Ladybug/florr-auto-afk/releases/tag/v1.1.1" rel="noopener noreferrer" class="text-blue-600 underline hover:text-blue-800">v1.1.1 Source Code</a> and deploy it yourself.`
      }
    ],
    testTitle: "Test",
    testDesc: "Test video of florr-auto-afk v1.2.9(Release)",
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
  }
};

const langToggle = document.getElementById("lang-toggle");
const langKey = "lang";
let lang = localStorage.getItem(langKey) || "en";

function updateLanguageTexts() {
  const t = translations[lang];

  // Navigation
  const navLinks = document.querySelectorAll("#navbar a, #navbar button");
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
  document.getElementById("view-github").textContent = t.github;

  // Features
  document.querySelector("#features h2").textContent = t.featuresTitle;
  const featurePs = document.querySelectorAll("#features p");
  featurePs.forEach((p, i) => {
    p.textContent = t.features[i] || "";
  });

  // Gallery
  document.querySelector("#gallery h2").textContent = t.galleryTitle;
  document.querySelector("#gallery p.text-xl").textContent = t.galleryText;
  document.querySelector("#gallery p.text-lg").innerHTML = marked.parse(t.trainingStats);

  // FAQ Section
  document.querySelector("#faq h2").textContent = t.faqTitle;
  document.querySelector("#faq > div > p.text-xl").textContent = t.faqSubtitle;
  const faqItemsContainer = document.querySelector("#faq .max-w-3xl");
  const faqItemDivs = faqItemsContainer.querySelectorAll(".bg-white");
  t.faqItems.forEach((item, index) => {
    if (faqItemDivs[index]) {
      faqItemDivs[index].querySelector("h3").textContent = item.q;
      faqItemDivs[index].querySelector("p").innerHTML = marked.parse(item.a);
    }
  });

  // Test Section
  document.querySelector("#test h2").textContent = t.testTitle;
  document.querySelector("#test p.text-xl").textContent = t.testDesc;

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
}

langToggle.addEventListener("click", () => {
  lang = lang === "en" ? "zh" : "en";
  localStorage.setItem(langKey, lang);
  updateLanguageTexts();
  fetchLatestRelease();
});

// Initial set
updateLanguageTexts();
