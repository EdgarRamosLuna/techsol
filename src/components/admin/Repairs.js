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
    {
        name: 'Descripcion',
        selector: row => row.description,
    },
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
      name: '',
      selector: row => row.actions,
  },
];



const Repairs = () => {
  

  
  const {
    
    dataR,
    setDataR} = useContext(TaskContext)
  useEffect(() => {
    axios.post('https://oasistienda.com/tsr/getData',).then(res =>{
      
      if (res.data) {
      //  setDataR(res.data);
        for (let i = 0; i < res.data.length; i++) {
          const element = res.data[i];
          
          setDataR(prev => [...prev, {id_cu:element.id_cu, customer:element.customer, phone_number:element.phone_number, device_model:element.device_model, description:element.description, observaciones:element.observaciones, price:element.price, currency:element.price, entry_date:element.entry_date, delivery_date:element.delivery_date, status:element.status, is_deleted:element.is_deleted, actions:<ActionBtnC><ActionBtn type="edit"><i class="fa-solid fa-pen-to-square"></i></ActionBtn> <ActionBtn type="del"><i class="fa-solid fa-trash"></i></ActionBtn><ActionBtn type="edit"><i class="fa-sharp fa-solid fa-circle-check"></i></ActionBtn></ActionBtnC>}]);
        }
      }
     
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