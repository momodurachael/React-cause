import React, { useContext } from 'react'
import { CountContext } from '../App'

function ComponentFF() {
    const countContext = useContext(CountContext)
  return (
    <div>
        Component FF - {countContext.CountState}
        <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
        <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
        <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentFF