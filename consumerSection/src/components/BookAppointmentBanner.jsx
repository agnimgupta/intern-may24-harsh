import React from 'react';

const BookAppointmentBanner = () => {
    return (
        <div className="bg-gradient-to-l from-[#FFFDF7] to-[#FFF7E2] rounded-lg  p-6 flex flex-col md:flex-row items-center justify-between w-full  border my-[2rem]">
            <div className="flex items-center justify-between mb-4 md:mb-0 w-full px-[2rem] flex-col md:flex-row">
                <img
                    src="/DoctorImage.svg"
                    alt="Doctor"
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full mr-4"
                />
                <div className='flexClass flex-col'>
                    <h2 className="text-2xl md:text-3xl font-bold my-2">Book an appointment</h2>
                    <p className="text-gray-600 my-2 w-full ">Schedule your next appointment with our experts</p>
                </div>
                <button className="border-2 border-[--primary] text-[--primary] font-bold py-2 px-3 lg:px-6  rounded-xl flex items-center justify-center text-md lg:text-xl">
                    Book Now <span className="ml-2"> <img src="/arrowLeft.svg" alt="" className='rotate-[-90deg] w-[30px] h-[30px]'/> </span>
                </button>
            </div>
        </div>
    );
};

export default BookAppointmentBanner;
