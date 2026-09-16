import React from 'react';
import '../styleheets/Testimonio.css';


function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img
        className='imagen-testimonio'
        src={require(`../assets/Testimonio-${props.imagen}.png`)}
        alt={`Foto de ${props.nombre}`}
      />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'><b>{props.nombre}</b> en {props.pais}</p>
        <p className='cargo-testimonio'>{props.cargo} en <b>{props.empresa}</b></p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonio;