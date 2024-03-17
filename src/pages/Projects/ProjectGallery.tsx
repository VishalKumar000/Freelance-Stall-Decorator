"use client";

import React from "react";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// If you want you can use SCSS instead of css
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Link from "next/link";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/opacity.css";

const ProjectGallery = () => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
    <section className="w-full bg-black text-white py-14">
      <div className="w-full max-w-[1200px] my-0 mx-auto px-4 lg:px-12 flex flex-col gap-8">
        <LightGallery
          onInit={onInit}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames=" grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3"
        >
          {PROJECT_ID_DATA.map((project, index) => {
            return (
              <Link
                href={project.thumbnailURL}
                data-lg-size="1280-853"
                className="w-full h-full min-w-[300px] min-h-[300px] relative overflow-hidden rounded-lg"
                key={
                  index + project.thumbnailURL + project.title + Math.random()
                }
                data-sub-html={`<h4>Photo by - Mr Unique Decoration</h4><p>${project.title}</p>`}
              >
                <img
                  alt={project.title}
                  src={project.thumbnailURL}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  // effect="blur"
                  // placeholderSrc={project.thumbnailURL}
                />
                <p className=" absolute left-0 bottom-3 py-1 px-3 text-white text-[12px] bg-gradient-to-r from-gray-800/50 to-gray-800">
                  {project.title}
                </p>
              </Link>
            );
          })}
        </LightGallery>
      </div>
    </section>
  );
};

export default ProjectGallery;

const PROJECT_ID_DATA = [
  {
    thumbnailURL: "https://deepalidesigns.com/img/74720X4A0002.JPG",
    title: "MAKESHIFT COVID HOSPITAL,IMPHAL",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/20400X4A0006.JPG",
    title: "IMPHAL MAKESHIFT COVID HOSPITAL",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/29040X4A0018.JPG",
    title: "IMPHAL MAKESHIFT COVID HOSPITAL",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/74210X4A0026.JPG",
    title: "IMPHAL MAKESHIFT COVID HOSPITAL",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/35200X4A0030.JPG",
    title: "IMPHAL MAKESHIFT COVID HOSPITAL",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/47730X4A0047.JPG",
    title: "IMPHAL MAKESHIFT COVID HOSPITAL",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/37780X4A0053.JPG",
    title: "IMPHAL MAKESHIFT COVID HOSPITAL",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/42110X4A0064.JPG",
    title: "IMPHAL MAKESHIFT COVID HOSPITAL",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/99420X4A0071.JPG",
    title: "IMPHAL MAKESHIFT COVID HOSPITAL",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/59730X4A9964.JPG",
    title: "IMPHAL MAKESHIFT COVID HOSPITAL",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/59590X4A9969.JPG",
    title: "IMPHAL MAKESHIFT COVID HOSPITAL",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/50830X4A9971.JPG",
    title: "IMPHAL MAKESHIFT COVID HOSPITAL",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/40940X4A9974.JPG",
    title: "IMPHAL MAKESHIFT COVID HOSPITAL",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/61310X4A9991.JPG",
    title: "IMPHAL MAKESHIFT COVID HOSPITAL",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/9831DJI_0345.JPG",
    title: "IMPHAL MAKESHIFT COVID HOSPITAL",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/6795DJI_0359.JPG",
    title: "IMPHAL",
  },
];
