import Link from "next/link";
import {useRouter} from "next/router";

export default function NavigationItems() {
    const router = useRouter();
    const linkActive = "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
    const linkHover = "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    return (
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul style={{direction: 'initial'}}
                className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                    <Link href="/">
                        <div
                            className={` ${router.pathname === '/' ? linkActive : linkHover}`}
                            aria-current="page">Home
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="../pages/about.js">
                        <div
                            className={` ${router.pathname === '/about' ? linkActive : linkHover}`}
                        >
                            About
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    )
}