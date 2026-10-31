"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Line */}
      <div
        className="fixed top-0 left-0 h-[2.5px] bg-slate-accent z-[60] transition-all duration-75 ease-out"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/30 backdrop-blur-xl border-b border-white/35 shadow-[0_4px_30px_rgba(0,0,0,0.06)] py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-container mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <Link
            href="/"
            className="group flex flex-col focus:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-accent rounded-sm"
          >
            <span className="font-semibold text-lg md:text-xl tracking-tight text-charcoal group-hover:text-slate-accent transition-colors">
              {siteConfig.name}
            </span>
            <span className="text-[11px] uppercase tracking-wider text-charcoal-500 font-mono -mt-0.5">
              AI/ML Engineer
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-charcoal-700">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-charcoal-700 hover:text-charcoal-950 transition-colors font-medium focus:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-accent rounded-sm px-1 py-0.5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-ivory bg-charcoal hover:bg-slate-accent transition-colors rounded-full shadow-sm focus:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-accent"
            >
              <span>Let&apos;s talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-charcoal hover:text-slate-accent focus:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-accent"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-white/35 bg-white/40 backdrop-blur-2xl px-6 py-6 transition-all shadow-lg">
            <nav className="flex flex-col space-y-4 text-base font-medium text-charcoal">
              {siteConfig.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 text-charcoal-800 hover:text-slate-accent transition-colors font-semibold"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-white/30">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center w-full px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-ivory bg-charcoal rounded-full hover:bg-slate-accent transition-colors"
                >
                  <span>Let&apos;s talk</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
