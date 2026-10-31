"use client";

import React, { useEffect, useRef, useState } from "react";
import { Play, Pause, RotateCcw, Sparkles } from "lucide-react";

interface PortraitVideoProps {
  className?: string;
}

export default function PortraitVideo({ className = "" }: PortraitVideoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [currentFrameNum, setCurrentFrameNum] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [mode, setMode] = useState<"auto" | "scroll">("auto");
  const [loadProgress, setLoadProgress] = useState(0);

  useEffect(() => {
    const TOTAL_FRAMES = 240;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    // Cache for preloaded frames
    const frames: (ImageBitmap | HTMLImageElement)[] = new Array(TOTAL_FRAMES);
    let loadedCount = 0;
    let isDisposed = false;

    let autoFrameIndex = 0;
    let targetFrameIndex = 0;
    let currentRenderedIndex = -1;
    let lastTime = 0;
    const fps = 24;
    const frameInterval = 1000 / fps;

    // Scroll tracking variables
    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout;

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
      currentRenderedIndex = idx;
      setCurrentFrameNum(idx + 1);
    }

    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

    // 1. Load initial frame immediately
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
      loadedCount++;
      setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
    };

    // 2. Preload remaining frames concurrently
    const loadAllFrames = async () => {
      const BATCH_SIZE = 16;
      for (let i = 1; i < TOTAL_FRAMES; i += BATCH_SIZE) {
        if (isDisposed) break;
        const batch = [];
        for (let j = i; j < Math.min(i + BATCH_SIZE, TOTAL_FRAMES); j++) {
          batch.push(
            new Promise<void>((resolve) => {
              const img = new Image();
              const numStr = String(j + 1).padStart(3, "0");
              img.src = `${basePath}/ezgif/ezgif-frame-${numStr}.jpg`;
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
                  setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
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

    loadAllFrames();

    // 3. Scroll listener: when visitor scrolls, calculate frame index from scroll position
    const handleScroll = () => {
      isScrolling = true;
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 250);

      const maxScroll = Math.max(1, window.innerHeight * 2.2);
      const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
      targetFrameIndex = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(progress * (TOTAL_FRAMES - 1))));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // 4. Main RAF Animation Loop
    let animId: number;
    function loop(time: number) {
      if (isDisposed) return;

      if (!lastTime) lastTime = time;
      const delta = time - lastTime;

      if (isScrolling) {
        // Scrubbing mode: smoothly transition to target frame
        if (targetFrameIndex !== currentRenderedIndex && frames[targetFrameIndex]) {
          drawFrame(targetFrameIndex);
          autoFrameIndex = targetFrameIndex;
        }
      } else if (isPlaying) {
        // Auto-play mode when not actively scrolling
        if (delta >= frameInterval) {
          lastTime = time - (delta % frameInterval);
          autoFrameIndex = (autoFrameIndex + 1) % TOTAL_FRAMES;
          if (frames[autoFrameIndex]) {
            drawFrame(autoFrameIndex);
          }
        }
      }

      animId = requestAnimationFrame(loop);
    }

    animId = requestAnimationFrame(loop);

    return () => {
      isDisposed = true;
      cancelAnimationFrame(animId);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [isPlaying]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-portrait border-2 border-border shadow-lg bg-charcoal-900 group ${className}`}
      style={{ aspectRatio: "16 / 10" }}
    >
      {/* Primary Hardware-Accelerated Animation Canvas */}
      <canvas
        ref={canvasRef}
        width={1280}
        height={800}
        className="w-full h-full object-cover select-none cursor-pointer"
        onClick={() => setIsPlaying(!isPlaying)}
        title="Click to play or pause portrait animation"
      />

      {/* Subtle bottom gradient to blend naturally */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-charcoal-900/60 to-transparent pointer-events-none" />

      {/* Top Floating Status Pill */}
      <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1 rounded-full bg-ivory/95 backdrop-blur-md text-xs font-mono text-charcoal border border-border shadow-xs">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="font-semibold tracking-tight text-[11px]">
          {isPlaying ? "ANIMATION ACTIVE" : "PAUSED"}
        </span>
        <span className="text-charcoal-400">·</span>
        <span className="text-[11px] text-slate-accent font-bold">
          Frame {String(currentFrameNum).padStart(3, "0")} / 240
        </span>
      </div>

      {/* Top Right Controls */}
      <div className="absolute top-3 right-3 flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-charcoal/80 backdrop-blur-md text-ivory text-[11px] font-mono hover:bg-charcoal transition-colors border border-charcoal-600"
          aria-label={isPlaying ? "Pause animation" : "Play animation"}
        >
          {isPlaying ? (
            <>
              <Pause className="w-3 h-3 text-amber-300" />
              <span>Pause</span>
            </>
          ) : (
            <>
              <Play className="w-3 h-3 text-emerald-400" />
              <span>Play</span>
            </>
          )}
        </button>
      </div>

      {/* Bottom Hint */}
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-ivory/90 pointer-events-none">
        <span className="px-2.5 py-0.5 rounded-full bg-charcoal/70 backdrop-blur-xs border border-charcoal-600/60">
          Scroll page or click to interact
        </span>
        {loadProgress < 100 && (
          <span className="text-ivory/70 text-[10px]">
            Preloading {loadProgress}%
          </span>
        )}
      </div>

      {/* Loading Progress Line at Bottom of Portrait Frame */}
      {loadProgress < 100 && (
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transition-all duration-150"
          style={{ width: `${loadProgress}%` }}
        />
      )}
    </div>
  );
}
