import React from 'react';
import '../stylesheets/Contador.css';

function Contador( props ) {
  return (
    <div
      className="contador">
        {props.numeroClicks}
    </div>
  );
}

export default Contador;