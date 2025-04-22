import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCounter, incrementCounter } from './CounterSlice'

const Counter = () => {
    const count=useSelector((state)=>state.counter.count)
    const dispatch=useDispatch()
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(incrementCounter())}>+</button>
        <button onClick={()=>dispatch(decrementCounter())}>-</button>
    </div>
  )
}

export default Counter