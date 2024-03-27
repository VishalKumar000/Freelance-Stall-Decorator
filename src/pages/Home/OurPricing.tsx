import Image from "next/image";
import Link from "next/link";
import React from "react";

const OurPricing = () => {
  return (
    <section className="w-full bg-[#f7f8f8] text-black py-14">
      <div className="w-full max-w-[1200px] my-0 mx-auto px-4 flex flex-col gap-8">
        <div className=" mb-7">
          <div className=" pl-10 lg:pl-20 mb-5 relative">
            <div className="text-[9px] min-[550px]:text-[12px] lg:text-sm heading-highlight uppercase font-semibold tracking-[2px] pl-10 mb-4 relative before:absolute before:left-[-30px] before:w-[5px] before:h-[5px] before:bg-[#07b2ff] before:rounded-full before:top-1/2 before:translate-x-[-50%] before:translate-y-[-50%] after:absolute after:top-1/2 after:left-[-20px] after:h-[1px] after:w-12 after:bg-[#07b2ff]">
              Popular Package
            </div>
          </div>
          <h2
            className="text-2xl min-[550px]:text-4xl lg:text-5xl font-bold tracking-[0.01em]"
            style={{ wordBreak: "break-word" }}
          >
            OUR PRICING
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 min-[550px]:grid-cols-2 min-[550px]:gap-6 lg:grid-cols-3 lg:gap-8">
          {OUR_PRICING_DATA.map((item, index) => {
            return (
              <div key={index + Math.random()} className="shadow-md transition-all hover:-translate-y-3 rounded-md overflow-hidden">
                <div className="p-6 flex flex-col items-center bg-[#07b2ff]">
                  <h3 className="text-white text-2xl font-medium mb-4">
                    {item.title}
                  </h3>
                  <p className="text-white text-4xl font-bold mb-4">
                    ₹{item.price}
                  </p>
                  <p className="text-white text-md font-medium mb-4">
                    - Per Service
                  </p>
                </div>
                <div className="p-6 flex flex-col items-center bg-white">
                  {item.features.map((feature, index) => {
                    return (
                      <div
                        key={
                          Math.random() +
                          feature.title +
                          feature.isAvailable +
                          index
                        }
                        className="mb-4"
                      >
                        <p
                          className={`${
                            !feature.isAvailable
                              ? "line-through text-gray-500"
                              : ""
                          }`}
                        >
                          {feature.title}
                        </p>
                      </div>
                    );
                  })}
                  <Link
                    href={
                      "https://api.whatsapp.com/send?phone=+917042535020&text=Hi, I visited your website and interested in your offerings. So please coordinate ASAP with me. "
                    }
                    className="bg-[#07b2ff] text-[#fff] px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#fff] hover:text-[#07b2ff] transition-all hover:border-[#07b2ff] border-[#07b2ff] border-2 cursor-pointer"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurPricing;

const OUR_PRICING_DATA = [
  {
    title: "Startup Plan",
    price: "50",
    features: [
      { title: "Per Month", isAvailable: true },
      { title: "Free Consultation", isAvailable: true },
      { title: "WP Installation", isAvailable: true },
      { title: "Speed Up WordPress", isAvailable: false },
      { title: "27/7 Support", isAvailable: false },
      { title: "Unlimited Revisions", isAvailable: false },
      { title: "Custom Theme Develop", isAvailable: false },
    ],
  },
  {
    title: "Standard Plan",
    price: "120",
    features: [
      { title: "Per Month", isAvailable: true },
      { title: "Free Consultation", isAvailable: true },
      { title: "WP Installation", isAvailable: true },
      { title: "Speed Up WordPress", isAvailable: true },
      { title: "27/7 Support", isAvailable: true },
      { title: "Unlimited Revisions", isAvailable: false },
      { title: "Custom Theme Develop", isAvailable: false },
    ],
  },
  {
    title: "Premium Plan",
    price: "200",
    features: [
      { title: "Per Month", isAvailable: true },
      { title: "Free Consultation", isAvailable: true },
      { title: "WP Installation", isAvailable: true },
      { title: "Speed Up WordPress", isAvailable: true },
      { title: "27/7 Support", isAvailable: true },
      { title: "Unlimited Revisions", isAvailable: true },
      { title: "Custom Theme Develop", isAvailable: true },
    ],
  },
];
