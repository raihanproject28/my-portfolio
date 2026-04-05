"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 200);
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 text-black">

      {/* HERO */}
      <section className="text-center py-20 px-6">
        <div className={`transition-all duration-1000 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          
          <div className="inline-block px-6 py-2 border-2 border-black rounded-full font-bold mb-6">
            PROJECT <span className="text-yellow-500">STORE</span>
          </div>

          <h1 className="text-5xl font-extrabold mb-4">
            JASA TERLENGKAP
          </h1>

          <p className="text-lg text-gray-600 mb-6">
            Solusi desain & editing profesional untuk kebutuhan Anda
          </p>

          <div className="flex justify-center gap-4">
            <a href="#jasa">
              <button className="bg-black text-white px-6 py-3 rounded-full hover:scale-110 transition">
                Lihat Jasa
              </button>
            </a>
            <a href="#contact">
              <button className="border px-6 py-3 rounded-full hover:bg-black hover:text-white transition">
                Hubungi Saya
              </button>
            </a>
          </div>

        </div>
      </section>

      {/* JASA */}
      <section id="jasa" className="px-6 py-16">

        <div className="grid md:grid-cols-2 gap-10">

          {/* DESAIN */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:scale-105 transition">
            <h2 className="text-2xl font-bold mb-4">
              JASA <span className="text-yellow-500">DESAIN</span>
            </h2>

            <ul className="space-y-2">
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
          <div className="bg-white p-8 rounded-xl shadow-md hover:scale-105 transition">
            <h2 className="text-2xl font-bold mb-4">
              JASA <span className="text-yellow-500">EDITING</span>
            </h2>

            <ul className="space-y-2">
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
      <section className="px-6 py-16 bg-white">

        <h2 className="text-center text-3xl font-bold mb-10">
          JASA CETAK STIKER
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="p-6 border-2 border-black rounded-xl hover:bg-black hover:text-white transition">
            <h3 className="font-bold text-lg mb-3">KERTAS A4</h3>
            <p>Harga: 8K / lembar</p>
            <p className="text-red-500">✖ No Cutting</p>
            <p className="text-red-500">✖ Tidak Anti Air</p>
          </div>

          <div className="p-6 border-2 border-black rounded-xl hover:bg-black hover:text-white transition">
            <h3 className="font-bold text-lg mb-3">KERTAS A3</h3>
            <p>Harga: 12K / lembar</p>
            <p className="text-red-500">✖ No Cutting</p>
            <p className="text-red-500">✖ Tidak Anti Air</p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="text-center py-16 bg-gray-100">

        <h2 className="text-2xl font-bold mb-4">
          Hubungi Saya
        </h2>

        <p className="mb-6 text-gray-600">
          Siap membantu kebutuhan desain & editing Anda
        </p>

        <a href="https://wa.me/6285263179821">
          <button className="bg-black text-white px-6 py-3 rounded-full hover:scale-110 transition">
            WhatsApp Sekarang
          </button>
        </a>

      </section>

    </main>
  );
}