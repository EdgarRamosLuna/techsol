import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { TaskContext } from '../../context/TaskContext'
import { HeaderS } from '../styles/Admin'

const Header = () => {
  const {setShowModal} = useContext(TaskContext)
  const location = useLocation();
  const path = location.pathname;
  console.log(path);
  if(path == "/reparaciones"){
    console.log("hey  chicho libda kids alon");
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
            <Link to={`/`} state={{path: "/"}}><i class="fa-solid fa-house"></i>Dashboard </Link>
          </li>
          <li className={`menu-HeaderS ${path == "/reparaciones" ? "active":""}`} onClick={()=> setShowModal(false)}>
            <Link to={`/reparaciones`} state={{path: "reparaciones"}}><i class="fa-solid fa-screwdriver-wrench"></i>Reparaciones</Link>
          </li>
        </ul>
      </div>
        
    </HeaderS>
  )
}

export default Header