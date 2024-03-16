"use client";

import { useState } from "react";
import Link from "next/link";

const Button = ({ className, children, ...rest }: ButtonProps) => {
  return (
    <button {...rest} className={className}>
      {children}
    </button>
  );
};

export const Text = <E extends React.ElementType = "div">({
  className,
  children,
  as,
}: TextProps<E>) => {
  const Component = as || "div";
  return <Component className={className}>{children}</Component>;
};

const ImageFilter = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const buttonCaptions = ["all", "delhi", "nodia", "gurugram"];

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <section className="w-full flex flex-col gap-12 py-16 lg:px-16 md:px-10 px-5">
      <div className="flex w-full md:justify-center items-start md:gap-6 gap-3 flex-wrap">
        {buttonCaptions.map((filter) => (
          <Button
            key={filter}
            onClick={() => handleFilterClick(filter)}
            type="button"
            className={`focus:outline-none border-2 border-orange-500 font-medium rounded-lg text-sm px-5 text-white py-2.5 mb-2 capitalize ${
              activeFilter === filter
                ? "bg-gradient-to-r from-orange-500 to-yellow-500"
                : " "
            }`}
          >
            {filter === "all" ? "Show all" : filter}
          </Button>
        ))}
        {/* filtered cards display */}
        <main className="w-full grid lg:grid-cols-3 md:grid-cols-2 gap-x-5 gap-y-8 md:mt-8">
          {filterableData.map((item, index) => (
            <div
              key={index}
              className={`w-full cursor-pointer transition-all duration-200 rounded-lg shadow bg-[#1c2027] border border-gray-600 ${
                activeFilter === "all" || activeFilter === item.name
                  ? "block"
                  : "hidden"
              }`}
            >
              <div className="p-5 flex flex-col justify-center">
                <Text
                  as="h5"
                  className="mb-2 text-lg font-bold tracking-tight text-white"
                >
                  {item.address}
                </Text>
                <Text as="p" className="mb-3 font-normal text-gray-400">
                  {item.phone}
                </Text>
                <Text as="p" className="mb-3 font-normal text-gray-400">
                  {item.email}
                </Text>
                <Link href={item.location}>
                  <Text
                    as="p"
                    className="mb-3 font-bold heading-highlight text-sm"
                  >
                    View Google Map Location
                  </Text>
                </Link>
              </div>
            </div>
          ))}
        </main>
      </div>
    </section>
  );
};

export default ImageFilter;

const filterableData = [
  {
    name: "delhi",
    address: "GN-6 Shivaji Enclave, Rajouri Garden, New Delhi-110027",
    phone: "+91- 7669482904",
    email: "geetagya.sharma@deepalidesigns.com",
    location: "/",
  },
  {
    name: "nodia",
    address: "GN-6 Shivaji Enclave, Rajouri Garden, New Delhi-110027",
    phone: "+91- 7669482904",
    email: "geetagya.sharma@deepalidesigns.com",
    location: "/",
  },
  {
    name: "nodia",
    address: "GN-6 Shivaji Enclave, Rajouri Garden, New Delhi-110027",
    phone: "+91- 7669482904",
    email: "geetagya.sharma@deepalidesigns.com",
    location: "/",
  },
  {
    name: "gurugram",
    address: "GN-6 Shivaji Enclave, Rajouri Garden, New Delhi-110027",
    phone: "+91- 7669482904",
    email: "geetagya.sharma@deepalidesigns.com",
    location: "/",
  },
];

type ButtonProps = {
  className: string;
  children: string | React.ReactNode;
} & Omit<React.ComponentProps<"button">, "children">;

type TextOwnProps<E extends React.ElementType> = {
  className: string;
  children?: React.ReactNode;
  as?: E;
};

type TextProps<E extends React.ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;