import React, {useState} from 'react'
import Buttons from './ButtonSide'
import Alert1 from './AlertSide'

export const AlertContext = React.createContext()

function Sidebar(){

    const [alert, setAlert] = useState(false)

    const toogleAlert = () => setAlert(prev => !prev)
    
    return(
      <AlertContext.Provider value={alert}>
        <div>
  <nav className="navbar navbar-expand-lg navbar-light Nbg">
  <div className="container-fluid ">
    <a className="navbar-brand" href="#">N0st3rn</a>
    <Alert1 />  
    <Buttons toogle = {toogleAlert} />
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/main">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/features">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/else">Else</a>
        </li>
        <div class="dropdown ">
            <button class="dropbtn Nbg">Lore &darr;</button>
            <div class="dropdown-content">
            <a href="/past">The age of ancient</a>
            <a href="/Now">Age of finding</a>
        </div>
        </div> 
      </ul>
    </div>
  </div>
</nav>
        </div>
      </AlertContext.Provider>
    )
}

export default Sidebar