import Image from "next/image";
import Link from "next/link";
import React from "react";

const PostPreview = (props: any) => {
  const { title, date, description, slug, thumbnail } = props;
  return (
    <Link
      href={{
        pathname: `/blog/${slug}`,
        query: { title: title, description: description },
      }}
    >
      <div
        className="border border-slate-300 rounded-md shadow-sm transition-all bg-white hover:-translate-y-5"
      >
        <div className="h-40 w-full relative">
          <Image
            src={thumbnail}
            layout="fill"
            objectFit="cover"
            alt=""
            className="rounded-md"
          />
        </div>
        <div className=" p-4">
          <p className="text-sm text-slate-400">{date}</p>
          <h2 className=" text-[#07b2ff] mb-4">{title}</h2>
          <p className="text-slate-700 leading-5">{description?.slice(0, 200)}</p>
        </div>
      </div>
    </Link>
  );
};

export default PostPreview;
