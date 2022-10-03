import React, { useState, useEffect, useContext } from 'react';
  
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { TaskContext } from '../../context/TaskContext';
import Notify from '../Notify';
import { AddButton, DashboardS, HomeS, Nofitfy } from '../styles/Admin'
import Add from './Add';
import Header from './Header'
import Login from './Login';

const Home = () => {
    const {showModal, setShowModal, loggedIn, showWelMsg, nofitfyText, setTokn, setLoggedIn} = useContext(TaskContext)
  const location = useLocation();
  const navegar = useNavigate();
  let state;
  state = "asdsad";
  const [actualPath, setActualPath] = useState("");
  useEffect(() => {
    //setLoggedIn(false);
    let path = location.pathname;
    path = path.replaceAll("/", "");
    setActualPath(path);
    console.log(path);
    
    return () => {
      
    }
  }, [])

  return (
    <>
        
        <HomeS>
            {showWelMsg && <Notify>{nofitfyText}</Notify>}
            {
                loggedIn 
                    ? 
                <>
                    <Header />
                    <DashboardS>
                        {showModal && <Add/>}
                        <div className='header-dashboard'>
                            <div className='header-data'>
                                Dashboard {location.pathname == "/" ? "":<div> / <span>{location.pathname.replaceAll("/", "")}</span></div>}
                            </div>
                            <div className='header-butons'>
                                {actualPath == "clientes" ?  <AddButton><i class="fa-solid fa-plus"></i>Registar Cliente</AddButton> :""}
                                {location.pathname == "/reparaciones" ?  <AddButton onClick={(e) => setShowModal(prev => !prev)}><i class="fa-solid fa-plus"></i>Registar Reparacion</AddButton> :""}
                            </div>
                            
                        </div>
                        <div className="dashboard-cont">
                            
                            <Outlet /> 
                        </div>
                    </DashboardS>
                </>
                :
                <Login />
            }
            
            
        </HomeS>
    </>
  )
}

export default Home