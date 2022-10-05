import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';
import { AddS, ConfirmBtn, DeclineBtn, DeleteS } from '../styles/Admin';


const Delete = () => {
  const {setShowDeleteModal, idDelete} = useContext(TaskContext)
  const confirmDelete = (data) =>{
    axios.post("https://oasistienda.com/tsr/deleteData", {id:data}).then((res) =>{
        console.log(res);
        setShowDeleteModal(false);
    }).catch((err) => {
        
    });
  }  
  return (

    <AddS onClick={()=>setShowDeleteModal(false)}>
        <div className="delete-container">
            <div className="delete-container-row">
                <div className="delete-title">
                    Estas seguro que deseas borrar la siguienta informacion ?
                </div>
                <div className="delete-buttons">
                    <ConfirmBtn onClick={() => confirmDelete(idDelete)}>Confirmar</ConfirmBtn>
                    <DeclineBtn onClick={()=>setShowDeleteModal(false)}>Cancelar</DeclineBtn>
                </div>
            </div>
        </div>
    </AddS>

  )
}

export default Delete