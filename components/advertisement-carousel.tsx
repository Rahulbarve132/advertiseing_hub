"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"

// Sample advertisement data
const advertisements = [
  {
    id: 1,
    title: "Hyundai i10 Magna O",
    image: "/placeholder.svg?height=200&width=300",
    price: "₹ 2,80,000",
    details: "2015 - 62,950 km",
    description: "Hyundai i10 Magna O, 2015, Petrol",
    location: "EDAKKAD, MUZHAPPILANGAD",
    date: "NOV 27",
    featured: true,
    category: "cars",
  },
  {
    id: 2,
    title: "Maruti Suzuki Baleno",
    image: "/placeholder.svg?height=200&width=300",
    price: "₹ 6,10,000",
    details: "2015 - 120,000 km",
    description: "Maruti Suzuki Baleno, 2015, Diesel",
    location: "SALEM EAST OLD, SALEM",
    date: "FEB 22",
    featured: true,
    category: "cars",
  },
  {
    id: 3,
    title: "iPhone 14 Pro",
    image: "/placeholder.svg?height=200&width=300",
    price: "₹ 14,699",
    details: "iPhone 14pro bumper special offer",
    description: "iPhone 14pro bumper special offer (30% off)",
    location: "SAMUDRAPUR, MAHARASHTRA",
    date: "TODAY",
    featured: false,
    category: "electronics",
  },
  {
    id: 4,
    title: "iPhone 12",
    image: "/placeholder.svg?height=200&width=300",
    price: "₹ 11,100",
    details: "iPhone 12",
    description: "iPhone 12 in excellent condition",
    location: "SAMUDRAPUR, MAHARASHTRA",
    date: "YESTERDAY",
    featured: false,
    category: "electronics",
  },
  {
    id: 5,
    title: "Samsung Galaxy S22",
    image: "/placeholder.svg?height=200&width=300",
    price: "₹ 18,500",
    details: "Samsung Galaxy S22 Ultra",
    description: "Samsung Galaxy S22 Ultra, 256GB, Black",
    location: "MUMBAI, MAHARASHTRA",
    date: "3 DAYS AGO",
    featured: true,
    category: "electronics",
  },
  {
    id: 6,
    title: "Honda City",
    image: "/placeholder.svg?height=200&width=300",
    price: "₹ 8,50,000",
    details: "2018 - 45,000 km",
    description: "Honda City VX, 2018, Petrol",
    location: "DELHI, NCR",
    date: "DEC 5",
    featured: true,
    category: "cars",
  },
  {
    id: 7,
    title: "MacBook Pro",
    image: "/placeholder.svg?height=200&width=300",
    price: "₹ 92,000",
    details: "MacBook Pro 2021",
    description: "MacBook Pro 2021, M1 Pro, 16GB RAM",
    location: "BANGALORE, KARNATAKA",
    date: "NOV 30",
    featured: false,
    category: "electronics",
  },
  {
    id: 8,
    title: "Toyota Fortuner",
    image: "/placeholder.svg?height=200&width=300",
    price: "₹ 32,00,000",
    details: "2020 - 25,000 km",
    description: "Toyota Fortuner, 2020, Diesel, 4x4",
    location: "CHENNAI, TAMIL NADU",
    date: "DEC 10",
    featured: true,
    category: "cars",
  },
]

export function AdvertisementCarousel() {
  const [favorites, setFavorites] = useState<number[]>([])
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const isMobile = useMediaQuery("(max-width: 640px)")
  const isTablet = useMediaQuery("(min-width: 641px) and (max-width: 1024px)")

  const toggleFavorite = (id: number, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setFavorites((prev) => (prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]))
  }

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef
      const scrollAmount = direction === "left" ? -current.clientWidth : current.clientWidth

      current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="relative">
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-4 pb-6 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {advertisements.map((ad) => (
          <Link
            href={`/advertisements/${ad.id}`}
            key={ad.id}
            className={cn(
              "flex-shrink-0 snap-start rounded-md border border-gray-200 bg-white overflow-hidden",
              "transition-all hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary",
              isMobile ? "w-[280px]" : isTablet ? "w-[320px]" : "w-[300px]",
            )}
          >
            <div className="relative h-48 w-full">
              <Image src={ad.image || "/placeholder.svg"} alt={ad.title} fill className="object-cover" />
              <button
                onClick={(e) => toggleFavorite(ad.id, e)}
                className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white"
                aria-label={favorites.includes(ad.id) ? "Remove from favorites" : "Add to favorites"}
              >
                <Heart
                  className={cn(
                    "h-5 w-5 transition-colors",
                    favorites.includes(ad.id) ? "fill-red-500 text-red-500" : "text-gray-600",
                  )}
                />
              </button>
              {ad.featured && (
                <div className="absolute top-2 left-2 bg-amber-400 text-xs font-semibold px-2 py-1 rounded">
                  FEATURED
                </div>
              )}
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-gray-900">{ad.price}</h3>
              </div>
              <p className="text-sm text-gray-500 mt-1">{ad.details}</p>
              <p className="text-sm font-medium text-gray-800 mt-2">{ad.description}</p>
              <div className="flex justify-between items-center mt-3 text-xs text-gray-500">
                <span>{ad.location}</span>
                <span>{ad.date}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-6 gap-4">
        <Button variant="outline" size="sm" onClick={() => scroll("left")} aria-label="Scroll left">
          Previous
        </Button>
        <Button variant="outline" size="sm" onClick={() => scroll("right")} aria-label="Scroll right">
          Next
        </Button>
      </div>
    </div>
  )
}

