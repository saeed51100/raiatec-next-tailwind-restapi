// components/menu-top.jsx
import React, { useState } from "react";
import Navbar from "components/navbar";
import Modal from "components/modal";

export default function MenuTop() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <Modal open={sidebarOpen} onClose={() => setSidebarOpen(false)} setSidebarOpen={setSidebarOpen} />
            <Navbar onSidebarOpen={() => setSidebarOpen(true)} />
        </>
    );
}
