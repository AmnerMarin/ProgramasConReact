import { useEffect, useState } from "react";
import pedirProductos from "../functions/pedirProductos.js";
import ItemList from "./ItemList.jsx";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    pedirProductos()
      .then((res) => {
        setProductos(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>Productos</h2>
      {productos.length > 0 && (
        <div>
          <ItemList productos={productos} />
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
