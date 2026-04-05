"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 200);
  }, []);

  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <div className={`transition-all duration-1000 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          
          <p className="text-blue-400 tracking-widest mb-2">PROJECT STORE</p>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Raihan Project
          </h1>

          <p className="text-gray-400 max-w-xl mb-6">
            Jasa desain & editing profesional dengan tampilan modern,
            rapi, dan berkualitas tinggi.
          </p>

          <div className="flex gap-4 justify-center">
            <a href="#jasa">
              <button className="bg-blue-500 px-6 py-3 rounded-full hover:scale-110 transition">
                Lihat Jasa
              </button>
            </a>
            <a href="#contact">
              <button className="border px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
                Hubungi Saya
              </button>
            </a>
          </div>

        </div>
      </section>

      {/* JASA */}
      <section id="jasa" className="px-6 py-20">

        <h2 className="text-center text-3xl font-bold mb-12">
          Jasa Kami
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* DESAIN */}
          <div className="bg-zinc-900 p-6 rounded-xl hover:scale-105 transition border border-zinc-800 hover:border-yellow-400">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">
              Jasa Desain
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li>✔ Poster</li>
              <li>✔ PPT</li>
              <li>✔ Spanduk & Banner</li>
              <li>✔ Logo</li>
              <li>✔ Brosur</li>
              <li>✔ Undangan Digital & Fisik</li>
              <li>✔ Linktree Toko</li>
            </ul>
          </div>

          {/* EDITING */}
          <div className="bg-zinc-900 p-6 rounded-xl hover:scale-105 transition border border-zinc-800 hover:border-orange-400">
            <h3 className="text-2xl font-bold text-orange-400 mb-4">
              Jasa Editing
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li>✔ Film Pendek</li>
              <li>✔ Profil Organisasi</li>
              <li>✔ Editing All Video</li>
              <li>✔ Cinematic Acara</li>
              <li>✔ Video Pembelajaran</li>
              <li>✔ Video Edukasi</li>
            </ul>
          </div>

        </div>
      </section>

      {/* STIKER */}
      <section className="px-6 py-20 bg-zinc-950">

        <h2 className="text-center text-3xl font-bold mb-12">
          Jasa Cetak Stiker
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-black p-6 rounded-xl border hover:border-blue-400 transition hover:scale-105">
            <h3 className="text-xl font-bold mb-3">Kertas A4</h3>
            <p>Harga: 8K / lembar</p>
            <p className="text-red-400">✖ No Cutting</p>
            <p className="text-red-400">✖ Tidak Anti Air</p>
          </div>

          <div className="bg-black p-6 rounded-xl border hover:border-blue-400 transition hover:scale-105">
            <h3 className="text-xl font-bold mb-3">Kertas A3</h3>
            <p>Harga: 12K / lembar</p>
            <p className="text-red-400">✖ No Cutting</p>
            <p className="text-red-400">✖ Tidak Anti Air</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="text-center py-20">

        <h2 className="text-3xl font-bold mb-4">
          Tertarik dengan jasa saya?
        </h2>

        <p className="text-gray-400 mb-6">
          Hubungi saya sekarang juga
        </p>

        <a href="https://wa.me/6285263179821">
          <button className="bg-green-500 px-6 py-3 rounded-full hover:scale-110 transition">
            WhatsApp Sekarang
          </button>
        </a>

      </section>

    </main>
  );
}