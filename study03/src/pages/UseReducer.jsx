import { useState, useReducer } from "react"
import { Title } from '@pages/Home.jsx'

const UseReducer = () => {
  const [result, setResult] = useState(0)
  const [num, setNum] = useState(0)
  return (
    <>
      <Title title="useReducer" />
      <div style={{display: 'grid', gap: '5px', gridTemplateColumns: '1fr auto 1fr 1fr', marginTop: '10px'}}>
        <span style={{textAlign: 'left'}}>{result}</span>
        <span style={{textAlign: 'center'}}>+</span>
        <input type="number" style={{width: '100%'}} step="100" value={num} onChange={(e) => setNum(Number(e.target.value))} />
        <button type="button" onClick={() => setResult(result + num)}>=</button>
      </div>
    </>
  )
}

export default UseReducer