import React from 'react'

const SkinCareCard = ({ title, image, duration, whatdo, weeks, reminders }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm p-4 w-[100%] md:w-[220px] mx-2 mt-4">
      <img src={image} alt={title} className="w-full h-40 object-cover mb-2 rounded-lg" />
      <h3 className="font-semibold text-md m:text-lg">{title}</h3>
      <h3 className="font-semibold text-md m:text-lg">{whatdo}</h3>
      <p className="text-sm text-gray-500 my-2 flex justify-start items-center">
        <span className='mr-3'><img src="./Calender.svg" alt="" className='icons' /></span>
        {duration} </p>
      <p className="text-sm text-gray-500 my-2 flex justify-start items-center">
        <span className='mr-3'><img src="./Calender.svg" alt="" className='icons' /></span>
        {reminders} reminder items</p>
      {/* <div className="flex justify-between items-center">
        <div className="text-sm text-gray-500 flex items-center">
          <span className="material-icons-outlined mr-1">date_range</span>{weeks} Weeks
        </div>
        <div className="text-sm text-gray-500 flex items-center">
          <span className="material-icons-outlined mr-1">check_circle</span>{reminders} reminder Items
        </div>
      </div> */}
    </div>
  );
}

export default SkinCareCard

