import Link from "next/link";
import { useRouter } from "next/router";

export default function NavigationItems() {
  const router = useRouter();
  const linkActive = "px-3 text-blue-500 ";
  const linkHover = "px-3 text-gray-900 hover:text-blue-500  dark:text-white";
  return (
    <div className="font-semibold" id="navbar-default">
        <ul style={{ direction: "initial" }} className="flex">
        <li>
          <Link href="/">
            <div
              className={` ${router.pathname === "/" ? linkActive : linkHover}`}
              aria-current="page"
            >
              Home
            </div>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <div
              className={` ${
                router.pathname === "/about" ? linkActive : linkHover
              }`}
            >
              About
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
