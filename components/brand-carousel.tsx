"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const brands = [
  { id: 1, name: "Bodycare", image: "/placeholder.svg?height=600&width=1200" },
  { id: 2, name: "Lyra", image: "public/images/LYRA-WEB-BANNER-1800-X-800_c3160024-4be3-4c77-aedd-10b9896fb567_1944x.png?height=600&width=1200" },
  { id: 3, name: "Supersox", image: "/placeholder.svg?height=600&width=1200" },
  { id: 4, name: "Zeel", image: "/placeholder.svg?height=600&width=1200" },
  { id: 5, name: "Pinklush", image: "/placeholder.svg?height=600&width=1200" },
  { id: 6, name: "Zoom", image: "/placeholder.svg?height=600&width=1200" },
  { id: 7, name: "Mitushi", image: "/placeholder.svg?height=600&width=1200" },
  { id: 8, name: "Niomoda", image: "/placeholder.svg?height=600&width=1200" },
  { id: 9, name: "Citizen", image: "/placeholder.svg?height=600&width=1200" },
  { id: 10, name: "Tag Hills", image: "/placeholder.svg?height=600&width=1200" },
]

export default function BrandCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goToNext = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % brands.length)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }, [isAnimating])

  const goToPrevious = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentIndex((prevIndex) => (prevIndex - 1 + brands.length) % brands.length)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }, [isAnimating])

  useEffect(() => {
    const interval = setInterval(goToNext, 5000)
    return () => clearInterval(interval)
  }, [goToNext])

  return (
    <div className="relative overflow-hidden">
      <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full overflow-hidden">
        {brands.map((brand, index) => (
          <div
            key={brand.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={brand.image || "/placeholder.svg"}
              alt={brand.name}
              fill
              className="object-cover"
              priority={index === currentIndex}
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl md:text-4xl font-bold mb-4">{brand.name}</h3>
                <Button
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-black"
                >
                  Explore Collection
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 z-20 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/40"
        onClick={goToPrevious}
        disabled={isAnimating}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous slide</span>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 z-20 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/40"
        onClick={goToNext}
        disabled={isAnimating}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next slide</span>
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 space-x-2">
        {brands.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true)
                setCurrentIndex(index)
                setTimeout(() => setIsAnimating(false), 500)
              }
            }}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
