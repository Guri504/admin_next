"use client";
import "../../../public/sass/globals.scss";
import "../../../public/sass/pages/adminLayout.scss";
import NavTop from "../components/navTop";
import SideBar from "../components/sideBar";
import { useState } from "react";
import UserProvider from "../user_context";


export default function DashboardLayout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };


    return (
        <UserProvider>
            <div className='layout_main'>
                <div className={`overlay ${isSidebarOpen ? "active" : ""}`} onClick={toggleSidebar}></div>
                <div className={`left_main ${isSidebarOpen ? 'open' : 'closed'}`}>
                    <SideBar
                        isSidebarOpen={isSidebarOpen}
                        toggleSidebar={toggleSidebar}
                    />
                </div>
                <div className='right_main'>
                    <NavTop toggleSidebar={toggleSidebar} />
                    {children}
                </div>
            </div>
        </UserProvider>
    );
}





