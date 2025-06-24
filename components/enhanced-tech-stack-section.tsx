"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion, useInView } from "framer-motion"
import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Code, Server, Database, Blocks, Cloud, FileCode, Zap, Sparkles } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export function EnhancedTechStackSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const techStack = {
    "Client-Side": {
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn", "Framer Motion", "GSAP", "Three.js"],
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      description: "Modern frontend technologies for stunning user experiences",
    },
    "Server-Side": {
      skills: ["Node.js", "Express.js", "NestJS", "Flask", "REST APIs"],
      icon: Server,
      color: "from-green-500 to-emerald-500",
      description: "Robust backend solutions and API development",
    },
    "Database Systems": {
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Appwrite", "Firebase"],
      icon: Database,
      color: "from-purple-500 to-violet-500",
      description: "Scalable data storage and management solutions",
    },
    Blockchain: {
      skills: ["Solidity", "Rust", "Web3.js", "Hardhat", "GraphQL", "LangChain"],
      icon: Blocks,
      color: "from-orange-500 to-red-500",
      description: "Decentralized applications and smart contract development",
    },
    "DevOps & Version Control": {
      skills: ["Docker", "Git", "GitHub", "AWS"],
      icon: Cloud,
      color: "from-indigo-500 to-purple-500",
      description: "Infrastructure, deployment, and collaboration tools",
    },
    Languages: {
      skills: ["Javascript", "Typescript", "Python", "Java"],
      icon: FileCode,
      color: "from-pink-500 to-rose-500",
      description: "Programming languages for diverse development needs",
    },
    Exploring: {
      skills: ["Spiking Neural Networks", "ZK-Proofs", "AI Agents", "RWA", "DEFI", "N8N"],
      icon: Sparkles,
      color: "from-yellow-500 to-orange-500",
      description: "Cutting-edge technologies and emerging trends",
    },
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate skill cards with stagger
      gsap.fromTo(
        ".skill-card",
        {
          opacity: 0,
          y: 50,
          rotationY: 45,
        },
        {
          opacity: 1,
          y: 0,
          rotationY: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        },
      )

      // Animate skill badges with wave effect
      gsap.fromTo(
        ".skill-badge",
        {
          opacity: 0,
          scale: 0,
          rotation: 180,
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.05,
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
    <section ref={sectionRef} id="tech" className="py-20 px-4 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            Tech Stack & Skills
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive expertise across the full technology stack
          </motion.p>

          {/* Stats */}
          <motion.div
            className="flex justify-center items-center gap-8 mt-8"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">40+</div>
              <div className="text-sm text-gray-500">Technologies</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600">7</div>
              <div className="text-sm text-gray-500">Categories</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">3+</div>
              <div className="text-sm text-gray-500">Years Experience</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {Object.entries(techStack).map(([category, data], index) => (
            <motion.div
              key={category}
              variants={cardVariants}
              className="skill-card group"
              whileHover={{
                y: -10,
                rotateY: 5,
                scale: 1.02,
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full relative overflow-hidden border-0 shadow-xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${data.color} opacity-5 group-hover:opacity-15 transition-opacity duration-300`}
                ></div>

                <CardHeader className="relative z-10 pb-3">
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div
                      className={`p-3 rounded-xl bg-gradient-to-r ${data.color} text-white shadow-lg`}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <data.icon className="h-6 w-6" />
                    </motion.div>
                    <div>
                      <CardTitle className="text-lg group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {category}
                      </CardTitle>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{data.description}</p>
                </CardHeader>

                <CardContent className="relative z-10 pt-0">
                  <div className="flex flex-wrap gap-2">
                    {data.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        className="skill-badge"
                        whileHover={{
                          scale: 1.1,
                          rotate: Math.random() * 10 - 5,
                        }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: index * 0.1 + skillIndex * 0.05,
                          type: "spring",
                          stiffness: 200,
                        }}
                      >
                        <Badge
                          variant="secondary"
                          className={`
                            text-xs font-medium transition-all duration-200 cursor-pointer
                            hover:shadow-md bg-gradient-to-r ${data.color} bg-opacity-10
                            border border-opacity-20 hover:border-opacity-40
                          `}
                          style={{
                            borderColor: `rgb(${
                              data.color.includes("blue")
                                ? "59, 130, 246"
                                : data.color.includes("green")
                                  ? "34, 197, 94"
                                  : data.color.includes("purple")
                                    ? "139, 92, 246"
                                    : data.color.includes("orange")
                                      ? "249, 115, 22"
                                      : data.color.includes("indigo")
                                        ? "99, 102, 241"
                                        : data.color.includes("pink")
                                          ? "236, 72, 153"
                                          : "234, 179, 8"
                            })`,
                          }}
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  {/* Skill Count */}
                  <motion.div
                    className="mt-4 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <span className={`text-sm font-bold bg-gradient-to-r ${data.color} bg-clip-text text-transparent`}>
                      {data.skills.length} Skills
                    </span>
                  </motion.div>
                </CardContent>

                {/* Hover Glow Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${data.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-lg`}
                  initial={false}
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Exploring Section Highlight */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full font-semibold shadow-lg"
            animate={{
              boxShadow: [
                "0 4px 20px rgba(245, 158, 11, 0.3)",
                "0 8px 25px rgba(245, 158, 11, 0.4)",
                "0 4px 20px rgba(245, 158, 11, 0.3)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <Zap className="mr-2 h-5 w-5" />
            Currently exploring cutting-edge technologies like ZK-Proofs, AI Agents & Neural Networks
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
