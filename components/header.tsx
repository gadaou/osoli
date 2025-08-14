import Link from "next/link"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-wider text-gray-800">
            SHAMAL
          </Link>

          <nav className="hidden md:flex items-center space-x-12">
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
              className="text-sm tracking-wide border border-gray-800 px-6 py-2 hover:bg-gray-800 hover:text-white transition-colors"
            >
              GET IN TOUCH
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
