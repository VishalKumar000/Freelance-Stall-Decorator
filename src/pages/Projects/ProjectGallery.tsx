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
import Image from "next/image";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/opacity.css";

const ProjectGallery = (props: {
  data: { title: string; thumbnailURL: string }[];
}) => {
  const { data } = props;
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (  
    <section className="w-full bg-white text-white py-14">
      <div className="w-full max-w-[1200px] my-0 mx-auto px-4 lg:px-8 flex flex-col gap-8">
        <LightGallery
          onInit={onInit}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames=" grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3"
        >
          {data?.map((project: any, index: any) => {
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
                <Image
                  alt={project.title}
                  src={project.thumbnailURL}
                  // className="absolute top-0 left-0 w-full h-full object-cover"
                  fill
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
