//@ts-nocheckk

"use client";

import React, { useEffect, useState } from "react";
import {motion}

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  return (
    <div className="flex items-center justify-center min-h-screen bg-yellow-400 text-black">
      CustomCursor
      <motion.div className="w-10 h-10 bg-black rounded-full fixed top-0 left-0" />
    </div>
  );
};

export default CustomCursor;
