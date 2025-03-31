import Link from "next/link"
import Image from "next/image"
import { Coffee, Mail, Menu, Search, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AdvertisementCarousel } from "@/components/advertisement-carousel"

export default function Home() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#2b2b2b]">
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

      {/* Main Content */}
      <main className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Featured Story */}
          <div className="md:col-span-8 border-r border-black pr-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="font-serif text-4xl font-bold leading-tight">
                  Premium Advertising Space Now Available for Distinguished Brands
                </h2>
                <p className="font-serif text-lg italic">
                  Exclusive opportunities for businesses seeking to make a lasting impression
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-bold">By Jonathan Pressman</span>
                  <span>•</span>
                  <span>Advertising Editor</span>
                </div>
              </div>

              <div className="relative aspect-[16/9] overflow-hidden border border-black">
                <Image
                  src="/placeholder.svg?height=600&width=1200"
                  alt="Vintage advertisement showcase"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 text-sm font-serif">
                  A collection of premium advertisements from our distinguished clients
                </div>
              </div>

              <p className="font-serif text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-2">
                In an age of digital saturation, The Advertiseing Hub offers a refreshing return to the golden era of
                advertising. Our premium newspaper-themed platform combines the timeless elegance of traditional print
                with cutting-edge digital capabilities, creating an unparalleled advertising experience for discerning
                brands.
              </p>

              <p className="font-serif text-lg leading-relaxed">
                "The attention to detail and the unique aesthetic of The Advertiseing Hub creates an environment where
                advertisements don't just compete for attention—they command it," says Marketing Director Elizabeth
                Harlow. "Our clients report engagement rates far exceeding industry standards."
              </p>

              <div className="bg-[#f0e6d2] border border-black p-6 my-8">
                <h3 className="font-serif text-2xl font-bold mb-4 text-center">Premium Advertising Packages</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="border border-black bg-white p-4 text-center hover:shadow-xl transition-shadow">
                    <h4 className="font-serif text-xl font-bold">Front Page</h4>
                    <p className="font-serif my-2">Prime visibility with guaranteed impressions</p>
                    <Button className="rounded-none bg-black hover:bg-black/80 text-white mt-2">Learn More</Button>
                  </div>
                  <div className="border border-black bg-white p-4 text-center hover:shadow-xl transition-shadow">
                    <h4 className="font-serif text-xl font-bold">Feature Section</h4>
                    <p className="font-serif my-2">Contextual placement alongside relevant content</p>
                    <Button className="rounded-none bg-black hover:bg-black/80 text-white mt-2">Learn More</Button>
                  </div>
                  <div className="border border-black bg-white p-4 text-center hover:shadow-xl transition-shadow">
                    <h4 className="font-serif text-xl font-bold">Custom Insert</h4>
                    <p className="font-serif my-2">Bespoke advertising solutions for unique campaigns</p>
                    <Button className="rounded-none bg-black hover:bg-black/80 text-white mt-2">Learn More</Button>
                  </div>
                </div>
              </div>

              <p className="font-serif text-lg leading-relaxed">
                With a dedicated team of design specialists, The Advertiseing Hub works closely with advertisers to
                ensure each placement not only captures attention but resonates with our sophisticated audience. The
                result is advertising that feels less like an interruption and more like a natural extension of the
                reading experience.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-4">
            <div className="space-y-8">
              {/* Ad Space Showcase */}
              <div className="border border-black p-4 bg-[#f0e6d2]">
                <h3 className="font-serif text-xl font-bold text-center border-b border-black pb-2 mb-4">
                  Featured Advertisement
                </h3>
                <div className="relative aspect-[4/5] overflow-hidden border border-black mb-4">
                  <Image
                    src="/placeholder.svg?height=500&width=400"
                    alt="Premium advertisement space"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="font-serif text-sm italic text-center">This premium space could feature your brand</p>
                <Button className="w-full rounded-none bg-black hover:bg-black/80 text-white mt-4">
                  Reserve This Space
                </Button>
              </div>

              {/* Newsletter Signup */}
              <div className="border border-black p-4">
                <h3 className="font-serif text-xl font-bold text-center mb-4">Subscribe to Our Newsletter</h3>
                <p className="font-serif text-sm mb-4">
                  Stay updated with our latest advertising opportunities and special rates.
                </p>
                <div className="space-y-2">
                  <Input placeholder="Your Email Address" className="rounded-none border-black" />
                  <Button className="w-full rounded-none">Subscribe Now</Button>
                </div>
              </div>

              {/* Quick Links */}
              <div className="border border-black p-4">
                <h3 className="font-serif text-xl font-bold text-center border-b border-black pb-2 mb-4">
                  Advertising Resources
                </h3>
                <ul className="space-y-2 font-serif">
                  <li>
                    <Link href="#" className="flex items-center hover:underline">
                      → Media Kit Download
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex items-center hover:underline">
                      → Advertising Guidelines
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex items-center hover:underline">
                      → Success Stories
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex items-center hover:underline">
                      → Contact Our Ad Team
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex items-center hover:underline">
                      → Pricing Information
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Coffee Break */}
              <div className="border border-black p-4 bg-[#f0e6d2] text-center">
                <Coffee className="h-8 w-8 mx-auto mb-2" />
                <h3 className="font-serif text-lg font-bold">Coffee Break</h3>
                <p className="font-serif text-sm italic">
                  "Good advertising does not just circulate information. It penetrates the public mind with desires and
                  belief."
                </p>
                <p className="font-serif text-sm mt-2">— William Bernbach</p>
              </div>
            </div>
          </div>
        </div>


        {/* Featured Advertisements */}
        <section className="my-12 border-t  border-black py-8">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-8">Featured Advertisements</h2>
          <AdvertisementCarousel />
        </section>

        {/* Testimonials Section */}
        <section className="my-12 border-t border-b border-black py-8">
          <h2 className="font-serif text-3xl font-bold text-center mb-8">What Our Advertisers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-black p-6 bg-white hover:shadow-xl transition-shadow">
              <p className="font-serif text-lg italic mb-4">
                "The vintage aesthetic combined with modern functionality created the perfect showcase for our luxury
                timepieces."
              </p>
              <div className="flex items-center gap-2">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center font-serif font-bold text-xl">
                  L
                </div>
                <div>
                  <p className="font-serif font-bold">Lawrence Timeworks</p>
                  <p className="font-serif text-sm">Luxury Watchmaker</p>
                </div>
              </div>
            </div>
            <div className="border border-black p-6 bg-white hover:shadow-xl transition-shadow">
              <p className="font-serif text-lg italic mb-4">
                "Our campaign in The Advertiseing Hub delivered a 300% increase in brand recognition among our target
                demographic."
              </p>
              <div className="flex items-center gap-2">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center font-serif font-bold text-xl">
                  V
                </div>
                <div>
                  <p className="font-serif font-bold">Vintage Apparel Co.</p>
                  <p className="font-serif text-sm">Fashion Retailer</p>
                </div>
              </div>
            </div>
            <div className="border border-black p-6 bg-white hover:shadow-xl transition-shadow">
              <p className="font-serif text-lg italic mb-4">
                "The attention to detail and premium feel of this platform perfectly aligns with our brand values and
                aesthetic."
              </p>
              <div className="flex items-center gap-2">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center font-serif font-bold text-xl">
                  A
                </div>
                <div>
                  <p className="font-serif font-bold">Artisanal Spirits</p>
                  <p className="font-serif text-sm">Craft Distillery</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="my-12 bg-black text-white p-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Secure Your Premium Advertising Space Today
          </h2>
          <p className="font-serif text-lg mb-6 max-w-2xl mx-auto">
            Join distinguished brands that understand the value of premium presentation and targeted reach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-black hover:border-white hover:text-white hover:bg-white/10 rounded-none text-lg px-8">
              Request Media Kit
            </Button>
            <Button variant="outline" className="text-black border-white hover:text-white hover:bg-white/10 rounded-none text-lg px-8">
              Contact Sales Team
            </Button>
          </div>
        </section>
      </main>

     
    </div>
  )
}

