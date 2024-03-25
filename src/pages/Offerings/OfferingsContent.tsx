import Link from "next/link";
import React from "react";

const OfferingsContent = (props: { content: string[]; btnTitle?: string }) => {
  const { content, btnTitle } = props;
  return (
    <section className="w-full bg-[#f7f8f8] text-[#303030] py-14">
      <div className="w-full max-w-[1200px] my-0 mx-auto px-4 lg:px-8 flex flex-col gap-4">
        {content?.map((item, index) => {
          return (
            <div key={index + item + Math.random()} className="text-[#303030] ">
              <p className="inline-block leading-[23px] ">{item}</p>
            </div>
          );
        })}
        {btnTitle && (
          <Link href={"/about-us"}>
            <button className="py-2 px-4 bg-[#07b2ff] border border-[#07b2ff] tracking-wide transition-all text-white">
              {btnTitle}
            </button>
          </Link>
        )}
      </div>
    </section>
  );
};

export default OfferingsContent;
