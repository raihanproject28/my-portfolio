export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <section className="relative flex min-h-screen items-center justify-center px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.14),transparent_30%)]" />
        <div className="absolute left-10 top-24 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl animate-floatSlow" />
        <div className="absolute bottom-24 right-10 h-52 w-52 rounded-full bg-orange-500/20 blur-3xl animate-floatSlow [animation-delay:1.2s]" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <p className="animate-fadeUp text-sm font-medium uppercase tracking-[0.35em] text-blue-400">
              Portfolio Prototype
            </p>

            <h1 className="animate-fadeUpDelay1 mt-5 text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
              Halo, saya{" "}
              <span className="bg-gradient-to-r from-white via-blue-300 to-orange-400 bg-clip-text text-transparent">
                Raihan
              </span>
            </h1>

            <p className="animate-fadeUpDelay2 mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              Saya membangun website modern dengan tampilan yang bersih,
              elegan, dan interaktif. Prototipe ini menampilkan nuansa hitam,
              putih, biru, dan orange dengan animasi halus sejak halaman dibuka.
            </p>

            <div className="animate-fadeUpDelay3 mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
              <a
                href="#projects"
                className="rounded-full bg-white px-7 py-3 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-orange-400 hover:text-white"
              >
                Lihat Project
              </a>
              <a
                href="#contact"
                className="rounded-full border border-blue-400 px-7 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-blue-500 hover:border-blue-500"
              >
                Hubungi Saya
              </a>
            </div>

            <div className="animate-fadeUpDelay4 mt-10 flex items-center justify-center gap-8 text-sm text-zinc-400 lg:justify-start">
              <div>
                <span className="text-2xl font-bold text-white">10+</span>
                <p className="mt-1">Mini Project</p>
              </div>
              <div>
                <span className="text-2xl font-bold text-white">3</span>
                <p className="mt-1">Tech Stack Utama</p>
              </div>
              <div>
                <span className="text-2xl font-bold text-white">100%</span>
                <p className="mt-1">Semangat Belajar</p>
              </div>
            </div>
          </div>

          <div className="animate-scaleIn relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-br from-blue-500 via-transparent to-orange-500 opacity-60 blur-xl" />
            <div className="relative rounded-[32px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-2xl">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <div className="rounded-[24px] border border-white/10 bg-zinc-950 p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-zinc-400">UI Preview</p>
                    <h3 className="mt-1 text-2xl font-bold text-white">
                      Personal Portfolio
                    </h3>
                  </div>
                  <div className="rounded-full bg-orange-500/15 px-4 py-2 text-sm font-medium text-orange-300">
                    Live Concept
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40">
                    <p className="text-sm text-blue-300">Frontend</p>
                    <h4 className="mt-2 text-lg font-semibold">Next.js</h4>
                  </div>

                  <div className="rounded-2xl border border-orange-500/20 bg-orange-500/10 p-5 transition duration-300 hover:-translate-y-1 hover:border-orange-400/40">
                    <p className="text-sm text-orange-300">Styling</p>
                    <h4 className="mt-2 text-lg font-semibold">Tailwind CSS</h4>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-white/20">
                    <p className="text-sm text-zinc-400">Motion</p>
                    <h4 className="mt-2 text-lg font-semibold">Smooth Animation</h4>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-white/20">
                    <p className="text-sm text-zinc-400">Style</p>
                    <h4 className="mt-2 text-lg font-semibold">Clean Modern UI</h4>
                  </div>
                </div>

                <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-blue-500 to-orange-500 animate-progressLoad" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-orange-400">
              Tentang Saya
            </p>
            <h2 className="mt-4 text-4xl font-bold">Simple. Modern. Impactful.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-400/30">
              <div className="mb-4 text-3xl">⚡</div>
              <h3 className="text-xl font-semibold">Cepat Belajar</h3>
              <p className="mt-3 leading-7 text-zinc-400">
                Saya suka mempelajari teknologi baru dan mengubah ide menjadi
                tampilan web yang nyata.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-orange-400/30">
              <div className="mb-4 text-3xl">🎨</div>
              <h3 className="text-xl font-semibold">UI Bersih</h3>
              <p className="mt-3 leading-7 text-zinc-400">
                Fokus pada tampilan yang nyaman dilihat, warna konsisten, dan
                layout yang rapi.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-400/30">
              <div className="mb-4 text-3xl">🚀</div>
              <h3 className="text-xl font-semibold">Siap Berkembang</h3>
              <p className="mt-3 leading-7 text-zinc-400">
                Prototipe ini bisa kamu kembangkan lagi jadi portofolio personal
                yang lebih lengkap.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
              Project
            </p>
            <h2 className="mt-4 text-4xl font-bold">Contoh Tampilan Project</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="group rounded-3xl border border-white/10 bg-zinc-950 p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-400/40">
              <div className="mb-5 h-44 rounded-2xl bg-gradient-to-br from-blue-500/30 to-black" />
              <h3 className="text-xl font-semibold">Portfolio Website</h3>
              <p className="mt-3 leading-7 text-zinc-400">
                Website portofolio dengan animasi halus, layout modern, dan
                warna premium.
              </p>
              <div className="mt-5 inline-block rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
                Next.js
              </div>
            </div>

            <div className="group rounded-3xl border border-white/10 bg-zinc-950 p-6 transition duration-300 hover:-translate-y-2 hover:border-orange-400/40">
              <div className="mb-5 h-44 rounded-2xl bg-gradient-to-br from-orange-500/30 to-black" />
              <h3 className="text-xl font-semibold">Landing Page</h3>
              <p className="mt-3 leading-7 text-zinc-400">
                Landing page promosi produk atau jasa dengan visual yang kuat dan
                CTA yang jelas.
              </p>
              <div className="mt-5 inline-block rounded-full bg-orange-500/10 px-4 py-2 text-sm text-orange-300">
                UI Design
              </div>
            </div>

            <div className="group rounded-3xl border border-white/10 bg-zinc-950 p-6 transition duration-300 hover:-translate-y-2 hover:border-white/20">
              <div className="mb-5 h-44 rounded-2xl bg-gradient-to-br from-white/20 to-black" />
              <h3 className="text-xl font-semibold">Mini Dashboard</h3>
              <p className="mt-3 leading-7 text-zinc-400">
                Konsep dashboard sederhana dengan card, statistik, dan komposisi
                warna yang elegan.
              </p>
              <div className="mt-5 inline-block rounded-full bg-white/10 px-4 py-2 text-sm text-zinc-300">
                Prototype
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-10 text-center backdrop-blur-sm">
          <p className="text-sm uppercase tracking-[0.3em] text-orange-400">
            Kontak
          </p>
          <h2 className="mt-4 text-4xl font-bold">Mari Bangun Sesuatu yang Keren</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-zinc-400">
            Kalau kamu ingin menjadikan prototipe ini sebagai portofolio utama,
            tinggal ganti isi teks, project, dan kontak dengan data kamu sendiri.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:raihanproject28@gmail.com"
              className="rounded-full bg-orange-500 px-7 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-orange-400"
            >
              Email Saya
            </a>
            <a
              href="https://github.com/raihanproject28"
              target="_blank"
              className="rounded-full border border-blue-400 px-7 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-blue-500 hover:border-blue-500"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}