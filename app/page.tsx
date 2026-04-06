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
  { title: "Logo Startup", type: "Branding", image: "/portfolio-3.jpg" },
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
    text: "Sudah 3x order di sini, selalu puas! Video reels produk saya jadi jauh lebih menarik dan views meningkat drastis.",
  },
  {
    name: "Muhammad Rizki",
    role: "Panitia Event Kampus",
    text: "Keren banget hasilnya! Film pendek untuk acara wisuda kami dibuat dengan sangat cinematic.",
  },
];

const particles = [
  { left: "5%", top: "12%", size: "8px", delay: "0s", duration: "11s" },
  { left: "12%", top: "72%", size: "12px", delay: "1s", duration: "14s" },
  { left: "22%", top: "20%", size: "10px", delay: "2s", duration: "10s" },
  { left: "30%", top: "82%", size: "6px", delay: "3s", duration: "16s" },
  { left: "38%", top: "10%", size: "14px", delay: "1.5s", duration: "13s" },
  { left: "48%", top: "68%", size: "9px", delay: "0.5s", duration: "12s" },
  { left: "56%", top: "18%", size: "7px", delay: "2.5s", duration: "15s" },
  { left: "64%", top: "78%", size: "11px", delay: "1.2s", duration: "12s" },
  { left: "72%", top: "24%", size: "8px", delay: "3.5s", duration: "11s" },
  { left: "82%", top: "60%", size: "13px", delay: "2.2s", duration: "17s" },
  { left: "90%", top: "16%", size: "7px", delay: "0.8s", duration: "10s" },
  { left: "94%", top: "74%", size: "10px", delay: "1.8s", duration: "15s" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0a0a] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(242,180,0,0.16),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(255,140,0,0.10),transparent_24%),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100%_100%,100%_100%,64px_64px,64px_64px]" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {particles.map((particle, index) => (
          <span
            key={index}
            className="particle"
            style={
              {
                left: particle.left,
                top: particle.top,
                width: particle.size,
                height: particle.size,
                animationDelay: particle.delay,
                animationDuration: particle.duration,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/55 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#hero" className="text-2xl font-black tracking-tight text-[#f2b400]">
            Raihan Project
          </a>

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
            className="rounded-full bg-[#f2b400] px-5 py-2 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-white"
          >
            Mulai Order
          </a>
        </div>
      </header>

      <section id="hero" className="relative px-6 pb-24 pt-20 md:pb-28 md:pt-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="animate-fade-up">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
              ✦ Creative Studio
            </p>

            <h1 className="text-6xl font-black leading-[0.95] tracking-tight md:text-8xl">
              <span className="text-white">Raihan</span>
              <br />
              <span className="text-[#f2b400]">Project</span>
            </h1>

            <p className="mt-4 text-xl text-white/70 md:text-2xl">
              Creative Design & Video Editing Services
            </p>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-white/75">
              Kami menghadirkan <span className="font-semibold text-[#f2b400]">desain kreatif</span> dan{" "}
              <span className="font-semibold text-orange-400">editing video</span> profesional
              untuk brand, acara, dan konten Anda — dengan kualitas premium dan harga terjangkau.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#services"
                className="rounded-2xl bg-[#f2b400] px-7 py-4 font-bold text-black transition hover:-translate-y-1 hover:bg-white"
              >
                📋 Lihat Jasa
              </a>

              <a
                href="#portfolio"
                className="rounded-2xl border border-[#f2b400] bg-transparent px-7 py-4 font-bold text-[#f2b400] transition hover:-translate-y-1 hover:bg-[#f2b400] hover:text-black"
              >
                🎨 Portfolio
              </a>

              <a
                href="#contact"
                className="rounded-2xl border border-white/20 bg-white/5 px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:border-white/50 hover:bg-white/10"
              >
                💬 Hubungi Saya
              </a>
            </div>

            <div className="mt-14 grid max-w-2xl gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="text-4xl font-black text-[#f2b400]">50+</div>
                <div className="mt-2 text-sm text-white/70">Proyek Selesai</div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="text-4xl font-black text-[#f2b400]">100%</div>
                <div className="mt-2 text-sm text-white/70">Kepuasan Klien</div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="text-4xl font-black text-[#f2b400]">24h</div>
                <div className="mt-2 text-sm text-white/70">Fast Response</div>
              </div>
            </div>
          </div>

          <div className="animate-fade-up-delay">
            <div className="relative rounded-[32px] border border-[#f2b400]/25 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
              <div className="absolute -inset-1 -z-10 rounded-[34px] bg-gradient-to-br from-[#f2b400]/20 via-transparent to-orange-500/20 blur-2xl" />
              <div className="mb-4 flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <div className="rounded-[24px] border border-white/10 bg-black/50 p-6">
                <div className="mb-6">
                  <p className="text-sm uppercase tracking-[0.25em] text-white/45">Highlight</p>
                  <h2 className="mt-2 text-3xl font-black">Visual Premium</h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-[#f2b400]/40">
                    <p className="text-sm text-white/50">Design</p>
                    <h3 className="mt-2 text-xl font-bold">Poster & Branding</h3>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-orange-400/40">
                    <p className="text-sm text-white/50">Video</p>
                    <h3 className="mt-2 text-xl font-bold">Editing Cinematic</h3>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-[#f2b400]/40">
                    <p className="text-sm text-white/50">Print</p>
                    <h3 className="mt-2 text-xl font-bold">Sticker Premium</h3>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-orange-400/40">
                    <p className="text-sm text-white/50">Service</p>
                    <h3 className="mt-2 text-xl font-bold">Fast Response</h3>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-r from-[#f2b400]/10 to-orange-500/10 p-5">
                  <p className="text-sm text-white/60">Cocok untuk</p>
                  <p className="mt-2 text-lg font-semibold">
                    Brand • Event • Organisasi • UMKM • Sekolah • Konten Kreator
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="relative px-6 py-20">
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
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 shadow-md backdrop-blur-md transition hover:-translate-y-1 hover:shadow-2xl">
              <div className="mb-6 inline-block rounded-full bg-black px-5 py-2 text-xl font-bold text-white">
                Jasa <span className="text-[#f2b400]">Desain</span>
              </div>
              <p className="mb-6 text-white/60">
                Visual kreatif untuk semua kebutuhan branding Anda
              </p>
              <ul className="space-y-3 text-lg">
                {designServices.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 shadow-md backdrop-blur-md transition hover:-translate-y-1 hover:shadow-2xl">
              <div className="mb-6 inline-block rounded-full bg-black px-5 py-2 text-xl font-bold text-white">
                Jasa <span className="text-[#f2b400]">Editing</span>
              </div>
              <p className="mb-6 text-white/60">
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

      <section id="pricing" className="relative px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#f2b400]">
              ✦ Cetak Stiker
            </p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Layanan Print Premium
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/60">
              Stiker berkualitas tinggi, tahan air, hasil tajam
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-[28px] border border-[#f2b400]/25 bg-white/5 p-8 shadow-sm backdrop-blur-md transition hover:-translate-y-1 hover:shadow-2xl">
              <div className="mb-4 inline-flex rounded-full bg-[#f2b400] px-4 py-2 text-sm font-bold text-black">
                Populer
              </div>
              <h3 className="text-3xl font-black">A4</h3>
              <p className="mt-2 text-white/60">Cetak Stiker</p>
              <ul className="mt-6 space-y-3 text-lg">
                <li>✓ Ukuran 21 × 29.7 cm</li>
                <li>✓ Tahan air (waterproof)</li>
                <li>✓ Cutting presisi</li>
                <li>✓ Warna tajam & vivid</li>
                <li>✓ Laminating glossy/matte</li>
              </ul>
            </div>

            <div className="rounded-[28px] border border-[#f2b400]/25 bg-white/5 p-8 shadow-sm backdrop-blur-md transition hover:-translate-y-1 hover:shadow-2xl">
              <div className="mb-4 inline-flex rounded-full bg-black px-4 py-2 text-sm font-bold text-white">
                Best Value
              </div>
              <h3 className="text-3xl font-black">A3</h3>
              <p className="mt-2 text-white/60">Cetak Stiker</p>
              <ul className="mt-6 space-y-3 text-lg">
                <li>✓ Ukuran 29.7 × 42 cm</li>
                <li>✓ Tahan air (waterproof)</li>
                <li>✓ Cutting presisi</li>
                <li>✓ Warna tajam & vivid</li>
                <li>✓ Laminating glossy/matte</li>
                <li>✓ Cocok untuk banner kecil</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="relative px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#f2b400]">
              ✦ Karya Kami
            </p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Portfolio</h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/60">
              Klik untuk melihat detail proyek
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {portfolioItems.map((item) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-md backdrop-blur-md transition hover:-translate-y-1 hover:shadow-2xl"
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
              className="inline-block rounded-full border-2 border-[#f2b400] px-7 py-3 font-semibold text-[#f2b400] transition hover:bg-[#f2b400] hover:text-black"
            >
              Lihat Lebih Banyak →
            </Link>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-20">
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
            {[
              ["⚡", "Fast Response", "Balasan cepat, revisi tepat waktu, dan pengiriman sesuai deadline."],
              ["🎨", "Desain Menarik", "Visual modern dan estetis, disesuaikan dengan kebutuhan dan brand Anda."],
              ["💼", "Profesional", "Pengalaman menangani berbagai jenis proyek desain dan video."],
              ["🧩", "Fleksibel", "Paket yang bisa disesuaikan, revisi tersedia, harga terjangkau."],
            ].map(([icon, title, desc]) => (
              <div key={title} className="rounded-[28px] border border-white/10 bg-white/5 p-8 shadow-sm backdrop-blur-md">
                <div className="text-4xl">{icon}</div>
                <h3 className="mt-4 text-2xl font-bold">{title}</h3>
                <p className="mt-3 text-white/60">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-20">
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
              <div key={item.name} className="rounded-[28px] border border-white/10 bg-white/5 p-8 shadow-md backdrop-blur-md">
                <div className="text-lg text-[#f2b400]">★★★★★</div>
                <p className="mt-4 leading-8 text-white/75">"{item.text}"</p>
                <div className="mt-6">
                  <div className="text-lg font-bold">{item.name}</div>
                  <div className="text-sm text-white/45">{item.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative px-6 py-20">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-white/10 bg-[#121212]/90 p-10 shadow-xl backdrop-blur-xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#f2b400]">
              ✦ Hubungi Kami
            </p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Siap Berkolaborasi?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-white/65">
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
              <div className="text-sm uppercase tracking-wider text-[#f2b400]">Email</div>
              <div className="mt-2 text-lg">hello@raihanproject.com</div>
            </div>

            <div>
              <div className="text-sm uppercase tracking-wider text-[#f2b400]">Jam Operasional</div>
              <div className="mt-2 text-lg">Senin – Sabtu</div>
              <div className="text-white/45">08.00 – 21.00 WIB</div>
            </div>

            <div>
              <div className="text-sm uppercase tracking-wider text-[#f2b400]">Tentang</div>
              <div className="mt-2 text-white/65">
                Creative Design & Video Editing Studio. Mewujudkan ide menjadi karya
                visual yang memukau.
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/45">
        © 2026 Raihan Project. All rights reserved.
      </footer>
    </main>
  );
}