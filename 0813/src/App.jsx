import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Page1 from './pages/page1.jsx'
import Page2 from './pages/page2.jsx'
import Header from './pages/header.jsx'
import Footer from './pages/footer.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const Home = () => {
  return <></>
}

const App = () => {
  return (
    <>
      <Header />
      <Container fluid="md" style={{backgroundColor: "red"}}>
        <Router>
          <Routes>
            <Route path='/page1' element={<Page1 />} />
            <Route path='/page2' element={<Page2 />} />
            <Route path='*' element={<Home />} />
          </Routes>
        </Router>
      </Container>
      <Footer />
    </>
  )
}

export default App