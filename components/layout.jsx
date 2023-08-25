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

      <div className="bg-gray-300 lg:pr-72">
        {/*Your content */}
        <main className="">{children}</main>
      </div>
    </div>
  );
}
