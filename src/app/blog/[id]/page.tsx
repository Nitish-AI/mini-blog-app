import Link from "next/link";
import { notFound } from "next/navigation";

type Post = { id: number; title: string; body: string };

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

export async function generateStaticParams() {
    // Pre-render first 10 posts (change as needed)
  const res = await fetch(POSTS_URL);
  const json = await res.json(); // assume it's an array
  const posts = Array.isArray(json) ? json.slice(0, 10) : []; // first 10 posts
  return posts.map((p: any) => ({ id: String(p.id) })); // must return string params
}

// generate metadata dynamically per post
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const awaitedParams = await params; // await params to access id property safely 
  const res = await fetch(`${POSTS_URL}/${awaitedParams.id}`); // fetch post data using awaited id 
  if (!res.ok) {
    return { title: "Post Not Found" };
  }
  const post: Post = await res.json(); // assume valid post structure 
  return {
    title: post.title,
    description: post.body.slice(0, 120), // first 120 chars as description
  };
}


async function getPost(id: string): Promise<Post | null> { // fetch single post by id 
  const res = await fetch(`${POSTS_URL}/${id}`, { next: { revalidate: 60 }}); // ISR with 60s revalidation
  if (!res.ok) return null;
  return res.json();
}

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) { // params is a promise 
  const awaitedParams = await params; // await params to access id property safely
  const post = await getPost(awaitedParams.id);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="prose mb-6">
        <p>{post.body}</p>
      </div>

      <Link href="/blog" className="text-indigo-600 hover:underline">Back to Blog</Link>
    </div>
  );
}

