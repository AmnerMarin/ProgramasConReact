import './App.css';
import Testimonio from './componentes/Testimonio';
import testimonios from './data/testimonios';

import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="contenedor-principal">

          <h1>
            Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp:
          </h1>

          {
            testimonios.map((persona) => (
              <Testimonio
                nombre={persona.nombre}
                pais={persona.pais}
                cargo={persona.cargo}
                empresa={persona.empresa}
                imagen={persona.imagen}
                testimonio={persona.testimonio}
              />
            ))
          }

        </div>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <div className="contenedor-principal">

//         <h1>
//           Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp:
//         </h1>

//         {
//           testimonios.map((persona) => (
//             <Testimonio
//               nombre={persona.nombre}
//               pais={persona.pais}
//               cargo={persona.cargo}
//               empresa={persona.empresa}
//               imagen={persona.imagen}
//               testimonio={persona.testimonio}
//             />
//           ))
//         }

//       </div>
//     </div>
//   );
// }

export default App;