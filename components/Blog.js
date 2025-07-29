import Link from "next/link";

export function BlogTitle({ blog }) {
  return (
    <h2
      className={[
        "text-[28px] font-bold font-serif",
        "text-[--lightLink] dark:text-[--darkLink]",
      ].join(" ")}
    >
      <Link href={`/blog/${blog.id}`} className="hover:underline">
        {blog.title}
      </Link>
    </h2>
  );
}
export function BlogTitleNoLink({ blog }) {
  return (
    <h2
      className={[
        "text-[28px] font-bold font-serif",
        "text-[--lightLink] dark:text-[--darkLink]",
      ].join(" ")}
    >
      {blog.title}
    </h2>
  );
}
