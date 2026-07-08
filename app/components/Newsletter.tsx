import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="w-full bg-[#b3a8cc] py-24">
      <div className="mx-auto max-w-345 px-6 lg:px-10">
        <div
          className="relative overflow-hidden rounded-4xl border  border-[#5b4720]  bg-[#291d3f]  px-8
            py-16 text-center shadow-[0_0_60px_rgba(212,175,55,0.08)]"
        >
          {/* Purple Glow */}
          <div className="absolute right-0 top-0 h-full w-1/2 bg-linear-to-l from-purple-900/30 to-transparent" />

          <div className="relative z-10">
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#d8b44d]">
              Join The Movement
            </p>

            <h2 className="mt-4 text-4xl font-bold uppercase text-white">
              Fan Newsletter
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-gray-400">
              Be first to hear new music, exclusive drops, live shows,
              behind-the-scenes content, and early ticket access.
            </p>

            {/* Form */}
            <form className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <Mail
                  size={18}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  type="email"
                  placeholder="your@email.com"
                  className="h-14 w-full rounded-full border border-[#222]  bg-[#0d0b12] pl-14 pr-5 text-white placeholder:text-gray-500 outline-none transition
                    focus:border-[#d8b44d]"
                />
              </div>

              <button
                type="submit"
                className="h-14 rounded-full bg-[#d8b44d] px-10
                  font-semibold text-black transition-all duration-300
                  hover:scale-105 hover:bg-[#ebc85b]"
              >
                Join
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}