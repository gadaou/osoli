export default function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src="/curved-glass-building.png" alt="Modern Architecture" className="w-full h-[600px] object-cover" />
            <div className="absolute bottom-8 left-8 text-white">
              <h2 className="text-4xl font-light tracking-wider">
                A GLOBAL
                <br />
                INVESTMENT FIRM
              </h2>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl font-light tracking-wide text-gray-900 leading-tight">
              Born in Dubai, Shamal is a diversified investment firm committed to curating extraordinary opportunities
              for long-term growth.
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              From transformative destinations to strategic ventures, we invest in opportunities that deliver impact,
              shaping industries, experiences, and value for future generations.
            </p>

            <button className="border border-gray-800 px-8 py-3 text-sm tracking-wide hover:bg-gray-800 hover:text-white transition-colors">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
