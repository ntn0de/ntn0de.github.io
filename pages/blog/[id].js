import { BlogContent } from "@/components/BlogContent";
import ResponsiveIframe from "@/components/ResponsiveIframe";

import { serialize } from "next-mdx-remote/serialize";
import remarkSmartpants  from 'remark-smartypants';
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import overnight from 'overnight/themes/Overnight-Slumber.json';
import { NextSeo, ArticleJsonLd } from 'next-seo';

overnight.colors["editor.background"] = "var(--code-bg)";

import { getBlogData, getAllBlogsPath } from "@/app/getBlogs";

export default function Blog({ blogData, blogContent }) {
  const url = `https://ersaroj.com.np/blog/${blogData.slug}`;
  
  return (
    <>
      <NextSeo
        title={blogData.title}
        description={blogData.description}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: blogData.date,
            authors: [
              'https://ersaroj.com.np',
            ],
            tags: blogData.tags || [],
          },
          url,
          title: blogData.title,
          description: blogData.description,
          images: [
            {
              url: 'https://ersaroj.com.np/images/portrait.png', // Fallback image or specific blog image if available
              width: 800,
              height: 600,
              alt: blogData.title,
            },
          ],
        }}
      />
      <ArticleJsonLd
        url={url}
        title={blogData.title}
        images={[
          'https://ersaroj.com.np/images/portrait.png' // Should ideally be a blog specific image
        ]}
        datePublished={blogData.date}
        authorName={[
          {
            name: 'Saroj Subedi',
            url: 'https://ersaroj.com.np',
          },
        ]}
        publisherName="Saroj Subedi"
        publisherLogo="https://ersaroj.com.np/images/portrait.png"
        description={blogData.description}
        isAccessibleForFree={true}
      />
      <main
        className="flex min-h-screen flex-col p-4 sm:p-6 lg:p-8 pt-20 pb-24 overflow-x-hidden"
      >
        <div className="w-full max-w-4xl mx-auto">
          <BlogContent blogData={blogData} blogContent={blogContent} components={{ResponsiveIframe}}/>
        </div>
      </main>
    </>
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
