"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg">Mini Blog</Link>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle navigation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        <div className={`md:flex md:items-center gap-6 ${open ? "block" : "hidden"}`}>
          <Link href="/" className="block py-2 md:py-0">Home</Link>
          <Link href="/blog" className="block py-2 md:py-0">Blog</Link>
          <Link href="/about" className="block py-2 md:py-0">About</Link>
        </div>
      </div>
    </nav>
  );
}
