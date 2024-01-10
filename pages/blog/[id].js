import { BlogContent } from "@/components/BlogContent";
import { Inter } from "next/font/google";

import { serialize } from "next-mdx-remote/serialize";

const inter = Inter({ subsets: ["latin"] });

const { getBlogData, getAllBlogsPath } = require("@/app/getBlogs");

export default function Blog({ blogData, blogContent }) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center  p-24 ${inter.className}`}
    >
      <BlogContent blogData={blogData} blogContent={blogContent} />
    </main>
  );
}
export async function getStaticPaths() {
  const blogPaths = getAllBlogsPath();
  return {
    paths: blogPaths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const blogData = await getBlogData(params.id);
  const mdxSource = await serialize(blogData.content);
  return {
    props: {
      blogData: blogData.metadata,
      blogContent: mdxSource,
      id: params.id,
    },
  };
}
