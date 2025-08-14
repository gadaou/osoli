export default function PurposeSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-light tracking-wider text-gray-900">OUR PURPOSE</h2>

            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                To be a leading global investment firm that helps realise Dubai's long-term ambitions by building,
                managing, and nurturing a high-impact portfolio of investments.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                We are focused on outcomes that matter: meaningful value for stakeholders, sustainable growth, and
                partnerships that stand the test of time.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="/architectural-pattern.png"
              alt="Architectural Pattern"
              className="w-full h-[600px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
