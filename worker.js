const navbar = document.getElementById("navbar");
let lastScrollTop = 0;
let scrollTimeout;

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScrollTop) {
        navbar.classList.remove("fade-in");
        navbar.classList.add("fade-out");
    } else {
        navbar.classList.remove("fade-out");
        navbar.classList.add("fade-in");
    }

    lastScrollTop = currentScroll;
    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
        navbar.classList.remove("fade-out");
        navbar.classList.add("fade-in");
    }, 100);
});

document.getElementById('download-exe-btn').addEventListener('click', function () {
    const link = document.getElementById('download-exe');
    if (link && link.href && link.href !== '#') window.open(link.href, '_blank');
});
document.getElementById('download-source-btn').addEventListener('click', function () {
    const link = document.getElementById('download-source');
    if (link && link.href && link.href !== '#') window.open(link.href, '_blank');
});

async function fetchLatestRelease() {
    try {
        const res = await fetch('https://api.github.com/repos/Shiny-Ladybug/florr-auto-afk/releases/latest');
        const data = await res.json();
        const version = data.tag_name || 'N/A';
        document.getElementById('latest-version').textContent = version;

        let sourceUrl = `https://github.com/Shiny-Ladybug/florr-auto-afk/archive/refs/tags/${version}.zip`;
        let exeUrl = '';
        if (data.assets && data.assets.length) {
            for (const asset of data.assets) {
                if (new RegExp(`^florr-auto-afk-v${version.replace(/^v/, '')}\\.zip$`, 'i').test(asset.name)) {
                    exeUrl = asset.browser_download_url;
                }
            }
        }
        let exeA = document.getElementById('download-exe');
        if (!exeA) {
            exeA = document.createElement('a');
            exeA.id = 'download-exe';
            exeA.style.display = 'none';
            document.body.appendChild(exeA);
        }
        exeA.href = exeUrl || data.html_url;

        let sourceA = document.getElementById('download-source');
        if (!sourceA) {
            sourceA = document.createElement('a');
            sourceA.id = 'download-source';
            sourceA.style.display = 'none';
            document.body.appendChild(sourceA);
        }
        sourceA.href = sourceUrl || data.html_url;

        document.getElementById('download-source-mirror').href =
            sourceUrl ? `https://github.moeyy.xyz/https://github.com/Shiny-Ladybug/florr-auto-afk/archive/refs/tags/${version}.zip` : data.html_url;
        document.getElementById('download-exe-mirror').href =
            exeUrl ? `https://github.moeyy.xyz/${exeUrl}` : data.html_url;
    } catch (e) {
        document.getElementById('latest-version').textContent = 'Error';
    }
}

window.fetchLatestRelease = fetchLatestRelease;

document.addEventListener('DOMContentLoaded', () => {
    const ball = document.getElementById('afk-ball');
    const base = document.getElementById('afk-base');
    const animationContainer = base.parentElement; // The div with 'position: relative'

    if (!ball || !base || !animationContainer) {
        console.error("AFK animation elements not found!");
        return;
    }

    const pathPoints = [
        { x: 100, y: 272 },
        { x: 44, y: 243 },
        { x: 28, y: 176 },
        { x: 87, y: 151 },
        { x: 146, y: 183 },
        { x: 205, y: 123 },
    ];

    let currentSegment = 0;
    let progressInSegment = 0;
    const animationSpeed = 0.02;

    let offsetX = 0;
    let offsetY = 0;

    function calculateOffsetsAndInitialize() {
        const baseRect = base.getBoundingClientRect();
        const containerRect = animationContainer.getBoundingClientRect();
        offsetX = baseRect.left - containerRect.left;
        offsetY = baseRect.top - containerRect.top;

        if (pathPoints.length > 0) {
            ball.style.left = (offsetX + pathPoints[0].x) + 'px';
            ball.style.top = (offsetY + pathPoints[0].y) + 'px';
        }
    }

    function animateBall() {
        if (pathPoints.length < 2) return;
        if (currentSegment >= pathPoints.length - 1 && progressInSegment >= 1.0) {
            currentSegment = 0;
            progressInSegment = 0;
            if (pathPoints.length > 0) {
                ball.style.left = (offsetX + pathPoints[0].x) + 'px';
                ball.style.top = (offsetY + pathPoints[0].y) + 'px';
            }
            requestAnimationFrame(animateBall);
            return;
        }
        if (currentSegment >= pathPoints.length - 1) {
            currentSegment = 0;
            progressInSegment = 0;
        }

        const p1 = pathPoints[currentSegment];
        const p2 = pathPoints[currentSegment + 1];

        const targetX = p1.x + (p2.x - p1.x) * progressInSegment;
        const targetY = p1.y + (p2.y - p1.y) * progressInSegment;

        ball.style.left = (offsetX + targetX) + 'px';
        ball.style.top = (offsetY + targetY) + 'px';

        progressInSegment += animationSpeed;

        if (progressInSegment >= 1.0) {
            progressInSegment = 0;
            currentSegment++;
        }
        requestAnimationFrame(animateBall);
    }

    window.addEventListener('load', () => {
        calculateOffsetsAndInitialize();
        animateBall();
        fetchLatestRelease();
    });

    window.addEventListener('resize', calculateOffsetsAndInitialize);


});
