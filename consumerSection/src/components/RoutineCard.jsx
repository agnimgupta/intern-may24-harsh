import React from 'react';

const RoutineCard = ({ image, title, reminders, progress, finished }) => {
    return (
        <div className="border rounded-xl p-4 mb-4 w-[250px] mr-3">
            <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg mb-2" />

            <div className="name flex justify-between items-center w-full ">
                <h4 className="font-semibold text-base">{title}</h4>
                <span className=" text-sm font-semibold py-1 px-3 rounded-lg ">{progress} 🌻</span>
            </div>

            <p className="text-sm text-gray-500">{reminders} Reminder Items</p>

            <div className="flex items-center justify-between mt-2 w-full">
                <div className="w-full bg-gray-200 rounded-full h-1.5 my-2">
                    <div className={`bg-[--primary] h-1.5 rounded-full`} style={{ width: `${progress}%` }}></div>
                </div>
            </div>
                <span className="text-sm text-gray-500">{progress}% Finished</span>
        </div>
    );
};

export default RoutineCard; 
