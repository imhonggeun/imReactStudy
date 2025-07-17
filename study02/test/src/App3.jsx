import { useState,useEffect }  from "react"

const App3Sub = () => {
    return(
        <>
            <h3>자식 영역</h3>
        </>
    )

}

const App3 = () => {
    return(
        <>
            <h1>부모 영역</h1>
            <App3Sub /> 
        </>
    )

}

export default App3