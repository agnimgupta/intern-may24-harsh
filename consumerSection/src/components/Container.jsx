import React from 'react'

const Container = ({ children ,width}) => {
  return <div className={`containerWrapper w-[100%] p-[1rem]  `}>
    {children}
  </div>

}

export default Container;