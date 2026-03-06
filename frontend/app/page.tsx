"use client";

import { useEffect, useMemo, useState, type CSSProperties } from "react";
import Link from "next/link";
import { playfair } from "./fonts";

export default function HomePage() {
  const [headerTone, setHeaderTone] = useState<"light" | "dark">("dark");
  const catalogZoomBoost = 1.12;
  const productCatalogBase = [
    { name: "Amethyst Halo", image: "/pictures/show_Amethyst_Halo.jpg", href: "/products/show-amethyst-halo", position: "50% 35%", zoom: 1.1 },
    { name: "Blush Crystal", image: "/pictures/show_Blush_Crystal.jpg", href: "/products/show-blush-crystal", position: "50% 40%", zoom: 1.2 },
    { name: "Crystal Purity", image: "/pictures/show_Crystal_Purity.jpg", href: "/products/show-crystal-purity", position: "50% 40%", zoom: 1.1},
    { name: "Emerald Phantom", image: "/pictures/show_Emerald_Phantom.jpg", href: "/products/show-emerald-phantom", position: "80% 42%", zoom: 1.2 },
    { name: "Forest Whisper", image: "/pictures/show_Forest_Whisper.jpg", href: "/products/show-forest-whisper", position: "30% 0%", zoom: 1.6 },
    { name: "Golden Tiger", image: "/pictures/show_Golden_Tiger.jpg", href: "/products/show-golden-tiger", position: "50% 50%", zoom: 1.0 },
    { name: "Lunar Rose", image: "/pictures/show_Lunar_Rose.jpg", href: "/products/show-lunar-rose", position: "95% 35%", zoom: 1.1 },
    { name: "Rosie Moom", image: "/pictures/show_Rosie_Moom.jpg", href: "/products/show-rosie-moom", position: "50% 30%", zoom: 1.4 },
    { name: "Rosy Serenity", image: "/pictures/show_Rosy_Serenity.jpg", href: "/products/show-rosy-serenity", position: "10% 50%", zoom: 1.3 },
    { name: "Violet Whisperr", image: "/pictures/show_Violet_Whisperr.jpg", href: "/products/show-violet-whisperr", position: "50% 30%", zoom: 1.2 },
  ];
  const productCatalog = useMemo(
    () =>
      productCatalogBase.map((product, index) => {
        const originalPrice = 69 + (index % 7) * 8 + Math.floor(index / 7) * 6;
        const discountPercent = [20, 25, 30, 35][index % 4];
        const salePrice = Number((originalPrice * (1 - discountPercent / 100)).toFixed(2));
        return {
          ...product,
          originalPrice,
          salePrice,
          discountPercent,
        };
      }),
    []
  );

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-header-tone]")
    );
    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const tone = entry.target.getAttribute("data-header-tone");
          if (tone === "dark" || tone === "light") {
            setHeaderTone((prev) => (prev === tone ? prev : tone));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "-45% 0px -45% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-900 via-gray-150 to-white text-gray-900">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-0 h-1/2 w-1/2 bg-[url('/pictures/green-bracelet.png')] bg-contain bg-no-repeat opacity-85"
          style={{ top: "3cm", left: "-2cm"}}
        />
        <div
          className="absolute h-1/2 w-1/2 bg-[url('/pictures/purple-bracelet.png')] bg-contain bg-no-repeat opacity-65"
          style={{ bottom: "-8cm", right: "1cm", transform: "scale(1.45)" }}
        />
      </div>
      <div className="relative z-10 pt-30">
        {/* Top Navigation Bar */}
        <header
          className={`fixed left-0 right-0 top-0 z-50 border-b backdrop-blur ${
            headerTone === "dark"
              ? "border-black/20 bg-black/80 text-white"
              : "border-[#b89b82] bg-white/85 text-[#3f2a1c]"
          }`}
        >
          <div className="mx-auto flex w-full items-center justify-between px-8 py-4 md:px-12">
            {/* Left Nav */}
            <nav className="flex items-center gap-8 text-xs tracking-[0.25em]">
              <Link
                href="/about"
                className={`transition-colors ${
                  headerTone === "dark"
                    ? "hover:text-white/80"
                    : "hover:text-[#3f2a1c]"
                }`}
              >
                ABOUT US
              </Link>
              <Link
                href="/energy"
                className={`transition-colors ${
                  headerTone === "dark"
                    ? "hover:text-white/80"
                    : "hover:text-[#3f2a1c]"
                }`}
              >
                CRYSTAL ENERGY
              </Link>
              <Link
                href="/colour"
                className={`transition-colors ${
                  headerTone === "dark"
                    ? "hover:text-white/80"
                    : "hover:text-[#3f2a1c]"
                }`}
              >
                CRYSTAL COLOUR
              </Link>
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-5">
              <Link
                href="/search"
                aria-label="Search"
                className={`rounded-full p-2 transition-colors ${
                  headerTone === "dark" ? "hover:bg-white/15" : "hover:bg-black/10"
                }`}
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
                className={`rounded-full p-2 transition-colors ${
                  headerTone === "dark" ? "hover:bg-white/15" : "hover:bg-black/10"
                }`}
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
                className={`rounded-full p-2 transition-colors ${
                  headerTone === "dark" ? "hover:bg-white/15" : "hover:bg-black/10"
                }`}
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
        <section
          className="flex flex-col items-center justify-center px-6 py-14 text-center"
          data-header-tone="dark"
        >
          <h1 className={`${playfair.className} text-4xl md:text-8xl font-bold tracking-[0.2em] text-white`}>
             LumiCrystal
          </h1>
          <div className="mt-6 max-w-xxl">
            <div className="rounded-2xl bg-gradient-to-r from-black/60 via-black/35 to-transparent px-6 py-4 text-lg text-white shadow-sm backdrop-blur">
              <p className="leading-relaxed">
                <span className="font-semibold">Handmade in Melbourne</span>
                <br />
                Every gemstone is carefully selected for its colour, clarity, and natural energy.
                <br />
                No two stones are ever the same — each bracelet carries its own quiet story.
                <br />
                <span className="font-semibold text-2xl"> Wear Your Light !</span>
              </p>
            </div>
          </div>
        </section>

        {/* Featured Section */}
        <section className="bg-transparent px-6 pt-8 pb-25">
          <div aria-hidden className="h-8" />
          <div data-header-tone="light" className="h-px" />
          <div className="mx-auto max-w-xxl">

            {/* Category Grid */}
            <div className="mb-20 grid grid-cols-4 gap-8 justify-items-center">
              {[
                {
                  bottom: "POPULARITY & ROMANCE",
                  top: "Rose Quartz X Moonstone",
                  href: "/energy/popularity-romance",
                  image: "/pictures/pink.jpg",
                  offsetX: "0px",
                  offsetY: "20px",
                  zoom: 1.3,
                  zoomHover: 1.4,
                },
                {
                  bottom: "WISDOM & SPIRITUALITY",
                  top: "Amethyst",
                  href: "/energy/wisdom-spirituality",
                  image: "/pictures/show_violet_whisper.jpg",
                  offsetX: "0px",
                  offsetY: "40px",
                  zoom: 1.3,
                  zoomHover: 1.4,
                },
                {
                  bottom: "PURIFY & PROTECTION",
                  top: "Clear Quartz",
                  href: "/energy/purify-protection",
                  image: "/pictures/white1.jpg",
                  offsetX: "0px",
                  offsetY: "20px",
                  zoom: 1.3,
                  zoomHover: 1.4,
                },
                {
                  bottom: "FORTUNE & JOB",
                  top: "Citrine X Tiger's eye",
                  href: "/energy/fortune-job",
                  image: "/pictures/yellow.jpg",
                  offsetX: "0px",
                  offsetY: "5px",
                  zoom: 1.1,
                  zoomHover: 1.2,
                },
              ].map((c) => (
                <Link
                  key={c.top}
                  href={c.href}
                  className="group w-[300px] md:w-[320px] transition-transform duration-300 hover:scale-[1.03]"
                >
                  <div className="relative overflow-hidden rounded-xl bg-white/70 shadow-sm transition group-hover:shadow-md">
                    <img
                      src={c.image}
                      alt={c.top}
                      loading="lazy"
                      decoding="async"
                      width={800}
                      height={1000}
                      className="grid-card-image aspect-[4/5] w-full object-contain transition duration-300 group-hover:brightness-95"
                      style={
                        {
                          objectPosition: c.position ?? "50% 50%",
                          "--img-x": c.offsetX ?? "0px",
                          "--img-y": c.offsetY ?? "0px",
                          "--img-scale": c.zoom ?? 1.08,
                          "--img-scale-hover": c.zoomHover ?? 1.15,
                        } as CSSProperties
                      }
                    />

                    {/* Top label on image */}
                    <div className="pointer-events-none absolute left-0 right-0 top-0 p-6">
                      <p className="text-center text-sm font-bold tracking-[0.25em] text-gray-700">
                        {c.top}
                      </p>
                    </div>
                  </div>

                  {/* Bottom label */}
                  <p className={`${playfair.className} mt-4 text-center text-xl font-bold tracking-[0.25em] text-white`}>
                    {c.bottom}
                  </p>
                </Link>
              ))}
            </div>

            <div className="relative left-1/2 right-1/2 mt-16 mb-20 w-screen -translate-x-1/2 overflow-hidden">
              <Link href="/your-link" className="block">
                <img
                  src="/pictures/green-6.jpg"
                  alt="Showcase"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  width={1920}
                  height={1080}
                  className="h-[520px] w-full object-cover shadow-sm md:h-[620px] 
                            transition-transform duration-500 ease-out 
                            hover:scale-105"
                  style={{ objectPosition: "50% 40%" }}
                />
              </Link>
            </div>

            {/* Product Catalog */}
            <section className="px-6 pb-16" data-header-tone="light">
              <div className="mx-auto max-w-7xl">
                <h2 className={`${playfair.className} mb-8 text-center text-3xl font-bold tracking-[0.18em] text-white md:text-4xl`}>
                  PRODUCTS
                </h2>
                <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
                  {productCatalog.map((product, index) => (
                    <Link
                      key={product.href}
                      href={product.href}
                      className="group block overflow-hidden rounded-xl bg-gray-100 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="h-80 w-full overflow-hidden bg-gray-200">
                        <img
                          src={product.image}
                          alt={product.name}
                          loading={index < 8 ? "eager" : "lazy"}
                          fetchPriority={index < 4 ? "high" : "auto"}
                          decoding="async"
                          width={800}
                          height={800}
                          className="block h-80 w-full object-cover transition duration-300"
                          style={{
                            objectPosition: product.position,
                            transform: `translate(${product.nudgeX ?? 0}px, ${product.nudgeY ?? 0}px) scale(${product.zoom * catalogZoomBoost})`,
                            transformOrigin: "center",
                          }}
                        />
                      </div>
                      <div className="relative z-10 bg-gray-100 px-4 py-4">
                        <p className={`${playfair.className} text-left text-lg font-semibold tracking-[0.03em] text-gray-900`}>
                          {product.name}
                        </p>
                        <div className={`${playfair.className} mt-1 flex items-end gap-2`}>
                          <span className="text-2xl font-extrabold text-gray-900">
                            A${product.salePrice.toFixed(2)}
                          </span>
                          <span className="text-sm text-gray-400 line-through">
                            A${product.originalPrice.toFixed(2)}
                          </span>
                          <span className="ml-auto text-lg font-extrabold tracking-wide text-red-600">
                            {product.discountPercent}% OFF
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>

            <div className="relative left-1/2 right-1/2 mt-30 w-screen -translate-x-1/2">
              <img
                src="/pictures/show1.jpg"
                alt="Showcase"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width={1920}
                height={1080}
                className="h-[420px] w-full object-cover shadow-sm md:h-[520px]"
                style={{ objectPosition: "50% 45%" }}
              />
              <p className={`${playfair.className} mt-0 text-center text-lg font-bold tracking-[0.15em] text-gray-500`}>
                All Made By Heart
              </p>
            </div>

          </div>
        </section>

        <footer className="border-t border-black/10 bg-white/70 px-6 py-16 text-sm text-gray-700 backdrop-blur" data-header-tone="light">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <p className="text-xs font-semibold tracking-[0.25em] text-gray-800">HELP</p>
              <p className="text-gray-600">
                If you have any questions, we would love to hear from you. Please leave us a
                message at the email below and our team will get back to you shortly.
              </p>
              <Link
                href="mailto:copany email"
                className="inline-block text-gray-800 underline underline-offset-4"
              >
                “copany email”
              </Link>
            </div>

            <div className="space-y-4">
              <p className="text-xs font-semibold tracking-[0.25em] text-gray-800">SERVICES</p>
              <div className="space-y-2">
                <Link href="/services/personalisation" className="block hover:text-gray-900">
                  DIY
                </Link>
                <Link href="/services/gifting" className="block hover:text-gray-900">
                  Gifting
                </Link>
                <Link href="/services/repairs" className="block hover:text-gray-900">
                  Repairs
                </Link>
                <Link href="/delivery-returns" className="block hover:text-gray-900">
                  Delivery, Returns & Exchanges
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xs font-semibold tracking-[0.25em] text-gray-800">ABOUT</p>
              <div className="space-y-2">
                <Link href="/about/fashion-shows" className="block hover:text-gray-900">
                  Brand Story
                </Link>
                <Link href="/about/arts-culture" className="block hover:text-gray-900">
                  Membership
                </Link>
                <Link href="/about/news" className="block hover:text-gray-900">
                  New Arrivals
                </Link>
                <Link href="/about/ethics" className="block hover:text-gray-900">
                  Signature Piece
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xs font-semibold tracking-[0.25em] text-gray-800">CONNECT</p>
              <p className="text-gray-600">
                Follow us on social media for the latest news, including new arrivals and special sales.
              </p>
              <div className="space-y-0 pt-2">
                <Link href="/instagram" className="block hover:text-gray-900">
                  Instagram:
                </Link>
                <Link href="/tiktok" className="block hover:text-gray-900">
                  TikTok:
                </Link>
                <Link href="/pinterest" className="block hover:text-gray-900">
                  Pinterest:
                </Link>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-4 border-t border-black/10 pt-6 text-xs text-gray-600 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-gray-600">
              Australia
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/legal" className="hover:text-gray-900">
                Legal & Privacy
              </Link>
              <Link href="/cookies" className="hover:text-gray-900">
                Cookies
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
