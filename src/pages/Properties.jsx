import Header from "../components/Header"
import Footer from "../components/Footer"
import PropertyFilters from "../components/PropertyFilters"
import PropertyGrid from "../components/PropertyGrid"

export default function Properties() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gray-50 py-8">
          <div className="container">
            <h1 className="text-3xl font-bold mb-6">Property Listings</h1>
            <PropertyFilters />
            <div className="mt-8">
              <PropertyGrid />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
