import { usePosts } from "api/useApi";
import Sidebar from "components/sidebar";
import React, { useState, useCallback } from "react";
import Navbar from "components/navbar";
import Modal from "components/modal";
import Custom404 from "pages/404";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = useCallback(() => setSidebarOpen(true), []);
  const closeSidebar = useCallback(() => setSidebarOpen(false), []);
  const { isLoading, isError } = usePosts(); // Use the custom hook
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <Custom404 />;
  }

  return (
    <div>


      <Sidebar />

      <div className="lg:pr-72">
        {/*Your content */}
        <main className="">{children}</main>
      </div>
    </div>
  );
}
