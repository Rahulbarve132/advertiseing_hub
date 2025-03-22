"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"

export function LoginForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    // In a real application, you would call a server action or API endpoint here
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // For demo purposes, we'll determine the role based on the email
      // In a real app, this would come from your authentication system
      let role = "user"
      if (email.includes("admin")) {
        role = "admin"
      } else if (email.includes("advertiser")) {
        role = "advertiser"
      }

      toast({
        title: "Login successful!",
        description: `Welcome back to The Daily Chronicle!`,
      })

      // Redirect to the appropriate dashboard based on role
      router.push(`/dashboard/${role}`)
    } catch (error) {
      toast({
        title: "Error",
        description: "Invalid email or password. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <Card className="border-2">
        <CardContent className="pt-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="name@example.com"
              required
              disabled={isLoading}
              className="border-2"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link href="/forgot-password" className="text-xs text-muted-foreground underline">
                Forgot password?
              </Link>
            </div>
            <Input id="password" name="password" type="password" required disabled={isLoading} className="border-2" />
          </div>
          <Button type="submit" className="w-full uppercase" disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign in"}
          </Button>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" type="button" disabled={isLoading} className="border-2">
              Google
            </Button>
            <Button variant="outline" type="button" disabled={isLoading} className="border-2">
              Apple
            </Button>
          </div>
        </CardContent>
      </Card>
    </form>
  )
}

