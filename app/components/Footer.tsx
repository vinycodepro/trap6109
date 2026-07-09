"use client";

import Link from "next/link";
import {
  SiInstagram,
  SiSpotify,
  SiYoutube,
  SiAudiomack,
} from "react-icons/si";
import { motion, Variants } from "framer-motion";

export default function Footer() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: "spring" as const, stiffness: 100, damping: 20 } }
  };

  const socials = [
    { href: "https://instagram.com/trap6109", icon: SiInstagram, label: "Instagram" },
    { href: "https://spotify.com/trap6109", icon: SiSpotify, label: "Spotify" },
    { href: "https://youtube.com/@Trap6109-f9e", icon: SiYoutube, label: "YouTube" },
    { href: "https://audiomack.com/trap666109", icon: SiAudiomack, label: "Audiomack" },
  ];

  return (
    <motion.footer
      className="border-t border-[#1d1a28] bg-[#09070d]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <div className="mx-auto max-w-345 px-6 py-16 lg:px-10">

        <motion.h2
          className="text-center text-xl font-bold uppercase tracking-widest text-[#f0eee9]"
          variants={itemVariants}
        >
          TRAP6109
        </motion.h2>

        {/* Tagline */}
        <motion.p
          className="mt-4 text-center text-lg text-gray-400"
          variants={itemVariants}
        >
          Follow across socials and stay tuned for new music, videos, and live shows.
        </motion.p>

        {/* Socials */}
        <motion.div
          className="mt-10 flex justify-center gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >

          {socials.map((social, i) => (
            <SocialIcon
              key={social.label}
              href={social.href}
              icon={<social.icon size={22} />}
              label={social.label}
              index={i}
            />
          ))}

        </motion.div>

        <motion.p
          className="mt-12 text-center text-sm text-gray-600"
          variants={itemVariants}
        >
          © {new Date().getFullYear()} TRAP6109. All rights reserved.
        </motion.p>

      </div>
    </motion.footer>
  );
}

type SocialProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
  index: number;
};

function SocialIcon({ href, icon, label, index }: SocialProps) {
  const socialVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: index * 0.08, duration: 0.4 }
    }
  };

  return (
    <motion.div
      custom={index}
      variants={socialVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={href}
        aria-label={label}
        target="_blank"
        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          border
          border-[#34303f]
          bg-[#131019]
          text-gray-300
          transition-all
          duration-300
          hover:border-[#d8b44d]
          hover:bg-[#d8b44d]
          hover:text-black
        "
      >
        {icon}
      </Link>
    </motion.div>
  );
}
