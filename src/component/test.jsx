import React, { useState } from "react";

function Test() {
  const [val, setVal] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  return (
    <div className="px-3 py-3">
      {/* <h1>Name : {val.name}</h1>
      <h1>Banned : {val.isBanned.toString()}</h1>
      <button
        onClick={() => setVal({ ...val, isBanned: !val.isBanned })}
        className={`px-3 py-1 rounded-full ${
          val.isBanned ? "bg-red-500" : "bg-blue-500"
        } text-white`}
      >
        change
      </button> */}

      {val.map((item, index) => <h1 key={index}>{item}</h1>)}
      <button onClick={()=>setVal(()=>{
        return val.filter((item, index) =>index !==val.length-1)
      })} className="px-3 py-1 bg-blue-300 rounded-full">
        pop
      </button>
    </div>
  );
}

export default Test;
