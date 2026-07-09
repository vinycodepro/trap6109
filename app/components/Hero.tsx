"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseY((e.clientY / window.innerHeight) * 20 - 10);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const textVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: 0.2 + i * 0.2,
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 25
      }
    })
  };

  return (
    <motion.section
      className="relative h-screen overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-r from-black via-[#12091d] to-[#1a1230]" />

      <motion.div
        className="absolute inset-0"
        style={{ y: mouseY }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
      >
        <Image
          src="/images/trap.jpg"
          alt="Trap6109"
          fill
          priority
          className="object-cover object-center"
        />
      </motion.div>

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
            <motion.span
              className="block"
              custom={0}
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              TRAP
            </motion.span>
            <motion.span
              className="block"
              custom={1}
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              6109
            </motion.span>
          </h1>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs uppercase tracking-widest text-gray-400">Scroll to explore</p>
          <svg className="w-5 h-5 text-yellow-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </motion.div>
    </motion.section>
  );
}
