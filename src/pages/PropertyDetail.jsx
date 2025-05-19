"use client"

import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { Bed, Bath, Square, Car, MapPin, Calendar, Heart, Share, ArrowLeft } from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import PropertyGallery from "../components/PropertyGallery"
import ContactForm from "../components/ContactForm"
import { getPropertyItem } from "../apiUtils/propertyDetails"

export default function PropertyDetail() {
  const { propertyId } = useParams()
  const [activeTab, setActiveTab] = useState("description")
  const [property, setProperty] = useState([])

  useEffect(() => {
          const fetchProperty = async () => {
              try {
                  const data = await getPropertyItem(propertyId);
                  console.log("Fetched property item:", data);
                  setProperty(data);
              } catch (error) {
                  console.error("Error fetching property item:", error);
              }
          };
  
          fetchProperty();
      }, [propertyId]);

  // In a real app, you would fetch property data based on the ID
  // const property = {
  //   id,
  //   title: "Luxury Waterfront Villa",
  //   price: "$1,250,000",
  //   address: "123 Oceanview Drive, Malibu, CA 90210",
  //   description:
  //     "This stunning waterfront villa offers breathtaking views and luxurious living spaces. With 4 bedrooms, 3.5 bathrooms, and a spacious open floor plan, this property is perfect for entertaining. The gourmet kitchen features top-of-the-line appliances and custom cabinetry. The master suite includes a private balcony, walk-in closet, and spa-like bathroom. Outside, you'll find a beautiful pool, outdoor kitchen, and meticulously landscaped grounds. Additional features include a 2-car garage, smart home technology, and energy-efficient systems.",
  //   beds: 4,
  //   baths: 3.5,
  //   sqft: 3200,
  //   garage: 2,
  //   yearBuilt: 2020,
  //   features: [
  //     "Waterfront",
  //     "Swimming Pool",
  //     "Outdoor Kitchen",
  //     "Smart Home",
  //     "Energy Efficient",
  //     "Hardwood Floors",
  //     "Granite Countertops",
  //     "Walk-in Closets",
  //     "Central Air",
  //     "Fireplace",
  //   ],
  // }

  // Similar properties would be fetched based on the current property
  const similarProperties = [
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
    },
    {
      id: "7",
      title: "Beachfront Condo",
      price: "520,000",
      address: "404 Shoreline Blvd, Miami, FL",
      beds: 2,
      baths: 2,
      sqft: 1100,
      image: "/placeholder.svg?height=300&width=400",
      type: "For Sale",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-8">
          <Link to="/properties" className="flex items-center text-gray-600 hover:text-brown transition-colors mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Properties
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold">{property.name}</h1>
                  <div className="flex items-center text-gray-600 mt-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{property.address}</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="text-3xl font-bold text-brown">Kshs {property.price}</div>
                </div>
              </div>

              <PropertyGallery images={property.images}/>

              <div className="flex flex-wrap gap-6 my-8 p-4 bg-brown-50 rounded-lg">
                <div className="flex items-center">
                  <Bed className="h-5 w-5 text-gray-500 mr-2" />
                  <div>
                    <div className="text-sm text-gray-500">Bedrooms</div>
                    <div className="font-semibold">{property.bedrooms}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Bath className="h-5 w-5 text-gray-500 mr-2" />
                  <div>
                    <div className="text-sm text-gray-500">Bathrooms</div>
                    <div className="font-semibold">{property.bathrooms}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Square className="h-5 w-5 text-gray-500 mr-2" />
                  <div>
                    <div className="text-sm text-gray-500">Square Feet</div>
                    <div className="font-semibold">{property.land_area}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Car className="h-5 w-5 text-gray-500 mr-2" />
                  <div>
                    <div className="text-sm text-gray-500">Garage</div>
                    <div className="font-semibold">{property.garage_size} Cars</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-gray-500 mr-2" />
                  <div>
                    <div className="text-sm text-gray-500">Year Built</div>
                    <div className="font-semibold">{property.yearBuilt}</div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex border-b">
                  <button
                    className={`px-4 py-2 font-medium ${
                      activeTab === "description"
                        ? "text-brown border-b-2 border-brown"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                    onClick={() => setActiveTab("description")}
                  >
                    Description
                  </button>
                  {/* <button
                    className={`px-4 py-2 font-medium ${
                      activeTab === "features"
                        ? "text-brown border-b-2 border-brown"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                    onClick={() => setActiveTab("features")}
                  >
                    Features
                  </button> */}
                  <button
                    className={`px-4 py-2 font-medium ${
                      activeTab === "map" ? "text-brown border-b-2 border-brown" : "text-gray-500 hover:text-gray-700"
                    }`}
                    onClick={() => setActiveTab("map")}
                  >
                    Map
                  </button>
                </div>

                <div className="mt-6">
                  {activeTab === "description" && (
                    <div className="prose max-w-none">
                      <p className="text-gray-700">{property.description}</p>
                    </div>
                  )}

                  {/* {activeTab === "features" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {property.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-green mr-2"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )} */}

                  {activeTab === "map" && (
                    <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                      <p className="text-gray-500">Map would be displayed here</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div>
              <div className="sticky top-8">
                <div className="bg-white border rounded-lg p-6 shadow-sm mb-6">
                  <h3 className="text-xl font-semibold mb-4">Contact Agent</h3>
                  <div className="flex items-center mb-6">
                    <img
                      src="/placeholder.svg?height=60&width=60"
                      alt="Agent"
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold">{property.agent?.name}</div>
                      <div className="text-sm text-gray-600">Real Estate Agent</div>
                      <div className="text-sm text-gray-600">{property.agent?.company}</div>
                    </div>
                  </div>
                  <ContactForm propertyId={propertyId}/>
                </div>
                <div className="flex gap-4">
                  <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 hover:bg-gray-50">
                    <Heart className="h-4 w-4" />
                    Save
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 hover:bg-gray-50">
                    <Share className="h-4 w-4" />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>

          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Similar Properties</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarProperties.map((property) => (
                <Link to={`/properties/${property.id}`} key={property.id}>
                  <div className="card overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img
                        src={property.image || "/placeholder.svg"}
                        alt={property.title}
                        className="w-full h-[220px] object-cover"
                      />
                      <span
                        className={`absolute top-2 left-2 ${
                          property.type === "For Rent" ? "badge-green" : "badge-brown"
                        }`}
                      >
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
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
