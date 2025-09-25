import Link from "next/link";

export default function BlogNotFound() {
  return (
    <div className="p-8 bg-white rounded shadow text-center">
      <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
      <p className="mb-4">The blog post you requested does not exist.</p>
      <Link href="/blog" className="text-indigo-600 hover:underline">Back to Blog</Link>
    </div>
  );
}
