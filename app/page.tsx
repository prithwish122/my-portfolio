"use client"

import { EnhancedHeroSection } from "@/components/enhanced-hero-section"
import { EnhancedAboutSection } from "@/components/enhanced-about-section"
import { RevolutionarySkillsSection } from "@/components/revolutionary-skills-section"
import { EnhancedProjectsList } from "@/components/enhanced-projects-list"
import { EnhancedExperienceSection } from "@/components/enhanced-experience-section"
import { ContactSection } from "@/components/contact-section"
import { Navbar } from "@/components/navbar"
import { GlobalParticlesBackground } from "@/components/global-particles-background"
import { AnimatedBackground } from "@/components/animated-background"

export default function Home() {
  return (
    <div className="main-content min-h-screen relative">
      <AnimatedBackground />
      <GlobalParticlesBackground />
      <Navbar />
      <main>
        <EnhancedHeroSection />
        <EnhancedAboutSection />
        <RevolutionarySkillsSection />
        <EnhancedProjectsList />
        <EnhancedExperienceSection />
        <ContactSection />
      </main>
    </div>
  )
}
