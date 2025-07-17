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
//숫자 입력 Test1
const Number1 = () => {
  const [int, intset] = useState(0)
  const btn = () => { intset(int + 1) }
  return(
      <>
        <button type='button' onClick={btn}>숫자</button>
        <h1>{int}</h1>
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
//버튼 글자 나오기Test2
const Button2 = () => {
  const [but, setbut] = useState('')
  const submitEvent = (e) =>{
    e.preventDefault();
    setbut(e.target.txt.value)
  }
  return(
    <form onSubmit={submitEvent}>
      <input type='text' name='txt'/>
      <button type='submit'>버튼</button>
      <h1>{but}</h1>
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

const Save1 = () => {
  const [txt, setTet] = useSate('')
  const submitEvent = (e) => {
    e.preventDefault();
    setTet(e.target.txt.value)
  }
  return(
    <form onSubmit={submitEvent}>
      <input type='text' name='txt'/>
      <button>전송</button>
    </form>

  )
}
const data = () =>{
  return(
    [1,2,3,4,5]
  )
}
const Test4 = () =>{
  const [list,setlist] = useState(() =>data())
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
    //<Number1></Number1>
    
    //<Test2></Test2>
    //<Button2></Button2>
    
    //<Test3></Test3>
    <Save1></Save1>

    //<Test4></Test4>

  )
}

export default App