// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className="w-96 bg-white border-2 border-slate-300 ml-[3rem] py-[3rem]">
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
      <nav className="mt-8 px-4 pl-10 ">
        <ul>
          <li className="mb-7 border-b-2 border-slate-200 py-2" >
            <Link to="#" className="flex items-center text-gray-700 hover:text-green-600">
              <span className="material-icons-outlined mr-2 "><img src="./MenuIcon.svg" alt="" className='icons' /></span>
              Dashboard
            </Link>
          </li>
          <li className="mb-7 border-b-2 border-slate-200 py-2" >
            <Link to="#" className="flex items-center text-gray-700 hover:text-green-600">
              <span className="material-icons-outlined mr-2"><img src="./Appointment.svg" alt="" className='icons' /></span>
              Appointments
            </Link>
          </li>
          <li className="mb-7 border-b-2 border-slate-200 py-2" >
            <Link to="#" className="flex items-center text-gray-700 hover:text-green-600">
              <span className="material-icons-outlined mr-2"><img src="./Routine.svg" alt="" className='icons' /></span>
              Routines
            </Link>
          </li>
          <li className="mb-7 border-b-2 border-slate-200 py-2" >
            <Link to="#" className="flex items-center text-gray-700 hover:text-green-600">
              <span className="material-icons-outlined mr-2"><img src="./MedicalRecord.svg" alt="" className='icons' /></span>
              Medical Records
            </Link>
          </li>
          <li className="mb-7 border-b-2 border-slate-200 py-2" >
            <Link to="/payment" className="flex items-center text-gray-700 hover:text-green-600">
              <span className="material-icons-outlined mr-2"><img src="./Payment.svg" alt="" className='icons' /></span>
              Payment
            </Link>
          </li>
          <li className="mb-7 border-b-2 border-slate-200 py-2" >
            <Link to="#" className="flex items-center text-gray-700 hover:text-green-600">
              <span className="material-icons-outlined mr-2"><img src="./Chat.svg" alt="" className='icons' /></span>
              Your Chats
            </Link>
          </li>
          <li className="mb-7 border-b-2 border-slate-200 py-2" >
            <Link to="#" className="flex items-center text-gray-700 hover:text-green-600">
              <span className="material-icons-outlined mr-2"><img src="./arrowLeft.svg" alt="" className='icons rotate-90' /></span>
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
