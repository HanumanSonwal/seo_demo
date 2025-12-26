"use client";

import Link from "next/link";

export default function Header() {
  return (
    <nav style={{ display: "flex", gap: 20, padding: 20 }}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/blog">Blog</Link>
    </nav>
  );
}
