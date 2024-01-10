import { MDXRemote } from "next-mdx-remote";
import Header from "./Header";
import MDXComponent from "./MDXComponent";
import rehypePrettyCode from "rehype-pretty-code";
import remarkSmartpants from "remark-smartypants";
import overnight from "overnight/themes/Overnight-Slumber.json";
import "../styles/markdown.css";
import { NextSeo } from "next-seo";

overnight.colors["editor.background"] = "var(--code-bg)";

const components = { MDXComponent };
export function BlogContent({ blogData, blogContent }) {
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
      <div className="flex flex-col max-w-5xl mt-10 px-5 py-12 w-full place-items-centerjustify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 markdown">
        <span> 🗓️ {new Date(blogData.date).toDateString()}</span>
        {/* author */}
        <span> ✍️ { blogData.author }</span>
        <MDXRemote
          {...blogContent}
          components={components}
          options={{
            mdxOptions: {
              useDynamicImport: true,
              remarkPlugins: [remarkSmartpants],
              rehypePlugins: [
                rehypePrettyCode,
                {
                  theme: overnight,
                },
              ],
            },
          }}
        />
      </div>
    </>
  );
}
