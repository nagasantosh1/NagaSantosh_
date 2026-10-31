"use client";

import React from "react";
import { Network, Cpu, Database, Blocks } from "lucide-react";

export default function ProfessionalSummary() {
  const pillars = [
    {
      icon: Network,
      title: "Agentic AI & Multi-Agent Systems",
      desc: "Architecting autonomous agents and LangGraph workflows that coordinate specialized tasks, validations, and real-time streaming updates.",
    },
    {
      icon: Database,
      title: "Knowledge Graphs & Grounded RAG",
      desc: "Structuring domain ontologies in Neo4j to enforce strict business rules, contextual reasoning, and zero-hallucination data extraction.",
    },
    {
      icon: Cpu,
      title: "Asynchronous Backend Engineering",
      desc: "Building high-performance Python microservices with FastAPI, WebSockets, and optimized data models for high-concurrency environments.",
    },
    {
      icon: Blocks,
      title: "Enterprise MCP & Tool Integration",
      desc: "Integrating Model Context Protocol (MCP) to synchronize state and securely bridge modern LLM orchestration with legacy enterprise APIs.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-transparent">
      <div className="max-w-container mx-auto px-6 md:px-12">
        {/* Intro Glass Header Box */}
        <div className="max-w-3xl mb-16 p-6 sm:p-8 rounded-3xl bg-white/25 backdrop-blur-xl border border-white/35 shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-accent block font-bold px-3 py-1 rounded-full bg-white/30 backdrop-blur-md border border-white/40 w-fit">
            Engineering Perspective
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-charcoal-900 leading-tight">
            The intersection of AI orchestration and dependable software.
          </h2>
          <p className="text-base sm:text-lg text-charcoal-800 leading-relaxed font-medium">
            I&apos;m an AI/ML Engineer specializing in Agentic AI and Multi-Agent Systems, with experience developing scalable Python-based services and AI-driven workflows for enterprise applications. My work spans Generative AI, Retrieval-Augmented Generation, knowledge graphs using Neo4j, MCP-based integrations, and asynchronous backend services with FastAPI. I focus on connecting modern AI orchestration with enterprise systems to build practical, reliable applications.
          </p>
        </div>

        {/* 4 Architectural Pillars with Glass Finish */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-6 md:p-8 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/35 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] hover:bg-white/30 hover:border-white/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center text-slate-dark mb-4 group-hover:scale-105 transition-transform shadow-xs">
                  <Icon className="w-6 h-6 text-charcoal-900" />
                </div>
                <h3 className="text-lg font-bold text-charcoal-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-charcoal-700 leading-relaxed font-medium">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
