import React, { useContext } from 'react'
import { TaskContext } from '../../context/TaskContext'
import { ActionBtn, ActionBtnC, AddButton, AddS } from '../styles/Admin'
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
  const removeErroTxt = (data) =>{
      let id = document.getElementsByClassName("data-form-input");
      let item = id;
      let div = document.createElement("b");
      div.append(`El campo ${data} es obligatorio`);
      div.setAttribute("class","errorTxt");
      if(data == "cliente"){
        item[0].append(div);
      }
      if(data == "telefono"){
        item[1].append(div);
      }
      if(data == "modelo"){
        item[2].append(div);
      }
      if(data == "precio"){
        item[5].append(div);
      }
      if(data == "descripcion"){
        item[3].append(div);
      }
      setTimeout(() => {
        let span = document.getElementsByTagName("b");
        span[0].remove();
      }, 2000);
  }
  const saveRepairData = () =>{
    if(cliente == ""){
      let elements = document.getElementsByName("cliente");
      elements[0].focus();
      removeErroTxt("cliente");
      return false;
    }
    
    if(telefono == ""){
      let elements = document.getElementsByName("telefono");
      elements[0].focus();
      removeErroTxt("telefono");
      return false;
    }
    if(modelo == ""){
      let elements = document.getElementsByName("modelo");
      elements[0].focus();
      removeErroTxt("modelo");
      return false;
    }
    if(descripcion == ""){
      let elements = document.getElementsByName("descripcion");
      elements[0].focus();
      removeErroTxt("descripcion");
      return false;
    }
    if(price == ""){
      let elements = document.getElementsByName("price");
      elements[0].focus();
      removeErroTxt("precio");
      return false;
    }
    axios.post('https://oasistienda.com/tsr/saveData',{customer:cliente, description:descripcion,device_model:modelo, price:price, observaciones:observaciones, phone_number:telefono}).then(res =>{
   //   console.log(res.data);
      const id = res.data.id;
      const entry_date = res.data.entry_date;
      
      setDataR(data => ([...data, {id:id, customer:cliente, description:descripcion,device_model:modelo,status:1,price:parseFloat(price).toFixed(2), entry_date:entry_date, delivery_date:"0000-00-00", actions:<ActionBtnC><ActionBtn type="edit"><i class="fa-solid fa-pen-to-square"></i></ActionBtn> <ActionBtn type="del"><i class="fa-solid fa-trash"></i></ActionBtn><ActionBtn type="edit"><i class="fa-sharp fa-solid fa-circle-check"></i></ActionBtn></ActionBtnC>}]));
      if (!res.data) {

      }
      window.open(`https://oasistienda.com/tsr/BackEnd/createTicket/${id}`);
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
  //  console.log(dataR);
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
 // console.log(path);
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
          
            <div className="data-form-input" id="cli">
              <label>Cliente *</label>
                <input
                  type="text" placeholder="Nombre del Cliente" name="cliente" value={cliente} required onChange={(e) => setCliente(e.target.value)}/>
            </div>
            <div className="data-form-input">
              <label>Numero Telefonico *</label>
                <input
                  type="text" placeholder="Numero Telefonico Del Cliente" name="telefono" value={telefono} required onChange={(e) => saveNumber(e, "phone")}/>
            </div>
            <div className="data-form-input">
              <label>Modelo *</label>
                <input
                  type="text" placeholder="Modelo del Telefono" name="modelo" value={modelo} required onChange={(e) => setModelo(e.target.value)}/>
            </div>
            <div className="data-form-input">
              <label>Descripcion *</label>
                <input
                  type="text" placeholder="Descripcion de la reparacion" name="descripcion" value={descripcion} required onChange={(e) => setDescripcion(e.target.value)}/>
            </div>
            <div className="data-form-input">
              <label>Observaciones</label>
                <input
                  type="text" placeholder="Observaciones" value={observaciones} required onChange={(e) => setObservaciones(e.target.value)}/>
            </div>
            <div className="data-form-input">
              <label>Costo Reparacion *</label>
                <input
                  type="text" placeholder="Costo de la Reparacion" name="price" value={price} required onChange={(e) => saveNumber(e, "price")}/>
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