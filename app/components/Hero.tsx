import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-r from-black via-[#12091d] to-[#1a1230]" />

      <Image
        src="/images/trap.jpg"
        alt="Trap6109"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h1
            className="font-anton uppercase font-black text-center select-none text-[#a9aaa6]
              text-[clamp(6.5rem,26vw,14rem)] 

              leading-[0.78] tracking-[0.02em]
              [text-shadow:0_3px_0_rgba(255,255,255,0.25),0_8px_18px_rgba(0,0,0,0.35),0_18px_45px_rgba(0,0,0,0.6)]"
          >
            <span className="block">TRAP</span>
            <span className="block">6109</span>
          </h1>
        </div>
      </div>
    </section>
  );
}