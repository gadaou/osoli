"use client"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

interface HeaderProps {
  alwaysFilled?: boolean
}

export default function Header({ alwaysFilled = false }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const heroHeight = window.innerHeight
      setIsScrolled(scrollPosition > heroHeight * 0.8)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      alwaysFilled || isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="SHAMAL Logo" 
              width={120} 
              height={40} 
              className={`h-4 w-auto sm:h-10 md:h-12 transition-colors duration-300 ${
                alwaysFilled || isScrolled ? 'filter-none' : 'brightness-0 invert'
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <Link
              href="/"
              className={`text-sm tracking-wide transition-colors duration-300 ${
                alwaysFilled || isScrolled 
                  ? 'text-gray-700 hover:text-gray-900' 
                  : 'text-white hover:text-gray-200'
              }`}
            >
              HOME
            </Link>
            <Link
              href="/who-we-are"
              className={`text-sm tracking-wide transition-colors duration-300 ${
                alwaysFilled || isScrolled 
                  ? 'text-gray-700 hover:text-gray-900' 
                  : 'text-white hover:text-gray-200'
              }`}
            >
              WHO WE ARE
            </Link>
            <Link
              href="/what-we-do"
              className={`text-sm tracking-wide transition-colors duration-300 ${
                alwaysFilled || isScrolled 
                  ? 'text-gray-700 hover:text-gray-900' 
                  : 'text-white hover:text-gray-200'
              }`}
            >
              WHAT WE DO
            </Link>
            <Link
              href="#contact"
              className={`text-sm tracking-wide transition-colors duration-300`}
            >
              <span className={`px-4 py-2 border transition-colors duration-300 rounded-md ${
                alwaysFilled || isScrolled 
                  ? 'border-gray-800 hover:bg-[#B17A50] hover:border-[#B17A50] hover:text-white' 
                  : 'border-white text-white hover:bg-[#B17A50] hover:border-[#B17A50] hover:text-white'
              }`}>
                GET IN TOUCH
              </span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors duration-300 ${
              alwaysFilled || isScrolled 
                ? 'text-gray-700 hover:text-gray-900' 
                : 'text-white hover:text-gray-200'
            }`}
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
            <div className={`px-2 pt-2 pb-3 space-y-1 border-t mt-4 transition-all duration-300 ${
              alwaysFilled || isScrolled 
                ? 'bg-white/95 backdrop-blur-sm border-gray-200' 
                : 'bg-black/20 backdrop-blur-sm border-white/20'
            }`}>
              <Link
                href="/"
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  alwaysFilled || isScrolled 
                    ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-50' 
                    : 'text-white hover:text-gray-200 hover:bg-white/10'
                }`}
                onClick={closeMenu}
              >
                HOME
              </Link>
              <Link
                href="/who-we-are"
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  alwaysFilled || isScrolled 
                    ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-50' 
                    : 'text-white hover:text-gray-200 hover:bg-white/10'
                }`}
                onClick={closeMenu}
              >
                WHO WE ARE
              </Link>
              <Link
                href="/what-we-do"
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  alwaysFilled || isScrolled 
                    ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-50' 
                    : 'text-white hover:text-gray-200 hover:bg-white/10'
                }`}
                onClick={closeMenu}
              >
                WHAT WE DO
              </Link>
              <Link
                href="#contact"
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors text-center ${
                  alwaysFilled || isScrolled 
                    ? 'text-gray-700 hover:text-white hover:bg-[#B17A50] border border-gray-300' 
                    : 'text-white hover:text-white hover:bg-[#B17A50] border border-white'
                }`}
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
