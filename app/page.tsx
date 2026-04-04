"use client";

import { useState } from "react";

type SavedMessage = {
  email: string;
  phone: string;
  message: string;
  createdAt: string;
};

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [messageEmail, setMessageEmail] = useState("");
  const [messagePhone, setMessagePhone] = useState("");
  const [messageText, setMessageText] = useState("");
  const [savedItems, setSavedItems] = useState<SavedMessage[]>([]);

  const handleLoginDemo = () => {
    setMessageEmail(email);
    setMessagePhone(phone);

    const target = document.getElementById("message-form");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSaveMessage = () => {
    if (!messageEmail || !messagePhone || !messageText) {
      alert("Isi email, nomor HP, dan pesan dulu ya.");
      return;
    }

    const newItem: SavedMessage = {
      email: messageEmail,
      phone: messagePhone,
      message: messageText,
      createdAt: new Date().toLocaleString(),
    };

    const existing = localStorage.getItem("portfolio_messages");
    const parsed: SavedMessage[] = existing ? JSON.parse(existing) : [];
    const updated = [newItem, ...parsed];

    localStorage.setItem("portfolio_messages", JSON.stringify(updated));
    setSavedItems(updated);

    setMessageText("");
    alert("Pesan berhasil disimpan di browser.");
  };

  const handleLoadSaved = () => {
    const existing = localStorage.getItem("portfolio_messages");
    const parsed: SavedMessage[] = existing ? JSON.parse(existing) : [];
    setSavedItems(parsed);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <section className="relative flex min-h-screen items-center justify-center px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.14),transparent_30%)]" />
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
              Website prototipe dengan nuansa hitam, putih, biru, dan orange.
              Ada form demo yang mengarahkan user ke form kirim pesan.
            </p>

            <div className="animate-fadeUpDelay3 mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
              <a
                href="#login-demo"
                className="rounded-full bg-white px-7 py-3 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-orange-400 hover:text-white"
              >
                Coba Demo
              </a>
              <a
                href="#message-form"
                className="rounded-full border border-blue-400 px-7 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-blue-500 hover:border-blue-500"
              >
                Kirim Pesan
              </a>
            </div>
          </div>

          <div className="animate-scaleIn relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-br from-blue-500 via-transparent to-orange-500 opacity-60 blur-xl" />
            <div className="relative rounded-[32px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-2xl">
              <div className="rounded-[24px] border border-white/10 bg-zinc-950 p-6">
                <p className="text-sm text-zinc-400">Preview</p>
                <h3 className="mt-1 text-2xl font-bold text-white">
                  Interactive Message Flow
                </h3>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-5">
                    <p className="text-sm text-blue-300">Step 1</p>
                    <h4 className="mt-2 text-lg font-semibold">Isi Form Demo</h4>
                  </div>

                  <div className="rounded-2xl border border-orange-500/20 bg-orange-500/10 p-5">
                    <p className="text-sm text-orange-300">Step 2</p>
                    <h4 className="mt-2 text-lg font-semibold">Lanjut ke Pesan</h4>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-zinc-400">Step 3</p>
                    <h4 className="mt-2 text-lg font-semibold">Simpan Data</h4>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-zinc-400">Catatan</p>
                    <h4 className="mt-2 text-lg font-semibold">
                      Password tidak disimpan
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="login-demo" className="px-6 py-24">
        <div className="mx-auto max-w-3xl rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-orange-400">
              Demo Form
            </p>
            <h2 className="mt-4 text-4xl font-bold">Login Demo UI</h2>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
              Setelah klik tombol, user diarahkan ke form kirim pesan. Email dan
              nomor HP akan ikut terbawa.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm text-zinc-300">Email</label>
              <input
                type="email"
                placeholder="nama@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition duration-300 placeholder:text-zinc-500 focus:border-blue-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-zinc-300">Password</label>
              <input
                type="password"
                placeholder="Masukkan password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition duration-300 placeholder:text-zinc-500 focus:border-orange-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-zinc-300">Nomor HP</label>
              <input
                type="tel"
                placeholder="+62 8xx xxxx xxxx"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition duration-300 placeholder:text-zinc-500 focus:border-blue-400"
              />
            </div>

            <button
              type="button"
              onClick={handleLoginDemo}
              className="w-full rounded-2xl bg-gradient-to-r from-blue-500 to-orange-500 px-5 py-3 font-semibold text-white transition duration-300 hover:scale-[1.02]"
            >
              Login Demo
            </button>
          </div>
        </div>
      </section>

      <section id="message-form" className="px-6 py-24">
        <div className="mx-auto max-w-3xl rounded-[32px] border border-white/10 bg-zinc-950 p-8">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
              Contact Form
            </p>
            <h2 className="mt-4 text-4xl font-bold">Kirimkan Pesan Anda</h2>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
              Email dan nomor HP dari form sebelumnya akan muncul di sini.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm text-zinc-300">Email</label>
              <input
                type="email"
                value={messageEmail}
                onChange={(e) => setMessageEmail(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition duration-300 focus:border-blue-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-zinc-300">Nomor HP</label>
              <input
                type="tel"
                value={messagePhone}
                onChange={(e) => setMessagePhone(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition duration-300 focus:border-orange-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-zinc-300">Pesan</label>
              <textarea
                rows={5}
                placeholder="Tulis pesan Anda di sini..."
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition duration-300 placeholder:text-zinc-500 focus:border-blue-400"
              />
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={handleSaveMessage}
                className="rounded-2xl bg-orange-500 px-6 py-3 font-semibold text-white transition duration-300 hover:scale-[1.02] hover:bg-orange-400"
              >
                Simpan Pesan
              </button>

              <button
                type="button"
                onClick={handleLoadSaved}
                className="rounded-2xl border border-blue-400 px-6 py-3 font-semibold text-white transition duration-300 hover:scale-[1.02] hover:bg-blue-500"
              >
                Lihat Data Tersimpan
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-4xl">
          <h3 className="mb-6 text-2xl font-bold">Data Tersimpan</h3>

          {savedItems.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-zinc-400">
              Belum ada data yang dimuat.
            </div>
          ) : (
            <div className="grid gap-4">
              {savedItems.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <p><span className="font-semibold text-blue-300">Email:</span> {item.email}</p>
                  <p><span className="font-semibold text-orange-300">Nomor HP:</span> {item.phone}</p>
                  <p><span className="font-semibold text-white">Pesan:</span> {item.message}</p>
                  <p className="mt-2 text-sm text-zinc-500">{item.createdAt}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}