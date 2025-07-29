import { Inter } from "next/font/google";
import Header from "../components/Header";
import BlogList from "../components/BlogList";
import { getBlogs } from "@/app/getBlogs";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ blogs }) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-4 sm:p-6 lg:p-8 ${inter.className}`}
    >
      <Header />
      <BlogList blogs={blogs} />
    </main>
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
