import React from 'react';
import '../styleheets/Testimonio.css';


class Testimonio extends React.Component{
  render(){
      return (
    <div className='contenedor-testimonio'>
      <img
        className='imagen-testimonio'
        src={require(`../assets/Testimonio-${this.props.imagen}.png`)}
        alt={`Foto de ${this.props.nombre}`}
      />|
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'><b>{this.props.nombre}</b> en {this.props.pais}</p>
        <p className='cargo-testimonio'>{this.props.cargo} en <b>{this.props.empresa}</b></p>
        <p className='texto-testimonio'>{this.props.testimonio}</p>
      </div>
    </div>
  );
  }
}

// function Testimonio(props) {
//   return (
//     <div className='contenedor-testimonio'>
//       <img
//         className='imagen-testimonio'
//         src={require(`../assets/Testimonio-${props.imagen}.png`)}
//         alt={`Foto de ${props.nombre}`}
//       />
//       <div className='contenedor-texto-testimonio'>
//         <p className='nombre-testimonio'><b>{props.nombre}</b> en {props.pais}</p>
//         <p className='cargo-testimonio'>{props.cargo} en <b>{props.empresa}</b></p>
//         <p className='texto-testimonio'>"{props.testimonio}"</p>
//       </div>
//     </div>
//   );
// }

export default Testimonio;