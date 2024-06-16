import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import HeadingDiv from './HeadingDiv';
import Layout from './Layout';
import SimpleDropDownComponent from './SimpleDropDown';
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

                    <SimpleDropDownComponent label="Meal" />

                    {timeSlots.map((slot, index) => (
                        <div key={index} className="grid grid-cols-3 gap-4 mb-8 w-[100%] my-4">
                            <SimpleDropDownComponent label="Hour" list={["1", "2"]} />
                            <SimpleDropDownComponent label="Minutes" list={["1", "2"]} />
                            <SimpleDropDownComponent label="Unit" list={["AM", "PM"]} />

                            
                            
                        </div>
                    ))}
                    <div className="mb-5">
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
                    <div className="flex space-x-4 w-full justify-center items-center">
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
