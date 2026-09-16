import React from "react";
import '../stylesheet/Boton.css';

function Boton(props) 
{

  let esOperador = valor =>{
    return  isNaN(valor) && (valor!=='.') && (valor!=='=');
  }

    return (
        <div
        className = {`boton-contenedor ${esOperador(props.children)? 'operador': ''}`.trimEnd()}
        onClick = {()=> props.manejarClick(props.children)}>
          {props.children}
        </div>
    );
}

export default Boton;