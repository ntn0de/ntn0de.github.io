import { BlogContent } from "@/components/BlogContent";
import ResponsiveIframe from "@/components/ResponsiveIframe";

import { serialize } from "next-mdx-remote/serialize";
import remarkSmartpants  from 'remark-smartypants';
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import overnight from 'overnight/themes/Overnight-Slumber.json';

overnight.colors["editor.background"] = "var(--code-bg)";

import { getBlogData, getAllBlogsPath } from "@/app/getBlogs";

export default function Blog({ blogData, blogContent }) {
  return (
    <main
      className="flex min-h-screen flex-col p-4 sm:p-6 lg:p-8 pt-20 pb-24 overflow-x-hidden"
    >
      <div className="w-full max-w-4xl mx-auto">
        <BlogContent blogData={blogData} blogContent={blogContent} components={{ResponsiveIframe}}/>
      </div>
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
