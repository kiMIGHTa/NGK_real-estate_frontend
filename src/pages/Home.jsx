import { Link } from "react-router-dom"
import { Search } from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import FeaturedProperties from "../components/FeaturedProperties"
import Testimonials from "../components/Testimonials"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
          <div
            className="h-[600px] bg-cover bg-center"
            style={{ backgroundImage: "url('/placeholder.svg?height=600&width=1200')" }}
          />
          <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-white">
              Find Your Dream Home
            </h1>
            <p className="text-xl md:text-2xl text-center mb-8 max-w-2xl">
              Discover the perfect property with our extensive listings and expert guidance
            </p>

            {/* Search Box */}
            <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <select className="w-full bg-white/20  border-white/30 px-3 py-2 rounded-md text-white/70">
                    <option className="text-black" value="buy">Buy</option>
                    <option className="text-black" value="rent">Rent</option>
                    <option className="text-black" value="sell">Sell</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      className="w-full pl-10 bg-white/20 text-black border-white/30 placeholder:text-white/70 px-3 py-2 rounded-md"
                      placeholder="Enter location, property type, or keyword"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                <select className="bg-white/20 text-white/70 border-white/30 px-3 py-2 rounded-md">
                  <option className="text-black" value="any">Any Type</option>
                  <option className="text-black" value="house">House</option>
                  <option className="text-black" value="apartment">Apartment</option>
                  <option className="text-black" value="condo">Condo</option>
                  <option className="text-black" value="land">Land</option>
                </select>
                <select className="bg-white/20 text-white/70 border-white/30 px-3 py-2 rounded-md">
                  <option className="text-black" value="any">Any Price</option>
                  <option className="text-black" value="100k">Under Kshs 100k</option>
                  <option className="text-black" value="200k">Kshs 100k - 200k</option>
                  <option className="text-black" value="500k">Kshs 200k - 500k</option>
                  <option className="text-black" value="1m">Kshs 500k - 1M</option>
                  <option className="text-black" value="1m+">Kshs 1M+</option>
                </select>
                <select className="bg-white/20 text-white/70 border-white/30 px-3 py-2 rounded-md">
                  <option className="text-black" value="any">Any Bedrooms</option>
                  <option className="text-black" value="1">1+</option>
                  <option className="text-black" value="2">2+</option>
                  <option className="text-black" value="3">3+</option>
                  <option className="text-black" value="4">4+</option>
                  <option className="text-black" value="5">5+</option>
                </select>
                <button className="bg-brown hover:bg-brown-dark text-white/70 px-4 py-2 rounded-md transition-colors">
                  Search Properties
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Properties */}
        <section className="py-16 bg-brown-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Properties</h2>
            <FeaturedProperties />
            <div className="flex justify-center mt-12">
              <Link to="/properties" className="btn-outline-brown">
                View All Properties
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-brown/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-brown"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Trusted by Thousands</h3>
                <p className="text-gray-700">
                  With over 10 years in the industry, we've helped thousands of people find their perfect home.
                </p>
              </div>
              <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Fast & Efficient</h3>
                <p className="text-gray-700">
                  Our streamlined process ensures you can move quickly when you find the right property.
                </p>
              </div>
              <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
                <p className="text-gray-700">
                  Our team of experts is always available to answer your questions and provide guidance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-green-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
            <Testimonials />
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-brown text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Find Your Dream Home?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let our experts guide you through the process and find the perfect property for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/properties"
                className="bg-white text-brown hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors"
              >
                Browse Properties
              </Link>
              <Link
                to="/contact"
                className="bg-green text-white hover:bg-green-dark px-6 py-3 rounded-md font-medium transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
