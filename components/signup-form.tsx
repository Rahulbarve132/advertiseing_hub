"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/components/ui/use-toast"

export function SignupForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)
    const email = formData.get("email") as string
    const password = formData.get("password") as string
    const fullName = formData.get("name") as string
    const companyName = formData.get("company") as string
    const userRole = formData.get("role") as string

    // Convert role to match API expectations (uppercase)
    const role = userRole.toUpperCase()

    try {
      // Call the actual API endpoint
      const response = await fetch('https://advertisemedia.onrender.com/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fullName,
          companyName,
          email,
          password,
          role
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Registration failed');
      }

      const data = await response.json();

      toast({
        title: "Account created!",
        description: `Welcome to The Advertising Hub, ${fullName}!`,
      })

      // Redirect to the appropriate dashboard based on role
      router.push(`/dashboard/${userRole.toLowerCase()}`);
    } catch (error) {
      toast({
        title: "Registration Error",
        description: error instanceof Error ? error.message : "Something went wrong. Please try again.",
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
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" placeholder="John Doe" required disabled={isLoading} className="border-2" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company Name</Label>
              <Input
                id="company"
                name="company"
                placeholder="Acme Inc."
                required
                disabled={isLoading}
                className="border-2"
              />
            </div>
          </div>
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
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" required disabled={isLoading} className="border-2" />
          </div>
          <div className="space-y-2">
            <Label>Account Type</Label>
            <RadioGroup defaultValue="advertiser" name="role" required>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="advertiser" id="advertiser" />
                <Label htmlFor="advertiser" className="font-normal">
                  Advertiser
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="user" id="user" />
                <Label htmlFor="user" className="font-normal">
                  Regular User
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="admin" id="admin" />
                <Label htmlFor="admin" className="font-normal">
                  Admin (Internal Staff Only)
                </Label>
              </div>
            </RadioGroup>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="terms" className="h-4 w-4 rounded border-2" required />
            <Label htmlFor="terms" className="text-sm font-normal">
              I agree to the{" "}
              <Link href="/terms" className="underline hover:text-primary">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="underline hover:text-primary">
                Privacy Policy
              </Link>
            </Label>
          </div>
          <Button type="submit" className="w-full uppercase" disabled={isLoading}>
            {isLoading ? "Creating account..." : "Create account"}
          </Button>
        </CardContent>
      </Card>
    </form>
  )
}