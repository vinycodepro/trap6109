export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-5">
      <button className="w-full sm:w-auto rounded-full bg-yellow-500 px-6 sm:px-8 py-4 font-semibold text-black transition hover:bg-yellow-400">
        Listen Now
      </button>

      <button className="w-full sm:w-auto rounded-full border border-white px-6 sm:px-8 py-4 text-white transition hover:bg-white hover:text-black">
        Watch Videos
      </button>
    </div>
  );
}