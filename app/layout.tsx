import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "The Daily Chronicle - Premium Advertising Platform",
  description: "A retro newspaper-themed advertising platform for distinguished brands",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">

      
      <body className={inter.className}>
      <Header/>
        {children}
        <SimpleFooter/>
        </body>
    </html>
  )
}



import './globals.css'
import { Header } from "@/components/Header"
import { SimpleFooter } from "@/components/simple-footer"


