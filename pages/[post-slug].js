// pages/[post-slug].js

import {useRouter} from "next/router";
import {usePostBySlug} from "api/useApi"; // Import the custom hook
import {useEffect, useState} from "react";


const SinglePostPage = () => {
    const router = useRouter();
    const {post, isLoading, isError} = usePostBySlug(router.query["post-slug"]); // Use the custom hook with the dynamic slug from the router

    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled upto given distance
    const toggleVisibility = () => {
        if (window.pageYOffset > 200) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top cordinate to 0
    // make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError || !post) {
        return <div>Error loading the post.</div>;
    }

    return (
        <div
            className="bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-200 shadow-md md:rounded-xl p-4 md:p-8 lg:m-8 md:m-4">
            <h1 className="text-center md:text-2xl text-xl font-bold p-4 lg:p-10">
                {post.title.rendered}
            </h1>
            <div
                className="prose"
                dangerouslySetInnerHTML={{__html: post.content.rendered}}
            />
            {isVisible && (
                <div
                    onClick={scrollToTop}
                    className="fixed bottom-8 left-4 rounded-full cursor-pointer z-90 bg-indigo-500 hover:bg-indigo-400 text-3xl flex items-center justify-center w-12 h-12"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="white"
                        strokeWidth="3"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 10l7-7m0 0l7 7m-7-7v18"
                        />
                    </svg>
                </div>
            )}
        </div>
    );
};

export default SinglePostPage;
