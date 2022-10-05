import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { TaskContext } from '../../context/TaskContext'
import { ActionBtn, ActionBtnC, EditBtn, RepairsS } from '../styles/Admin'
import Table from './Table';
const columns = [
    {
        name: 'Cliente',
        selector: row => row.customer,
    },
    {
        name: 'Modelo',
        selector: row => row.device_model,
    },
   /* {
        name: 'Descripcion',
        selector: row => row.description,
    },*/
    {
        name: 'Costo reparacion',
        selector: row => row.price,
    },
    {
        name: 'Status',
        selector: row => <>{row.status == 1 && "Recibido"} {row.status == 2 && "En Reparacion..."} {row.status == 3 && "Entregado"}</>,
    },
    {
        name: 'Fecha de recepcion',
        selector: row => row.entry_date,
    },
    {
        name: 'Fecha de entrega',
        selector: row => row.delivery_date,
    },
    {
      name: 'Reparado',
      selector: row => <>{row.fixed == 1 && "Si"}{row.fixed == 2 && "No"} {row.fixed == 0 && "No"}</>,
    },
    {
      name: '',
      selector: row => row.actions,
    },
    
];



const Repairs = () => {
  
  const {
    dataR,
    setDataR,
    showUpdateModal,
    setShowUpdateModal,
    updateData,
    deleteData,
    isAdmin, 
    setIsAdmin,
    completeData
  } = useContext(TaskContext);
  
  
  useEffect(() => {
    axios.post('https://oasistienda.com/tsr/getData',).then(res =>{
      let arrayData = [];
      if (res.data) {
      //  setDataR(res.data);
        for (let i = 0; i < res.data.length; i++) {
          const element = res.data[i];
          let id = element.id;
          arrayData.push({
            id:element.id,
            id_cu:element.id_cu, 
            customer:element.customer, 
            phone_number:element.phone_number, 
            device_model:element.device_model, 
            description:element.description, 
            observaciones:element.observaciones, 
            price:element.price, currency:element.price, 
            entry_date:element.entry_date, 
            delivery_date:element.delivery_date, 
            status:element.status, 
            is_deleted:element.is_deleted, 
            actions:
              <ActionBtnC>{
                isAdmin && 
                <>
                  <ActionBtn type="edit" onClick={(e) => updateData(e, id) }><i class="fa-solid fa-pen-to-square"></i></ActionBtn>
                  <ActionBtn type="del"  onClick={(e) => deleteData(e, id) }><i class="fa-solid fa-trash"></i></ActionBtn>
                  
                </>
              } <ActionBtn type="edit" ><i class="fa-solid fa-comments"></i></ActionBtn> {element.fixed == 0 && <ActionBtn type="edit" onClick={(e) => completeData(e, id) }><i class="fa-sharp fa-solid fa-circle-check"></i></ActionBtn> }
              </ActionBtnC>,
            fixed:element.fixed  
          });
        }
      }
    //  console.log(arrayData);
      setDataR(arrayData);
      }).catch(err =>{
          console.log(err);
      });
  
    return () => {
      
    }
  }, [])
  //console.log(dataR);
  
  return (
    <RepairsS>

    <Table data={dataR} columns={columns} filter={"name"} />
           
    </RepairsS>
  )
}

export default Repairs