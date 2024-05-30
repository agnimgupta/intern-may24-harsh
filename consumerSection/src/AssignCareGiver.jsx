import React, { useState } from 'react';
import RoutineInfo from './components/RoutineInfo';
import CaregiverModal from './CareGiverModal';
const caregivers = [
    {
        name: 'Dr. Pooja',
        role: 'Recent Consultation',
        imageUrl: '/CareGiver_1.png',
    },
    {
        name: 'Sister <3',
        role: 'Recent Caregiver',
        imageUrl: '/CareGiver_2.png',
    },
];

const AssignCaregiver = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCaregiver, setSelectedCaregiver] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const filteredCaregivers = caregivers.filter((caregiver) =>
        caregiver.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleAddClick = (caregiver) => {
        setSelectedCaregiver(caregiver);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedCaregiver(null);
    };

    return (
        <div className='w-full flex justify-center items-center flex-col  p-4'>

            <RoutineInfo width="w-[100%]" heading="What is “Assign a Caregiver”? " content='"Assign a caregiver allows users to designate a person, such as a doctor, friend, or family member, who will receive notifications regarding the users daily routines."' />
            <div className="w-[100%] m:w-[80%] xl:w-[90%] mx-auto  bg-white rounded-xl border">
                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-8 bg-[#3a643b19] p-6 text-[--primary]">Assign Care Giver</h2>

                </div>

                <div className="mb-6 px-6">
                    <input
                        className=" appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="search"
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className='p-6'>
                    <h3 className="text-xl font-medium text-gray-900 mb-4">Quick Add</h3>
                    <ul>
                        {filteredCaregivers.map((caregiver, index) => (
                            <li key={index} className="flex items-center justify-between py-2 border-b">
                                <div className="flex items-center">
                                    <img
                                        className="w-14 h-14 rounded-lg mr-4"
                                        src={caregiver.imageUrl}
                                        alt={caregiver.name}
                                    />
                                    <div>
                                        <p className="text-gray-900">{caregiver.name}</p>
                                        <p className="text-gray-600 text-sm">{caregiver.role}</p>
                                    </div>
                                </div>
                                <button className="text-green-700 hover:text-green-900 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => handleAddClick(caregiver)}>
                                    <span className='flexClass'><img src="/Plus.svg" alt="" className='icons mx-2 rounded-md border-2 border-[--primary]' />Add</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {showModal && (
                <CaregiverModal caregiver={selectedCaregiver} onClose={handleCloseModal} />
            )}
        </div>

    );
};

export default AssignCaregiver;
