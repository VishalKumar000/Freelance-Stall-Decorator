"use client";

import { motion } from "framer-motion";
import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <motion.div
        className="absolute top-0 left-0 w-full min-h-screen bg-[#090909] origin-bottom  z-10"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
      <motion.div
        className="absolute top-0 left-0 w-full min-h-screen bg-[#090909] origin-top  z-10"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
    </div>
  );
}
