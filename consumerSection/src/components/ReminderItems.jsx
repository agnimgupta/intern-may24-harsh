import React from 'react';
import RoutineInfo from './RoutineInfo';
import HeadingDiv from './HeadingDiv';
import Layout from './Layout';
const ReminderItems = ({ onSelectType }) => {
    return (

        <div className='w-[100%]  2xl:w-[70%]  flex justify-center items-center flex-col'>

            <RoutineInfo width="w-[100%]" heading="what are Reminder Items? " content='"Reminder items could be products or activities that you want to remember to do at specific times or intervals. They help you stay organized and on track with your routine by prompting you when it s time to complete a particular task."' />

            <HeadingDiv title="Add Reminder Items">

                <h3 className="text-lg my-4 px-6">Select Reminder Type</h3>
                <div className="flex justify-between items-center p-6 flex-col lg:flex-row">

                    <div
                        className={`w-[100%] min-w-[300px] max-w-[450px]  relative overflow-hidden flex  items-center justify-start flex-col  border rounded-lg p-4  cursor-pointer bg-gradient-to-br from-[#F5F5F5] to-[#3a643b6b] min-h-[250px] lg:min-h-[150px] lg:flex-row`}
                        onClick={() => onSelectType('Product based')}
                    >
                        <input
                            type="radio"
                            name="reminderType"
                            readOnly
                        />
                        <div className="flex flex-col items-center justify-center lg:items-start  mt-2 w-[100%] ml-8 h-[100px] lg:w-[70%] ">
                            <span className="text-lg">Product based</span>
                            <p className="text-sm text-gray-500">Skincare products, medication and other essentials.</p>
                        </div>

                        <div className="imgContainer w-full flex justify-center items-center relative p-4 lg:w-[30%] ">
                            <img src="/CleanAndClear.png" alt="" className=' absolute translate-x-[-50px] top-[5px] lg:top-[0px]  lg:right-[0px]  w-[100px] h-auto' />
                            <img src="/BodyWash.png" alt="" className=' absolute translate-x-[-30px] top-[5px] lg:top-[0px]  lg:right-[0px]  w-[100px] h-auto' />
                            <img src="/GoldMalt.png" alt="" className=' absolute translate-x-[0px] top-[5px] lg:top-[0px]  lg:right-[10px]  w-[100px] h-auto' />
                            <img src="/WheyProtine.png" alt="" className=' absolute translate-x-[50px] top-[5px] lg:top-[0px]  lg:right-3 lg:translate-x-[50px]' />
                        </div>
                        
                    </div>

                    <div className="flex items-center justify-center flex-row lg:flex-col  w-[20%]  lg:h-[10vh] ">
                        <hr className="flex-grow border-l border-gray-300 " />
                        <span className="py-3 text-gray-700">OR</span>
                        <hr className="flex-grow border-r border-gray-300" />
                    </div>



                    <div
                        className={`w-[100%] min-w-[300px] max-w-[450px]  relative overflow-hidden flex  items-center justify-start flex-col  border rounded-lg p-4  mr-4 cursor-pointer bg-gradient-to-br from-[#F5F5F5] to-[#3a643b6b] min-h-[250px] lg:min-h-[150px] lg:flex-row`}
                        onClick={() => onSelectType('Activity based')}
                    >
                        <input
                            type="radio"
                            name="reminderType"
                            readOnly
                        />
                        <div className="flex flex-col items-center justify-center lg:items-start mt-2 w-[100%] ml-8 h-[100px] lg:w-[70%] ">
                            <span className="text-lg">Activity based</span>
                            <p className="text-sm text-gray-500">Yoga sessions, running, gym workouts, and reading books.</p>
                        </div>
                        
                        <div className="imgContainer w-full flex justify-center items-center relative p-4 lg:w-[30%] ">
                            
                            <img src="/StretchingGirl.png" alt="" className=' absolute translate-x-[-30px] top-[5px] lg:top-[0px]  lg:right-[0px]  w-[100px] h-auto' />
                            <img src="/BicepsMen.png" alt="" className=' absolute translate-x-[0px] top-[5px] lg:top-[0px]  lg:right-[10px]  w-[100px] h-auto' />
                            <img src="/RunningMan.png" alt="" className=' absolute translate-x-[50px] top-[5px] lg:top-[0px]  lg:right-3 lg:translate-x-[30px]' />
                        </div>
                        
                    </div>


                </div>
            </HeadingDiv>
        </div>
    );
};

export default ReminderItems;
{/* <img src="/StretchingGirl.png" alt="" className='absolute right-[30px]  w-[200px] h-auto' />
                        <img src="/BicepsMen.png" alt="" className='absolute right-[20px]  w-[80px] h-auto' />
                        <img src="/RunningMan.png" alt="" className='absolute right-[0px] ' /> */}
