export default function PurposeSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8 order-1">
            <h2 className="text-2xl sm:text-3xl font-light tracking-wider text-gray-900">OUR MISSION</h2>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                We don't just sell properties; we create investment experiences based on knowledge, trust, and precision. The company's headquarters is in Dubai, serving a diverse client base that includes nationals, residents, and foreign investors seeking promising opportunities in the UAE real estate market.
              </p>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                We are an Emirati company founded by partners who have a profound understanding of market dynamics and strong connections with key developers and government entities in the country. We build long-term relationships with our clients because we believe that trust isn't bought... it's built.
              </p>
            </div>
          </div>

          <div className="relative order-2">
            <img
              src="/dubai.jpg"
              alt="Dubai Skyline"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
