import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProfessionalSummary from "@/components/ProfessionalSummary";
import ProjectGrid from "@/components/ProjectGrid";
import TechnicalExpertise from "@/components/TechnicalExpertise";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import EducationAndCertifications from "@/components/EducationAndCertifications";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollAnimationBackground from "@/components/ScrollAnimationBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-transparent selection:bg-slate-mist selection:text-charcoal-900">
      {/* Fullscreen Fixed Scroll Animation Background */}
      <ScrollAnimationBackground />

      {/* Foreground Content Layer */}
      <div className="relative z-10 flex flex-col">
        <Navbar />
        <Hero />
        <ProfessionalSummary />
        <ProjectGrid />
        <TechnicalExpertise />
        <ExperienceTimeline />
        <EducationAndCertifications />
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
