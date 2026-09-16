import './App.css';
import freecodecamp from './assets/freecodecamp.svg'
import ListaTareas from './components/ListaTareas';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='freecodecamp-logo-contenedor'>
        <img
          src={freecodecamp}
          className='freecodecamp-logo' />
      </div>
      <div className='tareas-lista-principal'>
        <ListaTareas/>
      </div>
    </div>
  );
}

export default App;
