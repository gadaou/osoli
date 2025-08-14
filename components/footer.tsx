import { ArrowUp, Linkedin, Instagram, Youtube } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: '#B17A50' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="text-center sm:text-left">
            <Image 
              src="/logo2.png" 
              alt="SHAMAL Logo" 
              width={120} 
              height={40} 
              className="h-8 w-auto sm:h-10 md:h-12 mb-4 sm:mb-6 mx-auto sm:mx-0"
            />
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-sm tracking-wider mb-3 sm:mb-4 text-stone-200">MENU</h4>
            <div className="space-y-2 sm:space-y-3">
              <Link href="#who-we-are" className="block text-sm hover:text-stone-200 transition-colors">
                WHO WE ARE
              </Link>
              <Link href="#what-we-do" className="block text-sm hover:text-stone-200 transition-colors">
                WHAT WE DO
              </Link>
            </div>
          </div>

          <div className="text-center sm:text-left">
            <div className="space-y-2 sm:space-y-3">
              <Link href="#careers" className="block text-sm hover:text-stone-200 transition-colors">
                CAREERS
              </Link>
            </div>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-sm tracking-wider mb-3 sm:mb-4 text-stone-200">CONNECT WITH US</h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center justify-center sm:justify-start space-x-3">
                <span className="text-sm">📞</span>
                <Linkedin className="w-4 h-4" />
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-3">
                <span className="text-sm">✉️</span>
                <Instagram className="w-4 h-4" />
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-3">
                <span className="text-sm">➤</span>
                <span className="text-sm">SEND AN ENQUIRY</span>
                <Youtube className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-500 mt-6 sm:mt-8 lg:mt-10 pt-4 sm:pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-center sm:text-left">
              <Link href="#terms" className="hover:text-stone-200 transition-colors">
                TERMS & CONDITIONS
              </Link>
              <Link href="#privacy" className="hover:text-stone-200 transition-colors">
                PRIVACY POLICY
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <span className="text-sm text-center">developed by oxor.ai</span>
              <button className="flex items-center space-x-2 text-sm hover:text-stone-200 transition-colors">
                <span>BACK TO TOP</span>
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
