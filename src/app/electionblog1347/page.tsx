import Header from "@/components/header";
import BlogPost from "@/components/blog/BlogPost";
import { getBlogPosts } from "@/lib/blog/getBlogPosts";
import Markdown from 'react-markdown';
export default async function ElectionBlog() {
  const posts = await getBlogPosts();

  return (
    <Header>
      <div className="container mt-2 sm:mt-3 w-full max-w-3xl px-0">
      <div className="grid gap-y-6 px-0">
            {posts.map((post) => (
            <BlogPost key={post.id} post={post} />
            ))}
        </div>
        </div>
    </Header>
  );
}