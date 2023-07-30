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
import {Fragment, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {
    Bars3Icon,
    BellIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import {MagnifyingGlassIcon} from '@heroicons/react/20/solid'
import {usePosts} from "api/usePosts";
import Link from "next/link";
import ListOfPost from "../components/list-of-opst";


export default function Example() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
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
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-900/80"/>
                        </Transition.Child>

                        <div className="fixed inset-0 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="relative ml-0 flex w-full max-w-xs flex-1">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute right-full top-0 flex w-16 justify-center pt-5">
                                            <button type="button" className="-m-2.5 p-2.5"
                                                    onClick={() => setSidebarOpen(false)}>
                                                <span className="sr-only">Close sidebar</span>
                                                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true"/>
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    {/* Sidebar component, swap this element with another sidebar if you like */}
                                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                                        <div className="flex h-16 shrink-0 items-center">
                                            <img
                                                className="h-8 w-auto"
                                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                                alt="Your Company"
                                            />
                                        </div>
                                        <ListOfPost/>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>

                {/* My navbar */}
                <div
                    className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
                    <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
                            onClick={() => setSidebarOpen(true)}>
                        <span className="sr-only">Open sidebar</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                    </button>

                    {/* Separator */}
                    <div className="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true"/>

                    <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                        <form className="relative flex flex-1" action="#" method="GET">
                            <label htmlFor="search-field" className="sr-only">
                                Search
                            </label>
                            <MagnifyingGlassIcon
                                className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                                aria-hidden="true"
                            />
                            <input
                                id="search-field"
                                className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                                placeholder="Search..."
                                type="search"
                                name="search"
                            />
                        </form>
                        <div className="flex items-center gap-x-4 lg:gap-x-6">
                            <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                                <span className="sr-only">View notifications</span>
                                <BellIcon className="h-6 w-6" aria-hidden="true"/>
                            </button>

                        </div>
                    </div>
                </div>


                {/* Static sidebar for desktop */}
                <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col mt-16">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div
                        className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
                        <div className="flex h-16 shrink-0 items-center">
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt="Your Company"
                            />
                        </div>
                        <ListOfPost/>
                    </div>
                </div>

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


