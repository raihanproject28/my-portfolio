"use client";
import { useState } from 'react';

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [messageData, setMessageData] = useState({ name: '', email: '', message: '' });
  const [loginError, setLoginError] = useState('');

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();
    // Simulasi validasi login (bisa diganti dengan API nanti)
    if (loginData.email && loginData.password) {
      // Simpan data login ke localStorage
      localStorage.setItem('userLogin', JSON.stringify({
        email: loginData.email,
        password: loginData.password,
        timestamp: new Date().toISOString()
      }));
      
      setIsLoggedIn(true);
      setShowLogin(false);
      setLoginError('');
      alert('Login berhasil! Sekarang Anda bisa kirim pesan.');
    } else {
      setLoginError('Email dan password harus diisi!');
    }
  };

  // Handle kirim pesan
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (messageData.name && messageData.email && messageData.message) {
      // Simpan data pesan ke localStorage
      const messages = JSON.parse(localStorage.getItem('userMessages') || '[]');
      messages.push({
        ...messageData,
        timestamp: new Date().toISOString(),
        loginEmail: loginData.email
      });
      localStorage.setItem('userMessages', JSON.stringify(messages));
      
      alert('Pesan berhasil dikirim! Terima kasih.');
      setMessageData({ name: '', email: '', message: '' });
    } else {
      alert('Semua field harus diisi!');
    }
  };

  // Fungsi untuk melihat data yang tersimpan (untuk developer)
  const viewStoredData = () => {
    const loginData = localStorage.getItem('userLogin');
    const messages = localStorage.getItem('userMessages');
    console.log('Login Data:', loginData);
    console.log('Messages:', messages);
    alert('Cek console browser untuk melihat data yang tersimpan!');
  };

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

            {!isLoggedIn ? (
              <div className="animate-fadeUpDelay3 mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
                <button
                  onClick={() => setShowLogin(true)}
                  className="rounded-full bg-gradient-to-r from-blue-500 to-orange-500 px-7 py-3 font-semibold text-white transition duration-300 hover:scale-105 shadow-lg hover:shadow-2xl"
                >
                  Login untuk Kirim Pesan
                </button>
                <a
                  href="#projects"
                  className="rounded-full bg-white px-7 py-3 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-orange-400 hover:text-white"
                >
                  Lihat Project
                </a>
              </div>
            ) : (
              <div className="animate-fadeUpDelay3 mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
                <button
                  onClick={() => setShowLogin(false)}
                  className="rounded-full bg-green-500/80 px-7 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-green-400"
                >
                  ✅ Sudah Login - Kirim Pesan
                </button>
                <button
                  onClick={viewStoredData}
                  className="rounded-full bg-purple-500/80 px-5 py-3 font-semibold text-white text-sm transition duration-300 hover:scale-105"
                >
                  Lihat Data
                </button>
              </div>
            )}

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

          {/* Form Login Modal */}
          {showLogin && (
            <div className="animate-scaleIn fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
              <div className="w-full max-w-md rounded-3xl bg-zinc-950/90 border border-white/20 p-8 backdrop-blur-xl shadow-2xl">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                    Login
                  </h3>
                  <button
                    onClick={() => setShowLogin(false)}
                    className="text-2xl hover:text-white"
                  >
                    ×
                  </button>
                </div>
                
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-zinc-300">Email</label>
                    <input
                      type="email"
                      value={loginData.email}
                      onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                      className="w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-zinc-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
                      placeholder="Masukkan email Anda"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="mb-2 block text-sm font-medium text-zinc-300">Password</label>
                    <input
                      type="password"
                      value={loginData.password}
                      onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                      className="w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-zinc-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/50"
                      placeholder="Masukkan password"
                      required
                    />
                  </div>
                  
                  {loginError && (
                    <p className="rounded-xl bg-red-500/20 border border-red-500/30 p-3 text-sm text-red-300">
                      {loginError}
                    </p>
                  )}
                  
                  <button
                    type="submit"
                    className="w-full rounded-3xl bg-gradient-to-r from-blue-500 to-orange-500 px-6 py-3 font-semibold text-white shadow-xl hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:from-blue-600 hover:to-orange-600"
                  >
                    Masuk
                  </button>
                </form>
              </div>
            </div>
          )}

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

      {/* Form Kirim Pesan - Muncul setelah login */}
      {isLoggedIn && (
        <section className="px-6 py-24 bg-zinc-950/50 border-t border-white/10">
          <div className="mx-auto max-w-2xl">
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-[0.3em] text-green-400">
                Kirim Pesan
              </p>
              <h2 className="mt-4 text-4xl font-bold bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
                Pesan Anda untuk Raihan
              </h2>
            </div>

            <form onSubmit={handleSendMessage} className="space-y-6">
              <div>
                <label className="mb-3 block text-sm font-medium text-zinc-300">Nama Lengkap</label>
                <input
                  type="text"
                  value={messageData.name}
                  onChange={(e) => setMessageData({...messageData, name: e.target.value})}
                  className="w-full rounded-3xl border border-white/20 bg-white/5 px-6 py-4 text-white placeholder-zinc-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 text-lg"
                  placeholder="Nama Anda"
                  required
                />
              </div>
              
              <div>
                <label className="mb-3 block text-sm font-medium text-zinc-300">Email</label>
                <input
                  type="email"
                  value={messageData.email}
                  onChange={(e) => setMessageData({...messageData, email: e.target.value})}
                  className="w-full rounded-3xl border border-white/20 bg-white/5 px-6 py-4 text-white placeholder-zinc-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/50 text-lg"
                  placeholder="Email Anda"
                  required
                />
              </div>
              
              <div>
                <label className="mb-3 block text-sm font-medium text-zinc-300">Pesan</label>
                <textarea
                  rows={6}
                  value={messageData.message}
                  onChange={(e) => setMessageData({...messageData, message: e.target.value})}
                  className="w-full rounded-3xl border border-white/20 bg-white/5 px-6 py-4 text-white placeholder-zinc-400 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/50 text-lg resize-vertical"
                  placeholder="Ceritakan apa yang ingin Anda diskusikan..."
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full rounded-3xl bg-gradient-to-r from-green-500 to-blue-600 px-8 py-6 font-bold text-xl text-white shadow-2xl hover:scale-105 transition-all duration-300 hover:shadow-3xl hover:from-green-600 hover:to-blue-700"
              >
                📤 Kirim Pesan
              </button>
            </form>
          </div>
        </section>
      )}

      {/* Sisa section tetap sama */}
      <section id="about" className="px-6 py-24">
        {/* ... content about sama seperti sebelumnya ... */}
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
        {/* ... content projects sama seperti sebelumnya ... */}
      </section>

      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg