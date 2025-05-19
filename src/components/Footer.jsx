import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-brown-light text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">NGK Agency</h3>
            <p className="mb-4">
              Your trusted partner in finding the perfect property. Our vision, to simplify property management and provide consistent, professional

              service with a focus on reliability and client satisfaction.
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
              {/* <li>
                <Link to="#" className="hover:text-green-light transition-colors">
                  Blog
                </Link>
              </li> */}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li>4th Floor, Reliable Towers, Mogotio Rd.</li>
              <li>Parklands, Nairobi</li> 
              <li>Phone : +254 719064000</li>
              <li>&emsp; &nbsp; &nbsp; &nbsp; &nbsp; : +254 781735668</li>
              <li>&emsp; &nbsp; &nbsp; &nbsp; &nbsp; : +254 782654122</li>
              <li>Email: andrewm@nimblekenya.co.ke</li>
              <li>Mon-Fri: 8:00 AM - 5:00 PM</li>
            </ul>
          </div>

          <div>
            <img src="/NIMLOGO(grey).png" alt="logo" className="h-64" />
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} NGK Agency. All rights reserved.</p>
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
