import Link from "next/link";

export function BlogTitle({ blog }) {
  return (
    <h2 className="text-3xl sm:text-4xl font-light font-serif text-text tracking-tight group-hover:text-[#96BF48] transition-colors duration-500">
      <Link href={`/blog/${blog.id}`} className="block">
        {blog.title}
      </Link>
    </h2>
  );
}

export function BlogTitleNoLink({ blog }) {
  return (
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-light font-serif text-text tracking-tight leading-[1.1]">
      {blog.title}
    </h1>
  );
}
