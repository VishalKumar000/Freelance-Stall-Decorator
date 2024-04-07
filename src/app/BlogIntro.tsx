import React from "react";
import PostPreview from "../pages/Blog/PostPreview";
import { client } from "../../sanity/lib/client";

const getPosts = async () => {
  const query = `
    *[_type == 'MRUniqueDecorationBlog'] | order(_createdAt desc) {
      title,
      "description": smallDescription,
      thumbnail,
      "slug": slug.current
    } [0...3]
  `;
  const data = await client.fetch(query);
  return data;
};

const BlogIntro = async () => {
  const posts: any[] = await getPosts();
  const postPreviews = posts?.map((post: any) => {
    return <PostPreview key={Math.random() + post.slug} {...post} />;
  });

  return (
    <section className="w-full bg-[#f7f8f8] text-black py-14">
      <div className="w-full max-w-[1200px] my-0 mx-auto px-4 flex flex-col gap-8">
        <div className=" mb-7">
          <div className=" pl-10 lg:pl-20 mb-5 relative">
            <div className="text-[9px] min-[550px]:text-[12px] lg:text-sm heading-highlight uppercase font-semibold tracking-[2px] pl-10 mb-4 relative before:absolute before:left-[-30px] before:w-[5px] before:h-[5px] before:bg-[#07b2ff] before:rounded-full before:top-1/2 before:translate-x-[-50%] before:translate-y-[-50%] after:absolute after:top-1/2 after:left-[-20px] after:h-[1px] after:w-12 after:bg-[#07b2ff]">
              Blog & News
            </div>
          </div>
          <h2
            className="text-2xl min-[550px]:text-4xl lg:text-5xl font-bold tracking-[0.01em]"
            style={{ wordBreak: "break-word" }}
          >
            Recent Blog
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 min-[550px]:grid-cols-2 min-[550px]:gap-6 md:grid-cols-3 lg:grid-cols-3 lg:gap-8">
          {postPreviews}
        </div>
      </div>
    </section>
  );
};

export default BlogIntro;
