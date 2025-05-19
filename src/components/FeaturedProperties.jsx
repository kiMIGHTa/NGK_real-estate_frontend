import { Link } from "react-router-dom"
import { Bed, Bath, Square, MapPin } from "lucide-react"

export default function FeaturedProperties({ properties }) {
  // const featured = properties.slice(0, 6);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <Link to={`/properties/${property.id}`} key={property.id}>
          <div className="card overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <img
                src={property.images[0].image || "/placeholder.svg"}
                alt={property.name}
                className="w-full h-[220px] object-cover"
              />
              <span className={`absolute top-2 left-2 ${property.status === "for_rent"
                  ? "badge-green"
                  : property.status === "for_sale"
                    ? "badge-blue"
                    : "badge-brown"
                }`}>
                {property.status_display}
              </span>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg truncate">{property.name}</h3>
                <span className="font-bold text-brown">Kshs {property.price}</span>
              </div>
              <div className="flex items-center text-gray-600 text-sm mb-4">
                <MapPin className="h-3.5 w-3.5 mr-1" />
                <span className="truncate">{property.address}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-700">
                <div className="flex items-center">
                  <Bed className="h-4 w-4 mr-1" />
                  <span>{property.bedrooms} Beds</span>
                </div>
                <div className="flex items-center">
                  <Bath className="h-4 w-4 mr-1" />
                  <span>{property.bathrooms} Baths</span>
                </div>
                <div className="flex items-center">
                  <Square className="h-4 w-4 mr-1" />
                  <span>{property.land_area} sqft</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
