// components/layout.jsx
import { usePosts } from "api/useApi";
import Sidebar from "components/sidebar";
import React, { useState, useCallback } from "react";
import Navbar from "components/navbar";
import Modal from "components/modal";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = useCallback(() => setSidebarOpen(true), []);
  const closeSidebar = useCallback(() => setSidebarOpen(false), []);
  const { isLoading, isError } = usePosts(); // Use the custom hook
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading posts.</div>;
  }

  return (
    <div>
      <Modal open={sidebarOpen} onClose={closeSidebar} />

      <Navbar onSidebarOpen={openSidebar} />

      <Sidebar />

      <div className="lg:pr-72">
        <main className="py-10 bg-white dark:bg-gray-300">
          <div className="px-4 sm:px-6 lg:px-8">
            {/*Your content */}

            <main>{children}</main>
          </div>
        </main>
      </div>
    </div>
  );
}
