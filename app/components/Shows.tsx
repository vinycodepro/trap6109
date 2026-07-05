// Shows.tsx

import Link from "next/link";
import { CalendarDays } from "lucide-react";

export type Show = {
  id: string;
  date: string;
  city: string;
  venue: string;
  ticketUrl: string;
};

type ShowsProps = {
  shows?: Show[];
};

export default function Shows({ shows = [] }: ShowsProps) {
  return (
    <section className="w-full bg-[#0c0913] py-24 lg:py-28">
      <div className="mx-auto max-w-345 px-6 lg:px-10">
        {/* Heading */}
        <div className="mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#d8b44d]">
            On Tour
          </p>

          <h2 className="mt-3 text-4xl font-bold uppercase text-white">
            Upcoming Shows
          </h2>

    <div className="mt-3 h-1.25 w-24 rounded-full bg-linear-to-r from-[#d8b44d] via-[#d8b44d] via-25%
    to-transparent"/>
        </div>

        {/* Empty State */}
        {shows.length === 0 ? (
        <div
  className="
    rounded-[30px]
    border
    border-[#5b4720]
    bg-[#131019]
    px-10
    py-20
    text-center
  "
>
  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#d8b44d]/10">
    <CalendarDays className="h-10 w-10 text-[#d8b44d]" />
  </div>

  <h3 className="mt-8 text-3xl font-bold uppercase text-white">
    Live Shows & Tour Dates
  </h3>

  <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-gray-500">
    There are no shows scheduled at the moment, but new dates will be
    announced here as soon as they are confirmed. Stay connected and
    check back soon.
  </p>

  <div className="mt-10">
    <button
      disabled
      className="
        cursor-not-allowed
        rounded-full
        border
        border-[#5b4720]
        bg-[#0f0d15]
        px-8
        py-4
        font-semibold
        text-gray-500
      "
    >
      Tour Dates Coming Soon
    </button>
  </div>
</div>
        ) : (
          /* Shows List */
          <div className="space-y-5">
            {shows.map((show) => (
              <div
                key={show.id}
                className="group flex flex-col gap-6 rounded-3xl border border-[#5b4720] bg-[#131019] px-8 py-6
                  transition-all duration-300 hover:border-[#d8b44d] hover:shadow-[0_0_35px_rgba(212,175,55,0.10)]
                  md:flex-row md:items-center" >
                {/* Date */}
                <div className="w-28 shrink-0">
                  <span className="text-lg font-bold uppercase tracking-wide text-[#d8b44d]">
                    {show.date}
                  </span>
                </div>

                {/* Location */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white">
                    {show.city}
                  </h3>

                  <p className="mt-1 text-lg text-gray-400">
                    {show.venue}
                  </p>
                </div>

                {/* Button */}
                <Link
                  href={show.ticketUrl}
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-full bg-[#0f0d15] px-8 py-4 font-semibold text-white
                    transition-all duration-300 hover:bg-[#d8b44d] hover:text-black">
                  Tickets
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}