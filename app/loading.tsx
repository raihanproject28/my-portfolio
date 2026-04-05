export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f3f3f3] text-black">
      <div className="text-center">
        <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-black/20 border-t-black" />
        <p className="mt-4 text-lg font-semibold">Loading...</p>
      </div>
    </div>
  );
}