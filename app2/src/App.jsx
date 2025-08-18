import { BrowserRouter as Router, Routes, Route,useParams,useSearchParams  } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [list, setlist] = useState([])
  useEffect(()=>{
    axios.get("/data.json")
    .then((res)=>{
      if(res.data.result){
        setlist(res.data.result)
      } else {
        console.log("실패")
      }
    })
    .catch((err) => {
      console.error(err)
    })
  },[])
  return(
    <>
      <h1>Home</h1>
      <ul>
        {
          list.map((row)=>{
            return(
              <li key={row.num}>
                <a href={'/page/' + row.num}>{row.name}</a>
              </li>
            )
          })
        }
      </ul>
    </>
  )  
}
const Page2 = () => {
  return (
    <h1>Page2</h1>
  )
}
const Page = (v) => {
  const a = useParams()
  const b = useSearchParams()
  return (
    <h1>page{v.name}</h1>
  )
}

const App = () => {
  return (
    <>
      <ul>
        <li style={{display: 'inline-block', padding: '5px'}}>
          <a href="/">홈</a>
        </li> |
        <li style={{display: 'inline-block', padding: '5px'}}>
          <a href="/page1">페이지1</a>
        </li> |
        <li style={{display: 'inline-block', padding: '5px'}}>
          <a href="/page2">페이지2</a>
        </li>
      </ul>
      <Router>
        <Routes>
          <Route path='/page1' element={<Page name='1' />} />
          <Route path='/page2' element={<Page name='2' />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App