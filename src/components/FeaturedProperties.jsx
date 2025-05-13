import { Link } from "react-router-dom"
import { Bed, Bath, Square, MapPin } from "lucide-react"

export default function FeaturedProperties() {
  // In the real app, this would come from an API or database
  const properties = [
    {
      id: "1",
      title: "Modern Apartment with City View",
      price: "350,000",
      address: "123 Main St, New York, NY",
      beds: 2,
      baths: 2,
      sqft: 1200,
      image: "/placeholder.svg?height=300&width=400",
      type: "For Sale",
      featured: true,
    },
    {
      id: "2",
      title: "Luxury Waterfront Villa",
      price: "1,250,000",
      address: "456 Ocean Dr, Malibu, CA",
      beds: 4,
      baths: 3.5,
      sqft: 3200,
      image: "/placeholder.svg?height=300&width=400",
      type: "For Sale",
      featured: true,
    },
    {
      id: "3",
      title: "Cozy Downtown Loft",
      price: "2,500/mo",
      address: "789 Urban Ave, Chicago, IL",
      beds: 1,
      baths: 1,
      sqft: 850,
      image: "/placeholder.svg?height=300&width=400",
      type: "For Rent",
      featured: true,
    },
    {
      id: "4",
      title: "Spacious Family Home",
      price: "575,000",
      address: "101 Suburban Ln, Austin, TX",
      beds: 4,
      baths: 2.5,
      sqft: 2400,
      image: "/placeholder.svg?height=300&width=400",
      type: "For Sale",
      featured: true,
    },
    {
      id: "5",
      title: "Mountain View Cabin",
      price: "425,000",
      address: "202 Mountain Rd, Denver, CO",
      beds: 3,
      baths: 2,
      sqft: 1800,
      image: "/placeholder.svg?height=300&width=400",
      type: "For Sale",
      featured: true,
    },
    {
      id: "6",
      title: "Renovated Historic Townhouse",
      price: "3,200/mo",
      address: "303 Heritage St, Boston, MA",
      beds: 3,
      baths: 2.5,
      sqft: 1950,
      image: "/placeholder.svg?height=300&width=400",
      type: "For Rent",
      featured: true,
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <Link to={`/properties/${property.id}`} key={property.id}>
          <div className="card overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <img
                src={property.image || "/placeholder.svg"}
                alt={property.title}
                className="w-full h-[220px] object-cover"
              />
              <span className={`absolute top-2 left-2 ${property.type === "For Rent" ? "badge-green" : "badge-brown"}`}>
                {property.type}
              </span>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg truncate">{property.title}</h3>
                <span className="font-bold text-brown">{property.price}</span>
              </div>
              <div className="flex items-center text-gray-600 text-sm mb-4">
                <MapPin className="h-3.5 w-3.5 mr-1" />
                <span className="truncate">{property.address}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-700">
                <div className="flex items-center">
                  <Bed className="h-4 w-4 mr-1" />
                  <span>{property.beds} Beds</span>
                </div>
                <div className="flex items-center">
                  <Bath className="h-4 w-4 mr-1" />
                  <span>{property.baths} Baths</span>
                </div>
                <div className="flex items-center">
                  <Square className="h-4 w-4 mr-1" />
                  <span>{property.sqft} sqft</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
