import React from "react";
import PostPreview from "@/pages/Blog/PostPreview";
import Link from "next/link";
import { Metadata } from "next";
import {client} from '../../../sanity/lib/client'

const getPosts = async () => {
  const query = `
    *[_type == 'MRUniqueDecorationBlog'] | order(_createdAt desc) {
      title,
      "description": smallDescription,
      thumbnail,
      "slug": slug.current
    }
  `
  const data = await client.fetch(query)

  return data;
};

export const metadata: Metadata = {
  title: 'Blog',
  description: 'MR Unique Decoration Blog is your go-to source for innovative interior design ideas. From blending patterns to incorporating sustainable elements, we inspire creativity and personal expression. Explore diverse styles and DIY projects, turning ordinary spaces into extraordinary reflections of individuality. Let us guide you on a journey to reimagine your surroundings and make your home truly unique.'
}

const Blog = async () => {
  const posts = await getPosts();
  const postPreviews = posts?.map((post: any) => {
    return <PostPreview key={Math.random() + post.slug} {...post} />;
  });

  return (
    <section className="w-full bg-white text-[#303030] py-6">
      <div className="w-full max-w-[1200px] my-0 mx-auto px-12 lg:px-4 flex flex-col gap-8">
        <header>
          <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
            <Link href="/">
              <h1 className="text-2xl text-white font-bold mt-4 mb-2">
                MR Unique Decoration Blog
              </h1>
            </Link>
            <p className="text-slate-300">👋 Welcome to My Blog. </p>
          </div>
        </header>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {postPreviews}
        </div>
      </div>
    </section>
  );
};

export default Blog;
