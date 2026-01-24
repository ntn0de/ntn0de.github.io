import { MDXRemote } from "next-mdx-remote";
import Header from "./Header";
import "../styles/markdown.css";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { BlogTitleNoLink } from "./Blog";
import { MdArrowBack } from "react-icons/md";

export function BlogContent({ blogData, blogContent, components }) {
  return (
    <>
      <NextSeo
        title={blogData.title}
        description={blogData.description}
        canonical={`https://ersaroj.com.np/blog/${blogData.id}`}
        openGraph={{
          title: blogData.title,
          description: blogData.description,
          url: `https://ersaroj.com.np/blog/${blogData.id}`,
        }}
      />
      <Header />
      <article className="flex flex-col max-w-4xl w-full mt-32 sm:mt-40 mb-32 opacity-0 animate-fade-in stagger-1">
        <Link 
          href="/blogs" 
          className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#96BF48] hover:text-text transition-colors mb-12 group"
        >
          <MdArrowBack className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Blogs
        </Link>
        
        <header className="mb-16">
          <BlogTitleNoLink blog={blogData} />
          
          <div className="flex flex-wrap items-center gap-6 mt-8 text-[11px] font-bold text-subtext0 uppercase tracking-widest border-t border-text/5 pt-8">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#96BF48]" />
              <span>{new Date(blogData.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-text/20" />
              <span>By {blogData.author}</span>
            </div>
          </div>
        </header>

        <div className="prose prose-invert prose-lg max-w-none 
          prose-headings:font-serif prose-headings:font-light prose-headings:tracking-tight
          prose-p:text-subtext0 prose-p:leading-relaxed prose-p:font-normal
          prose-strong:text-text prose-strong:font-bold
          prose-a:text-[#96BF48] prose-a:no-underline hover:prose-a:underline
          prose-code:text-text prose-code:bg-surface0 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-surface0 prose-pre:border prose-pre:border-text/5
          prose-blockquote:border-l-[#96BF48] prose-blockquote:bg-surface0/50 prose-blockquote:py-2 prose-blockquote:px-8 prose-blockquote:italic
          markdown
        ">
          <MDXRemote {...blogContent} components={components} />
        </div>

        <div className="mt-20 pt-12 border-t border-text/5">
           <div className="bg-surface0 rounded-3xl p-8 sm:p-12 text-center border border-text/5">
              <h3 className="text-2xl font-serif font-light mb-6">Found this helpful?</h3>
              <p className="text-subtext0 mb-8 max-w-md mx-auto">I share technical insights and Shopify growth strategies regularly. Let&apos;s connect if you&apos;re building something great.</p>
              <a
                href="mailto:imsarojsubedi@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-3 bg-text text-base text-[11px] font-bold uppercase tracking-wider rounded-xl hover:bg-[#96BF48] hover:text-text transition-all"
              >
                Get in touch
              </a>
           </div>
        </div>
      </article>
    </>
  );
}
