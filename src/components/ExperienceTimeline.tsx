"use client";

import React from "react";
import { experiences } from "@/data/experience";
import { Building2, Calendar, CheckCircle } from "lucide-react";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-transparent scroll-mt-20">
      <div className="max-w-container mx-auto px-6 md:px-12">
        {/* Section Heading with Glass Finish */}
        <div className="max-w-3xl mb-16 p-6 sm:p-8 rounded-3xl bg-white/25 backdrop-blur-xl border border-white/35 shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-accent block font-bold px-3 py-1 rounded-full bg-white/30 backdrop-blur-md border border-white/40 w-fit">
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-charcoal-900">
            Professional experience.
          </h2>
          <p className="text-base sm:text-lg text-charcoal-800 leading-relaxed font-medium">
            Engineering history across enterprise software development, airline technology integrations, and machine learning.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-white/40 ml-4 sm:ml-8 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 sm:pl-12 group">
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white border-2 border-slate-accent group-hover:scale-125 transition-transform shadow-sm" />

              <div className="rounded-3xl bg-white/20 backdrop-blur-xl border border-white/35 p-6 md:p-8 hover:bg-white/30 hover:border-white/50 transition-all shadow-[0_8px_32px_0_rgba(0,0,0,0.12)]">
                {/* Header Info */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-charcoal-900">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-charcoal-900 font-bold px-3 py-1 rounded-full bg-white/35 backdrop-blur-md border border-white/45 shadow-2xs">
                    <Calendar className="w-3.5 h-3.5 text-slate-dark" />
                    <span>{exp.dates}</span>
                  </div>
                </div>

                {/* Company & Client Context */}
                <div className="flex flex-wrap items-center gap-3 text-sm text-charcoal-800 mb-6 font-semibold">
                  <div className="flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-charcoal-600" />
                    <span>{exp.company}</span>
                  </div>
                  <span>·</span>
                  <span className="text-charcoal-600 text-xs uppercase tracking-wider font-mono">
                    {exp.employmentType}
                  </span>
                  {exp.clientContext && (
                    <>
                      <span>·</span>
                      <span className="px-2.5 py-0.5 rounded-md bg-white/35 backdrop-blur-md text-charcoal-900 text-xs font-mono font-bold border border-white/40">
                        {exp.clientContext}
                      </span>
                    </>
                  )}
                </div>

                {/* Bulleted Responsibilities */}
                <ul className="space-y-2.5 mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-charcoal-800 font-medium leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-slate-dark shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/30">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-white/35 backdrop-blur-md text-charcoal-900 font-mono font-semibold text-[11px] border border-white/40 shadow-2xs"
                    >
                      {tech}
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
