import Header from "../components/Header"
import Footer from "../components/Footer"
import PropertyFilters from "../components/PropertyFilters"
import PropertyGrid from "../components/PropertyGrid"
import { useContext } from "react"
import { StoreContext } from "../context/StoreContext"

export default function Properties() {
  const { properties, setProperties } = useContext(StoreContext)

  const handleFilterChange = (filteredProperties) => {
    setProperties(filteredProperties)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gray-50 py-8">
          <div className="container">
            <h1 className="text-3xl font-bold mb-6">Property Listings</h1>
            <PropertyFilters onFilterChange={handleFilterChange} />
            <div className="mt-8">
              <PropertyGrid properties={properties} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
