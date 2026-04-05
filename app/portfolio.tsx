"use client";

const projects = [
  {
    title: "Desain Poster",
    category: "Desain",
    image: "/project1.png",
  },
  {
    title: "Editing Video",
    category: "Video",
    image: "/project2.png",
  },
  {
    title: "Logo Design",
    category: "Branding",
    image: "/project3.png",
  },
  {
    title: "PPT Presentasi",
    category: "Presentasi",
    image: "/project4.png",
  },
  {
    title: "Spanduk & Banner",
    category: "Promosi",
    image: "/project5.png",
  },
  {
    title: "Undangan Digital",
    category: "Event",
    image: "/project6.png",
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#f3f3f3] px-6 py-20 text-black">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center rounded-full border-2 border-black bg-white px-6 py-2 text-sm font-bold shadow-sm">
            PROJECT <span className="ml-1 text-[#f2b400]">STORE</span>
          </div>

          <h1 className="mt-6 text-4xl font-extrabold md:text-6xl">
            Portfolio Saya
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-700">
            Beberapa contoh hasil desain dan editing yang bisa menjadi referensi
            untuk kebutuhan Anda.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-3xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-60 w-full overflow-hidden bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/600x400?text=Portfolio";
                  }}
                />
              </div>

              <div className="p-6">
                <p className="text-sm font-bold uppercase tracking-wider text-[#f2b400]">
                  {project.category}
                </p>
                <h2 className="mt-2 text-2xl font-bold">{project.title}</h2>
                <p className="mt-3 text-gray-700">
                  Project ini menampilkan kualitas visual yang clean, kuat, dan
                  siap untuk kebutuhan promosi atau presentasi.
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="/"
            className="rounded-full border-2 border-black px-7 py-3 font-semibold text-black transition duration-300 hover:bg-black hover:text-white"
          >
            Kembali ke Home
          </a>
        </div>
      </div>
    </main>
  );
}