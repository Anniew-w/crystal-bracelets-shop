import { playfair } from './layout';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
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