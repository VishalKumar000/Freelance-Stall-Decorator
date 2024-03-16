"use client";

import Link from "next/link";
import React from "react";

const error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <section className="w-full bg-black text-white py-16 min-h-[60vh]">
      <div className="w-full max-w-[1200px] min-h-[60vh] my-0 mx-auto px-4 flex flex-col gap-8 items-center justify-center">
        <div className="text-center">
          <h1 className=" text-7xl font-black m-0 uppercase bg-cover bg-center heading-highlight">
            An Error Occurred!
          </h1>
          <p
            className="text-[#ddd8d8] font-medium text-2xl"
            style={{ wordBreak: "break-word" }}
          >
            Please Try Again Later.
          </p>
          <div className="mt-4 gap-4 flex justify-center">
            <button
              onClick={reset}
              type="button"
              className={
                "focus:outline-none border-2 border-orange-500 font-bold rounded-lg text-sm px-5 text-white py-2.5 mb-2 capitalize hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500"
              }
            >
              Try Again
            </button>
            <Link href={"/"}>
              <button
                type="button"
                className={
                  "focus:outline-none border-2 border-orange-500 font-bold rounded-lg text-sm px-5 text-white py-2.5 mb-2 capitalize hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500"
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
