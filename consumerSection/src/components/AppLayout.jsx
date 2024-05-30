import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import { Outlet } from "react-router-dom";
import Sidebar from './Sidebar';
import Container from './Container';
const AppLayout = () => {
    return (
        <div>
            <Navbar />
            <div className="relative">
                <Banner name="Priya" />
                <div className="wrapper relative  w-[100%] flex justify-center lg:justify-end items-end">
                    <Sidebar />
                    <Container >
                        <Outlet />
                    </Container >


                </div>
            </div>
        </div>

    )
}

export default AppLayout

