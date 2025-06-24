"use client"

import { Button } from "@/components/ui/button"
import { Download, Mail, Github, Linkedin, Twitter } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">Prithwish Chatterjee</h1>
          <h2 className="text-2xl md:text-3xl text-purple-600 dark:text-purple-400 mb-4">
            Blockchain Developer | Web3 Innovator | Hackathon Enthusiast
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Building impactful Web3 products and AI-enabled tools for the future. 8x Hackathon Winner specializing in
            EVM & Solana ecosystems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Mail className="mr-2 h-4 w-4" />
            Contact Me
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center space-x-6"
        >
          <a
            href="#"
            className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="#"
            className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="#"
            className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <Twitter className="h-6 w-6" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
