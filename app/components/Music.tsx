// Music.tsx

import Image from "next/image";

type MusicProps = {
  image: string;
  badge: string;
  title: string;
  streamUrl: string;
};

export default function Music({
  image,
  badge,
  title,
  streamUrl,
}: MusicProps) {
  return (
    <section className="w-full bg-[#c4bcd6] py-24 lg:py-28">
      <div className="mx-auto max-w-345 px-6 lg:px-10">
        {/* Heading */}
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#0c0a04]">
            Out Now
          </p>

          <h2 className="text-4xl font-bold uppercase text-black">
            Latest Release
          </h2>
          {/* Decorative Line */}
          <div className="mt-3 h-1.25 w-24 rounded-full bg-linear-to-r from-[#d8b44d] via-[#d8b44d] via-25%
    to-transparent"/>
          
        </div>

        {/* Card */}
        <div
          className="
            group
            rounded-4xl
            border
            border-[#5b4720]
            bg-[#131019]
            p-8
            md:p-10
            lg:p-12
            transition-all
            duration-500
            ease-out
            hover:-translate-y-2
            hover:scale-[1.01]
            hover:border-[#d4af37]
            hover:shadow-[0_0_45px_rgba(212,175,55,0.18)]
          "
        >
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Album Image */}
            <div className="relative h-80 w-full max-w-130 overflow-hidden rounded-3xl">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="flex max-w-lg flex-col justify-center">
              <span className="inline-flex w-fit rounded-full bg-[#d8b44d]/15 px-5 py-2 text-sm font-bold uppercase tracking-[0.15em] text-[#d8b44d]">
                {badge}
              </span>

              <h3 className="mt-6 text-3xl font-bold uppercase tracking-wide text-white">
                {title}
              </h3>


              <a
                href={streamUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-10
                  inline-flex
                  w-fit
                  items-center
                  justify-center
                  rounded-full
                  bg-[#e4bf58]
                  px-8
                  py-4
                  text-base
                  font-semibold
                  text-black
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-[#f0ca63]
                "
              >
                Stream Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}