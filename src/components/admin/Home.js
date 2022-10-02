import React, { useState, useEffect, useContext } from 'react';
  
import { Outlet, useLocation } from 'react-router-dom'
import { TaskContext } from '../../context/TaskContext';
import { AddButton, DashboardS, HomeS } from '../styles/Admin'
import Add from './Add';
import Header from './Header'

const Home = () => {
    const {showModal, setShowModal} = useContext(TaskContext)
  const location = useLocation();
  let state;
  state = "asdsad";
  const [actualPath, setActualPath] = useState("");
  useEffect(() => {
    let path = location.pathname;
    path = path.replaceAll("/", "");
    setActualPath(path);
   
    return () => {
      
    }
  }, [])
  console.log(location);
  return (
    <>
        
        <HomeS>
            <Header />
            <DashboardS>
                {showModal && <Add/>}
                <div className='header-dashboard'>
                    <div className='header-data'>
                        Dashboard {location.pathname == "/" ? "":<div>/ <span>{actualPath}</span></div>}
                    </div>
                    <div className='header-butons'>
                        {actualPath == "clientes" ?  <AddButton><i class="fa-solid fa-plus"></i>Registar Cliente</AddButton> :""}
                        {actualPath == "reparaciones" ?  <AddButton onClick={(e) => setShowModal(prev => !prev)}><i class="fa-solid fa-plus"></i>Registar Reparacion</AddButton> :""}
                    </div>
                    
                </div>
                <div className="dashboard-cont">
                    
                    <Outlet /> 
                </div>
            </DashboardS>
            
        </HomeS>
    </>
  )
}

export default Home