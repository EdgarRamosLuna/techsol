import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';
import { ActionBtn, ActionBtnC, AddS, ConfirmBtn, DeclineBtn, DeleteS } from '../styles/Admin';


const Complete = () => {
  const {setShowCompleteModal, idComplete, dataR, setDataR, setNofitfyText, setShowSuccesMsg, updateData, deleteData, isAdmin, setTypeNotify} = useContext(TaskContext)
  const [status, setStatus] = useState("");
  const noClick = (e) =>{
    e.stopPropagation();
  }
  const confirmComplete = (data) =>{

    //setStatus()
    if(status == 0){
        return false;
    }
    
    axios.post("https://oasistienda.com/tsr/saveDataFixed", {id:data, status:parseInt(status)}).then((res) =>{
     //   console.log(res);
        const id = idComplete;
        const delivery_date = res.data.delivery_date;
       
     // stock = parseInt(stock);
        const newState = dataR.map(obj => {
            
             if (parseInt(obj.id) === parseInt(id)) {
                return {...obj, status:3, fixed:status, delivery_date:delivery_date, actions:
                    <ActionBtnC>{
                      isAdmin && 
                      <>
                        <ActionBtn type="edit" onClick={(e) => updateData(e, id) }><i class="fa-solid fa-pen-to-square"></i></ActionBtn>
                        <ActionBtn type="del"  onClick={(e) => deleteData(e, id) }><i class="fa-solid fa-trash"></i></ActionBtn>
                        
                      </>
                    } <ActionBtn type="edit" ><i class="fa-solid fa-comments"></i></ActionBtn>
                    </ActionBtnC>,};
            }
            return obj;
        });
        setTimeout(() => {
            setNofitfyText("Reparacion completada con exito!");
            setShowSuccesMsg(true);
            setTypeNotify("success")
            setTimeout(() => {
              setShowSuccesMsg(false);
            }, 3000);  
        }, 100);
          
        console.log(newState)
        setDataR(newState);
        setShowCompleteModal(false);
        
    }).catch((err) => {
        
    });
  }  
 
  return (

    <AddS onClick={()=>setShowCompleteModal(false)}>
        <div className="delete-container" onClick={noClick}>
            <div className="delete-container-row">
                <div className="delete-title">
                    Deseas finalizar esta reparacion y entregar el equipo?
                </div>
                <div className="delete-input">
                    <label for="">El equipo fue reparado?</label>
                    <select className="delete-select" value={status} defaultValue={status} onChange={(e)=> setStatus(e.target.value)}>
                        <option value="0"></option>
                        <option value="1">Si</option>
                        <option value="2">No</option>
                    </select>
                </div>
                <div className="delete-buttons">
                    <ConfirmBtn onClick={(e) => confirmComplete(idComplete)}>Confirmar</ConfirmBtn>
                    <DeclineBtn onClick={(e)=>setShowCompleteModal(false)}>Cancelar</DeclineBtn>
                </div>
            </div>
        </div>
    </AddS>

  )
}

export default Complete