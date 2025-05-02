import React from 'react'


export default function Card({imgUrl,text,desc}) {
  return (
    // <div className='hover:scale-105 transition-all duration-1000 ease-in-out bg-gray-100 h-70 md:w-70 md:h-70 shadow-xl rounded-2xl flex px-8 flex-col gap-4 justify-center relative 
    // after:absolute after:top-0 after:left-0 after:w-full after:h-full  hover:after:bg-blue-600 after:opacity-15 after:rounded-2xl
    // hover:after:scale-x-0 after:origin-left after:hover:scale-x-100 after:transition-transform after:duration-500 after:ease-in-out'>

    <div className='hover:scale-105 transition-all duration-200 ease-in-out bg-gray-100 h-70 md:w-70 md:h-70 shadow-xl rounded-2xl flex px-8 flex-col gap-4 justify-center relative 
    after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-blue-600 after:opacity-30 after:rounded-2xl 
    after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-500 after:ease-linear'>

      <div className="w-20 h-20 rounded-full bg-slate-50 p-1 items-center flex justify-center ">
       <img className='w-[70%] h-[70%] object-contain' src={imgUrl} alt="" /> 
      </div>
      <div className="sercviceName">
        <h1 className='font-bold text-xl'>{text}</h1>
      </div>
      <div className="serviceDesc">
        <p className='font-light text-slate-400'>{desc}</p>
      </div>
    </div>
  )
}
