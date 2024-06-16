import React from 'react';

const RoutineCard = ({ image, title, reminders, progress, finished }) => {
    return (
        <div className="border rounded-xl p-2 md:p-4 mb-4 w-[auto] mr-2 md:mr-3">
            <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg mb-2" />

            <div className="name flex justify-between items-center w-full">
                <h4 className="font-semibold text-sm md:text-lg">{title}</h4>
                <span className=" text-sm font-semibold py-1  rounded-lg min-w-[40px] ">{progress} 🌻</span>
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
