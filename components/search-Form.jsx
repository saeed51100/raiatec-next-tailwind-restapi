import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { useSearch } from "api/useApi";
import Link from "next/link";

export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const { results } = useSearch(searchTerm);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className="flex flex-1 items-center justify-center px-2 lg:ml-6">
      <div className="w-full max-w-lg lg:max-w-xs">
        <label form="search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
          <input
            className="block w-full rounded-md border border-gray-300 bg-gray-50 py-1.5 pl-10 pr-3 text-gray-900 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:text-sm sm:leading-6"
            placeholder="Search"
            value={searchTerm}
            onChange={handleInputChange}
          />

          <div className="absolute z-10 w-full border divide-y shadow max-h-72 overflow-y-auto bg-white ...">
            {/*<a className="block p-2 hover:bg-indigo-50 ..." href="#">Tailwind</a>*/}
            {/*<a className="block p-2 hover:bg-indigo-50 ..." href="#">Bootstrap</a>*/}
            {searchTerm && results && (
              <div>
                {results.map((result) => (
                  <Link
                    className="block p-2 hover:bg-indigo-50"
                    key={result.id}
                    href={`/${result.slug}`}
                  >
                    {result.title.rendered}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
