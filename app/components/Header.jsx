"use client";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <nav>
      <button onClick={() => router.push("/about")}>About</button>
      <button onClick={() => router.push("/contact")}>Contact</button>
      <button onClick={() => router.push("/blog")}>Blog</button>
    </nav>
  );
}
