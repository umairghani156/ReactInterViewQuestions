import React, { useEffect, useState } from 'react'

const Counter = () => {
    const count1 =Number(localStorage.getItem("count"))
    const [count, setCount] = useState(count1)

 
  
 useEffect(()=>{
  const internal = setInterval(()=>{
     setCount((prev)=>{
        if(prev >= 10){
            clearInterval(internal)
            localStorage.removeItem("count", prev)
            return prev
        }
        localStorage.setItem("count", prev)
        return prev + 1
     })
    },1000)
    
    return ()=> {
       clearInterval(internal)
        console.log("Counter Unmount", count);
        
    }

 },[])

 
  return (
    <div>
        <span>Count: {count}</span>
    </div>
  )
}

export default Counter