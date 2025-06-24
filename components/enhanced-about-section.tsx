"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { GraduationCap, Code, Rocket, Award, Users, Globe } from "lucide-react"
import Image from "next/image"

export function EnhancedAboutSection() {
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-pink-50/50 to-blue-50/50 dark:from-purple-900/10 dark:via-pink-900/10 dark:to-blue-900/10"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate about building the future of decentralized applications and Web3 technologies
          </p>
        </motion.div>

        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center gap-12 mb-16"
        >
          <div className="lg:w-1/3">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-64 h-64 mx-auto rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-1">
                <Image
                  src="/images/profile.png"
                  alt="Prithwish Chatterjee"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <motion.div
                className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                Available for Work
              </motion.div>
            </motion.div>
          </div>

          <div className="lg:w-2/3 text-center lg:text-left">
            <motion.h3
              className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Hi, I'm Prithwish! 👋
            </motion.h3>
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              I'm the founder of VeriBee, a revolutionary research platform incubated by OpenCampus OC-I. As a
              passionate blockchain developer and Web3 innovator currently pursuing my Computer Science degree at Sister
              Nivedita University, I've built a proven track record with 8 hackathon victories and specialize in
              creating cutting-edge decentralized applications that solve real-world problems.
            </motion.p>
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              My expertise spans across EVM and Solana ecosystems, full-stack development, and AI integration. I'm
              driven by the vision of creating impactful Web3 products that shape the future of decentralized
              technology.
            </motion.p>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: GraduationCap,
              title: "Education & Growth",
              description:
                "3rd-year CSE student at Sister Nivedita University, constantly learning and building innovative solutions",
              color: "from-blue-500 to-cyan-500",
              stats: "2022-2026",
            },
            {
              icon: Code,
              title: "Technical Expertise",
              description:
                "Blockchain development (EVM + Solana), Full-stack development with Next.js, TypeScript, and modern web technologies",
              color: "from-purple-500 to-pink-500",
              stats: "15+ Projects",
            },
            {
              icon: Rocket,
              title: "Founder & Entrepreneur",
              description:
                "Founder of VeriBee, incubated by OpenCampus OC-I. Building impactful Web3 products and AI-enabled tools that shape the future of decentralized technology",
              color: "from-green-500 to-teal-500",
              stats: "OC-I Incubated",
            },
            {
              icon: Award,
              title: "Hackathon Champion",
              description:
                "Proven track record with 8 hackathon victories across major blockchain platforms and competitions",
              color: "from-yellow-500 to-orange-500",
              stats: "8 Wins",
            },
            {
              icon: Users,
              title: "Community Leadership",
              description:
                "DevRel at HackQuest, Web Dev Lead at Skepsis, mentoring developers and growing Web3 communities",
              color: "from-indigo-500 to-purple-500",
              stats: "Leader",
            },
            {
              icon: Globe,
              title: "Global Impact",
              description:
                "Projects deployed on multiple blockchains, serving users worldwide with innovative decentralized solutions",
              color: "from-pink-500 to-rose-500",
              stats: "Worldwide",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="h-full relative overflow-hidden border-0 shadow-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm group">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>

                <CardContent className="p-6 relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      className={`p-3 rounded-xl bg-gradient-to-r ${item.color} text-white shadow-lg`}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <item.icon className="h-6 w-6" />
                    </motion.div>
                    <span className={`text-sm font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                      {item.stats}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
