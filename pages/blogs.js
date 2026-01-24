import Header from "../components/Header";
import BlogList from "../components/BlogList";
import { getBlogs } from "@/app/getBlogs";

import { NextSeo } from "next-seo";

export default function Blogs({ blogs }) {
  return (
    <>
      <NextSeo 
        title="Journal"
        description="Technical insights, architectural decisions, and Shopify growth strategies shared by Er. Saroj Subedi."
        canonical="https://ersaroj.com.np/blogs"
      />
      <main
        className="flex min-h-screen flex-col p-4 sm:p-6 lg:p-8 pt-20 pb-24 overflow-x-hidden"
      >
        <div className="w-full max-w-4xl mx-auto">
          <Header />
          <div className="mt-32 sm:mt-40">
            <div className="mb-16">
              <h2 className="text-sm font-bold text-[#96BF48] uppercase tracking-[0.3em] mb-4">Journal</h2>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light font-serif text-text tracking-tight opacity-0 animate-fade-up">
                Technical <span className="italic">Insights</span>.
              </h1>
            </div>
            <BlogList blogs={blogs} />
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const blogs = await getBlogs();
  return {
    props: {
      blogs,
    },
  };
}
