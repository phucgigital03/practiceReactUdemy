import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './store/actions/actions';

function Counter() {
    const count = useSelector((state)=> state.counter.count)
    const dispatch = useDispatch();

    const hanldeIncrement = ()=>{
        dispatch(increment())
    }

    const hanldeDecrement = ()=>{
        dispatch(decrement())
    }

  return (
    <div>
        <h1>Hello Counter</h1>
        <p>Current Count: {count}</p>
        <button className='p-3 bg-slate-400 text-white' onClick={hanldeIncrement}>Increment</button>
        <button className='p-3 ml-2 bg-blue-400 text-white' onClick={hanldeDecrement}>Decrement</button>
    </div>
  )
}

export default Counter