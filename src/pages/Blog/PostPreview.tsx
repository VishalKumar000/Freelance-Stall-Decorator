import Link from "next/link";
import React from "react";

const PostPreview = (props: any) => {
  const { title, date, description, slug } = props;
  return (
    <Link
      href={{
        pathname: `/blog/${slug}`,
        query: { title: title, description: description },
      }}
    >
      <div
        className="border border-slate-300 p-4 rounded-md shadow-sm
    bg-white"
      >
        <p className="text-sm text-slate-400">{date}</p>
        <h2 className=" text-[#07b2ff] mb-4">{title}</h2>
        <p className="text-slate-700">{props.description}</p>
      </div>
    </Link>
  );
};

export default PostPreview;
