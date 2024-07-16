import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";


function ImgAnimation() {
  const [val,setVal] = useState(true);
  return (
    <div className="w-full h-screen bg-zinc-300 flex justify-center items-center">
      <div className="w-60 h-32 relative bg-zinc-500 rounded-md flex overflow-hidden ">
          <img className={`w-full h-full transition-transform ${val === true ? '-translate-x-[0%]' :'-translate-x-[100%]'} object-cover shrink-0`} src="https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D" alt="" />
          <img className={`w-full h-full transition-transform ${val === true ? '-translate-x-[0%]' :'-translate-x-[100%]'} object-cover shrink-0`} src="https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzZ8fHxlbnwwfHx8fHw%3D" alt="" />
          <span onClick={()=>setVal(()=>!val)} className="w-8 h-8 bg-[#dadada7b] rounded-full absolute bottom-0  left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <FaArrowRightLong size={"0.9em"}/>
          </span>
      </div>
    </div>
  );
}

export default ImgAnimation;
