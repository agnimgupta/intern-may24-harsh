import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

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
        <div className=" border rounded-lg overflow-hidden w-[100%] m:w-[80%] xl:w-[90%] 2xl:w-[70%] min-h-[50vh] ">
            <h2 className="text-xl font-semibold mb-8 bg-[#3a643b19] p-6 text-[--primary]">Add Reminder Items</h2>
            <div className=" p-6 w-[100%] ">
                <h3 className="text-lg mb-4">Add Time Slot</h3>

                <div className='mb-8 '>
                    <label className="block text-sm mb-2">Meal</label>
                    <input
                        type="text"
                        name="type"
                        value=""
                        className="border rounded-lg w-full p-2"
                    />
                </div>

                {timeSlots.map((slot, index) => (
                    <div key={index} className="grid grid-cols-3 gap-4 mb-8 w-[100%]">
                        <div>
                            <label className="block text-sm mb-2">Hours</label>
                            <select
                                value={slot.hours}
                                onChange={(e) => handleChange(index, 'hours', e.target.value)}
                                className="border rounded-lg w-full p-2"
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
                                className="border rounded-lg w-full p-2"
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
                                className="border rounded-lg w-full p-2"
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
                    className="flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-[--primary] font-semibold py-2 px-4 rounded-lg mb-8"
                >
                    <span className="mr-2">+</span> Add More slots
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
        </div>
    );
};

export default AddTimeSlot;
