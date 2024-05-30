import React, { useState } from 'react';

const CaregiverModal = ({ caregiver, onClose }) => {

    const [assign, setAssign] = useState(false);
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="bg-white p-6 rounded-lg shadow-lg z-50 flex justify-center items-center flex-col">
                <div className="flex items-center mb-4 flex-col">
                    <img
                        className="w-20 h-20 rounded-lg mr-4"
                        src={caregiver.imageUrl}
                        alt={caregiver.name}
                    />
                    <div>
                        <h3 className="text-xl font-semibold mt-5">{caregiver.name}</h3>
                    </div>
                </div>
                {!assign && (<p className="mb-4 w-[70%] text-center">Are you sure you want to Assign {caregiver.name} as your Caregiver for this Routine?</p>)}
                {/* <div className=""> */}
                    {assign && (
                        <div className='flex justify-between items-center flex-col w-full'>

                            <p className='my-3'>Your request for Assign as Caregiver has been sent ✅</p>

                            <button
                                className="bg-transparent border border-[--primary] text-[--primary] px-4 py-2 rounded-lg  w-[70%]"
                                onClick={onClose}
                            >
                                Go Back
                            </button>
                        </div>
                    )}
                    {!assign && (
                        <div className='flex justify-between items-center flex-col w-full'>

                            <button
                                className="bg-[--primary] text-white px-4 py-3 rounded-lg my-3 w-[70%]"
                                onClick={() => {
                                    // Handle assigning caregiver logic here
                                    //   onClose();
                                    setAssign(true)
                                }}
                            >
                                Assign as Caregiver
                            </button>
                            <button
                                className="bg-transparent border border-[--primary] text-[--primary] px-4 py-2 rounded-lg  w-[70%]"
                                onClick={onClose}
                            >
                                View Profile
                            </button>
                        </div>)}
                {/* </div> */}
            </div>
        </div>
    );
};

export default CaregiverModal;
