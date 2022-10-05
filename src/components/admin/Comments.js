import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';
import LoadingSmall from '../LoadingSmall';
import { AddS, ConfirmBtn, DeclineBtn, DeleteS } from '../styles/Admin';


const Comments = () => {
  const {setShowCommentsModal, idComment, setDataR, setNofitfyText, setShowSuccesMsg, setTypeNotify, typeNotify, noClick} = useContext(TaskContext)
  const [comentarios, setComentarios] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);
  useEffect(() => {
    axios.post("https://oasistienda.com/tsr/getComments", {id:idComment}).then((res) =>{
        console.log(res);
        setComentarios(prev => [...prev, {description:res.data[0].description , observaciones:res.data[0].observaciones}]);
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

    <AddS onClick={()=>setShowCommentsModal(false)}>
        
        <div className="delete-container" onClick={noClick}>
       
            <div className="delete-container-row">
                <div className="comment-title">
                    Comentarios y Observaciones
                </div>
                {
        
                dataLoading ?  <LoadingSmall />:
                <div className="comment-data">
                    {
                        comentarios.map((comment, index) => 
                                                
                                <div class="comment-items" key={comment.id}>
                                  
                                        
                                        <div className="comment-item">
                                            
                                            <div className="item-desc"><div><i className="fa-solid fa-comment"></i> Descripcion:</div><span> {comment.description}</span></div>
                                       
                                        </div>
                                        <div className="comment-item">
                                            
                                            <div className="item-desc"><div><i className="fa-solid fa-comment"></i> Obvervaciones:</div><span> {comment.observaciones}</span></div>
                                       
                                        </div>
                                    
                                </div>

                        )
                    }
                    
        
                </div>
                }
                <div className="delete-buttons">
                    
                    <DeclineBtn onClick={()=>setShowCommentsModal(false)}>Cerrar</DeclineBtn>
                </div>
            </div>
        </div>
        
        
        
    </AddS>

  )
}

export default Comments