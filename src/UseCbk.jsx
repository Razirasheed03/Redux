import React, { useCallback, useState } from 'react'
const Child=React.memo(({onClick})=>{
  console.log('child')
 return <button onClick={onClick}>+</button>
})

const useCbk = () => {
  const [count,setCount]=useState(0)
  console.log('parent')
  const increment=useCallback(()=>{
    setCount(prev=>prev+1)
  },[])
  return (
    <div>
      <h1>{count}</h1>
      <Child onClick={increment}/>
    </div>
  )
}

export default useCbk