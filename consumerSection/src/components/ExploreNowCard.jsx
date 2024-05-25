import React from 'react'

const ExploreNowCard = ({title, subTitle, exploreLink, image}) => {
  return (
    <>
        <div className="relative  rounded-xl overflow-hidden  flex items-center justify-between  w-[400px] h-[auto] bg-gradient-to-l from-[#91a8fa68] to-[#F5F5F5] mx-3 flex-wrap mt-4">
          <img src="./SpiralCoverImage.png" alt="Skin Care Routine" className="absolute w-full h-auto object-cover" />
          <div className="ml-4">
            <h2 className="text-xl font-semibold">{title}</h2>

            <p className="text-gray-500">{subTitle}</p>

            <button className="mt-2 px-5 py-2 border-2 border-black rounded-lg text-gray-700 ">Explore now</button>
          </div>
          <img src={image} alt=""  className="z-10"/>
        </div>
    </>
  )
}

export default ExploreNowCard