import { useState, useEffect} from "react";

const InputTarget = () => {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  useEffect(() => {console.log("El texto está cambiando")}, [text]); // <--- Se ejecuta cada vez que el valor de text CAMBIA

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <h2>{text}</h2>
    </div>
  );
};

export default InputTarget;
