"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion, useInView } from "framer-motion"
import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ExternalLink, Github, Star, Award } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export function EnhancedProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "Questflow",
      description: "Bounty management dApp enabling posting & completing bounties with blockchain-verified rewards",
      tech: ["Solidity", "Hardhat", "Next.js", "Tailwind"],
      role: "Full-stack Blockchain Developer",
      features: ["Smart contract automation", "Token-based rewards", "Secure task management"],
      status: "Deployed on AIA Mainnet",
      github: "#",
      demo: "#",
      gradient: "from-purple-500 to-pink-500",
      icon: "🚀",
      award: "AIA Chain Winner",
    },
    {
      title: "VeriBee",
      description:
        "All-in-one research platform solving data fraud with AI-verified submissions and tokenized rewards. Founded and incubated by OpenCampus OC-I.",
      tech: ["Solidity", "Next.js", "AI Integration", "TypeScript"],
      role: "Founder & Lead Developer",
      features: [
        "AI-powered verification",
        "Authentic user verification",
        "Fair tokenized rewards",
        "OpenCampus OC-I Incubated",
      ],
      status: "Founder • Incubated by OpenCampus OC-I • 1st in DeSci track",
      github: "#",
      demo: "#",
      gradient: "from-blue-500 to-cyan-500",
      icon: "🔬",
      award: "Founder • OC-I Incubated",
    },
    {
      title: "Radio",
      description: "Social audio platform promoting voice-first content to eliminate appearance-based bias",
      tech: ["Solana", "React", "Web Audio API", "Rust"],
      role: "Frontend & Blockchain Developer",
      features: ["Voice-first social interaction", "Decentralized audio streaming", "Anti-bias technology"],
      status: "Best Build on Solana - Hack4Bengal 3.0",
      github: "#",
      demo: "#",
      gradient: "from-green-500 to-teal-500",
      icon: "🎙️",
      award: "Solana Track Winner",
    },
    {
      title: "Lunar Liao",
      description: "Decentralized astrology platform with anonymous Kundli analysis and daily token rewards",
      tech: ["Solidity", "Next.js", "Smart Contracts", "NFTs"],
      role: "Full-stack Developer",
      features: ["Anonymous consultations", "Daily token rewards", "NFT zodiac badges"],
      status: "Winner - AIA Chain & EDU Chain Hackathons",
      github: "#",
      demo: "#",
      gradient: "from-indigo-500 to-purple-500",
      icon: "🌙",
      award: "Multi-Hackathon Winner",
    },
    {
      title: "Lango",
      description: "Decentralized language exchange dApp with AI-powered learning and NFT certifications",
      tech: ["Blockchain", "AI/ML", "Next.js", "Smart Contracts"],
      role: "Lead Developer",
      features: ["AI-powered learning", "Token incentives", "NFT certifications"],
      status: "Winner - Multiple EDU Chain Hackathons",
      github: "#",
      demo: "#",
      gradient: "from-orange-500 to-red-500",
      icon: "🗣️",
      award: "Education Track Winner",
    },
    {
      title: "Evion",
      description: "Global event platform with intuitive tools and community-driven experiences",
      tech: ["Next.js", "TypeScript", "Blockchain", "Smart Contracts"],
      role: "Full-stack Developer",
      features: ["Event discovery", "Community engagement", "Decentralized hosting"],
      status: "Winner - Linea Dev Cook-Off",
      github: "#",
      demo: "#",
      gradient: "from-pink-500 to-rose-500",
      icon: "🎉",
      award: "General Track Winner",
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title with 3D effect
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          rotationY: 90,
          transformOrigin: "center center",
        },
        {
          opacity: 1,
          rotationY: 0,
          duration: 1.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          },
        },
      )

      // Animate project cards with stagger
      gsap.fromTo(
        ".project-card",
        {
          opacity: 0,
          y: 100,
          rotationX: 45,
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: 45,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  return (
    <section ref={sectionRef} id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-blue-900/20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            ref={titleRef}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4"
          >
            Featured Projects
          </h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Showcasing my best work in blockchain and Web3 development
          </motion.p>

          {/* Decorative Elements */}
          <motion.div
            className="flex justify-center items-center gap-4 mt-8"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Star className="h-6 w-6 text-yellow-500" />
            <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">8 Hackathon Wins</span>
            <Star className="h-6 w-6 text-yellow-500" />
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="project-card group"
              whileHover={{
                y: -10,
                rotateY: 5,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <Card className="h-full flex flex-col relative overflow-hidden border-0 shadow-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>

                {/* Award Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <motion.div
                    className="flex items-center gap-1 px-2 py-1 bg-yellow-500 text-black text-xs font-bold rounded-full"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Award className="h-3 w-3" />
                    Winner
                  </motion.div>
                </div>

                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{project.icon}</span>
                    <CardTitle className="text-xl group-hover:text-purple-600 transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>
                  <motion.p
                    className="text-sm text-purple-600 dark:text-purple-400 font-medium"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  >
                    {project.award}
                  </motion.p>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col relative z-10">
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Role: {project.role}</p>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Key Features:</p>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      {project.features.map((feature) => (
                        <motion.li key={feature} className="flex items-center gap-2" whileHover={{ x: 5 }}>
                          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
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

                  <div className="mt-auto flex gap-2">
                    <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full group-hover:border-purple-500 transition-colors"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </motion.div>
                    <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        size="sm"
                        className={`w-full bg-gradient-to-r ${project.gradient} hover:shadow-lg transition-all duration-300`}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
