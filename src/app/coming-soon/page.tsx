import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Coming Soon",
};

const ComingSoon = () => {
  return (
    <section className="w-full bg-black text-white py-16 min-h-[60vh]">
      <div className="w-full max-w-[1200px] min-h-[60vh] my-0 mx-auto px-4 flex flex-col gap-8 items-center justify-center">
        <div className="text-center">
          <h1 className=" text-7xl font-black m-0 uppercase bg-cover bg-center heading-highlight">
            Coming Soon..
          </h1>
          <p
            className="text-[#ddd8d8] font-medium text-2xl"
            style={{ wordBreak: "break-word" }}
          >
            New feature on the way. &#128522;
          </p>
          <div className="mt-4 gap-4 flex justify-center">
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

export default ComingSoon;
