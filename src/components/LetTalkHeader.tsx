import React from "react";

const LetTalkHeader = () => {
  return (
    <section className="w-full bg-white text-[#212529] py-14">
      <div className="w-full max-w-[1200px] my-0 mx-auto px-10 lg:px-4 flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <h4 className="text-md text-[#07b2ff] relative tracking-[2px] uppercase font-bold m-0 p-0 before:h-[1px] before:bg-[#07b2ff] before:absolute before:translate-x-[-100%] before:left-[-50px] before:right-auto before:w-[150px] before:top-2/4">
              LET&apos;S TALK
            </h4>
            <h1 className="m-0 p-0 mt-4 tracking-[2px] font-bold text-6xl">
              Contact
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetTalkHeader;
