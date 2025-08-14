"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="SHAMAL Logo" 
              width={120} 
              height={40} 
              className="h-4 w-auto sm:h-10 md:h-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <Link
              href="/"
              className="text-sm tracking-wide text-gray-700 hover:text-gray-900 transition-colors"
            >
              HOME
            </Link>
            <Link
              href="/who-we-are"
              className="text-sm tracking-wide text-gray-700 hover:text-gray-900 transition-colors"
            >
              WHO WE ARE
            </Link>
            <Link
              href="/what-we-do"
              className="text-sm tracking-wide text-gray-700 hover:text-gray-900 transition-colors"
            >
              WHAT WE DO
            </Link>
            <Link
              href="#contact"
              className="text-sm tracking-wide border border-gray-800 px-4 py-2 hover:bg-[#B17A50] hover:border-[#B17A50] hover:text-white transition-colors rounded-md"
            >
              GET IN TOUCH
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm border-t border-gray-200 mt-4">
              <Link
                href="/"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                onClick={closeMenu}
              >
                HOME
              </Link>
              <Link
                href="/who-we-are"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                onClick={closeMenu}
              >
                WHO WE ARE
              </Link>
              <Link
                href="/what-we-do"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                onClick={closeMenu}
              >
                WHAT WE DO
              </Link>
              <Link
                href="#contact"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-white hover:bg-[#B17A50] rounded-md transition-colors border border-gray-300 rounded-md text-center"
                onClick={closeMenu}
              >
                GET IN TOUCH
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
