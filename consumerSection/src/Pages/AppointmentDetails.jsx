import React from 'react';
import BookAppointmentBanner from '../components/BookAppointmentBanner';
import Layout from '../components/Layout';
import HeadingDiv from '../components/HeadingDiv';
const AppointmentDetails = () => {
    return (
        <Layout>
            <BookAppointmentBanner />
            <HeadingDiv title="Appointment Detail">

                <div className="p-4">


                    <div className="wrapper w-full flex justify-center items-center ">
                        <div className="flex flex-col items-center md:flex-row md:justify-evenly mb-6 p-6 w-[100%]">
                            <div className="flex flex-col items-center text-center md:text-start my-4 ">
                                <img
                                    src="/AppointmentDoctor_1.png"
                                    alt="Dr. Prerna Narang"
                                    className="w-32 h-32 rounded-full mb-2"
                                />
                                <h3 className="text-lg font-bold w-full">Dr. Prerna Narang</h3>
                                <p className="text-gray-600 w-full ">Gynecologist (MBBS, MD)</p>
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


                        <h3 className="text-xl font-bold mb-2 w-full  md:w-[90%]">Details</h3>
                        <div className="content flex justify- items-center w-[100%] flex-col">

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-gray-700 w-full md:w-[90%]   mt-6 justify-between items-center ">
                                <div className="col-span-1 flex justify-center items-start flex-col">
                                    <p className="font-semibold">Date and Time</p>
                                    <h2 className="text-sm md:text-lg font-bold ">Mon 15 April 2024, at 5:38 pm</h2>
                                </div>
                                <div className="col-span-1 flex justify-center items-start flex-col">
                                    <p className="font-semibold">Booked by</p>
                                    <p className='text-sm md:text-lg font-bold'>Admin</p>
                                </div>
                                <div className="col-span-1 flex justify-center items-start flex-col">
                                    <p className="font-semibold">Source</p>
                                    <p className='text-sm md:text-lg font-bold'>Web</p>
                                </div>
                                <div className="col-span-1 flex justify-center items-start flex-col">
                                    <p className="font-semibold">Appointment Type</p>
                                    <p className='text-sm md:text-lg font-bold'>Video Call, 30 min</p>
                                </div>
                                <div className="col-span-1 flex justify-center items-start flex-col">
                                    <p className="font-semibold">Appointment Status</p>
                                    <p className='text-sm md:text-lg font-bold'>Booked: Unpaid</p>
                                </div>
                                <div className="col-span-1 flex justify-center items-start flex-col">
                                    <p className="font-semibold">Amount</p>
                                    <p className='text-sm md:text-lg font-bold'>Rs. 400.00</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end mt-6 md:w-[90%] items-end ">
                            <button className="bg-[--primary] text-white px-4 py-2 rounded-lg  focus:outline-none text-sm md:text-lg">
                                Pay Now
                            </button>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 p-6 mt-6 w-[100%] flex justify-center items-center">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full md:w-[90%] ">
                            <div>
                                <p className="font-semibold lg:text-lg">Description</p>
                                <p className=' font-bold text-sm md:text-lg'>Pains at night</p>
                            </div>
                            <div>
                                <p className="font-semibold lg:text-lg">Severity</p>
                                <p className=' font-bold text-sm md:text-lg'>Very Bad</p>
                            </div>
                            <div>
                                <p className="font-semibold lg:text-lg">Duration</p>
                                <p className=' font-bold text-sm md:text-lg'>2 weeks</p>
                            </div>
                            <div>
                                <p className="font-semibold lg:text-lg">Sleep Pattern</p>
                                <p className=' font-bold text-sm md:text-lg'>Once a Day</p>
                            </div>
                        </div>
                    </div>
                </div>
            </HeadingDiv>
        </Layout>
    );
};

export default AppointmentDetails;
