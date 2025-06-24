"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Trophy, Briefcase } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      type: "work",
      title: "DevRel at HackQuest",
      period: "Feb 2025 – May 2025",
      description:
        "Hosted developer workshops and hackathon meetups in Kolkata, mentored participants, and led technical sessions to grow the local Web3 builder community.",
      highlights: ["University tours", "Buildstations", "Regional hackathons", "Community meetups"],
    },
    {
      type: "work",
      title: "Web Dev Lead at Skepsis",
      period: "Ongoing",
      description:
        "Leading web development initiatives for Skepsis, the technical committee of Sister Nivedita University.",
      highlights: ["Team leadership", "Technical mentoring", "Project management"],
    },
  ]

  const achievements = [
    {
      title: "Hack4Bengal 3.0",
      award: "Best Build on Solana Track",
      project: "Radio - Social audio platform",
      description: "Built a voice-first social platform to eliminate appearance-based bias",
    },
    {
      title: "EDU Chain Semester 1",
      award: "Three Projects Received Grants",
      project: "Play Vault, Meme Market, Token Shak",
      description: "Multiple successful projects in the educational blockchain space",
    },
    {
      title: "NEO X Grind Hackathon",
      award: "5th Prize",
      project: "Web3 Meme Marketplace",
      description: "Enabling creators to monetize exclusive memes with verified digital ownership",
    },
    {
      title: "AIA Chain Inaugural",
      award: "2 Projects Won",
      project: "Lunar Liao & QuestFlow",
      description: "Decentralized astrology platform and Web3 gig platform",
    },
    {
      title: "Linea Dev Cook-Off",
      award: "Winner General Track",
      project: "Evion",
      description: "Global event platform with community-driven experiences",
    },
    {
      title: "EDU Chain Semester 2",
      award: "2 Projects Won",
      project: "Lunar Liao & Lango",
      description: "Astrology dApp and decentralized language exchange platform",
    },
    {
      title: "EDU Chain Semester 3 Regional",
      award: "Winner",
      project: "Lango",
      description: "Decentralized language exchange with AI-powered learning",
    },
    {
      title: "EDU Chain Semester 3",
      award: "1st in DeSci Track",
      project: "VeriBee",
      description: "Research platform solving data fraud with AI verification",
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Achievements
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Trophy className="h-8 w-8 text-yellow-500" />
            <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">8x Hackathon Winner</span>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Building innovative solutions and leading communities
          </p>
        </motion.div>

        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <Briefcase className="mr-3 h-6 w-6 text-purple-600" />
            Work Experience
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{exp.title}</span>
                      <Badge variant="outline">{exp.period}</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight) => (
                        <Badge key={highlight} variant="secondary">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hackathon Achievements */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <Trophy className="mr-3 h-6 w-6 text-yellow-500" />
            Hackathon Achievements
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{achievement.title}</CardTitle>
                    <Badge className="w-fit bg-yellow-500 hover:bg-yellow-600 text-black">{achievement.award}</Badge>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">{achievement.project}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
