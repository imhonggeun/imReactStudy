import {useState, useContext, useId } from 'react'
import { Title } from '@pages/Home.jsx'

const Header = ({show}) => {
  return (
    <header style={{
      textAlign: 'center',
      backgroundColor: show ? 'black' : 'white',
      color: show ? 'white' : 'black'
      }}>
      <h1>상단글</h1>
    </header>
  )
}
const InputDom = () => {
    const id = useId()
    return (
      <>
        <label htmlFor={id + "-m1"}>메모1</label>
        <input type='text' id={id + "-m1"} />
        <br />
        <label htmlFor={id + "-m2"}>메모2</label>
        <input type='text' id={id + "-m2"} />
        <br />
      </>
    )
}
const Main = ({show}) => {
  return (
    <main style={{
      margin: '0',
      height: '50vh',
      backgroundColor: show ? 'black' : 'white',
      color: show ? 'white' : 'black'
      }}>
      <InputDom />
    </main>
  );
}
const Footer = ({show, setShow}) => {
  return (
    <footer style={{
      textAlign: 'right',
      backgroundColor: show ? 'black' : 'white',
      color: show ? 'white' : 'black'
      }}>
      <button type='button' onClick={() => setShow(!show)}>스타일 변경</button>
    </footer>
  )
}

const Step1 = ({show, setShow}) => {
  return (
    <>
      <Header show={show} />
      <Main show={show} />
      <Footer show={show} setShow={setShow} />
    </>
  )
}

const UseContext = () => {  
  const [show, setShow] = useState(false)
  return (
    <>
      <Title title="useContext" />
      <Step1 show={show} setShow={setShow} />
    </>
  )
}

export default UseContext