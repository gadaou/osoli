import Header from "@/components/header"
import Footer from "@/components/footer"

export default function WhoWeArePage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-light tracking-wider text-gray-900 mb-8">WHO WE ARE</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Born in Dubai, Shamal is a diversified investment firm committed to curating extraordinary opportunities
              for long-term growth.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-light tracking-wider text-gray-900">OUR STORY</h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  From transformative destinations to strategic ventures, we invest in opportunities that deliver
                  impact, shaping industries, experiences, and value for future generations.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our approach is rooted in deep market understanding, strategic partnerships, and a commitment to
                  sustainable growth that benefits all stakeholders.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We believe in the power of visionary thinking combined with disciplined execution, creating lasting
                  value across diverse sectors and markets.
                </p>
              </div>
            </div>
            <div className="relative">
              <img src="/dubai-office-interior.png" alt="Shamal Office" className="w-full h-[600px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-light tracking-wider text-gray-900 mb-16">OUR VALUES</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-gray-900">EXCELLENCE</h3>
              <p className="text-gray-700 leading-relaxed">
                We pursue the highest standards in everything we do, from investment selection to partnership
                management.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-gray-900">INNOVATION</h3>
              <p className="text-gray-700 leading-relaxed">
                We embrace forward-thinking approaches and cutting-edge solutions to create extraordinary value.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-gray-900">INTEGRITY</h3>
              <p className="text-gray-700 leading-relaxed">
                We build trust through transparency, ethical practices, and unwavering commitment to our principles.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
