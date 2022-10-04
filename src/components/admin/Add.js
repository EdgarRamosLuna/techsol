import React, { useContext } from 'react'
import { TaskContext } from '../../context/TaskContext'
import { AddButton, AddS } from '../styles/Admin'
import uniqid from 'uniqid';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
const Add = (props) => {
  const {actualPage} = props;
  const {setShowModal, dataR, setDataR, 
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
    observaciones,
    setObservaciones,

  } = useContext(TaskContext);
  const noClick = (e) =>{
    e.stopPropagation();
  }
  const saveRepairData = () =>{
   
    axios.post('https://oasistienda.com/tsr/saveData',{customer:cliente, description:descripcion,device_model:modelo, price:price, observaciones:observaciones, phone_number:telefono}).then(res =>{
   
      if (!res.data.error) {
          console.log(res.data.mensaje);
        
      //    setLoggedIn(true);
        //setDataR(res.data);
      }
      
      }).catch(err =>{
          console.log(err);
      });
 
   // console.log(dataR);
    setCliente("");
    setTelefono("");
    setModelo("");
    setDescripcion("");
    setPrice("");
    setShowModal(false);
    setObservaciones("");
  }
  const saveUserData = () =>{
    setDataR(data => ([...data, {id:uniqid(), customer:cliente, description:descripcion,device_model:modelo,status:1,price:price, entry_date:"2019"}]));
    console.log(dataR);
    setCliente("");
    setTelefono("");
    setModelo("");
    setDescripcion("");
    setPrice("");
    setShowModal(false);
    setObservaciones("");
  }
  const onlyNumber = () =>{
    
  }
  const saveNumber = (e, field) => {
     let val = e.target.value;

     if(field == "phone"){
     
        if (!`${e.target.value}`.match(/^[0-9]{0,10}$/)) {
          // block the input if result does not match
            e.preventDefault();
            e.stopPropagation();
            return false;
        }else{
          setTelefono(val);
        
        }
      }
      if(field == "price"){
        
        if (!`${e.target.value}`.match(/^[0-9]{0,20}$/)) {
          // block the input if result does not match
            e.preventDefault();
            e.stopPropagation();
            return false;
        }else{
          setPrice(val);
        
        }
      }
     
      
  }
  const closeModal = () => {
    setShowModal(false);
    setCliente("");
    setTelefono("");
    setModelo("");
    setDescripcion("");
    setPrice("");
  };
  const location = useLocation();
  let path = location.pathname;
  path = path.replaceAll("/", "");
  console.log(path);
  return (
    <AddS onClick={closeModal}>
      <div className="add-data-container" onClick={noClick}>
        <div className="close-modal">
          <div className="close-modal-container" onClick={closeModal}>
          <i class="fa-solid fa-circle-xmark"></i>
          </div>
        </div>
        <div className="add-data">
          <h1 className="add-data-title">
            {path == "reparaciones" ? "Registrar una reparacion":""}
            {path == "usuarios" ? "Registrar un usuario":""}
          </h1>
        </div>
        {
          path == "reparaciones"
          && 
            <div className="add-data-form">
          
            <div className="data-form-input">
              <label>Cliente</label>
                <input
                  type="text" placeholder="Nombre del Cliente" value={cliente} required onChange={(e) => setCliente(e.target.value)}/>
            </div>
            <div className="data-form-input">
              <label>Numero Telefonico</label>
                <input
                  type="text" placeholder="Numero Telefonico Del Cliente" value={telefono} required onChange={(e) => saveNumber(e, "phone")}/>
            </div>
            <div className="data-form-input">
              <label>Modelo</label>
                <input
                  type="text" placeholder="Modelo del Telefono" value={modelo} required onChange={(e) => setModelo(e.target.value)}/>
            </div>
            <div className="data-form-input">
              <label>Descripcion</label>
                <input
                  type="text" placeholder="Descripcion de la reparacion" value={descripcion} required onChange={(e) => setDescripcion(e.target.value)}/>
            </div>
            <div className="data-form-input">
              <label>Observaciones</label>
                <input
                  type="text" placeholder="Observaciones" value={observaciones} required onChange={(e) => setObservaciones(e.target.value)}/>
            </div>
            <div className="data-form-input">
              <label>Costo Reparacion</label>
                <input
                  type="text" placeholder="Costo de la Reparacion" value={price} required onChange={(e) => saveNumber(e, "price")}/>
            </div>
            <div className="data-form-input">
              <AddButton onClick={saveRepairData}>
                Guardar
              </AddButton>
            </div>
          </div>
          }
        {
          path == "usuarios"
          && 
            <div className="add-data-form">
          
            <div className="data-form-input">
              <label>Usuario</label>
                <input
                  type="text" placeholder="Nombre del Cliente" value={cliente} required onChange={(e) => setCliente(e.target.value)}/>
            </div>
            <div className="data-form-input">
              <label>Contraseña</label>
                <input
                  type="text" placeholder="Numero Telefonico Del Cliente" value={telefono} required onChange={(e) => saveNumber(e, "phone")}/>
            </div>
           
            <div className="data-form-input">
              <AddButton onClick={saveUserData}>
                Guardar
              </AddButton>
            </div>
          </div>
          }
      </div>

    </AddS>
  )
}

export default Add