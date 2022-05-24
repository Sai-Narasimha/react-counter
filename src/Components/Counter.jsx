import React, { useState } from 'react'

export const Counter = () => {
    const [count, setCount] = useState(0)
    const handleAdd = ()=>{
        setCount(count + 1)
    }
    const handleSub = ()=>{
        if(count<= 0){
            return
        }
        else setCount(count-1)
        
    }
  return (
      <>
        <h1 className = {count%2 === 0 ? "green": 'red'}>Counter: {count}</h1>
    
        <button onClick = {handleAdd}>Increment</button>
        <button onClick = {handleSub}>Decrement</button>
        <button onClick = {()=>setCount(count*2)}>Double</button>
        

      </>

  )
}
