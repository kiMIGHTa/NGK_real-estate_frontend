import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ContactForm from "../components/ContactForm"

export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gray-50 py-12">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
              <p className="text-gray-600">
                Have questions about a property or need assistance? Our team is here to help you every step of the way.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-maroon/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-maroon" />
                </div>
                <h3 className="font-semibold mb-2">Our Office</h3>
                <p className="text-gray-600">
                  4th Floor, Reliable Towers
                  <br />
                  Mogotio Rd.
                  <br />
                  Parklands, Nairobi
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-maroon/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-maroon" />
                </div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-gray-600">
                  +254 719064000
                  <br />
                  +254 781735668
                  <br />
                  +254 782654122
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-maroon/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-maroon" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-600">
                  andrewm@nimblekenya.co.ke
                  <br />
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Office Hours</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-maroon mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Monday - Sunday</h3>
                      <p className="text-gray-600">Open 24 Hours</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-maroon mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Customer Support</h3>
                      <p className="text-gray-600">Always Available</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-semibold mb-4">Our Location</h3>
                  <div className="w-full aspect-video">
                    <iframe
                      className="w-full h-full"
                      frameBorder="0"
                      style={{ border: 0 }}
                      referrerPolicy="no-referrer-when-downgrade"
                      src={`https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&q=Reliable+Towers,Nairobi+Kenya`}
                      allowFullScreen
                      onError={(e) => console.error("Map failed to load", e)}>
                    </iframe>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
