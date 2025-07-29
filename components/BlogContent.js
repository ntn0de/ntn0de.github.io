import { MDXRemote } from "next-mdx-remote";
import Header from "./Header";
import "../styles/markdown.css";
import { NextSeo } from "next-seo";


export  function BlogContent({ blogData, blogContent}) {
  return (
    <>
      <NextSeo
        title={blogData.title}
        description={blogData.description}
        openGraph={{
          title: blogData.title,
          description: blogData.description,
        }}
      />
      <Header />
      <div className="flex flex-col max-w-4xl w-full mt-12 p-8 bg-mantle bg-opacity-50 backdrop-blur-lg rounded-xl border border-overlay0 markdown">
        <div className="flex items-center gap-4 mb-8 text-subtext1">
          <span> 🗓️ {new Date(blogData.date).toDateString()}</span>
          <span> ✍️ {blogData.author}</span>
        </div>
        <MDXRemote {...blogContent} />
      </div>
    </>
  );
}
