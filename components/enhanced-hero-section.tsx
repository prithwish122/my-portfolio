"use client"

import { Button } from "@/components/ui/button"
import { Download, Mail, Github, Linkedin, Twitter, ChevronDown, Play } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

export function EnhancedHeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLHeadingElement>(null)
  const [currentCommand, setCurrentCommand] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  const commands = [
    { command: "whoami", output: "Prithwish Chatterjee - Founder & Blockchain Developer" },
    { command: "cat company.txt", output: "🚀 Founder of VeriBee | Incubated by OpenCampus OC-I" },
    { command: "ls -la skills/", output: "Solidity, Next.js, TypeScript, Solana, Web3" },
    { command: "cat achievements.txt", output: "🏆 8x Hackathon Winner | 15+ Projects Built" },
    { command: "git log --oneline", output: "feat: Built VeriBee, QuestFlow, Radio, Lango..." },
    { command: "npm run build-future", output: "✨ Building the next generation of Web3..." },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 })

      tl.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 100,
          rotationX: 90,
          transformOrigin: "50% 50% -100px",
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1.2,
          ease: "back.out(1.7)",
        },
      ).fromTo(
        subtitleRef.current,
        { opacity: 0, x: -100, skewX: 45 },
        { opacity: 1, x: 0, skewX: 0, duration: 1, ease: "power3.out" },
        "-=0.8",
      )

      gsap.to(heroRef.current, {
        y: -10,
        duration: 3,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (!isTyping) return

    const currentCmd = commands[currentCommand]
    const fullText = `$ ${currentCmd.command}\n${currentCmd.output}`

    let timeout: NodeJS.Timeout

    if (currentText.length < fullText.length) {
      timeout = setTimeout(() => {
        setCurrentText(fullText.slice(0, currentText.length + 1))
      }, 50)
    } else {
      timeout = setTimeout(() => {
        if (currentCommand < commands.length - 1) {
          setCurrentCommand(currentCommand + 1)
          setCurrentText("")
        } else {
          setIsTyping(false)
        }
      }, 2000)
    }

    return () => clearTimeout(timeout)
  }, [currentText, currentCommand, isTyping, commands])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 1.5,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(59, 130, 246, 0.25)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-32 overflow-hidden">
      <div ref={heroRef} className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <h1
              ref={titleRef}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 bg-clip-text text-transparent mb-6 leading-tight"
            >
              Prithwish Chatterjee
            </h1>

            <h2
              ref={subtitleRef}
              className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-4 font-light leading-relaxed"
            >
              Founder of VeriBee • Incubated by OpenCampus OC-I
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
              Passionate blockchain developer and Web3 innovator with expertise in EVM and Solana ecosystems. Building
              the future of decentralized applications.
            </p>

            <motion.div
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold text-sm shadow-lg mb-8"
              animate={{
                boxShadow: [
                  "0 4px 20px rgba(59, 130, 246, 0.3)",
                  "0 8px 25px rgba(59, 130, 246, 0.4)",
                  "0 4px 20px rgba(59, 130, 246, 0.3)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <span className="mr-2">🚀</span>
              Founder • 8x Hackathon Winner • OC-I Incubated
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg border-0"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </motion.div>

              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white transition-all duration-300"
                  onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                >
                  View Projects
                </Button>
              </motion.div>

              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-indigo-500 text-indigo-600 hover:bg-indigo-500 hover:text-white transition-all duration-300"
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Button>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start space-x-8">
              {[
                {
                  Icon: Github,
                  href: "https://github.com/prithwish122",
                  color: "hover:text-slate-800 dark:hover:text-white",
                },
                { Icon: Linkedin, href: "#", color: "hover:text-blue-600" },
                { Icon: Twitter, href: "https://x.com/prithwish122", color: "hover:text-blue-500" },
              ].map(({ Icon, href, color }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-slate-600 dark:text-slate-400 ${color} transition-all duration-300`}
                  whileHover={{
                    scale: 1.2,
                    rotate: 5,
                    filter: "drop-shadow(0 0 10px rgba(59, 130, 246, 0.5))",
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="h-8 w-8" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Interactive Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="relative"
          >
            <div className="bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden backdrop-blur-sm">
              <div className="flex items-center justify-between px-6 py-4 bg-slate-800 border-b border-slate-700">
                <div className="flex space-x-3">
                  <motion.div
                    className="w-4 h-4 bg-red-500 rounded-full cursor-pointer"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  ></motion.div>
                  <motion.div
                    className="w-4 h-4 bg-yellow-500 rounded-full cursor-pointer"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  ></motion.div>
                  <motion.div
                    className="w-4 h-4 bg-green-500 rounded-full cursor-pointer"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  ></motion.div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-slate-400 text-sm font-mono">prithwish@portfolio</span>
                  <motion.button
                    onClick={() => {
                      setCurrentCommand(0)
                      setCurrentText("")
                      setIsTyping(true)
                    }}
                    className="text-slate-400 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Play className="h-4 w-4" />
                  </motion.button>
                </div>
              </div>

              <div className="p-6 font-mono text-sm min-h-[400px] bg-gradient-to-br from-slate-900 to-slate-800">
                <div className="text-green-400 mb-4">
                  <div className="mb-2">Welcome to Prithwish's Portfolio Terminal v2.0</div>
                  <div className="text-slate-500 text-xs mb-4">
                    Type 'help' for available commands or watch the demo below
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  {commands.slice(0, currentCommand).map((cmd, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="text-green-400">$ {cmd.command}</div>
                      <div className="text-slate-300 ml-2 mb-2">{cmd.output}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="text-green-400">
                  <pre className="whitespace-pre-wrap">{currentText}</pre>
                  {isTyping && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                      className="text-blue-400"
                    >
                      |
                    </motion.span>
                  )}
                </div>

                {!isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-6 space-y-2"
                  >
                    <div className="text-slate-500 text-xs mb-3">Try these interactive commands:</div>
                    <div className="grid grid-cols-2 gap-2">
                      {["help", "skills", "projects", "contact"].map((cmd) => (
                        <motion.button
                          key={cmd}
                          className="text-left px-3 py-2 bg-slate-800 hover:bg-slate-700 rounded text-blue-400 hover:text-blue-300 transition-colors text-xs"
                          whileHover={{ scale: 1.02, x: 5 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => {
                            console.log(`Executing: ${cmd}`)
                          }}
                        >
                          ./{cmd}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl blur-xl -z-10"
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="h-8 w-8 text-blue-500" />
        </motion.div>
      </div>
    </section>
  )
}
