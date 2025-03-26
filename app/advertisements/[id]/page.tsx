import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Heart, Share2, Flag, MapPin, Calendar, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

// Sample advertisement data - in a real app, this would come from a database
const advertisements = [
  {
    id: 1,
    title: "Hyundai i10 Magna O",
    image: "/placeholder.svg?height=400&width=600",
    price: "₹ 2,80,000",
    details: "2015 - 62,950 km",
    description: "Hyundai i10 Magna O, 2015, Petrol",
    fullDescription:
      "This Hyundai i10 Magna O is in excellent condition with regular servicing and maintenance. Single owner vehicle with all original documents. Features include power steering, power windows, central locking, and AC in perfect working condition. New tires installed 6 months ago. Fuel efficiency of approximately 18 km/l in city driving.",
    location: "EDAKKAD, MUZHAPPILANGAD",
    date: "NOV 27",
    featured: true,
    category: "cars",
    seller: {
      name: "Rahul Sharma",
      memberSince: "2019",
      responseRate: "95%",
      phone: "+91 98765 43210",
    },
    specifications: [
      { label: "Make", value: "Hyundai" },
      { label: "Model", value: "i10 Magna O" },
      { label: "Year", value: "2015" },
      { label: "Fuel Type", value: "Petrol" },
      { label: "KM Driven", value: "62,950 km" },
      { label: "Transmission", value: "Manual" },
      { label: "Color", value: "Red" },
      { label: "No. of Owners", value: "1" },
    ],
    additionalImages: [
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
    ],
  },
  {
    id: 2,
    title: "Maruti Suzuki Baleno",
    image: "/placeholder.svg?height=400&width=600",
    price: "₹ 6,10,000",
    details: "2015 - 120,000 km",
    description: "Maruti Suzuki Baleno, 2015, Diesel",
    fullDescription:
      "Well-maintained Maruti Suzuki Baleno with complete service history from authorized service center. Diesel variant with excellent mileage of 22-24 km/l on highways. Features include touchscreen infotainment system, reverse parking camera, alloy wheels, and airbags. All documents are up to date with insurance valid until December 2023.",
    location: "SALEM EAST OLD, SALEM",
    date: "FEB 22",
    featured: true,
    category: "cars",
    seller: {
      name: "Priya Patel",
      memberSince: "2018",
      responseRate: "98%",
      phone: "+91 87654 32109",
    },
    specifications: [
      { label: "Make", value: "Maruti Suzuki" },
      { label: "Model", value: "Baleno" },
      { label: "Year", value: "2015" },
      { label: "Fuel Type", value: "Diesel" },
      { label: "KM Driven", value: "120,000 km" },
      { label: "Transmission", value: "Manual" },
      { label: "Color", value: "Blue" },
      { label: "No. of Owners", value: "2" },
    ],
    additionalImages: [
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
    ],
  },
  {
    id: 3,
    title: "iPhone 14 Pro",
    image: "/placeholder.svg?height=400&width=600",
    price: "₹ 14,699",
    details: "iPhone 14pro bumper special offer",
    description: "iPhone 14pro bumper special offer (30% off)",
    fullDescription:
      "Brand new iPhone 14 Pro bumper case with 30% discount. Premium quality material that provides excellent protection against drops and scratches. Compatible with wireless charging. Available in multiple colors. Limited time offer.",
    location: "SAMUDRAPUR, MAHARASHTRA",
    date: "TODAY",
    featured: false,
    category: "electronics",
    seller: {
      name: "Tech Accessories",
      memberSince: "2020",
      responseRate: "100%",
      phone: "+91 76543 21098",
    },
    specifications: [
      { label: "Brand", value: "Apple" },
      { label: "Model Compatibility", value: "iPhone 14 Pro" },
      { label: "Material", value: "TPU + Polycarbonate" },
      { label: "Color Options", value: "Black, Blue, Clear" },
      { label: "Wireless Charging", value: "Compatible" },
      { label: "Warranty", value: "6 months" },
    ],
    additionalImages: [
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
    ],
  },
  {
    id: 4,
    title: "iPhone 12",
    image: "/placeholder.svg?height=400&width=600",
    price: "₹ 11,100",
    details: "iPhone 12",
    description: "iPhone 12 in excellent condition",
    fullDescription:
      "iPhone 12 in excellent condition with 128GB storage. Battery health at 89%. Comes with original charger and box. No scratches or dents. Face ID works perfectly. iOS updated to the latest version. Screen protector and case included.",
    location: "SAMUDRAPUR, MAHARASHTRA",
    date: "YESTERDAY",
    featured: false,
    category: "electronics",
    seller: {
      name: "Amit Kumar",
      memberSince: "2021",
      responseRate: "92%",
      phone: "+91 65432 10987",
    },
    specifications: [
      { label: "Brand", value: "Apple" },
      { label: "Model", value: "iPhone 12" },
      { label: "Storage", value: "128GB" },
      { label: "Color", value: "Black" },
      { label: "Battery Health", value: "89%" },
      { label: "Condition", value: "Excellent" },
      { label: "Warranty", value: "None" },
    ],
    additionalImages: [
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
    ],
  },
  // Add more advertisements as needed
]

export default function AdvertisementDetail({ params }: { params: { id: string } }) {
  const id = Number.parseInt(params.id)
  const advertisement = advertisements.find((ad) => ad.id === id)

  if (!advertisement) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f5e9]">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Advertisement Not Found</h1>
          <p className="mb-6">The advertisement you're looking for doesn't exist or has been removed.</p>
          <Link href="/">
            <Button>Return to Home</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-[#f8f5e9] p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Advertisements
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            <div className="space-y-6">
              <div className="relative aspect-video rounded-md overflow-hidden">
                <Image
                  src={advertisement.image || "/placeholder.svg"}
                  alt={advertisement.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="grid grid-cols-3 gap-2">
                {advertisement.additionalImages.map((img, index) => (
                  <div key={index} className="relative aspect-square rounded-md overflow-hidden border border-gray-200">
                    <Image
                      src={img || "/placeholder.svg"}
                      alt={`${advertisement.title} - Image ${index + 2}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start">
                  <h1 className="text-3xl font-bold text-gray-900">{advertisement.price}</h1>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="icon">
                      <Heart className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Share2 className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Flag className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <h2 className="text-xl font-medium mt-2">{advertisement.description}</h2>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{advertisement.location}</span>
                  <span className="mx-2">•</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Posted: {advertisement.date}</span>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-3">Description</h3>
                <p className="text-gray-700">{advertisement.fullDescription}</p>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-3">Specifications</h3>
                <div className="grid grid-cols-2 gap-y-2">
                  {advertisement.specifications.map((spec, index) => (
                    <div key={index} className="flex items-start">
                      <Info className="h-4 w-4 mr-2 text-gray-400 mt-1" />
                      <div>
                        <span className="text-gray-500 text-sm">{spec.label}:</span>
                        <span className="ml-1 font-medium">{spec.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-3">Seller Information</h3>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xl font-semibold mr-4">
                    {advertisement.seller.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">{advertisement.seller.name}</p>
                    <p className="text-sm text-gray-500">Member since {advertisement.seller.memberSince}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="text-gray-500">Response Rate:</span>
                    <span className="ml-2 font-medium">{advertisement.seller.responseRate}</span>
                  </p>
                </div>
                <Button className="w-full mt-4">Contact Seller</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-serif mb-6">Similar Advertisements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {advertisements
              .filter((ad) => ad.id !== id && ad.category === advertisement.category)
              .slice(0, 4)
              .map((ad) => (
                <Link
                  href={`/advertisements/${ad.id}`}
                  key={ad.id}
                  className="rounded-md border border-gray-200 bg-white overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative h-40 w-full">
                    <Image src={ad.image || "/placeholder.svg"} alt={ad.title} fill className="object-cover" />
                    {ad.featured && (
                      <div className="absolute top-2 left-2 bg-amber-400 text-xs font-semibold px-2 py-1 rounded">
                        FEATURED
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900">{ad.price}</h3>
                    <p className="text-sm text-gray-500 mt-1">{ad.details}</p>
                    <p className="text-sm font-medium text-gray-800 mt-2">{ad.description}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </main>
  )
}

