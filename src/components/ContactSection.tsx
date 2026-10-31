"use client";

import React, { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { Mail, Linkedin, Github, FileText, ArrowUpRight, Copy, Check } from "lucide-react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-transparent scroll-mt-20">
      <div className="max-w-container mx-auto px-6 md:px-12">
        {/* Contact Header Glass Container */}
        <div className="max-w-3xl mb-16 p-6 sm:p-8 rounded-3xl bg-white/25 backdrop-blur-xl border border-white/35 shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-accent block font-bold px-3 py-1 rounded-full bg-white/30 backdrop-blur-md border border-white/40 w-fit">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-charcoal-900 leading-tight">
            Have an interesting AI problem to solve?
          </h2>
          <p className="text-base sm:text-lg text-charcoal-800 leading-relaxed font-medium">
            I&apos;m open to conversations about AI engineering, Generative AI applications, agentic systems, and opportunities to build useful products.
          </p>
        </div>

        {/* Contact Methods Glass Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Email Direct Action */}
          <div className="p-6 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/35 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] flex flex-col justify-between hover:bg-white/30 transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/35 backdrop-blur-md border border-white/40 flex items-center justify-center text-charcoal-900 mb-4 shadow-xs">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-charcoal-700 font-bold block mb-1">
                Direct Email
              </span>
              <p className="text-sm font-semibold text-charcoal-900 break-all mb-4">
                {siteConfig.email}
              </p>
            </div>

            <div className="flex items-center gap-2 pt-3 border-t border-white/30">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-1 text-xs font-bold text-slate-dark hover:text-charcoal-900 transition-colors"
              >
                <span>Compose</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <span className="text-charcoal-500">·</span>
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-1 text-xs font-medium text-charcoal-700 hover:text-charcoal-900 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600 font-bold" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>
          </div>

          {/* LinkedIn Profile */}
          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/35 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] hover:bg-white/30 hover:border-white/50 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/35 backdrop-blur-md border border-white/40 flex items-center justify-center text-charcoal-900 mb-4 group-hover:scale-105 transition-transform shadow-xs">
                <Linkedin className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-charcoal-700 font-bold block mb-1">
                Professional Network
              </span>
              <p className="text-sm font-bold text-charcoal-900 mb-4">
                LinkedIn Profile
              </p>
            </div>

            <div className="inline-flex items-center gap-1 text-xs font-bold text-slate-dark group-hover:text-charcoal-900 transition-colors pt-3 border-t border-white/30">
              <span>View Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* GitHub Profile */}
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/35 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] hover:bg-white/30 hover:border-white/50 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/35 backdrop-blur-md border border-white/40 flex items-center justify-center text-charcoal-900 mb-4 group-hover:scale-105 transition-transform shadow-xs">
                <Github className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-charcoal-700 font-bold block mb-1">
                Code &amp; Repositories
              </span>
              <p className="text-sm font-bold text-charcoal-900 mb-4">
                GitHub @nagasantosh1
              </p>
            </div>

            <div className="inline-flex items-center gap-1 text-xs font-bold text-slate-dark group-hover:text-charcoal-900 transition-colors pt-3 border-t border-white/30">
              <span>Explore Repos</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* Résumé Document */}
          <div className="p-6 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/35 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] flex flex-col justify-between hover:bg-white/30 transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/35 backdrop-blur-md border border-white/40 flex items-center justify-center text-charcoal-900 mb-4 shadow-xs">
                <FileText className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-charcoal-700 font-bold block mb-1">
                Curriculum Vitae
              </span>
              <p className="text-sm font-bold text-charcoal-900 mb-1">
                Official Résumé
              </p>
              <p className="text-xs text-charcoal-700 font-medium">
                PDF available upon request or via direct contact.
              </p>
            </div>

            <div className="pt-3 border-t border-white/30">
              <a
                href={`mailto:${siteConfig.email}?subject=Requesting%20Resume%20-%20Naga%20Santosh%20Mohan%20Veldanda`}
                className="inline-flex items-center gap-1 text-xs font-bold text-slate-dark hover:text-charcoal-900 transition-colors"
              >
                <span>Request Document</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Closing Identity Glass Line */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex flex-col sm:flex-row items-center justify-between text-xs text-charcoal-800 font-mono font-medium gap-3">
          <span>{siteConfig.fullName} · {siteConfig.title}</span>
          <span>Hyderabad, Telangana, India</span>
        </div>
      </div>
    </section>
  );
}
