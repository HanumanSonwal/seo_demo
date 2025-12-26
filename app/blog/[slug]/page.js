import { blogs } from "@/lib/blogs";

// 1️⃣ Static paths
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

// 2️⃣ Safe metadata
export function generateMetadata({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  // ⛑ SAFETY CHECK (MOST IMPORTANT)
  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "This blog does not exist.",
    };
  }

  return {
    title: blog.title,
    description: blog.content,
  };
}

// 3️⃣ Page component
export default function BlogDetailPage({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    return <h1>Blog not found</h1>;
  }

  return (
    <div style={{ height: "150vh" }}>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <p>Scroll down 👇</p>
    </div>
  );
}
