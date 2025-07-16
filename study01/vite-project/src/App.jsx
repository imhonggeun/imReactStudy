import { useState, useEffect } from "react"
import "./index.css"

function App() {
  const start = 0;
  const end = 4;
  const [model, setModel] = useState([])
  const [point, setPoint] = useState([2, 0])
  const model1 = [
    [1,0,0,0,1],
    [1,0,1,0,1],
    [0,0,0,0,0],
    [1,0,1,0,1],
    [1,0,0,0,1]
  ]
  const model2 = [
    [1,0,0,0,1],
    [1,1,0,1,1],
    [0,0,0,0,0],
    [1,1,0,1,1],
    [1,0,0,0,1]
  ]
  const model3 = [
    [0,1,0,1,0],
    [1,0,0,0,1],
    [0,0,0,0,0],
    [1,0,0,0,1],
    [0,1,0,1,0]
  ]
  function reset() {
    setPoint([2, 0])
  }
  function btn1() {
    reset()
    setModel(model1)
  }
  function btn2() {
    reset()
    setModel(model2)
  }
  function btn3() {
    reset()
    setModel(model3)
  }
  function block(key) {
    let target = 0;
    if (model.length > 0) {
      switch (key) {
        case 37: // 왼쪽 이동
          if(point[1] - 1 >= start) {
            target = model[point[0]][point[1] - 1]
          } else {
            target = model[point[0]][end]
          }
          break;
        case 38 : // 위쪽 이동
          if(point[0] - 1 >= start) {
            target = model[point[0] - 1][point[1]]
          } else {
            target = model[end][point[1]]
          }
          break;
        case 39 : // 오른쪽 이동
          if(point[1] + 1 <= end) {
            target = model[point[0]][point[1] + 1]
          } else {
            target = model[point[0]][start]
          }
          break;
        case 40 : // 아래쪽 이동
          if(point[0] + 1 <= end) {
            target = model[point[0] + 1][point[1]]
          } else {
            target = model[start][point[1]]
          }
          break;
      }
    }
    return (target === 1) ? false : true
  }
  function keyDown(e) {
    if(block(e.keyCode)) {
      switch (e.keyCode) {
        case 37: // 왼쪽 이동
          if(point[1] - 1 >= start) {
            setPoint( [point[0], point[1] - 1] )
          } else {
            setPoint( [point[0], end] )
          }
          break;
        case 38 : // 위쪽 이동
          if(point[0] - 1 >= start) {
            setPoint( [point[0] - 1, point[1]] )
          } else {
            setPoint( [end, point[1]] )
          }
          break;
        case 39 : // 오른쪽 이동
          if(point[1] + 1 <= end) {
            setPoint( [point[0], point[1] + 1] )
          } else {
            setPoint( [point[0], start] )
          }
          break;
        case 40 : // 아래쪽 이동
          if(point[0] + 1 <= end) {
            setPoint( [point[0] + 1, point[1]] )
          } else {
            setPoint( [start, point[1]] )
          }
          break;
      }
    }
  }
  useEffect(()=> {
    window.addEventListener('keydown', keyDown)
    return () => {
      window.removeEventListener('keydown', keyDown)
    }
  }, [point])

  return (
    <main>
      <nav>
        <button type="button" id="1" onClick={btn1}>호출1</button>
        <button type="button" id="2" onClick={btn2}>호출2</button>
        <button type="button" onClick={btn3}>호출3</button>
      </nav>
      <section>
        <ul>
          { 
            model?.map((li,y) => {
            return (
                <li key={y}>
                  { 
                    li?.map((div, x) => {
                      let bg = (div === 1) ? 'bg1' : 'bg2'
                      bg = (point[0] === y && point[1] === x) ? 'bg3' : bg;
                      return (
                        <div className={bg} key={x}></div>
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
