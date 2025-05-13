"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-brown">
          LOGO
        </Link>

        <nav className="hidden md:flex gap-8 mx-auto">
          <Link to="/" className="text-sm font-medium hover:text-brown transition-colors">
            Home
          </Link>
          <Link to="/properties" className="text-sm font-medium hover:text-brown transition-colors">
            Properties
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-brown transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:text-brown transition-colors">
            Contact
          </Link>
        </nav>

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
