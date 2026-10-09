import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

function ItemDetail({ item }) {


    const { carrito, agregarAlCarrito } = useContext(CartContext);

    const [cantidad, setCantidad] = useState(1);

    console.log(carrito);


    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1);
    }

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1);
    }


    return (
        <div className="container">
            <div className="producto-detalle">
                <img src={item.imagen} alt={item.titulo} />
                <div>
                    <h4 className="titulo">{item.titulo}</h4>
                    <p className="descipcion">{item.descripcion}</p>
                    <p className="categoria">Categoria: {item.categoria}</p>
                    <p className="precio">Precio: ${item.precio}</p>
                </div>
            </div>
            <ItemCount
                cantidad={cantidad}
                handleSumar={handleSumar}
                handleRestar={handleRestar}
                handleAgregar={() => {
                    agregarAlCarrito(item, cantidad);
                }} />
        </div>
    );
}

export default ItemDetail;