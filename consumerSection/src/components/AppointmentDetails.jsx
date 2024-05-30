import React from 'react';

const AppointmentDetails = () => {
    return (
        <div className="p-4">
            <div className="mx-auto border  bg-white shadow-lg rounded-lg overflow-hidden  w-full m:w-[100%] xl:w-[90%] m-4">
                <h2 className="text-xl font-semibold mb-8 bg-[#3a643b19] p-6 text-[--primary]">Appointment Details</h2>

                <div className="wrapper w-full flex justify-center items-center ">
                    <div className="flex flex-col items-center md:flex-row md:justify-between mb-6 p-6 w-[50%]">
                        <div className="flex flex-col items-center">
                            <img
                                src="/AppointmentDoctor_1.png"
                                alt="Dr. Prerna Narang"
                                className="w-32 h-32 rounded-full mb-2"
                            />
                            <h3 className="text-lg font-bold">Dr. Prerna Narang</h3>
                            <p className="text-gray-600">Gynecologist (MBBS, MD)</p>
                        </div>
                        <div className="flex flex-col items-center mt-4 md:mt-0">
                            <img
                                src="/AppointmentDoctor_2.png"
                                alt="Sharan Shikhar"
                                className="w-32 h-32 rounded-full mb-2"
                            />
                            <h3 className="text-lg font-bold">Sharan Shikhar</h3>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-200 p-6 flex justify-center items-center flex-col w-[100%] ">

                    <div className="content flex justify-center items-center w-[100%] flex-col">
                        <h3 className="text-xl font-bold mb-2">Details</h3>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-gray-700 w-[100%] md:w-[80%]  mt-6 justify-center items-center lg:text-center">
                            <div className="col-span-1">
                                <p className="font-semibold">Date and Time</p>
                                <h2 className="text-lg font-bold ">Mon 15 April 2024, at 5:38 pm</h2>
                            </div>
                            <div className="col-span-1">
                                <p className="font-semibold">Booked by</p>
                                <p className='text-lg font-bold'>Admin</p>
                            </div>
                            <div className="col-span-1">
                                <p className="font-semibold">Source</p>
                                <p className='text-lg font-bold'>Web</p>
                            </div>
                            <div className="col-span-1">
                                <p className="font-semibold">Appointment Type</p>
                                <p className='text-lg font-bold'>Video Call, 30 min</p>
                            </div>
                            <div className="col-span-1">
                                <p className="font-semibold">Appointment Status</p>
                                <p className='text-lg font-bold'>Booked: Unpaid</p>
                            </div>
                            <div className="col-span-1">
                                <p className="font-semibold">Amount</p>
                                <p className='text-lg font-bold'>Rs. 400.00</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mt-6  ">
                        <button className="bg-[--primary] text-white px-4 py-2 rounded-lg  focus:outline-none">
                            Pay Now
                        </button>
                    </div>
                </div>

                <div className="border-t border-gray-200 p-6 mt-6 w-[100%] flex justify-center items-center">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-[100%] md:w-[80%]  lg:text-center">
                        <div>
                            <p className="font-semibold">Description</p>
                            <p className='text-lg font-bold'>Pains at night</p>
                        </div>
                        <div>
                            <p className="font-semibold">Severity</p>
                            <p className='text-lg font-bold'>Very Bad</p>
                        </div>
                        <div>
                            <p className="font-semibold">Duration</p>
                            <p className='text-lg font-bold'>2 weeks</p>
                        </div>
                        <div>
                            <p className="font-semibold">Sleep Pattern</p>
                            <p className='text-lg font-bold'>Once a Day</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentDetails;
