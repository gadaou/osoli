import Header from "@/components/header"
import Footer from "@/components/footer"

export default function WhatWeDoPage() {
  return (
    <main className="min-h-screen">
      <Header alwaysFilled={true} />

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-light tracking-wider text-gray-900 mb-8">WHAT WE DO</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Osoli Real Estate provides comprehensive real estate services and innovative solutions through our core business and strategic subsidiaries, delivering excellence across multiple sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24" style={{ backgroundColor: '#B17A50' }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-light tracking-wider text-white mb-16">OUR CORE SERVICES</h2>

          <div className="space-y-8">
            {/* First row - 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Buying and Selling */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium text-gray-900 mb-4">BUYING AND SELLING</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Marketing and selling residential and commercial properties</li>
                  <li>• Assisting clients in selecting the optimal property</li>
                  <li>• Feasibility studies for buyers and investors</li>
                </ul>
              </div>

              {/* Leasing and Property Management */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium text-gray-900 mb-4">LEASING AND PROPERTY MANAGEMENT</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Leasing properties and managing daily operations</li>
                  <li>• Rent collection, maintenance, and periodic reports</li>
                </ul>
              </div>

              {/* Real Estate Consulting */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium text-gray-900 mb-4">REAL ESTATE CONSULTING</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Professional market analysis</li>
                  <li>• Project and area evaluations based on data</li>
                  <li>• Building profitable investment portfolios</li>
                </ul>
              </div>
            </div>

            {/* Second row - 2 cards centered */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                {/* Foreign Investor Services */}
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">FOREIGN INVESTOR SERVICES</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Property ownership for non-resident foreigners</li>
                    <li>• After-sales services: furnishing, leasing, and resale</li>
                  </ul>
                </div>

                {/* Developer Deal Management */}
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">DEVELOPER DEAL MANAGEMENT</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Direct negotiations with major developers</li>
                    <li>• Offering flexible and exclusive payment plans</li>
                    <li>• Contract follow-up and delivery management</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subsidiaries */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-light tracking-wider text-gray-900 mb-16 text-center">OUR SUBSIDIARIES</h2>

          <div className="space-y-16">
            {/* Smart Start */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-light tracking-wider text-gray-900">SMART START</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Where Innovation Meets Lifestyle. Founded in 2020, Smart Start stands as a premier innovator in home automation, redefining modern living with solutions that combine comfort, security, energy efficiency, and sustainability.
                </p>
                <div className="text-gray-700 space-y-2">
                  <p><strong>Services:</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Smart Lighting Systems</li>
                    <li>Climate & Air Conditioning Solutions</li>
                    <li>Security & Surveillance</li>
                    <li>Home Sound & Cinema Systems</li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                <img src="/dubai-luxury-hotel-lobby.png" alt="Smart Start" className="w-full h-[400px] object-cover" />
              </div>
            </div>

            {/* Construction Consultancy */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <img src="/dubai-luxury-real-estate.png" alt="Construction Consultancy" className="w-full h-[400px] object-cover" />
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <h3 className="text-2xl font-light tracking-wider text-gray-900">CONSTRUCTION CONSULTANCY</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A Subsidiary of Osoli Real Estate. A leading company in Engineering Consultancy and Building Plan Review, dedicated to providing precise and comprehensive solutions for project developers and investors.
                </p>
                <div className="text-gray-700 space-y-2">
                  <p><strong>Services:</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Comprehensive Engineering Consultancy</li>
                    <li>Building Plan Review</li>
                    <li>Technical Risk Management</li>
                    <li>Investor & Developer Support</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* AI Logistics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-light tracking-wider text-gray-900">ARTIFICIAL INTELLIGENCE</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Smart & Sustainable Logistics Solutions. A leading global company providing smart and sustainable solutions for the transportation and logistics sector, serving over 200 clients across 18 countries.
                </p>
                <div className="text-gray-700 space-y-2">
                  <p><strong>Services:</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Qomolo – Electric autonomous vehicles</li>
                    <li>Q-Truck – Heavy-duty electric trucks</li>
                    <li>WellOcean – Smart seaport solutions</li>
                    <li>Loopo – Intelligent digital platform</li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                <img src="/dubai-luxury-restaurant.png" alt="AI Logistics" className="w-full h-[400px] object-cover" />
              </div>
            </div>

            {/* Business Setup */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <img src="/dubai-office-interior.png" alt="Business Setup" className="w-full h-[400px] object-cover" />
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <h3 className="text-2xl font-light tracking-wider text-gray-900">BUSINESS SETUP & CORPORATE ADVISORY</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A Subsidiary of Osoli Real Estate. We approach business setup as a complete strategic project, providing end-to-end consultancy that simplifies company establishment in today's competitive markets.
                </p>
                <div className="text-gray-700 space-y-2">
                  <p><strong>Services:</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Feasibility & Market Entry Studies</li>
                    <li>Company Formation & Licensing</li>
                    <li>Legal & Compliance Advisory</li>
                    <li>Financial & Tax Planning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
