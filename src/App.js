import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Header from './components/admin/Header';
import Home from './components/admin/Home';
import Repairs from './components/admin/Repairs';
function App() {
  const [name, setName] = useState("")
  const [pass, setPass] = useState("")
  useEffect(() => {
    axios.get('http://localhost/ci3/users').then(res =>{
      //console.log(res.data);
      if (res.data) {
        
      }
     
      }).catch(err =>{
          console.log(err);
      });
  
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
    
    <Routes>
            
            <Route exact path="/" element={<Home/>}>
              <Route  element={""} />
              <Route path="/reparaciones" element={<Repairs/>} />
              <Route exact path=":idpro" element={""/*<Login/>*/} />
            </Route>
            <Route exact path="login/" element={""/*<Login/>*/}>
             
            </Route>
      </Routes>
    </>
  );
}

export default App;
