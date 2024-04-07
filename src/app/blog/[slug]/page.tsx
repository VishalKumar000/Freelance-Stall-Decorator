import React from "react";
import "./blogpage.css";
import { client } from "../../../../sanity/lib/client";
import Image from "next/image";
import { urlForImage } from "../../../../sanity/lib/image";
import {PortableText} from '@portabletext/react'

const getPost = async (slug: string) => {
  const query = `
    *[_type == 'MRUniqueDecorationBlog' && slug.current == '${slug}'][0]
  `;
  const post = await client.fetch(query);
  return post;
};

export async function generateMetadata({ params }: any) {
  const post = await getPost(params.slug);
  return {
    title: post.title,
    description: post.smallDescription,
  };
}

const BlogPage = async (props: any) => {
  const slug: string = props.params.slug;
  const post = await getPost(slug);

  return (
    <section className="w-full bg-white text-[#303030] py-6">
      <div className="w-full max-w-[1200px] my-0 mx-auto px-12 lg:px-4 flex flex-col gap-8">
        <div className="mt-12 mb-2 text-center max-w-lg mx-auto">
          <h1 className="text-5xl text-slate-600 font-semibold">
            {post.title}
          </h1>
          <p className="text-slate-400 mt-2">{post.smallDescription}</p>
        </div>

        <div className=" overflow-hidden min-h-[300px] relative max-w-[720px] w-full h-full mx-auto my-0  border border-slate-300">
          <Image
            src={urlForImage(post.thumbnail)}
            fill
            // sizes="100vw"
            objectFit="cover"
            alt=""
            className="rounded-md group-hover:scale-105 transition-all"
            priority
          />
        </div>

        <article className="prose prose-blue prose-lg mx-auto prose-li:marker:text-[#07b2ff]">
          <PortableText value={post.content}/>
        </article>
      </div>
    </section>
  );
};

export default BlogPage;
