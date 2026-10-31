"use client";

import React from "react";
import { certifications, educationList } from "@/data/certifications";
import { Award, GraduationCap, ArrowUpRight, ShieldCheck } from "lucide-react";

export default function EducationAndCertifications() {
  return (
    <section className="py-20 md:py-28 bg-transparent">
      <div className="max-w-container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Certifications with Glass Finish */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="p-6 sm:p-8 rounded-3xl bg-white/25 backdrop-blur-xl border border-white/35 shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] mb-8 space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-accent font-bold px-3 py-1 rounded-full bg-white/30 backdrop-blur-md border border-white/40 w-fit">
                  <Award className="w-3.5 h-3.5" />
                  <span>Verified Credentials</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-charcoal-900">
                  Professional certifications.
                </h2>
                <p className="text-sm sm:text-base text-charcoal-800 leading-relaxed font-medium">
                  Directly verifiable industry credentials in cloud artificial intelligence and analytics.
                </p>
              </div>

              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-6 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/35 hover:bg-white/30 hover:border-white/50 transition-all shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] group"
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-slate-dark shrink-0" />
                        <h3 className="font-bold text-base sm:text-lg text-charcoal-900">
                          {cert.name}
                        </h3>
                      </div>
                      <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-md bg-white/35 backdrop-blur-md text-charcoal-900 border border-white/40 shrink-0">
                        {cert.issuer}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-white/30 mt-3 text-xs">
                      <span className="text-charcoal-700 font-mono font-semibold">
                        Validity: {cert.validity}
                      </span>

                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-bold text-charcoal-900 bg-white/35 hover:bg-white/50 px-3 py-1 rounded-full border border-white/40 transition-colors shadow-2xs group-hover:underline"
                      >
                        <span>Verify Credential</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Academic Education with Glass Finish */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="p-6 sm:p-8 rounded-3xl bg-white/25 backdrop-blur-xl border border-white/35 shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] mb-8 space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-accent font-bold px-3 py-1 rounded-full bg-white/30 backdrop-blur-md border border-white/40 w-fit">
                  <GraduationCap className="w-4 h-4" />
                  <span>Academic Background</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-charcoal-900">
                  Formal education.
                </h2>
                <p className="text-sm sm:text-base text-charcoal-800 leading-relaxed font-medium">
                  Undergraduate and diploma studies in computer science and electrical engineering.
                </p>
              </div>

              <div className="space-y-4">
                {educationList.map((edu) => (
                  <div
                    key={edu.id}
                    className="p-6 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/35 hover:bg-white/30 transition-all shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                      <h3 className="font-bold text-base sm:text-lg text-charcoal-900">
                        {edu.degree}
                      </h3>
                      <span className="text-xs font-mono text-charcoal-900 font-bold px-2.5 py-0.5 rounded-md bg-white/35 border border-white/40">
                        {edu.period}
                      </span>
                    </div>

                    <p className="text-sm text-charcoal-800 font-semibold mb-2">
                      {edu.institution}
                    </p>

                    {edu.details && (
                      <p className="text-xs text-charcoal-700 font-medium leading-relaxed">
                        {edu.details}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
