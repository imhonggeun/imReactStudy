import "./index.css"
function App() {
  console.log(1234)
  return (
    <main>
        <nav>
            <button type="button" id="1">호출1</button>
            <button type="button" id="2">호출2</button>
            <button type="button">호출3</button>
        </nav>
        <section>
            <ul>
                <li>
                    <div class="bg2"></div><div class="bg1"></div><div class="bg2"></div><div class="bg1"></div><div class="bg2"></div>
                </li>
                <li>
                    <div class="bg1"></div><div class="bg2"></div><div class="bg1"></div><div class="bg2"></div><div class="bg1"></div>
                </li>
                <li>
                    <div class="bg2"></div><div class="bg1"></div><div class="bg2"></div><div class="bg1"></div><div class="bg2"></div>
                </li>
                <li>
                    <div class="bg1"></div><div class="bg2"></div><div class="bg1"></div><div class="bg2"></div><div class="bg1"></div>
                </li>
                <li>
                    <div class="bg2"></div><div class="bg1"></div><div class="bg2"></div><div class="bg1"></div><div class="bg2"></div>
                </li>
            </ul>
        </section>
    </main>
  )
}

export default App
