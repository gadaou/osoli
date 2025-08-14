import { ArrowUp, Linkedin, Instagram, Youtube } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-stone-400 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold tracking-wider mb-6">SHAMAL</h3>
          </div>

          <div>
            <h4 className="text-sm tracking-wider mb-4 text-stone-200">MENU</h4>
            <div className="space-y-3">
              <Link href="#who-we-are" className="block text-sm hover:text-stone-200 transition-colors">
                WHO WE ARE
              </Link>
              <Link href="#what-we-do" className="block text-sm hover:text-stone-200 transition-colors">
                WHAT WE DO
              </Link>
            </div>
          </div>

          <div>
            <div className="space-y-3">
              <Link href="#careers" className="block text-sm hover:text-stone-200 transition-colors">
                CAREERS
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm tracking-wider mb-4 text-stone-200">CONNECT WITH US</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-sm">📞</span>
                <Linkedin className="w-4 h-4 ml-auto" />
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-sm">✉️</span>
                <Instagram className="w-4 h-4 ml-auto" />
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-sm">➤</span>
                <span className="text-sm">SEND AN ENQUIRY</span>
                <Youtube className="w-4 h-4 ml-auto" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-500 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 text-sm">
              <Link href="#terms" className="hover:text-stone-200 transition-colors">
                TERMS & CONDITIONS
              </Link>
              <Link href="#privacy" className="hover:text-stone-200 transition-colors">
                PRIVACY POLICY
              </Link>
            </div>

            <div className="flex items-center space-x-6 mt-3 md:mt-0">
              <span className="text-sm">developed by oxor.ai</span>
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
