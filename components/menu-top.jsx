// components/menu-top.jsx
import React, { useState, useCallback } from "react";
import Navbar from "components/navbar";
import Modal from "components/modal";

export default function MenuTop() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const openSidebar = useCallback(() => setSidebarOpen(true), []);
    const closeSidebar = useCallback(() => setSidebarOpen(false), []);

    return (
        <>
            <Modal open={sidebarOpen} onClose={closeSidebar} />
            <Navbar onSidebarOpen={openSidebar} />
        </>
    );
}