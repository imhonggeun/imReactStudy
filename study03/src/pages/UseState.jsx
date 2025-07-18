import { useState } from 'react'
import {Routes, Route} from 'react-router'
import { Title } from '@pages/Home.jsx'

const Step1 = () => {
  const [num, setNum] = useState(0)
  return (
    <>
      <span style={{margin: '0 10px'}}>번호 : {num}</span>
      <button type='button' style={{cursor: 'pointer'}} onClick={()=>{setNum(num + 1)}}>상태값 변경</button>
    </>
  )
}

const Step2 = () => {
  const [txt, setTxt] = useState('')
  const [array, setArray] = useState([])
  const submitEvent = e => {
    e.preventDefault()
    if(txt === '') return
    setArray([txt, ...array])
    setTxt('')
  }
  return (
    <form onSubmit={submitEvent}>
      <input type='text' placeholder='글 작성하세요.' value={txt} onChange={e => setTxt(e.target.value)}/>
      <button type='submit'>입력</button>
      <div>
      {
        array.toReversed().map((v, i) => <p key={i}>{v}</p>)
      }
      </div>
    </form>
  )
}

const UseState = () => {
  return (
    <>
      <Title title="useState" />
      <nav className='nav-link'>
        <a href="/state/1">예제1</a>
        <a href="/state/2">예제2</a>
      </nav>
      <Routes>
        <Route path="1" element={<Step1 />} />
        <Route path="2" element={<Step2 />} />
      </Routes>
    </>
  )
}

export default UseState