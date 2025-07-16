import { useState } from "react"
import "./index.css"

function App() {
  
  const [model, setModel] = useState([])

  const model1 = [
    [1,0,0,0,1],
    [1,0,1,0,1],
    [0,0,0,0,0],
    [1,0,1,0,1],
    [1,0,0,0,1]
  ]
  function btn1() {
    setModel(model1)
  }  

  return (
    <main>
      <nav>
        <button type="button" id="1" onClick={btn1}>호출1</button>
        <button type="button" id="2">호출2</button>
        <button type="button">호출3</button>
      </nav>
      <section>
        <ul>
          { 
            model?.map((li,index) => {
            return (
                <li key={index}>
                  { 
                    li?.map((div, i) => {
                      const bg = (div === 1) ? 'bg1' : 'bg2'
                      return (
                        <div className={bg} key={i}></div>
                      )
                    })
                  }
                </li>
              )
            })            
          }
        </ul>
      </section>
    </main>
  )
}

export default App
