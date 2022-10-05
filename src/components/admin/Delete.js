import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';
import { AddS, ConfirmBtn, DeclineBtn, DeleteS } from '../styles/Admin';


const Delete = () => {
  const {setShowDeleteModal, idDelete, setDataR, setNofitfyText, setShowSuccesMsg, setTypeNotify, typeNotify, noClick} = useContext(TaskContext)
  const confirmDelete = (data) =>{
    axios.post("https://oasistienda.com/tsr/deleteData", {id:data}).then((res) =>{
        console.log(res);
        setShowDeleteModal(false);
        setDataR(prev=>{
            return prev.filter(datar=>datar.id!=data);
        });
        setTimeout(() => {
            setNofitfyText("Datos eliminados con exito!");
            setTypeNotify("success")
            setShowSuccesMsg(true);
            setTimeout(() => {
              setShowSuccesMsg(false);
            }, 3000);  
        }, 100);
    }).catch((err) => {
        
    });
  }  
  return (

    <AddS onClick={()=>setShowDeleteModal(false)}>
        <div className="delete-container" onClick={noClick}>
            <div className="delete-container-row">
                <div className="delete-title">
                    Estas seguro que deseas borrar el registro con el id numero {idDelete} ?
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