import type React from "react"
import { Inter } from "next/font/google"
import './globals.css'
import { Header } from "@/components/Header"
import { SimpleFooter } from "@/components/simple-footer"
import { AuthProvider } from "@/contexts/auth-context"



const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "The Advertiseing Hub - Premium Advertising Platform",
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
      <AuthProvider>
      <Header/>
        {children}
        <SimpleFooter/>
      </AuthProvider>
        </body>
    </html>
  )
}