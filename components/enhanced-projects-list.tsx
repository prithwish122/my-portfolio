"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ExternalLink, Github, Star, Award, ChevronRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export function EnhancedProjectsList() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [selectedProject, setSelectedProject] = useState(0)

  const projects = [
    {
      title: "VeriBee",
      description:
        "All-in-one research platform solving data fraud with AI-verified submissions and tokenized rewards. Founded and incubated by OpenCampus OC-I.",
      tech: ["Solidity", "Next.js", "AI Integration", "TypeScript"],
      role: "Founder & Lead Developer",
      features: [
        "AI-powered verification system",
        "Authentic user verification",
        "Fair tokenized rewards",
        "OpenCampus OC-I Incubated",
      ],
      status: "Founder • Incubated by OpenCampus OC-I • 1st in DeSci track",
      github: "https://github.com/educhain0796/VeriBee",
      demo: "https://veribee.vercel.app/",
      gradient: "from-blue-500 to-cyan-500",
      icon: "🔬",
      award: "Founder • OC-I Incubated",
      category: "Startup",
    },
    {
      title: "Questflow",
      description: "Bounty management dApp enabling posting & completing bounties with blockchain-verified rewards",
      tech: ["Solidity", "Hardhat", "Next.js", "Tailwind"],
      role: "Full-stack Blockchain Developer",
      features: ["Smart contract automation", "Token-based rewards", "Secure task management"],
      status: "Deployed on AIA Mainnet",
      github: "https://github.com/aia0796/QuestFlow",
      demo: "https://quest-flow.vercel.app/",
      gradient: "from-purple-500 to-pink-500",
      icon: "🚀",
      award: "AIA Chain Winner",
      category: "DeFi",
    },
    {
      title: "Radio",
      description: "Social audio platform promoting voice-first content to eliminate appearance-based bias",
      tech: ["Solana", "React", "Web Audio API", "Rust"],
      role: "Frontend & Blockchain Developer",
      features: ["Voice-first social interaction", "Decentralized audio streaming", "Anti-bias technology"],
      status: "Best Build on Solana - Hack4Bengal 3.0",
      github: "",
      demo: "#",
      gradient: "from-green-500 to-teal-500",
      icon: "🎙️",
      award: "Solana Track Winner",
      category: "Social",
    },
    {
      title: "Lunar Liao",
      description: "Decentralized astrology platform with anonymous Kundli analysis and daily token rewards",
      tech: ["Solidity", "Next.js", "Smart Contracts", "NFTs"],
      role: "Full-stack Developer",
      features: ["Anonymous consultations", "Daily token rewards", "NFT zodiac badges"],
      status: "Winner - AIA Chain & EDU Chain Hackathons",
      github: "https://github.com/educhain0796/LunarLiao",
      demo: "https://lunar-liao-two.vercel.app/",
      gradient: "from-indigo-500 to-purple-500",
      icon: "🌙",
      award: "Multi-Hackathon Winner",
      category: "Entertainment",
    },
    {
      title: "Lango",
      description: "Decentralized language exchange dApp with AI-powered learning and NFT certifications",
      tech: ["Blockchain", "AI/ML", "Next.js", "Smart Contracts"],
      role: "Lead Developer",
      features: ["AI-powered learning", "Token incentives", "NFT certifications"],
      status: "Winner - Multiple EDU Chain Hackathons",
      github: "https://github.com/manjeetsharma0796/Lango",
      demo: "https://langedu.vercel.app/",
      gradient: "from-orange-500 to-red-500",
      icon: "🗣️",
      award: "Education Track Winner",
      category: "Education",
    },
    {
      title: "Evion",
      description: "Global event platform with intuitive tools and community-driven experiences",
      tech: ["Next.js", "TypeScript", "Blockchain", "Smart Contracts"],
      role: "Full-stack Developer",
      features: ["Event discovery", "Community engagement", "Decentralized hosting"],
      status: "Winner - Linea Dev Cook-Off",
      github: "https://github.com/prithwish122/Evion-aptos",
      demo: "https://evion-aptos.vercel.app/",
      gradient: "from-pink-500 to-rose-500",
      icon: "🎉",
      award: "General Track Winner",
      category: "Events",
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate project list items
      gsap.fromTo(
        ".project-item",
        {
          opacity: 0,
          x: -100,
          rotationY: 45,
        },
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        },
      )

      // Animate project details
      gsap.fromTo(
        ".project-details",
        {
          opacity: 0,
          x: 100,
          scale: 0.9,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-blue-900/20"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Showcasing my best work in blockchain and Web3 development
          </p>

          <motion.div
            className="flex justify-center items-center gap-4"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Star className="h-6 w-6 text-yellow-500" />
            <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">8 Hackathon Wins</span>
            <Star className="h-6 w-6 text-yellow-500" />
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Project List */}
          <div className="space-y-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className={`project-item cursor-pointer p-6 rounded-2xl border transition-all duration-300 ${
                  selectedProject === index
                    ? "bg-white dark:bg-gray-800 shadow-xl border-purple-200 dark:border-purple-700"
                    : "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 border-gray-200 dark:border-gray-700"
                }`}
                onClick={() => setSelectedProject(index)}
                whileHover={{ x: 5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <motion.div
                      className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white shadow-lg`}
                      animate={{
                        scale: selectedProject === index ? 1.1 : 1,
                        rotate: selectedProject === index ? 5 : 0,
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="text-xl">{project.icon}</span>
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{project.title}</h3>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-yellow-500 text-black text-xs">{project.award}</Badge>
                        <Badge variant="outline" className="text-xs">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <motion.div
                    animate={{
                      rotate: selectedProject === index ? 90 : 0,
                      scale: selectedProject === index ? 1.2 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ChevronRight className="h-5 w-5 text-purple-500" />
                  </motion.div>
                </div>

                {/* Quick Preview */}
                <motion.div
                  initial={false}
                  animate={{
                    height: selectedProject === index ? "auto" : 0,
                    opacity: selectedProject === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.tech.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Project Details */}
          <motion.div
            className="project-details sticky top-24"
            key={selectedProject}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              {/* Header */}
              <div className={`p-6 bg-gradient-to-r ${projects[selectedProject].gradient} text-white`}>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{projects[selectedProject].icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold">{projects[selectedProject].title}</h3>
                    <p className="text-white/80">{projects[selectedProject].role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  <span className="text-sm font-medium">{projects[selectedProject].award}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {projects[selectedProject].description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {projects[selectedProject].features.map((feature, index) => (
                      <motion.li
                        key={feature}
                        className="flex items-center gap-3 text-gray-600 dark:text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${projects[selectedProject].gradient}`}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[selectedProject].tech.map((tech) => (
                      <motion.div key={tech} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Badge
                          variant="outline"
                          className="border-purple-200 text-purple-700 hover:bg-purple-100 transition-colors"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => {
                        const url = projects[selectedProject].github
                        if (url && url !== "#" && url !== "") window.open(url, "_blank")
                      }}
                      disabled={!projects[selectedProject].github || projects[selectedProject].github === "#" || projects[selectedProject].github === ""}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
                  </motion.div>
                  <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      className={`w-full bg-gradient-to-r ${projects[selectedProject].gradient} hover:shadow-lg transition-all duration-300`}
                      onClick={() => {
                        const url = projects[selectedProject].demo
                        if (url && url !== "#" && url !== "") window.open(url, "_blank")
                      }}
                      disabled={!projects[selectedProject].demo || projects[selectedProject].demo === "#" || projects[selectedProject].demo === ""}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
