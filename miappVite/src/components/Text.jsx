import { useState, useEffect } from "react";
import TextContent from "./TextContentUseEffect";

const Text = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToogleText = () => {
    setIsVisible(!isVisible);
  };


  return (
    <>
      <button onClick={handleToogleText}>
        {isVisible ? "Ocultar" : "Mostrar"} Texto
      </button>
      {isVisible && <h2>Soy el texto que se oculta y que se muestra</h2>}

      {isVisible && <TextContent />}
    </>
  );
};

export default Text;
