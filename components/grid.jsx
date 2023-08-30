// components/grid.jsx
import { useState } from 'react';
import Link from "next/link";
import { usePosts } from "api/useApi";

export default function Grid() {
  const [currentPage, setCurrentPage] = useState(1);
  const { posts} = usePosts(currentPage); // Use the custom hook



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
      <div>
        {currentPage > 1 && (
          <button onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
        )}
        <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
      </div>
    </>
  );
}