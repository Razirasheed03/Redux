import React, { useMemo, useState } from 'react'

const Usememo = () => {
    const [count,setCount]=useState(0)
    const [name,setName]=useState('first')
    const expensiveCalc=useMemo(()=>{
        console.log('recalculated')
        let counts=0
        for(let i=0;i<10;i++){
            counts++
        }
        return counts
    },[count])

  return (
    <div>
        <h1>{count}</h1>
        <h2>{name}</h2>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setName('second')}>Change Name</button>
        <p>{expensiveCalc}</p>
    </div>
  )
}

export default Usememo