import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { TaskContext } from '../../context/TaskContext'
import { HeaderS } from '../styles/Admin'

const Header = () => {
  const {setShowModal, setTokn, setLoggedIn} = useContext(TaskContext)
  const location = useLocation();
  const path = location.pathname;
  console.log(path);
  if(path == "/reparaciones"){
    console.log("hey  chicho libda kids alon");
  }
  const LogOut = () => {
    localStorage.removeItem('_');
    setTokn(0);
    setLoggedIn(false);
    
  }
  return (
    <HeaderS>
      <div className='logo'>
        <div className="logo-img">
          <img src="/assets/img/logo.png"/>

        </div>
      </div>
      <div className="menu">
        <ul>
          <li className={`menu-HeaderS ${path == "/" ? "active":""}`} onClick={(e) =>setShowModal(false)}>
            <Link to={`/`} state={{path: "/"}}><i class="fa-solid fa-house"></i> <div className="menu-txt">Dashboard</div> </Link>
          </li>
          <li className={`menu-HeaderS ${path == "/reparaciones" ? "active":""}`} onClick={()=> setShowModal(false)}>
            <Link to={`/reparaciones`} state={{path: "reparaciones"}}><i class="fa-solid fa-screwdriver-wrench"></i><div className="menu-txt">Reparaciones</div></Link>
          </li>
          <li className={`menu-HeaderS ${path == "/usuarios" ? "active":""}`} onClick={()=> setShowModal(false)}>
            <Link to={`/usuarios`} state={{path: "usuarios"}}><i class="fa-solid fa-users"></i><div className="menu-txt">Usuarios</div></Link>
          </li>
        </ul>
      </div>
      <div className="footer">
        <div className="footer-btn" onClick={LogOut}>
          <i class="fa-solid fa-right-from-bracket"></i>
          <div className="footer-txt">Salir</div>
        </div>
      </div>
        
    </HeaderS>
  )
}

export default Header