(() => {
  const TOTAL_FRAMES = 240;
  const FRAME_PATH = (i) => `./ezgif/ezgif-frame-${String(i).padStart(3, '0')}.jpg`;

  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d', { alpha: false });
  const loaderBar = document.getElementById('loader');

  // Preloaded frame cache (ImageBitmap or HTMLImageElement)
  const frames = new Array(TOTAL_FRAMES).fill(null);
  let loadedCount = 0;
  let lastRenderedIndex = -1;

  // Inertia and smoothing variables
  let targetProgress = 0;
  let currentProgress = 0;
  const LERP_FACTOR = 0.085; // Perfectly tuned damping for silky smooth motion

  // Resize canvas for sharp rendering across display pixel ratios
  function resizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = window.innerWidth;
    const h = window.innerHeight;

    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    if (lastRenderedIndex >= 0) {
      drawFrame(lastRenderedIndex);
    }
  }

  // Draw frame maintaining object-fit: cover
  function drawFrame(index) {
    const img = frames[index];
    if (!img) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.width || 1920;
    const ih = img.height || 1080;

    const canvasRatio = cw / ch;
    const imageRatio = iw / ih;

    let drawW, drawH, drawX, drawY;

    if (canvasRatio > imageRatio) {
      drawW = cw;
      drawH = cw / imageRatio;
      drawX = 0;
      drawY = (ch - drawH) / 2;
    } else {
      drawH = ch;
      drawW = ch * imageRatio;
      drawX = (cw - drawW) / 2;
      drawY = 0;
    }

    ctx.drawImage(img, Math.round(drawX), Math.round(drawY), Math.round(drawW), Math.round(drawH));
  }

  // Sync scroll position to target progress (0.0 to 1.0)
  function updateScrollProgress() {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (maxScroll > 0) {
      targetProgress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
    } else {
      targetProgress = 0;
    }
  }

  // Find nearest loaded frame if current target is still loading
  function getNearestLoadedFrameIndex(index) {
    if (frames[index]) return index;

    for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
      const prev = index - offset;
      if (prev >= 0 && frames[prev]) return prev;

      const next = index + offset;
      if (next < TOTAL_FRAMES && frames[next]) return next;
    }
    return -1;
  }

  // 60/120fps Animation Loop with Easing / Lerping
  function animationLoop() {
    const diff = targetProgress - currentProgress;

    if (Math.abs(diff) > 0.00002) {
      currentProgress += diff * LERP_FACTOR;
    } else {
      currentProgress = targetProgress;
    }

    const targetFrameIndex = Math.min(
      TOTAL_FRAMES - 1,
      Math.max(0, Math.round(currentProgress * (TOTAL_FRAMES - 1)))
    );

    const frameToDraw = getNearestLoadedFrameIndex(targetFrameIndex);

    if (frameToDraw >= 0 && frameToDraw !== lastRenderedIndex) {
      drawFrame(frameToDraw);
      lastRenderedIndex = frameToDraw;
    }

    requestAnimationFrame(animationLoop);
  }

  // Load and decode an individual frame using GPU-accelerated ImageBitmap
  async function loadFrame(index) {
    const url = FRAME_PATH(index + 1);

    return new Promise((resolve) => {
      const img = new Image();
      img.src = url;

      img.onload = async () => {
        try {
          if ('createImageBitmap' in window) {
            frames[index] = await createImageBitmap(img);
          } else {
            frames[index] = img;
          }
        } catch (e) {
          frames[index] = img;
        }

        loadedCount++;
        if (loaderBar) {
          loaderBar.style.width = `${Math.round((loadedCount / TOTAL_FRAMES) * 100)}%`;
        }

        // Render initial frame immediately as soon as ready
        if (index === 0 && lastRenderedIndex === -1) {
          drawFrame(0);
          lastRenderedIndex = 0;
        }

        resolve();
      };

      img.onerror = () => {
        loadedCount++;
        resolve();
      };
    });
  }

  // Concurrent progressive preloading
  async function preloadFrames() {
    // 1. Immediately fetch and show the first frame
    await loadFrame(0);

    // 2. Concurrently fetch all remaining frames in parallel batches
    const BATCH_SIZE = 16;
    const indices = [];
    for (let i = 1; i < TOTAL_FRAMES; i++) {
      indices.push(i);
    }

    for (let i = 0; i < indices.length; i += BATCH_SIZE) {
      const batch = indices.slice(i, i + BATCH_SIZE);
      await Promise.all(batch.map(idx => loadFrame(idx)));
    }

    // Fade out loader bar once 100% loaded
    if (loaderBar) {
      loaderBar.classList.add('loaded');
    }
  }

  // Event Listeners
  window.addEventListener('resize', resizeCanvas, { passive: true });
  window.addEventListener('scroll', updateScrollProgress, { passive: true });

  // Initialize
  resizeCanvas();
  updateScrollProgress();
  animationLoop();
  preloadFrames();
})();
