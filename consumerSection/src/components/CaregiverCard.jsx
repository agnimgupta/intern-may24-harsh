import React from 'react';

const CaregiverCard = ({ caregiver }) => {
  return (
    <div className="border rounded-lg p-4 flex items-start justify-between mb-4 w-[350px]">
      <div className="flex items-center ">
        <img src={caregiver.image} alt={caregiver.name} className="w-20 h-20 rounded-lg mr-4" />
        <div>
          <h3 className="text-lg font-semibold">{caregiver.name}</h3>
          <span className="text-gray-600 bg-[#E9F1E0] px-2 py-1 rounded-full text-sm">{caregiver.relation}</span>
          <button className="text-[--primary]  mt-2 block">View Details</button>
        </div>
      </div>
      <button className="text-gray-500 hover:text-red-500">
          <img src="./Close_3.svg" alt="" className='icons' />
      </button>
    </div>
  );
};

export default CaregiverCard;
