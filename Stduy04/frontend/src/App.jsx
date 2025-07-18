import { BrowserRouter as Router, Routes, Route } from 'react-router'
import '@/App.css'
import Home from '@pages/Home.jsx'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </Router>
  )
}

export default App
