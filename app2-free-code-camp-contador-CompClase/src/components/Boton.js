import React from 'react';
import '../stylesheets/Boton.css';


class Boton extends React.Component {
  render() {
    return (
      <button
        className={this.props.esBotonDeClick ? 'boton-click' : 'boton-reiniciar'}
        onClick={this.props.manejarClick}>
        {this.props.texto}
      </button>
    );
  }
}

// function Boton({ texto, esBotonDeClick, manejarClick }) {
//   return (
//     <button
//       className={esBotonDeClick ? 'boton-click' : 'boton-reiniciar'}
//       onClick={manejarClick}>
//       {texto}
//     </button>
//   );
// }

export default Boton;