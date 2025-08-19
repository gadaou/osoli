export default function PortfolioSection() {
  const portfolioItems = [
    {
      title: "REAL ESTATE",
      image: "/bw-dubai-residential.png",
      colorImage: "/dubai-colorful-buildings.png",
    },
    {
      title: "HOSPITALITY",
      image: "/luxury-hotel-interior-bw.png",
      colorImage: "/luxury-hotel-interior.png",
    },
    {
      title: "LIFESTYLE EXPERIENCES",
      image: "/black-and-white-fine-dining.png",
      colorImage: "/colorful-fine-dining.png",
    },
  ]

  const secondRowItems = [
    {
      title: "PUBLIC MARKETS",
      image: "/bw-public-markets.png",
      colorImage: "/colorful-public-markets.png",
    },
    {
      title: "PRIVATE MARKETS",
      image: "/bw-private-markets.png",
      colorImage: "/colorful-private-markets.png",
    },
    {
      title: "STRATEGIC INVESTMENTS",
      image: "/bw-private-markets.png",
      colorImage: "/colorful-strategic-investments.png",
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-light tracking-wider mb-8 sm:mb-12 lg:mb-16 text-gray-900 text-center sm:text-left">OUR PORTFOLIO</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="portfolio-item group cursor-pointer">
              <div className="relative h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-0"
                />
                <img
                  src={item.colorImage || "/placeholder.svg"}
                  alt={`${item.title} - Color`}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-700"></div>
                <div className="absolute inset-0 flex items-end">
                  <h3 className="text-white text-lg sm:text-xl font-light tracking-wider p-4 sm:p-6 lg:p-8">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8">
          {secondRowItems.map((item, index) => (
            <div key={index} className="portfolio-item group cursor-pointer">
              <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] overflow-hidden rounded-lg">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-0"
                />
                <img
                  src={item.colorImage || "/placeholder.svg"}
                  alt={`${item.title} - Color`}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-700"></div>
                <div className="absolute inset-0 flex items-end">
                  <h3 className="text-white text-base sm:text-lg lg:text-xl font-light tracking-wider p-4 sm:p-6 lg:p-8">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
