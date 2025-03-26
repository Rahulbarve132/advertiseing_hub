import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SimpleHeader } from "@/components/simple-header"
import { SimpleFooter } from "@/components/simple-footer"

export default function AdvertisePage() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] text-[#2b2b2b]">
      <SimpleHeader />

      <main className="container py-8">
        {/* Page Title */}
        <div className="border-b-2 border-black mb-8 pb-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-center">Advertising Opportunities</h1>
          <p className="font-serif text-center text-lg mt-2 italic">Premium spaces for distinguished brands</p>
        </div>

        {/* Introduction */}
        <div className="max-w-3xl mx-auto mb-12">
          <p className="font-serif text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-2">
            The Advertiseing Hub offers a unique advertising platform that combines the timeless elegance of traditional
            print with cutting-edge digital capabilities. Our newspaper-themed environment creates a distinctive context
            for your brand, allowing your message to stand out in an increasingly crowded digital landscape.
          </p>
          <p className="font-serif text-lg leading-relaxed mt-4">
            With carefully crafted placement options and a sophisticated audience, we provide an unparalleled
            opportunity to showcase your products and services in a premium environment that commands attention and
            respect.
          </p>
        </div>

        {/* Advertising Packages */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-center mb-8">Premium Advertising Packages</h2>

          <Tabs defaultValue="front-page" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="front-page" className="font-serif text-lg">
                Front Page
              </TabsTrigger>
              <TabsTrigger value="feature" className="font-serif text-lg">
                Feature Section
              </TabsTrigger>
              <TabsTrigger value="custom" className="font-serif text-lg">
                Custom Solutions
              </TabsTrigger>
            </TabsList>

            <TabsContent value="front-page" className="border border-black p-6 bg-white">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-serif text-2xl font-bold mb-4">Front Page Prominence</h3>
                  <p className="font-serif mb-4">
                    Our most prestigious placement, the Front Page advertisement commands immediate attention and
                    delivers unmatched visibility. Limited to just one advertiser per edition, this exclusive position
                    ensures your brand receives the spotlight it deserves.
                  </p>
                  <ul className="font-serif space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Prime visibility with guaranteed impressions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Exclusive positioning above the fold</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Custom design services included</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Performance analytics and reporting</span>
                    </li>
                  </ul>
                  <div className="space-y-2">
                    <p className="font-serif font-bold">Starting at $2,500 per week</p>
                    <Button className="rounded-none bg-black hover:bg-black/80 text-white">
                      Request This Placement
                    </Button>
                  </div>
                </div>
                <div className="relative aspect-[4/3] border border-black">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Front page advertisement example"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 text-sm font-serif">
                    Example of front page advertisement placement
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="feature" className="border border-black p-6 bg-white">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-serif text-2xl font-bold mb-4">Feature Section Integration</h3>
                  <p className="font-serif mb-4">
                    Strategically position your advertisement alongside relevant content in our feature sections. This
                    contextual placement creates natural alignment between your brand and topics of interest to your
                    target audience.
                  </p>
                  <ul className="font-serif space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Contextual placement in relevant sections</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Multiple size options available</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Enhanced engagement through content alignment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Flexible scheduling options</span>
                    </li>
                  </ul>
                  <div className="space-y-2">
                    <p className="font-serif font-bold">Starting at $1,200 per week</p>
                    <Button className="rounded-none bg-black hover:bg-black/80 text-white">
                      Request This Placement
                    </Button>
                  </div>
                </div>
                <div className="relative aspect-[4/3] border border-black">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Feature section advertisement example"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 text-sm font-serif">
                    Example of feature section advertisement placement
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="custom" className="border border-black p-6 bg-white">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-serif text-2xl font-bold mb-4">Bespoke Advertising Solutions</h3>
                  <p className="font-serif mb-4">
                    For brands with unique requirements, our custom advertising solutions offer unparalleled
                    flexibility. From sponsored content to interactive experiences, we collaborate closely with your
                    team to create distinctive advertising that resonates with our audience.
                  </p>
                  <ul className="font-serif space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Tailored solutions for specific campaign objectives</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Sponsored content opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Interactive advertisement formats</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Dedicated account management</span>
                    </li>
                  </ul>
                  <div className="space-y-2">
                    <p className="font-serif font-bold">Custom pricing based on requirements</p>
                    <Button className="rounded-none bg-black hover:bg-black/80 text-white">
                      Schedule Consultation
                    </Button>
                  </div>
                </div>
                <div className="relative aspect-[4/3] border border-black">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Custom advertisement example"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 text-sm font-serif">
                    Example of custom advertisement implementation
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Audience Information */}
        <section className="mb-16 border border-black p-8 bg-[#f0e6d2]">
          <h2 className="font-serif text-3xl font-bold text-center mb-8">Our Distinguished Audience</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border border-black rounded-none p-6 bg-white hover:shadow-xl transition-shadow">
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black text-white mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold">Demographics</h3>
              </div>
              <ul className="font-serif space-y-2">
                <li className="flex justify-between">
                  <span>Age 25-45:</span>
                  <span className="font-bold">68%</span>
                </li>
                <li className="flex justify-between">
                  <span>Higher Education:</span>
                  <span className="font-bold">82%</span>
                </li>
                <li className="flex justify-between">
                  <span>Household Income $100k+:</span>
                  <span className="font-bold">74%</span>
                </li>
                <li className="flex justify-between">
                  <span>Urban/Suburban:</span>
                  <span className="font-bold">91%</span>
                </li>
              </ul>
            </Card>

            <Card className="border border-black rounded-none p-6 bg-white hover:shadow-xl transition-shadow">
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black text-white mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold">Engagement</h3>
              </div>
              <ul className="font-serif space-y-2">
                <li className="flex justify-between">
                  <span>Average Time on Site:</span>
                  <span className="font-bold">8.5 min</span>
                </li>
                <li className="flex justify-between">
                  <span>Pages per Visit:</span>
                  <span className="font-bold">4.2</span>
                </li>
                <li className="flex justify-between">
                  <span>Return Visitors:</span>
                  <span className="font-bold">65%</span>
                </li>
                <li className="flex justify-between">
                  <span>Ad Interaction Rate:</span>
                  <span className="font-bold">3.8%</span>
                </li>
              </ul>
            </Card>

            <Card className="border border-black rounded-none p-6 bg-white hover:shadow-xl transition-shadow">
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black text-white mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m4.93 4.93 4.24 4.24"></path>
                    <path d="m14.83 9.17 4.24-4.24"></path>
                    <path d="m14.83 14.83 4.24 4.24"></path>
                    <path d="m9.17 14.83-4.24 4.24"></path>
                    <circle cx="12" cy="12" r="4"></circle>
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold">Interests</h3>
              </div>
              <ul className="font-serif space-y-2">
                <li className="flex justify-between">
                  <span>Luxury Goods:</span>
                  <span className="font-bold">High</span>
                </li>
                <li className="flex justify-between">
                  <span>Fine Dining:</span>
                  <span className="font-bold">High</span>
                </li>
                <li className="flex justify-between">
                  <span>Arts & Culture:</span>
                  <span className="font-bold">Very High</span>
                </li>
                <li className="flex justify-between">
                  <span>Travel & Leisure:</span>
                  <span className="font-bold">High</span>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-black text-white p-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Ready to Elevate Your Brand?</h2>
          <p className="font-serif text-lg mb-6 max-w-2xl mx-auto">
            Contact our advertising team today to discuss how The Advertiseing Hub can showcase your brand in a premium
            environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-black hover:bg-white/90 rounded-none text-lg px-8">
              <Link href="/contact">Contact Sales Team</Link>
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10 rounded-none text-lg px-8">
              <Link href="/media-kit">Download Media Kit</Link>
            </Button>
          </div>
        </section>
      </main>

      
    </div>
  )
}

