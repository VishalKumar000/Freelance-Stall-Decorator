"use client";

import React, { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";

const GsapMagnetic = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { width, height, top, left } = ref.current!.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      gsap.to(ref.current, { x });
      gsap.to(ref.current, { y });
    };

    const mouseLeave = () => {
      gsap.to(ref.current, { x: 0 });
      gsap.to(ref.current, { y: 0 });
    };

    const element = ref.current;

    if (element) {
      element.addEventListener("mousemove", mouseMove);
      element.addEventListener("mouseleave", mouseLeave);
    }

    return () => {
      if (element) {
        element.removeEventListener("mousemove", mouseMove);
        element.removeEventListener("mouseleave", mouseLeave);
      }
    };
  }, []);

  return <div ref={ref}>{children}</div>;
};

export default GsapMagnetic;
