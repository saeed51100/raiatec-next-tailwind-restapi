// components/navbar.jsx
import {Bars3Icon} from "@heroicons/react/24/outline";
import Link from "next/link";
import {useEffect} from "react";
import {MagnifyingGlassIcon} from "@heroicons/react/20/solid";
import {useRouter} from "next/router";
import RaiatecLogo from "./raiatec-logo";

export default function Navbar({onSidebarOpen}) {
    useEffect(() => {
        let themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
        let themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
        if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            themeToggleLightIcon.classList.remove('hidden');
        } else {
            themeToggleDarkIcon.classList.remove('hidden');
        }

        let themeToggleBtn = document.getElementById('theme-toggle');

        themeToggleBtn.addEventListener('click', function () {

            // toggle icons inside button
            themeToggleDarkIcon.classList.toggle('hidden');
            themeToggleLightIcon.classList.toggle('hidden');

            // if set via local storage previously
            if (localStorage.getItem('color-theme')) {
                if (localStorage.getItem('color-theme') === 'light') {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('color-theme', 'dark');
                } else {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('color-theme', 'light');
                }

                // if NOT set via local storage previously
            } else {
                if (document.documentElement.classList.contains('dark')) {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('color-theme', 'light');
                } else {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('color-theme', 'dark');
                }
            }

        });
    }, []); // empty dependency array ensures this only runs once on mount
    const router = useRouter();
    const linkActive = "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
    const linkHover = "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    return (
        <div
            className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white dark:bg-gray-900 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">

            <RaiatecLogo />


            {/*Dark mode button*/}
            <button id="theme-toggle" type="button"
                    className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
                <svg id="theme-toggle-dark-icon" className="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                </svg>
                <svg id="theme-toggle-light-icon" className="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        fillRule="evenodd" clipRule="evenodd"/>
                </svg>
            </button>

            {/* Modal button */}
            <button
                type="button"
                className="-m-2.5 p-2.5 text-gray-800 dark:text-white lg:hidden"
                onClick={onSidebarOpen}
            >
                <span className="sr-only">Open sidebar</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
            </button>


            {/*Search Form*/}
            <div className="flex flex-1 items-center justify-center px-2 lg:ml-6">
                <div className="w-full max-w-lg lg:max-w-xs">
                    <label form="search" className="sr-only">Search</label>
                    <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                        </div>
                        <input id="search" name="search"
                               className="block w-full rounded-md border border-gray-300 bg-gray-50 py-1.5 pl-10 pr-3 text-gray-900 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:text-sm sm:leading-6"
                               placeholder="Search" type="search"/>
                    </div>
                </div>
            </div>

            {/*Navigation Items*/}
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul style={{direction: 'initial'}}
                    className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <Link href="/">
                            <div
                                className={` ${
                                    router.pathname === '/' ? linkActive : linkHover
                                }`}

                                aria-current="page">Home
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <div
                                className={` ${
                                    router.pathname === '/about' ? linkActive : linkHover
                                }`}
                            >About
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
