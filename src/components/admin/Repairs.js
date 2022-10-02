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

const Repairs = () => {
  

  const [dataR, setDataR] = useState(data);
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

    <Table data={data} columns={columns} filter={"name"} />
           
    </RepairsS>
  )
}

export default Repairs