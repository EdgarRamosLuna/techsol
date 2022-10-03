import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';
import { AddButton, LoginS } from '../styles/Admin';


const Login = () => {
  const {
    isLoged,
    setLoggedIn,
    loggedIn,
    setNofitfyText
  } = useContext(TaskContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
      
  
    return () => {
      
    }
  }, [])
  const checkLogin = () => {
    if(email.length == 0){
        alert("Correo Obligatorio");
        return false;
    }
    if(password.length == 0){
        alert("Password Obligatorio");
        return false;
    }
    axios.post('https://oasistienda.com/tsr/login',{email:email, password:password}).then(res =>{
   
    if (!res.data.error) {
        console.log(res.data.mensaje);
        isLoged(res.data.id_user);
        setNofitfyText(res.data.mensaje);
    //    setLoggedIn(true);
      //setDataR(res.data);
    }
    
    }).catch(err =>{
        console.log(err);
    });
  }
  return (
    <LoginS>
        <div className="login-container">
            <div className="login-header">
                <div className="login-logo">
                    <img src="/assets/img/logo.png" />
                </div>
            </div>
            <div className="login-items">
                <div className="login-item">
                    <div className="login-label">Email</div>
                    <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="login-item">
                    <div className="login-label">Password</div>
                    <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="login-item">
                    <AddButton onClick={checkLogin}>Login</AddButton>
                </div>
            </div>
        </div>
        
    </LoginS>
  )
}

export default Login