import { BrowserRouter as Router, Routes, Route, useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios'
import { useState, useEffect } from 'react'

const Home = () => {
  const [list, setList] = useState([])
  useEffect(() => {
    axios.get("/data1.json")
    .then((res) => {
      if(res.data.status) {
        setList(res.data.result)
      } else {
        console.log("실패")
      }
    })
    .catch((err) => {
      console.error(err)
    })
  }, [])
  return (
    <>
      <h1>Home</h1>
      <ul>
        {
          list.map((row) => {
            return (
              <li key={row.num}>
                <a href={"/page/" + row.num}>{row.name}</a>
              </li>
            )
          })
        }        
      </ul>
    </>
  )
}
const Page1 = () => {
  return (
    <h1>Page1</h1>
  )
}
const Page2 = () => {
  return (
    <h1>Page2</h1>
  )
}
const Page = (v) => {
  const params = useParams()
  const [sParams] = useSearchParams()
  return (
    <h1>Page{params.name}</h1>
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
          <a href="/page/1">페이지1</a>
        </li> |
        <li style={{display: 'inline-block', padding: '5px'}}>
          <a href="/page2?name=2">페이지2</a>
        </li>
      </ul>
      <Router>
        <Routes>
          <Route path='/page/:name' element={<Page name="1" />} />
          <Route path='/page2' element={<Page name="2" />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App