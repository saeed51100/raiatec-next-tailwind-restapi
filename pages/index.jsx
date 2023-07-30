/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import {useState} from 'react'
import {usePosts} from "api/usePosts";
import Link from "next/link";
import Sidebar from "../components/sidebar";
import MenuTop from "../components/menu-top";


export default function Example() {
    const {posts, isLoading, isError} = usePosts(); // Use the custom hook
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading posts.</div>;
    }

    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
            <div>
                <MenuTop />

                <Sidebar/>

                <div className="lg:pr-72">

                    <main className="py-10">
                        <div className="px-4 sm:px-6 lg:px-8">
                            {/*Your content */}


                            <section role="list"
                                     className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">


                                {posts.map((post) => (
                                    <div key={post.id} className="max-w-lg mx-auto">

                                        <div
                                            className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                                            {/* Check if the featured media is available */}
                                            {post._embedded &&
                                            post._embedded['wp:featuredmedia'] &&
                                            post._embedded['wp:featuredmedia'][0].source_url ? (
                                                <img
                                                    src={post._embedded['wp:featuredmedia'][0].source_url}
                                                    alt={post.title.rendered}
                                                    className="rounded-t"
                                                />
                                            ) : (
                                                <img
                                                    src="/raiatecThumb.svg"
                                                    alt={post.title.rendered}
                                                    style={{width: '100%'}}
                                                    className="rounded-t"
                                                />
                                            )}
                                            <div className="p-5">
                                                <h3 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                                                    <Link href={`/${post.slug}`}>{post.title.rendered}</Link>
                                                </h3>

                                                {/*<h2 className="font-normal text-gray-700 mb-3 line-clamp-4 break-all">{post.excerpt.rendered}</h2>*/}
                                                {post.excerpt && (
                                                    <p className="font-normal text-gray-700 mb-3 line-clamp-4 break-all"
                                                       dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}/>
                                                )}
                                                <br/>
                                                <br/>
                                                <div className="relative">
                                                    {post.slug && (
                                                        <Link
                                                            className="absolute bottom-0 left-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                                                            href={`/${post.slug}`}>
                                                            {"Read More"}
                                                        </Link>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </section>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}


