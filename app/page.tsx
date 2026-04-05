"use client";

import Link from "next/link";

const designServices = [
  "Poster & Flyer",
  "Presentasi PPT",
  "Spanduk & Banner",
  "Logo & Branding",
  "Brosur & Pamflet",
  "Undangan Digital & Fisik",
  "Linktree & Bio Link",
];

const editingServices = [
  "Film Pendek",
  "Profil Organisasi / Company Profile",
  "Editing Video Konten",
  "Cinematic Event",
  "Video Edukasi",
  "Reels & Short-Form",
];

const portfolioItems = [
  { title: "Poster Event Musik", type: "Desain", image: "/portfolio-1.jpg" },
  { title: "Cinematic Wedding", type: "Video", image: "/portfolio-2.jpg" },
  { title: "Logo Startup", type: "Desain", image: "/portfolio-3.jpg" },
  { title: "Video Profil Sekolah", type: "Video", image: "/portfolio-4.jpg" },
  { title: "Banner Ramadan", type: "Desain", image: "/portfolio-5.jpg" },
  { title: "Reels Produk UMKM", type: "Video", image: "/portfolio-6.jpg" },
];

const testimonials = [
  {
    name: "Andi Pratama",
    role: "Ketua BEM Universitas",
    text: "Hasilnya melampaui ekspektasi! Poster dan banner untuk acara kami terlihat sangat profesional. Proses revisinya juga cepat dan responsif.",
  },
  {
    name: "Sari Dewi",
    role: "Owner UMKM Kuliner",
    text: "Sudah 3x order di sini, selalu puas! Video reels produk saya jadi jauh lebih menarik dan views meningkat drastis. Recommended!",
  },
  {
    name: "Muhammad Rizki",
    role: "Panitia Event Kampus",
    text: "Keren banget hasilnya! Film pendek untuk acara wisuda kami dibuat dengan sangat cinematic. Terima kasih Raihan Project!",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f6f6] text-[#111]">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-black tracking-tight">
            Raihan <span className="text-[#f2b400]">Project</span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
            <a href="#services" className="transition hover:text-[#f2b400]">Jasa</a>
            <a href="#portfolio" className="transition hover:text-[#f2b400]">Portfolio</a>
            <a href="#pricing" className="transition hover:text-[#f2b400]">Harga</a>
            <a href="#contact" className="transition hover:text-[#f2b400]">Kontak</a>
          </nav>

          <a
            href="https://wa.me/6285263179821"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-black px-5 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#f2b400] hover:text-black"
          >
            Mulai Order
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 pb-24 pt-20">
        <div className="absolute -left-10 top-0 h-52 w-52 rounded-full border-[10px] border-black/10" />
        <div className="absolute right-8 top-10 hidden flex-col gap-3 md:flex">
          <div className="h-14 w-14 rotate-12 border-[3px] border-black/40" />
          <div className="ml-10 h-10 w-10 -rotate-12 border-[3px] border-black/60" />
          <div className="ml-4 h-16 w-16 rotate-6 border-[3px] border-black/20" />
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border-2 border-black bg-white px-5 py-2 text-sm font-bold shadow-sm">
              ✦ Creative Studio
            </div>

            <h1 className="mt-6 text-5xl font-black tracking-tight md:text-7xl">
              Raihan Project
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-700 md:text-xl">
              Creative Design & Video Editing Services
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-gray-600 md:text-lg">
              Kami menghadirkan desain kreatif dan editing video profesional untuk brand,
              acara, dan konten Anda — dengan kualitas premium dan harga terjangkau.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="#services"
                className="rounded-full bg-black px-7 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-[#f2b400] hover:text-black"
              >
                Lihat Jasa
              </a>
              <a
                href="#portfolio"
                className="rounded-full border-2 border-black px-7 py-3 font-semibold text-black transition hover:-translate-y-1 hover:bg-black hover:text-white"
              >
                Portfolio
              </a>
              <a
                href="#contact"
                className="rounded-full border-2 border-[#f2b400] bg-white px-7 py-3 font-semibold text-black transition hover:-translate-y-1 hover:bg-[#f2b400]"
              >
                Hubungi Saya
              </a>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <div className="text-3xl font-black">50+</div>
                <div className="mt-2 text-sm text-gray-600">Proyek Selesai</div>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <div className="text-3xl font-black">100%</div>
                <div className="mt-2 text-sm text-gray-600">Kepuasan Klien</div>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <div className="text-3xl font-black">24h</div>
                <div className="mt-2 text-sm text-gray-600">Fast Response</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#f2b400]">
              ✦ Layanan Kami
            </p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Apa yang Kami Tawarkan
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[28px] bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-6 inline-block rounded-full bg-black px-5 py-2 text-xl font-bold text-white">
                Jasa <span className="text-[#f2b400]">Desain</span>
              </div>
              <p className="mb-6 text-gray-600">
                Visual kreatif untuk semua kebutuhan branding Anda
              </p>
              <ul className="space-y-3 text-lg">
                {designServices.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-[28px] bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-6 inline-block rounded-full bg-black px-5 py-2 text-xl font-bold text-white">
                Jasa <span className="text-[#f2b400]">Editing</span>
              </div>
              <p className="mb-6 text-gray-600">
                Produksi video profesional dengan sentuhan sinematik
              </p>
              <ul className="space-y-3 text-lg">
                {editingServices.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#f2b400]">
              ✦ Cetak Stiker
            </p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Layanan Print Premium
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Stiker berkualitas tinggi, tahan air, hasil tajam
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-[28px] border-2 border-black bg-[#fafafa] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4 inline-flex rounded-full bg-[#f2b400] px-4 py-2 text-sm font-bold text-black">
                Populer
              </div>
              <h3 className="text-3xl font-black">A4</h3>
              <p className="mt-2 text-gray-600">Cetak Stiker</p>
              <ul className="mt-6 space-y-3 text-lg">
                <li>✓ Ukuran 21 × 29.7 cm</li>
                <li>✓ Tahan air (waterproof)</li>
                <li>✓ Cutting presisi</li>
                <li>✓ Warna tajam & vivid</li>
                <li>✓ Laminating glossy/matte</li>
              </ul>
              <a
                href="https://wa.me/6285263179821"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-block rounded-full bg-black px-6 py-3 font-semibold text-white transition hover:bg-[#f2b400] hover:text-black"
              >
                Tanya Harga
              </a>
            </div>

            <div className="rounded-[28px] border-2 border-black bg-[#fafafa] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4 inline-flex rounded-full bg-black px-4 py-2 text-sm font-bold text-white">
                Best Value
              </div>
              <h3 className="text-3xl font-black">A3</h3>
              <p className="mt-2 text-gray-600">Cetak Stiker</p>
              <ul className="mt-6 space-y-3 text-lg">
                <li>✓ Ukuran 29.7 × 42 cm</li>
                <li>✓ Tahan air (waterproof)</li>
                <li>✓ Cutting presisi</li>
                <li>✓ Warna tajam & vivid</li>
                <li>✓ Laminating glossy/matte</li>
                <li>✓ Cocok untuk banner kecil</li>
              </ul>
              <a
                href="https://wa.me/6285263179821"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-block rounded-full bg-black px-6 py-3 font-semibold text-white transition hover:bg-[#f2b400] hover:text-black"
              >
                Tanya Harga
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#f2b400]">
              ✦ Karya Kami
            </p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Portfolio</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Klik untuk melihat detail proyek
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {portfolioItems.map((item) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-[28px] bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden bg-gray-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://via.placeholder.com/800x600?text=Portfolio";
                    }}
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-black px-4 py-1 text-sm font-semibold text-white">
                    {item.type}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/portfolio"
              className="inline-block rounded-full border-2 border-black px-7 py-3 font-semibold transition hover:bg-black hover:text-white"
            >
              Lihat Lebih Banyak →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#f2b400]">
              ✦ Keunggulan
            </p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Mengapa Pilih Kami?
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-[28px] bg-[#fafafa] p-8 shadow-sm">
              <div className="text-4xl">⚡</div>
              <h3 className="mt-4 text-2xl font-bold">Fast Response</h3>
              <p className="mt-3 text-gray-600">
                Balasan cepat, revisi tepat waktu, dan pengiriman sesuai deadline.
              </p>
            </div>

            <div className="rounded-[28px] bg-[#fafafa] p-8 shadow-sm">
              <div className="text-4xl">🎨</div>
              <h3 className="mt-4 text-2xl font-bold">Desain Menarik</h3>
              <p className="mt-3 text-gray-600">
                Visual modern dan estetis, disesuaikan dengan kebutuhan dan brand Anda.
              </p>
            </div>

            <div className="rounded-[28px] bg-[#fafafa] p-8 shadow-sm">
              <div className="text-4xl">💼</div>
              <h3 className="mt-4 text-2xl font-bold">Profesional</h3>
              <p className="mt-3 text-gray-600">
                Pengalaman menangani berbagai jenis proyek desain dan video.
              </p>
            </div>

            <div className="rounded-[28px] bg-[#fafafa] p-8 shadow-sm">
              <div className="text-4xl">🧩</div>
              <h3 className="mt-4 text-2xl font-bold">Fleksibel</h3>
              <p className="mt-3 text-gray-600">
                Paket yang bisa disesuaikan, revisi tersedia, harga terjangkau.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#f2b400]">
              ✦ Testimoni
            </p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Kata Klien Kami
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className="rounded-[28px] bg-white p-8 shadow-md">
                <div className="text-lg text-[#f2b400]">★★★★★</div>
                <p className="mt-4 leading-8 text-gray-700">"{item.text}"</p>
                <div className="mt-6">
                  <div className="text-lg font-bold">{item.name}</div>
                  <div className="text-sm text-gray-500">{item.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-black px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-white/10 bg-[#121212] p-10 shadow-xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#f2b400]">
              ✦ Hubungi Kami
            </p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Siap Berkolaborasi?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-300">
              Ceritakan kebutuhan Anda. Kami siap membantu mewujudkan ide menjadi
              karya visual yang memukau.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/6285263179821"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#25D366] px-7 py-3 font-semibold text-black transition hover:-translate-y-1 hover:bg-white"
            >
              Chat via WhatsApp
            </a>

            <a
              href="https://instagram.com/raihanproject"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white px-7 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-white hover:text-black"
            >
              Follow & DM @raihanproject
            </a>
          </div>

          <div className="mt-12 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-3">
            <div>
              <div className="text-sm uppercase tracking-wider text-[#f2b400]">
                Email
              </div>
              <div className="mt-2 text-lg">hello@raihanproject.com</div>
            </div>

            <div>
              <div className="text-sm uppercase tracking-wider text-[#f2b400]">
                Jam Operasional
              </div>
              <div className="mt-2 text-lg">Senin – Sabtu</div>
              <div className="text-gray-400">08.00 – 21.00 WIB</div>
            </div>

            <div>
              <div className="text-sm uppercase tracking-wider text-[#f2b400]">
                Tentang
              </div>
              <div className="mt-2 text-gray-300">
                Creative Design & Video Editing Studio. Mewujudkan ide menjadi karya
                visual yang memukau.
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 bg-[#f6f6f6] px-6 py-8 text-center text-sm text-gray-600">
        © 2026 Raihan Project. All rights reserved.
      </footer>
    </main>
  );
}