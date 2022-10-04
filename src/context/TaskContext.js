import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes,
    useLocation
} from "react-router-dom";
import { createContext } from "react";
import DataTable from 'react-data-table-component';

const data = [
    {
        id: 1,
        customer: 'Cliente 1',
        description:"test",
        delivery_date: '1988',
        entry_date:"1998",
        price:"200.00",
        status:1,
        device_model: "Samsumg Galaxy J7 Prime"
    },
    {
        id: 2,
        customer: 'Cliente 2',
        description:"test",
        delivery_date: '1988',
        entry_date:"1998",
        price:"200.00",
        status:1,
        device_model: "Samsumg Galaxy J7 Prime"
    },
    {
        id: 3,
        customer: 'Cliente 3',
        description:"test",
        delivery_date: '1988',
        entry_date:"1998",
        price:"200.00",
        status:1,
        device_model: "Samsumg Galaxy J7 Prime"
    },
    {
        id: 4,
        customer: 'Cliente 4',
        description:"test",
        delivery_date: '1988',
        entry_date:"1998",
        price:"200.00",
        status:1,
        device_model: "Samsumg Galaxy J7 Prime"
    },
    {
        id: 5,
        customer: 'Cliente 5',
        description:"test",
        delivery_date: '1988',
        entry_date:"1998",
        price:"200.00",
        status:1,
        device_model: "Samsumg Galaxy J7 Prime"
    },
    {
        id: 6,
        customer: 'Cliente 6',
        description:"test",
        delivery_date: '1988',
        entry_date:"1998",
        price:"200.00",
        status:1,
        device_model: "Samsumg Galaxy J7 Prime"
    },
]
export const TaskContext = createContext();
export const TaskContextProvider = (props) => {
    const [showModal, setShowModal] = useState(false);


    /*let dataCart = localStorage.getItem('cant');
    let dataCartI = localStorage.getItem('cart');
    useEffect(() => {
        
        if(tokenString){
            tokenString = JSON.parse(tokenString);
            tokenString = parseInt(tokenString);
            setTokn(tokenString);
            setShowLogin(false);
        }

        if(dataCartI == ""){
        
            
            localStorage.setItem('cart', JSON.stringify([]));
            localStorage.setItem('cant', JSON.stringify(0));
            dataCart = 0;
        }
        if(!Array.isArray(dataCartI)){
        
            
            localStorage.setItem('cart', JSON.stringify([]));
            localStorage.setItem('cant', JSON.stringify(0));
            dataCart = 0;
        }
        
       /* try{
            const cart = JSON.parse(localStorage.getItem("cart"))
        }catch(error){
            console.log("error");
            
        }
    }, [])
   
    window.addEventListener('storage', () => {
        if(dataCartI == ""){
    
            console.log("hey chicho libda kids alon")
            localStorage.setItem('cart', JSON.stringify([]));
            localStorage.setItem('cant', JSON.stringify(0));
            dataCart = 0;
            setCartItemN(0);
        }
        if(!Array.isArray(dataCartI)){
        
            console.log("hey chicho libda kids alon2")
            localStorage.setItem('cart', JSON.stringify([]));
            localStorage.setItem('cant', JSON.stringify(0));
            dataCart = 0;
        }

        if(Number.isInteger(dataCart)){
            localStorage.setItem('cart', JSON.stringify([]));
            localStorage.setItem('cant', JSON.stringify(0));
        }
        
        
        // When local storage changes, dump the list to
        // the console.
       // console.log(JSON.parse(window.localStorage.getItem('sampleList')));
      });
    dataCart = JSON.parse(dataCart);
    dataCart = parseInt(dataCart);
    dataCartI = JSON.parse(dataCartI);
    useEffect(() => {
        if(dataCartI == ""){
        
            console.log("hey chicho libda kids alon")
            localStorage.setItem('cart', JSON.stringify([]));
            localStorage.setItem('cant', JSON.stringify(0));
            dataCart = 0;
        }
        if(!Array.isArray(dataCartI)){
        
            console.log("hey chicho libda kids alon2")
            localStorage.setItem('cart', JSON.stringify([]));
            localStorage.setItem('cant', JSON.stringify(0));
            dataCart = 0;
        }
        window.addEventListener('storage', () => {
            // When local storage changes, dump the list to
            // the console.
           // console.log(JSON.parse(window.localStorage.getItem('sampleList')));
        });
    }, [dataCartI])

    if(isNaN(dataCart)){
        dataCart = 0;
        
    }
    if(dataCartI == null){
        dataCartI = [];
        
    }
    if(dataCartI == ""){
        dataCartI = [];
        
    }
  /*  State Variables 
  const [cartItemN, setCartItemN] = useState(dataCart);
  const [cartItemD, setCartItemD] = useState(dataCartI);
  const [tokn, setTokn] = useState(0);
  let tokenString = localStorage.getItem('_');
  const [showLogin, setShowLogin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [subTotal, setSubTotal] = useState(0);
  const [userInfo, setUserInfo] = useState([]);
  function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  //console.log(dataCartI);
  const getToken = (data) => {
  
   // setTokn2("hey")
   if(data){
    getDa(data);
   }
    
  }
  const getDa =  (datas) =>{
   // //console.log(datas);
   if(datas){
    setTokn(datas);
    setShowLogin(false);
   }
    
  }
  const token = getToken();
  let newArray;
  const addCartItem = (data, stock) =>{
    data = parseInt(data);
    stock = parseInt(stock);
    const isFound = cartItemD.some(element => {
        if (parseInt(element.id) === data) {
          return true;
        }
    
        return false;
    });
    if (isFound) {
            
    }else{
        setCartItemN(prev => prev + 1);
        setCartItemD(prev => [...prev, {id:parseInt(data), cant:1, stock:stock}])
    }
    
      
    cartItemD.map(obj => {
        let ca = obj.cant;
        ca = parseInt(ca);
        ////console.log(ca);
        
        if (parseInt(obj.id) === parseInt(data)) {
            console.log(data);
            console.log(obj.id);
            console.log(obj.cant);
            console.log(obj.stock);
         //   return {...obj, cant: parseInt(ca)};
        }
        //return obj;
    });
    
    newArray = [...cartItemD];

    //console.log(newArray);
    for (let i = 0; i < newArray.length; i++) {
        const element = newArray[i];
        if(parseInt(element.id) == parseInt(data)){
            if(element.cant >= element.stock){
                //setCartItemD(prev => prev);
                
            }else{

                element.cant = element.cant + 1;
                setCartItemN(prev => prev + 1);
                setCartItemD(newArray);
            }
                
        }else{
           // setCartItemN(prev => prev + 1);
           
        }
    }
    
    
  
    // updateSesionData();
    
  }
  /*const isFound = cartItemD.some(element => {
    if (element.id === lastId) {
      return true;
    }

    return false;
  });
  useEffect(() => {
    updateCart();
    
  //  console.log(cartItemD);
    /*arrayCart.push(cartItemD);
    if (isFound) {
        console.log('✅ array contains object with id = 1');
    }
    return () => {
      
    }
  }, [cartItemN, cartItemD])

  
  const updateCart = () => {
    
    localStorage.setItem('cant', JSON.stringify(cartItemN));
    localStorage.setItem('cart', JSON.stringify(cartItemD));
  }
  const [showAlertStock, setShowAlertStock] = useState(false); */
  const [cliente, setCliente] = useState("");
  let num = 8440000000;
  const [telefono, setTelefono] = useState("");
  const [modelo, setModelo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [price, setPrice] = useState("");
  const [observaciones, setObservaciones] = useState("");
  const [dataR, setDataR] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [showWelMsg, setShowWelMsg] = useState(false);
  const [nofitfyText, setNofitfyText] = useState("");
  const [tokn, setTokn] = useState(0);
  let tokenString = localStorage.getItem('_');
  const [loading, setLoading] = useState(true);

  const isLoged = (data) =>{
    data = parseInt(data);
    setShowWelMsg(true);
    localStorage.setItem('_', JSON.stringify(data));
    setTimeout(() => {
        setLoggedIn(true);
        setShowWelMsg(false);
    }, 3000);
  }
  useEffect(() => {
    //console.log(tokenString);
    if(tokenString > 0){
        setLoggedIn(true);
    }
    return () => {
      
    }
  }, [])
  
  return (
    <TaskContext.Provider value={{
        DataTable,
        showModal,
        setShowModal,
        cliente,
        telefono,
        modelo,
        descripcion,
        price,
        setCliente,
        setTelefono,
        setModelo,
        setDescripcion,
        setPrice,
        dataR,
        setDataR,
        isLoged,
        setLoggedIn,
        loggedIn,
        showWelMsg,
        setNofitfyText,
        nofitfyText,
        setTokn,
        setLoading,
        loading,
        observaciones,
        setObservaciones,
    
        /*addCartItem,
        cartItemN,
        tokn,
        setShowLogin,
        showLogin,
        getToken,
        loading,
        setLoading,
        cartItemD,
        loading,
        showAlertStock,
        setShowAlertStock,
        setCartItemD,
        setCartItemN,
        subTotal, 
        setSubTotal,
        setTokn,
        userInfo,
        setUserInfo,
        tokenString,
        numberWithCommas,*/
    }}>
        {props.children}
    </TaskContext.Provider>
  )
}
