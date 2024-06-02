import "./MainPage.css"
const MainPage=()=>{
    // const [isActive, setIsActive] = useState(false);

    const removeActive=()=>{

    }

    return (
        <div className="App">
          <header className="App-header">
            <nav className="navbar">
             
              <a href='/' className="logo">Dev.</a>
              <ul className="navMenu">
                <li onClick={removeActive}>
                  <a href='/' className="navLink">All</a>
                </li>
                <li onClick={removeActive}>
                  <a href='/fullStack' className="navLink">Full Stack Developer</a>
                </li>
                <li onClick={removeActive}>
                  <a href='/dataScience' className="navLink">Data Science</a>
                </li>
                <li onClick={removeActive}>
                  <a href='/cyberSecurity' className="navLink">Cyber security</a>
                </li>
                <li onClick={removeActive}>
                  <a href='/career' className="navLink">Career</a>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      );

    
}
export default MainPage;