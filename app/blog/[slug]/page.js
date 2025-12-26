import { blogs } from "@/lib/blogs";

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export function generateMetadata({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  return {
    title: blog?.title,
    description: blog?.content,
  };
}

export default function BlogDetail({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  return (
    <div style={{ height: "150vh" }}>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <p>Scroll down 👇</p>
    </div>
  );
}
