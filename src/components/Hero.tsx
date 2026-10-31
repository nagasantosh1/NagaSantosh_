"use client";

import React from "react";
import { ArrowDownRight, Mail, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden bg-transparent">
      <div className="max-w-container mx-auto px-6 md:px-12">
        <div className="max-w-3xl flex flex-col justify-center space-y-6">
          
          {/* Main Hero Card Container with Frosted Glass Finish */}
          <div className="bg-white/25 backdrop-blur-xl p-6 sm:p-10 rounded-3xl border border-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] space-y-6">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-slate-accent font-semibold px-3 py-1 rounded-full bg-white/30 backdrop-blur-md border border-white/40 w-fit shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-slate-accent" />
              <span>Agentic AI · Multi-Agent Systems · Generative AI</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-charcoal-900 leading-[1.1] text-balance">
              Building intelligent systems for the real world.
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-charcoal-800 leading-relaxed max-w-2xl font-medium">
              I&apos;m an AI/ML Engineer specializing in Agentic AI, Multi-Agent Systems, and Generative AI. I build Python-based services and intelligent applications that connect language models, knowledge, enterprise APIs, and practical business workflows.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-charcoal text-ivory text-sm font-medium hover:bg-slate-accent transition-colors shadow-md group"
              >
                <span>Explore my work</span>
                <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/50 bg-white/40 backdrop-blur-md hover:bg-white/60 text-charcoal font-semibold text-sm transition-colors shadow-xs"
              >
                <Mail className="w-4 h-4 text-charcoal-700" />
                <span>Get in touch</span>
              </a>
            </div>

            {/* Technology line */}
            <div className="pt-6 border-t border-white/30">
              <span className="text-[11px] uppercase tracking-wider font-mono text-charcoal-700 font-bold block mb-2">
                Core Stack &amp; Focus
              </span>
              <p className="font-mono text-xs text-charcoal-900 font-semibold tracking-wide bg-white/35 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/40 w-fit shadow-xs">
                PYTHON · RAG · AI AGENTS · FASTAPI · NEO4J · AZURE
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
