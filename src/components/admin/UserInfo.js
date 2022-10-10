import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';
import LoadingSmall from '../LoadingSmall';
import { AddS, ConfirmBtn, DeclineBtn, DeleteS } from '../styles/Admin';


const UserInfo = () => {
  const {showUIModal, setShowUIModal, idUi, noClick} = useContext(TaskContext)
  const [comentarios, setComentarios] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);
  useEffect(() => {
    axios.post("https://oasistienda.com/tsr/getUserInfo", {id:idUi}).then((res) =>{
        console.log(res);
        setComentarios(prev => [...prev, {customer:res.data[0].customer , phone_number:res.data[0].phone_number}]);
        setDataLoading(true);
        setTimeout(() => {
            setDataLoading(false);
        }, 1000);
    }).catch((err) => {
        
    });
  
    return () => {
      
    }
  }, []);
  console.log(comentarios);
  return (

    <AddS onClick={()=>setShowUIModal(false)}>
        
        <div className="delete-container" onClick={noClick}>
       
            <div className="delete-container-row">
                <div className="comment-title">
                    Informacion de contacto
                </div>
                {
        
                dataLoading ?  <LoadingSmall />:
                <div className="comment-data">
                    {
                        comentarios.map((comment, index) => 
                                                
                                <div class="comment-items" key={comment.id}>
                                  
                                        
                                        <div className="comment-item">
                                            
                                            <div className="item-desc"><div><i class="fa-solid fa-user"></i> Nombre del cliente:</div><span> {comment.customer}</span></div>
                                       
                                        </div>
                                        <hr />
                                        <div className="comment-item">
                                            
                                            <div className="item-desc"><div><i class="fa-solid fa-phone"></i> Numero Telefonico:</div><span> {comment.phone_number}</span></div>
                                       
                                        </div>
                                    
                                </div>

                        )
                    }
                    
        
                </div>
                }
                <div className="delete-buttons">
                    
                    <DeclineBtn onClick={()=>setShowUIModal(false)}>Cerrar</DeclineBtn>
                </div>
            </div>
        </div>
        
        
        
    </AddS>

  )
}

export default UserInfo