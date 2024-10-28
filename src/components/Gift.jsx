import React, { useState } from 'react'

function Gift() {
    const [friendName, setFriendName] = useState("");

    const [giftData, setGiftData] = useState([])
    const randomGift = ["Toffe","Chocolate","Bubble","Cake","Roll"]

    const addGiftHandler = (e)=>{
        e.preventDefault()
        console.log(friendName);
        setGiftData((prev)=> [...prev, {id: Date.now(), name: friendName, gift: ""}])
        
        
    }

    const assignGiftsHandler = ()=>{
        const randomVal = Math.floor(Math.random() * randomGift.length);
        console.log(randomVal);

        const modifiedVal = giftData.map((d, ind)=>{
            if(d.gift){
                return d
            }
            return {...d, gift: randomGift[(randomVal + ind) % randomGift.length]}
        })
        console.log(modifiedVal);
        setGiftData(modifiedVal)
        
        
    }

    const shuffleGiftsHandler = ()=>{
        const randomVal = Math.floor(Math.random() * randomGift.length);
        console.log(randomVal);
        
        const modifiedData = giftData.map((d, ind)=>{
            const giftIndex = (randomVal + ind) % randomGift.length;
            console.log(giftIndex);
            const gift = randomGift[giftIndex]
            if (gift === undefined) {
                console.error('Gift is undefined at index:', giftIndex);
            }
            
            return {...d, gift: gift}
        });
        console.log(modifiedData);
        
        setGiftData(modifiedData)
    }

    const resetGiftshandler = ()=>{
       setGiftData([])
    }

    const removeHandler = (id)=>{
        let filteredData = giftData.filter((data)=> data.id !== id);
        console.log(filteredData);
        setGiftData(filteredData)
        
    }
    
  return (
    <div>
        <form action="" onSubmit={addGiftHandler}>
            <input type="text" placeholder='Enter your Gift' onChange={(e)=> setFriendName(e.target.value)}/>
            <button type='submit'>Add Gift</button>
        </form>
        <div>
           {
            giftData && giftData.map((data, ind)=>(
                <div key={data.id} style={{display:"flex", gap:"5px"}}>
                    <span>{data.name}:</span>
                    <span>{data?.gift ? data.gift :"No gift assigned"}</span>
                    <button onClick={()=>removeHandler(data.id)}>remove</button>
                </div>
            ))
           }
           {giftData.length !== 0 &&<div>
            <button onClick={assignGiftsHandler}>Assign Gift</button>
            <button onClick={shuffleGiftsHandler}>Shuffle Gift</button>
            <button onClick={resetGiftshandler}>Reset</button>
           </div>}
        </div>
    </div>
  )
}

export default Gift