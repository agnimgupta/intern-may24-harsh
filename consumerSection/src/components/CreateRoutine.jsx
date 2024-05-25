import React, { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import RoutineInfo from './RoutineInfo'
const CreateRoutine = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageSelect = (image) => {
        setSelectedImage(image);
    };
    return (
        <div className='flex justify-center items-center flex-col w-full'>
            <RoutineInfo />

            <div className="w-[80%] mx-auto p-8 bg-white rounded-lg ">
                <h1 className="text-2xl font-bold text-[--primary] mb-6">Create Routine</h1>

                <div className="flex flex-col justify-center items-center  md:flex-row md:space-x-6">
                    <div className="w-full md:w-1/2">

                        <div className="createRoutine">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Routine Name
                            </label>
                            <input
                                type="text"
                                placeholder="Hair Care Routine"
                                className="w-full p-3 border border-gray-300 rounded-md mb-3"
                            />
                            <p className='text-[#A0A0A0] mb-8'>This will be displayed as your Routine thumb nail.</p>
                        </div>


                        <div className="uploadImage">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Upload Image
                            </label>
                            <div className="w-[50%] h-40 border-dashed border-2 border-gray-300 rounded-lg flex items-center justify-center mb-3 cursor-pointer">
                                {/* <input type="file" /> */}
                            </div>
                            <p className='text-[#A0A0A0] mb-8'>This will be displayed as your Routine thumb nail.</p>
                        </div>

                        <div className="category">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Category
                            </label>

                            <select className="w-full p-3 border border-gray-300 rounded-md mb-3">
                                <option>Lifestyle</option>
                                <option>Fitness</option>
                                <option>Health</option>
                            </select>
                            <p className='text-[#A0A0A0] mb-8'>This will be displayed as your Routine thumb nail.</p>
                        </div>


                        <div className="duration_unit flex justify-between items-center">
                            <div className="duration w-[50%]">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Duration
                                </label>

                                <select className="w-full p-3 border border-gray-300 rounded-md mb-3">
                                    <option>Lifestyle</option>
                                    <option>Fitness</option>
                                    <option>Health</option>
                                </select>
                            </div>
                            <div className="unit w-[45%]">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    unit
                                </label>

                                <select className="w-full p-3 border border-gray-300 rounded-md mb-3">
                                    <option>Lifestyle</option>
                                    <option>Fitness</option>
                                    <option>Health</option>
                                </select>
                            </div>
                        </div>




                    </div>

                    <div className="flex items-center justify-center flex-col  mb-4 h-[30vh] ">
                        <hr className="flex-grow border-l border-gray-300" />
                        <span className="py-3 text-gray-700">OR</span>
                        <hr className="flex-grow border-r border-gray-300" />
                    </div>

                    <div className="w-full md:w-1/2 flex justify-start items-start flex-col">
                        <div className="flex space-x-2 overflow-x-auto my-[4rem] ">
                            {['./Hair_1.png', './Hair_2.png', './Hair_3.png', './Hair_4.png', './Hair_5.png'].map((image, index) => (
                                <div
                                    key={index}
                                    className={`w-20 h-20 rounded-lg overflow-hidden cursor-pointer ${selectedImage === image ? 'border-4 border-[--primary]' : 'border'}`}
                                    onClick={() => handleImageSelect(image)}
                                >
                                    <img src={image} alt={`Option ${index}`} className="w-full h-full object-cover" />

                                    {selectedImage === image }
                                </div>
                            ))}
                        </div>



                        {/* <div className="description p-4 border border-gray-300 rounded-xl"> */}
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Description
                            </label>
                            <textarea
                                rows="4"
                                className="w-full p-3 border border-gray-300 rounded-md mb-6"
                                
                            >
                                • ed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                • ed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                • ed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </textarea>
                            <p className='text-[#A0A0A0] mb-8'>Please add at least 3 pointers about the Routine.</p>
                        {/* </div> */}

                    </div>
                </div>

                <div className="text-right">
                    <a href="#" className="text-[--primary] font-semibold">View All (4)</a>
                </div>
            </div>
        </div>
    )
}

export default CreateRoutine