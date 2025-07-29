import { BlogTitle } from './Blog';

export default function BlogList({blogs}) {
  return (
    <div className="flex flex-col gap-8 max-w-4xl w-full mt-12 p-8 bg-mantle bg-opacity-50 backdrop-blur-lg rounded-xl border border-overlay0">
        {blogs.map((blog) => (
            <div className="flex flex-col gap-2 border-b pb-4" key={blog.id}>
                <BlogTitle blog={blog} />
                <p className="text-lg text-subtext0">{blog.description}</p>
            </div>
        ))}
    </div>
  );
}
