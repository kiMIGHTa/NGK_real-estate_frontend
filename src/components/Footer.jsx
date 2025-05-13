import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-brown-dark text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">NGK Agency</h3>
            <p className="mb-4">
              Your trusted partner in finding the perfect property. With years of experience and a commitment to
              excellence, we're here to help you every step of the way.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="hover:text-gold transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link to="#" className="hover:text-gold transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link to="#" className="hover:text-gold transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link to="#" className="hover:text-gold transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-green-light transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/properties" className="hover:text-green-light transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-green-light transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-green-light transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-green-light transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li>123 Real Estate Blvd, Suite 456</li>
              <li>Los Angeles, CA 90001</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@natureestate.com</li>
              <li>Mon-Fri: 9:00 AM - 6:00 PM</li>
            </ul>
          </div>

          {/* <div>
            <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for the latest property listings and real estate news.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-white/20 border-white/30 text-white px-3 py-2 rounded-md flex-grow placeholder:text-white/70"
              />
              <button className="bg-green hover:bg-green-dark text-white px-4 py-2 rounded-md transition-colors">
                Subscribe
              </button>
            </div>
          </div> */}
        </div>

        <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} NatureEstate. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="#" className="text-sm hover:text-green-light transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-sm hover:text-green-light transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="text-sm hover:text-green-light transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
