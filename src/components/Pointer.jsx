import React, { useState } from 'react'

const Pointer = () => {
  const [positionPlace, setPositionPlace] = useState({})

  const helloHandler = (e)=>{
    console.log(e);
    setPositionPlace({y: e.clientX, x: e.clientY})
    
    
  }
  console.log(positionPlace);
  return (
    <div style={{width:"100%", height:"100vh", backgroundColor:"red", position:"relative"}} onClick={helloHandler}>
        <div style={{position:"absolute", display:JSON.stringify(positionPlace) === "{}"?"none":"block", top:`${positionPlace.x ? positionPlace.x - 50+"px" :"0"}`, left:`${positionPlace.y ? positionPlace.y - 50+"px" :"0"}`,borderRadius:"50%", width:"100px", height:"100px", backgroundColor:"white"}} >

        </div>
    </div>
  )
}

export default Pointer