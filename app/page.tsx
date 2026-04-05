export default function Portfolio() {
  return (
    <main className="bg-gray-100 min-h-screen p-10">

      <h1 className="text-4xl font-bold text-center mb-10">
        Portfolio Saya
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white p-4 rounded-xl shadow hover:scale-105 transition">
          <img src="/project1.png" className="rounded mb-2" />
          <p>Desain Poster</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow hover:scale-105 transition">
          <img src="/project2.png" className="rounded mb-2" />
          <p>Editing Video</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow hover:scale-105 transition">
          <img src="/project3.png" className="rounded mb-2" />
          <p>Logo Design</p>
        </div>

      </div>

    </main>
  );
}