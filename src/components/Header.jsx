"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, Phone } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const phoneNumber = "+254719064000"
  const formattedNumber = "+254 719 064 000"

  const handlePhoneClick = () => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
    
    if (isMobile) {
      window.location.href = `tel:${phoneNumber}`
    } else {
      window.open(`https://wa.me/${phoneNumber.replace('+', '')}`)
    }
  }
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="">
          <img src="/NIMLOGO(no text).png" alt="Logo" className="h-20" />
        </Link>

        <nav className="hidden md:flex gap-8 mx-auto">
          <Link to="/" className="text-base font-medium hover:text-brown transition-colors">
            Home
          </Link>
          <Link to="/properties" className="text-base font-medium hover:text-brown transition-colors">
            Properties
          </Link>
          <Link to="/about" className="text-base font-medium hover:text-brown transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-base font-medium hover:text-brown transition-colors">
            Contact
          </Link>
        </nav>
        <div
          onClick={handlePhoneClick}
          className="flex items-center gap-2 cursor-pointer hover:text-maroon transition-colors"
          role="button"
          tabIndex={0}
        >
          <Phone className="h-5 w-5" />
          <span className="text-current">{formattedNumber}</span>
        </div>
        {/* <a
          href="tel:+254746493184"
          className="flex items-center gap-2 hover:text-maroon transition-colors no-underline"
          aria-label="Call +254 719 064 000"
        >
          <Phone className="h-5 w-5" />
          <span className="text-current">+254 719 064 000</span>
        </a> */}
        <button className="md:hidden border border-gray-300 rounded-md p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b">
          <div className="container py-4 flex flex-col gap-4">
            <Link
              to="/"
              className="text-lg font-medium hover:text-brown transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/properties"
              className="text-lg font-medium hover:text-brown transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Properties
            </Link>
            <Link
              to="/about"
              className="text-lg font-medium hover:text-brown transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-lg font-medium hover:text-brown transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
