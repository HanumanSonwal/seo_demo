"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </footer>
  );
}
