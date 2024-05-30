import React from 'react'

const Container = ({ children, width }) => {
  return <div className={`containerWrapper w-[100%] md:w-[90%]  flex justify-center items-center flex-col  overflow-hidden`}>
    <div className="innerWrapper w-full  lg:w-[90%] xl:w-[90%] 2xl:w-[80%]  flex justify-center items-center flex-col ">
      {children}

    </div>
  </div>

}

export default Container;


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   theme: {
//     screens: {
//       'sm': '640px',
//       // => @media (min-width: 640px) { ... }

//       'md': '768px',
//       // => @media (min-width: 768px) { ... }

//       'lg': '1024px',
//       // => @media (min-width: 1024px) { ... }

//       'xl': '1280px',
//       // => @media (min-width: 1280px) { ... }

//       '2xl': '1536px',
//       // => @media (min-width: 1536px) { ... }
//     }
//   }
// }