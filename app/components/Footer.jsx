"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ padding: 20, borderTop: "1px solid #ddd" }}>
      <Link href="/about">About</Link>{" | "}
      <Link href="/contact">Contact</Link>{" | "}
      <Link href="/blog">Blog</Link>
    </footer>
  );
}
