// components/menu-top.jsx
import React, { useState } from "react";
import Navbar from "components/navbar";
import SidebarModal from "components/modal";

export default function MenuTop() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <SidebarModal open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <Navbar onSidebarOpen={() => setSidebarOpen(true)} />
        </>
    );
}
