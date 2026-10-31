"use client";

import React, { useState } from "react";
import { skillCategories } from "@/data/skills";
import { Wrench, Check } from "lucide-react";

export default function TechnicalExpertise() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...skillCategories.map((c) => c.category)];

  const displayedCategories =
    activeCategory === "All"
      ? skillCategories
      : skillCategories.filter((c) => c.category === activeCategory);

  return (
    <section id="expertise" className="py-20 md:py-28 bg-transparent scroll-mt-20">
      <div className="max-w-container mx-auto px-6 md:px-12">
        {/* Section Heading with Glass Finish */}
        <div className="max-w-3xl mb-12 p-6 sm:p-8 rounded-3xl bg-white/25 backdrop-blur-xl border border-white/35 shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-accent font-bold px-3 py-1 rounded-full bg-white/30 backdrop-blur-md border border-white/40 w-fit">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-charcoal-900">
            The systems I work with.
          </h2>
          <p className="text-base sm:text-lg text-charcoal-800 leading-relaxed font-medium">
            A comprehensive overview of tools, frameworks, and technologies applied across production environments and research workflows.
          </p>
        </div>

        {/* Category Filter Pills with Glass Finish */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all shadow-xs ${
                activeCategory === cat
                  ? "bg-charcoal text-ivory shadow-md"
                  : "bg-white/35 backdrop-blur-md text-charcoal-800 hover:bg-white/50 border border-white/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Category Cards with Glass Finish */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((category) => (
            <div
              key={category.category}
              className="p-6 sm:p-8 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/35 flex flex-col justify-between hover:bg-white/30 hover:border-white/50 transition-all shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] group"
            >
              <div>
                <h3 className="text-lg font-bold text-charcoal-900 mb-2">
                  {category.category}
                </h3>
                <p className="text-xs text-charcoal-700 font-medium mb-6 leading-relaxed">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/35 backdrop-blur-md text-charcoal-900 text-xs font-mono font-medium border border-white/40 shadow-2xs"
                    >
                      <Check className="w-3 h-3 text-slate-dark shrink-0 font-bold" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
