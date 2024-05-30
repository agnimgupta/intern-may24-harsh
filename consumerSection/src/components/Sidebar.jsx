import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
// import 'react-pro-sidebar/dist/css/styles.css';

const CustomSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="hidden lg:flex lg:absolute lg:top-0 lg:left-0 ">
      <Sidebar collapsed={collapsed}>
        <div className="flex flex-col items-center border-b-2 border-slate-300 py-4  bg-white">
          <img
            src="/userProfile.png"
            alt="Profile"
            className={`${
              collapsed ? "w-14 h-auto" : "h-24 w-24"
            } rounded-full mb-4`}
          />
          {!collapsed && (
            <>
              <h2 className="text-xl font-semibold">Priya Singhal</h2>
              <p className="text-sm text-gray-500">24th July, 1999, 25 years</p>
              <p className="text-sm text-gray-500 mb-4">New Delhi, India</p>
            </>
          )}
        </div>
        <Menu className={`${collapsed ? "px-3" : "px-6"} w-full bg-white`}>
          <MenuItem
            component={<Link to="/" />}
            icon={<img src="/MenuIcon.svg" alt="" className="icons " />}
            className={`border-b border-gray-400 py-2 flex w-full  
					${collapsed ? "justify-center items-center" : "justify-start items-start"} `}
          >
            {!collapsed && "Dashboard"}
          </MenuItem>
		  
          <MenuItem
            component={<Link to="/appointment" />}
            icon={<img src="/Appointment.svg" alt="" className="icons" />}
            className={`border-b border-gray-400 py-2 flex w-full  ${
              collapsed
                ? "justify-center items-center"
                : "justify-start items-start"
            } `}
          >
            {!collapsed && "Appointments"}
          </MenuItem>
          <MenuItem
            component={<Link to="/routines" />}
            icon={<img src="/Routine.svg" alt="" className="icons" />}
            className={`border-b border-gray-400 py-2 flex w-full  ${
              collapsed
                ? "justify-center items-center"
                : "justify-start items-start"
            } `}
          >
            {!collapsed && "Routines"}
          </MenuItem>
          <MenuItem
            component={<Link to="/medical-records" />}
            icon={<img src="/MedicalRecord.svg" alt="" className="icons" />}
            className={`border-b border-gray-400 py-2 flex w-full  ${
              collapsed
                ? "justify-center items-center"
                : "justify-start items-start"
            } `}
          >
            {!collapsed && "Medical Records"}
          </MenuItem>
          <MenuItem
            component={<Link to="/payment" />}
            icon={<img src="/Payment.svg" alt="" className="icons" />}
            className={`border-b border-gray-400 py-2 flex w-full  ${
              collapsed
                ? "justify-center items-center"
                : "justify-start items-start"
            } `}
          >
            {!collapsed && "Payment"}
          </MenuItem>
          <MenuItem
            component={<Link to="/chat" />}
            icon={<img src="/Chat.svg" alt="" className="icons" />}
            className={`border-b border-gray-400 py-2 flex w-full  ${
              collapsed
                ? "justify-center items-center"
                : "justify-start items-start"
            } `}
          >
            {!collapsed && "Your Chats"}
          </MenuItem>
          <MenuItem
            component={<Link to="/logout" />}
            icon={
              <img src="/arrowLeft.svg" alt="" className="icons rotate-90" />
            }
            className={`border-b border-gray-400 py-2 flex w-full  ${
              collapsed
                ? "justify-center items-center"
                : "justify-start items-start"
            } `}
          >
            {!collapsed && "Logout"}
          </MenuItem>
        </Menu>
      </Sidebar>
      <div className="mt-[20px] ml-[20px] z-20 cursor-pointer">
        <div className="btn w-[40px] h-[40px]" onClick={handleToggleSidebar}>
          <img
            src={collapsed ? "/rightArrowWhite.svg" : "/leftArrowWhite.svg"}
            alt="toggle arrow"
            className=" flex items-center p-2 text-white bg-[--primary] rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomSidebar;
