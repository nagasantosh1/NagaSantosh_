"use client";

import React from "react";
import Link from "next/link";
import { Project } from "@/data/projects";
import { ArrowUpRight, CheckCircle2, ChevronRight, Workflow } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isFlagship = index < 2;

  return (
    <article
      className={`rounded-3xl bg-white/20 backdrop-blur-xl border border-white/35 p-6 md:p-8 transition-all hover:bg-white/30 hover:border-white/55 shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] flex flex-col justify-between ${
        isFlagship ? "lg:col-span-2" : ""
      }`}
    >
      <div>
        {/* Header Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="text-slate-dark font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-white/30 backdrop-blur-md border border-white/40">
              {String(index + 1).padStart(2, "0")} · {project.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {project.clientContext && (
              <span className="px-2.5 py-0.5 rounded-full bg-white/35 text-charcoal-900 font-sans text-[11px] font-semibold border border-white/40 shadow-xs">
                {project.clientContext}
              </span>
            )}
            <span className="text-charcoal-700 font-bold px-2 py-0.5 rounded-md bg-white/20">{project.dates}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-charcoal-900 mb-3 group-hover:text-slate-accent transition-colors">
          {project.title}
        </h3>

        {/* Summary */}
        <p className="text-sm sm:text-base text-charcoal-800 leading-relaxed mb-6 font-medium">
          {project.summary}
        </p>

        {/* Workflow / Architecture Flow Diagram */}
        {project.workflowSteps && project.workflowSteps.length > 0 && (
          <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-white/25 backdrop-blur-md border border-white/35 shadow-xs">
            <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-charcoal-800 font-bold mb-3">
              <Workflow className="w-3.5 h-3.5 text-slate-dark" />
              <span>Conceptual Service Flow</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs">
              {project.workflowSteps.map((step, i) => (
                <React.Fragment key={step}>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-white/45 text-charcoal-900 font-medium border border-white/50 shadow-2xs">
                    {step}
                  </span>
                  {i < project.workflowSteps.length - 1 && (
                    <ChevronRight className="w-3.5 h-3.5 text-charcoal-500 shrink-0 font-bold" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {/* Key Contributions Preview */}
        <div className="space-y-2 mb-6">
          <span className="text-xs uppercase tracking-wider font-mono text-charcoal-800 font-bold block">
            Key Contributions
          </span>
          <ul className="space-y-1.5 text-xs sm:text-sm text-charcoal-800 font-medium">
            {project.contributions.slice(0, 3).map((contrib) => (
              <li key={contrib} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-slate-dark shrink-0 mt-0.5" />
                <span>{contrib}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer: Tech Tags and Case Study Action */}
      <div className="pt-6 border-t border-white/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Technologies */}
        <div className="flex flex-wrap items-center gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md bg-white/35 backdrop-blur-md text-charcoal-900 font-mono font-semibold text-[11px] border border-white/40 shadow-2xs"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Case Study Link */}
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-charcoal-900 bg-white/40 hover:bg-white/60 px-4 py-2 rounded-full border border-white/50 transition-colors self-end sm:self-auto shrink-0 shadow-xs group/link"
        >
          <span>View Case Study</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
