import { BrowserRouter as Router, Routes, Route } from 'react-router'
import '@/App.css'
import Home, { NotPage } from '@pages/Home.jsx'
import UseState from '@pages/UseState.jsx'
import UseEffect from '@pages/UseEffect.jsx'
import UseRef from '@pages/UseRef.jsx'
import UseContext from '@pages/UseContext.jsx'
import UseReducer from '@pages/UseReducer.jsx'

function App() {
  return (
    <>
      <nav className='nav-body'>
        <a href="/">React Hooks</a>
      </nav>
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/state/*" element={<UseState />} />
            <Route path="/effect/*" element={<UseEffect />} />
            <Route path="/ref/*" element={<UseRef />} />
            <Route path="/context/*" element={<UseContext />} />
            <Route path="/reducer/*" element={<UseReducer />} />

            <Route path="*" element={<NotPage />} />
          </Routes>
        </Router>
      </main>
    </>
  )
}

export default App
