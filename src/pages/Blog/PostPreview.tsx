import Image from "next/image";
import Link from "next/link";
import React from "react";

const PostPreview = (props: any) => {
  const { title = "", description = "", slug = "", thumbnail = "" } = props;
  return (
    <Link href={`/blog/${slug}`}>
      <div className="group border border-slate-300 rounded-md shadow-sm transition-all bg-white">
        <div className="h-40 w-full relative transition-all overflow-hidden bg-gray-400">
          {thumbnail ? <Image
            src={thumbnail}
            fill
            sizes="100vw"
            objectFit="cover"
            alt=""
            className="rounded-md group-hover:scale-105 transition-all"
          /> : <div className=" text-white font-semibold w-full h-full flex items-center justify-center">
            <p>Image Not Found</p>
          </div>}
        </div>
        <div className=" p-4">
          <h2 className=" text-[#07b2ff] mb-4">{title}</h2>
          <p className="text-slate-700 leading-5">
            {description?.slice(0, 200)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PostPreview;
