"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Mail, Github, Linkedin, Twitter, Download, MapPin } from "lucide-react"

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "prithwish@example.com",
      href: "mailto:prithwish@example.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/prithwish",
      href: "https://github.com/prithwish",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/prithwish",
      href: "https://linkedin.com/in/prithwish",
    },
    {
      icon: Twitter,
      label: "Twitter",
      value: "@prithwish_dev",
      href: "https://twitter.com/prithwish_dev",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Let's Connect</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Ready to collaborate on the next big Web3 project? Let's build something amazing together!
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 mb-8">
            <MapPin className="h-5 w-5" />
            <span>Kolkata, India</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {contactInfo.map((contact, index) => (
            <motion.div
              key={contact.label}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <a
                    href={contact.href}
                    className="flex items-center space-x-4 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    <contact.icon className="h-6 w-6" />
                    <div>
                      <p className="font-medium">{contact.label}</p>
                      <p className="text-sm">{contact.value}</p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-20 pt-8 border-t border-gray-200 dark:border-gray-700 text-center"
      >
        <p className="text-gray-600 dark:text-gray-400">
          © 2024 Prithwish Chatterjee. Built with Next.js, TypeScript, and Tailwind CSS.
        </p>
      </motion.footer>
    </section>
  )
}
