import React, { useState } from 'react';
import RoutineInfo from './components/RoutineInfo';
import CaregiverModal from './CareGiverModal';
import Breadcrumb from './components/BreadCrump';
import Layout from './components/Layout';
import HeadingDiv from './components/HeadingDiv';
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
const breadcrumbItems = [
    { label: "Routine", path: "/routines" },
    { label: "Assign a Caregiver", path: "/routine/create/assign-caregiver" },

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


        <Layout>
            <Breadcrumb data={breadcrumbItems}/>
            <RoutineInfo width="w-[100%]" heading="What is “Assign a Caregiver”? " content='"Assign a caregiver allows users to designate a person, such as a doctor, friend, or family member, who will receive notifications regarding the users daily routines."' />
            <HeadingDiv title="Assign a Caregiver">

                    <div className=" px-6 my-4">
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
                                <li key={index} className="flex items-center justify-between py-2 ">
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
            </HeadingDiv>
            {showModal && (
                <CaregiverModal caregiver={selectedCaregiver} onClose={handleCloseModal} />
            )}
        </Layout>


    );
};

export default AssignCaregiver;
