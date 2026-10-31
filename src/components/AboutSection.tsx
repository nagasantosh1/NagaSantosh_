"use client";

import React from "react";
import { Compass, Terminal, Shield, Workflow } from "lucide-react";

export default function AboutSection() {
  const principles = [
    {
      icon: Terminal,
      title: "Grounded Systems over Hype",
      description: "Prioritizing deterministic knowledge graphs and robust validation over unconstrained generative outputs.",
    },
    {
      icon: Workflow,
      title: "Production-First Architecture",
      description: "Structuring asynchronous microservices, type safety, and real-time streaming state for resilient enterprise adoption.",
    },
    {
      icon: Shield,
      title: "Data Confidentiality & Accuracy",
      description: "Ensuring zero data leakage, strict schema adherence, and respectful handling of operational infrastructure.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-transparent scroll-mt-20">
      <div className="max-w-container mx-auto px-6 md:px-12">
        {/* Heading Box with Glass Finish */}
        <div className="max-w-3xl mb-12 p-6 sm:p-8 rounded-3xl bg-white/25 backdrop-blur-xl border border-white/35 shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-accent font-bold px-3 py-1 rounded-full bg-white/30 backdrop-blur-md border border-white/40 w-fit">
            <Compass className="w-3.5 h-3.5" />
            <span>Philosophy &amp; Method</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-charcoal-900">
            A little about how I build.
          </h2>

          <p className="text-lg text-charcoal-800 leading-relaxed font-medium">
            I&apos;m an AI/ML Engineer interested in building practical intelligent systems that connect language models, retrieval, tools, and reliable backend services. I enjoy turning complex AI workflows into useful applications with clear interfaces and dependable software foundations.
          </p>
        </div>

        {/* 3 Principles with Glass Finish */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="p-6 sm:p-8 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/35 flex flex-col justify-between hover:bg-white/30 transition-all shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/35 backdrop-blur-md border border-white/45 flex items-center justify-center text-slate-dark mb-4 group-hover:scale-105 transition-transform shadow-xs">
                    <Icon className="w-6 h-6 text-charcoal-900" />
                  </div>
                  <h3 className="font-bold text-base text-charcoal-900 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs text-charcoal-700 font-medium leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
