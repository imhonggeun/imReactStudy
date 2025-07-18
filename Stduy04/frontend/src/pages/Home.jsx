import { useEffect, useState } from 'react'

const Home = () => {
  const [list, setList] = useState([])
  useEffect(() => {
    fetch('http://localhost:8000/list')
    .then(x => x.json())
    .then(y => setList(y.result))
  }, [])
  const clickEvent = (index) => {
    console.log("clickEvent", index)
    fetch(`http://localhost:8000/remove?index=${index}`)
    .then(x => x.json())
    .then(y => setList(y.result))
  }
  return (
    <>
      <h1 style={{textAlign: 'center'}}>시작 화면</h1>
      {
        list?.map((v,i) => <p style={{cursor: 'pointer'}} key={i} onClick={() => clickEvent(i)}>{v}</p>)
      }
    </>
  )
}
export default Home