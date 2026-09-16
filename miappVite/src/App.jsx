import "./App.css";
import Counter from "./components/Counter";
import InputTarget from "./components/InputTarget";
import ItemListContainer from "./components/ItemListContainer";
import Text from "./components/Text";

function App() {
  return (
    <>
      {/* Programa para contar */}
      <Counter />
      <hr></hr>

      {/* Programa para ocultar/mostrar texto en pantalla */}
      <Text />
      <hr></hr>

      {/* Programa para mostrar en pantalla lo que se escribe en el input */}
      <InputTarget />
      <hr />

      {/* Programa ppara mostrar un grupo de productos */}
      <ItemListContainer />
    </>
  );
}

export default App;
