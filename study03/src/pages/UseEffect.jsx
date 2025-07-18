import { useState, useEffect } from 'react'
import {Routes, Route} from 'react-router'
import { Title } from '@pages/Home.jsx'

const Step1 = () => {
  const [num, setNum] = useState(0)
  useEffect(()=>{
    console.log("화면 출력")
    setNum(num + 1)
  }, [])
  return (<p>호출 횟수 : {num}</p>)
}
const Step2 = () => {
  const [num, setNum] = useState(0)
  useEffect(()=>{
    console.log("화면 출력")
  }, [num])
  return (<input type='number' value={num} onChange={e=>{setNum(e.target.value)}}/>)
}
const Step3 = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <button type="button" style={{cursor: 'pointer'}} onClick={()=> { setShow(!show) }}>{ show ? '정지' : '호출'}</button>
      { show && <Step3Sub setShow={setShow} />}
    </>
  )
}
const Step3Sub = ({setShow}) => {
  const [num, setNum] = useState(0)
  console.log("Step3Sub 호출")
  useEffect(() => {
    if(num < 10) {
      const app = setInterval(() => {
        console.log(num, "동작")
        setNum(num + 1)
      }, 1000)
      return () => clearInterval(app)
    } else {
      setShow(false)
    }
  }, [num])
  return (<span style={{marginLeft: '10px'}}>{num}</span>)
}

const UseEffect = () => {
  return (
    <>
      <Title title="useEffect" />
      <nav className='nav-link'>
        <a href="/effect/1">예제1</a>
        <a href="/effect/2">예제2</a>
        <a href="/effect/3">예제3</a>
      </nav>
      <Routes>
        <Route path="1" element={<Step1 />} />
        <Route path="2" element={<Step2 />} />
        <Route path="3" element={<Step3 />} />
      </Routes>
    </>
  )
}

export default UseEffect