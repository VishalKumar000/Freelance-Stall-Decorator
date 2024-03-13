//@ts-nocheck

"use client";

import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const CustomCursorContext = createContext<any>({});

export const useCustomCursor = () => useContext(CustomCursorContext);

export const CustomCursorProvider = ({ children }: { children: ReactNode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariants, setCursorVariants] = useState("default");

  useEffect(() => {
    const mouseMove = (e: { clientX: any; clientY: any }) => {
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
      backgroundColor: "rgb(255, 255, 255)",
    },
    text: {
      height: 75,
      width: 75,
      x: mousePosition.x - 32.5,
      y: mousePosition.y - 32.5,
      backgroundColor: "rgb(255, 255, 255)",
      color: "rgb(0, 0, 0)",
      mixBlendMode: "difference",
    },
    contrast_text: {
      height: 20,
      width: 20,
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      backgroundColor: "rgb(255, 255, 255)",
      color: "rgb(0, 0, 0)",
      mixBlendMode: "difference",
    },
    header_overlay_contrast_text: {
      height: 20,
      width: 20,
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      backgroundColor: "rgb(183, 250, 91)",
      color: "rgb(0, 0, 0)",
      mixBlendMode: "difference",
    },
    header_overlay_text: {
      height: 75,
      width: 75,
      x: mousePosition.x - 32.5,
      y: mousePosition.y - 32.5,
      backgroundColor: "rgb(183, 250, 91)",
      color: "rgb(0, 0, 0)",
      mixBlendMode: "difference",
    },
  };

  const customCursorEnter = (title: "contrast_text" | "title" | "default") =>
    setCursorVariants(title);
  const customCursorLeave = () => setCursorVariants("default");

  return (
    <CustomCursorContext.Provider
      value={{
        mousePosition,
        variants,
        cursorVariants,
        customCursorEnter,
        customCursorLeave,
      }}
    >
      {children}
    </CustomCursorContext.Provider>
  );
};
