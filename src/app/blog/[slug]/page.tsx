import React from "react";
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import './blogpage.css'

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
      slug: fileName.replace(".md", ""),
    };
  });

  return posts;
};

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const content = fs.readFileSync(`${folder}${slug}.md`, "utf8");
  return content;
};

export const generateStaticParams = () => {
  const posts = getPostMetaData();
  return posts.map((post) => {
    return {
      slug: post.slug,
    };
  });
};

const BlogPage = (props: any) => {
  const slug = props.params.slug;
  const content = getPostContent(slug);
  return (
    <section className="w-full bg-white text-[#303030] py-6">
      <div className="w-full max-w-[1200px] my-0 mx-auto px-12 lg:px-4 flex flex-col gap-8">
        <div className="my-12 text-center">
          <h1 className="text-2xl text-slate-600 ">
            {props.searchParams.title}
          </h1>
          <p className="text-slate-400 mt-2">
            {props.searchParams.description}
          </p>
        </div>

        <article className="prose">
          <Markdown>{content}</Markdown>
        </article>
      </div>
    </section>
  );
};

export default BlogPage;
