import Link from "next/link";
import React from "react";

const OfferingsContent = (props: { content: string[]; btnTitle?: string }) => {
  const { content, btnTitle } = props;
  return (
    <section className="w-full bg-black text-white py-14">
      <div className="w-full max-w-[1200px] my-0 mx-auto px-4 lg:px-8 flex flex-col gap-4">
        {content?.map((item, index) => {
          return (
            <div key={index + item + Math.random()} className="text-[#fff] ">
              <p className="inline-block leading-[23px] ">{item}</p>
            </div>
          );
        })}
        {btnTitle && (
          <Link href={"/about-us"}>
            <button className="py-2 px-4 border border-[#ffffffb0] tracking-wide transition-all hover:bg-white hover:text-black">
              {btnTitle}
            </button>
          </Link>
        )}
      </div>
    </section>
  );
};

export default OfferingsContent;
