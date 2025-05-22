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
                At NGK Real estate, our focus is on providing peace of mind and letting our clients
                focus on what they do best while we take care of the rest.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                <div className="space-y-4">
                  <p>
                    At NGK Real estate, we specialize in providing comprehensive property
                    management and rent collection services to residential and commercial property
                    owners. We proudly serve country wide, ensuring both property owners and
                    tenants experience seamless and stress free experience.

                  </p>
                  <p>
                    With the help of our well improvised software, our mission is to simplify
                    property management and provide consistent, professional service with a focus on
                    reliability and client satisfaction. Whether you are a first time landlord or a
                    seasoned real estate investor, we handle every aspect of property management
                    from rent collection and maintenance to tenant relations and leasing. Just sit,relax
                    and enjoy as we make things easier for you.
                  </p>
                  <p>
                    We offer a range of services including;
                    <br />
                    1. RENT COLLECTIONS AND PAYMENT PROCESSING.
                    <br />
                    2. PROPERTY MAINTENANCE AND REPAIRS.
                    <br />
                    3. TENANT SCREENING AND LEASING.
                    <br />
                    4. FINANCIAL REPORTING AND MORE AS STATED BELOW.
                  </p>
                  <p>
                    What sets us apart is our commitment to transparency, proactive communication
                    and tailoured solutions that meet the unique needs of our clients. We pride
                    ourselves on building a long-term relationships with property owners and tenants
                    alike, helping them feel confident and secure in every interaction.

                  </p>
                </div>
              </div>
              <div className="w-full aspect-video">
                <video
                  src="https://pub-f3d59746bd4743ddb4dd83266a31a835.r2.dev/NGKKenya.mp4"
                  className="w-full h-full object-cover rounded-md border-3 border-black"
                  controls
                  autoPlay
                  muted
                  playsInline
                  preload="metadata"
                  // poster="/video-poster.jpg" // Recommended for better UX
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
                  <h3 className="font-semibold mb-2">Security</h3>
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
                  <h3 className="font-semibold mb-2">Trust</h3>
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
