import { useState, useEffect, useRef } from 'react'
import {Routes, Route} from 'react-router'
import { Title } from '@pages/Home.jsx'

const Step1 = () => {
  const ref = useRef(1)
  console.log(ref, ref.current)
  return (<p>{ref.current}</p>)
}
const Step2 = () => {
  const [num, setNum] = useState(0)
  const ref = useRef(0)
  const changeEvent = (e) => {
    let v = e.target.value
    setNum(v)
    ref.current = v
  }
  return (
    <>
      <p>상태값 {num}</p>
      <p>참조값 {ref.current}</p>
      <input type='number' value={num} onChange={changeEvent} />
    </>
  )
}
const Step3 = () => {
  const [num, setNum] = useState(0)
  const ref = useRef(0)
  const event1 = () => {
    setNum(num + 1)
    console.log("상태값")
  }
  const event2 = () => {
    ref.current = ref.current + 1
    console.log("참조값")
  }
  return (
    <>
      <button type='button' onClick={event1}>상태값 변경</button>
      <span style={{marginLeft: '10px'}}>상태값 {num}</span>
      <br />
      <button type='button' onClick={event2}>참조값 변경</button>
      <span style={{marginLeft: '10px'}}>참조값 {ref.current}</span>
    </>
  )
}
const Step4 = () => {
  const [load, setLoad] = useState(false)
  let num = 0
  const ref = useRef(0)
  const event1 = () => {
    num = num + 1
    console.log("변수값")
  }
  const event2 = () => {
    ref.current = ref.current + 1
    console.log("참조값")
  }
  const event3 = () => {
    setLoad(!load)
  }
  const event4 = () => {
    console.log("변수", num, "참조", ref.current)
  }
  return (
    <>
      <button type='button' onClick={event1}>변수값 변경</button>
      <span style={{marginLeft: '10px'}}>변수값 {num}</span>
      <br />
      <button type='button' onClick={event2}>참조값 변경</button>
      <span style={{marginLeft: '10px'}}>참조값 {ref.current}</span>
      <br />
      <button type='button' onClick={event3}>상태값 변경</button>
      <button type='button' onClick={event4}>변수와 참조값 확인</button>
    </>
  )
}
const Step5 = () => {
  const [num, setNum] = useState(0)
  const ref = useRef(0)
  useEffect(()=> {
    console.log("참조값 변경")
    ref.current = num
  }, [num])
  return (
    <>
      <button type='button' onClick={()=>{setNum(num + 1)}}>1증가</button>
      <span style={{marginLeft: '10px'}}>상태값 : {ref.current}</span>
    </>
  )
}

const Step6 = () => {
  const [txt, setTxt] = useState('')
  const ref = useRef()
  useEffect( () => {
    ref.current.focus()
  },[])
  const changeEvent = (e) => {
    setTxt(e.target.value)
  }
  const submitEvent = (e) => {
    e.preventDefault()
  }
  return (
    <form onSubmit={submitEvent}>
      <input type='text' value={txt} onChange={changeEvent} ref={ref}/>
      <input type='submit' value='실행' />
    </form>
  )
}

const Step7 = () => {
  const [txt, setTxt] = useState('')
  const ref = useRef()
  useEffect(()=>{
    ref.current.focus()
  },[])
  const submitEvent = (e) => {
    e.preventDefault()
    setTxt(ref.current.value)
  }
  return (
    <form onSubmit={submitEvent}>
      <p>{txt}</p>
      <input type='text' ref={ref} />
      <input type='submit' value='실행' />
    </form>
  )
}

const UseRef = () => {
  return (
    <>
      <Title title="useRef" />
      <nav className='nav-link'>
        <a href="/ref/1">예제1</a>
        <a href="/ref/2">예제2</a>
        <a href="/ref/3">예제3</a>
        <a href="/ref/4">예제4</a>
        <a href="/ref/5">예제5</a>
        <a href="/ref/6">예제6</a>
        <a href="/ref/7">예제7</a>
      </nav>
      <Routes>
        <Route path="1" element={<Step1 />} />
        <Route path="2" element={<Step2 />} />
        <Route path="3" element={<Step3 />} />
        <Route path="4" element={<Step4 />} />
        <Route path="5" element={<Step5 />} />
        <Route path="6" element={<Step6 />} />
        <Route path="7" element={<Step7 />} />
      </Routes>
    </>
  )
}

export default UseRef