"use client";

import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" }
    })
  };

  return (
    <motion.section
      className="w-full bg-[#b0a9c4] py-24 lg:py-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="mx-auto max-w-345 px-6 lg:px-10">

        {/* Heading */}
        <motion.div className="mb-14" variants={itemVariants}>

          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#110e05]">
            Visuals
          </p>

          <h2 className="mt-3 text-4xl font-bold uppercase text-black">
            Featured Music Videos
          </h2>
          <motion.div
            className="mt-3 h-1.25 w-24 rounded-full bg-linear-to-r from-[#d8b44d] via-[#d8b44d] via-25% to-transparent"
            initial={{ width: 0 }}
            whileInView={{ width: "96px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          />

        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >

          {videos.map((video, i) => (
            <motion.div key={video.id} custom={i} variants={cardVariants}>
              <Link
                href={video.url}
                target="_blank"
                className="group block h-full"
              >
                <article
                  className="
                    h-full
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
                    <motion.div
                      className="absolute inset-0 bg-black/35 transition group-hover:bg-black/20"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />

                    {/* Bottom Gradient */}
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-black/60 to-transparent" />

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">

                      <motion.div
                        className="flex h-16 w-16 items-center justify-center rounded-full bg-[#3f3944]/90 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[#d8b44d]"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Play
                          size={26}
                          className="fill-[#d8b44d] text-[#d8b44d] transition group-hover:fill-black group-hover:text-black"
                        />
                      </motion.div>

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
            </motion.div>
          ))}

        </motion.div>

      </div>
    </motion.section>
  );
}
