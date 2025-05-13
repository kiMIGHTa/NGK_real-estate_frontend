"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  // In a real app, this would come from an API or database
  const testimonials = [
    {
      id: "1",
      name: "John Smith",
      location: "New York, NY",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Working with this real estate agency was a dream. They found us the perfect home within our budget and made the entire process smooth and stress-free.",
    },
    {
      id: "2",
      name: "Sarah Johnson",
      location: "Los Angeles, CA",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "I was impressed by the professionalism and knowledge of the team. They helped me sell my property for more than I expected and in record time!",
    },
    {
      id: "3",
      name: "Michael Brown",
      location: "Chicago, IL",
      image: "/placeholder.svg?height=80&width=80",
      rating: 4,
      text: "As first-time homebuyers, we had a lot of questions. Our agent was patient, informative, and guided us through every step of the process.",
    },
    {
      id: "4",
      name: "Emily Davis",
      location: "Miami, FL",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "I've worked with several real estate agencies over the years, and this one stands out for their attention to detail and personalized service.",
    },
    {
      id: "5",
      name: "Robert Wilson",
      location: "Seattle, WA",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The team went above and beyond to help me find an investment property that met all my criteria. I'll definitely be using their services again.",
    },
  ]

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < testimonial.rating ? "fill-gold text-gold" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="text-gray-700">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        <button onClick={prevSlide} className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Previous</span>
        </button>
        <button onClick={nextSlide} className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Next</span>
        </button>
      </div>
    </div>
  )
}
