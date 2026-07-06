"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "#" },
  { name: "Music", href: "#music" },
  { name: "Videos", href: "#videos" },
  { name: "Shows", href: "#shows" },
 ];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-yellow-500/10 bg-[#0A0710]/90 backdrop-blur-lg">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          href="/"
          className="text-white font-bold tracking-widest"
        >
          TRAP6109
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">

          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white hover:text-yellow-400 transition"
            >
              {link.name}
            </Link>
          ))}

        </div>

        {/* Mobile Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <div className="lg:hidden px-5 pb-5">

          <div className="rounded-2xl bg-[#111] p-6">

            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-4xl text-center font-extrabold font-sans text-white hover:text-yellow-400"              >
                {link.name}
              </Link>
            ))}

          </div>

        </div>
      )}
    </header>
  );
}