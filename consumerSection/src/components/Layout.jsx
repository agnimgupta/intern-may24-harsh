import React from 'react'

const Layout = ({children}) => {
    return (
        <div className=" w-full lg:w-[90%] xl:w-[90%] 2xl:w-[80%]  flex justify-center items-center flex-col ">
            {children}

        </div>
    )
}

export default Layout