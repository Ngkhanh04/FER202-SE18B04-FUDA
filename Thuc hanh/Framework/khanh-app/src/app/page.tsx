// app/page.tsx

import { db, posts } from '@/lib/db';
import { unstable_cache } from 'next/cache';
import { notFound } from 'next/navigation';
import { getUserData } from './data';

// Fetching data from external API
export default async function Page() {
  let data = await fetch('https://api.vercel.app/blog');
  let posts = await data.json();
  
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

// Fetching data from ORM or database
export const getPosts = unstable_cache(
  async () => {
    return await db.select().from(posts);
  },
  ['posts'],
  { revalidate: 3600, tags: ['posts'] }
);

// Using the cached posts
export default async function CachedPage() {
  const allPosts = await getPosts();
  
  return (
    <ul>
      {allPosts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

// Fetching a single post for dynamic routes
interface Post {
  id: string;
  title: string;
  content: string;
}

async function getPost(id: string) {
  let res = await fetch(`https://api.vercel.app/blog/${id}`);
  let post: Post = await res.json();
  if (!post) notFound();
  return post;
}

export async function generateStaticParams() {
  let posts = await fetch('https://api.vercel.app/blog').then((res) => res.json());
  return posts.map((post: Post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  let post = await getPost(params.id);
  return {
    title: post.title,
  };
}

export default async function PostPage({ params }: { params: { id: string } }) {
  let post = await getPost(params.id);
  
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
  export async function Page() {
    const userData = getUserData()
    return (
      <ClientComponent
        user={userData} // this will cause an error because of taintObjectReference
        address={userData.address} // this will cause an error because of taintUniqueValue
      />
    )
  };
}