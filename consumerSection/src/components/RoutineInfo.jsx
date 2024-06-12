import React from 'react'

const RoutineInfo = ({ heading, content}) => {
    return (
        <div className={`flex justify-between items-center mb-6 bg-[#FFF7E2] px-4 py-8 rounded-lg my-6 w-full`}>
            <div className="flex flex-col">

                <h1 className="text-2xl font-semibold text-[--primary] mb-4">{heading}</h1>
                <p className=" text-gray-700 rounded-lg mb-6 ">
                {content}
                </p>

            </div>
            
        </div>
    )
}

export default RoutineInfo