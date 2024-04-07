import Image from "next/image";
import Link from "next/link";
import React from "react";
import {urlForImage} from '../../../sanity/lib/image'

const PostPreview = (props: any) => {
  const { title, date, description, slug, thumbnail } = props;
  return (
    <Link href={`/blog/${slug}`}>
      <div className="group border border-slate-300 rounded-md shadow-sm transition-all bg-white">
        <div className="h-40 w-full relative transition-all overflow-hidden">
          <Image
            src={urlForImage(thumbnail)}
            fill
            sizes="100vw"
            objectFit="cover"
            alt=""
            className="rounded-md group-hover:scale-105 transition-all"
          />
        </div>
        <div className=" p-4">
          <p className="text-sm text-slate-400">{date}</p>
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
