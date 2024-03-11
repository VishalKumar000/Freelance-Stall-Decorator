//@ts-nocheckk

"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariants, setCursorVariants] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      backgroundColor: "white",
    },
    text: {
      height: 75,
      width: 75,
      x: mousePosition.x - 32.5,
      y: mousePosition.y - 32.5,
      backgroundColor: "white",
      color: "black",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariants("text");
  const textLeave = () => setCursorVariants("default");

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white font-extrabold text-5xl">
      <div onMouseEnter={textEnter} onMouseLeave={textLeave}>
        <h1>CustomCursor</h1>
      </div>
      <motion.div
        className="w-5 h-5 bg-black rounded-full fixed top-0 left-0 pointer-events-none z-[9999999]"
        variants={variants}
        animate={cursorVariants}
      />
    </div>
  );
};

export default CustomCursor;
