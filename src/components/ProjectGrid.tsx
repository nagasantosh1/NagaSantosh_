"use client";

import React from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { GraduationCap, Briefcase } from "lucide-react";

export default function ProjectGrid() {
  const industryProjects = projects.filter((p) => !p.isAcademic);
  const academicProjects = projects.filter((p) => p.isAcademic);

  return (
    <section id="work" className="py-20 md:py-28 bg-transparent scroll-mt-20">
      <div className="max-w-container mx-auto px-6 md:px-12">
        {/* Section Heading with Glass Finish */}
        <div className="max-w-3xl mb-16 p-6 sm:p-8 rounded-3xl bg-white/25 backdrop-blur-xl border border-white/35 shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-accent font-bold px-3 py-1 rounded-full bg-white/30 backdrop-blur-md border border-white/40 w-fit">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-charcoal-900">
            Selected work.
          </h2>
          <p className="text-base sm:text-lg text-charcoal-800 leading-relaxed font-medium">
            AI engineering, intelligent automation, backend services, and data-driven applications.
          </p>
        </div>

        {/* Industry & Flagship Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {industryProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Academic ML & Computer Vision Projects */}
        <div className="pt-12 border-t border-white/30">
          <div className="max-w-3xl mb-10 p-5 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/35 shadow-sm space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-accent font-bold px-3 py-1 rounded-full bg-white/30 backdrop-blur-md border border-white/40 w-fit">
              <GraduationCap className="w-4 h-4" />
              <span>Academic Computer Vision &amp; Predictive Analytics</span>
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-charcoal-900">
              Foundational Machine Learning Studies
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {academicProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={industryProjects.length + index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
