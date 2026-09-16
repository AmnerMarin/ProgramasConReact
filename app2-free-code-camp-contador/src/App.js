import logo from './logo.svg';
import './App.css';
import freecodecampLogo from './assets/freecodecamp.svg';
import Boton from './components/Boton';
import Contador from './components/Contador';
import {useState} from 'react';

function App() {
  
  const [clicks, setClicks] = useState(0);

  const manejarClick = () => {
    setClicks(clicks + 1);
  }
  const reiniciarContador = () => {
    setClicks(0);
  }


  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className='freecodecamp-logo'
          src={freecodecampLogo}
          alt='Logo de freeCodeCamp'
        />
      </div>
      <div className="contenedor-principal">
        <Contador
          numeroClicks={clicks}
        ></Contador>
        <Boton
          texto="Click"
          esBotonDeClick={true}
          manejarClick={manejarClick}
        />

        <Boton
          texto="Reiniciar"
          esBotonDeClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
