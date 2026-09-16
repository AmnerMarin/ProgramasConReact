import './App.css';
import Boton from './components/Boton';
import Pantalla from './components/Pantalla';
import BotonClear from './components/BotonClear';
import LogoFreeCodeCamp from './components/LogoFreeCodeCamp'
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {
  const [input, setInput] = useState('');

  const agregarInput = (val) => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if (input) {
      if (input.startsWith('*') ||
        input.startsWith('-') ||
        input.startsWith('+') ||
        input.startsWith('/') ||
        input.endsWith('*') ||
        input.endsWith('-') ||
        input.endsWith('+') ||
        input.endsWith('/')
      ) {
        alert("Ingrese una expresión válida");
      } else {
        for (let i = 0; i < input.length - 1; i++) {
          if (isNaN(input[i])) {
            if (isNaN(input[i + 1])) {
              alert("Expresión inválida");
              return;
            }
          }
        }
        setInput(evaluate(input));

      }
    } else
      alert("Por favor ingrese valores para realizar los cálculos");
  }


  return (
    <div className="App">
      <LogoFreeCodeCamp></LogoFreeCodeCamp>
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
