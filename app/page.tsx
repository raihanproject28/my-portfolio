"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#f3f3f3] pt-24 text-black">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-20 md:py-28">
        <div className="absolute left-0 top-0 h-52 w-52 rounded-br-full border-b-4 border-r-4 border-black/20" />

        <div className="absolute right-6 top-10 hidden flex-col gap-3 opacity-70 md:flex">
          <div className="h-14 w-14 rotate-12 border-[3px] border-black/50" />
          <div className="ml-10 h-10 w-10 -rotate-12 border-[3px] border-black/70" />
          <div className="ml-4 h-16 w-16 rotate-6 border-[3px] border-black/20" />
        </div>

        <div className="mx-auto max-w-6xl">
          <div
            className={`mx-auto max-w-4xl text-center transition-all duration-1000 ${
              show ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="mb-6 inline-flex items-center rounded-full border-2 border-black bg-white px-6 py-2 text-sm font-bold shadow-sm">
              PROJECT <span className="ml-1 text-[#f2b400]">STORE</span>
            </div>

            <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
              JASA TERLENGKAP
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-700 md:text-xl">
              Solusi desain, editing, dan kebutuhan visual untuk personal,
              organisasi, maupun usaha Anda.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="#services"
                className="rounded-full bg-black px-7 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#f2b400] hover:text-black"
              >
                Lihat Jasa
              </a>

              <a
                href="#contact"
                className="rounded-full border-2 border-black px-7 py-3 font-semibold text-black transition duration-300 hover:-translate-y-1 hover:bg-black hover:text-white"
              >
                Hubungi Saya
              </a>

              <Link
                href="/portfolio"
                className="rounded-full border-2 border-[#f2b400] bg-white px-7 py-3 font-semibold text-black transition duration-300 hover:-translate-y-1 hover:bg-[#f2b400]"
              >
                Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#f2b400]">
              Layanan Utama
            </p>
            <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">
              Jasa yang Tersedia
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="mb-6 inline-block rounded-full bg-black px-5 py-2 text-xl font-bold text-white">
                JASA <span className="text-[#f2b400]">DESAIN</span>
              </div>

              <ul className="space-y-3 text-lg">
                <li>✔ Poster</li>
                <li>✔ PPT</li>
                <li>✔ Spanduk & Banner</li>
                <li>✔ Logo</li>
                <li>✔ Brosur</li>
                <li>✔ Undangan Digital & Fisik</li>
                <li>✔ Linktree Toko</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="mb-6 inline-block rounded-full bg-black px-5 py-2 text-xl font-bold text-white">
                JASA <span className="text-[#f2b400]">EDITING</span>
              </div>

              <ul className="space-y-3 text-lg">
                <li>✔ Film Pendek</li>
                <li>✔ Profil Organisasi</li>
                <li>✔ Editing All Video</li>
                <li>✔ Cinematic Acara</li>
                <li>✔ Video Pembelajaran</li>
                <li>✔ Video P3K Guru</li>
                <li>✔ Video Edukasi</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* STICKER */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#f2b400]">
              Cetak
            </p>
            <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">
              Jasa Cetak Stiker
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border-2 border-black bg-[#f8f8f8] p-8 transition duration-300 hover:-translate-y-2 hover:bg-black hover:text-white">
              <div className="mb-5 inline-block rounded-full bg-black px-5 py-2 text-xl font-bold text-white">
                KERTAS <span className="text-[#f2b400]">A4</span>
              </div>
              <ul className="space-y-3 text-lg">
                <li>✔ Harga: 8K / lembar</li>
                <li className="text-red-500">✖ No Cutting</li>
                <li className="text-red-500">✖ Tidak Anti Air</li>
              </ul>
            </div>

            <div className="rounded-3xl border-2 border-black bg-[#f8f8f8] p-8 transition duration-300 hover:-translate-y-2 hover:bg-black hover:text-white">
              <div className="mb-5 inline-block rounded-full bg-black px-5 py-2 text-xl font-bold text-white">
                KERTAS <span className="text-[#f2b400]">A3</span>
              </div>
              <ul className="space-y-3 text-lg">
                <li>✔ Harga: 12K / lembar</li>
                <li className="text-red-500">✖ No Cutting</li>
                <li className="text-red-500">✖ Tidak Anti Air</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#f2b400]">
              Kenapa Pilih Kami
            </p>
            <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">
              Cepat, Rapi, dan Siap Bantu
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-8 shadow-md transition duration-300 hover:-translate-y-2">
              <div className="mb-4 text-4xl">⚡</div>
              <h3 className="text-xl font-bold">Respon Cepat</h3>
              <p className="mt-3 text-gray-700">
                Siap membantu kebutuhan desain dan editing dengan proses yang
                cepat dan komunikatif.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-md transition duration-300 hover:-translate-y-2">
              <div className="mb-4 text-4xl">🎨</div>
              <h3 className="text-xl font-bold">Desain Menarik</h3>
              <p className="mt-3 text-gray-700">
                Mengutamakan tampilan yang clean, kuat, dan sesuai kebutuhan
                branding Anda.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-md transition duration-300 hover:-translate-y-2">
              <div className="mb-4 text-4xl">🚀</div>
              <h3 className="text-xl font-bold">Siap untuk Berbagai Kebutuhan</h3>
              <p className="mt-3 text-gray-700">
                Cocok untuk tugas, organisasi, usaha, promosi, dan berbagai
                kebutuhan visual lainnya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-black px-6 py-16 text-white">
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-[#121212] p-10 text-center shadow-xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#f2b400]">
            Kontak
          </p>
          <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">
            Siap Bekerja Sama dengan Anda
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Untuk pemesanan desain, editing, atau cetak stiker, hubungi saya
            melalui WhatsApp, email, atau Instagram.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/6285263179821"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#f2b400] px-7 py-3 font-semibold text-black transition duration-300 hover:-translate-y-1 hover:bg-white"
            >
              WhatsApp
            </a>

            <a
              href="mailto:raihanproject28@gmail.com"
              className="rounded-full border border-white px-7 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-black"
            >
              Email
            </a>

            <a
              href="https://instagram.com/raihan_projct"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#f2b400] px-7 py-3 font-semibold text-[#f2b400] transition duration-300 hover:-translate-y-1 hover:bg-[#f2b400] hover:text-black"
            >
              Instagram
            </a>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            0852-6317-9821 • raihanproject28@gmail.com • @raihan_projct
          </div>
        </div>
      </section>
    </main>
  );
}