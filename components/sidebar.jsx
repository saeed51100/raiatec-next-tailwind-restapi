import ListOfPost from "./list-of-post";

export default function Sidebar() {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col mt-16">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-white dark:border-gray-800 bg-white dark:bg-gray-800 px-2 pb-4 overflow-y-scroll">
        <ListOfPost />
      </div>
    </div>
  );
}
