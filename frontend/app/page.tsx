import Link from 'next/link';
import { playfair } from './layout';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 border-b border-[#b89b82] bg-[#e8dccf]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          {/* Left Nav */}
          <nav className="flex items-center gap-8 text-xs tracking-[0.25em] text-[#5a3e2b]">
            <Link href="/about" className="hover:text-[#3f2a1c]">
              ABOUT US
            </Link>
            <Link href="/energy" className="hover:text-[#3f2a1c]">
              CRYSTAL ENERGY
            </Link>
            <Link href="/colour" className="hover:text-[#3f2a1c]">
              CRYSTAL COLOUR
            </Link>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-5">
            <Link
              href="/search"
              aria-label="Search"
              className="rounded-full p-2 text-[#5a3e2b] hover:bg-[#d8c6b4] hover:text-[#3f2a1c]"
            >
              {/* Search icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-5 w-5"
              >
                <circle cx="11" cy="11" r="7" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 20l-3.5-3.5" />
              </svg>
            </Link>
            <Link
              href="/login"
              aria-label="Login"
              className="rounded-full p-2 text-[#5a3e2b] hover:bg-[#d8c6b4] hover:text-[#3f2a1c]"
            >
              {/* User icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 20.25a7.5 7.5 0 0115 0"
                />
              </svg>
            </Link>

            <Link
              href="/cart"
              aria-label="Cart"
              className="rounded-full p-2 text-[#5a3e2b] hover:bg-[#d8c6b4] hover:text-[#3f2a1c]"
            >
              {/* Cart icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.5l1.35 13.5a2.25 2.25 0 002.24 2.03h9.62a2.25 2.25 0 002.21-1.78l1.73-7.47a1.5 1.5 0 00-1.46-1.84H6.12"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 21a.75.75 0 100-1.5A.75.75 0 009 21zm9 0a.75.75 0 100-1.5.75.75 0 001.5 0z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-light tracking-wide">
          Crystal Bracelets
        </h1>
        <p className="mt-6 max-w-xl text-lg text-gray-600">
          Handcrafted crystal bracelets designed for balance, clarity, and
          everyday elegance.
        </p>
        <button className="mt-10 rounded-full bg-black px-8 py-3 text-sm text-white hover:bg-gray-800 transition">
          Shop Collection
        </button>
      </section>

      {/* Featured Section */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          {/* Section Title */}
          <div className="mb-12">
            <div className="flex items-center gap-6">
              <div className="hidden h-px flex-1 bg-gray-300 md:block" />
              <div className="text-center">
                <h2 className={`${playfair.className} text-4xl font-normal tracking-[0.3em] text-gray-900`}>
                  NATURAL CRYSTAL ENERGY
                </h2>
                <p className="mt-3 text-base tracking-[0.35em] text-gray-600">
                  STORY TELLING!!
                </p>
              </div>
              <div className="hidden h-px flex-1 bg-gray-300 md:block" />
            </div>
          </div>

          {/* Category Grid */}
          <div className="flex flex-wrap justify-center gap-10">
            {[
              { bottom: "FORTUNE & JOB", top: "Citrine X Tiger's eye" },
              { bottom: "POPULARITY & ROMANCE", top: "Rose Quartz X Moonstone" },
              { bottom: "WISDOM & SPIRITUALITY", top: "Amethyst X Fluorite" },
              { bottom: "PURIFY & PROTECTION", top: "Clear Quartz X Obsidian" },
              { bottom: "INTERACTION & CONFIDENCE", top: "Aquamarine X Smoky Quartz" },
            ].map((c) => (
              <div key={c.top} className="group w-[260px] md:w-[280px]">
                <div className="relative overflow-hidden bg-white shadow-sm transition group-hover:shadow-md">
                  {/* Image placeholder (swap to real images later) */}
                  <div className="aspect-[4/5] w-full bg-gray-200 transition duration-300 group-hover:scale-[1.03] group-hover:brightness-95" />

                  {/* Top label on image */}
                  <div className="pointer-events-none absolute left-0 right-0 top-0 p-6">
                    <p className="text-center text-xs tracking-[0.25em] text-gray-700">
                      {c.top}
                    </p>
                  </div>
                </div>

                {/* Bottom label */}
                <p className="mt-6 text-center text-lg tracking-[0.25em] text-gray-900">
                  {c.bottom}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}