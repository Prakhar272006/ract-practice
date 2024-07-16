import React from 'react'

function Props({text,color}) {
  return (
    <div className=' px-3 py-3'>
        <button className={`px-3 py-1 ${color} text-zinc-200 rounded-md m-3`}>{text}</button>
    </div>
  )
}

export default Props