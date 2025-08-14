const Header = () =>{
    return(
        <header>
                <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" href="/">화면</a>
          </li>
        <li className="nav-item">
            <a className="nav-link" href="/page1">page1</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/page2">page2</a>
          </li>
        </ul>
      </div>
    </nav>
        </header>
    )
}

export default Header