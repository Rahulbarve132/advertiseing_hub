"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Menu, X, LayoutDashboard, Bell, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#f8f5e9] shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo - visible on all screens */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-serif font-bold text-gray-900">The Advertiseing Hub</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
          {/* Search Bar */}
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input
              type="search"
              placeholder="Search advertisements..."
              className="pl-10 bg-white/80 border-gray-200 focus:bg-white"
            />
          </div>

          

          <div className="flex items-center gap-8 px-4">
          <div>
            <Link href="/" className="text-sm font-semibold">
              Home
            </Link>
          </div>
          <div>
            <Link href="/advertise" className="text-sm font-semibold">
              Advertise
            </Link>
          </div>
          <div className="w-24">
            <Link href="/case-studies" className="text-sm font-semibold">
              Case Studies
            </Link>
          </div>
          <div>
            <Link href="/gallery" className="text-sm font-semibold">
              Gallery
            </Link>
          </div>
          <div className="flex items-center gap-1">
            <Link href="/contact" className="text-sm font-semibold">
              Contact
            </Link>
          </div>
          </div>
        

          

          <div className="flex items-center gap-2">
            <Link href="/login">
            <Button variant="outline" className="hidden sm:flex">
              Sign In
            </Button>
            </Link>
            <Link href="/signup">
            <Button>Register</Button></Link>
            
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center space-x-2">
          {/* Mobile Search Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSearchExpanded(!isSearchExpanded)}
            className="relative"
          >
            <Search className="h-5 w-5" />
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetTitle></SheetTitle>
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between py-4 border-b">
                  <span className="text-lg font-medium">Menu</span>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                </div>

                <nav className="flex flex-col gap-4 py-6">
                  <Link
                    href="/dashboard"
                    className="flex items-center gap-3 px-4 py-2 text-lg hover:bg-gray-100 rounded-md"
                  >
                    <LayoutDashboard className="h-5 w-5" />
                    Dashboard
                  </Link>
                  <Link
                    href="/notifications"
                    className="flex items-center gap-3 px-4 py-2 text-lg hover:bg-gray-100 rounded-md"
                  >
                    <Bell className="h-5 w-5" />
                    Notifications
                  </Link>
                  <div className="px-4 py-2">
                    <p className="mb-2 text-sm font-medium text-gray-500">Categories</p>
                    <div className="flex flex-col gap-2 pl-2">
                      <Link href="/category/cars" className="py-1 hover:underline">
                        Cars
                      </Link>
                      <Link href="/category/electronics" className="py-1 hover:underline">
                        Electronics
                      </Link>
                      <Link href="/category/real-estate" className="py-1 hover:underline">
                        Real Estate
                      </Link>
                      <Link href="/category/jobs" className="py-1 hover:underline">
                        Jobs
                      </Link>
                      <Link href="/category/services" className="py-1 hover:underline">
                        Services
                      </Link>
                    </div>
                  </div>
                </nav>

                <div className="mt-auto border-t py-4 space-y-4">
                  <Button className="w-full">Register</Button>
                  <Button variant="outline" className="w-full">
                    Sign In
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Mobile Search Bar - Expandable */}
      {isSearchExpanded && (
        <div className="md:hidden px-4 py-2 bg-[#f8f5e9] border-t border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input
              type="search"
              placeholder="Search advertisements..."
              className="pl-10 bg-white/80 border-gray-200 focus:bg-white w-full"
              autoFocus
            />
          </div>
        </div>
      )}
    </header>
  )
}

