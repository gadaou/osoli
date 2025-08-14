import { ChevronDown } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/dubai-sunset-skyline.png')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60"></div>
      </div>

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-8 leading-tight">
          WE INVEST IN THE
          <br />
          EXTRAORDINARY
        </h1>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </div>
    </section>
  )
}
