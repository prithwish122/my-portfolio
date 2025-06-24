import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Prithwish Chatterjee - Blockchain Developer & Web3 Innovator",
  description:
    "Portfolio of Prithwish Chatterjee, a passionate blockchain developer and 8x hackathon winner specializing in EVM & Solana ecosystems. Building the future of Web3.",
  keywords: "blockchain developer, web3, solana, ethereum, hackathon winner, full-stack developer, next.js",
  authors: [{ name: "Prithwish Chatterjee" }],
  openGraph: {
    title: "Prithwish Chatterjee - Blockchain Developer & Web3 Innovator",
    description: "8x Hackathon Winner | Blockchain Developer | Web3 Innovator",
    type: "website",
  },
    generator: ''
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
