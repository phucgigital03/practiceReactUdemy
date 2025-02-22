import { useDispatch, useSelector } from 'react-redux'
import React from 'react'

function DisPlay() {
    const count = useSelector((state)=> state.counter.count)
    const dispatch = useDispatch();

  return (
    <div>
        Display
        <p>Current Count Display: {count}</p>
    </div>
  )
}

export default DisPlay