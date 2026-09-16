import React from 'react';
import '../stylesheets/Contador.css';

class Contador extends React.Component {
  render() {
    return (
      <div
        className="contador">
        {this.props.numeroClicks}
      </div>
    );
  }
  }

// function Contador(props) {
//   return (
//     <div
//       className="contador">
//       {props.numeroClicks}
//     </div>
//   );
// }

export default Contador;