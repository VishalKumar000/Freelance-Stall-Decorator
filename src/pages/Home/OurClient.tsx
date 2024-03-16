import Image from "next/image";
import React from "react";

const OUR_CLIENT_DATA = [
  "/Home/Client/image1.jpg",
  "/Home/Client/image2.jpg",
  "/Home/Client/image3.jpg",
  "/Home/Client/image4.jpg",
  "/Home/Client/image5.jpg",
  "/Home/Client/image6.jpg",
  "/Home/Client/image7.jpg",
  "/Home/Client/image8.jpg",
  "/Home/Client/image9.jpg",
  "/Home/Client/image10.jpg",
  "/Home/Client/image11.jpg",
];

const OurClient = () => {
  return (
    <section className="w-full bg-black text-white py-14">
      <div className="w-full max-w-[1200px] my-0 mx-auto px-4 flex flex-col gap-8">
        <div className=" mb-7">
          <div className=" pl-20 mb-5 relative">
            <div className="text-[#ffffffb0] uppercase text-sm font-semibold tracking-[2px] pl-10 mb-4 relative before:absolute before:left-[-30px] before:w-[5px] before:h-[5px] before:bg-white before:rounded-full before:top-1/2 before:translate-x-[-50%] before:translate-y-[-50%] after:absolute after:top-1/2 after:left-[-20px] after:h-[1px] after:w-12 after:bg-[rgba(233, 233, 233, 0.1)]">
              our clients
            </div>
          </div>
          <h2 className="text-5xl font-bold tracking-[0.01em]">Our Client</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 min-[450px]:grid-cols-2 min-[450px]:gap-2 md:grid-cols-2 md:gap-3 lg:grid-cols-4 lg:gap-4">
          <Image
            src={"/Home/Client/image1.jpg"}
            alt="image selected by user"
            fill
          />
          {OUR_CLIENT_DATA.map((item, index) => {
            return (
              <div
                key={index + item + index + Math.random()}
                className="relative w-full h-full min-h-[250px] lg:min-h-[200px]"
              >
                <Image
                  src={item}
                  alt="image selected by user"
                  fill
                  objectFit="cover"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurClient;
