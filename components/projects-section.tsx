"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
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
    },
    {
      title: "VeriBee",
      description: "All-in-one research platform solving data fraud with AI-verified submissions and tokenized rewards",
      tech: ["Solidity", "Next.js", "AI Integration", "TypeScript"],
      role: "Lead Developer",
      features: ["AI-powered verification", "Authentic user verification", "Fair tokenized rewards"],
      status: "1st in DeSci track - EDU Chain Semester 3",
      github: "#",
      demo: "#",
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
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Showcasing my best work in blockchain and Web3 development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">{project.status}</p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Role: {project.role}</p>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Key Features:</p>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 list-disc list-inside">
                      {project.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1 bg-purple-600 hover:bg-purple-700">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
