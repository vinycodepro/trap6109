"use client";

import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Newsletter() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, type: "spring", stiffness: 80, damping: 25 }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: "spring", stiffness: 100, damping: 20 } }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 1000);
  };

  return (
    <motion.section
      className="w-full bg-[#b3a8cc] py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="mx-auto max-w-345 px-6 lg:px-10">
        <motion.div
          className="relative overflow-hidden rounded-4xl border border-[#5b4720] bg-[#291d3f] px-8 py-16 text-center shadow-[0_0_60px_rgba(212,175,55,0.08)]"
          whileHover={{ boxShadow: "0 0 80px rgba(212,175,55,0.15)" }}
          transition={{ duration: 0.3 }}
        >
          {/* Purple Glow */}
          <motion.div
            className="absolute right-0 top-0 h-full w-1/2 bg-linear-to-l from-purple-900/30 to-transparent"
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          <motion.div
            className="relative z-10"
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p
              className="text-xs font-semibold uppercase tracking-[0.45em] text-[#d8b44d]"
              variants={itemVariants}
            >
              Join The Movement
            </motion.p>

            <motion.h2
              className="mt-4 text-4xl font-bold uppercase text-white"
              variants={itemVariants}
            >
              Fan Newsletter
            </motion.h2>

            <motion.p
              className="mx-auto mt-5 max-w-xl text-lg leading-8 text-gray-400"
              variants={itemVariants}
            >
              Be first to hear new music, exclusive drops, live shows,
              behind-the-scenes content, and early ticket access.
            </motion.p>

            {/* Form */}
            <motion.form
              className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 sm:flex-row"
              onSubmit={handleSubmit}
              variants={itemVariants}
            >
              <motion.div className="relative flex-1" whileFocus={{ scale: 1.02 }}>
                <Mail
                  size={18}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <motion.input
                  type="email"
                  placeholder="your@email.com"
                  className="h-14 w-full rounded-full border border-[#222] bg-[#0d0b12] pl-14 pr-5 text-white placeholder:text-gray-500 outline-none transition focus:border-[#d8b44d]"
                  required
                  whileFocus={{ borderColor: "#d8b44d" }}
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="h-14 rounded-full bg-[#d8b44d] px-10 font-semibold text-black transition-all duration-300 hover:bg-[#ebc85b] disabled:opacity-70"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? (
                  <motion.span
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    Joining...
                  </motion.span>
                ) : submitSuccess ? (
                  "✓ Joined!"
                ) : (
                  "Join"
                )}
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
