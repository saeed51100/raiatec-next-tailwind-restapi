// components/navbar.jsx
import { Bars3Icon } from "@heroicons/react/24/outline";
import RaiatecLogo from "./raiatec-logo";
import DarkModeButton from "./dark-mode-button";
import SearchForm from "./search-Form";
import NavigationItems from "./navigation-Items";

export default function Navbar({ onSidebarOpen }) {
  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white dark:bg-gray-900 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      {/* Modal button */}
      <button
        type="button"
        className="-m-2.5 p-2.5 text-gray-800 dark:text-white lg:hidden"
        onClick={onSidebarOpen}
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>

      <RaiatecLogo />

      <SearchForm />

      <DarkModeButton />

      <NavigationItems />
    </div>
  );
}
