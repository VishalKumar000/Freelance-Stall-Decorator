import React from "react";
import Image from "next/image";
import Link from "next/link";

const EXPERIMENTAL_ENVELOPE_DATA = [
  {
    title: "Octanorm Stall Rent and service",
    content: "Can Be used for Multiple Exhibitions And Program",
    material: "PVC",
    color: "white",
    board_thickness: "5mm",
    price: 350,
    link: "https://api.whatsapp.com/send?phone=+917042535020&text=Hi, I visited your website and interested in your offerings. So please coordinate ASAP with me. ",
    category: "Octanorm Stall",
    unit: "Square Meter",
  },
  {
    title: "Aluminum Octanorm Stall Service",
    content: "Can Be used for Multiple Exhibitions And Program",
    shape: "Rectangle",
    color: "white (base)",
    board_thickness: "6mm",
    price: 450,
    link: "https://api.whatsapp.com/send?phone=+917042535020&text=Hi, I visited your website and interested in your offerings. So please coordinate ASAP with me. ",
    category: "Octanorm Stall",
    unit: "Square Meter",
  },
  {
    title: "PVC Octanorm Stall Rent and service",
    content: "Can Be used for Multiple Exhibitions And Program",
    shape: "Rectangle",
    color: "white (base)",
    board_thickness: "6mm",
    price: 350,
    link: "https://api.whatsapp.com/send?phone=+917042535020&text=Hi, I visited your website and interested in your offerings. So please coordinate ASAP with me. ",
    category: "Octanorm Stall",
    unit: "Square Meter",
  },
  {
    title: "Modular Octanorm Stall RE",
    content: "Can Be used for Multiple Exhibitions And Program",
    material: "PVC",
    color: "white (base)",
    board_thickness: "6mm",
    price: 450,
    link: "https://api.whatsapp.com/send?phone=+917042535020&text=Hi, I visited your website and interested in your offerings. So please coordinate ASAP with me. ",
    category: "Octanorm Stall",
    unit: "Square Meter",
  },
  {
    title: "Octanorm Exhibition Stalls On Rent",
    content: "Can Be used for Multiple Exhibitions And Program",
    material: "PVC",
    color: "white",
    board_thickness: "5mm",
    price: 350,
    link: "https://api.whatsapp.com/send?phone=+917042535020&text=Hi, I visited your website and interested in your offerings. So please coordinate ASAP with me. ",
    category: "Octanorm Stall",
    unit: "Square Meter",
  },
  {
    title: "4mm Octanorm Stall Rent and Service",
    content: "Can Be used for Multiple Exhibitions And Program",
    material: "PVC",
    color: "white",
    pattern: "Plain",
    price: 350,
    link: "https://api.whatsapp.com/send?phone=+917042535020&text=Hi, I visited your website and interested in your offerings. So please coordinate ASAP with me. ",
    category: "Octanorm Stall",
    unit: "Square Meter",
  },
  {
    title: "5mm White Octanorm Stall Rent service",
    content: "Can Be used for Multiple Exhibitions And Program",
    material: "PVC",
    shape: "Rectangle",
    fabric: "polyester",
    price: 350,
    link: "https://api.whatsapp.com/send?phone=+917042535020&text=Hi, I visited your website and interested in your offerings. So please coordinate ASAP with me. ",
    category: "Octanorm Stall",
    unit: "Square Meter",
  },
  {
    title: "5mm White Octanorm Stall Rent service",
    content: "Can Be used for Multiple Exhibitions And Program",
    material: "PVC",
    shape: "Rectangle",
    fabric: "polyester",
    price: 350,
    link: "https://api.whatsapp.com/send?phone=+917042535020&text=Hi, I visited your website and interested in your offerings. So please coordinate ASAP with me. ",
    category: "Octanorm Stall",
    unit: "Square Meter",
  },
  {
    title: "Exhibition Stall Rent and service",
    content: "Can Be used for Multiple Exhibitions And Program",
    material: "PVC",
    shape: "Rectangle",
    board_thickness: "5mm",
    price: 350,
    link: "https://api.whatsapp.com/send?phone=+917042535020&text=Hi, I visited your website and interested in your offerings. So please coordinate ASAP with me. ",
    category: "Exhibition Stall",
    unit: "Square Meter",
  },
  {
    title: "Modular Exhibition Stall Rent and Service",
    content: "Can Be used for Multiple Exhibitions And Program",
    fabric: "polyester",
    pattern: "Printed",
    board_thickness: "5mm",
    price: 350,
    link: "https://api.whatsapp.com/send?phone=+917042535020&text=Hi, I visited your website and interested in your offerings. So please coordinate ASAP with me. ",
    category: "Exhibition Stall",
    unit: "Square Meter",
  },
  {
    title: "Modular Exhibition Stall Service",
    content: "Can Be used for Multiple Exhibitions And Program",
    fabric: "polyester",
    pattern: "Printed",
    board_thickness: "5mm",
    price: 450,
    link: "https://api.whatsapp.com/send?phone=+917042535020&text=Hi, I visited your website and interested in your offerings. So please coordinate ASAP with me. ",
    category: "Exhibition Stall",
    unit: "Square Meter",
  },
  {
    title: "Modular Exhibition Stall Service",
    content: "Can Be used for Multiple Exhibitions And Program",
    fabric: "polyester",
    pattern: "Printed",
    material: "PVC",
    price: 450,
    link: "https://api.whatsapp.com/send?phone=+917042535020&text=Hi, I visited your website and interested in your offerings. So please coordinate ASAP with me. ",
    category: "Exhibition Stall",
    unit: "Square Meter",
  },
  {
    title: "Designing Exhibition Stall",
    content: "Designing Exhibition Stall",
    price: 500,
    link: "https://api.whatsapp.com/send?phone=+917042535020&text=Hi, I visited your website and interested in your offerings. So please coordinate ASAP with me. ",
    category: "Exhibition Stall",
    unit: "sq ft",
  },
];

const ExperimentalEnvelope = () => {
  return (
    <section className="w-full text-black py-14">
      <div className="w-full max-w-[1200px] my-0 mx-auto px-4 flex flex-col gap-8">
        <div className=" mb-7">
          <div className=" pl-10 lg:pl-20 mb-5 relative">
            <div className="text-[9px] min-[550px]:text-[12px] lg:text-sm heading-highlight uppercase font-semibold tracking-[2px] pl-10 mb-4 relative before:absolute before:left-[-30px] before:w-[5px] before:h-[5px] before:bg-[#07b2ff] before:rounded-full before:top-1/2 before:translate-x-[-50%] before:translate-y-[-50%] after:absolute after:top-1/2 after:left-[-20px] after:h-[1px] after:w-12 after:bg-[#07b2ff]">
              OUR RANGE OF OFFERINGS
            </div>
          </div>
          <h2
            className="text-2xl min-[550px]:text-4xl lg:text-5xl font-bold tracking-[0.01em]"
            style={{ wordBreak: "break-word" }}
          >
            PUSHING THE
          </h2>
          <h2
            className="text-2xl min-[550px]:text-4xl lg:text-5xl font-bold tracking-[0.01em]"
            style={{ wordBreak: "break-word" }}
          >
            EXPERIENTIAL ENVELOPE
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 min-[550px]:grid-cols-2 min-[550px]:gap-4 lg:grid-cols-3 lg:gap-4 auto-cols-auto">
          {EXPERIMENTAL_ENVELOPE_DATA.map((item, index) => {
            return (
              <Link
                key={index + Math.random() + item.title + item.link}
                className="group min-h-min relative rounded-lg border border-[#07b2ff] overflow-hidden before:content-[''] before:absolute before:top-0 before:w-full before:h-full before:bg-[#07b2ff] before:transition-all before:z-[-1] before:left-[-100%] hover:before:left-0"
                href={item.link}
              >
                <div className="relative w-full h-52 mt-0 mx-auto mb-5">
                  {/* {item.icons} */}
                  <Image src={"/Home/A2.jpeg"} fill alt="" />
                </div>
                <div
                  // className={`p-6 ${
                  //   index % 2
                  //     ? "max-[550px]: bg-[#000]"
                  //     : "max-[550px]: bg-[#1c2027]"
                  // } ${
                  //   (index - 1) % 4 == 0 || (index - 1) % 4 == 1
                  //     ? "min-[550px]:bg-[#1c2027]"
                  //     : "min-[550px]:bg-[#000]"
                  // } ${
                  //   index % 2 === 0 ? "lg:bg-[#000]" : "lg:bg-[#1c2027]"
                  // } flex flex-col justify-between`}

                  className="p-6 pt-0 flex flex-col justify-evenly "
                >
                  <div className="text-white text-lg tracking-[2.5px] font-semibold mb-2 text-left">
                    <h2
                      className="text-[#212529] group-hover:text-white"
                      style={{ wordBreak: "break-word" }}
                    >
                      {item.title}
                    </h2>
                  </div>
                  <div className="mb-3 group">
                    <span
                      className="text-[#fff] border border-[#07b2ff] text-[12px] relative group-hover:text-[#07b2ff] bg-[#07b2ff] py-1 rounded-lg px-2  group-hover:border-[#fff] group-hover:bg-white"
                      style={{ wordBreak: "break-word" }}
                    >
                      {">"} {item.category}
                    </span>
                  </div>
                  <p
                    className="text-[#303030] text-sm relative group-hover:text-[#ffffffb0]"
                    style={{ wordBreak: "break-word" }}
                  >
                    {item.content}
                  </p>
                  {item.material && (
                    <div className="mt-1 flex items-center gap-1">
                      <h2 className=" font-medium group-hover:text-[#ffffffee]">
                        Material:
                      </h2>
                      <p className="text-[#303030] text-sm relative group-hover:text-[#ffffffb0]">
                        {item.material}
                      </p>
                    </div>
                  )}
                  {item.color && (
                    <div className="mt-1 flex items-center gap-1">
                      <h2 className=" font-medium group-hover:text-[#ffffffee]">
                        Color:
                      </h2>
                      <p className="text-[#303030] text-sm relative group-hover:text-[#ffffffb0]">
                        {item.color}
                      </p>
                    </div>
                  )}
                  {item.board_thickness && (
                    <div className="mt-1 flex items-center gap-1">
                      <h2 className=" font-medium group-hover:text-[#ffffffee]">
                        Board Thickness:
                      </h2>
                      <p className="text-[#303030] text-sm relative group-hover:text-[#ffffffb0]">
                        {item.board_thickness}
                      </p>
                    </div>
                  )}
                  {item.shape && (
                    <div className="mt-1 flex items-center gap-1">
                      <h2 className=" font-medium group-hover:text-[#ffffffee]">
                        Shape:
                      </h2>
                      <p className="text-[#303030] text-sm relative group-hover:text-[#ffffffb0]">
                        {item.shape}
                      </p>
                    </div>
                  )}
                  {item.pattern && (
                    <div className="mt-1 flex items-center gap-1">
                      <h2 className=" font-medium group-hover:text-[#ffffffee]">
                        Pattern:
                      </h2>
                      <p className="text-[#303030] text-sm relative group-hover:text-[#ffffffb0]">
                        {item.pattern}
                      </p>
                    </div>
                  )}
                  {item.fabric && (
                    <div className="mt-1 flex items-center gap-1">
                      <h2 className=" font-medium group-hover:text-[#ffffffee]">
                        Fabric:
                      </h2>
                      <p className="text-[#303030] text-sm relative group-hover:text-[#ffffffb0]">
                        {item.fabric}
                      </p>
                    </div>
                  )}
                  <div className="mt-1 flex items-center gap-1 justify-center">
                    <h2 className=" text-xl font-medium group-hover:text-[#ffffffee]">
                      ₹{item.price}
                    </h2>
                    <p className="text-[#303030] text-sm relative group-hover:text-[#ffffffb0]">
                      {item.unit}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperimentalEnvelope;
