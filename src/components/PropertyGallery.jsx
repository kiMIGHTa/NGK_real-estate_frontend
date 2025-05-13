"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function PropertyGallery() {
  const [activeIndex, setActiveIndex] = useState(0)

  // In a real app, these would come from the property data
  const images = [
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
  ]

  const nextImage = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  return (
    <div className="relative">
      <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
        <img src={images[activeIndex] || "/placeholder.svg"} alt="Property" className="w-full h-full object-cover" />
      </div>

      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full"
        onClick={prevImage}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous image</span>
      </button>

      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full"
        onClick={nextImage}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next image</span>
      </button>

      <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            className={`relative flex-shrink-0 w-20 h-20 rounded-md overflow-hidden ${
              index === activeIndex ? "ring-2 ring-brown" : "opacity-70"
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`Property thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
