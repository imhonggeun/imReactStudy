import { useState, useReducer } from "react"
import { Title } from '@pages/Home.jsx'


const reducer = (state, action) =>{
  switch(action.type) {
      case '+':
        state = state + action.value
        break;
      case '-':
        state = state - action.value
        break;
      case '*':
        state = state * action.value
        break;
      case '/':
        state = state / action.value
        break;
  }
  return state
}



const UseReducer = () => {
  //const [result, setResult] = useState(0)
  const [state,dispatch] = useReducer(reducer,0);
  const [num, setNum] = useState(0)
  return (
    <>
      <Title title="useReducer" />
      <div style={{display: 'grid', gap: '5px', gridTemplateColumns: '1fr auto 1fr 1fr', marginTop: '10px'}}>
        <span style={{textAlign: 'left'}}>{state}</span>
        <input type="number" style={{width: '100%'}} step="100" value={num} onChange={(e) => setNum(Number(e.target.value))} />
        <button type="button" onClick={() => dispatch({type: '+', value: num})}>+</button>
        <button type="button" onClick={() => dispatch({type: '-', value: num})}>-</button>
        <button type="button" onClick={() => dispatch({type: '*', value: num})}>*</button>
        <button type="button" onClick={() => dispatch({type: '/', value: num})}>/</button>
      </div>
    </>
  )
}

export default UseReducer