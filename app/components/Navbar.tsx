"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { name: "Home", href: "#" },
  { name: "Music", href: "#music" },
  { name: "Videos", href: "#videos" },
  { name: "Shows", href: "#shows" },
 ];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 }
    })
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.1 + i * 0.08, duration: 0.4 }
    })
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-yellow-500/10 bg-[#0A0710]/90 backdrop-blur-lg">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/"
            className="text-white font-bold tracking-widest hover:text-yellow-400 transition-colors duration-300"
          >
            TRAP6109
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">

          {links.map((link, i) => (
            <motion.div
              key={link.name}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
            >
              <Link
                href={link.href}
                className="text-white hover:text-yellow-400 transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300" />
              </Link>
            </motion.div>
          ))}

        </div>

        {/* Mobile Button */}
        <motion.button
          className="lg:hidden text-white"
          onClick={() => setOpen(!open)}
          whileTap={{ scale: 0.95 }}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </motion.button>

      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <motion.div
          className="lg:hidden px-5 pb-5"
          variants={mobileMenuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >

          <div className="rounded-2xl bg-[#111] p-6">

            {links.map((link, i) => (
              <motion.div
                key={link.name}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={mobileItemVariants}
              >
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-4xl text-center font-extrabold font-sans text-white hover:text-yellow-400 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

          </div>

        </motion.div>
      )}
    </header>
  );
}
