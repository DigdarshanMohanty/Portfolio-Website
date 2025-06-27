const blogs = [
  {
    title: "Understanding Token Security: A Comprehensive Blueprint",
    date: "29-01-2025",
    link: "https://ddm.hashnode.dev/understanding-token-security-a-comprehensive-blueprint",
    description:
      "Deep-dive into modern software topics — from secure token auth to memory safety — explained through clear, code-first writing and real-world context.",
  },
];

export default function Blog() {
  return (
    <section className="relative z-10 h-screen px-6 flex justify-center items-start font-mono text-white">
      <div className="max-w-3xl w-full">
        {blogs.map((blog, index) => (
          <article key={index} className="mb-12">
            <h2 className="text-2xl font-semibold text-amber-400 mb-1 hover:underline hover:text-amber-300 transition duration-200">
              <a href={blog.link} target="_blank" rel="noreferrer">
                {blog.title}
              </a>
            </h2>
            <p className="text-sm text-gray-400 mb-2">{blog.date}</p>
            <p className="text-gray-300">{blog.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
