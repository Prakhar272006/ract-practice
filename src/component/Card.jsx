import React from 'react'

function Card() {
  var data = [
    {img:'https://rb.gy/sytb56',name:"Swiggy",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel sem eleifend, feugiat leo a.",service:true},
    {img:'https://rb.gy/tb46wg',name:"Zomato",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel sem eleifend, feugiat leo a.",service:true},
    {img:'https://rb.gy/p9fs2h',name:"blinkit",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel sem eleifend, feugiat leo a.",service:false},

  ]
  return (
    <div className='w-full h-screen bg-zinc-200 flex items-center justify-center gap-10'>
      {data.map((val,index)=>(
         <div key={index} className='w-52  bg-zinc-300    rounded-md overflow-hidden '>
         <div className='w-full h-36 bg-zinc-500'>  
           <img className='w-full h-full object-cover' src={val.img} alt="" />
         </div>
         <div className='w-full px-3 py-4'>
             <h2 className='font-semibold'>{val.name}</h2>
             <p className='text-xs mt-2'>{val.description}</p>
             <button className={`px-3 py-1 mt-4 ${val.service ?"bg-green-500":'bg-red-500'} rounded`}>{val.service ? "Available" : "Unavailble"}</button>
         </div>
 
       </div>
      ))}
     
      

    </div>
  )
}

export default Card