import { usePosts } from "api/useApi";

import Custom404 from "pages/404";

export default function Layout({ children }) {
  const { isLoading, isError } = usePosts(); // Use the custom hook
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <Custom404 />;
  }

  return (
    <div>
      <div className="lg:pr-72">
        {/*Your content */}
        <main className="">{children}</main>
      </div>
    </div>
  );
}
