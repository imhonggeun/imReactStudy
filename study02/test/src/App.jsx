import { useState } from 'react'
import './App.css'

const Test1 = () => {
  const [state, setState] = useState(0)
  //console.log('useState', useState(0))
  const btn = () =>{ setState(state + 1) }
  return (
    <>
      <button type = 'button' onClick={btn}>버튼</button>
      <h1>{state}</h1>
    </>
  )
}

const Test2 = () => {
  const [txt, setTxt] = useState('')
  const submitEvent = (e) => {
    e.preventDefault();
    console.log(e.target.txt.value)
    setTxt(e.target.txt.value)
  }
  return(
    <form onSubmit={submitEvent}>
      <input type='text' name='txt'/>
      <button type='submit'>전송</button>
      <h1>{txt}</h1>
    </form>
  )
}

const Test3 = () =>{
  const [list,setlist] = useState([])
  const [txt, setTxt] = useState('')
  const submitEvent = (e) => {
    e.preventDefault();
    setlist([txt,...list])
  }

  const changeEvent = (e) => {
    setTxt(e.target.value)
  }

  return(
    <form onSubmit={submitEvent}>
      <input type='text' name='txt' onChange={changeEvent}/>
      <button>전송</button>
      {
        list.map((txt, index) => <p key={index}>{txt}</p>)
      }
      {/* <h1>{txt}</h1> */}
    </form>
  )
}

const Test4 = () =>{
  const [list,setlist] = useState([])
  const [txt, setTxt] = useState('')
  const submitEvent = (e) => {
    e.preventDefault();
    setlist([txt,...list])
  }

  const changeEvent = (e) => {
    setTxt(e.target.value)
  }

  return(
    <form onSubmit={submitEvent}>
      <input type='text' name='txt' onChange={changeEvent}/>
      <button>전송</button>
      {
        list.map((txt, index) => <p key={index}>{txt}</p>)
      }
      {/* <h1>{txt}</h1> */}
    </form>
  )
}

//호출
const App = () => {
  return(
    //<></>
    //<Test1></Test1>
    //<Test2></Test2>
    <Test3></Test3>
  )
}

export default App