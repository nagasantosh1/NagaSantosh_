"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 bg-white/15 backdrop-blur-xl border-t border-white/30 text-charcoal-700 text-xs font-mono">
      <div className="max-w-container mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          © {new Date().getFullYear()} {siteConfig.name}. Designed &amp; engineered with precision.
        </div>

        <div className="flex items-center space-x-6">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-charcoal-700 hover:text-charcoal-950 font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-charcoal-700 hover:text-charcoal-950 font-bold transition-colors ml-4 pl-4 border-l border-white/40 cursor-pointer"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
