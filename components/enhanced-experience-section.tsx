"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion, useInView } from "framer-motion"
import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Trophy, Briefcase, Star } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export function EnhancedExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const experiences = [
    {
      type: "work",
      title: "Founder of VeriBee",
      period: "2024 - Present",
      description:
        "Founded VeriBee, a revolutionary research platform solving data fraud with AI-verified submissions. Successfully got incubated by OpenCampus OC-I, a leading Web3 incubator program.",
      highlights: [
        "OpenCampus OC-I Incubation",
        "AI-powered research platform",
        "DeSci innovation",
        "Startup leadership",
      ],
      icon: "🚀",
      color: "from-emerald-500 to-teal-500",
    },
    {
      type: "work",
      title: "DevRel at HackQuest",
      period: "Feb 2025 – May 2025",
      description:
        "Hosted developer workshops and hackathon meetups in Kolkata, mentored participants, and led technical sessions to grow the local Web3 builder community.",
      highlights: ["University tours", "Buildstations", "Regional hackathons", "Community meetups"],
      icon: "🚀",
      color: "from-blue-500 to-cyan-500",
    },
    {
      type: "work",
      title: "Web Dev Lead at Skepsis",
      period: "Ongoing",
      description:
        "Leading web development initiatives for Skepsis, the technical committee of Sister Nivedita University.",
      highlights: ["Team leadership", "Technical mentoring", "Project management"],
      icon: "💻",
      color: "from-purple-500 to-pink-500",
    },
  ]

  const achievements = [
    {
      title: "VeriBee Founding",
      award: "OpenCampus OC-I Incubated",
      project: "VeriBee - Research Platform",
      description: "Founded and built VeriBee, got incubated by OpenCampus OC-I, and won 1st in DeSci track",
      icon: "🔬",
      color: "from-violet-500 to-purple-500",
      position: 1,
    },
    {
      title: "Hack4Bengal 3.0",
      award: "Best Build on Solana Track",
      project: "Radio - Social audio platform",
      description: "Built a voice-first social platform to eliminate appearance-based bias",
      icon: "🎙️",
      color: "from-green-500 to-teal-500",
      position: 2,
    },
    {
      title: "EDU Chain Semester 1",
      award: "Three Projects Received Grants",
      project: "Play Vault, Meme Market, Token Shak",
      description: "Multiple successful projects in the educational blockchain space",
      icon: "🎓",
      color: "from-indigo-500 to-purple-500",
      position: 3,
    },
    {
      title: "NEO X Grind Hackathon",
      award: "5th Prize",
      project: "Web3 Meme Marketplace",
      description: "Enabling creators to monetize exclusive memes with verified digital ownership",
      icon: "🎨",
      color: "from-orange-500 to-red-500",
      position: 4,
    },
    {
      title: "AIA Chain Inaugural",
      award: "2 Projects Won",
      project: "Lunar Liao & QuestFlow",
      description: "Decentralized astrology platform and Web3 gig platform",
      icon: "🌙",
      color: "from-purple-500 to-indigo-500",
      position: 5,
    },
    {
      title: "Linea Dev Cook-Off",
      award: "Winner General Track",
      project: "Evion",
      description: "Global event platform with community-driven experiences",
      icon: "🎉",
      color: "from-pink-500 to-rose-500",
      position: 6,
    },
    {
      title: "EDU Chain Semester 2",
      award: "2 Projects Won",
      project: "Lunar Liao & Lango",
      description: "Astrology dApp and decentralized language exchange platform",
      icon: "🗣️",
      color: "from-cyan-500 to-blue-500",
      position: 7,
    },
    {
      title: "EDU Chain Semester 3 Regional",
      award: "Winner",
      project: "Lango",
      description: "Decentralized language exchange with AI-powered learning",
      icon: "🌍",
      color: "from-emerald-500 to-green-500",
      position: 8,
    },
    {
      title: "EDU Chain Semester 3",
      award: "1st in DeSci Track",
      project: "VeriBee",
      description: "Research platform solving data fraud with AI verification",
      icon: "🔬",
      color: "from-violet-500 to-purple-500",
      position: 9,
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate timeline
      gsap.fromTo(
        ".timeline-item",
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
          ease: "back.out(1.7)",
          stagger: 0.2,
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 70%",
          },
        },
      )

      // Animate achievement cards with 3D effect
      gsap.fromTo(
        ".achievement-card",
        {
          opacity: 0,
          y: 100,
          rotationX: 45,
          transformOrigin: "center bottom",
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".achievements-grid",
            start: "top 60%",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="experience" className="py-20 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>

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
            Experience & Achievements
          </motion.h2>

          <motion.div
            className="flex items-center justify-center gap-4 mb-4"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Trophy className="h-10 w-10 text-yellow-500" />
            </motion.div>
            <span className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              8x Hackathon Winner
            </span>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Star className="h-8 w-8 text-yellow-500" />
            </motion.div>
          </motion.div>

          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Building innovative solutions and leading communities
          </motion.p>
        </motion.div>

        {/* Work Experience Timeline */}
        <div className="mb-20">
          <motion.h3
            className="text-3xl font-bold text-gray-900 dark:text-white mb-12 flex items-center justify-center"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Briefcase className="mr-3 h-8 w-8 text-purple-600" />
            Work Experience
          </motion.h3>

          <div ref={timelineRef} className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                className={`timeline-item flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      rotateY: index % 2 === 0 ? 5 : -5,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="relative overflow-hidden border-0 shadow-xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
                      <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-10`}></div>
                      <CardHeader className="relative z-10">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl">{exp.icon}</span>
                          <CardTitle className="text-xl">{exp.title}</CardTitle>
                        </div>
                        <Badge variant="outline" className="w-fit">
                          {exp.period}
                        </Badge>
                      </CardHeader>
                      <CardContent className="relative z-10">
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.highlights.map((highlight) => (
                            <motion.div key={highlight} whileHover={{ scale: 1.05 }}>
                              <Badge
                                variant="secondary"
                                className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
                              >
                                {highlight}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"
                  whileHover={{ scale: 1.5 }}
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(139, 92, 246, 0.7)",
                      "0 0 0 10px rgba(139, 92, 246, 0)",
                      "0 0 0 0 rgba(139, 92, 246, 0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.5,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hackathon Achievements */}
        <div>
          <motion.h3
            className="text-3xl font-bold text-gray-900 dark:text-white mb-12 flex items-center justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Trophy className="mr-3 h-8 w-8 text-yellow-500" />
            Hackathon Hall of Fame
          </motion.h3>

          <div className="achievements-grid grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                className="achievement-card group"
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
                    className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                  ></div>

                  {/* Position Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <motion.div
                      className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-black font-bold text-sm shadow-lg"
                      animate={{
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.2,
                      }}
                    >
                      #{achievement.position}
                    </motion.div>
                  </div>

                  <CardHeader className="relative z-10 pb-2">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{achievement.icon}</span>
                      <CardTitle className="text-lg leading-tight">{achievement.title}</CardTitle>
                    </div>
                    <motion.div className="inline-block" whileHover={{ scale: 1.05 }}>
                      <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold border-0">
                        {achievement.award}
                      </Badge>
                    </motion.div>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <h4
                      className={`font-semibold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent mb-2`}
                    >
                      {achievement.project}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {achievement.description}
                    </p>
                  </CardContent>

                  {/* Hover Effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    initial={false}
                  />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
