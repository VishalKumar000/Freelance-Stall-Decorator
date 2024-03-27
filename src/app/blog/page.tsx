import React from "react";
import fs from "fs";
import matter from "gray-matter";
import PostPreview from "@/pages/Blog/PostPreview";
import Link from "next/link";

const getPostMetaData = () => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  // const slug = markdownPosts.map((file) => file.replace(".md", ""));

  const posts = markdownPosts.map((fileName) => {
    const fileContent = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContent);

    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      description: matterResult.data.description,
      thumbnail: matterResult.data.thumbnail,
      slug: fileName.replace(".md", ""),
    };
  });

  return posts;
};

const Blog = () => {
  const postMetaData = getPostMetaData();
  const postPreviews = postMetaData.map((post: any) => {
    return <PostPreview key={Math.random() + post.slug} {...post} />;
  });

  return (
    <section className="w-full bg-white text-[#303030] py-6">
      <div className="w-full max-w-[1200px] my-0 mx-auto px-12 lg:px-4 flex flex-col gap-8">
        <header>
          <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
            <Link href="/">
              <h1 className="text-2xl text-white font-bold mt-4 mb-2">
                Mr Unique Decoration Blog
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
