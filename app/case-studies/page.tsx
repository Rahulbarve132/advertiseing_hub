import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { NewspaperHeader } from "@/components/newspaper-header"
import { NewspaperFooter } from "@/components/newspaper-footer"

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#2b2b2b]">
      <NewspaperHeader />

      <main className="container py-8">
        {/* Page Title */}
        <div className="border-b-2 border-black mb-8 pb-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-center">Success Stories</h1>
          <p className="font-serif text-center text-lg mt-2 italic">Real results from our distinguished advertisers</p>
        </div>

        {/* Introduction */}
        <div className="max-w-3xl mx-auto mb-12">
          <p className="font-serif text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-2">
            The true measure of an advertising platform lies in the results it delivers. At The Advertiseing Hub, we take
            pride in the success our clients achieve through our premium newspaper-themed environment. These case
            studies showcase real campaigns and the measurable impact they've had for brands across various industries.
          </p>
        </div>

        {/* Featured Case Study */}
        <section className="mb-16 border border-black bg-white p-8">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-black text-white px-4 py-1 font-serif text-sm">FEATURED CASE STUDY</div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-4">
                Vintage Timepieces: 300% Increase in Brand Recognition
              </h2>
              <div className="mb-4">
                <span className="font-serif italic">Industry: Luxury Watches</span>
                <span className="mx-2">•</span>
                <span className="font-serif italic">Campaign Duration: 3 Months</span>
              </div>

              <div className="space-y-4 font-serif">
                <p>
                  Lawrence Timeworks, a boutique watchmaker specializing in vintage-inspired timepieces, faced a
                  significant challenge: despite their exceptional craftsmanship, they struggled to differentiate
                  themselves in a crowded luxury market dominated by established brands.
                </p>

                <h3 className="font-bold text-xl">The Challenge</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Limited brand recognition among target demographic</li>
                  <li>Need to convey premium craftsmanship and heritage</li>
                  <li>Competing against established luxury watch brands</li>
                </ul>

                <h3 className="font-bold text-xl">Our Approach</h3>
                <p>
                  We developed a comprehensive front page advertising campaign that leveraged the natural alignment
                  between our retro newspaper aesthetic and Lawrence Timeworks' vintage-inspired designs. The campaign
                  included:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Weekly front page placements with rotating creative</li>
                  <li>Custom editorial-style content highlighting craftsmanship</li>
                  <li>Interactive elements showcasing watch movements</li>
                </ul>

                <h3 className="font-bold text-xl">The Results</h3>
                <div className="grid grid-cols-3 gap-4 my-4">
                  <div className="border border-black p-4 text-center">
                    <div className="text-3xl font-bold">300%</div>
                    <div className="text-sm">Increase in Brand Recognition</div>
                  </div>
                  <div className="border border-black p-4 text-center">
                    <div className="text-3xl font-bold">215%</div>
                    <div className="text-sm">Increase in Website Traffic</div>
                  </div>
                  <div className="border border-black p-4 text-center">
                    <div className="text-3xl font-bold">42%</div>
                    <div className="text-sm">Increase in Conversions</div>
                  </div>
                </div>

                <blockquote className="border-l-4 border-black pl-4 italic">
                  "The vintage aesthetic combined with modern functionality created the perfect showcase for our luxury
                  timepieces. The results exceeded our expectations, establishing us as a recognizable name in the
                  luxury watch market."
                  <footer className="mt-2 not-italic">— Jonathan Lawrence, Founder, Lawrence Timeworks</footer>
                </blockquote>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative aspect-[4/3] border border-black">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Lawrence Timeworks advertisement"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square border border-black">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Lawrence Timeworks advertisement detail"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square border border-black">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Lawrence Timeworks advertisement detail"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="border border-black p-4 bg-[#f0e6d2]">
                <h3 className="font-serif text-xl font-bold mb-2">Campaign Highlights</h3>
                <ul className="font-serif space-y-2">
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span>Perfect alignment between brand aesthetic and platform</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span>Consistent messaging across multiple touchpoints</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span>Strategic timing with luxury seasonal buying patterns</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Case Studies */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-center mb-8">More Success Stories</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border border-black rounded-none overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative aspect-[3/2]">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Vintage Apparel Co. case study"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold mb-2">Vintage Apparel Co.</h3>
                <p className="font-serif text-sm mb-4">
                  <span>Fashion Retailer</span>
                  <span className="mx-2">•</span>
                  <span>6-Month Campaign</span>
                </p>
                <p className="font-serif mb-4">
                  How a sustainable fashion brand leveraged our feature section placements to increase their customer
                  base by 250% and establish themselves as industry leaders.
                </p>
                <div className="space-y-2 font-serif">
                  <div className="flex justify-between text-sm">
                    <span>Brand Awareness:</span>
                    <span className="font-bold">+185%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>New Customers:</span>
                    <span className="font-bold">+250%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Revenue Growth:</span>
                    <span className="font-bold">+120%</span>
                  </div>
                </div>
                <Button className="w-full rounded-none mt-4">
                  <Link href="/case-studies/vintage-apparel">Read Full Case Study</Link>
                </Button>
              </div>
            </Card>

            <Card className="border border-black rounded-none overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative aspect-[3/2]">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Artisanal Spirits case study"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold mb-2">Artisanal Spirits</h3>
                <p className="font-serif text-sm mb-4">
                  <span>Craft Distillery</span>
                  <span className="mx-2">•</span>
                  <span>4-Month Campaign</span>
                </p>
                <p className="font-serif mb-4">
                  A craft distillery's journey to national recognition through strategic advertising that highlighted
                  their traditional production methods and unique flavor profiles.
                </p>
                <div className="space-y-2 font-serif">
                  <div className="flex justify-between text-sm">
                    <span>Market Penetration:</span>
                    <span className="font-bold">+165%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Distribution Deals:</span>
                    <span className="font-bold">+12 New</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Brand Perception:</span>
                    <span className="font-bold">Premium</span>
                  </div>
                </div>
                <Button className="w-full rounded-none mt-4">
                  <Link href="/case-studies/artisanal-spirits">Read Full Case Study</Link>
                </Button>
              </div>
            </Card>

            <Card className="border border-black rounded-none overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative aspect-[3/2]">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Heritage Hotels case study"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold mb-2">Heritage Hotels</h3>
                <p className="font-serif text-sm mb-4">
                  <span>Boutique Hospitality</span>
                  <span className="mx-2">•</span>
                  <span>12-Month Campaign</span>
                </p>
                <p className="font-serif mb-4">
                  How a collection of historic boutique hotels used our custom advertising solutions to increase
                  bookings during off-peak seasons and build a loyal customer base.
                </p>
                <div className="space-y-2 font-serif">
                  <div className="flex justify-between text-sm">
                    <span>Off-Season Bookings:</span>
                    <span className="font-bold">+78%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Customer Retention:</span>
                    <span className="font-bold">+45%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Revenue Per Room:</span>
                    <span className="font-bold">+32%</span>
                  </div>
                </div>
                <Button className="w-full rounded-none mt-4">
                  <Link href="/case-studies/heritage-hotels">Read Full Case Study</Link>
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Industry Breakdown */}
        <section className="mb-16 border border-black p-8 bg-[#f0e6d2]">
          <h2 className="font-serif text-3xl font-bold text-center mb-8">Success Across Industries</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="border border-black p-4 bg-white hover:shadow-xl transition-shadow">
                <h3 className="font-serif text-xl font-bold mb-2">Luxury & Fashion</h3>
                <p className="font-serif">
                  Our premium aesthetic creates the perfect environment for luxury brands to showcase their products.
                  Fashion and luxury advertisers consistently report higher engagement and conversion rates compared to
                  traditional digital platforms.
                </p>
                <div className="mt-4 h-2 bg-gray-200">
                  <div className="h-2 bg-black" style={{ width: "92%" }}></div>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span className="font-serif">Average ROI</span>
                  <span className="font-serif font-bold">92%</span>
                </div>
              </div>

              <div className="border border-black p-4 bg-white hover:shadow-xl transition-shadow">
                <h3 className="font-serif text-xl font-bold mb-2">Food & Beverage</h3>
                <p className="font-serif">
                  Artisanal food producers and craft beverage companies find our platform particularly effective for
                  communicating their commitment to tradition and quality, resulting in increased market presence.
                </p>
                <div className="mt-4 h-2 bg-gray-200">
                  <div className="h-2 bg-black" style={{ width: "87%" }}></div>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span className="font-serif">Average ROI</span>
                  <span className="font-serif font-bold">87%</span>
                </div>
              </div>

              <div className="border border-black p-4 bg-white hover:shadow-xl transition-shadow">
                <h3 className="font-serif text-xl font-bold mb-2">Travel & Hospitality</h3>
                <p className="font-serif">
                  Hotels, resorts, and travel experiences that emphasize heritage and unique experiences see exceptional
                  results through our platform, particularly with our affluent, travel-oriented audience.
                </p>
                <div className="mt-4 h-2 bg-gray-200">
                  <div className="h-2 bg-black" style={{ width: "85%" }}></div>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span className="font-serif">Average ROI</span>
                  <span className="font-serif font-bold">85%</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border border-black p-4 bg-white hover:shadow-xl transition-shadow">
                <h3 className="font-serif text-xl font-bold mb-2">Arts & Culture</h3>
                <p className="font-serif">
                  Galleries, museums, and cultural events benefit from our highly engaged audience with strong interests
                  in arts and culture, resulting in increased attendance and participation.
                </p>
                <div className="mt-4 h-2 bg-gray-200">
                  <div className="h-2 bg-black" style={{ width: "94%" }}></div>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span className="font-serif">Average ROI</span>
                  <span className="font-serif font-bold">94%</span>
                </div>
              </div>

              <div className="border border-black p-4 bg-white hover:shadow-xl transition-shadow">
                <h3 className="font-serif text-xl font-bold mb-2">Home & Design</h3>
                <p className="font-serif">
                  Interior designers, furniture makers, and home goods brands leverage our platform to showcase their
                  aesthetic and craftsmanship to an audience that values quality and design.
                </p>
                <div className="mt-4 h-2 bg-gray-200">
                  <div className="h-2 bg-black" style={{ width: "83%" }}></div>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span className="font-serif">Average ROI</span>
                  <span className="font-serif font-bold">83%</span>
                </div>
              </div>

              <div className="border border-black p-4 bg-white hover:shadow-xl transition-shadow">
                <h3 className="font-serif text-xl font-bold mb-2">Financial Services</h3>
                <p className="font-serif">
                  Wealth management firms and premium financial services connect with our affluent audience through
                  sophisticated messaging that emphasizes heritage and stability.
                </p>
                <div className="mt-4 h-2 bg-gray-200">
                  <div className="h-2 bg-black" style={{ width: "79%" }}></div>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span className="font-serif">Average ROI</span>
                  <span className="font-serif font-bold">79%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-black text-white p-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="font-serif text-lg mb-6 max-w-2xl mx-auto">
            Join our distinguished advertisers and experience the exceptional results that The Advertiseing Hub delivers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-black hover:bg-white/90 rounded-none text-lg px-8">
              <Link href="/contact">Contact Sales Team</Link>
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10 rounded-none text-lg px-8">
              <Link href="/advertise">View Advertising Options</Link>
            </Button>
          </div>
        </section>
      </main>

    </div>
  )
}

