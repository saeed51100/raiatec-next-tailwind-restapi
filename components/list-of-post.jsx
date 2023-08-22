// components/list-of-posts.jsx
import { useState } from "react";
import { usePosts, useCategories } from "api/useApi";

import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Team", href: "#", icon: UsersIcon, current: false },
  { name: "Projects", href: "#", icon: FolderIcon, current: false },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { name: "Documents", href: "#", icon: DocumentDuplicateIcon, current: false },
  { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
];
const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

import Link from "next/link";
import {useRouter} from "next/router";

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

  const linkActive = "bg-gray-50 text-indigo-600";
  const linkHover = "text-gray-700 hover:text-indigo-600 hover:bg-gray-50";
  const addJoin = "";
  return (
    <div>
      {/* Sidebar component, swap this element with another sidebar if you like */}

      <ul role="list" className="-mx-2 space-y-1">
        {navigation.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-gray-50 text-indigo-600"
                  : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
              )}
            >

              {item.name}
            </a>
          </li>
        ))}
      </ul>

      <br />
      <br />
      <br />

      {posts.map((post) => (
        <div key={post.id} className="my-2">
          {post.categories.length === 0 ? (
            <Link href={`/${post.slug}`} onClick={onClose}>
              {post.title.rendered}
            </Link>
          ) : (
            post.categories.map((categoryId, index) => {
              const category = categories.find((cat) => cat.id === categoryId);

              if (!uniqueCategoryNames.has(category.name)) {
                uniqueCategoryNames.add(category.name);
                return (
                  <div key={category.id}>
                    <div
                      className="flex cursor-pointer list-none"
                      onClick={() => toggleAccordion(category.id)}
                    >
                      <div className="bg-green-200">{category.name}</div>
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
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M15,6l-6,6l6,6" />
                        </svg>
                      </span>
                    </div>
                    {/* related Post titles */}

                    {openAccordion === category.id && (
                      <p className="text-neutral-600 mt-3 animate-fadeIn">
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
                                      ? "bg-gray-50 text-indigo-600"
                                      : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                                  "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                              )}
                            >
                              <div>{postItem.title.rendered}</div>
                            </Link>
                          ))}
                      </p>
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
