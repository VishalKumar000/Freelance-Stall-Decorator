import Image from "next/image";
import Link from "next/link";
import React from "react";

const EXPERIMENTAL_ENVELOPE_DATA = [
  {
    imgUrl: "/Home/ExperimentalEnvelope/image1.png",
    title: "Deepali R&D Division",
    content:
      "Embark on a transformative journey towards sustainability and a net-zero future by exploring our pioneering R&D initiatives.",
    link: "/",
  },
  {
    imgUrl: "/Home/ExperimentalEnvelope/image2.png",
    title: "Events, Activations & Promotions",
    content:
      "When it comes to Events or promotions, Deepali believes in taking on challenging projects and implementing them against all odds.",
    link: "/",
  },
  {
    imgUrl: "/Home/ExperimentalEnvelope/image3.png",
    title: "Exhibits & Tradeshows",
    content:
      "Be it large-scale expositions or big-ticket exhibits we turn them into reality.",
    link: "/",
  },
  {
    imgUrl: "/Home/ExperimentalEnvelope/image4.png",
    title: "Conferences and Seminars",
    content:
      "We are into organizing large format events that include both national level as well as international seminars, symposiums or conferences.",
    link: "/",
  },
  {
    imgUrl: "/Home/ExperimentalEnvelope/image5.png",
    title: "Sports Events & Infrastructure",
    content:
      "To showcase the best sporting talent or gamesmanship — there are a lot of factors involved - such as stadium seating,Creative Field of Play, Standard Operating",
    link: "/",
  },
  {
    imgUrl: "/Home/ExperimentalEnvelope/image6.png",
    title: "Modular Infrastructure",
    content:
      "With 3 decades of fabricating and setting up large-scale Events & Exhibitions, thereby shaping up its edge, know how , infrastructure",
    link: "/",
  },
  {
    imgUrl: "/Home/ExperimentalEnvelope/image7.png",
    title: "Weddings",
    content:
      "We create authentic wedding experiences with our exquisitely curated wedding banquets, dedicated pandal options, catering services, artist",
    link: "/",
  },
];

const ExperimentalEnvelope = () => {
  return (
    <section className="w-full bg-black text-white py-14">
      <div className="w-full max-w-[1200px] my-0 mx-auto px-4 flex flex-col gap-8">
        <div className=" mb-7">
          <div className=" pl-10 lg:pl-20 mb-5 relative">
            <div className="text-[9px] min-[550px]:text-[12px] lg:text-sm text-[#ffffffb0] uppercase font-semibold tracking-[2px] pl-10 mb-4 relative before:absolute before:left-[-30px] before:w-[5px] before:h-[5px] before:bg-white before:rounded-full before:top-1/2 before:translate-x-[-50%] before:translate-y-[-50%] after:absolute after:top-1/2 after:left-[-20px] after:h-[1px] after:w-12 after:bg-[rgba(233, 233, 233, 0.1)]">
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
        <div className="grid grid-cols-1 gap-4 min-[550px]:grid-cols-2 min-[550px]:gap-2 lg:grid-cols-3 lg:gap-4">
          {EXPERIMENTAL_ENVELOPE_DATA.map((item, index) => {
            return (
              <div
                key={
                  item.imgUrl + index + Math.random() + item.title + item.link
                }
                className={`p-3 ${
                  index % 2
                    ? "max-[550px]: bg-[#000]"
                    : "max-[550px]: bg-[#1c2027]"
                } ${
                  (index - 1) % 4 == 0 || (index - 1) % 4 == 1
                    ? "min-[550px]:bg-[#1c2027]"
                    : "min-[550px]:bg-[#000]"
                } ${index % 2 === 0 ? "lg:bg-[#000]" : "lg:bg-[#1c2027]"}`}
              >
                <div className="relative w-12 h-12 mt-0 mx-auto mb-5">
                  <Image
                    src={item.imgUrl}
                    alt="image selected by user"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="text-white text-lg tracking-[2.5px] font-semibold mb-5 flex items-center justify-center text-center">
                  <h2 className="w-1/2" style={{ wordBreak: "break-word" }}>
                    {item.title}
                  </h2>
                </div>
                <p className="text-[#ffffffb0] text-sm relative">
                  {item.content}
                </p>
                <Link
                  href={item.link}
                  className="w-full heading-highlight mt-2 font-medium flex items-center justify-center"
                >
                  Read More
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperimentalEnvelope;
