"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  Code,
  Server,
  Database,
  Blocks,
  Cloud,
  FileCode,
  Sparkles,
  ChevronRight,
  Star,
  Zap,
  Brain,
  Rocket,
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export function RevolutionarySkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const skillsGridRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [selectedCategory, setSelectedCategory] = useState(0)

  const skillCategories = [
    {
      name: "Client-Side",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn", "Framer Motion", "GSAP", "Three.js"],
      icon: Code,
      color: "from-blue-500 to-blue-600",
      description: "Modern frontend technologies for stunning user experiences",
      level: "Expert",
      projects: 15,
    },
    {
      name: "Server-Side",
      skills: ["Node.js", "Express.js", "NestJS", "Flask", "REST APIs"],
      icon: Server,
      color: "from-indigo-500 to-indigo-600",
      description: "Robust backend solutions and API development",
      level: "Advanced",
      projects: 12,
    },
    {
      name: "Database Systems",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Appwrite", "Firebase"],
      icon: Database,
      color: "from-blue-600 to-indigo-600",
      description: "Scalable data storage and management solutions",
      level: "Advanced",
      projects: 10,
    },
    {
      name: "Blockchain",
      skills: ["Solidity", "Rust", "Web3.js", "Hardhat", "GraphQL", "LangChain"],
      icon: Blocks,
      color: "from-indigo-600 to-blue-700",
      description: "Decentralized applications and smart contract development",
      level: "Expert",
      projects: 18,
    },
    {
      name: "DevOps & Version Control",
      skills: ["Docker", "Git", "GitHub", "AWS"],
      icon: Cloud,
      color: "from-blue-500 to-indigo-500",
      description: "Infrastructure, deployment, and collaboration tools",
      level: "Intermediate",
      projects: 8,
    },
    {
      name: "Languages",
      skills: ["Javascript", "Typescript", "Python", "Java"],
      icon: FileCode,
      color: "from-indigo-500 to-blue-600",
      description: "Programming languages for diverse development needs",
      level: "Expert",
      projects: 20,
    },
    {
      name: "Exploring",
      skills: ["Spiking Neural Networks", "ZK-Proofs", "AI Agents", "RWA", "DEFI", "N8N"],
      icon: Sparkles,
      color: "from-blue-600 to-indigo-700",
      description: "Cutting-edge technologies and emerging trends",
      level: "Learning",
      projects: 3,
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".category-card",
        {
          opacity: 0,
          y: 100,
          rotationX: 45,
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        },
      )

      gsap.fromTo(
        ".skills-showcase",
        {
          opacity: 0,
          x: 100,
          scale: 0.9,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: skillsGridRef.current,
            start: "top 60%",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "from-blue-500 to-indigo-500"
      case "Advanced":
        return "from-indigo-500 to-blue-600"
      case "Intermediate":
        return "from-blue-400 to-indigo-500"
      case "Learning":
        return "from-indigo-400 to-blue-500"
      default:
        return "from-slate-500 to-slate-600"
    }
  }

  const getLevelIcon = (level: string) => {
    switch (level) {
      case "Expert":
        return Star
      case "Advanced":
        return Zap
      case "Intermediate":
        return Brain
      case "Learning":
        return Rocket
      default:
        return Star
    }
  }

  return (
    <section ref={sectionRef} id="tech" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 bg-clip-text text-transparent mb-4"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive mastery across the full technology spectrum
          </motion.p>

          <motion.div
            className="flex justify-center items-center gap-8 flex-wrap"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                40+
              </div>
              <div className="text-sm text-slate-500">Technologies</div>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-blue-500 to-indigo-500"></div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-blue-700 bg-clip-text text-transparent">
                7
              </div>
              <div className="text-sm text-slate-500">Specializations</div>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-indigo-500 to-blue-600"></div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
                3+
              </div>
              <div className="text-sm text-slate-500">Years Experience</div>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8" ref={skillsGridRef}>
          <div className="lg:col-span-1 space-y-3">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Skill Categories</h3>
            {skillCategories.map((category, index) => {
              const LevelIcon = getLevelIcon(category.level)
              return (
                <motion.div
                  key={category.name}
                  className={`category-card cursor-pointer p-4 rounded-xl border transition-all duration-300 ${
                    selectedCategory === index
                      ? "bg-white dark:bg-slate-800 shadow-xl border-blue-200 dark:border-blue-700 scale-105"
                      : "bg-white/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700"
                  }`}
                  onClick={() => setSelectedCategory(index)}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <motion.div
                        className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white`}
                        animate={{
                          scale: selectedCategory === index ? 1.1 : 1,
                          rotate: selectedCategory === index ? 5 : 0,
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <category.icon className="h-5 w-5" />
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white">{category.name}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <div
                            className={`flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r ${getLevelColor(category.level)} text-white text-xs`}
                          >
                            <LevelIcon className="h-3 w-3" />
                            {category.level}
                          </div>
                          <span className="text-xs text-slate-500">{category.projects} projects</span>
                        </div>
                      </div>
                    </div>
                    <motion.div
                      animate={{
                        rotate: selectedCategory === index ? 90 : 0,
                        scale: selectedCategory === index ? 1.2 : 1,
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <ChevronRight className="h-5 w-5 text-blue-500" />
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <div className="lg:col-span-2">
            <motion.div
              className="skills-showcase"
              key={selectedCategory}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-0 shadow-2xl overflow-hidden">
                <div
                  className={`p-6 bg-gradient-to-r ${skillCategories[selectedCategory].color} text-white relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        className="p-4 bg-white/20 rounded-xl backdrop-blur-sm"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      >
                        {React.createElement(skillCategories[selectedCategory].icon, { className: "h-8 w-8" })}
                      </motion.div>
                      <div>
                        <h3 className="text-3xl font-bold">{skillCategories[selectedCategory].name}</h3>
                        <p className="text-white/80 text-lg">{skillCategories[selectedCategory].description}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className={`flex items-center gap-2 px-3 py-2 rounded-full bg-white/20 backdrop-blur-sm`}>
                        {React.createElement(getLevelIcon(skillCategories[selectedCategory].level), {
                          className: "h-4 w-4",
                        })}
                        <span className="font-medium">{skillCategories[selectedCategory].level}</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/20 backdrop-blur-sm">
                        <Star className="h-4 w-4" />
                        <span className="font-medium">{skillCategories[selectedCategory].projects} Projects</span>
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {skillCategories[selectedCategory].skills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0, rotate: 180 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{
                          delay: index * 0.1,
                          type: "spring",
                          stiffness: 200,
                        }}
                        whileHover={{
                          scale: 1.05,
                          rotate: Math.random() * 10 - 5,
                          y: -5,
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div
                          className={`
                          p-4 rounded-xl bg-gradient-to-br ${skillCategories[selectedCategory].color} 
                          text-white shadow-lg cursor-pointer group relative overflow-hidden
                        `}
                        >
                          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="relative z-10">
                            <div className="text-center">
                              <div className="text-lg font-bold mb-1">{skill}</div>
                              <div className="text-xs opacity-80">{skillCategories[selectedCategory].level}</div>
                            </div>
                          </div>

                          <motion.div
                            className="absolute inset-0 border-2 border-white/30 rounded-xl"
                            animate={{
                              borderColor: ["rgba(255,255,255,0.3)", "rgba(255,255,255,0.8)", "rgba(255,255,255,0.3)"],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              delay: index * 0.2,
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Proficiency Overview</h4>
                    <div className="space-y-3">
                      {skillCategories[selectedCategory].skills.slice(0, 4).map((skill, index) => (
                        <div key={skill} className="flex items-center gap-3">
                          <div className="w-20 text-sm text-slate-600 dark:text-slate-300">{skill}</div>
                          <div className="flex-1 bg-slate-200 dark:bg-slate-600 rounded-full h-2 overflow-hidden">
                            <motion.div
                              className={`h-full bg-gradient-to-r ${skillCategories[selectedCategory].color} rounded-full`}
                              initial={{ width: 0 }}
                              animate={{ width: `${85 + Math.random() * 15}%` }}
                              transition={{ delay: index * 0.2, duration: 1 }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white rounded-2xl font-bold text-lg shadow-2xl"
            animate={{
              boxShadow: [
                "0 10px 30px rgba(59, 130, 246, 0.3)",
                "0 20px 40px rgba(59, 130, 246, 0.5)",
                "0 10px 30px rgba(59, 130, 246, 0.3)",
              ],
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <Sparkles className="mr-3 h-6 w-6" />
            Currently exploring: ZK-Proofs, AI Agents, Neural Networks & DeFi Innovation
            <Sparkles className="ml-3 h-6 w-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
