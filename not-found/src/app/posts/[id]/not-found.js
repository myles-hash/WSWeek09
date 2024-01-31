"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>LOL 404 man, we so hip, pls stay</h2>
      <Link href="/">Go Home</Link> <Link href="/posts">Go Posts</Link>
    </div>
  );
}