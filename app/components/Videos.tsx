import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

export type Video = {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  url: string;
};

type VideosProps = {
  videos: Video[];
};

export default function Videos({ videos }: VideosProps) {
  return (
    <section className="w-full bg-[#b0a9c4] py-24 lg:py-28">
      <div className="mx-auto max-w-345 px-6 lg:px-10">

        {/* Heading */}
        <div className="mb-14">

          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#110e05]">
            Visuals
          </p>

          <h2 className="mt-3 text-4xl font-bold uppercase text-black">
            Featured Music Videos
          </h2>
       <div className="mt-3 h-1.25 w-24 rounded-full bg-linear-to-r from-[#d8b44d] via-[#d8b44d] via-25%
         to-transparent"/>

        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {videos.map((video) => (
            <Link
              key={video.id}
              href={video.url}
              target="_blank"
              className="group"
            >
              <article
                className="
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-[#1d1a28]
                  bg-[#131019]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[#d8b44d]/50
                  hover:shadow-[0_0_35px_rgba(212,175,55,0.12)]
                "
              >
                {/* Thumbnail */}
                <div className="relative h-62.5 overflow-hidden">

                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/35 transition group-hover:bg-black/20" />

                  {/* Bottom Gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-black/60 to-transparent" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">

                    <div
                      className="flex h-16 w-16 items-center justify-center rounded-full bg-[#3f3944]/90 backdrop-blur-md
                        transition-all  duration-300 group-hover:scale-110 group-hover:bg-[#d8b44d]">
                      <Play
                        size={26}
                        className="fill-[#d8b44d] text-[#d8b44d] transition group-hover:fill-black group-hover:text-black"
                      />
                    </div>

                  </div>

                </div>

                {/* Content */}
                <div className="space-y-2 p-6">

                  <h3 className="text-xl font-bold uppercase tracking-wide text-white transition group-hover:text-[#d8b44d]">
                    {video.title}
                  </h3>

                  <p className="text-base text-gray-400">
                    {video.category}

                  </p>

                </div>
              </article>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}