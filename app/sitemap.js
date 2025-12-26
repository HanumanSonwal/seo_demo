import { blogs } from "@/lib/blogs";

export default function sitemap() {
  const baseUrl = "https://your-domain.vercel.app";

  return [
    { url: `${baseUrl}/` },
    { url: `${baseUrl}/about` },
    { url: `${baseUrl}/contact` },
    { url: `${baseUrl}/blog` },

    ...blogs.map((blog) => ({
      url: `${baseUrl}/blog/${blog.slug}`,
    })),
  ];
}
