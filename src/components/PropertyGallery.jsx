"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function PropertyGallery({ images = [] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [transitioning, setTransitioning] = useState(false)

  // Reset transitioning state after animation completes
  useEffect(() => {
    if (transitioning) {
      const timer = setTimeout(() => setTransitioning(false), 300)
      return () => clearTimeout(timer)
    }
  }, [transitioning])

  // Handle empty or undefined images array
  if (!images || images.length === 0) {
    return (
      <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">No images available</p>
      </div>
    )
  }

  const changeImage = (newIndex) => {
    if (transitioning) return
    setTransitioning(true)
    setActiveIndex(newIndex)
  }

  const nextImage = () => {
    changeImage(activeIndex === images.length - 1 ? 0 : activeIndex + 1)
  }

  const prevImage = () => {
    changeImage(activeIndex === 0 ? images.length - 1 : activeIndex - 1)
  }



  // Get the current image URL
  const currentImage = images[activeIndex]?.image || "/placeholder.svg"
  const currentAlt = images[activeIndex]?.alt_text || "Property image"

  return (
    <div className="relative">
      {/* Main image container with fade transition */}
      <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden relative">
        <img
          src={currentImage}
          alt={currentAlt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${transitioning ? 'opacity-0' : 'opacity-100'
            }`}
        />
      </div>

      {/* Navigation buttons */}
      {images.length > 1 && (
        <>
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full"
            onClick={prevImage}
            disabled={transitioning}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous image</span>
          </button>

          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full"
            onClick={nextImage}
            disabled={transitioning}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next image</span>
          </button>
        </>
      )}

      {/* Thumbnail navigation */}
      {images.length > 1 && (
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              className={`relative flex-shrink-0 w-20 h-20 rounded-md overflow-hidden transition-all ${index === activeIndex ? "ring-2 ring-brown" : "opacity-70 hover:opacity-100"
                }`}
              onClick={() => changeImage(index)}
              disabled={transitioning}
            >
              <img
                src={image?.image || "/placeholder.svg"}
                alt={image?.alt_text || `Property thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}