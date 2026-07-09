"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <motion.section
      className="w-full bg-[#c4bcd6] py-24 lg:py-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="mx-auto max-w-345 px-6 lg:px-10">
        {/* Heading */}
        <motion.div className="mb-12" variants={itemVariants}>
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#0c0a04]">
            Out Now
          </p>

          <h2 className="text-4xl font-bold uppercase text-black">
            Latest Release
          </h2>
          {/* Decorative Line */}
          <motion.div
            className="mt-3 h-1.25 w-24 rounded-full bg-linear-to-r from-[#d8b44d] via-[#d8b44d] via-25% to-transparent"
            initial={{ width: 0 }}
            whileInView={{ width: "96px" }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Card */}
        <motion.div
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
          variants={itemVariants}
        >
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Album Image */}
            <motion.div
              className="relative h-80 w-full max-w-130 overflow-hidden rounded-3xl"
              variants={imageVariants}
            >
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </motion.div>

            {/* Content */}
            <div className="flex max-w-lg flex-col justify-center">
              <motion.span
                className="inline-flex w-fit rounded-full bg-[#d8b44d]/15 px-5 py-2 text-sm font-bold uppercase tracking-[0.15em] text-[#d8b44d]"
                variants={itemVariants}
              >
                {badge}
              </motion.span>

              <motion.h3
                className="mt-6 text-3xl font-bold uppercase tracking-wide text-white"
                variants={itemVariants}
              >
                {title}
              </motion.h3>

              <motion.a
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
                variants={itemVariants}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                Stream Now
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
