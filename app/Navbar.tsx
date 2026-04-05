"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <h1 className="text-xl font-extrabold">
          Raihan <span className="text-[#f2b400]">Project</span>
        </h1>

        {/* MENU */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
          <a href="/" className="hover:text-[#f2b400]">Home</a>
          <a href="#services" className="hover:text-[#f2b400]">Jasa</a>
          <Link href="/portfolio" className="hover:text-[#f2b400]">Portfolio</Link>
          <a href="#contact" className="hover:text-[#f2b400]">Kontak</a>
        </div>

        {/* BUTTON */}
        <a
          href="https://wa.me/6285263179821"
          target="_blank"
          className="hidden md:inline-block bg-black text-white px-5 py-2 rounded-full font-semibold transition hover:bg-[#f2b400] hover:text-black"
        >
          Pesan
        </a>
      </div>
    </nav>
  );
}