// components/list-of-posts.jsx
import { useState } from "react";
import { usePosts, useCategories } from "api/useApi";
import Link from "next/link";

export default function ListOfPost({ onClose }) {
  const {
    posts,
    isLoading: isLoadingPosts,
    isError: isErrorPosts,
  } = usePosts();
  const {
    categories,
    isLoading: isLoadingCategories,
    isError: isErrorCategories,
  } = useCategories();

  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    if (openAccordion === index) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(index);
    }
  };

  if (isLoadingPosts || isLoadingCategories) {
    return <div>Loading...</div>;
  }

  if (isErrorPosts || isErrorCategories) {
    return <div>Error loading data.</div>;
  }

  // Create a Set to track unique category names
  const uniqueCategoryNames = new Set();

  return (
    <div>
      {/* Place the accordion here */}
      <div className="">
        {categories.map((category, index) => (
          <div key={category.id}>
            <div
              className="flex cursor-pointer list-none"
              onClick={() => toggleAccordion(index)}
            >
              <span>{category.name}</span>
              <span
                className={`transition transform ${
                  openAccordion === index ? "-rotate-90" : "rotate-0"
                }`}
              >
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M15,6l-6,6l6,6" />
                </svg>
              </span>
            </div>

            {openAccordion === index && (
              <div className="bg-gray-100 p-2">
                {posts
                  .filter((post) => post.categories.includes(category.id))
                  .map((post) => (
                    <Link
                      key={post.id}
                      href={`/${post.slug}`}
                      onClick={onClose}
                    >
                      <div className="p-2">{post.title.rendered}</div>
                    </Link>
                  ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
