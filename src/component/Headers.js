import React from 'react'
import { Navmenu } from './Navmenu'
import { Regularbtn } from './Regularbtn'

const Headers = ({darkMode, setDarkMode}) => {
  const toggle= ()=>{
    setDarkMode(!darkMode)
  }
  return (
    <nav className={darkMode? "lightmode":"darkmode"}>
          <div className='logos'>
          <img src={require("./images/logo.png")} class="logo" alt="img"/>
          </div>
        <Navmenu/>
        <div>
            <a href="#" className="login-btn">Log in</a>
            { darkMode ?<button onClick={toggle}>Dark</button>: <button onClick={toggle}> Light</button>}
            
            
        </div>
    </nav>
  )
}

export default Headers