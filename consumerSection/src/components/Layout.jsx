import React from 'react'

const Layout = ({children}) => {
    return (
        <div className=" w-full lg:w-[100%]  2xl:w-[90%]  flex justify-center items-center flex-col h-auto py-[2rem]">
            {children}

        </div>
    )
}

export default Layout