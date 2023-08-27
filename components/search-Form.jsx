import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useState, useRef, useEffect } from "react"; // Import useRef and useEffect
import { useSearch } from "api/useApi";
import Link from "next/link";

export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const { results } = useSearch(searchTerm);

  const searchResultsRef = useRef(null); // Create a ref for the search results container

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleResultClick = () => {
    // Close the search results window when a result is clicked
    searchResultsRef.current.scrollTop = 0; // Scroll to the top
    setSearchTerm(""); // Clear the search term
  };

  useEffect(() => {
    // Close the search results window when the search term is cleared
    if (!searchTerm) {
      searchResultsRef.current.scrollTop = 0;
    }
  }, [searchTerm]);

  useEffect(() => {
    // Close the search results window when push Esc button
    const handleEscKeyPress = (event) => {
      if (event.key === "Escape") {
        setSearchTerm(""); // Clear the search term
      }
    };

    window.addEventListener("keydown", handleEscKeyPress);

    return () => {
      window.removeEventListener("keydown", handleEscKeyPress);
    };
  }, []); // Empty dependency array means this effect runs only once after the component mounts

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

          <div
            className="absolute z-10 w-full divide-y max-h-72 overflow-y-auto bg-white"
            ref={searchResultsRef} // Attach the ref to the container
          >
            {searchTerm && results && (
              <div>
                {results.map((result) => (
                  <Link
                    className="block p-2 hover:bg-indigo-50"
                    key={result.id}
                    href={`/${result.slug}`}
                    onClick={handleResultClick} // Add onClick to handle result click
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
