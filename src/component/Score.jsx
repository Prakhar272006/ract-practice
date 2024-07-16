import React, { useState } from "react";

function Score() {
  const [score1, increaseScore1] = useState(0);
  const [score2, increaseScore2] = useState(0);
  return (
    <div className="flex justify-center ">
      <div id="red "  className="border-2 border-black" >
        <div className="w-60 h-16 bg-red-400 flex items-center justify-center border-b-2 border-black">
          <h1 className="font-semibold text-4xl ">Team 1</h1>
        </div>
        <div className="w-60 h-fit py-5 bg-red-400 flex items-center justify-center">
          <h1 className="font-semibold text-8xl ">{score1}</h1>
        </div>
        <button
          onClick={() => increaseScore1(score1 + 1)}
          className=" w-full  bg-red-400 border-t-2 border-black"
        >
          Score +1
        </button>
      </div>

      <div id="blue" className="border-2 border-black">
        <div className="w-60 h-16 bg-blue-400 flex items-center justify-center border-b-2 border-black">
          <h1 className="font-semibold text-4xl ">Team 2</h1>
        </div>
        <div className="w-60 h-fit py-5 bg-blue-400 flex items-center justify-center">
          <h1 className="font-semibold text-8xl ">{score2}</h1>
        </div>
        <button
          onClick={() => increaseScore2(score2 + 1)}
          className=" w-full bg-blue-400 border-t-2 border-black "
        >
          Score +1
        </button>
      </div>
    </div>
  );
}

export default Score;
