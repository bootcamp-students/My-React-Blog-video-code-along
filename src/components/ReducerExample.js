import React, { useReducer } from 'react'
import { reducer, initialState } from '../utilities/reducer'
import { actionDown, actionUp } from '../utilities/actions'

export default function ReducerExample() {



  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch(actionDown)}>-</button>
      <button onClick={() => dispatch(actionUp)}>+</button>
    </>
  )
}
