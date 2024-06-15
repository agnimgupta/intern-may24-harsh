import React from 'react'
const Container = ({ children, collapsed }) => {
  return <div className={`transition-width duration-300 ease-in-out  p-4  w-[100%] $ flex  md:justify-center items-center flex-col   `}>
    {children}
 
  </div>

}

export default Container;


