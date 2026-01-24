import Header from "../components/Header";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Portfolio from "../components/Portfolio";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo 
        title="Home"
        description="Engineering high-growth Shopify storefronts and complex full-stack systems. Specialized in custom apps, architecture, and performance engineering."
        canonical="https://ersaroj.com.np"
      />
      <main
        className="flex min-h-screen flex-col p-4 sm:p-6 lg:p-8 pt-20 pb-24 overflow-x-hidden"
      >
        <div className="w-full max-w-4xl mx-auto">
          <Header />
          <div className="mt-12 lg:mt-20">
            <Hero />
          </div>
          <div className="mt-20 lg:mt-32">
            <Stats />
          </div>
          <div className="mt-24">
            <Portfolio />
          </div>
        </div>
      </main>
    </>
  );
}
