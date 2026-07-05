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
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <h1
  className="
    font-anton
    uppercase
    font-black
    leading-[0.82]
    tracking-[-0.06em]
    text-[clamp(5rem,15vw,13rem)]
    text-white
    drop-shadow-[0_18px_40px_rgba(0,0,0,.65)]
    select-none
  "
>
    <span className="block">
        TRAP
    </span>

    <span className="block ml-[0.22em]">
        6109
    </span>
</h1>
        </div>
      </div>
    </section>
  );
}