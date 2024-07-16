import React, { useState } from 'react'

function PropProject1({value,index,handleClick}) {
  const {name, profession,image,friends} = value;
 
    
  return (
    <div className=' px-3 py-3 m-2 '>
        <div className='w-60 h-72 bg-zinc-200 flex flex-col items-center rounded-md'>
            <div className=' w-32 h-32 rounded-full bg-red-300 mt-2 overflow-hidden '>
                <img className='object-cover' src={image} alt="" />
            </div>
            <h1 className='text-2xl font-semibold mt-2'>{name}</h1>
            <h2 className='font-semibold text-sm mt-2'>{profession}</h2>
            <button onClick={()=>handleClick()}  className='px-3 py-1 bg-blue-300 rounded-xl mt-6'>{friends ? "Remove Friend" : "Add friend"}</button>
        </div>
    </div>
  )
}

export default PropProject1