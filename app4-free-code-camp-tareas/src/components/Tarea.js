import React from 'react';
import '../stylesheet/Tarea.css'
import { AiOutlineCloseCircle } from "react-icons/ai";


export default function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div
        onClick={() => completarTarea(id)} //Cuando se presione sobre la tarea se marcará como completada o no completada por el id
        className='tarea-texto'>
        {texto}
      </div>
      <div
        className='tarea-contenedor-iconos'
        onClick={()=>eliminarTarea(id)}>
        < AiOutlineCloseCircle className='tarea-icono' />
      </div>
    </div>
  )
}