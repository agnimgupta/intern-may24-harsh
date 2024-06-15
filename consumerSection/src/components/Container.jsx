import React from 'react'
const Container = ({ children, collapsed }) => {
  return <div className={`transition-width duration-300 ease-in-out w-full p-4  ${collapsed ? 'lg:w-[calc(100%-100px)]' : 'w-[calc(100%-300px)]'
    } flex justify-center items-center flex-col  `}>
    {children}
 
  </div>

}

export default Container;


