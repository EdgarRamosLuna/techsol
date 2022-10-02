import React, { useContext } from 'react'
import { TaskContext } from '../../context/TaskContext'
import { AddButton, AddS } from '../styles/Admin'

const Add = () => {
  const {setShowModal} = useContext(TaskContext);
  const noClick = (e) =>{
    e.stopPropagation();
  }
  return (
    <AddS onClick={()=> setShowModal(false)}>
      <div className="add-data-container" onClick={noClick}>
        <div className="close-modal">
          <div className="close-modal-container" onClick={()=> setShowModal(false)}>
          <i class="fa-solid fa-circle-xmark"></i>
          </div>
        </div>
        <div className="add-data">
          <h1 className="add-data-title">Registrar una reparacion</h1>
        </div>
        <div className="add-data-form">
          <div className="data-form-input">
            <label>Cliente</label>
              <input
                type="text" placeholder="Nombre del Cliente" value= "" required />
          </div>
          <div className="data-form-input">
            <label>Numero Telefonico</label>
              <input
                type="text" placeholder="Numero Telefonico Del Cliente" value= "" required />
          </div>
          <div className="data-form-input">
            <label>Modelo</label>
              <input
                type="text" placeholder="Modelo del Telefono" value= "" required />
          </div>
          <div className="data-form-input">
            <label>Descripcion</label>
              <input
                type="text" placeholder="Descripcion de la reparacion" value= "" required />
          </div>
          <div className="data-form-input">
            <label>Costo Reparacion</label>
              <input
                type="text" placeholder="Costo de la Reparacion" value= "" required />
          </div>
          <div className="data-form-input">
            <AddButton>
              Guardar
            </AddButton>
          </div>
        </div>
      </div>

    </AddS>
  )
}

export default Add