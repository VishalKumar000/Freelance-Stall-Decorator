//@ts-nocheckk

"use client";

import React from "react";
import { motion } from "framer-motion";
import { useCustomCursor } from "@/context/CustomCursorContext";

const CustomCursor = () => {
  const { variants, cursorVariants } = useCustomCursor();

  return (
    <motion.div
      className="w-5 h-5 bg-black rounded-full fixed top-0 left-0 pointer-events-none z-[9999999]"
      variants={variants}
      animate={cursorVariants}
    />
  );
};

export default CustomCursor;
