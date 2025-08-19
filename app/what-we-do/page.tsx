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
              We invest in extraordinary opportunities across diverse sectors, creating lasting value through strategic
              partnerships and visionary thinking.
            </p>
          </div>
        </div>
      </section>

      {/* Investment Areas */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-light tracking-wider text-gray-900 mb-16">INVESTMENT AREAS</h2>

          <div className="space-y-16">
            {/* Real Estate */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-light tracking-wider text-gray-900">REAL ESTATE</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We develop and invest in premium residential, commercial, and mixed-use properties that define Dubai's
                  skyline and contribute to the city's growth as a global destination.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our real estate portfolio spans luxury developments, innovative commercial spaces, and sustainable
                  communities that enhance quality of life.
                </p>
              </div>
              <div className="relative">
                <img src="/dubai-luxury-real-estate.png" alt="Real Estate" className="w-full h-[400px] object-cover" />
              </div>
            </div>

            {/* Hospitality */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <img src="/dubai-luxury-hotel-lobby.png" alt="Hospitality" className="w-full h-[400px] object-cover" />
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <h3 className="text-2xl font-light tracking-wider text-gray-900">HOSPITALITY</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We create exceptional hospitality experiences through luxury hotels, resorts, and dining destinations
                  that showcase Dubai's position as a world-class tourism hub.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our hospitality investments focus on innovative concepts, exceptional service, and memorable
                  experiences that attract visitors from around the globe.
                </p>
              </div>
            </div>

            {/* Lifestyle Experiences */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-light tracking-wider text-gray-900">LIFESTYLE EXPERIENCES</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We invest in unique lifestyle concepts, entertainment venues, and cultural destinations that enrich
                  Dubai's social fabric and create lasting memories.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  From fine dining establishments to exclusive clubs and entertainment complexes, we curate experiences
                  that define luxury living in Dubai.
                </p>
              </div>
              <div className="relative">
                <img
                  src="/dubai-luxury-restaurant.png"
                  alt="Lifestyle Experiences"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Approach */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-light tracking-wider text-gray-900 mb-8">OUR APPROACH</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-12">
              We take a long-term view, focusing on sustainable growth and meaningful partnerships that create value for
              all stakeholders.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
              <div className="text-left space-y-4">
                <h3 className="text-xl font-medium text-gray-900">STRATEGIC VISION</h3>
                <p className="text-gray-700 leading-relaxed">
                  We identify opportunities that align with Dubai's long-term development goals and global trends.
                </p>
              </div>
              <div className="text-left space-y-4">
                <h3 className="text-xl font-medium text-gray-900">PARTNERSHIP FOCUS</h3>
                <p className="text-gray-700 leading-relaxed">
                  We build lasting relationships with world-class partners who share our vision and values.
                </p>
              </div>
              <div className="text-left space-y-4">
                <h3 className="text-xl font-medium text-gray-900">SUSTAINABLE GROWTH</h3>
                <p className="text-gray-700 leading-relaxed">
                  We prioritize investments that deliver both financial returns and positive social impact.
                </p>
              </div>
              <div className="text-left space-y-4">
                <h3 className="text-xl font-medium text-gray-900">OPERATIONAL EXCELLENCE</h3>
                <p className="text-gray-700 leading-relaxed">
                  We actively support our portfolio companies to achieve their full potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
