import React from 'react'

const SkinCareCard = ({ title, image, duration, whatdo, weeks, reminders }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm p-4 w-[50%] md:w-[220px] mx-2 mt-4">
      <img src={image} alt={title} className="w-full h-40 object-cover mb-2 rounded-lg" />
      <h3 className="font-semibold text-md m:text-lg">{title}</h3>
      <h3 className="font-semibold text-md m:text-lg">{whatdo}</h3>
      <p className="text-sm text-gray-500 my-2 flex justify-start items-center">
        <span className='mr-3'><img src="./Calender.svg" alt="" className='icons' /></span>
        {duration} </p>
      <p className="text-sm text-gray-500 my-2 flex justify-start items-center">
        <span className='mr-3'><img src="./ExamBoard.svg" alt="" className='icons' /></span>
        {reminders} reminder items</p>
     
    </div>
  );
}

export default SkinCareCard

