import React, { useState } from "react";
import Card from "./component/Card";
import Test from "./component/test";
import Score from "./component/Score";
import ImgAnimation from "./component/ImgAnimation";
import Props from "./component/Props";
import PropProject1 from "./component/PropProject1";

function App(){
    const data = [
        {name: "John",profession: "Painter",image:"https://rb.gy/13xuey",friends:false},
        {name:"Mike",profession: "Driver",image:"https://images.unsplash.com/photo-1633068587634-4280dabf12ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",friends:false},
        {name:"Sara",profession: "Model",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",friends:false  },
        
    ]

    const [realData,setRealData]= useState(data);
    function handleClick() {
        setRealData((previousData) => (previousData.map((item, i) => {
          return i == 2 ? { ...item, friend: !item.friends } : item
        })
        ))
      }
    return(
        <>
            {/* <Card  /> */}
            {/* <Test  /> */} 
            {/* <ImgAnimation /> */}
            {/* <Score /> */}
            {/* <Props text="know more" color="bg-blue-300"/>
            <Props text="download" color="bg-red-300"/> */}
            <div className="flex flex-wrap">
            {data.map((data,index)=>(
                <PropProject1 key={index} index={index} value={data} handleClick={handleClick}/>
            ))}
            </div>
            
           

         
        </>
    )
    
}

export default App;