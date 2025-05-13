import Header from "../components/Header"
import Footer from "../components/Footer"
import TeamMembers from "../components/TeamMembers"

export default function About() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gray-50 py-12">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-3xl font-bold mb-4">About Our Company</h1>
              <p className="text-gray-600">
                We're dedicated to helping you find the perfect property and making the buying process as smooth as
                possible.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                <div className="space-y-4">
                  <p>
                    Founded in 2010, our real estate company has grown from a small local agency to one of the most
                    trusted names in the industry. Our journey began with a simple mission: to help people find homes
                    they love at prices they can afford.
                  </p>
                  <p>
                    Over the years, we've expanded our services to include property management, investment consulting,
                    and commercial real estate, all while maintaining our commitment to personalized service and client
                    satisfaction.
                  </p>
                  <p>
                    Today, we're proud to have helped thousands of families find their dream homes and countless
                    investors build successful real estate portfolios. Our team of experienced agents combines deep
                    local knowledge with cutting-edge technology to provide an unmatched real estate experience.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px]">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Our office"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-bold text-center mb-8">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-maroon/10 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-maroon"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2">Integrity</h3>
                  <p className="text-gray-600">
                    We believe in honest communication and transparent dealings with all our clients.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-maroon/10 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-maroon"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2">Excellence</h3>
                  <p className="text-gray-600">
                    We strive for excellence in every aspect of our service, from property listings to closing deals.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-maroon/10 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-maroon"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2">Client-Focused</h3>
                  <p className="text-gray-600">
                    Our clients' needs and satisfaction are at the center of everything we do.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-maroon/10 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-maroon"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2">Innovation</h3>
                  <p className="text-gray-600">
                    We continuously adopt new technologies and approaches to improve our services.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-center mb-8">Meet Our Team</h2>
              <TeamMembers />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
