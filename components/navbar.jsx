// components/navbar.jsx
import {Bars3Icon} from "@heroicons/react/24/outline";
import Link from "next/link";
import {MagnifyingGlassIcon} from "@heroicons/react/20/solid";
import {useRouter} from "next/router";
import RaiatecLogo from "./raiatec-logo";
import DarkModeButton from "./dark-mode-button";
import SearchForm from "./search-Form";

export default function Navbar({onSidebarOpen}) {

    const router = useRouter();
    const linkActive = "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
    const linkHover = "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    return (
        <div
            className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white dark:bg-gray-900 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">

            <RaiatecLogo />


            <DarkModeButton />


            {/* Modal button */}
            <button
                type="button"
                className="-m-2.5 p-2.5 text-gray-800 dark:text-white lg:hidden"
                onClick={onSidebarOpen}
            >
                <span className="sr-only">Open sidebar</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
            </button>


            <SearchForm />


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
