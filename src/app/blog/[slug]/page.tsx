import React, { Suspense } from "react";
import "./blogpage.css";
import Image from "next/image";
import { PortableText } from '@portabletext/react'
import serialize from './serialize'
import ProjectGallery from "@/pages/Projects/ProjectGallery";

const getPost = async (slug: string) => {
  const data = await (await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog-posts/`)).json()
  const post = data.docs.filter((post: any) => post.slug === slug)[0]

  post.content = serialize(post.content)
  return post
};

export async function generateMetadata({ params }: any) {
  const post = await getPost(params.slug);
  return {
    title: post.title,
    description: post.description,
  };
}

const BlogPage = async (props: any) => {
  const slug: string = props.params.slug;
  const post = await getPost(slug);

  console.log(post.eventVideos)
  return (
    <section className="w-full bg-white text-[#303030] py-6">
      <div className="w-full max-w-[1200px] my-0 mx-auto px-12 lg:px-4 flex flex-col gap-8">
        <div className="mt-12 mb-2 text-center max-w-lg mx-auto">
          <h1 className="text-5xl text-slate-600 font-semibold">
            {post.title}
          </h1>
        </div>
        <div className=" overflow-hidden min-h-[300px] relative max-w-[720px] w-full h-full mx-auto my-0  border border-slate-300">
          <Image
            src={post.thumbnail}
            fill
            // sizes="100vw"
            objectFit="cover"
            alt=""
            className="rounded-md group-hover:scale-105 transition-all"
            priority
          />
        </div>
        <article className="prose prose-blue w-full max-w-[1100px] text-md mx-auto prose-li:marker:text-[#07b2ff]">
          {post.content}
        </article>
        <ProjectGallery data={post.eventImages.map((eventImage: any) => {
          return {
            ...eventImage,
            thumbnailURL: eventImage.image
          }
        })} />
        <section className="w-full bg-white text-white py-0">
          <div className="w-full max-w-[1200px] my-0 mx-auto px-4 lg:px-8 flex flex-col gap-8 rounded-md overflow-hidden">
            {post.eventVideos.map((video: any) => {
              return <Suspense key={video.url + Math.random()}
                fallback={<p>Loading video...</p>}>
                <iframe
                  id="ytplayer"
                  className={"rounded-md overflow-hidden"}
                  width="100%"
                  height="450"
                  src={video.url}
                ></iframe>
              </Suspense>
            })}

          </div>
        </section>

      </div>
    </section>
  );
};

export default BlogPage;
