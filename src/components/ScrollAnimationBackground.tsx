"use client";

import React, { useEffect, useRef, useState } from "react";

export default function ScrollAnimationBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loadPercent, setLoadPercent] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const TOTAL_FRAMES = 240;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const frames: (ImageBitmap | HTMLImageElement)[] = new Array(TOTAL_FRAMES);
    let loadedCount = 0;
    let isDisposed = false;

    let targetProgress = 0;
    let currentProgress = 0;
    let lastRenderedFrame = -1;
    const LERP_FACTOR = 0.08; // Smooth inertia damping

    function resizeCanvas() {
      if (!canvas || !ctx) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";

      if (lastRenderedFrame >= 0) {
        drawFrame(lastRenderedFrame);
      }
    }

    function drawFrame(idx: number) {
      if (idx < 0 || idx >= TOTAL_FRAMES) return;
      const img = frames[idx];
      if (!img || !canvas || !ctx) return;

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
      lastRenderedFrame = idx;
    }

    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

    // 1. Load initial frame instantly
    const img0 = new Image();
    img0.src = `${basePath}/ezgif/ezgif-frame-001.jpg`;
    img0.onload = async () => {
      if (isDisposed) return;
      try {
        if ("createImageBitmap" in window) {
          frames[0] = await createImageBitmap(img0);
        } else {
          frames[0] = img0;
        }
      } catch {
        frames[0] = img0;
      }
      drawFrame(0);
      setIsReady(true);
      loadedCount++;
      setLoadPercent(Math.round((loadedCount / TOTAL_FRAMES) * 100));
    };

    // 2. Preload remaining frames concurrently
    const loadRemainingFrames = async () => {
      const BATCH_SIZE = 16;
      for (let i = 1; i < TOTAL_FRAMES; i += BATCH_SIZE) {
        if (isDisposed) break;
        const batch = [];
        for (let j = i; j < Math.min(i + BATCH_SIZE, TOTAL_FRAMES); j++) {
          batch.push(
            new Promise<void>((resolve) => {
              const img = new Image();
              const pad = String(j + 1).padStart(3, "0");
              img.src = `${basePath}/ezgif/ezgif-frame-${pad}.jpg`;
              img.onload = async () => {
                if (!isDisposed) {
                  try {
                    if ("createImageBitmap" in window) {
                      frames[j] = await createImageBitmap(img);
                    } else {
                      frames[j] = img;
                    }
                  } catch {
                    frames[j] = img;
                  }
                  loadedCount++;
                  setLoadPercent(Math.round((loadedCount / TOTAL_FRAMES) * 100));
                }
                resolve();
              };
              img.onerror = () => {
                loadedCount++;
                resolve();
              };
            })
          );
        }
        await Promise.all(batch);
      }
    };

    loadRemainingFrames();

    // 3. Scroll tracking
    const updateScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        targetProgress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
      } else {
        targetProgress = 0;
      }
    };

    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", resizeCanvas, { passive: true });

    resizeCanvas();
    updateScroll();

    // 4. RAF Loop with Lerp Easing
    let animId: number;
    function renderLoop() {
      if (isDisposed) return;

      const diff = targetProgress - currentProgress;
      if (Math.abs(diff) > 0.00003) {
        currentProgress += diff * LERP_FACTOR;
      } else {
        currentProgress = targetProgress;
      }

      const targetIdx = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.round(currentProgress * (TOTAL_FRAMES - 1)))
      );

      let frameToDraw = targetIdx;
      if (!frames[frameToDraw]) {
        for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
          if (targetIdx - offset >= 0 && frames[targetIdx - offset]) {
            frameToDraw = targetIdx - offset;
            break;
          }
          if (targetIdx + offset < TOTAL_FRAMES && frames[targetIdx + offset]) {
            frameToDraw = targetIdx + offset;
            break;
          }
        }
      }

      if (frames[frameToDraw] && frameToDraw !== lastRenderedFrame) {
        drawFrame(frameToDraw);
      }

      animId = requestAnimationFrame(renderLoop);
    }

    animId = requestAnimationFrame(renderLoop);

    return () => {
      isDisposed = true;
      cancelAnimationFrame(animId);
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <>
      {/* Fixed Fullscreen Background Canvas */}
      <div className="fixed inset-0 w-screen h-screen z-0 pointer-events-none overflow-hidden bg-charcoal-900">
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover transition-opacity duration-700"
          style={{
            opacity: isReady ? 1 : 0,
            filter: "brightness(0.85) contrast(1.06)"
          }}
        />

        {/* Ultra-light Dark Scrim to preserve high transparency for glass containers */}
        <div className="absolute inset-0 bg-charcoal-900/20 pointer-events-none" />

        {/* Soft Vignettes */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-charcoal-900/40 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-charcoal-900/40 to-transparent pointer-events-none" />
      </div>

      {/* Minimal Top Loading Line while preloading frames */}
      {loadPercent < 100 && (
        <div
          className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-slate-accent via-purple-500 to-pink-500 z-50 transition-all duration-150 pointer-events-none"
          style={{ width: `${loadPercent}%` }}
        />
      )}
    </>
  );
}
