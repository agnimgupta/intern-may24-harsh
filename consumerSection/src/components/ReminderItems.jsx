import React from 'react';
import RoutineInfo from './RoutineInfo';
const ReminderItems = ({ onSelectType }) => {
    return (
        
        <div className='flex justify-center items-center flex-col w-[100%] m:w-[80%] xl:w-[90%] '>
            <RoutineInfo width="w-[100%]" heading="what are Reminder Items? " content='"Reminder items could be products or activities that you want to remember to do at specific times or intervals. They help you stay organized and on track with your routine by prompting you when it s time to complete a particular task."'/>

            <div className=" border rounded-2xl overflow-hidden min-h-[50vh] mt-[2rem] w-[100%]">

                <h2 className="text-xl font-semibold mb-8 bg-[#3a643b19] p-6 text-[--primary]">Add Reminder Items</h2>
                {/* <div className="border-b-2 border-green-600 mb-6"></div> */}
                <h3 className="text-lg mb-4 px-6">Select Reminder Type</h3>
                <div className="flex justify-between items-center p-6 flex-col lg:flex-row">
                    <div
                        className={`w-[100%] max-w-[400px]  relative overflow-hidden flex  items-center justify-start  border rounded-lg p-4  mr-4 cursor-pointer bg-gradient-to-br from-[#F5F5F5] to-[#3a643b6b] `}
                        onClick={() => onSelectType('Product based')}
                    >
                        <input
                            type="radio"
                            name="reminderType"
                            readOnly
                        />
                        <div className="flex flex-col items-start justify-center mt-2 w-[50%] ml-8 h-[100px]">
                            <span className="text-lg">Product based</span>
                            <p className="text-sm text-gray-500">Skincare products, medication and other essentials.</p>
                        </div>

                        <img src="/CleanAndClear.png" alt="" className='absolute right-[70px]  w-[100px] h-auto' />
                        <img src="/BodyWash.png" alt="" className='absolute right-[50px]  w-[100px] h-auto' />
                        <img src="/GoldMalt.png" alt="" className='absolute right-[20px]  w-[100px] h-auto' />
                        <img src="/WheyProtine.png" alt="" className='absolute right-3 translate-x-[50px]' />
                        {/* <div className="img flex relative w-[50%] bg-red-400 ">
  </div> */}
                    </div>

                    <div className="flex items-center justify-center flex-row lg:flex-col  mb-4 w-[40%]  lg:h-[10vh] ">
                        <hr className="flex-grow border-l border-gray-300 " />
                        <span className="py-3 text-gray-700">OR</span>
                        <hr className="flex-grow border-r border-gray-300" />
                    </div>


                    <div
                        className={`w-[100%] max-w-[400px] relative overflow-hidden flex  items-center justify-start  border rounded-lg p-4 lg:ml-4 cursor-pointer bg-gradient-to-br from-[#F5F5F5] to-[#3a643b6b] `}
                        onClick={() => onSelectType('Activity based')}
                    >
                        <input
                            type="radio"
                            name="reminderType"
                            readOnly
                        />
                        <div className="flex flex-col items-start justify-center mt-2 w-[50%] ml-8 h-[100px]">
                            <span className="text-lg">Activity based</span>
                            <p className="text-sm text-gray-500">Yoga sessions, running, gym workouts, and reading books.</p>
                        </div>

                        <img src="/StretchingGirl.png" alt="" className='absolute right-[30px]  w-[200px] h-auto' />
                        <img src="/BicepsMen.png" alt="" className='absolute right-[20px]  w-[80px] h-auto' />
                        <img src="/RunningMan.png" alt="" className='absolute right-[0px] ' />
                        {/* <div className="img flex relative w-[50%] bg-red-400 ">
  </div> */}
                    </div>


                </div>
            </div>
        </div>
    );
};

export default ReminderItems;
