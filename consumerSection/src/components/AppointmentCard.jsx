import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
const AppointmentCard = ({ doctor, status }) => (
    <div className="max-w-[300px] rounded-xl overflow-hidden border m-4 p-5">
        <img className="w-full border-2 p-2 rounded-xl" src={doctor.image} alt={`Dr. ${doctor.name}`} />
        <div className=" py-4 flex justify-center items-center flex-col">
            <div className="font-bold text-xl mb-2">Dr. {doctor.name}</div>
            <p className="text-gray-700 text-base flex justify-start items-center"> <span><img src="/Bandage.svg" alt="bandageIcon" className='w-[20px] h-[20px] mr-2' /></span> {doctor.specialty}</p>

            <div className="mt-2 text-sm text-gray-500">

                <p className='flex justify-start items-center my-2'> <span><img src="/Calender.svg" alt="calender Icons" className='w-[20px] h-[20px] mr-2' /></span>{doctor.date}</p>

                <p className='flex justify-start items-center my-2'><span><img src="/Video.svg" alt="video icon" className='w-[20px] h-[20px] mr-2' /></span>{doctor.consultationType} - ₹{doctor.fee}</p>

            </div>
            <div className="flex justify-center items-center flex-col mt-4">
                <button className={` ${status === 'Cancelled' ? "bg-red-200 text-red-500" : "border border-[--primary] text-[--primary]"}  font-bold py-2 px-4 rounded m-1 w-full`}>{status === 'Cancelled' ? "Cancelled" : "View Routine"}</button>
                <button className="bg-[--primary] text-white font-bold py-2 px-4 rounded m-1 w-full ">Book Appointment</button>
            </div>
            <button className="mt-2 text-[--primary] w-full">

                <NavLink to="/appointment/appointment-details"  >View Details </NavLink>

            </button>
        </div>
    </div>
);

export default AppointmentCard;