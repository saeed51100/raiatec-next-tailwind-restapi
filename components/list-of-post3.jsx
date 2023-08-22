// components/list-of-posts.jsx

import { usePosts, useCategories } from "api/useApi";
import { useRouter } from "next/router";


function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

import Link from "next/link";

export default function ListOfPost({ onClose }) {
    const router = useRouter();
    const {
        posts,
        isLoading: isLoadingPosts,
        isError: isErrorPosts,
    } = usePosts();
    const { isLoading: isLoadingCategories, isError: isErrorCategories } =
        useCategories();

    if (isLoadingPosts || isLoadingCategories) {
        return <div>Loading...</div>;
    }

    if (isErrorPosts || isErrorCategories) {
        return <div>Error loading data.</div>;
    }


    return (
        <div>
            {posts.map((post) => (
                <div key={post.id} className="my-2">
                    <Link
                        href={`/${post.slug}`}
                        onClick={onClose}
                        className={classNames(
                            router.asPath === `/${post.slug}`
                                ? "bg-gray-50 text-indigo-600" // active classes
                                : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50" // hover classes
                        )}
                    >
                        <div>{post.title.rendered}</div>
                    </Link>
                </div>
            ))}
        </div>
    );
}