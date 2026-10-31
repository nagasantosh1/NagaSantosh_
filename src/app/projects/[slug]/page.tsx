import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  Calendar,
  Building2,
  Workflow,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  ChevronRight
} from "lucide-react";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-container mx-auto px-6 md:px-12">
          
          {/* Back Navigation */}
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-accent hover:text-charcoal transition-colors mb-10 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to selected work</span>
          </Link>

          {/* Project Title Header */}
          <div className="max-w-3xl mb-12">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono mb-3">
              <span className="text-slate-accent font-semibold tracking-wider uppercase">
                {project.category}
              </span>
              <span>·</span>
              <span className="text-charcoal-500">{project.dates}</span>
              {project.status && (
                <>
                  <span>·</span>
                  <span className="px-2 py-0.5 rounded-full bg-surface text-charcoal-700 text-[11px] font-medium border border-border">
                    {project.status}
                  </span>
                </>
              )}
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-charcoal mb-6 leading-tight">
              {project.title}
            </h1>

            {project.clientContext && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface text-charcoal-800 text-xs font-mono border border-border">
                <Building2 className="w-3.5 h-3.5 text-slate-accent" />
                <span>{project.clientContext}</span>
              </div>
            )}
          </div>

          {/* Project Overview & Problem Statement */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 border-t border-border mb-16">
            <div className="lg:col-span-8 space-y-12">
              {/* Problem Statement */}
              <div>
                <h2 className="text-xl font-bold text-charcoal mb-4">
                  Problem Statement
                </h2>
                <p className="text-base text-charcoal-600 leading-relaxed bg-surface/60 p-6 rounded-card border border-border">
                  {project.problemStatement}
                </p>
              </div>

              {/* Architecture & Approach */}
              <div>
                <h2 className="text-xl font-bold text-charcoal mb-4">
                  Architecture &amp; Engineering Approach
                </h2>
                <p className="text-base text-charcoal-600 leading-relaxed mb-6">
                  {project.architectureApproach}
                </p>

                {/* Workflow Sequence */}
                {project.workflowSteps && project.workflowSteps.length > 0 && (
                  <div className="p-6 rounded-card bg-surface border border-border">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-charcoal-500 mb-4">
                      <Workflow className="w-4 h-4 text-slate-accent" />
                      <span>System Execution Flow</span>
                    </div>

                    <div className="space-y-3">
                      {project.workflowSteps.map((step, idx) => (
                        <div
                          key={step}
                          className="flex items-center gap-3 p-3 rounded-lg bg-ivory border border-border text-sm text-charcoal-800"
                        >
                          <span className="w-6 h-6 rounded-full bg-slate-mist text-charcoal-900 font-mono text-xs flex items-center justify-center shrink-0 font-bold">
                            {idx + 1}
                          </span>
                          <span className="font-medium">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Key Contributions */}
              <div>
                <h2 className="text-xl font-bold text-charcoal mb-4">
                  My Engineering Contributions
                </h2>
                <ul className="space-y-3">
                  {project.contributions.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-charcoal-600 leading-relaxed bg-ivory p-4 rounded-xl border border-border"
                    >
                      <CheckCircle2 className="w-4 h-4 text-slate-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges and Decisions */}
              {project.challengesAndDecisions && project.challengesAndDecisions.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-charcoal mb-4">
                    Challenges &amp; Technical Decisions
                  </h2>
                  <div className="space-y-3">
                    {project.challengesAndDecisions.map((decision, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-surface/70 border border-border text-sm text-charcoal-600 leading-relaxed"
                      >
                        {decision}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar: Tech Stack & Metadata */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 rounded-card bg-surface border border-border sticky top-28">
                <h3 className="text-sm uppercase font-mono tracking-wider text-charcoal-500 mb-4 font-semibold">
                  Technologies Applied
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-sm bg-ivory text-charcoal-800 font-mono text-xs border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-border/80 space-y-3 text-xs text-charcoal-500 font-mono">
                  <div>
                    <span className="block text-charcoal-400">Timeline</span>
                    <span className="text-charcoal-700 font-medium">{project.dates}</span>
                  </div>
                  <div>
                    <span className="block text-charcoal-400">Category</span>
                    <span className="text-charcoal-700 font-medium">{project.category}</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-full bg-charcoal text-ivory text-xs font-medium uppercase tracking-wider hover:bg-slate-accent transition-colors"
                  >
                    <span>Discuss this project</span>
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
