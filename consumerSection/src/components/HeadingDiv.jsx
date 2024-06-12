import React from 'react'

const HeadingDiv = ({title, children}) => {
    return (
        <div className="wrapper border-2 border-[#3a643b40] bg-white rounded-2xl overflow-hidden w-full">
            <div className="heading text-2xl font-semibold  p-6 bg-[#F7FCFA] text-[--primary]">{title}</div>

            {children}
        </div>
    )
}

export default HeadingDiv