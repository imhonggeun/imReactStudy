import {useState, useContext, useId } from 'react'
import { Title } from '@pages/Home.jsx'
import MyProvider, {useTheme} from '@pages/UseThemeContext.jsx'

const Header = () => {
  const theme =useTheme()
  console.log(useTheme())
  return (
    <header style={{
      textAlign: 'center',
      backgroundColor: theme.show ? 'black' : 'white',
      color: theme.show ? 'white' : 'black'
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
const Main = () => {
  const theme =useTheme()
  return (
    <main style={{
      margin: '0',
      height: '50vh',
      backgroundColor: theme.show ? 'black' : 'white',
      color: theme.show ? 'white' : 'black'
      }}>
      <InputDom />
    </main>
  );
}
const Footer = () => {
  const theme =useTheme()
  return (
    <footer style={{
      textAlign: 'right',
      backgroundColor: theme.show ? 'black' : 'white',
      color: theme.show ? 'white' : 'black'
      }}>
      <button type='button' onClick={() => setShow(!show)}>스타일 변경</button>
    </footer>
  )
}

const Step1 = () => {
  return (
    <>
      <Header  />
      <Main  />
      <Footer />
    </>
  )
}

const UseContext = () => {  
  return (
    <>
      <Title title="useContext" />
      <MyProvider>
        <Step1/>
      </MyProvider>
    </>
  )
}

export default UseContext