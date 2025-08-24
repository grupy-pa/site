import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3 } from "next/font/google"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: "Python Pará",
  description:
    "Comunidade de usuários e desenvolvedores que utilizam Python no Pará 🏳️‍ Comunidade oficialmente na lista de comunidades locais Python: python.org.br",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${playfairDisplay.variable} ${sourceSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
