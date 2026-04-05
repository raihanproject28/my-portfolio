"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 300);
  }, []);

  return (
    <main className="bg-black text-white min-h-screen px-6 py-10">

      {/* HERO */}
      <section
        className={`text-center transition-all duration-1000 ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-5xl font-bold mb-4">
          Raihan Project
        </h1>
        <p className="text-lg text-gray-400 mb-6">
          Creative Design & Video Editing Services
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full transition hover:scale-105">
            Lihat Jasa
          </button>
          <button className="border border-white px-6 py-3 rounded-full transition hover:bg-white hover:text-black">
            Hubungi Saya
          </button>
        </div>
      </section>

      {/* JASA UTAMA */}
      <section className="mt-20 grid md:grid-cols-2 gap-10">

        {/* DESAIN */}
        <div className="bg-zinc-900 p-6 rounded-xl hover:scale-105 transition">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            Jasa Desain
          </h2>
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
        <div className="bg-zinc-900 p-6 rounded-xl hover:scale-105 transition">
          <h2 className="text-2xl font-bold text-orange-400 mb-4">
            Jasa Editing
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li>✔ Film Pendek</li>
            <li>✔ Profil Organisasi</li>
            <li>✔ Editing All Video</li>
            <li>✔ Cinematic Acara</li>
            <li>✔ Video Pembelajaran</li>
            <li>✔ Video Edukasi</li>
          </ul>
        </div>
      </section>

      {/* CETAK STIKER */}
      <section className="mt-20 text-center">
        <h2 className="text-3xl font-bold mb-10">
          Jasa Cetak Stiker
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-zinc-900 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-4">Kertas A4</h3>
            <p>Harga: 8K / lembar</p>
            <p className="text-red-400">✖ No Cutting</p>
            <p className="text-red-400">✖ Tidak Anti Air</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-4">Kertas A3</h3>
            <p>Harga: 12K / lembar</p>
            <p className="text-red-400">✖ No Cutting</p>
            <p className="text-red-400">✖ Tidak Anti Air</p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="mt-20 text-center">
        <h2 className="text-2xl mb-4">Hubungi Saya</h2>
        <p className="text-gray-400">0852-6317-9821</p>
        <p className="text-gray-400">raihanproject28@gmail.com</p>
      </section>

    </main>
  );
}