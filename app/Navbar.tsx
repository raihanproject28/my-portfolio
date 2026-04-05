export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="font-bold">Raihan Project</h1>

        <div className="flex gap-6">
          <a href="#">Home</a>
          <a href="#jasa">Jasa</a>
          <a href="/portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}