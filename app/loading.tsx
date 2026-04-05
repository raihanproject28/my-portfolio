export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f3f3f3]">
      <div className="text-center">
        <div className="mx-auto mb-5 h-16 w-16 animate-spin rounded-full border-4 border-black/20 border-t-black border-r-[#f2b400]" />
        <div className="inline-block rounded-full border-2 border-black bg-white px-6 py-2 text-sm font-bold shadow-sm">
          PROJECT <span className="ml-1 text-[#f2b400]">STORE</span>
        </div>
        <p className="mt-4 text-lg font-semibold text-black">Memuat halaman...</p>
      </div>
    </div>
  );
}