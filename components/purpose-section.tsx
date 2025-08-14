export default function PurposeSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8 order-1">
            <h2 className="text-2xl sm:text-3xl font-light tracking-wider text-gray-900">OUR PURPOSE</h2>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                To be a leading global investment firm that helps realise Dubai's long-term ambitions by building,
                managing, and nurturing a high-impact portfolio of investments.
              </p>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                We are focused on outcomes that matter: meaningful value for stakeholders, sustainable growth, and
                partnerships that stand the test of time.
              </p>
            </div>
          </div>

          <div className="relative order-2">
            <img
              src="/architectural-pattern.png"
              alt="Architectural Pattern"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
