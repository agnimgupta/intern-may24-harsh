import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import HeadingDiv from './HeadingDiv';
import Layout from './Layout';

const AddTimeSlot = ({ onDone, onBack }) => {
    const [timeSlots, setTimeSlots] = useState([{ hours: '12', minutes: '00', unit: 'AM' }]);

    const handleAddSlot = () => {
        setTimeSlots([...timeSlots, { hours: '12', minutes: '00', unit: 'AM' }]);
    };

    const handleChange = (index, field, value) => {
        const newTimeSlots = [...timeSlots];
        newTimeSlots[index][field] = value;
        setTimeSlots(newTimeSlots);
    };

    return (
        <Layout>
            <HeadingDiv title="Add Time Slot">

                <div className=" p-6 w-[100%] ">
                    <h3 className="text-lg mb-4">Add Time Slot</h3>

                    

                    {timeSlots.map((slot, index) => (
                        <div key={index} className="grid grid-cols-3 gap-4 mb-8 w-[100%]">
                            <div>
                                <label className="block text-sm mb-2">Hours</label>
                                <select
                                    value={slot.hours}
                                    onChange={(e) => handleChange(index, 'hours', e.target.value)}
                                    className="border rounded-lg w-full p-2 bg-white outline-none"
                                >
                                    {[...Array(12)].map((_, i) => (
                                        <option key={i} value={i + 1 < 10 ? `0${i + 1}` : i + 1}>{i + 1 < 10 ? `0${i + 1}` : i + 1}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm mb-2">Minutes</label>
                                <select
                                    value={slot.minutes}
                                    onChange={(e) => handleChange(index, 'minutes', e.target.value)}
                                    className="border rounded-lg w-full p-2 bg-white outline-none"
                                >
                                    {[...Array(60)].map((_, i) => (
                                        <option key={i} value={i < 10 ? `0${i}` : i}>{i < 10 ? `0${i}` : i}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm mb-2">Unit</label>
                                <select
                                    value={slot.unit}
                                    onChange={(e) => handleChange(index, 'unit', e.target.value)}
                                    className="border rounded-lg w-full p-2 bg-white outline-none"
                                >
                                    <option value="AM">AM</option>
                                    <option value="PM">PM</option>
                                </select>
                            </div>
                        </div>
                    ))}
                    <div className="mb-5">
                        <label className="block text-sm mb-2">Frequency</label>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                name="frequency"
                                value="Daily"
                                className="mr-2"
                            />
                            <label className="mr-4">Before Meal</label>
                            <input
                                type="radio"
                                name="frequency"
                                value="Custom Days"
                                className="mr-2"
                            />
                            <label>After Meal</label>
                        </div>
                    </div>
                    <button
                        onClick={handleAddSlot}
                        className="flex items-center justify-center   text-[--primary] font-semibold py-2  rounded-lg mb-8"
                    >
                        <span className="mr-2 border-2 border-[--primary] p-1 rounded-md"><img src="/Plus.svg" alt="" className='w-[20px]' /></span> Add More slots
                    </button>
                    <div className="flex space-x-4">
                        <button
                            onClick={onBack}
                            className="bg-gray-600 text-white px-6 py-2 rounded-lg"
                        >
                            Back
                        </button>
                        <NavLink to="/routine/create/weekly-benefits"
                            onClick={() => onDone(timeSlots)}
                            className="bg-[--primary] text-white px-6 py-2 rounded-lg"
                        >
                            Done (3/3)
                        </NavLink>
                    </div>
                </div>
            </HeadingDiv>

        </Layout>
       
    );
};

export default AddTimeSlot;
