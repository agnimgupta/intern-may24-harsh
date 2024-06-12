import React,{useState} from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import { Outlet } from "react-router-dom";
import Sidebar from './Sidebar';
import Container from './Container';
const AppLayout = () => {
    
    const [collapsed, setCollapsed] = useState(false);

    const handleToggleSidebar = () => {
      setCollapsed(!collapsed);
    };
    return (
        <div>
            <Navbar />
            <div className="relative">
                <Banner name="Priya" />
                <div className=" relative  w-full  flex justify-center lg:justify-start   items-start ">
                    <Sidebar openCloseHandler={handleToggleSidebar} collapsed={collapsed}/>
                    <Container collapsed={collapsed}>
                        <Outlet />
                    </Container >


                </div>
            </div>
        </div>

    )
}

export default AppLayout

