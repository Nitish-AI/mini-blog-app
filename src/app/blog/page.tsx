import Link from "next/link";

type Post = { id: number; title: string };

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

async function getPosts(): Promise<Post[]> {
  const res = await fetch(POSTS_URL, { next: { revalidate: 60 } });
  if (!res.ok) return [];
  const json = await res.json();
  return Array.isArray(json) ? json.slice(0, 20) : [];
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((p) => (
          <article
            key={p.id}
            className="p-6 bg-white rounded-lg shadow hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold mb-2">{p.title}</h2>
            <Link href={`/blog/${p.id}`} className="text-indigo-600 hover:underline">
              Read more
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
