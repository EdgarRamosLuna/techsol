import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { TaskContext } from '../../context/TaskContext'
import { RepairsS } from '../styles/Admin'
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
];



const Repairs = () => {
  

  
  const {
    
    dataR,
    setDataR} = useContext(TaskContext)
  useEffect(() => {
    axios.post('http://localhost/ci3/repairs',).then(res =>{
     
      if (res.data) {
      //  setDataR(res.data);
      }
     
      }).catch(err =>{
          console.log(err);
      });
  
    return () => {
      
    }
  }, [])
  console.log(dataR);
  
  return (
    <RepairsS>

    <Table data={dataR} columns={columns} filter={"name"} />
           
    </RepairsS>
  )
}

export default Repairs