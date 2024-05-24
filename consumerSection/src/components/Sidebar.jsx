// src/components/Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-96 bg-white border-2 border-gray-100 ml-[4rem] py-[3rem]">
      <div className="flex flex-col items-center border-b-2 border-slate-300">
        <img
          src="./userProfile.png"
          alt="Profile"
          className="h-24 w-24 rounded-full mb-4"
        />
        <h2 className="text-xl font-semibold">Priya Singhal</h2>
        <p className="text-sm text-gray-500">24th July, 1999, 25 years</p>
        <p className="text-sm text-gray-500 mb-4">New Delhi, India</p>
      </div>
      <nav className="mt-8 px-4 pl-10">
        <ul>
          <li className="my-1 border-b-2 border-gray-100 py-2">
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="flex items-center text-gray-700 hover:text-green-600 p-3"
            >
              <span className="material-icons-outlined mr-2 bg-gray-100 p-2 rounded-lg">
                <img src="./MenuIcon.svg" alt="" className="icons" />
              </span>
              Dashboard
            </NavLink>
          </li>
          <li className="my-1 border-b-2 border-gray-100 py-2">
            <NavLink
              to="/appointments"
              activeClassName="active"
              className="flex items-center text-gray-700 hover:text-green-600 p-3"
            >
              <span className="material-icons-outlined mr-2 bg-gray-100 p-2 rounded-lg">
                <img src="./Appointment.svg" alt="" className="icons" />
              </span>
              Appointments
            </NavLink>
          </li>
          <li className="my-1 border-b-2 border-gray-100 py-2">
            <NavLink
              to="/routines"
              activeClassName="active"
              className="flex items-center text-gray-700 hover:text-green-600 p-3"
            >
              <span className="material-icons-outlined mr-2 bg-gray-100 p-2 rounded-lg">
                <img src="./Routine.svg" alt="" className="icons" />
              </span>
              Routines
            </NavLink>
          </li>
          <li className="my-1 border-b-2 border-gray-100 py-2">
            <NavLink
              to="/medical-records"
              activeClassName="active"
              className="flex items-center text-gray-700 hover:text-green-600 p-3"
            >
              <span className="material-icons-outlined mr-2 bg-gray-100 p-2 rounded-lg">
                <img src="./MedicalRecord.svg" alt="" className="icons" />
              </span>
              Medical Records
            </NavLink>
          </li>
          <li className="my-1 border-b-2 border-gray-100 py-2">
            <NavLink
              to="/payment"
              activeClassName="active"
              className="flex items-center text-gray-700 hover:text-green-600 p-3"
            >
              <span className="material-icons-outlined mr-2 bg-gray-100 p-2 rounded-lg">
                <img src="./Payment.svg" alt="" className="icons" />
              </span>
              Payment
            </NavLink>
          </li>
          <li className="my-1 border-b-2 border-gray-100 py-2">
            <NavLink
              to="/chat"
              activeClassName="active"
              className="flex items-center text-gray-700 hover:text-green-600 p-3"
            >
              <span className="material-icons-outlined mr-2 bg-gray-100 p-2 rounded-lg">
                <img src="./Chat.svg" alt="" className="icons" />
              </span>
              Your Chats
            </NavLink>
          </li>
          <li className="my-1 border-b-2 border-gray-100 py-2 ">
            <NavLink
              to="/logout"
              activeClassName="active"
              className="flex items-center text-gray-700 hover:text-green-600 p-3 "
            >
              <span className="material-icons-outlined mr-2 bg-gray-100 p-2 rounded-lg">
                <img src="./arrowLeft.svg" alt="" className="icons rotate-90" />
              </span>
              Logout
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
