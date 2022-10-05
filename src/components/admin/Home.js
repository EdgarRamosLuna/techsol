import React, { useState, useEffect, useContext } from 'react';
  
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { TaskContext } from '../../context/TaskContext';
import Notify from '../Notify';
import { AddButton, DashboardS, HomeS, Nofitfy } from '../styles/Admin'
import Add from './Add';
import Complete from './Complete';
import Delete from './Delete';
import Header from './Header'
import Login from './Login';
import Update from './Update';

const Home = () => {
  const {
    showModal, 
    setShowModal, 
    loggedIn, 
    showWelMsg, 
    nofitfyText, 
    setTokn, 
    setLoggedIn ,
    showUpdateModal,
    setshowUpdateModal,
    showDeleteModal,
    setshowDeleteModal,
    showCompleteModal

  } = useContext(TaskContext)
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
    //console.log(path);
    
    return () => {
      
    }
  }, [])
  const showModalC = (data) => {

   // console.log(data);
    setShowModal(prev => !prev);
  }
  return (
    <>
        
        <HomeS>
            {showWelMsg && <Notify>{nofitfyText}</Notify>}
            {showWelMsg && <Notify>{nofitfyText}</Notify>}
            {
                loggedIn 
                    ? 
                <>
                    <Header />
                    <DashboardS>
                        {showModal && <Add />}
                        {showUpdateModal && <Update />}
                        {showDeleteModal && <Delete />}
                        {showCompleteModal && <Complete />}
                        <div className='header-dashboard'>
                            <div className='header-data'>
                                Dashboard {location.pathname == "/" ? "":<div> / <span>{location.pathname.replaceAll("/", "")}</span></div>}
                            </div>
                            <div className='header-butons'>
                                {location.pathname == "/usuarios" || location.pathname == "/"  ?  <AddButton onClick={()=> showModalC("usu")}><i class="fa-solid fa-plus"></i>Registar Usuario</AddButton> :""}
                                {location.pathname == "/reparaciones" || location.pathname =="/" ?  <AddButton onClick={()=> showModalC("rep")}><i class="fa-solid fa-plus"></i>Registar Reparacion</AddButton> :""}
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