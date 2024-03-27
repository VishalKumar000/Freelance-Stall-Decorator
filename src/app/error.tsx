"use client";

import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Error",
};

const error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <section className="w-full bg-white text-white py-16 min-h-[60vh]">
      <div className="w-full max-w-[1200px] min-h-[60vh] my-0 mx-auto px-4 flex flex-col gap-8 items-center justify-center">
        <div className="text-center">
          <h1 className=" text-7xl font-black m-0 uppercase bg-cover bg-center heading-highlight">
            An Error Occurred!
          </h1>
          <p
            className="text-[#303030] font-medium text-2xl"
            style={{ wordBreak: "break-word" }}
          >
            Please Try Again Later.
          </p>
          <div className="mt-4 gap-4 flex justify-center">
            <button
              onClick={reset}
              type="button"
              className={
                "focus:outline-none border-2 border-[#07b2ff] font-bold rounded-lg text-sm px-5 text-[#07b2ff] py-2.5 mb-2 capitalize hover:bg-[#07b2ff] hover:text-white"
              }
            >
              Try Again
            </button>
            <Link href={"/"}>
              <button
                type="button"
                className={
                  "focus:outline-none border-2 border-[#07b2ff] font-bold rounded-lg text-sm px-5 text-[#07b2ff] py-2.5 mb-2 capitalize hover:bg-[#07b2ff] hover:text-white"
                }
              >
                Go To Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default error;
