import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/admin/Header';
import Home from './components/admin/Home';
import Repairs from './components/admin/Repairs';
import Login from './components/admin/Login';
import { TaskContext } from './context/TaskContext';
import { LoadingS } from './components/styles/Admin';
import Loading from './components/Loading';
import Users from './components/admin/Users';
function App() {
  const [name, setName] = useState("")
  const [pass, setPass] = useState("")
  const {loading, setLoading} = useContext(TaskContext);
  const [op, setOp] = useState(1);
  let location = useLocation();
  location = location.pathname.replaceAll("/", "");
  const [actualPage, setActualPage] = useState(location);
  useEffect(() => {
    axios.get('http://localhost/ci3/users').then(res =>{
      //console.log(res.data);
      if (res.data) {
        
      }
     
      }).catch(err =>{
          console.log(err);
      });
      
    setTimeout(() => {
      setOp(0);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      
    }, 2000);
    return () => {
      
    }
  }, [])
  const sendData = () =>{
    axios.post('http://localhost/ci3/test', {email:name, pass:pass}).then(res =>{
      //console.log(res.data);
      if (res.data) {
        
      }
     
      }).catch(err =>{
          console.log(err);
      });
  }

  
  return (
    <>
    {loading && <Loading op={op} />}
    
    <Routes>
            
            <Route exact path="/" element={<Home actualPage={actualPage}/>}>
              <Route  element={""} />
              <Route path="/reparaciones" element={<Repairs actualPage={actualPage}/>} />
              <Route path="/usuarios" element={<Users actualPage={actualPage}/>} />
              <Route exact path=":idpro" element={""/*<Login/>*/} />
            </Route>
            <Route exact path="login/" element={<Login/>}>
             
            </Route>
      </Routes>
    </>
  );
}

export default App;
