import Link from "next/link";
import { blogs } from "@/lib/blogs";

export const metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    <>
      <h1>Blog</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.slug}>
            <Link href={`/blog/${blog.slug}`}>
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
