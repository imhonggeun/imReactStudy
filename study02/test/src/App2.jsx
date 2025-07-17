import {useState, useEffect} from 'react';

const Test1 = () => {
  const [cnt, setCnt] = useState(0)
  console.log(1)
  useEffect(() => {
    console.log(2)
    setCnt(cnt + 1)
  },[])
  return (
    <p>호출 횟수 : {cnt}</p>
  )
}

const Test2 = () => {
  const [list,setList] = useState([])
  const [txt, setTxt] = useState('')
  useEffect(() => {
    console.log("useEffect",txt)
    setList([txt,...list])
  },[txt])
  return(
    <>
      <input type='text' name='txt' 
        value={txt}
        onChange = { e => setTxt(e.target.value)}/>
        {
            list.map((txt, index) => <p key={index}>{txt}</p>)
        }
    </>
  )
}



const App2 = () => (<Test2 />)

export default App2