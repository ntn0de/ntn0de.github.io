import { BlogContent } from "@/components/BlogContent";
import { Inter } from "next/font/google";

import { serialize } from "next-mdx-remote/serialize";
import remarkSmartpants  from 'remark-smartypants';
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import overnight from 'overnight/themes/Overnight-Slumber.json';

const inter = Inter({ subsets: ["latin"] });
overnight.colors["editor.background"] = "var(--code-bg)";

const { getBlogData, getAllBlogsPath } = require("@/app/getBlogs");

export default function Blog({ blogData, blogContent }) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-4 sm:p-6 lg:p-8 ${inter.className}`}
    >
      <BlogContent blogData={blogData} blogContent={blogContent}/>
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
  const mdxSource = await serialize(
    blogData.content,
    {
      scope: {},
      mdxOptions: {
        useDynamicImport: true,
        remarkPlugins: [remarkSmartpants],
        rehypePlugins: [
          rehypeSlug,
          [rehypePrettyCode, {
            theme: {
              light: 'github-light',
              dark: overnight,
            }
          }],
        ],
      },
      parseFrontmatter: false,
    }
  );

  return {
    props: {
      blogData: blogData.metadata,
      blogContent: mdxSource,
      id: params.id,
    },
  };
}
