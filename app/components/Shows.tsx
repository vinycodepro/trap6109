"use client";

import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", stiffness: 80, damping: 20 } }
  };

  const emptyStateVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, type: "spring", stiffness: 80, damping: 20 } }
  };

  return (
    <motion.section
      className="w-full bg-[#cdc6df] py-24 lg:py-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="mx-auto max-w-345 px-6 lg:px-10">
        {/* Heading */}
        <motion.div className="mb-14" variants={itemVariants}>
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#050402]">
            On Tour
          </p>

          <h2 className="mt-3 text-4xl font-bold uppercase text-black">
            Upcoming Shows
          </h2>

          <motion.div
            className="mt-3 h-1.25 w-24 rounded-full bg-linear-to-r from-[#d8b44d] via-[#d8b44d] via-25% to-transparent"
            initial={{ width: 0 }}
            whileInView={{ width: "96px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Empty State */}
        {shows.length === 0 ? (
          <motion.div
            className="rounded-[30px] border border-[#5b4720] bg-[#291d3f] px-10 py-20 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={emptyStateVariants}
          >
            <motion.div
              className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#d8b44d]/10"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <CalendarDays className="h-10 w-10 text-[#d8b44d]" />
            </motion.div>

            <motion.h3
              className="mt-8 text-3xl font-bold uppercase text-white"
              variants={itemVariants}
            >
              Live Shows & Tour Dates
            </motion.h3>

            <motion.p
              className="mx-auto mt-4 max-w-xl text-base leading-7 text-gray-500"
              variants={itemVariants}
            >
              There are no shows scheduled at the moment, but new dates will be
              announced here as soon as they are confirmed. Stay connected and
              check back soon.
            </motion.p>

            <motion.div className="mt-10" variants={itemVariants}>
              <button
                disabled
                className="cursor-not-allowed rounded-full border border-[#5b4720]
                  bg-[#0f0d15] px-8 py-4 font-semibold text-gray-500
                "
              >
                Tour Dates Coming Soon
              </button>
            </motion.div>
          </motion.div>
        ) : (
          /* Shows List */
          <motion.div
            className="space-y-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {shows.map((show, i) => (
              <motion.div
                key={show.id}
                custom={i}
                variants={itemVariants}
                className="group flex flex-col gap-6 rounded-3xl border border-[#5b4720] bg-[#131019] px-8 py-6
                  transition-all duration-300 hover:border-[#d8b44d] hover:shadow-[0_0_35px_rgba(212,175,55,0.10)]
                  md:flex-row md:items-center"
                whileHover={{ y: -4 }}
              >
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
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={show.ticketUrl}
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-full bg-[#0f0d15] px-8 py-4 font-semibold text-white
                      transition-all duration-300 hover:bg-[#d8b44d] hover:text-black"
                  >
                    Tickets
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
