import { BlogTitle } from './Blog';

export default function BlogList({blogs}) {
  return (
    <div className="flex flex-col gap-5 divide-y divide-gray-800 max-w-5xl mt-10 px-5 py-12 w-full  border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        {blogs.map((blog) => (
            <div className="flex flex-col gap-1" key={blog.id}>
                <BlogTitle blog={blog} />
                <p className="text-md font-medium text-ellipsis overflow-hidden">{blog.description + "..."}</p>
            </div>
        ))}
    </div>
  );
}
