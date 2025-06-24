"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export function TechStackSection() {
  const techStack = {
    Frontend: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/UI", "Framer Motion"],
    Backend: ["Node.js", "Express", "MongoDB"],
    Blockchain: ["Solidity", "Hardhat", "Move", "Solana (Anchor)", "Aptos"],
    Tools: ["Git", "Figma", "Postman", "Hardhat", "GitHub Actions"],
    "AI/ML": ["Python", "Scikit-learn", "pandas"],
  }

  return (
    <section id="tech" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Tech Stack</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Technologies I use to bring ideas to life</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(techStack).map(([category, technologies], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-purple-600 dark:text-purple-400">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
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
