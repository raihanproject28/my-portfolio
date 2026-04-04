export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gray-400 animate-fadeUp">
          PORTFOLIO
        </p>

        <h1 className="mb-4 text-4xl font-bold sm:text-6xl animate-fadeUp [animation-delay:0.2s]">
          Halo, saya Raihan 👋
        </h1>

        <p className="max-w-2xl text-base text-gray-300 sm:text-lg animate-fadeUp [animation-delay:0.4s]">
          Saya sedang belajar web development dan membangun website portofolio
          dengan Next.js. Saya suka membuat tampilan web yang sederhana, rapi,
          dan modern.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4 animate-fadeUp [animation-delay:0.6s]">
          <a
            href="#projects"
            className="rounded-full bg-white px-6 py-3 text-black transition hover:opacity-90"
          >
            Lihat Project
          </a>

          <a
            href="#contact"
            className="rounded-full border border-white px-6 py-3 transition hover:bg-white hover:text-black"
          >
            Hubungi Saya
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold">Tentang Saya</h2>
          <p className="text-gray-300 leading-8">
            Saya adalah pemula di bidang web development yang sedang belajar
            membangun website menggunakan Next.js dan Tailwind CSS. Tujuan saya
            adalah membuat website yang menarik, responsif, dan mudah digunakan.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-3xl font-bold">Project Saya</h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-800 bg-zinc-900 p-6 shadow-lg">
              <h3 className="mb-3 text-xl font-semibold">Website Portofolio</h3>
              <p className="text-gray-300">
                Website portofolio pribadi yang dibuat menggunakan Next.js dan
                Tailwind CSS.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-zinc-900 p-6 shadow-lg">
              <h3 className="mb-3 text-xl font-semibold">Landing Page</h3>
              <p className="text-gray-300">
                Desain landing page sederhana dengan tampilan modern dan rapi.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-zinc-900 p-6 shadow-lg">
              <h3 className="mb-3 text-xl font-semibold">Mini Project</h3>
              <p className="text-gray-300">
                Kumpulan latihan project kecil untuk meningkatkan skill frontend.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold">Kontak</h2>

          <p className="mb-6 text-gray-300">
            Kalau ingin bekerja sama atau sekadar berkenalan, hubungi saya.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:raihanproject28@gmail.com"
              className="rounded-full bg-white px-6 py-3 text-black transition hover:opacity-90"
            >
              Email
            </a>

            <a
              href="https://github.com/raihanproject28"
              target="_blank"
              className="rounded-full border border-white px-6 py-3 transition hover:bg-white hover:text-black"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}