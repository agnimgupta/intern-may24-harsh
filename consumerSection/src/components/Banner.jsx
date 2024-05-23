import React from 'react';

const Banner = ({name}) => {
  return (
    <div className="w-full h-[20vh] bg-no-repeat  bg-cover  bg-center flexColClass " style={{ backgroundImage: "url('./Banner.png')" }}>
      <h1 className='text-5xl font-bold my-2' >Namaste, <span className='text-[--primary]'> {name}</span></h1>
      <p className='text-[--primary] text-xl'>How are you feeling today?</p>
    </div>
  );
}

export default Banner;
