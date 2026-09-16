import { useEffect } from "react";

const TextContent = () => {
  useEffect(() => {
    console.log("¡El texto acaba de aparecer en pantalla!");
		
		
		return()=>{
			console.log("¡El texto acaba de desaparecer de la pantalla!");
		}
  }, []); // <--- Se ejecuta solo cuando TextContent SE MONTA en el DOM

  return <h2>Soy el texto que se oculta y que se muestra pero con useEffect</h2>;
};
export default TextContent;
