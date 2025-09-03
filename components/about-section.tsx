export default function AboutSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <img 
              src="/curved-glass-building.png" 
              alt="Modern Architecture" 
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg" 
            />
            <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 text-white">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wider">
                ESTABLISHED IN
                <br />
                DUBAI 2025
              </h2>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide text-gray-900 leading-tight">
              Osoli Real Estate was established in Dubai in 2025 as a limited liability company, founded by Emirati and international experts who possess a deep understanding of the local market with a forward-looking vision.
            </h2>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              The company specializes in providing real estate brokerage services for individuals and investors, both locally and internationally, with a focus on quality, transparency, and personalized service. In a city that has transformed into a global symbol of luxury and leadership, Osoli Real Estate was born to align with Dubai's ambition and future vision.
            </p>

            <button className="border border-gray-800 px-6 sm:px-8 py-3 text-sm tracking-wide hover:bg-[#B17A50] hover:border-[#B17A50] hover:text-white transition-colors rounded-md">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
