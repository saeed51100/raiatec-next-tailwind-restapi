import { useState } from "react";
import { usePosts, useCategories } from "api/useApi";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

import Link from "next/link";
import { useRouter } from "next/router";

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
  const router = useRouter();

  const toggleAccordion = (categoryId) => {
    if (openAccordion === categoryId) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(categoryId);
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

  const linkActive =
    "bg-gray-100 dark:bg-gray-700 text-indigo-600 dark:text-white";
  const linkHover =
    "text-gray-700 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700";
  const addJoin =
    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold";

  return (
    <div>
      <div className="text-gray-700 dark:text-gray-200 font-bold justify-center my-3 ">
        عنوان پست ها
      </div>
      <div className="border-b-2 border-gray-300 mb-5"></div>

      {posts?.map((post) => (
        <div key={post.id} className="my-2">
          {post.categories.length === 0 ? (
            <Link
              key={post.id}
              href={`/${post.slug}`}
              onClick={onClose}
              className={classNames(
                router.asPath === `/${post.slug}` ? linkActive : linkHover,
                addJoin
              )}
            >
              {post.title.rendered}
            </Link>
          ) : (
            post.categories.map((categoryId) => {
              const category = categories.find((cat) => cat.id === categoryId);

              if (!uniqueCategoryNames.has(category.name)) {
                uniqueCategoryNames.add(category.name);
                return (
                  <div key={category.id}>
                    <div
                      className={classNames(
                        linkHover,
                        addJoin,
                        "flex justify-between cursor-pointer "
                      )}
                      onClick={() => toggleAccordion(category.id)}
                    >
                      <div>{category.name}</div>
                      <span
                        className={`transition transform ${
                          openAccordion === category.id
                            ? "-rotate-90"
                            : "rotate-0"
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
                          viewBox="2 -1 24 24"
                          width="24"
                        >
                          <path d="M15,6l-6,6l6,6" />
                        </svg>
                      </span>
                    </div>
                    {/* related Post titles */}

                    {openAccordion === category.id && (
                      <div className="text-neutral-600 mt-3 animate-fadeIn border-r-4 border-indigo-500">
                        {posts
                          .filter((postItem) =>
                            postItem.categories.includes(category.id)
                          )
                          .sort((a, b) => a.id - b.id)
                          .map((postItem) => (
                            <Link
                              key={postItem.id}
                              href={`/${postItem.slug}`}
                              onClick={onClose}
                              className={classNames(
                                router.asPath === `/${postItem.slug}`
                                  ? linkActive
                                  : linkHover,
                                addJoin,
                                "mr-2 my-2"
                              )}
                            >
                              <div>{postItem.title.rendered}</div>
                            </Link>
                          ))}
                      </div>
                    )}
                  </div>
                );
              }
              return null; // Category name already displayed, don't render
            })
          )}
        </div>
      ))}
    </div>
  );
}
