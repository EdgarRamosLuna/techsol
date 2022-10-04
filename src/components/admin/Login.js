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
    setNofitfyText,
    loading,
    setLoading,
  } = useContext(TaskContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
      
  
    return () => {
      
    }
  }, [])
  const removeErroTxt = (data) =>{
    let id = document.getElementsByClassName("login-item");
    let item = id;
    let div = document.createElement("b");
    div.append(`El campo ${data} es obligatorio`);
    div.setAttribute("class","errorTxt");
    if(data == "email"){
    item[0].append(div);
    }
    if(data == "password"){
    item[1].append(div);
    }
    setTimeout(() => {
    let span = document.getElementsByTagName("b");
    span[0].remove();
    }, 2000);
}
  const checkLogin = () => {
   
    if(email == ""){
        let elements = document.getElementsByName("email");
        elements[0].focus();
        removeErroTxt("email");
        return false;
    }
    if(password == ""){
        let elements = document.getElementsByName("password");
        elements[0].focus();
        removeErroTxt("password");
        return false;
    }
    axios.post('https://oasistienda.com/tsr/login',{email:email, password:password}).then(res =>{
   
    if (!res.data.error) {
        console.log(res.data.mensaje);
        isLoged(res.data.id_user);
        setNofitfyText(res.data.mensaje);
        setTimeout(() => {
            
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 200);
        }, 2000);
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
                    <div className="login-label">Usuario</div>
                    <input type="text" className="form-control" name="email" placeholder="Usuario" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="login-item">
                    <div className="login-label">Password</div>
                    <input type="password" className="form-control" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
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