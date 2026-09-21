import { use, useEffect, useState } from "react";
import { pedirDatos } from "../helpers/pedirDatos";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer() {

  const [productos, setProductos] = useState([]);
  const [titulo,setTitulo] = useState("");
  const categoria = useParams().categoria;
  console.log(categoria);
  useEffect(() => {

    pedirDatos()
      .then((res) => {
        if (categoria) {
          setProductos(res.filter((p) => p.categoria === categoria));
          setTitulo(categoria);
        } else {
          setTitulo("productos");
          setProductos(res);
        }
      });

  }, [categoria]);

  return (
    <div>
      <ItemList productos={productos} categoria={titulo} />
    </div>
  );
}

export default ItemListContainer;