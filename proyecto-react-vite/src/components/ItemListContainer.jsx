import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

import { collection, getDocs, query, where } from "firebase/firestore";

import { db } from "../firebase/config";

function ItemListContainer() {

  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("");
  const categoria = useParams().categoria;
  console.log(categoria);
  useEffect(() => {

    // pedirDatos()
    //   .then((res) => {
    //     if (categoria) {
    //       setProductos(res.filter((p) => p.categoria === categoria));
    //       setTitulo(categoria);
    //     } else {
    //       setTitulo("productos");
    //       setProductos(res);
    //     }
    //   });
    const productosRef = collection(db, "productos");
    const q = categoria ? query(collection(db, "productos"), where("categoria", "==", categoria)) : productosRef;

    getDocs(q)
      .then((res) => {
        setProductos(
          res.docs.map((doc) => { return { ...doc.data(), id: doc.id } })
        );
      })

  }, [categoria]);

  return (
    <div>
      <ItemList productos={productos} categoria={titulo} />
    </div>
  );
}

export default ItemListContainer;