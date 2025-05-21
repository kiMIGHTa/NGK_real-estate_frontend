import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FeaturedProperties from "../components/FeaturedProperties";
import Testimonials from "../components/Testimonials";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

export default function Home() {
  const { featuredProperties } = useContext(StoreContext);
  const [filters, setFilters] = useState({
    transactionType: 'any',
    searchQuery: '',
    propertyType: 'any',
    priceRange: 'any',
    bedrooms: 'any'
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const applyFilters = () => {
    // Filtering will be handled by the filteredProperties calculation
  };

  // Filter properties based on current filters
  const filteredFeaturedProperties = featuredProperties.filter(property => {    // Transaction type filter
    if (filters.transactionType === 'buy' && property.status !== 'for_sale') return false;
    if (filters.transactionType === 'rent' && property.status !== 'for_rent') return false;

    // Search query filter
    if (filters.searchQuery) {
      const searchQuery = filters.searchQuery.toLowerCase();
      const propertyName = property?.name?.toLowerCase() || '';
      const propertyLocation = property?.location?.toLowerCase() || '';

      if (!propertyName.includes(searchQuery) && !propertyLocation.includes(searchQuery)) {
        return false;
      }
    }

    // Property type filter
    if (filters.propertyType !== 'any' && property.type !== filters.propertyType) {
      return false;
    }

    // Price range filter
    if (filters.priceRange !== 'any') {
      const price = property.price;
      switch (filters.priceRange) {
        case '100k': if (price > 100000) return false; break;
        case '200k': if (price <= 100000 || price > 200000) return false; break;
        case '500k': if (price <= 200000 || price > 500000) return false; break;
        case '1m': if (price <= 500000 || price > 1000000) return false; break;
        case '1m+': if (price <= 1000000) return false; break;
      }
    }

    // Bedrooms filter
    if (filters.bedrooms !== 'any' && property.bedrooms < parseInt(filters.bedrooms)) {
      return false;
    }

    return true;
  });

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
          <div
            className="h-[650px] bg-cover bg-center"
            style={{ backgroundImage: "url('/Home_image.png?height=600&width=1200')" }}
          />
          <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-white">
            <h1 className="text-9xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-blue-300">
              NGK AGENCY
            </h1>
            <p className="text-xl md:text-2xl text-center mb-8 max-w-2xl">
              Discover the perfect property with our extensive listings and expert guidance
            </p>

            {/* Search Box */}
            <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md p-6 rounded-lg mt-32">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <select
                    name="transactionType"
                    value={filters.transactionType}
                    onChange={handleFilterChange}
                    className="w-full bg-white/20 border-white/30 px-3 py-2 rounded-md text-white/70"

                  >
                    <option className="text-black" value="any">Buy or Rent</option>
                    <option className="text-black" value="buy">Buy</option>
                    <option className="text-black" value="rent">Rent</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      name="searchQuery"
                      value={filters.searchQuery}
                      onChange={handleFilterChange}
                      className="w-full pl-10 bg-white/20 text-black border-white/30 placeholder:text-white/70 px-3 py-2 rounded-md"
                      placeholder="Enter location, property type, or keyword"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                <select
                  name="propertyType"
                  value={filters.propertyType}
                  onChange={handleFilterChange}
                  className="bg-white/20 text-white/70 border-white/30 px-3 py-2 rounded-md"
                >
                  <option className="text-black" value="any">Any Type</option>
                  <option className="text-black" value="house">House</option>
                  <option className="text-black" value="apartment">Apartment</option>
                  <option className="text-black" value="condo">Condo</option>
                  <option className="text-black" value="land">Land</option>
                </select>
                <select
                  name="priceRange"
                  value={filters.priceRange}
                  onChange={handleFilterChange}
                  className="bg-white/20 text-white/70 border-white/30 px-3 py-2 rounded-md"
                >
                  <option className="text-black" value="any">Any Price</option>
                  <option className="text-black" value="100k">Under Kshs 100k</option>
                  <option className="text-black" value="200k">Kshs 100k - 200k</option>
                  <option className="text-black" value="500k">Kshs 200k - 500k</option>
                  <option className="text-black" value="1m">Kshs 500k - 1M</option>
                  <option className="text-black" value="1m+">Kshs 1M+</option>
                </select>
                <select
                  name="bedrooms"
                  value={filters.bedrooms}
                  onChange={handleFilterChange}
                  className="bg-white/20 text-white/70 border-white/30 px-3 py-2 rounded-md"
                >
                  <option className="text-black" value="any">Any Bedrooms</option>
                  <option className="text-black" value="1">1+</option>
                  <option className="text-black" value="2">2+</option>
                  <option className="text-black" value="3">3+</option>
                  <option className="text-black" value="4">4+</option>
                  <option className="text-black" value="5">5+</option>
                </select>
                <button
                  onClick={applyFilters}
                  className="bg-brown hover:bg-brown-dark text-white/70 px-4 py-2 rounded-md transition-colors"
                >
                  Search Properties
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Properties - Pass filtered properties */}
        <section className="py-16 bg-brown-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Properties</h2>
            <FeaturedProperties properties={filteredFeaturedProperties} />
            <div className="flex justify-center mt-12">
              <Link to="/properties" className="btn-outline-brown">
                View All Properties
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials*/}
        {/* <section className="py-16 bg-green-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
            <Testimonials />
          </div>
        </section> */}

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