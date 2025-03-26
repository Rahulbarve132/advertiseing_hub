import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Menu, Search } from "lucide-react"

export function SimpleHeader() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <>
      {/* Top Bar */}
    
      {/* Masthead */}
      <header className="container py-6 text-center border-b border-black">
        <div className="flex justify-between items-center">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
          <div className="hidden md:block w-1/4"></div>
          <Link href="/" className="mx-auto">
            <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight uppercase">The Daily Chronicle</h1>
          </Link>
          <div className="hidden md:block w-1/4 text-right">
            <span className="font-serif italic text-sm">"All the News That's Fit to Print"</span>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="container border-b border-black">
        <ul className="flex justify-center overflow-x-auto whitespace-nowrap py-3 gap-8 font-serif text-sm uppercase tracking-wider">
          <li>
            <Link href="/" className="hover:underline underline-offset-4 decoration-2">
              Home
            </Link>
          </li>
          <li>
            <Link href="/advertise" className="hover:underline underline-offset-4 decoration-2">
              Advertise
            </Link>
          </li>
          <li>
            <Link href="/case-studies" className="hover:underline underline-offset-4 decoration-2">
              Case Studies
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="hover:underline underline-offset-4 decoration-2">
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline underline-offset-4 decoration-2">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Breaking News Banner */}
      <div className="bg-black text-white py-2 overflow-hidden">
        <div className="container flex items-center gap-4">
          <span className="bg-red-600 text-white px-2 py-1 text-xs font-bold uppercase whitespace-nowrap">
            Breaking News
          </span>
          <div className="overflow-hidden whitespace-nowrap w-full">
            <div className="inline-block animate-marquee font-serif">
              <span className="mx-8">Premium advertising spaces now available for Q2</span>
              <span className="mx-8">New interactive ad formats launching next month</span>
              <span className="mx-8">Limited-time offer: 20% off premium placements</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

