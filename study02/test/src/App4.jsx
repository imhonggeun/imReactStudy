import {BrowserRouter,Routes,Route,useParams,useSearchParams} from 'react-router'
const Page1 = () => {
    const param = useParams()
    const [sparam] = useSearchParams()
    console.log(param,[sparam])
    return(
        <>
        <h1>페이지1</h1>
        <h2>{param.txt}</h2>
        <h2>{sparam.get('nice')}</h2>
        </>
    )
}

const Page2 = () => {
    return(
        <h1>페이지2</h1>
    )
}

const Page = () => {
    return(
        <h1>기본 화면</h1>
    )
}

const App04 =() => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/page1/:txt' element={<Page1/>}></Route>
                <Route path='/Page2' element={<Page2/>}></Route>
                <Route path='*' element={<Page/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}


export default App04;