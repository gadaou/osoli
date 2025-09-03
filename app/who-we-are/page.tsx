import Header from "@/components/header"
import Footer from "@/components/footer"
import TeamMember from "@/components/team-member"

export default function WhoWeArePage() {
  return (
    <main className="min-h-screen">
      <Header alwaysFilled={true} />

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-light tracking-wider text-gray-900 mb-8">WHO WE ARE</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Osoli Real Estate was established in Dubai in 2025 as a limited liability company, founded by Emirati and international experts who possess a deep understanding of the local market with a forward-looking vision.
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
                  The company specializes in providing real estate brokerage services for individuals and investors, both locally and internationally, with a focus on quality, transparency, and personalized service.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  In a city that has transformed into a global symbol of luxury and leadership, Osoli Real Estate was born to align with Dubai's ambition and future vision. We don't just sell properties; we create investment experiences based on knowledge, trust, and precision.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We are an Emirati company founded by partners who have a profound understanding of market dynamics and strong connections with key developers and government entities in the country. We build long-term relationships with our clients because we believe that trust isn't bought... it's built.
                </p>
              </div>
            </div>
            <div className="relative">
              <img src="/dubai-office-interior.png" alt="Osoli Real Estate Office" className="w-full h-[600px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-light tracking-wider text-gray-900 mb-16">OUR VALUES</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4 p-8 rounded-lg" style={{ backgroundColor: '#B17A50' }}>
              <h3 className="text-xl font-medium text-white">QUALITY</h3>
              <p className="text-white/90 leading-relaxed">
                We maintain the highest standards in all our real estate services, ensuring exceptional value and satisfaction for our clients.
              </p>
            </div>
            <div className="space-y-4 p-8 rounded-lg" style={{ backgroundColor: '#B17A50' }}>
              <h3 className="text-xl font-medium text-white">TRANSPARENCY</h3>
              <p className="text-white/90 leading-relaxed">
                We believe in open communication and honest dealings, providing clear information and guidance throughout every transaction.
              </p>
            </div>
            <div className="space-y-4 p-8 rounded-lg" style={{ backgroundColor: '#B17A50' }}>
              <h3 className="text-xl font-medium text-white">TRUST</h3>
              <p className="text-white/90 leading-relaxed">
                We build lasting relationships through integrity and reliability, knowing that trust isn't bought... it's built.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-light tracking-wider text-gray-900 mb-16">OUR LEADERSHIP</h2>
          
          <div className="space-y-24">
            <TeamMember
              quote="Master's in real estate and government policies, strategic market analyst with expertise in luxury residential projects and digital real estate marketing. Founder of 'Real Estate Minutes with Issa' platform and certified real estate trainer from the Dubai Land Department. He is also a lecturer in real estate diplomas at the Higher Colleges of Technology. Selected as UAE Ambassador for the International Property Show (IPS), deeply connected with the Dubai government, with extensive expertise in its strategic directions and vision."
              name="Issa Anouhi"
              title="Founder and CEO"
              imageSrc="/1.JPG"
              imageAlt="Issa Anouhi - Founder and CEO"
            />
            
            <TeamMember
              quote="A distinguished entrepreneur in the economic and real estate sectors. Recognized as the top selling real estate professional in Sharjah for two consecutive years before expanding into Dubai, he holds extensive expertise in sales strategy, high stakes client negotiations, and leading multi million dirhams transactions. A certified expert in strategic training for real estate brokerages, Omar is also an accomplished consultant in company formation, particularly in the food and beverage sector. Founder of several successful businesses along Al Wasl Road and Jumeirah, Dubai."
              name="Omar Al Gadban"
              title="Founder & CEO"
              imageSrc="/2.JPG"
              imageAlt="Omar Al Gadban - Founder & CEO"
              reverse={true}
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
