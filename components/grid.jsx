// components/grid.jsx
import Link from "next/link";
import { usePosts } from "api/useApi";

export default function Grid() {
  const { posts } = usePosts(); // Use the custom hook

  return (
    <>
      {posts?.map((post) => (
        <div key={post.id} className="max-w-lg mx-auto">
          <Link href={`/${post.slug}`}>{post.title.rendered}</Link>

          <br />
          <br />
          <br />
          <br />
        </div>
      ))}
    </>
  );
}
