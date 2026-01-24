import { BlogTitle } from './Blog';

export default function BlogList({blogs}) {
  return (
    <div className="flex flex-col gap-16 max-w-4xl w-full">
        {blogs.map((blog, index) => (
            <div
              key={blog.id}
              className={`group flex flex-col gap-4 pb-12 border-b border-text/5 last:border-0 opacity-0 animate-fade-up stagger-${(index % 5) + 1}`}
            >
                <BlogTitle blog={blog} />
                <p className="text-lg text-subtext0 font-normal leading-relaxed max-w-2xl group-hover:text-text/80 transition-colors">
                  {blog.description}
                </p>
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-[#96BF48] opacity-60 group-hover:opacity-100 transition-all">
                  <span>{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                  <span className="w-1 h-1 rounded-full bg-text/20" />
                  <span>Read More</span>
                </div>
            </div>
        ))}
    </div>
  );
}
