const translations = {
    zh: {
      nav: ["下载", "功能", "画廊", "联系"],
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
      nav: ["Download", "Features", "Gallery", "Contact"],
      downloadTitle: "Download",
      downloadText: `Tired of the odd, snake-like AFK Checks that stop you from relaxing while playing <a href="https://florr.io" class="text-blue-600 underline hover:text-blue-800" target="_blank" rel="noopener noreferrer">florr.io</a>? Download the latest version of Florr Auto AFK to easily bypass them with high accuracy. Our application has not caused any bans so far, so it appears to be safe to use.`,
      latestVersion: "Latest version: ",
      exe: "Download Executable",
      exeMirror: "Download via Mirror",
      src: "Download Source Code",
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
